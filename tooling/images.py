import fitz, re, json, os

PDF = '/root/.claude/uploads/70d1b809-43fd-520c-81a4-3de6c72e5c32/cb3378c7-cuestionario_clase_b__.pdf'
doc = fitz.open(PDF)
OUT='public/images'
os.makedirs(OUT, exist_ok=True)

# For each page, find question-number markers with their y position, and images with y position.
# Map each image to the question whose marker y is the largest <= image top y (started above image).
qmarker_re = re.compile(r'^(\d+)\s*\.?\-?\s*$')
qinline_re = re.compile(r'^(\d+)\s*\.\-?\s+\S')

# global last-seen question carrying across pages
page_question_markers = {}  # page -> list of (y, num)
for pno, page in enumerate(doc):
    d = page.get_text("dict")
    marks=[]
    for b in d['blocks']:
        if b.get('type',0)!=0: continue
        for line in b.get('lines',[]):
            txt = "".join(s['text'] for s in line['spans']).strip()
            y = line['bbox'][1]
            m = qmarker_re.match(txt) or qinline_re.match(txt)
            if m:
                marks.append((y, int(m.group(1))))
    marks.sort()
    page_question_markers[pno]=marks

# carry: question active at top of each page = last question number from previous pages
def last_q_before_page(pno):
    best=None
    for p in range(pno):
        if page_question_markers[p]:
            best=page_question_markers[p][-1][1]
    return best

mapping = {}  # qnum -> list of saved filenames
img_index = 0
for pno, page in enumerate(doc):
    infos = page.get_image_info(xrefs=True)
    if not infos: continue
    marks = page_question_markers[pno]
    carry = last_q_before_page(pno)
    for info in infos:
        xref = info.get('xref',0)
        bbox = info['bbox']
        w = bbox[2]-bbox[0]; h=bbox[3]-bbox[1]
        if w<20 or h<20:  # skip tiny
            continue
        ytop = bbox[1]
        # find question marker with largest y <= ytop
        cand = carry
        for (y,num) in marks:
            if y <= ytop + 5:
                cand = num
            else:
                break
        if cand is None: 
            continue
        # extract pixmap
        try:
            pix = fitz.Pixmap(doc, xref)
            if pix.n - pix.alpha >= 4:
                pix = fitz.Pixmap(fitz.csRGB, pix)
            fname = f"q{cand}_{len([x for x in mapping.get(cand,[])])}.png"
            pix.save(os.path.join(OUT, fname))
            mapping.setdefault(cand,[]).append(fname)
            img_index+=1
        except Exception as e:
            print("err", pno, xref, e)

print("Total images saved:", img_index)
print("Questions with images:", sorted(mapping.keys()))
json.dump(mapping, open('tooling/out/image_map.json','w'), ensure_ascii=False, indent=1)
