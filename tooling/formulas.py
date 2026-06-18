import json
qs=json.load(open('tooling/out/questions_final.json'))
F={
 36:"Al duplicar la velocidad:\n• Distancia de REACCIÓN: proporcional a la velocidad (∝ v) → se duplica: 10 m × 2 = 20 m.\n• Distancia de FRENADO: proporcional al cuadrado de la velocidad (energía cinética E = ½·m·v²) → se cuadruplica: 8 m × 4 = 32 m.\n• Total = 20 + 32 = 52 m.",
 37:"Energía cinética: E = ½·m·v². Si la velocidad se duplica (30→60 km/h), v² se multiplica por 4 → la energía se CUADRUPLICA (por eso 'se duplica la energía cinética' es FALSA).\n• Distancia de reacción ∝ v → se duplica.\n• Distancia de frenado ∝ v² → se cuadruplica.",
 41:"Distancia de detención = reacción + frenado. (Recuerda: m/s = km/h ÷ 3,6)\n• Reacción (1 s a 50 km/h): 50 ÷ 3,6 ≈ 13,9 m.\n• Frenado en seco a 50 km/h ≈ 13–16 m.\n• Total ≈ 27–30 m → ~30 m.",
 42:"A 90 km/h en asfalto seco (m/s = km/h ÷ 3,6):\n• Reacción (1 s): 90 ÷ 3,6 = 25 m.\n• Frenado ≈ 45 m.\n• Total ≈ 70 m.",
 43:"A 70 km/h en seco (m/s = km/h ÷ 3,6):\n• Reacción (1 s): 70 ÷ 3,6 ≈ 19,4 m.\n• Frenado ≈ 25 m.\n• Total ≈ 45 m.",
 48:"Distancia de FRENADO (solo frenado, sin reacción) a 90 km/h ≈ 45 m.\nCrece con el cuadrado de la velocidad (∝ v²): si vas al doble, frena en 4 veces la distancia.",
 51:"Distancia de REACCIÓN = velocidad × tiempo de reacción.\nA 70 km/h con 1 s: 70 ÷ 3,6 ≈ 19,4 m ≈ 20 m recorridos ANTES de empezar a frenar.",
 52:"Tiempo de reacción promedio ≈ 1 segundo.\nEn ese segundo recorres v ÷ 3,6 metros (ej. a 90 km/h ≈ 25 m) antes de pisar el freno.",
 96:"Regla de los 3 segundos: elige un punto fijo; cuando el auto de adelante lo pase, cuenta «mil uno, mil dos, mil tres». Si llegas antes de terminar, vas muy cerca.\nEquivale a la distancia que recorres en 3 s (a 100 km/h ≈ 83 m).",
 98:"Distancia mínima de seguridad ≈ distancia de detención total.\nA 90 km/h: reacción (25 m) + frenado (≈ 45–50 m) ≈ 75 m. (También sirve la regla de los 3 segundos.)",
 217:"En hielo el coeficiente de fricción (μ) cae muchísimo. Como la distancia de frenado es inversamente proporcional a μ (∝ 1/μ), puede llegar a ser hasta 10 veces la distancia normal.",
}
n=0
for q in qs:
    if q['id'] in F:
        q['formula']=F[q['id']]; n+=1
json.dump(qs, open('tooling/out/questions_final.json','w'), ensure_ascii=False, indent=1)
print('fórmulas agregadas:',n)
# regen questions.js
with open('src/questions.js','w') as f:
    f.write('// Banco de 280 preguntas del Examen Teorico Clase B (Chile).\n')
    f.write('// Incluye: pregunta, alternativas, clave oficial, explicaciones, imagenes, pagina, categoria y formula (en preguntas de calculo).\n\n')
    f.write('export const questions = '+json.dumps(qs, ensure_ascii=False, indent=2)+';\n\nexport default questions;\n')
print('questions.js regenerado')
