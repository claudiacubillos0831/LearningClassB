import json, glob, os
qs = json.load(open('tooling/out/questions_base.json'))
expl = {}
for f in sorted(glob.glob('tooling/out/expl_*.json')):
    try:
        d = json.load(open(f))
    except Exception as e:
        print("PARSE FAIL", f, e); raise
    expl.update({int(k):v for k,v in d.items()})

problems=[]
for q in qs:
    e = expl.get(q['id'])
    if not e:
        problems.append((q['id'],'MISSING')); 
        q['explanation']=''; q['wrongExplanations']=['']*len(q['options']); continue
    q['explanation']=e.get('explanation','').strip()
    we = e.get('wrongExplanations',[])
    # normalize length
    if len(we)!=len(q['options']):
        problems.append((q['id'],f'LEN {len(we)} vs {len(q["options"])}'))
        # pad/truncate
        we = (we+['']*len(q['options']))[:len(q['options'])]
    # ensure correct positions empty, wrong positions non-empty
    for i in range(len(q['options'])):
        if i in q['correct']:
            we[i]=''
    q['wrongExplanations']=we
    if not q['explanation']:
        problems.append((q['id'],'NO_EXPL'))

print("Problems:", len(problems))
for p in problems[:40]: print(p)

# Final clean object for app
final=[{
  'id':q['id'],'question':q['question'],'options':q['options'],
  'correct':q['correct'],'multi':q['multi'],'images':q['images'],
  'explanation':q['explanation'],'wrongExplanations':q['wrongExplanations']
} for q in qs]
json.dump(final, open('tooling/out/questions_final.json','w'), ensure_ascii=False, indent=1)
print("Final questions:", len(final), "| total images refs:", sum(len(q['images']) for q in final))
