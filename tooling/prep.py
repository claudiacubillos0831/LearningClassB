import json
qs = json.load(open('tooling/out/questions_raw.json'))
imap = json.load(open('tooling/out/image_map.json'))
imap = {int(k):v for k,v in imap.items()}

# Special handling for matching question 242 -> convert to single-choice
for q in qs:
    if q['id']==242:
        q['question']=("Combine cada texto con el número de la señal correcta (ver imagen). "
                        "¿Cuál es la combinación correcta de 'Mantenga su derecha / Pavimento resbaladizo / Curva / No adelantar'?")
        q['options']=[
            "Mantenga su derecha=3, Pavimento resbaladizo=5, Curva=1, No adelantar=4",
            "Mantenga su derecha=1, Pavimento resbaladizo=2, Curva=3, No adelantar=4",
            "Mantenga su derecha=4, Pavimento resbaladizo=3, Curva=2, No adelantar=1",
            "Mantenga su derecha=5, Pavimento resbaladizo=4, Curva=1, No adelantar=3",
        ]
        q['correct']=[0]
        q['match']=None
        q.pop('match',None)
        q['multi']=False

# attach images
for q in qs:
    q['images']=imap.get(q['id'],[])
    q.pop('answerRaw',None)
    q.pop('match',None)

# Validate: every correct index within options range
bad=[q['id'] for q in qs if any(c>=len(q['options']) for c in q['correct']) or not q['correct']]
print("BAD answer index questions:", bad)

json.dump(qs, open('tooling/out/questions_base.json','w'), ensure_ascii=False, indent=1)

# Build batches for explanation generation
import math
BATCH=20
batches=[qs[i:i+BATCH] for i in range(0,len(qs),BATCH)]
print("num batches", len(batches))
for bi,b in enumerate(batches):
    slim=[{'id':q['id'],'question':q['question'],'options':q['options'],
           'correct':q['correct'],'correctLetters':[chr(97+c) for c in q['correct']],
           'multi':q['multi'],'hasImage':bool(q['images'])} for q in b]
    json.dump(slim, open(f'tooling/out/batch_{bi}.json','w'), ensure_ascii=False, indent=1)
print("ids per batch:", [(b[0]['id'],b[-1]['id']) for b in batches])
