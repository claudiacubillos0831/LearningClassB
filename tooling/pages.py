import fitz, re, json
PDF='/root/.claude/uploads/70d1b809-43fd-520c-81a4-3de6c72e5c32/cb3378c7-cuestionario_clase_b__.pdf'
doc=fitz.open(PDF)
qmark=re.compile(r'^\s*(\d+)\s*\.?\-?\s*$')
qinline=re.compile(r'^\s*(\d+)\s*\.\-?\s+\S')
page_of={}
for pno,page in enumerate(doc):  # 0-based
    for ln in page.get_text().split('\n'):
        m=qmark.match(ln) or qinline.match(ln)
        if m:
            n=int(m.group(1))
            if 1<=n<=280 and n not in page_of:
                page_of[n]=pno+1  # 1-based PDF page
# fill any missing by interpolation (shouldn't be needed)
miss=[n for n in range(1,281) if n not in page_of]
print('missing pages for:', miss)
# merge into questions_final
qs=json.load(open('tooling/out/questions_final.json'))
for q in qs:
    q['page']=page_of.get(q['id'])
json.dump(qs, open('tooling/out/questions_final.json','w'), ensure_ascii=False, indent=1)
print('pages range:', min(page_of.values()), '-', max(page_of.values()))
print('sample:', {k:page_of[k] for k in list(range(1,6))+[100,200,280]})
