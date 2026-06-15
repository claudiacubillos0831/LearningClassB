import fitz, re, json, os
PDF='/root/.claude/uploads/70d1b809-43fd-520c-81a4-3de6c72e5c32/cb3378c7-cuestionario_clase_b__.pdf'
doc=fitz.open(PDF)
text="\n".join(p.get_text() for p in doc)
qpart,_,anspart=text.partition('RESPUESTAS')

# answer key
answers={}
for m in re.finditer(r'^\s*(\d+)\.\s*([a-f0-9,\s]+)\s*$', anspart, re.M):
    answers[int(m.group(1))]=m.group(2).strip()

lines=qpart.split('\n')
qmark=re.compile(r'^(\d+)\s*\.?\-?\s*$')
qinline=re.compile(r'^(\d+)\s*\.\-?\s+(\S.*)$')
start_map={}
for idx,ln in enumerate(lines):
    s=ln.strip()
    m=qmark.match(s)
    if m and int(m.group(1)) not in start_map:
        start_map[int(m.group(1))]=(idx,None)
for idx,ln in enumerate(lines):
    m=qinline.match(ln.strip())
    if m and len(m.group(2))>3 and int(m.group(1)) not in start_map:
        start_map[int(m.group(1))]=(idx,m.group(2))

nums=sorted(start_map)
optmark=re.compile(r'^\s*([a-f])\s?\)\s*(.*)$')
questions=[]
for j,num in enumerate(nums):
    si,inline=start_map[num]
    ei=start_map[nums[j+1]][0] if j+1<len(nums) else len(lines)
    block=lines[si:ei]
    block = ([inline]+block[1:]) if inline else block[1:]
    # find Marque line index
    stem_lines=[]; opt_start=None
    for k,ln in enumerate(block):
        if re.search(r'Marque', ln):
            opt_start=k+1; break
        stem_lines.append(ln)
    rest = block[opt_start:] if opt_start is not None else []
    stem=" ".join(" ".join(stem_lines).split())
    # line-based option parsing
    opts=[]; cur=None
    for ln in rest:
        m=optmark.match(ln)
        if m:
            if cur is not None: opts.append(cur)
            cur=m.group(2)
        else:
            if cur is not None:
                cur=(cur+" "+ln).strip()
    if cur is not None: opts.append(cur)
    opts=[" ".join(o.split()) for o in opts]
    questions.append({'id':num,'question':stem,'options':opts,'answerRaw':answers.get(num,'')})

# map answers to indices
for q in questions:
    raw=q['answerRaw']
    if re.search(r'[a-f]\d', raw):
        q['correct']=[]; q['match']=raw
    else:
        idxs=sorted(set(ord(p.strip()[0])-97 for p in re.split(r'[,\s]+',raw) if p.strip() and p.strip()[0] in 'abcdef'))
        q['correct']=idxs
    q['multi']=len(q['correct'])>1

json.dump(questions, open('tooling/out/questions_raw2.json','w'), ensure_ascii=False, indent=1)

# Compare with current
cur={q['id']:q for q in json.load(open('tooling/out/questions_final.json'))}
changed=[]
for q in questions:
    c=cur[q['id']]
    if q['options']!=c['options']:
        changed.append(q['id'])
print('Total questions:', len(questions))
print('Changed option sets:', len(changed))
print(changed)
# validate no bad options now
bad=[]
for q in questions:
    for i,o in enumerate(q['options']):
        if not re.search(r'[a-zA-Z0-9áéíóúñ]', o):
            bad.append((q['id'],i,o))
    if any(c>=len(q['options']) for c in q['correct']) or (not q['correct'] and 'match' not in q):
        bad.append((q['id'],'IDX',q['correct'],len(q['options'])))
print('Bad now:', bad)
