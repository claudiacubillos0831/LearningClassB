import fitz, re, json, os

PDF = '/root/.claude/uploads/70d1b809-43fd-520c-81a4-3de6c72e5c32/cb3378c7-cuestionario_clase_b__.pdf'
doc = fitz.open(PDF)

# 1) Build a linear text with page markers but also keep per-page block positions for images
full_lines = []
for i, page in enumerate(doc):
    for ln in page.get_text().split('\n'):
        full_lines.append(ln)

text = "\n".join(full_lines)

# Cut off at RESPUESTAS
qpart, _, anspart = text.partition('RESPUESTAS')

# 2) Parse answer key
answers = {}
for m in re.finditer(r'^\s*(\d+)\.\s*([a-f0-9,\s]+)\s*$', anspart, re.M):
    num = int(m.group(1))
    raw = m.group(2).strip()
    answers[num] = raw

print("Answer key entries:", len(answers))

# 3) Parse questions. Questions start with a line that is just a number optionally followed by . - etc
lines = qpart.split('\n')
# find indices where a question starts: line matches ^\s*NUM\s*[.\-]?\s*$  (number possibly with trailing . or .- )
q_starts = []
for idx, ln in enumerate(lines):
    s = ln.strip()
    m = re.match(r'^(\d+)\s*\.?\-?\s*$', s)
    if m:
        num = int(m.group(1))
        # plausible question number range and sequential
        q_starts.append((idx, num))
# also handle "258 .- ¿Qué significa esta señal?" inline
inline = []
for idx, ln in enumerate(lines):
    m = re.match(r'^(\d+)\s*\.\-?\s+(\S.*)$', ln.strip())
    if m and len(m.group(2))>3:
        inline.append((idx, int(m.group(1)), m.group(2)))

# Build dict num->start idx, prefer first occurrence
start_map = {}
for idx,num in q_starts:
    if num not in start_map:
        start_map[num]=(idx,None)
for idx,num,rest in inline:
    if num not in start_map:
        start_map[num]=(idx,rest)

nums = sorted(start_map)
print("Question starts found:", len(nums), "range", nums[0], "-", nums[-1])
missing = [n for n in range(1,281) if n not in start_map]
print("Missing question numbers:", missing)

questions = []
for j,num in enumerate(nums):
    start_idx, inline_rest = start_map[num]
    end_idx = start_map[nums[j+1]][0] if j+1 < len(nums) else len(lines)
    block = lines[start_idx:end_idx]
    # remove the number line
    if inline_rest is None:
        block = block[1:]
    else:
        block = [inline_rest] + block[1:]
    # join, split on Marque
    btext = "\n".join(block)
    mm = re.search(r'Marque[^\n]*', btext)
    if mm:
        stem = btext[:mm.start()]
        rest = btext[mm.end():]
    else:
        stem = btext
        rest = ""
    stem = " ".join(stem.split())
    # parse options a) ... f)
    opts = []
    # find option markers
    opt_iter = list(re.finditer(r'([a-f])\s?\)', rest))
    for k,om in enumerate(opt_iter):
        s = om.end()
        e = opt_iter[k+1].start() if k+1<len(opt_iter) else len(rest)
        otext = " ".join(rest[s:e].split())
        opts.append(otext)
    questions.append({'id':num,'question':stem,'options':opts})

# attach answers -> indices
def letters_to_indices(raw, nopts):
    raw=raw.strip()
    if re.search(r'[a-f]\d', raw):  # matching type like a3,b5
        return ('match', raw)
    idxs=[]
    for part in re.split(r'[,\s]+', raw):
        part=part.strip()
        if part and part[0] in 'abcdef':
            idxs.append(ord(part[0])-97)
    return ('idx', sorted(set(idxs)))

for q in questions:
    raw = answers.get(q['id'],'')
    kind, val = letters_to_indices(raw, len(q['options']))
    q['answerRaw']=raw
    if kind=='match':
        q['match']=val
        q['correct']=[]
    else:
        q['correct']=val
    q['multi']= len(q['correct'])>1

# stats
optcounts={}
for q in questions:
    optcounts[len(q['options'])]=optcounts.get(len(q['options']),0)+1
print("Option count distribution:", optcounts)
noopt=[q['id'] for q in questions if len(q['options'])<2]
print("Questions with <2 options:", noopt)
badans=[q['id'] for q in questions if not q['correct'] and 'match' not in q]
print("Questions with no parsed answer:", badans)

os.makedirs('tooling/out',exist_ok=True)
json.dump(questions, open('tooling/out/questions_raw.json','w'), ensure_ascii=False, indent=1)
print("Wrote", len(questions), "questions")
