import json, unicodedata, re
def norm(s):
    s=unicodedata.normalize('NFKD',s)
    return ''.join(c for c in s if not unicodedata.combining(c)).lower()
qs=json.load(open('tooling/out/questions_final.json'))

def cat_of(q):
    t=norm(q['question']+' '+' '.join(q['options']))
    def sub(*ws): return any(w in t for w in ws)
    def word(*ws): return any(re.search(r'\b'+re.escape(w)+r'\b',t) for w in ws)
    # 1. Emergencias y primeros auxilios
    if sub('hemorragia','primeros auxilios','botiquin','herido','heridos','herida','lesionad',
           'estado de shock','ambulancia','casco') or word('133') or \
       (sub('accidente') and sub('socorr','prestar ayuda','ayudar a salir','primer')):
        return 'Emergencias y primeros auxilios'
    # 2. Factores humanos
    if sub('alcohol','trago','licor','bebidas alcoh','bebida alcoh','cansancio','fatiga','somnol',
           'bostez','estres','medicament','remedio','droga','madurez','moral','impulsiv',
           'autoconfianza','sobrestima','presion del grupo','campo visual','ceguera al color',
           'concentracion','tiempo de reaccion','capacidad de reaccion'):
        return 'Factores humanos (alcohol, fatiga, salud)'
    # 3. Vehiculo, mantencion y seguridad pasiva
    if sub('panel de instrumentos','freno de mano','neumatic','presion de aire','presion de los',
           'liquido de freno','liquido refriger','anticongelante','aceite','embrague','caja de cambio',
           'suspension','amortigua','bateria','combustible','gasolina','bencina','estanque','incendio',
           'parrilla','remolque','casa rodante','zigzag','cinturon','air-bag','airbag','bolsa de aire',
           'apoya-cabeza','reposacabeza','seguros de ni','silla de seguridad','guagua','zapatos apropiados',
           'surcos','banda de rodamiento','bandas de rodamiento','sistema de direccion',
           'direccion mas liviana','direccion mas pesada','frenos antibloqueo','frenos abs',
           'consumo de combustible','olor a gasolina'):
        return 'Vehiculo y mantencion'
    # 4. Senales, semaforos y demarcaciones
    if sub('esta senal','la senal','una senal','senal de transito','senales','senaletica','semaforo',
           'rombo','ceda el paso','demarcacion','tachas','tachones','achurad','franjas amarillas',
           'luz roja','luz verde','luz amarilla','linea de detencion',
           ) or word('pare'):
        return 'Senales y semaforos'
    # 5. Leyes, normas y documentos
    if sub('infracci','licencia','seguro obligatorio','soap','carabinero','documento',
           'permiso de circulacion','revision tecnica','registro nacional','prioridad','derecho a via',
           'derecho preferente','preferente de paso','prohibid','estacion','velocidad maxima',
           'no debe exceder','policia','obligacion','gravisima','infraccion grave','multa'):
        return 'Leyes, normas y documentos'
    # 6. Conduccion segura (fallback)
    return 'Conduccion segura'

from collections import Counter
c=Counter(); samples={}
for q in qs:
    cat=cat_of(q); q['category']=cat; c[cat]+=1; samples.setdefault(cat,[]).append(q['id'])
for cat,n in c.most_common():
    print(f'{n:3d}  {cat}   ej: {samples[cat][:10]}')
json.dump(qs, open('tooling/out/questions_final.json','w'), ensure_ascii=False, indent=1)
