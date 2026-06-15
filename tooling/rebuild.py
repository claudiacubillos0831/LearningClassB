import json
raw=[{q['id']:q for q in json.load(open('tooling/out/questions_raw2.json'))}][0]
final={q['id']:q for q in json.load(open('tooling/out/questions_final.json'))}
imap={int(k):v for k,v in json.load(open('tooling/out/image_map.json')).items()}

hand={
 6:{
  "explanation":"El apoya-cabeza (reposacabezas) ajustado a la altura de la nuca evita el latigazo cervical ('efecto whiplash') en una colisión, sobre todo en los choques por detrás. Por eso es el elemento que reduce el riesgo de lesiones de cuello.",
  "wrongExplanations":[
   "El air-bag protege principalmente cabeza y tórax en un impacto frontal; no es lo que evita la lesión de cuello en un alcance por detrás.",
   "Los frenos ABS ayudan a no bloquear las ruedas y mantener el control, pero no protegen el cuello una vez producido el choque.",
   "La columna de dirección colapsable absorbe el impacto protegiendo el tórax del conductor, no el cuello.",
   ""
  ]
 },
 33:{
  "explanation":"El cinturón de seguridad disminuye claramente las posibilidades de sufrir lesiones en un accidente, porque retiene al ocupante y evita que salga despedido o golpee el interior del vehículo. Por eso su uso es obligatorio en todos los asientos.",
  "wrongExplanations":[
   "",
   "Falso: el air-bag es un complemento del cinturón, no un reemplazo; sin cinturón puesto incluso puede causar lesiones.",
   "Falso: en el asiento trasero el cinturón también protege; evita salir despedido y golpear a los ocupantes de adelante.",
   "El cinturón es igual de necesario en ciudad que en carretera; muchos accidentes graves ocurren a velocidades urbanas, así que no es 'más necesario' solo en carretera."
  ]
 },
}

out=[]
for qid in range(1,281):
    if qid==242:
        # usar versión personalizada ya existente (pregunta de combinación)
        q=dict(final[242])
        q['images']=imap.get(242,[])
        out.append({k:q[k] for k in ['id','question','options','correct','multi','images','explanation','wrongExplanations']})
        continue
    r=raw[qid]
    item={'id':qid,'question':r['question'],'options':r['options'],
          'correct':r['correct'],'multi':r['multi'],'images':imap.get(qid,[])}
    if qid in hand:
        item['explanation']=hand[qid]['explanation']
        item['wrongExplanations']=hand[qid]['wrongExplanations']
    else:
        item['explanation']=final[qid]['explanation']
        item['wrongExplanations']=final[qid]['wrongExplanations']
    out.append(item)

# validate
import re
prob=[]
for q in out:
    if len(q['wrongExplanations'])!=len(q['options']): prob.append((q['id'],'LEN'))
    for i in q['correct']:
        if q['wrongExplanations'][i]!='': prob.append((q['id'],'CORR_NOT_EMPTY',i))
    for i,o in enumerate(q['options']):
        if not re.search(r'[A-Za-z0-9áéíóúñÁÉÍÓÚÑ]', o): prob.append((q['id'],'BADOPT',i))
    if not q['explanation']: prob.append((q['id'],'NOEXPL'))
print('Problems:',prob)
json.dump(out, open('tooling/out/questions_final.json','w'), ensure_ascii=False, indent=1)
print('Rebuilt',len(out),'questions OK')
