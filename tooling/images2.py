import fitz, re, json, os, glob
PDF = '/root/.claude/uploads/70d1b809-43fd-520c-81a4-3de6c72e5c32/cb3378c7-cuestionario_clase_b__.pdf'
doc = fitz.open(PDF)
OUT='public/images'
for f in glob.glob(OUT+'/*.png'): os.remove(f)
os.makedirs(OUT, exist_ok=True)

qmarker_re = re.compile(r'^(\d+)\s*\.?\-?\s*$')
qinline_re = re.compile(r'^(\d+)\s*\.\-?\s+\S')
page_marks={}
for pno,page in enumerate(doc):
    d=page.get_text("dict"); marks=[]
    for b in d['blocks']:
        if b.get('type',0)!=0: continue
        for line in b.get('lines',[]):
            txt="".join(s['text'] for s in line['spans']).strip()
            m=qmarker_re.match(txt) or qinline_re.match(txt)
            if m: marks.append((line['bbox'][1], int(m.group(1))))
    marks.sort(); page_marks[pno]=marks

def last_q_before(pno):
    best=None
    for p in range(pno):
        if page_marks[p]: best=page_marks[p][-1][1]
    return best

mapping={}; total=0
ZOOM=3.0
for pno,page in enumerate(doc):
    infos=page.get_image_info(xrefs=True)
    if not infos: continue
    marks=page_marks[pno]; carry=last_q_before(pno)
    # merge overlapping image bboxes that belong together? keep separate
    for info in infos:
        bbox=fitz.Rect(info['bbox'])
        if bbox.width<20 or bbox.height<20: continue
        ytop=bbox.y0
        cand=carry
        for (y,num) in marks:
            if y<=ytop+5: cand=num
            else: break
        if cand is None: continue
        # render clipped region (with small pad) preserving orientation
        clip=fitz.Rect(bbox.x0-2,bbox.y0-2,bbox.x1+2,bbox.y1+2)
        pix=page.get_pixmap(matrix=fitz.Matrix(ZOOM,ZOOM), clip=clip)
        idx=len(mapping.get(cand,[]))
        fname=f"q{cand}_{idx}.png"
        pix.save(os.path.join(OUT,fname))
        mapping.setdefault(cand,[]).append(fname)
        total+=1

# Remove false-positive text-only questions if accidentally captured: none here since position-based
print("rendered",total,"questions:",sorted(int(k) for k in mapping))
json.dump(mapping, open('tooling/out/image_map.json','w'), ensure_ascii=False, indent=1)
