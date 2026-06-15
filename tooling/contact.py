import os, json
from PIL import Image, ImageDraw, ImageFont
imap = json.load(open('tooling/out/image_map.json'))
OUT='public/images'
items=[]
for qid in sorted(imap, key=lambda x:int(x)):
    for f in imap[qid]:
        items.append((int(qid), f))
cols=6
cell=200
rows=(len(items)+cols-1)//cols
sheet=Image.new('RGB',(cols*cell, rows*cell),(240,240,240))
d=ImageDraw.Draw(sheet)
for i,(qid,f) in enumerate(items):
    try:
        im=Image.open(os.path.join(OUT,f)).convert('RGB')
    except: continue
    im.thumbnail((cell-10,cell-30))
    x=(i%cols)*cell; y=(i//cols)*cell
    sheet.paste(im,(x+5,y+25))
    d.rectangle([x,y,x+cell-1,y+cell-1],outline=(0,0,0))
    d.text((x+4,y+4),f"Q{qid}: {f}",fill=(200,0,0))
sheet.save('tooling/out/contact.png')
print("rows",rows,"items",len(items))
