import json, re
qs = json.load(open('tooling/out/questions_raw.json'))
imap = json.load(open('tooling/out/image_map.json'))
mapped = set(int(k) for k in imap)

kw = re.compile(r'(esta señal|esta luz|esta demarcaci|el dibujo|la figura|la fotograf|las fotograf|la flecha|muestra la|secuencia|con el brazo|Combine|señalizaci[oó]n con|estas señales|estos l[ií]quidos|el camión|la señal que|indicad[oa] con|achurada|tachas|el auto azul|auto rojo|este momento|esta situaci|esta ocasi|esta señal|el conductor del auto|¿Hacia dónde|peligro al que|riesgos? debe)', re.I)
# also letter-option questions (a)A b)B ...)
def is_letter_opts(q):
    return all(len(o)<=2 and o.strip().upper() in list("ABCD") for o in q['options']) and len(q['options'])>=2

kw_q = []
for q in qs:
    letter = is_letter_opts(q)
    if kw.search(q['question']) or letter:
        kw_q.append((q['id'], letter, q['question'][:60]))

kwset = set(x[0] for x in kw_q)
print("Keyword/letter image-questions:", sorted(kwset))
print()
print("Need image (keyword) but NOT mapped:", sorted(kwset - mapped))
print()
print("Mapped but NOT keyword-detected:", sorted(mapped - kwset))
print()
for qid,letter,txt in kw_q:
    star = "IMG" if qid in mapped else "   "
    print(f"{star} {qid:3d} {'L' if letter else ' '} {txt}")
