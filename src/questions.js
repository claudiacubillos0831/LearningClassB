// Banco de 280 preguntas del Examen Teorico Clase B (Chile).
// Campos: pregunta, alternativas, clave oficial, explicacion (corta), deepExplanation (ampliada para el buscador), wrongExplanations, imagenes, pagina, categoria y formula.

export const questions = [
  {
    "id": 1,
    "question": "Su vehículo se desvía hacia un lado cuando usted frena. Usted debería:",
    "options": [
      "Cambiar los neumáticos de un lado hacia el otro y viceversa.",
      "Bombear el pedal al frenar.",
      "Usar su freno de mano.",
      "Consultar con su mecánico lo antes posible."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Cuando el vehículo se desvía hacia un lado al frenar, hay un problema mecánico de fondo (frenos desajustados, presiones distintas en el sistema, neumáticos disparejos, etc.) que usted no puede ni debe diagnosticar a ojo. Lo correcto y seguro es consultar con su mecánico lo antes posible para que detecte y repare la causa real.",
    "wrongExplanations": [
      "Rotar los neumáticos no corrige un sistema de frenos desajustado y puede enmascarar la falla, manteniendo el riesgo.",
      "Bombear el pedal sirve en frenos sin ABS para evitar el bloqueo, pero no soluciona la desviación al frenar.",
      "El freno de mano actúa sólo sobre el eje trasero y no sirve para frenadas normales; puede provocar un derrape.",
      ""
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Cuando un vehículo se va hacia un costado al frenar, el sistema de frenos no está aplicando la misma fuerza en ambas ruedas del eje, y eso siempre responde a una falla mecánica concreta: cilindros desgastados, pinzas pegadas, mangueras dañadas o un desbalance de presión en el circuito hidráulico. El fundamento es que el frenado debe ser simétrico para que el auto se detenga en línea recta; si una rueda muerde más que la otra, el vehículo gira hacia el lado que frena con más fuerza. Ninguna de las maniobras de manejo que se ofrecen corrige el problema de raíz: cambiar los neumáticos de lado, bombear el pedal o tirar el freno de mano solo enmascaran o agravan la situación. El riesgo real es perder el control justo en la maniobra crítica de detención, por ejemplo al frenar de emergencia frente a un peatón, donde el auto se desviaría hacia otro carril. Por eso la única respuesta segura y responsable es acudir al mecánico cuanto antes para diagnosticar y reparar la causa. Un buen truco para recordarlo: si el problema aparece solo al frenar, es del sistema de frenos, y eso es trabajo de taller, no de la carretera."
  },
  {
    "id": 2,
    "question": "Su vehículo se desvía hacia un lado cuando usted frena. ¿Cuál es la falla más probable?",
    "options": [
      "Un bajo nivel del líquido de frenos.",
      "Su freno de mano está todavía puesto.",
      "Frenos mal ajustados.",
      "Neumáticos con presión de aire inadecuada."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Que el vehículo se desvíe hacia un lado al frenar indica que los frenos no actúan con la misma fuerza en ambas ruedas. Esto ocurre típicamente cuando los frenos están mal ajustados, por lo que una rueda frena más que la otra y tira el auto hacia ese costado.",
    "wrongExplanations": [
      "Un bajo nivel de líquido de frenos reduce la eficacia general del frenado, pero no provoca por sí solo la desviación hacia un lado.",
      "Si el freno de mano quedara puesto el vehículo frenaría o se calentaría atrás, pero no es la causa típica de desviarse al pisar el pedal.",
      "",
      "Una presión inadecuada afecta el agarre y el desgaste, pero la causa más probable de desviarse al frenar es el desajuste de los frenos."
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Aquí la pregunta pide la causa técnica más probable de esa desviación lateral al frenar, y la respuesta son los frenos mal ajustados. El razonamiento es de física simple: si la rueda izquierda recibe más presión de frenado que la derecha, se genera una fuerza desigual que tira el morro del auto hacia el lado que frena más fuerte, igual que cuando rema más fuerte con un solo brazo y el bote gira. Conviene descartar las otras opciones para entender por qué no calzan: un bajo nivel de líquido de frenos haría que el pedal se sienta esponjoso o se hunda, pero afecta a todo el circuito por igual; el freno de mano puesto produce roce y olor, no una desviación al pisar el pedal; y una presión dispar de neumáticos influye más en el rodaje general que en una tirada brusca al frenar. El riesgo de los frenos descompensados es que en una frenada fuerte el vehículo se cruce o invada el carril contrario. Para recordarlo, asocie 'desviación al frenar igual a frenos disparejos', que en la práctica significa ajuste o revisión de frenos en el taller."
  },
  {
    "id": 3,
    "question": "Mientras conduce usted siente un fuerte olor a gasolina. ¿Qué debería hacer usted?",
    "options": [
      "No preocuparse, ya que sólo son los gases de escape.",
      "Continuar a una velocidad reducida.",
      "Continuar porque sabe que se detendrá algunos kilómetros más allá.",
      "Detenerse e investigar el problema."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Un fuerte olor a gasolina puede indicar una fuga de combustible, lo que representa un grave riesgo de incendio o explosión. Por seguridad debe detenerse en un lugar seguro e investigar el problema antes de seguir conduciendo.",
    "wrongExplanations": [
      "El olor a gasolina no corresponde a los gases de escape; ignorarlo puede ser muy peligroso por riesgo de incendio.",
      "Continuar, aunque sea despacio, mantiene el riesgo de incendio si hay una fuga de combustible.",
      "Seguir conduciendo con olor a gasolina expone a un incendio; no es algo que se resuelva avanzando unos kilómetros.",
      ""
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Un olor fuerte y persistente a gasolina mientras maneja es una señal de alarma porque casi siempre indica una fuga en el sistema de combustible: una manguera fisurada, una conexión suelta o el estanque dañado. El fundamento es que la gasolina y sus vapores son altamente inflamables, y basta una chispa eléctrica, una superficie caliente del motor o el tubo de escape para que se inicie un incendio o incluso una explosión. Por eso la conducta correcta es detenerse en un lugar seguro, apagar el motor e investigar el origen antes de continuar; seguir rodando solo aumenta el tiempo de exposición al riesgo y la cantidad de combustible derramado. Las otras opciones son peligrosas: confundirlo con gases de escape, seguir despacio o esperar a quedarse sin bencina ignora una amenaza real de fuego. Piénselo así: el olor a gasolina dentro del auto nunca es normal, y ante la duda, lo barato es detenerse y lo caro es seguir."
  },
  {
    "id": 4,
    "question": "¿Cómo puede prevenir usted el riesgo de incendio de su vehículo?",
    "options": [
      "Manteniendo los niveles de agua sobre el máximo.",
      "Evitando conducir con el estanque lleno de combustible.",
      "Usando gasolina sin plomo.",
      "Revisando su vehículo ante cualquier olor a gasolina extraño."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "El riesgo de incendio se asocia a fugas de combustible, y la gasolina derramada o evaporada se enciende con facilidad. Por eso, revisar el vehículo ante cualquier olor a gasolina extraño permite detectar y corregir una fuga a tiempo, previniendo el incendio.",
    "wrongExplanations": [
      "Mantener el agua sobre el máximo no previene incendios y puede dañar el sistema de refrigeración por sobrellenado.",
      "Conducir con el estanque lleno no aumenta el riesgo de incendio; es una práctica normal y segura.",
      "El tipo de gasolina (con o sin plomo) no es lo que previene un incendio del vehículo.",
      ""
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El riesgo de incendio en un automóvil está directamente ligado al combustible, porque la gasolina derramada o evaporada se enciende con muchísima facilidad ante cualquier chispa o fuente de calor del motor. Por eso la mejor prevención cotidiana es estar atento y revisar el vehículo apenas se perciba un olor a gasolina extraño, ya que ese olor suele ser el primer aviso de una fuga incipiente que aún se puede reparar sin consecuencias graves. Las otras alternativas no atacan la causa: mantener el agua sobre el máximo tiene que ver con la refrigeración, andar con el estanque menos lleno no elimina la posibilidad de fuga, y usar gasolina sin plomo es un tema de emisiones, no de incendios. El principio detrás es la detección temprana: una fuga pequeña detectada a tiempo evita el incendio, mientras que una ignorada puede terminar con el auto envuelto en llamas. Un hábito práctico es prestar atención a manchas húmedas bajo el vehículo al estacionar y al olor al subirse; el olfato suele avisar antes de que ocurra el desastre."
  },
  {
    "id": 5,
    "question": "¿Por qué es importante usar zapatos apropiados cuando conduce?",
    "options": [
      "Para tener un adecuado control de los pedales.",
      "Para evitar el desgaste acelerado de las gomas de los pedales.",
      "Para poder efectuar los cambios de marcha más rápidamente.",
      "Para poder caminar sin problemas en el caso que nec esite solicitar ayuda."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El calzado apropiado permite sentir y dominar bien los pedales (acelerador, freno y embrague), aplicando la presión justa en cada momento. Zapatos inadecuados, como tacos altos o suelas muy gruesas, pueden resbalar o trabarse y hacerle perder el control de los pedales.",
    "wrongExplanations": [
      "",
      "El desgaste de las gomas de los pedales no es la razón de seguridad por la que se exige calzado adecuado.",
      "Los cambios de marcha dependen de la técnica y del embrague, no de la rapidez que den los zapatos.",
      "Poder caminar después es secundario; lo esencial es controlar bien los pedales mientras conduce."
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El calzado adecuado es importante porque el conductor maneja los pedales con la sensibilidad de sus pies, y necesita aplicar la presión exacta sobre acelerador, freno y embrague en el momento justo. El fundamento es que la dosificación fina del freno o del embrague depende de sentir el pedal bajo la planta del pie; un calzado inapropiado rompe esa conexión. Zapatos de taco alto pueden trabarse contra la alfombra o impedir apoyar bien el talón, las suelas muy gruesas o pesadas restan tacto, las chalas o sandalias sueltas pueden zafarse y quedar bajo un pedal, y los pies descalzos o con calcetines resbalan. El riesgo concreto es no poder frenar a tiempo o que el pie patine del freno al acelerador en una emergencia. Por eso la respuesta correcta es que el calzado apropiado permite un adecuado control de los pedales. Como dato práctico, muchos conductores llevan un par de zapatos planos y firmes en el auto para cambiárselos antes de manejar."
  },
  {
    "id": 6,
    "question": "En un automóvil, ¿cuál de los siguientes elementos reduce el riesgo de lesiones de cuello en una colisión?",
    "options": [
      "Un asiento dotado de air-bag (bolsa de aire).",
      "Los frenos ABS.",
      "Una columna de dirección colapsable.",
      "Un asiento con apoya-cabeza ajustado en forma apropiada."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "El apoya-cabeza (reposacabezas) ajustado a la altura de la nuca evita el latigazo cervical ('efecto whiplash') en una colisión, sobre todo en los choques por detrás. Por eso es el elemento que reduce el riesgo de lesiones de cuello.",
    "wrongExplanations": [
      "El air-bag protege principalmente cabeza y tórax en un impacto frontal; no es lo que evita la lesión de cuello en un alcance por detrás.",
      "Los frenos ABS ayudan a no bloquear las ruedas y mantener el control, pero no protegen el cuello una vez producido el choque.",
      "La columna de dirección colapsable absorbe el impacto protegiendo el tórax del conductor, no el cuello.",
      ""
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El elemento que protege el cuello en una colisión es el apoya-cabeza o reposacabezas correctamente ajustado, idealmente con su parte central a la altura de la nuca o de la parte superior de las orejas. El fundamento es el llamado efecto latigazo o whiplash: en un choque, sobre todo por detrás, el cuerpo es empujado bruscamente hacia adelante mientras la cabeza, por inercia, se queda atrás y luego se sacude, estirando y dañando las vértebras y músculos cervicales. El apoya-cabeza limita ese desplazamiento hacia atrás de la cabeza y reduce el daño. Las otras opciones protegen, pero de otras cosas: el airbag amortigua el impacto del torso y la cara, los frenos ABS ayudan a no bloquear las ruedas y mantener la dirección, y la columna de dirección colapsable evita que el volante atraviese el pecho del conductor. Un truco útil al subirse a un auto desconocido es ajustar el reposacabezas para que quede a la altura de la coronilla, no del cuello, porque uno demasiado bajo puede incluso empeorar la lesión."
  },
  {
    "id": 7,
    "question": "¿Qué significa esta luz de advertencia en el panel de instrumentos?",
    "options": [
      "Luces neblineras.",
      "Intermitentes de advertencia de peligro.",
      "Luces altas.",
      "Freno de mano puesto."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q7_0.png"
    ],
    "explanation": "El testigo que muestra dos triángulos (o el símbolo intermitente correspondiente) corresponde a las luces intermitentes de advertencia de peligro, que se activan con todas las balizas a la vez. Su parpadeo en el panel indica que ese sistema está encendido.",
    "wrongExplanations": [
      "Las luces neblineras tienen un símbolo distinto, con líneas que cruzan un haz de luz, no el indicador de balizas.",
      "",
      "Las luces altas se indican con un testigo azul de haz recto hacia adelante, no con este símbolo.",
      "El freno de mano puesto se señala con un símbolo de círculo con signo de exclamación o la letra del freno, distinto a éste."
    ],
    "page": 1,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Este testigo del tablero, representado por un triángulo (o dos triángulos), corresponde a las luces intermitentes de advertencia de peligro, conocidas popularmente como balizas o luces de emergencia. El fundamento de su diseño es que, al accionar el botón triangular, se encienden simultáneamente todos los señalizadores de viraje del vehículo, parpadeando a la vez por delante y por detrás para que cualquier conductor note que algo ocurre. Por eso, cuando ese símbolo parpadea en el panel, le confirma que el sistema de emergencia está activado. Conviene no confundirlo con otros testigos: las luces neblineras tienen un símbolo de haz con líneas onduladas, las luces altas se muestran en azul con rayas rectas horizontales, y el freno de mano aparece como un círculo con un signo de exclamación o una P. Saber reconocerlo importa porque dejar las balizas encendidas sin querer puede confundir a los demás, y olvidarlas apagadas tras una emergencia gasta batería; el parpadeo en el tablero es justamente el recordatorio visual de que están operando."
  },
  {
    "id": 8,
    "question": "Es esencial que la presión de los neumáticos sea chequeada regularmente. ¿Cuándo se debe hacer esto?",
    "options": [
      "Después de un viaje largo.",
      "Después de conducir a alta velocidad.",
      "Cuando los neumáticos están fríos.",
      "Cuando los neumáticos están calientes."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La presión de los neumáticos debe medirse en frío, es decir antes de rodar o tras un breve recorrido, porque ese es el valor de referencia que indica el fabricante. Al conducir, el aire se calienta y se expande, dando una lectura más alta que no es la real.",
    "wrongExplanations": [
      "Después de un viaje largo los neumáticos están calientes y la presión aparece elevada por la dilatación del aire.",
      "Tras conducir a alta velocidad el neumático está caliente, lo que falsea la medición.",
      "",
      "Con los neumáticos calientes el aire se ha dilatado y la lectura es mayor que la presión real en frío."
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La presión de los neumáticos debe revisarse con las gomas frías, es decir antes de salir o después de un recorrido muy corto, porque ese es el estado en que el fabricante define el valor de referencia que aparece en el manual o en la etiqueta del marco de la puerta. El fundamento es físico: al rodar, especialmente a alta velocidad o en viajes largos, el roce y la flexión calientan el aire interior, y un gas caliente se expande y aumenta su presión. Si usted mide en caliente, la lectura saldrá varios décimos por encima de la real, y si la ajusta a ese valor, al enfriarse el neumático quedará por debajo de lo recomendado. Por eso medir en caliente y corregir induce a error y termina dejando los neumáticos mal inflados. El riesgo de una presión incorrecta es desgaste irregular, mayor consumo y, sobre todo, menor adherencia. Como truco, revise la presión en la mañana antes del primer viaje del día, o espere unas horas tras manejar para que las gomas se enfríen."
  },
  {
    "id": 9,
    "question": "La presión de los neumáticos debe revisarse:",
    "options": [
      "Cuando los neumáticos están fríos.",
      "Cuando los neumáticos están calientes.",
      "En cualquier momento, porque da igual que los neumáticos es tén fríos o calientes."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La revisión debe hacerse con los neumáticos fríos, porque así se obtiene la presión correcta de referencia del fabricante. Una vez que el auto rueda, el aire se calienta y se expande, entregando una medición más alta que la verdadera.",
    "wrongExplanations": [
      "",
      "Con los neumáticos calientes el aire se dilata y la presión medida resulta mayor que la real.",
      "No da igual: la temperatura cambia la presión, por eso la medición debe hacerse siempre en frío."
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La respuesta correcta es revisar la presión con los neumáticos fríos, y el motivo de fondo es siempre el mismo principio de la física de los gases: el aire encerrado en el neumático se expande al calentarse. Cuando el auto rueda, la fricción con el pavimento y la flexión continua de la goma elevan la temperatura interna, y con ello la presión sube respecto a la que tenía en reposo. Si midiéramos en caliente obtendríamos un número artificialmente alto y, al ajustarlo, dejaríamos el neumático con menos aire del debido una vez enfriado. Por eso la opción de medir indistintamente en frío o en caliente es incorrecta: la diferencia es real y puede ser de varios décimos de bar. Mantener la presión correcta cuida la adherencia, el desgaste parejo y el consumo. El hábito recomendado es chequear en frío, por ejemplo en la primera bencinera del día antes de andar mucho, o usar el dato del fabricante que siempre está dado para neumático frío."
  },
  {
    "id": 10,
    "question": "¿Cuál de estos líquidos, en el caso de estar en un nivel bajo, podría causar un accidente?",
    "options": [
      "El líquido de freno.",
      "El anticongelante.",
      "El agua de la batería.",
      "El líquido refrigerante."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El líquido de freno transmite la fuerza del pedal a las ruedas; si su nivel es bajo, el frenado pierde eficacia o puede fallar por completo, provocando un accidente. Por eso es el fluido cuyo nivel bajo compromete directamente la seguridad.",
    "wrongExplanations": [
      "",
      "Un nivel bajo de anticongelante puede causar sobrecalentamiento del motor, pero no provoca de forma directa un accidente.",
      "Un nivel bajo de agua de la batería afecta su funcionamiento y carga, no la capacidad de frenar o controlar el vehículo.",
      "Un nivel bajo de líquido refrigerante lleva a sobrecalentamiento, pero no a una pérdida directa de control que cause un choque."
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El líquido cuyo nivel bajo puede causar directamente un accidente es el líquido de freno, porque es el corazón del sistema hidráulico que detiene el auto. El fundamento es que al pisar el pedal usted comprime ese líquido, y como los líquidos son prácticamente incompresibles, transmiten esa fuerza por las cañerías hasta las pinzas o cilindros que aprietan las ruedas. Si el nivel está bajo, suele ser por una fuga o por pastillas muy gastadas, y entonces entra aire al circuito; el aire sí se comprime, así que el pedal se hunde, se siente esponjoso y la frenada pierde eficacia o falla por completo. El resultado puede ser quedarse sin frenos justo cuando más los necesita. Las otras opciones afectan al motor o a la refrigeración, problemas serios pero que no comprometen de inmediato la capacidad de detenerse. Por eso, si nota el pedal blando o la luz de freno encendida, deténgase: es la falla que más rápido se transforma en choque."
  },
  {
    "id": 11,
    "question": "Frente a una situación normal, ¿cuál es la forma más segura de frenar?",
    "options": [
      "Frenando fuerte, poniendo la palanca de cambio en neutro y tirando el freno de mano justo antes de detenerse.",
      "Frenando suavemente, presionando el pedal de embrague y tirando el freno de mano justo antes de detenerse.",
      "Poniendo la palanca de cambio en neutro, frenando fuerte y luego soltando el freno justo antes de detenerse.",
      "Frenando suavemente, luego un poco más fuerte cuando comienza a detenerse y después aflojando de a poco el freno antes de detenerse."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La forma más segura es frenar de manera progresiva: comenzar suavemente, aumentar un poco la presión a medida que el vehículo desacelera y aflojar el freno justo antes de detenerse. Así la frenada es controlada, suave y se evitan derrapes o bloqueos.",
    "wrongExplanations": [
      "Frenar fuerte, poner neutro y tirar el freno de mano puede bloquear ruedas y provocar derrape; no es la forma normal de frenar.",
      "Presionar el embrague antes de tiempo y usar el freno de mano para detenerse quita control y puede causar derrapes.",
      "Frenar fuerte con la palanca en neutro reduce el control del vehículo y no es la técnica más segura.",
      ""
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La forma más segura de frenar en condiciones normales es hacerlo de manera progresiva: comenzar con una presión suave, aumentarla un poco a medida que el auto desacelera y luego aflojar el pedal justo antes de la detención total. El fundamento es que una frenada gradual mantiene la adherencia de los neumáticos y reparte la transferencia de peso de forma controlada, evitando que las ruedas se bloqueen o que el vehículo derrape. Aflojar al final logra esa detención suave, sin el cabezazo brusco que se siente cuando uno frena de golpe hasta parar. Las otras alternativas son riesgosas o erradas: poner la palanca en neutro o pisar el embrague mientras frena le quita el freno motor y reduce el control, y tirar el freno de mano en movimiento puede bloquear las ruedas traseras y hacer girar el auto. El freno de mano es para estacionar, no para detener la marcha. Como técnica, piense en la frenada como un apretón firme pero modulado, no como un interruptor de todo o nada; así cuida los pasajeros, el vehículo y su propio control."
  },
  {
    "id": 12,
    "question": "¿Cuándo usaría usted las luces intermitentes de advertencia de peligro?",
    "options": [
      "Cuando esté en pana obstruyendo el tránsito.",
      "Cuando se estacione en doble fila respecto a otro vehículo estacionado junto a la cuneta.",
      "Cuando estacione junto a una cuneta en la que hay línea amarilla pintada.",
      "Cuando sus señalizadores de viraje no estén funcionando."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Las luces intermitentes de advertencia de peligro (balizas) sirven para avisar a los demás conductores cuando su vehículo está detenido obstruyendo el tránsito, por ejemplo en una pana. Así alerta del peligro y previene una colisión por alcance.",
    "wrongExplanations": [
      "",
      "Estacionarse en doble fila es una maniobra indebida; las balizas no autorizan ni justifican esa detención.",
      "Detenerse donde hay línea amarilla está prohibido, y encender las balizas no lo hace permitido.",
      "Si los señalizadores de viraje fallan no se reemplazan con las balizas para indicar el viraje; éstas advierten peligro, no intención de doblar."
    ],
    "page": 2,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Las luces intermitentes de advertencia de peligro, o balizas, se usan cuando su vehículo está detenido obstruyendo el tránsito, típicamente en una pana en plena calzada. El fundamento normativo y de seguridad es que un auto inmóvil en medio del flujo vehicular es un obstáculo inesperado, y los que vienen detrás pueden no alcanzar a reaccionar; al encender las cuatro balizas parpadeando, usted hace visible ese peligro y previene un choque por alcance. Las otras situaciones planteadas no corresponden: estacionarse en doble fila o junto a una línea amarilla son infracciones de estacionamiento que no se legitiman encendiendo las balizas, y si los señalizadores de viraje no funcionan, las balizas tampoco los reemplazan para indicar un giro, porque encienden de ambos lados a la vez. El criterio clave es peligro y detención involuntaria. Recuerde que las balizas avisan 'estoy detenido y soy un riesgo', no 'permiso para estacionar mal'."
  },
  {
    "id": 13,
    "question": "Las luces de advertencia de peligro deberían ser usadas:",
    "options": [
      "Cuando estaciona en doble fila respecto a otro vehículo estacionado junto a la cuneta.",
      "Para advertir a quienes vienen detrás de un peligro que hay más adelante.",
      "Para advertir a quienes vienen detrás suyo que usted pretende virar.",
      "Para advertir a los demás que usted tiene prisa."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Las luces de advertencia de peligro se usan para alertar a quienes vienen detrás de un peligro o de una situación de riesgo más adelante, como una congestión repentina o un vehículo detenido. Su función es prevenir, no señalar maniobras.",
    "wrongExplanations": [
      "Estacionar en doble fila es una maniobra indebida; las balizas no la autorizan.",
      "",
      "Para indicar que va a virar se usan los señalizadores de viraje, no las luces de peligro.",
      "Las balizas no sirven para avisar que tiene prisa; su uso indebido confunde a los demás conductores."
    ],
    "page": 2,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El uso correcto de las luces de advertencia de peligro es alertar a quienes vienen detrás sobre un peligro o situación de riesgo que hay más adelante, como una congestión que aparece de golpe, un accidente o un vehículo detenido en la vía. El fundamento es que estas luces son un lenguaje de prevención: su parpadeo simultáneo capta la atención y dice 'cuidado, reduzca la velocidad'. Por eso, por ejemplo, en autopista al toparse con un taco repentino, encender las balizas un momento avisa a los de atrás para que frenen a tiempo. Las otras opciones distorsionan su propósito: no sirven para legitimar un estacionamiento en doble fila, no se usan para indicar un viraje (para eso están los señalizadores, que encienden de un solo lado), y muchísimo menos para anunciar que uno tiene prisa, lo que solo confundiría. La idea central es que las balizas comunican peligro, nunca intención de maniobra ni urgencia personal."
  },
  {
    "id": 14,
    "question": "¿Cuándo usaría usted las luces de advertencia de peligro de su vehículo?",
    "options": [
      "Cuando esté en pana moviéndose lentamente.",
      "Cuando esté siendo remolcado.",
      "Cuando esté retrocediendo en una calle de poco tránsito.",
      "Cuando esté en pana y obstaculizando el tránsito."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Las luces de advertencia de peligro deben usarse cuando el vehículo está en pana y obstaculizando el tránsito, para avisar a los demás conductores del obstáculo y evitar un choque por alcance. Es justamente la situación de peligro estático que ellas señalan.",
    "wrongExplanations": [
      "Si está en pana moviéndose lentamente lo correcto es salir de la calzada; las balizas en movimiento confunden a los demás.",
      "Cuando es remolcado se usa la señalización propia del remolque, no las balizas del vehículo.",
      "Para retroceder se usan las luces de retroceso y la debida precaución, no las luces de peligro.",
      ""
    ],
    "page": 2,
    "category": "Conduccion segura",
    "deepExplanation": "Debe usar las luces de advertencia de peligro cuando su vehículo queda en pana y obstaculizando el tránsito, porque en ese momento se convierte en un obstáculo fijo que los demás no esperan encontrar. El fundamento es prevenir el choque por alcance: las balizas parpadeantes a ambos lados hacen que el auto detenido sea visible de lejos, dando tiempo a los que se acercan para reducir y esquivar. Note la diferencia con las opciones incorrectas: si está en pana pero moviéndose lentamente, lo apropiado suele ser orillarse e indicar con los señalizadores; si va siendo remolcado, el vehículo ya está bajo control de otro y las balizas pueden confundir; y al retroceder en una calle tranquila no hay un peligro estático que señalar. La clave es la combinación de detención más obstrucción. Un buen reflejo de manejo es que apenas su auto quede inmovilizado en la calzada, lo primero sea encender las balizas y, si dispone, ubicar el triángulo reflectante más atrás."
  },
  {
    "id": 15,
    "question": "Usted está probando la suspensión de su vehículo cuando nota que éste rebota u oscila al cargarlo en un extremo lateral frontal. ¿Qué significa esto?",
    "options": [
      "Neumáticos gastados.",
      "Neumáticos poco inflados.",
      "Volante de dirección no centrado.",
      "Amortiguadores gastados."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Si al cargar un extremo del vehículo éste rebota u oscila varias veces en lugar de estabilizarse, significa que los amortiguadores están gastados y ya no controlan el movimiento de la suspensión. Esto afecta la estabilidad y la adherencia, por lo que deben reemplazarse.",
    "wrongExplanations": [
      "Los neumáticos gastados afectan el agarre y la frenada, pero no producen el rebote prolongado al cargar la carrocería.",
      "Los neumáticos poco inflados influyen en la dirección y el desgaste, no en el rebote propio de la suspensión.",
      "Un volante descentrado se relaciona con la alineación de la dirección, no con el rebote de la suspensión.",
      ""
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Si al empujar hacia abajo un extremo del vehículo y soltarlo este rebota u oscila varias veces antes de quedar quieto, la causa son los amortiguadores gastados. El fundamento es que la suspensión combina resortes, que absorben los baches, con amortiguadores, cuya función es justamente frenar y controlar el rebote de esos resortes para que la carrocería se estabilice de inmediato. Cuando el amortiguador pierde su aceite interno o sus sellos, ya no amortigua, y la rueda sigue oscilando libremente. El riesgo es serio: una rueda que rebota pierde contacto con el pavimento, lo que reduce la adherencia en frenadas y curvas, alarga la distancia de detención y desgasta los neumáticos de forma irregular. Las otras opciones no producen ese rebote sostenido: los neumáticos gastados o poco inflados afectan el agarre, y un volante descentrado es un tema de alineación. La famosa 'prueba del rebote', hundir una esquina del auto y observar si se estabiliza al primer movimiento o sigue meciéndose, es el truco clásico para detectar amortiguadores vencidos."
  },
  {
    "id": 16,
    "question": "¿Por qué los neumáticos deben mantenerse a la presión indicada por el fabricante?",
    "options": [
      "Para que el vehículo se mantenga a la altura correcta sobre la vía.",
      "Para no desgastar el motor.",
      "Para ayudar a evitar que el automóvil se roncee.",
      "Para evitar que el automóvil se incline hacia un lado."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Mantener los neumáticos a la presión indicada por el fabricante asegura un buen contacto y agarre con el pavimento, lo que ayuda a evitar que el automóvil se roncee o derrape. Una presión incorrecta reduce la adherencia y aumenta el riesgo de perder el control.",
    "wrongExplanations": [
      "La presión correcta busca seguridad y adherencia, no mantener una determinada altura del vehículo sobre la vía.",
      "La presión de los neumáticos no tiene relación con el desgaste del motor.",
      "",
      "La inclinación del vehículo depende de la carga y la suspensión; el objetivo de la presión correcta es la adherencia, no la nivelación."
    ],
    "page": 2,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Los neumáticos deben mantenerse a la presión indicada por el fabricante principalmente para conservar un buen agarre con el pavimento y así ayudar a evitar que el automóvil se roncee o derrape. El fundamento es que el neumático está diseñado para apoyar sobre la calzada una huella de contacto óptima, y esa huella solo se logra con la presión correcta. Si va poco inflado, las paredes se flexionan en exceso, se calienta y puede reventar; si va sobreinflado, apoya solo en el centro de la banda y reduce la superficie que agarra. En ambos extremos baja la adherencia, y menos adherencia significa más riesgo de perder el control, sobre todo al frenar o girar en pavimento mojado. Las otras opciones son secundarias o erradas: la altura del vehículo o una posible inclinación lateral no son el motivo principal, y el desgaste del motor no depende de la presión de las gomas. La idea para recordar es que la presión correcta es lo que mantiene al auto 'pegado' al camino, y por eso conviene chequearla al menos una vez al mes."
  },
  {
    "id": 17,
    "question": "¿A qué se debe un alto consumo de combustible?",
    "options": [
      "Fallas en el sistema de dirección.",
      "Aceleraciones en curvas.",
      "Frecuentes frenadas y aceleraciones.",
      "Conducción en marchas altas."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Las frenadas y aceleraciones frecuentes obligan al motor a entregar y disipar energía bruscamente una y otra vez, lo que dispara el consumo de combustible. Una conducción suave y anticipada es mucho más eficiente.",
    "wrongExplanations": [
      "Las fallas en la dirección afectan el control y el desgaste de neumáticos, pero no son la causa típica de un alto consumo de combustible.",
      "Acelerar en curvas es peligroso para la estabilidad, pero no es la causa principal del mayor consumo.",
      "",
      "Conducir en marchas altas a régimen adecuado en realidad reduce el consumo, no lo aumenta."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El alto consumo de combustible se debe principalmente a las frecuentes frenadas y aceleraciones, es decir, a un estilo de conducción brusco y poco anticipado. El fundamento es energético: cada vez que usted acelera fuerte, el motor debe quemar más bencina para entregar de golpe esa energía y poner en movimiento la masa del auto; y cada vez que frena, toda esa energía cinética que tanto costó generar se disipa en calor en los frenos y se pierde por completo. Repetir ese ciclo de acelerón y frenazo, típico de quien maneja pegado al de adelante en la ciudad, derrocha combustible una y otra vez. Las otras opciones influyen menos: una falla de dirección o acelerar en curva afectan más la seguridad, y conducir en marchas altas a velocidad de crucero en realidad ahorra. La conducción eficiente, o 'eco-conducción', consiste en mirar lejos, anticipar los semáforos y el tránsito, y mantener una velocidad pareja, lo que reduce el gasto y también el desgaste de frenos y neumáticos."
  },
  {
    "id": 18,
    "question": "La profundidad de los surcos de los neumáticos de un automóvil no debería ser inferior a ...",
    "options": [
      "5.0 mm",
      "4.0 mm",
      "1.6 mm",
      "1.0 mm"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La profundidad mínima legal de los surcos del dibujo de los neumáticos es de 1,6 mm. Por debajo de ese valor el neumático pierde capacidad de evacuar agua y de adherir, por lo que se considera inseguro y debe reemplazarse.",
    "wrongExplanations": [
      "5,0 mm es mayor que el mínimo legal; un neumático aún sirve bastante antes de llegar al límite.",
      "4,0 mm tampoco corresponde al mínimo exigido; el límite establecido es menor.",
      "",
      "1,0 mm está por debajo del mínimo legal de 1,6 mm, por lo que sería un neumático ya inseguro."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La profundidad mínima legal de los surcos del dibujo de los neumáticos es de 1,6 milímetros, y por debajo de ese valor el neumático se considera inseguro y debe reemplazarse. El fundamento de esa cifra es que esos surcos o canales son los que evacuan el agua que hay entre la goma y el pavimento cuando llueve; si están muy desgastados, el agua no logra salir y se forma una película que levanta el neumático, fenómeno llamado aquaplaning o hidroplaneo, en el que el auto literalmente flota y pierde dirección y frenos. Con menos de 1,6 mm también cae el agarre en seco y se alarga la distancia de frenado. Por eso 4 o 5 mm son holgados y 1,0 mm ya es ilegal y peligroso. Un truco casero para chequearlo es introducir una moneda en el surco y ver cuánto se hunde el borde, o fijarse en los testigos de desgaste, esas barritas de goma en el fondo del canal: cuando quedan al ras de la banda de rodadura, significa que llegó a 1,6 mm y toca cambiar el neumático."
  },
  {
    "id": 19,
    "question": "Uno de sus neumáticos traseros se revienta mientras usted conduce. ¿Cuáles 2 cosas debe hacer usted?",
    "options": [
      "Poner marcha atrás para detener el vehículo.",
      "Hacer una señal de detención con el brazo y disminuir la velocidad.",
      "Detenerse lentamente al costado de la vía.",
      "Detener el vehículo frenando lo más fuerte que pueda.",
      "Girar el volante hacia el mismo lado hacia el cual se desvía la cola del vehículo."
    ],
    "correct": [
      2,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Ante un reventón en un neumático trasero, debe mantener el control y detenerse lentamente al costado de la vía, sin frenar bruscamente. Además, si la cola del vehículo se desvía, debe girar el volante hacia el mismo lado de la desviación (contravolantear) para enderezar y recuperar la trayectoria.",
    "wrongExplanations": [
      "Poner marcha atrás en movimiento es imposible y peligroso; nunca se usa para detener el vehículo.",
      "Hacer señales con el brazo no es prioritario; lo esencial es mantener el control y detenerse de forma segura.",
      "",
      "Frenar lo más fuerte posible tras un reventón puede provocar derrape o pérdida total del control.",
      ""
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Ante el reventón de un neumático trasero las dos acciones correctas son detenerse lentamente al costado de la vía y, si la cola del auto se desvía, girar el volante hacia el mismo lado de la desviación. El fundamento es que un neumático trasero pinchado hace que la parte de atrás del vehículo coletee o cologuee de un lado a otro, y la forma de corregir ese coletazo es contravolantear, es decir, dirigir el volante hacia donde se va la cola para realinear la trayectoria, tal como se corrige un derrape. Al mismo tiempo, hay que evitar frenar de golpe, porque una frenada brusca con un neumático destruido puede provocar que el auto gire sin control; lo seguro es soltar el acelerador y dejar que pierda velocidad gradualmente mientras se orilla. Las otras opciones son peligrosas: poner marcha atrás en movimiento es imposible y absurdo, y frenar lo más fuerte que se pueda agrava el descontrol. Para recordarlo, ante un reventón la consigna es manos firmes, nada de frenazos y detenerse de a poco al lado del camino."
  },
  {
    "id": 20,
    "question": "¿Cuáles 2 cosas debe usted hacer si se le revienta un neumático delantero?",
    "options": [
      "Cambiarse de pista y frenar a fondo.",
      "Frenar suavemente o dejar que el vehículo siga hasta detenerse.",
      "Frenar rápida y firmemente.",
      "Sostener firmemente el volante manteniendo la trayectoria.",
      "Sostener el volante con una mano advirtiendo con la otra a los demás que usted se detendrá."
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Ante el reventón de un neumático delantero, lo correcto es sostener firmemente el volante con ambas manos para mantener la trayectoria, ya que el vehículo tiende a tirar hacia el lado afectado. Luego debe frenar suavemente o dejar que el vehículo desacelere solo hasta detenerse, evitando frenadas o maniobras bruscas.",
    "wrongExplanations": [
      "Cambiarse de pista y frenar a fondo provoca pérdida de control justo cuando la dirección ya está comprometida.",
      "",
      "Frenar rápida y firmemente puede desestabilizar el vehículo y hacerle perder el control tras el reventón.",
      "",
      "Soltar el volante para hacer señales con una mano le quita el control de la dirección en un momento crítico."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Si se revienta un neumático delantero, las dos cosas correctas son sostener firmemente el volante con ambas manos para mantener la trayectoria y luego frenar suavemente o dejar que el vehículo se detenga solo. El fundamento es que el eje delantero es el que dirige, así que un reventón adelante hace que el auto tire con fuerza hacia el lado del neumático afectado; si usted no afirma el volante con decisión, el vehículo se va de su carril. Por eso lo primero es el control de la dirección, no el freno. Frenar de golpe o frenar rápida y firmemente transfiere todo el peso adelante justo sobre la rueda dañada y puede hacer perder el control por completo, y cambiarse de pista en ese instante agrega un riesgo innecesario; manejar con una sola mano también resta dominio cuando más se necesita firmeza. Lo seguro es desacelerar de a poco, dejando que el roce frene el auto, y orillarse cuando ya vaya lento. La regla mental es clara: primero sujetar el volante y enderezar, después frenar con suavidad."
  },
  {
    "id": 21,
    "question": "¿Qué es lo que usted nunca debería hacer en una bomba de bencina?",
    "options": [
      "Circular por ella",
      "Fumar",
      "Comer",
      "Lavar los parabrisas"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "En una bomba de bencina nunca se debe fumar, porque los vapores de los combustibles son altamente inflamables y se concentran en el aire alrededor de los surtidores. Una chispa o la brasa de un cigarrillo puede provocar una ignición o explosión, poniendo en grave riesgo a las personas y las instalaciones.",
    "wrongExplanations": [
      "Circular cuidadosamente por la estación de servicio es una maniobra normal y permitida para acceder a los surtidores.",
      "",
      "Comer no genera fuentes de ignición; lo prohibido y peligroso es fumar por el riesgo de incendio.",
      "Lavar los parabrisas es una actividad común y segura que muchas estaciones de servicio incluso facilitan."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La razón de fondo es química: la bencina no se inflama tanto en estado líquido como en forma de vapor, y en una estación de servicio esos vapores se evaporan constantemente desde los surtidores, las mangueras y el propio estanque de tu auto, acumulándose cerca del suelo porque pesan más que el aire. Cuando esa mezcla de vapor y oxígeno alcanza cierta proporción, basta una fuente de ignición mínima para que se encienda de golpe. La brasa de un cigarrillo supera con creces la temperatura necesaria para iniciar esa combustión, e incluso la chispa al encender el encendedor es peligrosa. Por eso la norma prohíbe fumar y también usar el celular o generar chispas mientras se carga combustible. Un buen truco para recordarlo es asociar la bomba de bencina con un quirófano: ambiente controlado donde una sola imprudencia puede ser catastrófica. Comer, lavar parabrisas o circular con cuidado no generan ese riesgo de ignición, por eso la única conducta verdaderamente prohibida es fumar."
  },
  {
    "id": 22,
    "question": "Desenganchar el motor del vehículo...",
    "options": [
      "permite un mejor control al conductor.",
      "hace más fácil las maniobras.",
      "aumenta el consumo de combustible.",
      "reduce el control del conductor."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Desenganchar el motor (circular con el embrague presionado o en punto muerto) reduce el control del conductor, porque se pierde el frenado del motor y el vehículo queda librado a la inercia. Sin esa retención el auto puede tomar velocidad sin que el conductor pueda regularla con el acelerador, lo que disminuye su capacidad de maniobra.",
    "wrongExplanations": [
      "Es justo lo contrario: al desenganchar el motor el conductor pierde control, no lo mejora.",
      "No facilita las maniobras; al perder el frenado del motor el vehículo se vuelve menos manejable.",
      "El consumo de combustible no es el problema central; lo determinante es la pérdida de control del vehículo.",
      ""
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Para entender esto hay que recordar cómo controlamos un auto: el conductor regula la velocidad no solo con el freno, sino también con el acelerador y con la retención que el propio motor ejerce sobre las ruedas cuando están conectadas a él. Cuando desenganchas el motor, ya sea pisando el embrague o poniendo punto muerto, esa conexión se corta y el vehículo queda navegando por pura inercia. En esa condición pierdes el frenado del motor y, además, no puedes acelerar para corregir tu trayectoria o salir de una situación, de modo que tu único recurso queda siendo el freno. Por eso la respuesta correcta es que reduce el control del conductor: tienes menos herramientas para gobernar el auto. Un ejemplo cotidiano es bajar una pendiente en punto muerto; el auto se acelera solo y tú quedas dependiendo de unos frenos que se van recalentando. La regla práctica es simple: el motor siempre engranado mientras circulas, porque un motor conectado es un motor que te ayuda a mandar."
  },
  {
    "id": 23,
    "question": "¿Por qué no es bueno desenganchar el motor del vehículo al ir circulando?",
    "options": [
      "Porque ello hace que el vehículo resbale.",
      "Porque el motor se detendrá.",
      "Porque no hay frenado del motor.",
      "Porque el motor funcionará más rápido."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Al desenganchar el motor mientras se circula se pierde el frenado del motor, es decir, la retención natural que ejerce el motor sobre las ruedas cuando va engranado. Sin ese efecto el vehículo puede acelerar por inercia, especialmente en pendientes, y el conductor debe depender solo de los frenos, que pueden recalentarse y perder eficacia.",
    "wrongExplanations": [
      "El vehículo no resbala por desenganchar el motor; lo que ocurre es que se pierde el frenado del motor.",
      "El motor no se detiene necesariamente al desenganchar; el problema real es la pérdida del frenado del motor.",
      "",
      "El motor no funciona más rápido por estar desenganchado; el riesgo está en la falta de retención del motor."
    ],
    "page": 4,
    "category": "Conduccion segura",
    "deepExplanation": "El concepto clave aquí es el frenado del motor, que es la resistencia natural que el motor opone al giro de las ruedas cuando van engranadas y sueltas el acelerador. Esa resistencia surge porque el motor sigue conectado a la transmisión y frena suavemente el vehículo sin que toques el pedal de freno, especialmente en bajadas. Cuando desenganchas el motor, esa retención desaparece por completo y el auto pasa a depender únicamente de los frenos mecánicos. El problema es que los frenos, al usarse de forma prolongada y sin ayuda del motor, se calientan, y un freno recalentado pierde eficacia, fenómeno conocido como fatiga o fading. Por eso la afirmación correcta es que no hay frenado del motor: esa es la verdadera pérdida. En la práctica, al enfrentar una bajada larga conviene reducir a una marcha más baja para que el motor te ayude a contener la velocidad y cuides tus frenos."
  },
  {
    "id": 24,
    "question": "¿Cuáles son las 2 principales razones por las cuales no debe desengancharse el motor al ir cuesta abajo?",
    "options": [
      "Porque tendrá menor control del frenado y dirección.",
      "Porque el vehículo agarrará velocidad.",
      "Porque el consumo de combustible será mayor.",
      "Porque se gastan y deterioran más los neumáticos.",
      "Porque se daña el motor."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [],
    "explanation": "Al ir cuesta abajo no debe desengancharse el motor por dos razones principales: se pierde el frenado del motor, lo que reduce el control sobre el frenado y la dirección, y además el vehículo agarra velocidad por efecto de la gravedad y la inercia. Sin la retención del motor, los frenos se sobrecargan y pueden recalentarse, aumentando el riesgo de no poder detener el vehículo a tiempo.",
    "wrongExplanations": [
      "",
      "",
      "El mayor consumo de combustible no es la razón principal de seguridad; lo crítico es la pérdida de control y el aumento de velocidad.",
      "El desgaste de neumáticos no es el motivo central; el peligro real es perder control y ganar velocidad cuesta abajo.",
      "El motor no se daña por esta maniobra; el problema es la pérdida de frenado del motor y el aumento de velocidad."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "En una pendiente cuesta abajo entran en juego dos fuerzas que te empujan a favor: la gravedad y la inercia, que tienden a aumentar la velocidad del vehículo de forma natural. La primera consecuencia de desenganchar el motor es que pierdes el frenado del motor, esa retención que normalmente te ayuda a contener la velocidad; sin ella disminuye tu control tanto del frenado como de la dirección, porque un auto que se acelera es más difícil de gobernar. La segunda consecuencia, ligada a la anterior, es que el vehículo agarra velocidad cada vez más rápido por efecto de la gravedad. Por eso las dos razones principales son justamente esas dos: menor control y aumento de velocidad. El riesgo real es que los frenos, obligados a hacer todo el trabajo solos, se sobrecalientan y pueden dejar de responder en el peor momento. La recomendación de oro es bajar las cuestas en una marcha baja, dejando que el motor frene por ti, especialmente en cordillera o caminos de montaña."
  },
  {
    "id": 25,
    "question": "¿Por qué usted no debería conducir presionando el pedal de embrague durante más tiempo que el necesario?",
    "options": [
      "Porque reduce su control sobre el vehículo.",
      "Porque aumenta el desgaste de la caja de cambios.",
      "Porque aumenta el consumo de combustible.",
      "Porque reduce el agarre de los neumáticos."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Conducir con el pedal de embrague presionado más tiempo del necesario reduce el control sobre el vehículo, porque mientras el embrague está pisado el motor queda desenganchado de las ruedas y se pierde el frenado del motor. En esa condición el conductor solo puede contar con los frenos y no puede acelerar para controlar la marcha, disminuyendo su capacidad de reacción.",
    "wrongExplanations": [
      "",
      "El desgaste de la caja de cambios no es la razón principal; lo importante es la pérdida de control del vehículo.",
      "El mayor consumo de combustible no es el motivo central de seguridad de esta pregunta.",
      "El agarre de los neumáticos no se ve afectado por pisar el embrague; lo que se reduce es el control del vehículo."
    ],
    "page": 4,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Mantener el embrague pisado más tiempo del necesario equivale a conducir con el motor desenganchado de las ruedas, lo que técnicamente se llama ir 'en vela'. Mientras el pedal está abajo, la conexión entre motor y transmisión está abierta, así que pierdes el frenado del motor y tampoco puedes acelerar para corregir tu marcha. En esa situación tu único recurso para modificar la velocidad es el freno, y eso reduce tu capacidad de reacción ante un imprevisto. Por eso la respuesta correcta es que reduce el control sobre el vehículo, más que el desgaste o el consumo. Hay quienes creen que aprietan el embrague para 'descansar' o ahorrar bencina, pero en realidad se quedan sin la mitad de las herramientas para mandar el auto. La regla práctica es usar el embrague solo lo justo para cambiar de marcha y soltarlo enseguida, manteniendo siempre el motor engranado mientras circulas."
  },
  {
    "id": 26,
    "question": "¿Para qué sirven los seguros de niños de los vehículos?",
    "options": [
      "Aseguran las hebillas de los cinturones de seguridad.",
      "Impiden que las puertas puedan abrirse desde el interior.",
      "Bloquean las ventanas traseras manteniéndolas cerradas.",
      "Impiden que los asientos se reclinen."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Los seguros de niños impiden que las puertas traseras puedan abrirse desde el interior del vehículo. De este modo se evita que un menor abra la puerta accidentalmente mientras el auto está en movimiento, protegiéndolo de caídas y accidentes.",
    "wrongExplanations": [
      "Los seguros de niños no tienen relación con las hebillas de los cinturones de seguridad.",
      "",
      "El seguro de niños actúa sobre la apertura de las puertas, no sobre el bloqueo de las ventanas.",
      "Estos seguros no tienen función sobre la reclinación de los asientos."
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El seguro de niños es un pequeño mecanismo, generalmente una palanca o perilla en el canto de las puertas traseras, que se activa manualmente y bloquea la manilla interior. Su función concreta es impedir que la puerta trasera pueda abrirse desde adentro, aunque sí siga abriéndose normalmente desde el exterior. La razón de su existencia es proteger a los menores, que por curiosidad o por accidente podrían tirar de la manilla mientras el auto va en movimiento, con el riesgo de caer a la calzada y ser atropellados o sufrir lesiones graves. Por eso la respuesta correcta es la que dice que impide abrir las puertas desde el interior, y no las que hablan de cinturones, ventanas o asientos. Un dato práctico: cada vez que lleves niños atrás, verifica que el seguro esté activado antes de partir, y recuerda que para que ellos salgan necesitarás abrirles tú desde fuera. Es una medida sencilla que evita tragedias."
  },
  {
    "id": 27,
    "question": "Una baja presión de aire en los neumáticos delanteros ...",
    "options": [
      "hace que el vehículo tienda a torcer hacia un lado.",
      "mejora el rendimiento del combustible.",
      "hace sentir la dirección más liviana.",
      "hace sentir la dirección más pesada."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Una baja presión de aire en los neumáticos delanteros hace sentir la dirección más pesada, porque al estar desinflados aumenta la superficie de contacto del neumático con el pavimento y, con ello, la resistencia al giro. El conductor debe aplicar más fuerza al volante para maniobrar.",
    "wrongExplanations": [
      "Una baja presión pareja en ambos neumáticos delanteros no necesariamente desvía el vehículo; eso ocurre más bien cuando la diferencia de presión es entre un lado y otro.",
      "La baja presión empeora el rendimiento del combustible por la mayor resistencia, no lo mejora.",
      "Es al revés: con baja presión la dirección se siente más pesada, no más liviana.",
      ""
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La presión de aire correcta hace que el neumático apoye sobre el pavimento solo con la parte adecuada de su banda de rodadura. Cuando la presión baja en las ruedas delanteras, el neumático se aplasta y aumenta su superficie de contacto con el suelo, lo que genera más roce y más resistencia al momento de girar. Como las ruedas delanteras son justamente las que dirigen el auto, ese roce extra se traduce en que tienes que aplicar más fuerza al volante, es decir, la dirección se siente más pesada. Por eso la respuesta correcta es esa y no que se sienta liviana. Más allá del esfuerzo, conducir con neumáticos desinflados es peligroso porque se calientan, se desgastan de forma despareja y consumen más combustible. Un truco útil es que si de repente notas el volante 'duro' o pesado sin motivo, lo primero que debes sospechar es una baja de presión o un pinchazo lento en una rueda delantera, y conviene detenerte a revisar."
  },
  {
    "id": 28,
    "question": "En un pavimento mojado, ¿influye el estado de los neumáticos en la distancia de frenado de su vehículo?",
    "options": [
      "No, la distancia de frenado depende sólo de la velocidad.",
      "No, porque una vez que se acciona el freno la distancia de frenado es siempre la misma para cada vehículo.",
      "Sí, a mayor desgaste de los neumáticos menor es dicha distancia.",
      "Sí, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que dicha distancia sea mayor o menor."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Sí influye, porque el mayor o menor desgaste de los neumáticos, entre otros factores, determinará que la distancia de frenado sea mayor o menor. En pavimento mojado los neumáticos en buen estado evacúan el agua a través de sus surcos y mantienen el agarre, mientras que los gastados pierden adherencia y alargan la distancia necesaria para detenerse.",
    "wrongExplanations": [
      "La distancia de frenado no depende solo de la velocidad; también influyen el estado de los neumáticos, el pavimento y los frenos.",
      "La distancia de frenado no es siempre la misma; varía según múltiples factores, incluido el estado de los neumáticos.",
      "Es al revés: a mayor desgaste de los neumáticos, mayor es la distancia de frenado, no menor.",
      ""
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La distancia de frenado nunca es un valor fijo: depende de muchos factores, como la velocidad, el estado de los frenos, el peso del vehículo, el tipo de pavimento y, de manera muy importante, el estado de los neumáticos. En piso mojado esto se vuelve crítico porque entre el neumático y el asfalto se interpone una capa de agua, y son los surcos o canales del dibujo del neumático los que evacúan esa agua para mantener el contacto con el suelo. Un neumático en buen estado, con buena profundidad de dibujo, expulsa el agua y conserva su adherencia; uno gastado y liso pierde agarre y puede incluso llegar al aquaplaning, deslizándose sobre el agua sin frenar. Por eso la respuesta correcta es que sí influye, y que a mayor desgaste mayor es la distancia de frenado. La consecuencia real es que con neumáticos gastados necesitarás muchos más metros para detenerte bajo la lluvia. Una buena costumbre es revisar el dibujo de tus neumáticos antes del invierno, porque ahí es donde la diferencia se nota más."
  },
  {
    "id": 29,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Cuando el motor no está siendo lubricado se enciende una luz en el panel de instrumentos del vehículo.",
      "Una batería mal cargada hace que el vehículo tenga dificultades para arrancar.",
      "Casi siempre, el motor se enfría con un líquido refrigerante que circula por canales en el bloque del motor.",
      "Una temperatura del motor demasiado alta puede deberse a que se haya roto la correa de la bomba de agua."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Las cuatro afirmaciones son verdaderas. Cuando falla la lubricación se enciende una luz de advertencia en el panel; una batería mal cargada dificulta el arranque; el motor habitualmente se enfría con líquido refrigerante que circula por canales del bloque; y una temperatura demasiado alta puede deberse a la rotura de la correa de la bomba de agua, que deja de hacer circular el refrigerante. Todas describen el funcionamiento básico de los sistemas del vehículo.",
    "wrongExplanations": [
      "",
      "",
      "",
      ""
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Esta pregunta repasa el funcionamiento de cuatro sistemas básicos del auto y las cuatro afirmaciones son correctas. Primero, el sistema de lubricación: cuando el aceite no está llegando bien al motor se enciende una luz roja de advertencia en el tablero, justamente para que detengas el vehículo antes de que las piezas se dañen por falta de lubricación. Segundo, la batería: si está mal cargada no entrega la energía suficiente para el motor de arranque, por lo que el auto cuesta o no logra encender. Tercero, la refrigeración: casi siempre el motor se enfría con un líquido refrigerante que circula por canales internos del bloque, absorbiendo el calor y llevándolo al radiador. Cuarto, el sobrecalentamiento: si se corta la correa que mueve la bomba de agua, el refrigerante deja de circular y la temperatura del motor sube peligrosamente. Saber reconocer estas señales te permite reaccionar a tiempo y evitar una pana costosa o el daño total del motor."
  },
  {
    "id": 30,
    "question": "¿Cuáles 2 de las siguientes afirmaciones son verdaderas?",
    "options": [
      "Los gases de escape no son peligrosos para la salud de las personas.",
      "Un sistema de escape de gases oxidado puede hacer que penetre monóxido de carbono al interior del vehículo.",
      "Los gases de escape contienen monóxido de carbono, que carece de olor y es incoloro.",
      "Los vapores de la gasolina son inocuos."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Las dos afirmaciones verdaderas son que un sistema de escape oxidado puede dejar penetrar monóxido de carbono al interior del vehículo, y que los gases de escape contienen monóxido de carbono, que carece de olor y es incoloro. Por eso este gas es tan peligroso: no se percibe y puede causar intoxicación o la muerte sin que la persona lo advierta.",
    "wrongExplanations": [
      "Es falsa: los gases de escape sí son peligrosos para la salud, ya que contienen monóxido de carbono y otros tóxicos.",
      "",
      "",
      "Es falsa: los vapores de la gasolina no son inocuos; son tóxicos y altamente inflamables."
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Las dos afirmaciones verdaderas apuntan al mismo peligro silencioso: el monóxido de carbono. Este gas se produce en la combustión del motor y sale por el sistema de escape, y su característica más traicionera es que no tiene olor ni color, por lo que una persona puede estar respirándolo sin darse cuenta. Por eso es verdad que los gases de escape contienen monóxido de carbono incoloro e inodoro. La segunda afirmación correcta explica el riesgo concreto: si el sistema de escape está oxidado o tiene fugas, ese gas puede filtrarse al interior del habitáculo en lugar de salir hacia atrás del vehículo, intoxicando a los ocupantes. Las otras dos opciones son falsas y peligrosas, porque los gases de escape sí dañan la salud y los vapores de bencina no son inocuos. El consejo práctico es nunca dejar el motor encendido en un espacio cerrado como un garaje, y mantener el escape en buen estado, ya que una intoxicación por monóxido puede causar somnolencia, pérdida de conciencia e incluso la muerte."
  },
  {
    "id": 31,
    "question": "¿Cuáles 2 de las siguientes afirmaciones son verdaderas?",
    "options": [
      "A mayor velocidad, mayor es el consumo del líquido de frenos.",
      "Los frenos antibloqueo tienen la ventaja de impedir que las ruedas queden bloqueadas al frenar fuertemente.",
      "El consumo del líquido de frenos depende de la cantidad e intensidad de las frenadas.",
      "El líquido de frenos no se consume y si disminuye es porque hay algún defecto.",
      "Lo mejor es que el pedal de freno se sienta elástico."
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Las dos afirmaciones verdaderas son que los frenos antibloqueo (ABS) evitan que las ruedas queden bloqueadas al frenar fuertemente, permitiendo mantener el control de la dirección, y que el líquido de frenos no se consume, por lo que si disminuye es señal de que hay un defecto o fuga en el sistema. Por eso conviene revisar el nivel de líquido de frenos y atender cualquier baja.",
    "wrongExplanations": [
      "Es falsa: el líquido de frenos no se consume según la velocidad; no es como el combustible.",
      "",
      "Es falsa: el líquido de frenos no se consume por la cantidad o intensidad de frenadas; circula en un circuito cerrado.",
      "",
      "Es falsa: un pedal de freno elástico o esponjoso indica un defecto, como aire en el sistema; lo deseable es un pedal firme."
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Las dos afirmaciones correctas se entienden conociendo cómo funciona el sistema de frenos. La primera verdadera es la del sistema antibloqueo o ABS, cuya ventaja es impedir que las ruedas se traben cuando frenas a fondo; al evitar el bloqueo, las ruedas siguen girando y conservas la capacidad de dirigir el auto para esquivar un obstáculo, en lugar de patinar en línea recta. La segunda verdadera es que el líquido de frenos no se consume con el uso normal, a diferencia del combustible; circula en un circuito cerrado, así que si el nivel baja es señal de una fuga o un defecto que debes atender de inmediato. Por eso esas dos son las correctas y las otras opciones, que hablan de consumo del líquido según velocidad o frenadas, son falsas. Un detalle importante: el pedal de freno debe sentirse firme, no elástico ni esponjoso, porque un pedal blando suele indicar aire en el sistema o falta de líquido. Revisar el nivel y la firmeza del pedal es una rutina de seguridad básica."
  },
  {
    "id": 32,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Una profundidad de 1 mm de los surcos de las bandas de rodamiento de los neumáticos siempre es suficiente para asegurar una buena fricción con el pavimento.",
      "Un desgaste notorio de la zona central de las bandas de rodamiento de los neumáticos indica que éstos se han usado con muy poco aire.",
      "Un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación.",
      "Independientemente de la ubicación de las ruedas de tracción, para una mejor estabilidad del vehículo los mejores neumáticos deben ir adelante."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación verdadera es que un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación. Cuando la geometría de la dirección está mal alineada o los amortiguadores fallan, la rueda no apoya de manera uniforme y se desgasta de forma despareja, lo que es una señal para revisar el vehículo.",
    "wrongExplanations": [
      "Es falsa: 1 mm de profundidad es insuficiente; la banda de rodadura debe tener mayor profundidad para asegurar buena fricción, especialmente en mojado.",
      "Es falsa: el desgaste en la zona central indica exceso de presión (mucho aire), no poco aire; con poco aire se desgastan los bordes.",
      "",
      "Es falsa: como regla general los mejores neumáticos deben ir atrás para evitar la pérdida de control del eje trasero, no necesariamente adelante."
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La afirmación correcta es que un desgaste irregular de los neumáticos puede deberse a problemas de alineamiento o de amortiguación, y conviene entender por qué. Cuando la geometría de la dirección está desalineada o los amortiguadores están gastados, el neumático no apoya de forma pareja sobre el pavimento, sino que carga más en ciertas zonas, y esas zonas se desgastan antes que el resto. Por eso un desgaste despareja es una verdadera 'pista' que el auto te da para que revises esos sistemas. Las otras opciones son falsas: 1 mm de dibujo es insuficiente, ya que en Chile el mínimo legal es de 1,6 mm y por debajo de eso se pierde agarre, sobre todo en mojado; un desgaste en el centro de la banda indica exceso de aire, no falta; y los mejores neumáticos deben ir atrás, no adelante, para evitar que la parte trasera derrape. Un buen hábito es inspeccionar visualmente tus neumáticos cada cierto tiempo, porque la forma en que se gastan te cuenta el estado de tu vehículo."
  },
  {
    "id": 33,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "El cinturón de seguridad disminuye las posibilidades de sufrir lesiones en un accidente.",
      "Los air-bags (o bolsas de aire) reemplazan ventajosamente al cinturón de seguridad.",
      "Para quienes viajan en el asiento trasero de un automóvil el cinturón de seguridad no les presta utilidad.",
      "Usar cinturón de seguridad es más necesario cuando se conduce en carreteras."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El cinturón de seguridad disminuye claramente las posibilidades de sufrir lesiones en un accidente, porque retiene al ocupante y evita que salga despedido o golpee el interior del vehículo. Por eso su uso es obligatorio en todos los asientos.",
    "wrongExplanations": [
      "",
      "Falso: el air-bag es un complemento del cinturón, no un reemplazo; sin cinturón puesto incluso puede causar lesiones.",
      "Falso: en el asiento trasero el cinturón también protege; evita salir despedido y golpear a los ocupantes de adelante.",
      "El cinturón es igual de necesario en ciudad que en carretera; muchos accidentes graves ocurren a velocidades urbanas, así que no es 'más necesario' solo en carretera."
    ],
    "page": 6,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La única afirmación verdadera es que el cinturón de seguridad disminuye las posibilidades de sufrir lesiones en un accidente, y la física lo explica con claridad. En una colisión, tu cuerpo tiende a seguir moviéndose hacia adelante a la misma velocidad que llevaba el auto; el cinturón te retiene y reparte esa fuerza sobre las zonas más fuertes del cuerpo, evitando que salgas despedido o que te golpees contra el volante, el parabrisas o el respaldo delantero. Las otras opciones son falsas y conviene desmontarlas: el airbag no reemplaza al cinturón, sino que lo complementa, y de hecho funciona bien solo si vas con el cinturón puesto; en el asiento trasero el cinturón sí es útil e igual de necesario, porque un pasajero suelto atrás también sale proyectado; y el cinturón es indispensable en cualquier camino, no solo en carretera, ya que muchos accidentes graves ocurren en ciudad a baja velocidad. Por eso en Chile su uso es obligatorio en todos los asientos, adelante y atrás."
  },
  {
    "id": 34,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "No es seguro que un adulto lleve a un niño pequeño incluyéndolo en su cinturón de seguridad.",
      "El cinturón de seguridad disminuye las posibilidades de resultar lesionado en un accidente.",
      "Para quienes viajan en el asiento trasero el cinturón de seguridad no brinda mayor seguridad.",
      "Un cinturón de seguridad bien tensado brinda mayor seguridad que uno menos tensado."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Tres afirmaciones son verdaderas: no es seguro que un adulto lleve a un niño dentro de su propio cinturón, ya que en una colisión el peso del adulto puede aplastar al menor; el cinturón disminuye las posibilidades de resultar lesionado; y un cinturón bien tensado brinda mayor seguridad que uno flojo, porque ajusta mejor al cuerpo y reduce el desplazamiento en un impacto.",
    "wrongExplanations": [
      "",
      "",
      "Es falsa: el cinturón también brinda seguridad a quienes viajan en el asiento trasero, donde su uso es obligatorio.",
      ""
    ],
    "page": 7,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Aquí hay tres afirmaciones verdaderas que vale la pena razonar una por una. Primero, no es seguro que un adulto lleve a un niño dentro de su propio cinturón: en una colisión, la fuerza lanza al adulto hacia adelante y su peso aplasta al menor que va delante, causándole lesiones gravísimas; por eso los niños deben ir en su silla o sistema de retención adecuado a su edad y tamaño. Segundo, el cinturón disminuye las posibilidades de resultar lesionado, porque retiene el cuerpo y evita los golpes contra el interior del auto. Tercero, un cinturón bien tensado brinda más seguridad que uno flojo, ya que cuanto más ajustado va al cuerpo, menos se desplaza la persona en el impacto y menor es el golpe; un cinturón holgado deja un 'juego' que reduce su efectividad. La afirmación falsa es la que dice que el cinturón no sirve en el asiento trasero, lo cual es incorrecto. El consejo práctico es ajustar siempre el cinturón pegado al cuerpo, sin torceduras y sin holguras, y nunca compartirlo entre dos personas."
  },
  {
    "id": 35,
    "question": "¿Qué elementos de su vehículo debe usted mantener limpios?",
    "options": [
      "Las luces.",
      "Los espejos.",
      "Los neumáticos.",
      "Los vidrios."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Debe mantener limpias las luces, los espejos y los vidrios. Las luces sucias reducen tanto su visibilidad como la posibilidad de ser visto por otros; los espejos y vidrios limpios le permiten observar el entorno y el tránsito sin obstrucciones. Todos estos elementos son esenciales para conducir con buena visión y seguridad.",
    "wrongExplanations": [
      "",
      "",
      "Aunque los neumáticos deben revisarse y estar en buen estado, mantenerlos limpios no es relevante para la visión ni la seguridad como sí lo es en luces, espejos y vidrios.",
      ""
    ],
    "page": 8,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La respuesta correcta agrupa luces, espejos y vidrios, y todos comparten un mismo fundamento: la visibilidad, que es uno de los pilares de la conducción segura. Las luces sucias o empañadas alumbran menos y, además, te hacen menos visible para los demás, de modo que de noche o con mal tiempo otros conductores podrían no verte a tiempo. Los espejos limpios te permiten controlar lo que ocurre atrás y a los costados antes de adelantar, frenar o cambiar de pista, eliminando o reduciendo los puntos ciegos. Los vidrios limpios, sobre todo el parabrisas, te dan una visión clara del camino sin reflejos ni manchas que distraigan o tapen un peligro. Los neumáticos no entran en este grupo porque, aunque deben mantenerse en buen estado, su limpieza no es lo relevante para la seguridad. Un buen hábito antes de salir, especialmente en invierno, es pasar un paño a luces, espejos y parabrisas, porque conducir es en gran medida ver y ser visto."
  },
  {
    "id": 36,
    "question": "Suponga que en una ocasión, • su distancia de reacción es de 10 metros • su distancia de frenado es de 8 metros • su distancia de detención (distancia de reacción más distancia de frenado) es de 18 metros ¿Cuál sería su distancia de detención si sigue conduciendo en calzada de idénticas características y condiciones, pero aumenta al doble su velocidad?",
    "options": [
      "46 metros",
      "52 metros",
      "64 metros",
      "78 metros"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "La respuesta es 52 metros. Al duplicar la velocidad, la distancia de reacción se duplica (de 10 a 20 metros, pues el tiempo de reacción es constante), pero la distancia de frenado se cuadruplica porque depende del cuadrado de la velocidad (de 8 a 32 metros). Sumando ambas: 20 + 32 = 52 metros de distancia de detención.",
    "wrongExplanations": [
      "Es incorrecto: este valor no considera que la distancia de frenado se cuadruplica al duplicar la velocidad.",
      "",
      "Es incorrecto: este resultado supondría cuadruplicar también la distancia de reacción, pero esta solo se duplica.",
      "Es incorrecto: este valor sobreestima ambas distancias; el cálculo correcto da 52 metros."
    ],
    "page": 8,
    "category": "Conduccion segura",
    "formula": "Al duplicar la velocidad:\n• Distancia de REACCIÓN: proporcional a la velocidad (∝ v) → se duplica: 10 m × 2 = 20 m.\n• Distancia de FRENADO: proporcional al cuadrado de la velocidad (energía cinética E = ½·m·v²) → se cuadruplica: 8 m × 4 = 32 m.\n• Total = 20 + 32 = 52 m.",
    "deepExplanation": "Para resolverlo hay que separar la distancia de detención en sus dos componentes, porque cada una se comporta distinto al cambiar la velocidad. La distancia de reacción es la que recorre el auto durante el tiempo que tardas en darte cuenta del peligro y mover el pie al freno; como ese tiempo de reacción del conductor es constante, esta distancia crece de forma proporcional a la velocidad, así que al duplicar la velocidad se duplica: de 10 pasa a 20 metros. La distancia de frenado, en cambio, es la que recorre el auto ya frenando, y depende de la energía cinética que hay que disipar; como esa energía es igual a un medio de la masa por la velocidad al cuadrado, al duplicar la velocidad el cuadrado la multiplica por cuatro, de modo que esa distancia se cuadruplica: de 8 pasa a 32 metros. Sumando ambas, 20 más 32 da 52 metros, que es la respuesta correcta. La lección práctica es contundente: ir al doble de rápido no duplica el peligro, lo multiplica mucho más, y por eso un pequeño exceso de velocidad alarga enormemente la distancia para detenerte."
  },
  {
    "id": 37,
    "question": "¿Cuál de las siguientes afirmaciones es falsa cuando usted aumenta su velocidad de 30 km/h a 60 km/h?",
    "options": [
      "Se duplica la energía cinética.",
      "Se cuadruplica la energía cinética.",
      "Se duplica la distancia de reacción.",
      "Se cuadruplica la distancia de frenado."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación falsa es que se duplica la energía cinética. Al aumentar la velocidad de 30 a 60 km/h (el doble), la energía cinética se cuadruplica, no se duplica, porque depende del cuadrado de la velocidad. La distancia de reacción sí se duplica (depende de la velocidad de forma lineal) y la distancia de frenado se cuadruplica, por lo que esas afirmaciones son verdaderas.",
    "wrongExplanations": [
      "",
      "Es verdadera: la energía cinética efectivamente se cuadruplica al duplicar la velocidad, por lo que no es la respuesta buscada (la falsa).",
      "Es verdadera: la distancia de reacción se duplica al duplicar la velocidad, por lo que no es la afirmación falsa.",
      "Es verdadera: la distancia de frenado se cuadruplica al duplicar la velocidad, por lo que no es la afirmación falsa."
    ],
    "page": 8,
    "category": "Conduccion segura",
    "formula": "Energía cinética: E = ½·m·v². Si la velocidad se duplica (30→60 km/h), v² se multiplica por 4 → la energía se CUADRUPLICA (por eso 'se duplica la energía cinética' es FALSA).\n• Distancia de reacción ∝ v → se duplica.\n• Distancia de frenado ∝ v² → se cuadruplica.",
    "deepExplanation": "Esta pregunta evalúa si reconoces cómo cambian las distancias y la energía al variar la velocidad, y la afirmación falsa es que la energía cinética se duplica. El fundamento es la fórmula de la energía cinética, igual a un medio de la masa por la velocidad al cuadrado: como la velocidad está elevada al cuadrado, si pasas de 30 a 60 km/h, es decir el doble, la energía no se duplica sino que se cuadruplica, porque dos al cuadrado es cuatro. Por eso la afirmación que dice que se duplica es la falsa, mientras que la que dice que se cuadruplica es verdadera. En el mismo razonamiento, la distancia de reacción sí se duplica, porque depende de la velocidad de forma lineal, y la distancia de frenado se cuadruplica, porque depende del cuadrado de la velocidad igual que la energía. El mensaje de seguridad es claro: al doblar la velocidad cargas con cuatro veces más energía que disipar en un choque, lo que explica por qué los impactos a mayor velocidad son tan desproporcionadamente más destructivos."
  },
  {
    "id": 38,
    "question": "El auto azul circula a 70 km/h y el rojo a 90 km/h. ¿Dónde es más probable que sus conductores estimen el punto en que se producirá el encuentro de ambos vehículos?",
    "options": [
      "El conductor del auto rojo estima que dicho punto será el 3.",
      "El conductor del auto rojo estima que dicho punto será el 2.",
      "El conductor del auto azul estima que dicho punto será el 1.",
      "El conductor del auto azul estima que dicho punto será el 3."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [
      "q38_0.png"
    ],
    "explanation": "Las afirmaciones correctas son que el conductor del auto rojo estima el punto 3 y el del auto azul también estima el punto 3. A mayor velocidad, el conductor tiende a percibir o estimar que el encuentro entre ambos vehículos ocurrirá más adelante, por lo que ambos coinciden en el punto 3 como lugar probable del cruce.",
    "wrongExplanations": [
      "",
      "Es incorrecto: el conductor del auto rojo no estima el punto 2; según el análisis del problema estima el punto 3.",
      "Es incorrecto: el conductor del auto azul no estima el punto 1; estima el punto 3.",
      ""
    ],
    "page": 8,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta trata sobre la percepción del conductor y cómo la velocidad distorsiona la estimación del lugar de encuentro entre dos vehículos. El principio es que, a mayor velocidad, el conductor tiende a percibir que el punto donde se cruzará o encontrará con el otro vehículo está más adelante de lo que realmente estará, porque su propia rapidez lo lleva a 'proyectar' el encuentro más lejos. En el caso planteado, las afirmaciones correctas son que tanto el conductor del auto rojo, que va a 90 km/h, como el del auto azul, que va a 70 km/h, estiman el punto 3 como lugar probable del encuentro. La consecuencia real de esta tendencia es que las estimaciones de los conductores pueden fallar, sobre todo a alta velocidad, lo que provoca errores de cálculo en cruces e intersecciones. Por eso, en la práctica, conviene no confiarse de la 'sensación' de cuándo y dónde te cruzarás con otro vehículo, reducir la velocidad al acercarte a un cruce y mantener siempre un margen de seguridad."
  },
  {
    "id": 39,
    "question": "¿Qué distancia de detención tiene un tren que circula a alrededor de 100 km/h?",
    "options": [
      "Aproximadamente 100 metros.",
      "Aproximadamente 200 metros.",
      "Entre 800 y 1000 metros.",
      "Más de 2000 metros."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Un tren que circula a alrededor de 100 km/h tiene una distancia de detención de entre 800 y 1000 metros. Por su enorme masa y la baja fricción entre las ruedas y los rieles de acero, el tren no puede frenar rápidamente. Por eso jamás se debe intentar cruzar la vía cuando un tren se aproxima, aunque parezca lejano.",
    "wrongExplanations": [
      "Es muy poco: 100 metros subestima gravemente la distancia que necesita un tren para detenerse.",
      "Es insuficiente: 200 metros está muy por debajo de la distancia real de detención de un tren a esa velocidad.",
      "",
      "Es una sobreestimación: más de 2000 metros excede la distancia de detención típica de un tren a 100 km/h."
    ],
    "page": 8,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es que un tren a unos 100 km/h necesita entre 800 y 1000 metros para detenerse, casi un kilómetro, y la razón está en la física. El tren tiene una masa enorme, de cientos o miles de toneladas, y la energía que hay que disipar para frenarlo es gigantesca. A esto se suma que el contacto entre las ruedas de acero y los rieles de acero tiene muy poca fricción, mucho menos que un neumático de goma sobre el asfalto, por lo que el tren no puede frenar bruscamente como un automóvil. La consecuencia es que, aunque el maquinista vea un obstáculo o un auto cruzando, le será imposible detener la máquina a tiempo. Por eso la regla de oro en los cruces ferroviarios es jamás intentar pasar cuando un tren se aproxima, aunque parezca lejano y lento, porque viene mucho más rápido de lo que aparenta y no podrá frenar por ti. Ante la duda, siempre se detiene el vehículo y se cede el paso al tren."
  },
  {
    "id": 40,
    "question": "¿Qué es lo más importante para evitar chocar al vehículo que va adelante?",
    "options": [
      "Asegurarse de que sus frenos sean eficientes.",
      "Conducir a una velocidad constante.",
      "Mantener una adecuada distancia de separación entre vehículos.",
      "Tener neumáticos en muy buen estado."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Lo más importante para evitar chocar con el vehículo que va adelante es mantener una adecuada distancia de separación. Esa distancia entrega el espacio y el tiempo necesarios para reaccionar y frenar ante una detención brusca del vehículo precedente. Aunque los frenos y neumáticos en buen estado ayudan, sin una distancia suficiente no hay margen para evitar el impacto.",
    "wrongExplanations": [
      "Tener frenos eficientes ayuda, pero sin una distancia de separación adecuada igual no habría espacio para detenerse a tiempo.",
      "Conducir a velocidad constante no garantiza evitar el choque si no se mantiene la distancia con el vehículo de adelante.",
      "",
      "Los neumáticos en buen estado son importantes, pero lo determinante para no chocar al de adelante es mantener la distancia de separación."
    ],
    "page": 8,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Lo más importante para no chocar al vehículo de adelante es mantener una adecuada distancia de separación, y la razón se basa en el concepto de distancia de detención. Cuando el auto de adelante frena de golpe, tú necesitas un tiempo para reaccionar y luego un espacio para frenar; esa distancia de seguimiento es precisamente la que te entrega esos metros y esos segundos para reaccionar y detenerte sin impactarlo. Si vas muy pegado, por más buenos que sean tus frenos y tus neumáticos, simplemente no tendrás espacio físico para evitar el golpe. Por eso la distancia de separación es más decisiva que los otros factores mencionados, que ayudan pero no reemplazan ese margen. Un truco muy usado es la regla de los tres segundos: cuando el auto de adelante pase por una referencia fija, como un poste o una señal, cuenta 'mil uno, mil dos, mil tres', y si llegas a ese punto antes de terminar de contar, vas demasiado cerca y debes aumentar la distancia. Con lluvia o de noche conviene ampliar ese margen aún más."
  },
  {
    "id": 41,
    "question": "Usted va circulando a 50 km/h a lo largo de un camino plano y de asfalto. Las condiciones climáticas son buenas. Sus neumáticos y frenos también están buenos. En estas circunstancias, detenerse le tomará aproximadamente",
    "options": [
      "unos 50 metros",
      "unos 15 metros",
      "unos 10 metros",
      "unos 30 metros"
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "A 50 km/h en condiciones óptimas de pavimento, clima, frenos y neumáticos, la distancia total de detención (reacción más frenado) es de aproximadamente 30 metros. Recuerda que esta distancia incluye los metros que recorres mientras reaccionas y los que avanzas al frenar; nunca es tan corta como parece.",
    "wrongExplanations": [
      "50 metros corresponde a velocidades bastante mayores (cercanas a 80 km/h), no a 50 km/h.",
      "15 metros es muy poco; subestima la distancia de reacción más la de frenado a 50 km/h.",
      "10 metros es una distancia irreal incluso a baja velocidad; ignora el tiempo de reacción.",
      ""
    ],
    "page": 10,
    "category": "Vehiculo y mantencion",
    "formula": "Distancia de detención = reacción + frenado. (Recuerda: m/s = km/h ÷ 3,6)\n• Reacción (1 s a 50 km/h): 50 ÷ 3,6 ≈ 13,9 m.\n• Frenado en seco a 50 km/h ≈ 13–16 m.\n• Total ≈ 27–30 m → ~30 m.",
    "deepExplanation": "El examen evalúa que entiendas que detenerse nunca es instantáneo: tu vehículo recorre dos tramos sumados, la distancia de reacción y la de frenado. Para convertir velocidad a metros por segundo divides los km/h entre 3,6, así que 50 km/h equivalen a unos 13,9 m/s; durante el segundo que tarda tu cerebro en percibir el peligro y mover el pie al freno ya avanzaste cerca de 14 metros sin disminuir nada. A eso le sumas el tramo de frenado propiamente tal, que a 50 km/h en seco ronda los 13 a 16 metros, dando un total cercano a los 30 metros. La razón de fondo es física: la energía que debes disipar al frenar crece con el cuadrado de la velocidad, por eso la distancia se estira más de lo que la intuición sugiere. Un buen truco es imaginar esos 30 metros como tres a cuatro autos en fila más el largo de un bus, para no confiarte cuando alguien cruza de improviso. La consecuencia de subestimarlo es clásica: frenas tarde y atropellas o chocas justo a la velocidad en que creías que ibas a parar 'al tiro'."
  },
  {
    "id": 42,
    "question": "La distancia de detención total es igual a la suma de la distancia de reacción y la de frenado. Aproximadamente, ¿cuál es la mínima distancia de detención total en un asfalto seco, si usted viaja a 90 km/h?",
    "options": [
      "Unos 50 metros",
      "Unos 70 metros",
      "Unos 30 metros",
      "Unos 120 metros"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "A 90 km/h en asfalto seco, sumando la distancia de reacción (alrededor de 25 m) más la de frenado (alrededor de 45 m), la detención total mínima es de unos 70 metros. Es clave entender que la distancia de frenado crece de forma acelerada con la velocidad, por eso a alta velocidad necesitas mucho más espacio.",
    "wrongExplanations": [
      "50 metros corresponde a velocidades menores; subestima la detención total a 90 km/h.",
      "",
      "30 metros es la detención total aproximada a solo 50 km/h, no a 90 km/h.",
      "120 metros sobrestima la distancia; correspondería a velocidades mucho mayores o a calzada mojada."
    ],
    "page": 10,
    "category": "Conduccion segura",
    "formula": "A 90 km/h en asfalto seco (m/s = km/h ÷ 3,6):\n• Reacción (1 s): 90 ÷ 3,6 = 25 m.\n• Frenado ≈ 45 m.\n• Total ≈ 70 m.",
    "deepExplanation": "Aquí el principio clave es que duplicar la velocidad NO duplica la distancia para detenerse, porque el tramo de frenado crece de forma cuadrática mientras el de reacción crece de forma lineal. A 90 km/h primero convierte: 90 dividido entre 3,6 da exactamente 25 m/s, así que en el segundo de reacción recorres 25 metros íntegros antes de tocar el freno. Luego viene el frenado, que a esta velocidad y en asfalto seco ronda los 45 metros, porque hay mucha más energía cinética que disipar. Sumando 25 más 45 obtienes unos 70 metros, casi el largo de una cancha de fútbol completa. El fundamento de por qué importa: a mayor velocidad, el riesgo de no alcanzar a detenerte se dispara, y por eso conviene mantener siempre una distancia de seguimiento amplia con el de adelante. Para recordarlo, asocia 90 km/h con 'siete' decenas de metros, y nota que pasar de 70 a 90 km/h agrega muchos más metros de los que parece."
  },
  {
    "id": 43,
    "question": "Usted conduce un vehículo con frenos y neumáticos en buenas condiciones. La superficie de calzada está seca. ¿Cuál es la distancia aproximada de detención total (distancia de reacción más distancia de frenado) si usted va a 70 km/h?",
    "options": [
      "Unos 15 metros",
      "Unos 80 metros",
      "Unos 45 metros",
      "Unos 25 metros"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "A 70 km/h en calzada seca y con vehículo en buen estado, la distancia de detención total (reacción más frenado) es de aproximadamente 45 metros. Cada incremento de velocidad alarga notoriamente este espacio, por eso es fundamental anticipar y mantener distancia con el vehículo de adelante.",
    "wrongExplanations": [
      "15 metros es muy poco; corresponde apenas a la distancia de reacción a velocidad media.",
      "80 metros sobrestima la distancia; ese valor se acerca a velocidades de 100 km/h o más.",
      "",
      "25 metros subestima la detención total a 70 km/h; ese valor corresponde a unos 50 km/h."
    ],
    "page": 10,
    "category": "Vehiculo y mantencion",
    "formula": "A 70 km/h en seco (m/s = km/h ÷ 3,6):\n• Reacción (1 s): 70 ÷ 3,6 ≈ 19,4 m.\n• Frenado ≈ 25 m.\n• Total ≈ 45 m.",
    "deepExplanation": "Esta pregunta refuerza la misma lógica de los dos tramos, pero a una velocidad intermedia de 70 km/h, muy habitual en avenidas y caminos rurales chilenos. Convierte primero: 70 dividido entre 3,6 da aproximadamente 19,4 m/s, de modo que durante el segundo de reacción ya recorriste cerca de 19 a 20 metros sin frenar. El tramo de frenado a 70 km/h en seco y con el auto en buen estado ronda los 25 metros, así que la detención total queda en torno a los 45 metros. El fundamento es que cada salto de velocidad alarga el frenado de manera acelerada, no proporcional, porque la energía cinética depende del cuadrado de la velocidad. Por eso la recomendación práctica es anticiparte y mantener al menos dos a tres segundos de separación con el vehículo de adelante, midiendo cuándo este pasa por un punto fijo. Si subestimas estos 45 metros y vas muy pegado, una frenada brusca del de adelante termina en alcance casi seguro."
  },
  {
    "id": 44,
    "question": "Usted desea estacionar en bajada en una calle con pendiente pronunciada. ¿Qué debería hacer?",
    "options": [
      "Estacionar detrás de otro auto.",
      "Estacionar con dos ruedas sobre la acera.",
      "Dejar el volante girado hacia la acera.",
      "Dejar puesto el freno de mano."
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Al estacionar en bajada con pendiente pronunciada debes dejar el volante girado hacia la acera (cuneta) y poner el freno de mano. Así, si el vehículo se desplaza, las ruedas delanteras lo dirigen contra la solera deteniéndolo, y el freno de mano impide que ruede libremente. Son medidas complementarias de seguridad para evitar que el auto se vaya solo.",
    "wrongExplanations": [
      "Estacionar detrás de otro auto no es una medida de seguridad válida y puede dañar a ese vehículo si el tuyo se desplaza.",
      "Subir dos ruedas a la acera invade el espacio peatonal y constituye una infracción, no una medida correcta.",
      "",
      ""
    ],
    "page": 10,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de esta maniobra es que un auto estacionado en una pendiente pronunciada puede desplazarse solo si falla un freno o alguien lo golpea, y debes tener una segunda barrera de seguridad además del freno de servicio. Por eso se exigen dos medidas complementarias: dejar puesto el freno de mano, que bloquea mecánicamente las ruedas, y girar el volante hacia la acera o cuneta. En bajada giras las ruedas hacia la solera, de modo que si el vehículo empieza a rodar, las ruedas delanteras lo encaminan contra el borde de la vereda y lo detienen como tope físico, en lugar de dejarlo lanzarse calle abajo. Estacionar tras otro auto o subir ruedas a la acera no son medidas válidas de seguridad y además son infracciones. Un truco para no confundir el sentido del giro: en bajada el volante apunta 'hacia el cordón' para que el auto se 'estacione solo' contra él. La consecuencia de no hacerlo es un vehículo descontrolado bajando la pendiente, que puede causar daños graves o atropellos."
  },
  {
    "id": 45,
    "question": "Usted está descendiendo una pendiente muy larga. ¿Qué debería hacer para ayudar a controlar la velocidad de su vehículo?",
    "options": [
      "Tomar el manubrio firmemente.",
      "Seleccionar una marcha baja.",
      "Seleccionar neutro.",
      "Presionar el pedal de embrague."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "En un descenso largo debes seleccionar una marcha baja para que el motor actúe como freno (freno motor) y ayude a controlar la velocidad. Así evitas usar los frenos de forma continua, lo que podría recalentarlos y hacer que pierdan eficacia.",
    "wrongExplanations": [
      "Tomar firme el manubrio no controla la velocidad; es una postura, no un mecanismo de frenado.",
      "",
      "En neutro pierdes el freno motor y el vehículo se acelera por la pendiente sin control.",
      "Pisar el embrague desconecta el motor de las ruedas, eliminando el freno motor y aumentando la velocidad."
    ],
    "page": 10,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El principio aquí es el freno motor: al seleccionar una marcha baja, el motor gira a mayores revoluciones y ofrece resistencia mecánica que frena el avance del vehículo sin que tengas que pisar el pedal de freno. Esto es vital en descensos largos porque si usaras solo los frenos de manera continua, las pastillas y discos se recalentarían y aparecería el temido 'fade' o pérdida de eficacia por sobrecalentamiento, quedándote sin frenos justo cuando más los necesitas. Seleccionar neutro o pisar el embrague hace exactamente lo contrario: desconecta el motor de las ruedas, eliminas el freno motor y el auto se acelera libremente por gravedad. Por eso esas opciones son peligrosas y están descartadas. El truco mental es: 'bajada larga, marcha corta', igual que harías con un camión cargado. Así controlas la velocidad de forma sostenida y reservas los frenos para correcciones puntuales."
  },
  {
    "id": 46,
    "question": "Usted está virando hacia la derecha en un camino resbaladizo y las ruedas traseras de su vehículo resbalan hacia la izquierda. ¿Qué debería hacer usted?",
    "options": [
      "Frenar firmemente y no girar el manubrio.",
      "Guiar cuidadosamente hacia la izquierda.",
      "Usar el embrague y frenar firmemente.",
      "Girar hacia la derecha."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si las ruedas traseras resbalan hacia la izquierda al virar a la derecha, debes guiar suavemente hacia la izquierda, es decir, hacia donde se desplaza la cola del vehículo, para recuperar el control. Hay que hacerlo con suavidad y sin frenar bruscamente para no agravar el derrape en una superficie resbaladiza.",
    "wrongExplanations": [
      "Frenar firmemente sobre superficie resbaladiza bloquea las ruedas y empeora el derrape, haciendo perder aún más el control.",
      "",
      "Usar el embrague y frenar firme combina dos errores: pierdes tracción y bloqueas las ruedas, agravando el resbalón.",
      "Girar hacia la derecha es hacia el lado contrario al desplazamiento de la cola y acentúa el coletazo."
    ],
    "page": 10,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Cuando la cola del auto se va hacia un lado estás ante un sobreviraje o derrape de las ruedas traseras, y la regla universal de recuperación es contravolantear, es decir, girar el volante hacia el mismo lado donde se desplaza la parte trasera. Si virabas a la derecha y la cola patina hacia la izquierda, debes guiar suavemente hacia la izquierda para realinear el frente del vehículo con la trayectoria real y frenar el giro descontrolado. El fundamento físico es que así apuntas las ruedas delanteras en la dirección hacia la que realmente se mueve el auto, recuperando adherencia y estabilidad. Es crucial hacerlo con suavidad y sin frenar bruscamente, porque en una superficie resbaladiza una frenada fuerte bloquea las ruedas, elimina el agarre y agrava el derrape. La clave para recordarlo: 'mira y dirige hacia donde se va la cola', acompañando el deslizamiento en lugar de pelear contra él. Sobrecorregir o frenar de golpe suele terminar en un trompo completo."
  },
  {
    "id": 47,
    "question": "Usted está próximo a descender por una pendiente muy pronunciada. ¿Qué debería hacer para controlar la velocidad de su vehículo?",
    "options": [
      "Seleccionar un cambio bajo y usar los frenos cuidadosamente.",
      "Seleccionar un cambio alto y usar los frenos cuidadosamente.",
      "Seleccionar un cambio alto y usar los frenos firmemente.",
      "Seleccionar un cambio bajo y evitar usar los frenos."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Antes de una pendiente muy pronunciada debes seleccionar un cambio bajo, para aprovechar el freno motor, y usar los frenos de forma cuidadosa y dosificada. Esta combinación controla la velocidad sin recalentar los frenos, manteniendo su eficacia durante todo el descenso.",
    "wrongExplanations": [
      "",
      "Un cambio alto no entrega freno motor suficiente, dejando casi todo el esfuerzo a los frenos.",
      "Un cambio alto sin freno motor y frenar firme recalienta los frenos y puede hacerles perder eficacia.",
      "Con un cambio bajo bien, pero evitar del todo los frenos no permite regular la velocidad en una bajada pronunciada."
    ],
    "page": 10,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta combina las dos herramientas para bajar una pendiente muy pronunciada de forma segura: el freno motor y los frenos de servicio usados con criterio. Primero seleccionas un cambio bajo antes de iniciar el descenso, porque eso obliga al motor a contener el vehículo y reduce drásticamente cuánto tienes que pisar el freno. Luego usas los frenos de manera cuidadosa y dosificada, con toques cortos en vez de presión constante, para no recalentarlos. El fundamento es evitar el sobrecalentamiento que provoca el fade, esa pérdida de eficacia que deja el pedal blando y sin respuesta justo en la parte más empinada. Un cambio alto te dejaría sin freno motor y dependiendo solo de los frenos, que se recalentarían; por eso esa alternativa se descarta. Y aunque la marcha baja ayuda mucho, evitar completamente los frenos tampoco es realista en una bajada pronunciada, donde a veces necesitas corregir. La combinación correcta es marcha baja más frenos dosificados, que es justo la respuesta."
  },
  {
    "id": 48,
    "question": "La distancia de frenado es la que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. En condiciones normales, ¿cuál sería aproximadamente su distancia de frenado si usted circula a 90 km/h?",
    "options": [
      "Unos 45 metros",
      "Unos 70 metros",
      "Unos 20 metros",
      "Unos 15 metros"
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "A 90 km/h en condiciones normales, la distancia de frenado (solo desde que pisas el freno hasta detenerte, sin contar la reacción) es de aproximadamente 45 metros. Esta distancia aumenta de forma cuadrática con la velocidad, por eso a alta velocidad se requiere mucho más espacio para detenerse.",
    "wrongExplanations": [
      "",
      "70 metros corresponde a la distancia de detención total (reacción más frenado), no solo a la de frenado.",
      "20 metros subestima la distancia de frenado a 90 km/h; corresponde a velocidades menores.",
      "15 metros es muy poco para 90 km/h; ese valor se da a baja velocidad."
    ],
    "page": 10,
    "category": "Conduccion segura",
    "formula": "Distancia de FRENADO (solo frenado, sin reacción) a 90 km/h ≈ 45 m.\nCrece con el cuadrado de la velocidad (∝ v²): si vas al doble, frena en 4 veces la distancia.",
    "deepExplanation": "Es importante distinguir esta pregunta de las de detención total: aquí se pregunta SOLO por la distancia de frenado, que es la que recorres desde que ya pisaste el freno hasta detenerte por completo, sin incluir el segundo de reacción. A 90 km/h en condiciones normales ese tramo es de aproximadamente 45 metros. El concepto físico de fondo es que la distancia de frenado es proporcional al cuadrado de la velocidad, porque la energía cinética que el sistema debe disipar como calor en los frenos crece con v al cuadrado. Esto tiene una consecuencia poderosa: si duplicas la velocidad, no necesitas el doble sino cuatro veces más distancia para frenar; por eso a 45 km/h frenarías en aproximadamente la cuarta parte. Un buen truco es memorizar que a 90 km/h el frenado solo ya equivale a unos 45 metros, y recordar que sumarle el tramo de reacción lleva el total a cerca de 70. Entender esta relación cuadrática es lo que justifica respetar los límites de velocidad."
  },
  {
    "id": 49,
    "question": "¿Qué debería hacer usted para corregir un coletazo de las ruedas traseras?",
    "options": [
      "No girar el volante del vehículo para nada.",
      "Girar el volante hacia el lado opuesto al coletazo.",
      "Girar el volante hacia el lado que se desplaza la cola del vehículo.",
      "Aplicar su freno de mano."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Para corregir un coletazo debes girar el volante hacia el mismo lado que se desplaza la cola del vehículo, es decir, en la dirección del derrape. Así realineas las ruedas con la trayectoria y recuperas el control de manera suave y progresiva.",
    "wrongExplanations": [
      "No girar el volante deja el vehículo sin corrección y el coletazo continúa sin control.",
      "Girar hacia el lado opuesto al coletazo agrava el derrape en lugar de corregirlo.",
      "",
      "El freno de mano bloquea las ruedas traseras y empeora el coletazo, pudiendo provocar un trompo."
    ],
    "page": 12,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Un coletazo es el deslizamiento lateral de la parte trasera del vehículo, y la técnica correcta para corregirlo es siempre la misma: girar el volante hacia el lado hacia el cual se está yendo la cola, lo que se llama contravolantear. El fundamento es que con ese giro alineas las ruedas delanteras con la dirección real del movimiento y recuperas el control de forma suave y progresiva, dejando que el frente del auto 'persiga' a la cola hasta enderezar la trayectoria. Girar hacia el lado opuesto al coletazo es justamente el error que descontrola más el vehículo y termina en trompo, por eso esa opción es incorrecta. Tampoco sirve aplicar el freno de mano, porque bloquea las ruedas traseras y agrava el derrape. La frase para recordarlo es directa: 'el volante sigue a la cola'. Conviene además levantar el pie del acelerador y actuar con suavidad, sin movimientos bruscos que sobrecorrijan el deslizamiento."
  },
  {
    "id": 50,
    "question": "La distancia de frenado es la distancia que recorre un vehículo desde que se presiona el freno hasta que el vehículo se detiene. De las siguientes variables, ¿cuáles influyen en la distancia de frenado?",
    "options": [
      "La velocidad.",
      "El alumbrado público.",
      "El estado de los frenos y neumáticos.",
      "Las condiciones climáticas.",
      "La hora del día."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "La distancia de frenado depende de la velocidad (a mayor velocidad, mucha más distancia), del estado de los frenos y neumáticos (su desgaste reduce la capacidad de detención) y de las condiciones climáticas (una calzada mojada o con hielo alarga el frenado). Estos factores influyen directamente en la adherencia y en cuánto recorre el vehículo al frenar.",
    "wrongExplanations": [
      "",
      "El alumbrado público influye en la visibilidad, pero no en la física del frenado del vehículo.",
      "",
      "",
      "La hora del día no altera la distancia de frenado en sí; afecta la visibilidad, no la adherencia ni la mecánica."
    ],
    "page": 12,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La idea central es separar lo que sí afecta físicamente la capacidad de detenerse de lo que solo afecta la visibilidad. La velocidad influye de manera determinante porque la distancia de frenado crece con su cuadrado, así que pequeños aumentos alargan mucho el frenado. El estado de los frenos y neumáticos también es decisivo: pastillas gastadas, discos en mal estado o neumáticos lisos reducen la fuerza de detención y el agarre con el pavimento. Y las condiciones climáticas importan porque una calzada mojada, con barro o hielo disminuye la adherencia de los neumáticos, alargando notoriamente el frenado. En cambio el alumbrado público y la hora del día solo afectan cuán bien VES el peligro, no la física de cómo se detiene el auto una vez que pisas el freno; por eso no entran en la distancia de frenado. El truco es preguntarte: '¿esto cambia la fricción o solo cuánto veo?'. Si cambia la fricción o la energía a disipar, sí influye en el frenado."
  },
  {
    "id": 51,
    "question": "Usted va a 70 km/hr. Aproximadamente, ¿qué distancia recorrerá su vehículo desde el momento en que usted se percata de un peligro que hay más adelante hasta que comienza a frenar?",
    "options": [
      "Unos 5 metros.",
      "Unos 8 metros.",
      "Unos 20 metros.",
      "Unos 30 metros."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "A 70 km/h, durante el tiempo de reacción de aproximadamente 1 segundo, el vehículo recorre unos 20 metros antes siquiera de que comiences a frenar. Esa distancia de reacción se suma a la de frenado y demuestra por qué hay que anticiparse a los peligros.",
    "wrongExplanations": [
      "5 metros es muy poco; a 70 km/h en un segundo se recorre bastante más.",
      "8 metros también subestima lo que avanzas en el tiempo de reacción a esa velocidad.",
      "",
      "30 metros sobrestima la distancia de reacción a 70 km/h; ese valor correspondería a una velocidad mayor."
    ],
    "page": 12,
    "category": "Conduccion segura",
    "formula": "Distancia de REACCIÓN = velocidad × tiempo de reacción.\nA 70 km/h con 1 s: 70 ÷ 3,6 ≈ 19,4 m ≈ 20 m recorridos ANTES de empezar a frenar.",
    "deepExplanation": "Esta pregunta aísla la distancia de reacción, que es el tramo que recorres entre que percibes el peligro y el instante en que recién comienzas a frenar, sin que el auto haya perdido velocidad todavía. Se calcula multiplicando la velocidad por el tiempo de reacción promedio de aproximadamente 1 segundo. Convierte 70 km/h a metros por segundo dividiendo entre 3,6, lo que da unos 19,4 m/s, así que en ese segundo recorres cerca de 20 metros completamente 'a ciegas', antes de tocar el pedal. El fundamento es que el cerebro necesita tiempo para detectar, decidir y actuar, y durante ese lapso el vehículo no frena nada. La consecuencia práctica es enorme: por eso debes mirar lejos y anticiparte, porque esos 20 metros se pierden sí o sí y se suman después a los metros de frenado. Cualquier distracción, el celular o el cansancio alargan ese tiempo de reacción y, por tanto, esos 20 metros se hacen aún mayores."
  },
  {
    "id": 52,
    "question": "¿Cuál es el tiempo de reacción promedio de un conductor ante un imprevisto?",
    "options": [
      "1 segundo",
      "0.1 minuto",
      "0.1 segundo",
      "2 segundos"
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El tiempo de reacción promedio de un conductor ante un imprevisto es de aproximadamente 1 segundo. En ese lapso el vehículo sigue avanzando sin frenar, por eso se considera al calcular la distancia total de detención.",
    "wrongExplanations": [
      "",
      "0,1 minuto equivale a 6 segundos, un tiempo demasiado largo para ser un tiempo de reacción.",
      "0,1 segundo es irrealmente corto; ningún conductor reacciona tan rápido ante un imprevisto.",
      "2 segundos es más del doble del promedio; sobreestima el tiempo de reacción normal."
    ],
    "page": 12,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "formula": "Tiempo de reacción promedio ≈ 1 segundo.\nEn ese segundo recorres v ÷ 3,6 metros (ej. a 90 km/h ≈ 25 m) antes de pisar el freno.",
    "deepExplanation": "El tiempo de reacción promedio que usa la teoría chilena es de aproximadamente 1 segundo, y es la base para calcular cuánto avanzas antes de empezar a frenar. Conviene descartar las trampas de las otras alternativas: 0,1 minuto en realidad equivale a 6 segundos, un valor enorme e irreal, y 0,1 segundo es demasiado breve, ni siquiera alcanza el reflejo humano normal. El fundamento es que reaccionar implica tres etapas encadenadas, percibir el peligro, decidir qué hacer y ejecutar el movimiento del pie, y todo eso toma alrededor de un segundo en una persona descansada y atenta. Durante ese segundo el vehículo recorre velocidad dividida entre 3,6 metros, por ejemplo unos 25 metros a 90 km/h, completamente sin frenar. El dato clave es que ese segundo no es fijo: el alcohol, la fatiga, los medicamentos o mirar el celular lo aumentan, alargando peligrosamente la distancia de reacción. Por eso conducir sobrio, descansado y atento es lo que mantiene tu reacción cerca de ese segundo ideal."
  },
  {
    "id": 53,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Quien sobrestima sus habilidades para conducir conduce con frecuencia demasiado rápido.",
      "Quien sobrestima sus habilidades para conducir crea situaciones de riesgo a menudo.",
      "Con frecuencia, los muchachos jóvenes sobrestiman sus habilidades, conducen a velocidades excesivas y se ven más involucrados en accidentes que otros.",
      "Muchos conductores jóvenes muestran deficiencias en su madurez personal."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Las cuatro afirmaciones son verdaderas. Quien sobrestima sus habilidades tiende a conducir demasiado rápido y a crear situaciones de riesgo; los conductores jóvenes con frecuencia sobrestiman sus capacidades, exceden la velocidad y se ven más involucrados en accidentes; y muchos jóvenes aún muestran deficiencias en su madurez personal. Todas describen factores reales asociados al riesgo en la conducción.",
    "wrongExplanations": [
      "",
      "",
      "",
      ""
    ],
    "page": 12,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Las cuatro afirmaciones son correctas porque describen un mismo fenómeno bien documentado en seguridad vial: la relación entre exceso de confianza, juventud y siniestralidad. Quien sobrestima sus habilidades tiende a ir demasiado rápido, ya que cree poder controlar situaciones que en realidad lo superan, y por eso mismo genera con frecuencia situaciones de riesgo para sí y para los demás. En el caso de muchos conductores jóvenes, especialmente varones, se combina la sobrestimación de sus capacidades con velocidades excesivas, lo que estadísticamente los involucra en más accidentes que al resto. La cuarta afirmación cierra la idea: muchos conductores jóvenes aún muestran deficiencias en su madurez personal, lo que afecta su juicio al volante. El fundamento es que conducir no es solo destreza física, sino también autoconocimiento y prudencia. Reconocer estas verdades ayuda a que el propio conductor joven baje las revoluciones y maneje a la defensiva."
  },
  {
    "id": 54,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s) en cuanto al desarrollo de la moral de un individuo?",
    "options": [
      "Durante la infancia, antes de llegar a la edad escolar, las personas son egocéntricas y piensan sobre todo en ellas mismas.",
      "Los conocimientos y la experiencia hacen que las personas se vuelvan más comprensivas.",
      "Como la moral de las personas es algo innato, no se puede cambiar.",
      "El comportamiento que tiene una persona como conductor muestra cuánto ha avanzado en el desarrollo de su moral."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Son verdaderas tres afirmaciones: en la infancia temprana las personas son egocéntricas y piensan sobre todo en sí mismas; los conocimientos y la experiencia las vuelven más comprensivas; y el comportamiento al conducir refleja cuánto ha avanzado el desarrollo moral de cada persona. La moral se desarrolla y madura con la experiencia, no es algo fijo.",
    "wrongExplanations": [
      "",
      "",
      "Es falsa: la moral no es innata ni inmutable, sino que se desarrolla y cambia con la experiencia y el aprendizaje.",
      ""
    ],
    "page": 12,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El tema de fondo es que la moral no es algo fijo con lo que se nace, sino una capacidad que se desarrolla y madura a lo largo de la vida, y eso se refleja directamente en cómo conducimos. Por eso son verdaderas tres afirmaciones: en la infancia temprana, antes de la edad escolar, las personas son naturalmente egocéntricas y piensan sobre todo en sí mismas; con el tiempo, los conocimientos y la experiencia las vuelven más comprensivas y capaces de considerar a los demás; y el comportamiento al volante muestra cuánto ha avanzado ese desarrollo moral. La afirmación falsa es la que sostiene que la moral es innata e inmodificable, precisamente lo contrario de lo que enseña la materia. El fundamento práctico es que un conductor maduro piensa en el otro, cede, tolera errores ajenos y respeta las normas no por miedo a la multa sino por convicción. Reconocer que la moral se cultiva es lo que permite mejorar como conductor con la experiencia."
  },
  {
    "id": 55,
    "question": "¿Cuáles 2 de las siguientes cualidades de un individuo denotan que ha alcanzado un alto grado de madurez personal?",
    "options": [
      "No sobrestima sus habilidades; tiene un buen conocimiento de sí mismo.",
      "Mantiene su vehículo en muy buen estado.",
      "Tiene buen conocimiento de las normas que regulan el tránsito.",
      "Cuenta con que otros pueden cometer errores y los acepta."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Un alto grado de madurez personal se denota en quien no sobrestima sus habilidades y tiene buen conocimiento de sí mismo, y en quien acepta que otros pueden cometer errores y los tolera. Ambas cualidades reflejan autoconocimiento y tolerancia, claves para una conducción segura y responsable.",
    "wrongExplanations": [
      "",
      "Mantener el vehículo en buen estado es importante, pero es una conducta mecánica, no un rasgo de madurez personal.",
      "Conocer las normas del tránsito es necesario, pero es conocimiento técnico, no una muestra de madurez personal.",
      ""
    ],
    "page": 12,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "La pregunta apunta a distinguir la madurez PERSONAL del simple conocimiento técnico o del cuidado del vehículo. Las dos cualidades que denotan alta madurez son no sobrestimar las propias habilidades teniendo buen autoconocimiento, y aceptar con tolerancia que los demás pueden equivocarse. El fundamento es que conducir seguro depende sobre todo de la actitud: alguien que reconoce sus límites no se arriesga de más, y alguien que anticipa que el otro puede cometer un error maneja a la defensiva y deja margen para reaccionar. En cambio, mantener el auto en buen estado o conocer bien las normas del tránsito son cosas importantes y necesarias, pero corresponden a la responsabilidad técnica y al conocimiento, no a la madurez personal que pregunta el enunciado. El truco es separar 'cómo soy como persona' de 'qué sé o qué cuido'. La madurez se mide en humildad frente a las propias capacidades y en paciencia frente a los errores ajenos."
  },
  {
    "id": 56,
    "question": "¿Cuál de las siguientes afirmaciones es correcta en cuanto a la capacidad de reacción de los conductores jóvenes inexpertos, comparados con conductores experimentados cuya edad fluctúa entre 35 y 50 años?",
    "options": [
      "Ante situac iones complejas, los conductores jóvenes reaccionan más rápido.",
      "Los conductores jóvenes reaccionan siempre con mayor rapidez.",
      "No hay diferencia entre la capacidad de reacción de los conductores jóvenes inexpertos y la de los mayores.",
      "En situaciones reales, que requieren reacciones complejas, los conductores experimentados reaccionan en un tiempo más corto que los jóvenes inexpertos."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "En situaciones reales que requieren reacciones complejas, los conductores experimentados (de 35 a 50 años) reaccionan en un tiempo más corto que los jóvenes inexpertos. La experiencia permite anticipar y procesar mejor situaciones complejas, lo que compensa con creces la mayor rapidez física de los jóvenes.",
    "wrongExplanations": [
      "Es falsa: ante situaciones complejas los jóvenes inexpertos no reaccionan más rápido, sino que tardan más por falta de experiencia.",
      "Es falsa: los jóvenes no reaccionan siempre más rápido; la experiencia es decisiva en situaciones complejas.",
      "Es falsa: sí existe diferencia, ya que la experiencia mejora la reacción ante situaciones complejas.",
      ""
    ],
    "page": 12,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "La idea clave es que en la conducción real la experiencia pesa más que la rapidez física de los reflejos. Aunque un joven pueda tener un reflejo puro ligeramente más veloz, en situaciones complejas que exigen percibir, interpretar y decidir, el conductor experimentado de 35 a 50 años reacciona en menos tiempo total. El fundamento es que la experiencia le permite anticipar lo que va a ocurrir, reconocer patrones de peligro y elegir la respuesta correcta casi automáticamente, mientras el novato gasta tiempo valioso procesando una escena que no sabe leer. Por eso las otras alternativas son incorrectas: no es cierto que los jóvenes reaccionen siempre más rápido ni que no exista diferencia entre ambos grupos. El dato práctico es que reaccionar bien no es solo mover el pie rápido, sino haber visto venir el problema con antelación. Esa anticipación, fruto de los años al volante, es lo que acorta el tiempo de respuesta efectivo."
  },
  {
    "id": 57,
    "question": "¿Cuál o cuáles característica(s) distingue(n) a un conductor seguro?",
    "options": [
      "Conduce con prudencia y hace todo lo posible por evitar accidentes.",
      "Es considerado y amable con los demás conductores y con los peatones.",
      "Es respetuoso, no obstaculiza ni perturba al resto.",
      "Conduce con buen criterio."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Todas las características describen a un conductor seguro: conducir con prudencia evitando accidentes, ser considerado y amable con otros conductores y peatones, ser respetuoso sin obstaculizar ni perturbar al resto, y conducir con buen criterio. La seguridad vial combina destreza con actitud responsable y respeto por los demás.",
    "wrongExplanations": [
      "",
      "",
      "",
      ""
    ],
    "page": 14,
    "category": "Conduccion segura",
    "deepExplanation": "Las cuatro características son correctas porque juntas definen el perfil completo del conductor seguro, que combina destreza con actitud. Conducir con prudencia y hacer todo lo posible por evitar accidentes es la base, porque manejar a la defensiva previene la mayoría de los siniestros. Ser considerado y amable con otros conductores y peatones, y ser respetuoso sin obstaculizar ni perturbar al resto, apuntan a la convivencia vial: el tránsito es un espacio compartido donde la cortesía reduce conflictos y roces. Y conducir con buen criterio integra todo lo anterior, es decir, tomar decisiones sensatas adaptadas a cada situación. El fundamento es que la seguridad no se logra solo sabiendo manejar técnicamente, sino teniendo una actitud responsable y empática hacia los demás. El truco para recordarlo es que un buen conductor no solo evita chocar, sino que facilita la vida al resto. Por eso ninguna de las opciones sobra: todas suman al mismo perfil."
  },
  {
    "id": 58,
    "question": "¿Cuáles 2 de los siguientes rasgos son característicos de personas que ceden con facilidad a la presión del grupo?",
    "options": [
      "Por lo general, son muy inseguras de sí mismas.",
      "Sienten temor a ser motivo de bromas y risas de los demás.",
      "Tienen mayor autonomía y voluntad para defender sus opiniones.",
      "Son capaces de soportar bromas o que lo tilden de \"cobardes\" o \"mala persona\".",
      "Son muy seguras de sí mismas."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [],
    "explanation": "Quienes ceden con facilidad a la presión del grupo suelen ser personas muy inseguras de sí mismas y que sienten temor a ser motivo de bromas y risas de los demás. Esa falta de confianza y el miedo al rechazo las llevan a actuar según lo que espera el grupo en lugar de defender su propio criterio.",
    "wrongExplanations": [
      "",
      "",
      "Tener mayor autonomía y voluntad para defender las propias opiniones es un rasgo de quien resiste la presión, no de quien cede.",
      "Ser capaz de soportar bromas o que lo tilden de cobarde es propio de quien no cede a la presión del grupo.",
      "Ser muy seguro de sí mismo caracteriza a quien resiste la presión, lo contrario de quien cede fácilmente."
    ],
    "page": 14,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El concepto central es que la presión del grupo afecta sobre todo a quienes tienen baja autoestima y necesitan aprobación ajena. Por eso los dos rasgos característicos son ser muy inseguro de sí mismo y sentir temor a ser motivo de bromas y risas de los demás. El fundamento psicológico es que una persona insegura busca encajar a toda costa, y el miedo al ridículo o al rechazo la lleva a actuar según lo que espera el grupo en lugar de seguir su propio criterio, aunque eso implique conductas peligrosas como correr o beber antes de manejar. Las otras opciones describen justo lo contrario: tener autonomía, ser seguro de sí mismo y poder soportar bromas o que lo tilden de 'cobarde' son rasgos de quien RESISTE la presión del grupo. El dato útil es que aprender a decir que no y tolerar la burla es una señal de madurez. En la conducción, ceder a esa presión es una causa frecuente de accidentes entre jóvenes."
  },
  {
    "id": 59,
    "question": "De los siguientes factores que se presentan en los accidentes de tránsito, ¿cuáles son los 2 más frecuentes en los accidentes que ocurren en carreteras viéndose involucrado un solo vehículo?",
    "options": [
      "Que el conductor no posea licencia para conducir.",
      "Que el conductor esté muy cansado o bajo los efectos del alcohol.",
      "Que el conductor esté bajo los efectos de medicamentos.",
      "Que el conductor sobrestime sus capacidades y conduzca a exceso de velocidad."
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "En accidentes en carretera con un solo vehículo involucrado, los dos factores más frecuentes son que el conductor esté muy cansado o bajo los efectos del alcohol, y que sobrestime sus capacidades conduciendo a exceso de velocidad. La fatiga, el alcohol y el exceso de confianza reducen el control del vehículo y son causas directas de salidas de pista y volcamientos.",
    "wrongExplanations": [
      "No tener licencia es una infracción, pero no es de los factores más frecuentes en accidentes de un solo vehículo en carretera.",
      "",
      "Los medicamentos pueden influir, pero no figuran entre los dos factores más frecuentes en este tipo de accidentes.",
      ""
    ],
    "page": 14,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta se enfoca en accidentes de un solo vehículo en carretera, típicamente salidas de pista, volcamientos o choques contra obstáculos sin que intervenga otro auto. Los dos factores más frecuentes en estos casos son que el conductor esté muy cansado o bajo los efectos del alcohol, y que sobrestime sus capacidades conduciendo a exceso de velocidad. El fundamento es claro: la fatiga y el alcohol reducen la atención, alargan el tiempo de reacción y pueden provocar microsueños que hacen perder el control en una curva o en una recta monótona; el exceso de velocidad combinado con exceso de confianza impide negociar una curva o corregir a tiempo. No tener licencia o estar bajo medicamentos pueden influir, pero no son los factores más característicos de este tipo específico de accidente. El dato práctico es que en viajes largos y solitarios el mayor enemigo es uno mismo: el sueño, el trago y la velocidad. Por eso se recomienda descansar cada dos horas y nunca manejar con sueño o habiendo bebido."
  },
  {
    "id": 60,
    "question": "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en los accidentes de tránsito?",
    "options": [
      "Los errores de los conductores.",
      "Las condiciones climáticas.",
      "Las condiciones de calles y caminos.",
      "Las fallas mecánicas."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El factor que con mayor frecuencia se presenta en los accidentes de tránsito son los errores de los conductores. La gran mayoría de los siniestros se origina en el comportamiento humano (distracción, exceso de velocidad, imprudencia), más que en causas externas o mecánicas.",
    "wrongExplanations": [
      "",
      "Las condiciones climáticas pueden contribuir, pero no son la causa más frecuente de los accidentes.",
      "El estado de calles y caminos influye en algunos casos, pero no es el factor predominante.",
      "Las fallas mecánicas son una causa minoritaria comparada con los errores humanos."
    ],
    "page": 14,
    "category": "Conduccion segura",
    "deepExplanation": "El punto de fondo es que la inmensa mayoría de los accidentes de tránsito tiene origen humano, no en causas externas. El factor más frecuente son los errores de los conductores, como la distracción, el exceso de velocidad, no respetar la prioridad de paso, conducir cansado o ebrio, y la imprudencia en general. Las condiciones climáticas, el mal estado de calles y caminos o las fallas mecánicas también provocan siniestros, pero en una proporción mucho menor frente al comportamiento de las personas. El fundamento de por qué esto importa es esperanzador: si la causa principal es humana, entonces la mayoría de los accidentes es prevenible mejorando nuestra conducta al volante, manejando atentos, sobrios y a la defensiva. El truco para recordarlo es que el factor que más se repite es el que está detrás del volante. Por eso toda la educación vial pone el énfasis en la responsabilidad y el criterio del conductor más que en culpar al camino o al clima."
  },
  {
    "id": 61,
    "question": "En cuanto al estrés al conducir, ¿cuál de las siguientes afirmaciones es falsa?",
    "options": [
      "Un grado demasiado alto de estrés disminuye su campo de atención.",
      "Un estrés moderado puede contribuir a mejorar su rendimiento.",
      "Un conductor muy estresado puede tener reacciones de pánico.",
      "El estrés no influye en absoluto en los actos de un conductor."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación falsa es la (d), porque el estrés sí influye en los actos de un conductor. Está demostrado que un estrés alto reduce el campo de atención y puede provocar reacciones de pánico, mientras que un estrés moderado puede incluso mejorar el rendimiento. Por eso afirmar que el estrés no influye en absoluto es incorrecto.",
    "wrongExplanations": [
      "Es verdadera: un estrés excesivo efectivamente reduce el campo de atención del conductor.",
      "Es verdadera: un nivel moderado de estrés mantiene alerta y puede mejorar el rendimiento.",
      "Es verdadera: un estrés muy alto puede llevar a reacciones de pánico al volante.",
      ""
    ],
    "page": 14,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento aquí es entender el estrés como una respuesta fisiológica del cuerpo que libera adrenalina y cortisol, lo que modifica directamente cómo el conductor percibe y reacciona ante el tránsito. Existe la llamada 'curva del estrés': un nivel bajo o moderado activa los sentidos y mejora el desempeño, pero pasado cierto punto el exceso de estrés produce visión de túnel, bloqueos mentales y reacciones de pánico, justamente lo descrito en las opciones a y c. Por eso la opción d es la falsa, ya que sostiene que el estrés 'no influye en absoluto', cuando la evidencia muestra exactamente lo contrario en ambos extremos. El riesgo real de ignorar esto es que un conductor estresado por una pelea, un atraso o un mal día tome decisiones impulsivas o se quede paralizado ante un imprevisto. Un truco para recordarlo: el estrés funciona como el volumen de la radio, un poco te mantiene atento, demasiado te ensordece y te aturde. La pregunta pide la afirmación FALSA, así que siempre busca la que niega toda influencia, suele ser la trampa."
  },
  {
    "id": 62,
    "question": "¿Qué puede esperarse de un conductor impulsivo?",
    "options": [
      "Que reaccione adecuadamente ante cualquier imprevisto.",
      "Que actúe sin pensar en las consecuencias.",
      "Que conduzca con excesiva precaución.",
      "Que efectúe maniobras sorpresivas que sorprendan a los demás."
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Un conductor impulsivo se caracteriza por actuar sin reflexionar, por lo que es esperable que actúe sin pensar en las consecuencias (b) y que realice maniobras sorpresivas que sorprendan al resto del tránsito (d). Esta falta de control y de anticipación es justamente lo que lo hace peligroso al volante.",
    "wrongExplanations": [
      "Es lo contrario: el conductor impulsivo no reacciona adecuadamente, sino de forma precipitada e irreflexiva.",
      "",
      "La conducción con excesiva precaución corresponde a un perfil tímido o inseguro, no al impulsivo.",
      ""
    ],
    "page": 14,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio detrás de esta pregunta es el perfil psicológico del conductor y cómo la personalidad se traslada al volante. La impulsividad se define como actuar de forma inmediata, sin evaluar consecuencias ni anticipar el efecto sobre los demás, por eso son correctas tanto la b (actuar sin pensar en las consecuencias) como la d (maniobras sorpresivas que sorprenden al resto). El razonamiento es directo: si la conducta base es no reflexionar, entonces las reacciones serán bruscas, los adelantamientos repentinos y los cambios de pista sin aviso. La opción a (reaccionar adecuadamente) y la c (conducir con excesiva precaución) describen lo opuesto a un impulsivo, por eso se descartan. El riesgo real es que las maniobras imprevisibles rompen la confianza mutua del tránsito, donde todos asumimos que el otro hará lo razonable y esperable. Para recordarlo, piensa que el conductor impulsivo es como alguien que habla antes de pensar, pero al volante ese error se paga en accidentes."
  },
  {
    "id": 63,
    "question": "¿Cuál es el mejor consejo para una conducción segura?",
    "options": [
      "Mantener el vehículo en muy buenas condiciones.",
      "Respetar los límites de velocidad.",
      "Evitar conducir durante la noche.",
      "Contar siempre con tiempo de sobra al conducir."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "El mejor consejo para una conducción segura es contar siempre con tiempo de sobra (d), porque el apremio por la falta de tiempo es lo que lleva a apurarse, exceder la velocidad y arriesgarse innecesariamente. Conducir sin prisa permite anticiparse, respetar las normas y reaccionar con calma.",
    "wrongExplanations": [
      "Mantener el vehículo en buenas condiciones es importante, pero por sí solo no es el mejor consejo de conducción segura.",
      "Respetar los límites de velocidad es necesario, pero es solo una parte y se logra mejor cuando se cuenta con tiempo suficiente.",
      "Evitar conducir de noche no es el mejor consejo general; con precaución se puede conducir de noche con seguridad.",
      ""
    ],
    "page": 14,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta apunta a la raíz de la mayoría de las conductas riesgosas: el apremio por el tiempo. Aunque mantener el vehículo en buen estado y respetar los límites de velocidad son buenas prácticas, el mejor consejo es contar siempre con tiempo de sobra (d), porque es la condición que previene la cadena de malas decisiones. El razonamiento paso a paso es así: si vas atrasado, te apuras; si te apuras, excedes la velocidad, te saltas precauciones y te arriesgas en adelantamientos; en cambio, con tiempo de sobra puedes anticiparte, observar mejor y reaccionar con calma. La norma de manejo defensivo en Chile insiste en planificar la salida con holgura justamente por esto. El riesgo de no hacerlo es convertir cada semáforo y cada cruce en una carrera contra el reloj. Truco para fijarlo: 'el que sale tarde, maneja apurado, y el que maneja apurado, maneja peligroso'."
  },
  {
    "id": 64,
    "question": "¿De cuáles 2 maneras puede usted contribuir con mayor eficacia a la seguridad de tránsito?",
    "options": [
      "Contando siempre con tiempo de sobra para conducir.",
      "Manteniendo su vehículo en condiciones óptimas.",
      "Evitando conducir durante la noche.",
      "Conduciendo a la defensiva."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Las dos maneras más eficaces de contribuir a la seguridad son contar siempre con tiempo de sobra (a) y conducir a la defensiva (d). Tener tiempo evita la prisa y las maniobras arriesgadas, mientras que conducir a la defensiva implica anticiparse a los errores de los demás y prevenir accidentes.",
    "wrongExplanations": [
      "",
      "Mantener el vehículo en condiciones óptimas ayuda, pero el énfasis de esta pregunta está en la conducta del conductor.",
      "Evitar conducir de noche no es una de las formas más eficaces de contribuir a la seguridad de tránsito.",
      ""
    ],
    "page": 14,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta pregunta es que la seguridad vial depende tanto de tu actitud previa al manejo como de tu técnica durante el manejo, por eso pide DOS maneras que se complementan. Contar con tiempo de sobra (a) ataca la causa más común de imprudencias, ya que sin prisa no necesitas excederte ni arriesgarte. Conducir a la defensiva (d) significa anticiparse a los errores ajenos, asumir que el otro puede equivocarse y mantener una posición y velocidad que te den margen de reacción. Ambas se eligen porque son las únicas que dependen 100% de tu conducta y previenen activamente el accidente, mientras que mantener el vehículo óptimo (b) es necesario pero no evita errores de manejo, y evitar la noche (c) no siempre es posible ni resuelve el fondo. El riesgo de descuidar estas dos es quedar a merced del azar y de los errores de terceros. Recuerda la regla defensiva: maneja como si todos los demás pudieran cometer un error en cualquier momento."
  },
  {
    "id": 65,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "La capacidad de reacción de una persona se ve afectada con pequeñas concentraciones de alcohol en su organismo.",
      "Una buena taza de café acelera el proceso mediante el cual el organismo se libera del alcohol.",
      "Con pequeñas concentraciones de alcohol en el organismo de un individuo, disminuyen ciertas inhibiciones y tiende a sobrestimar sus capacidades.",
      "La capacidad de interpretación y decisión de un conductor experimentado no se ven afectadas con sólo 2 tragos de licor fuerte."
    ],
    "correct": [
      0,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Son verdaderas la (a) y la (c). Incluso pequeñas concentraciones de alcohol afectan la capacidad de reacción, y además disminuyen las inhibiciones haciendo que la persona sobrestime sus propias capacidades. Esta combinación es muy peligrosa, porque el conductor cree estar bien cuando en realidad ya está disminuido.",
    "wrongExplanations": [
      "",
      "Es falsa: el café no acelera la eliminación del alcohol; solo el tiempo permite que el organismo lo metabolice.",
      "",
      "Es falsa: la experiencia no protege; incluso pocos tragos afectan la interpretación y la toma de decisiones de cualquier conductor."
    ],
    "page": 15,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio clave de esta pregunta es que el alcohol afecta al organismo en dos frentes simultáneos y peligrosos: reduce las capacidades reales y aumenta la percepción de capacidad. La opción a es verdadera porque incluso concentraciones pequeñas de alcohol enlentecen la capacidad de reacción, esto está demostrado científicamente y no requiere estar 'borracho'. La opción c es verdadera porque el alcohol actúa como depresor del sistema nervioso, desinhibe y hace que la persona sobrestime lo que puede hacer. La combinación de a y c es la trampa mortal: estás más lento pero te crees más capaz. La opción b es un mito muy extendido, el café no acelera la eliminación del alcohol, solo te despierta un poco; y la d es falsa porque ni siquiera la experiencia protege contra el deterioro químico de 2 tragos fuertes. El riesgo real es el exceso de confianza con capacidades disminuidas. Truco: el alcohol miente, te susurra que estás bien justo cuando peor estás."
  },
  {
    "id": 66,
    "question": "En cuanto a la concentración de alcohol en la sangre de una persona que ingiere la misma cantidad en ocasiones diferentes, ¿cuál de las siguientes afirmaciones es falsa?",
    "options": [
      "Aunque la persona beba la misma cantidad de alcohol cada ocasión, la concentración de éste en su sangre puede ser diferente.",
      "La concentración de alcohol depende de cuánto se come en cada ocasión.",
      "Entre otros factores, la concentración de alcohol también depende del tiempo que dura la ingestión cada vez.",
      "Si la cantidad de alcohol ingerida en cada ocasión es exactamente la misma, la concentración de alcohol en la sangre también será la misma."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación falsa es la (d), porque la concentración de alcohol en la sangre NO depende solo de la cantidad ingerida. Factores como cuánto se come, el tiempo que dura la ingestión, el peso y el sexo de la persona hacen que, aun bebiendo lo mismo, la concentración varíe en cada ocasión.",
    "wrongExplanations": [
      "Es verdadera: aun bebiendo la misma cantidad, la concentración en sangre puede variar según las condiciones de cada ocasión.",
      "Es verdadera: comer antes o durante la ingesta influye en cómo se absorbe el alcohol.",
      "Es verdadera: el tiempo en que se bebe afecta la concentración alcanzada en la sangre.",
      ""
    ],
    "page": 15,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta se basa en la farmacocinética del alcohol, es decir, cómo el cuerpo absorbe y procesa el alcohol, que depende de muchas más variables que la sola cantidad ingerida. Son verdaderas a, b y c porque la concentración en sangre realmente varía según cuánto se coma (el estómago lleno enlentece la absorción), el tiempo que dura la ingestión (beber lento da tiempo a metabolizar) y otros factores como peso, sexo e hidratación. La afirmación falsa es la d, que comete el error de suponer una relación matemática fija entre cantidad bebida y concentración resultante. El razonamiento es que dos noches distintas, con la misma cantidad de alcohol, pueden arrojar alcoholemias diferentes según el contexto. El riesgo real de creer en la d es pensar 'siempre bebo lo mismo y manejo bien', cuando un día con el estómago vacío esa misma dosis puede dejarte sobre el límite legal. Para recordarlo: el alcohol no es una calculadora, el mismo trago no da siempre el mismo resultado. La pregunta pide la FALSA, así que apunta a la que promete un resultado idéntico y garantizado."
  },
  {
    "id": 67,
    "question": "¿Qué efecto(s) sobre la visión tiene el conducir a unos 100 km/h?",
    "options": [
      "A la mayoría de los conductores se les cansa la vista después de conducir más o menos media hora.",
      "El campo visual se reduce, ya que a esa velocidad se tiende a fijar la mirada recta a lo lejos.",
      "Resulta más difícil percibir movimientos a los lados de la carretera.",
      "La visión se adapta automáticamente a la alta velocidad y, por lo tanto, el resto del tránsito se percibe igual que al ir a una velocidad baja."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "A unos 100 km/h se produce el efecto de visión de túnel: el campo visual se reduce porque la mirada tiende a fijarse recta y a lo lejos (b), y por eso resulta más difícil percibir los movimientos a los lados de la carretera (c). A mayor velocidad, menor es el ángulo de visión útil del conductor.",
    "wrongExplanations": [
      "El cansancio visual depende de muchos factores, pero no es el efecto característico que la velocidad produce sobre el campo visual.",
      "",
      "",
      "Es falsa: la visión no se adapta a la velocidad; al contrario, el campo visual se estrecha y se percibe menos del entorno."
    ],
    "page": 15,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento de esta pregunta es un fenómeno fisiológico real llamado visión de túnel o reducción del campo visual con la velocidad. A baja velocidad el ojo abarca un ángulo amplio, pero a unos 100 km/h el conductor fija instintivamente la mirada lejos y recta para procesar lo que viene, lo que estrecha el campo visual útil, por eso es verdadera la opción b. Como consecuencia directa, se vuelve más difícil percibir los movimientos laterales de la carretera, como un peatón, animal o vehículo que se aproxima desde el costado, lo que valida la opción c. La opción d es falsa y peligrosa porque la visión NO se adapta mágicamente, físicamente se pierde percepción periférica al aumentar la velocidad. El riesgo real es no advertir a tiempo un peligro que entra por el lado, donde justamente ocurren muchos atropellos y colisiones en cruces a alta velocidad. Truco para recordarlo: mientras más rápido vas, más se cierra tu campo de visión como mirando por un tubo, por eso a alta velocidad conviene mover más la vista y bajar la velocidad en zonas con tránsito lateral."
  },
  {
    "id": 68,
    "question": "¿Cuáles son los primeros síntomas de cansancio ?",
    "options": [
      "Se comienza a sentir calor y agresividad.",
      "Se comienza a sentir falta de interés y aparecen los bostezos.",
      "Se comienza a sentir dificultad para mantener la dirección.",
      "Se comienza a sentir que los párpados se cierran."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Los primeros síntomas de cansancio son la falta de interés y la aparición de los bostezos (b). Son señales tempranas de que el organismo necesita descanso. Los demás síntomas, como la dificultad para mantener la dirección o el cierre de los párpados, aparecen en una etapa más avanzada y son más peligrosos.",
    "wrongExplanations": [
      "El calor y la agresividad no son los primeros síntomas característicos del cansancio al conducir.",
      "",
      "La dificultad para mantener la dirección es un síntoma de fatiga avanzada, no de los primeros.",
      "Que se cierren los párpados es un síntoma tardío y muy grave de cansancio, no el inicial."
    ],
    "page": 15,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta busca que reconozcas la fatiga en su etapa inicial, cuando todavía es reversible y puedes actuar a tiempo. Los primeros síntomas son la falta de interés y los bostezos (opción b), señales sutiles con que el cerebro avisa que necesita oxígeno y descanso antes de que el deterioro sea grave. El razonamiento es cronológico: primero aparece el desgano y el bostezo, luego la dificultad para mantener la dirección (c) y finalmente el cierre involuntario de los párpados (d), que ya es una etapa crítica y cercana al microsueño. La opción a (calor y agresividad) no corresponde a los primeros síntomas del cansancio. El riesgo real de ignorar las señales tempranas es llegar al microsueño, donde el conductor pierde el control unos segundos sin darse cuenta, suficiente para un accidente fatal en carretera. El truco clave es: el primer bostezo es una orden de tu cuerpo para empezar a buscar dónde detenerte, no lo ignores esperando 'aguantar un poco más'."
  },
  {
    "id": 69,
    "question": "El modo como percibimos una situación depende, entre otros factores, de nuestras experiencias anteriores, intereses, expectativas y necesidades. En este contexto, ¿cuál de las siguientes afirmaciones es falsa?",
    "options": [
      "Un conductor que siente apremio por falta de tiempo puede subestimar los riesgos de la alta velocidad.",
      "Los conductores ven principalmente aquéllo que les interesa en un momento y lo que esperan ver.",
      "Varios conductores que ven lo mismo perciben las situaciones de tránsito también del mismo modo.",
      "También a los conductores experimentados a veces les pasan inadvertidas informaciones importantes."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación falsa es la (c), porque distintos conductores NO perciben igual una misma situación. La percepción depende de las experiencias, intereses, expectativas y necesidades de cada uno, por lo que ante lo mismo cada persona puede interpretar la situación de tránsito de manera distinta.",
    "wrongExplanations": [
      "Es verdadera: el apremio por el tiempo lleva a subestimar los riesgos de la alta velocidad.",
      "Es verdadera: los conductores tienden a ver lo que les interesa y lo que esperan ver.",
      "",
      "Es verdadera: incluso conductores experimentados pueden pasar por alto información importante."
    ],
    "page": 15,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta pregunta es la psicología de la percepción: no vemos la realidad tal cual es, sino filtrada por nuestras experiencias, intereses, expectativas y necesidades. Por eso es falsa la opción c, que afirma que varios conductores ven lo mismo y lo perciben igual, cuando ocurre justo lo contrario, cada persona interpreta una misma escena de tránsito según su estado y su atención. Las demás son verdaderas: el apremio por el tiempo lleva a subestimar el riesgo de la velocidad (a), tendemos a ver lo que nos interesa y esperamos ver (b), y hasta a los expertos se les escapan datos importantes (d). El razonamiento es que la percepción es selectiva y subjetiva, no una cámara objetiva. El riesgo real es confiar en que 'lo vi todo', cuando tu mente pudo descartar inconscientemente algo crucial como un ciclista o una señal. Truco: dos testigos de un mismo choque casi nunca cuentan exactamente lo mismo, y eso prueba que la percepción es personal. Recuerda que la pregunta pide la afirmación FALSA."
  },
  {
    "id": 70,
    "question": "De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)?",
    "options": [
      "El factor humano es el principal causante de que surjan situaciones de riesgo en el tránsito.",
      "La falta de atención a las condiciones del tránsito es una de las principales causa de accidentes.",
      "Un conductor que va con mucha prisa tiende a subestimar los riesgos.",
      "Discutir con alguien o estar pendiente de la música de la radio, aumenta las posibilidades de pasar por alto circunstancias importantes en el tránsito."
    ],
    "correct": [
      0,
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Las cuatro afirmaciones son verdaderas. El factor humano es la principal causa de las situaciones de riesgo (a) y la falta de atención es una de las principales causas de accidentes (b). Además, la prisa lleva a subestimar los riesgos (c) y las distracciones, como discutir o estar pendiente de la radio, aumentan la probabilidad de pasar por alto información importante (d).",
    "wrongExplanations": [
      "",
      "",
      "",
      ""
    ],
    "page": 15,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta resume el corazón de la conducción segura: el factor humano es el eslabón decisivo. Las cuatro afirmaciones son verdaderas porque describen distintas caras del mismo problema. La opción a establece el principio general, que la mayoría de los accidentes se origina en conductas y decisiones humanas más que en fallas mecánicas o del camino. La opción b concreta una de esas conductas, la falta de atención, que es causa principal de siniestros. La opción c muestra cómo el estado mental, la prisa, distorsiona la evaluación del riesgo. Y la d ejemplifica las distracciones cotidianas, discutir o manipular la radio, que roban atención justo cuando más se necesita. El razonamiento es que todas convergen en lo mismo: el conductor concentrado y sin prisa previene; el distraído o apurado, falla. El riesgo real es subestimar lo decisivo que es tu propio estado mental. Truco: cuando todas las opciones suenan razonables y coherentes con la seguridad, lo más probable es que todas sean correctas."
  },
  {
    "id": 71,
    "question": "En relación con la técnica de observación de los conductores inexpertos, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Los conductores inexpertos concentran su mirada en puntos fijos.",
      "Los conductores inexpertos aprovechan al máximo su visión periférica.",
      "Los conductores inexpertos observan el entorno que los rodea en forma más sistemática que los conductores experimentados.",
      "No hay mayores diferencias en cuanto a cómo observan el entorno los conductores inexpertos y los con gran experiencia."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La verdadera es la (a): los conductores inexpertos concentran su mirada en puntos fijos, en lugar de explorar el entorno. El conductor con experiencia, en cambio, mueve la vista de forma más amplia y aprovecha mejor su visión periférica para anticiparse a los peligros.",
    "wrongExplanations": [
      "",
      "Es falsa: son los conductores experimentados quienes aprovechan mejor la visión periférica.",
      "Es falsa: los conductores experimentados, no los inexpertos, observan el entorno de forma más sistemática.",
      "Es falsa: sí existen diferencias claras en la forma de observar entre conductores inexpertos y experimentados."
    ],
    "page": 15,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta pregunta es la diferencia en la técnica de observación entre un conductor novato y uno experimentado. Es verdadera solo la opción a: los inexpertos concentran la mirada en puntos fijos, típicamente clavan la vista en el auto de adelante o en un punto cercano del camino, en lugar de explorar activamente el entorno. El razonamiento es que con la experiencia se aprende a barrer la escena con la vista, mirar lejos, a los lados, revisar espejos y aprovechar la visión periférica, por eso las opciones b y c (que atribuyen al novato buena visión periférica y observación sistemática) son falsas, esas son virtudes del conductor experto. La opción d también es falsa porque sí existen diferencias notorias. El riesgo real de fijar la vista es perder el contexto y reaccionar tarde ante lo que aparece por los costados o más adelante. Truco para mejorar desde novato: practica mover la vista constantemente y mirar al menos 12 segundos por delante, no te quedes pegado al parachoques del auto de adelante."
  },
  {
    "id": 72,
    "question": "De las siguientes afirmaciones, ¿cuál o cuáles es(son) verdadera(s)?",
    "options": [
      "El tener una buena visión es imprescindible para poder captar las diversas situaciones que se presentan al conducir.",
      "Existe un alto riesgo de que los conductores cuyo campo visual no es lo suficientemente amplio, no alcancen a reaccionar a tiempo ante peligros provenientes de los lados.",
      "Si usted conduce durante un largo tiempo en condiciones difíciles, puede tener problemas para apreciar correctamente lo que ve y, por lo tanto, tomar decisiones equivocadas.",
      "Las personas jóvenes son más sensibles a la luz deslumbrante que los mayores."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Son verdaderas la (a), (b) y (c). Una buena visión es imprescindible para captar las situaciones del tránsito (a); un campo visual reducido aumenta el riesgo de no reaccionar a tiempo ante peligros laterales (b); y conducir mucho tiempo en condiciones difíciles puede llevar a apreciar mal lo que se ve y tomar decisiones equivocadas (c).",
    "wrongExplanations": [
      "",
      "",
      "",
      "Es falsa: son las personas mayores quienes suelen ser más sensibles al deslumbramiento, no las jóvenes."
    ],
    "page": 16,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio de esta pregunta es que la visión es el sentido más importante al conducir, ya que aporta cerca del 90% de la información que necesitamos en el tránsito. Son verdaderas a, b y c. La a establece lo básico, sin buena visión no se captan las situaciones del camino. La b explica que un campo visual reducido eleva el riesgo de no reaccionar a tiempo ante peligros que vienen de los lados, como en cruces o salidas. La c advierte sobre la fatiga visual, conducir largo rato en condiciones difíciles, como lluvia, noche o deslumbramiento, degrada la apreciación de lo que se ve y lleva a decisiones equivocadas. La opción d es falsa porque ocurre al revés: en realidad las personas mayores son más sensibles al deslumbramiento que las jóvenes, debido a cambios naturales del ojo con la edad. El riesgo real es manejar con problemas visuales no corregidos o agotado, creyendo que ves bien. Truco: si necesitas lentes, úsalos siempre al volante, y descansa la vista en viajes largos."
  },
  {
    "id": 73,
    "question": "¿Cuándo es alto el riesgo de interpretar erróneamente la realidad al conducir?",
    "options": [
      "Cuando va por un camino montañoso y con muchas sinuosidades, y la visibilidad es muy mala.",
      "Cuando usted está muy cansado, especialmente si conduce de noche.",
      "Cuando va por carretera y existe una densa niebla.",
      "Cuando con buenas condiciones de visibilidad usted conduce por una carretera con buenas demarcaciones viales."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "El riesgo de interpretar mal la realidad es alto en condiciones que dificultan la visibilidad o disminuyen al conductor: camino montañoso y sinuoso con muy mala visibilidad (a), cansancio extremo especialmente de noche (b) y densa niebla en carretera (c). En todas ellas falta información o la capacidad de procesarla está reducida.",
    "wrongExplanations": [
      "",
      "",
      "",
      "Con buena visibilidad y buenas demarcaciones el riesgo de interpretar mal la realidad es bajo, no alto."
    ],
    "page": 17,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta trata sobre cuándo aumenta el riesgo de interpretar mal la realidad del camino, que ocurre cuando falta información visual o cuando tu capacidad para procesarla está disminuida. Son correctas a, b y c. En un camino montañoso y sinuoso con muy mala visibilidad (a) no alcanzas a ver lo que viene tras cada curva, por lo que tu cerebro 'rellena' con suposiciones que pueden estar equivocadas. Con cansancio extremo, sobre todo de noche (b), el procesamiento mental se enlentece y aumentan los errores de interpretación e incluso las ilusiones visuales. Con niebla densa (c) la información llega distorsionada o incompleta, alterando distancias y velocidades. La opción d describe lo opuesto, buena visibilidad y buena demarcación, donde el riesgo es bajo, por eso se descarta. El riesgo real es tomar decisiones, como adelantar o mantener velocidad, basadas en una realidad que no percibiste bien. Truco: cuando la información es escasa o tú estás agotado, baja la velocidad para darte más tiempo de interpretar correctamente."
  },
  {
    "id": 74,
    "question": "¿Qué debería hacer usted si está tomando un remedio para la tos y no está seguro si éste puede afectar su conducción?",
    "options": [
      "No conducir tan pronto haya ingerido el remedio, sino que esperar un rato.",
      "Conducir siempre que se sienta bien.",
      "Preguntar a su doctor.",
      "Solicitar consejo a un amigo o pariente."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Lo correcto es preguntar a su doctor (c), porque es el profesional capacitado para saber si un medicamento afecta la conducción. Muchos remedios para la tos producen somnolencia u otros efectos, y solo el médico puede orientarlo con fundamento técnico.",
    "wrongExplanations": [
      "Esperar un rato no garantiza que el efecto del remedio desaparezca; lo seguro es consultar al médico.",
      "Sentirse bien no asegura que el remedio no esté afectando sus capacidades de conducción.",
      "",
      "Un amigo o pariente no tiene el conocimiento médico para saber si el remedio afecta la conducción."
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento de esta pregunta es la responsabilidad de informarse con la fuente correcta antes de exponerse a un riesgo. Lo correcto es preguntar a su doctor (c), porque el médico es el único profesional con el conocimiento técnico para saber si un medicamento específico, y su interacción con tu organismo, afecta la conducción. Muchos remedios para la tos contienen antihistamínicos o codeína que provocan somnolencia, visión borrosa o reacciones más lentas. El razonamiento descarta las otras opciones: 'esperar un rato' (a) no garantiza nada si el efecto dura horas; 'conducir si te sientes bien' (b) es engañoso porque el remedio puede afectarte sin que lo notes; y un amigo o pariente (d) carece de criterio médico. El riesgo real es manejar disminuido sin saberlo y causar un accidente. Truco práctico: ante la duda sobre cualquier medicamento, la regla de oro es consultar a un profesional de salud, nunca a la intuición ni al consejo de terceros sin formación."
  },
  {
    "id": 75,
    "question": "Usted está tomando unos remedios que probablemente afectarán su conducción. ¿Qué debería hacer?",
    "options": [
      "Limitar su conducción sólo a viajes esenciales.",
      "Conducir solamente acompañado por alguien que posea una licencia de conducir.",
      "Conducir sólo distancias cortas.",
      "Solicitar consejo médico antes de conducir."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Lo correcto es solicitar consejo médico antes de conducir (d). Si los remedios probablemente afectarán su conducción, solo el médico puede indicarle si es seguro manejar o si debe abstenerse. La prudencia y la seguridad propia y de terceros lo exigen.",
    "wrongExplanations": [
      "Limitar los viajes no elimina el riesgo: si el remedio afecta su conducción, igual está disminuido en cualquier trayecto.",
      "Ir acompañado por otro licenciado no compensa la disminución de sus capacidades como conductor.",
      "Conducir distancias cortas no reduce el peligro de tener las reacciones afectadas por el medicamento.",
      ""
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta refuerza el principio de la consulta médica, pero en un escenario más definido: ya sabes que los remedios 'probablemente afectarán' tu conducción. La respuesta correcta es solicitar consejo médico antes de conducir (d), porque solo el médico puede determinar si es seguro manejar, en qué momento o si debes abstenerte por completo. El razonamiento descarta las opciones a, b y c porque todas asumen que igual vas a conducir y solo buscan reducir el riesgo, limitar viajes, ir acompañado o manejar distancias cortas, pero ninguna elimina el peligro de fondo: tus capacidades estarán disminuidas en cualquier distancia. La diferencia con la pregunta anterior es que aquí ya hay una sospecha fuerte de afectación, lo que hace aún más obligatoria la consulta previa. El riesgo real es que un trayecto 'corto' puede ser igual de mortal que uno largo. Truco para recordarlo: cuando algo probablemente afecta tu manejo, no se negocia la distancia ni la compañía, se consulta primero y se decide después."
  },
  {
    "id": 76,
    "question": "Su doctor le ha recetado un tratamiento. ¿Por qué usted debe consultarle si puede conducir o no?",
    "options": [
      "Porque algunas medicinas pueden hacer que sus reacciones sean más lentas.",
      "Porque las drogas influyen en su conducción al hacer más rápidas sus reacciones.",
      "Porque en caso de accidente no estaría cubierto por el Seguro Obligatorio.",
      "Porque las medicinas que está tomando pueden afectar su visión."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe consultar a su doctor porque algunas medicinas pueden hacer que sus reacciones sean más lentas (a). Una reacción más lenta al volante aumenta el riesgo de accidente, por lo que es indispensable saber de antemano si el tratamiento afecta su capacidad para conducir.",
    "wrongExplanations": [
      "",
      "Es falsa: las medicinas que afectan la conducción tienden a enlentecer las reacciones, no a acelerarlas.",
      "El motivo principal no es la cobertura del seguro, sino el efecto del medicamento sobre sus capacidades.",
      "Aunque algunas medicinas afectan la visión, la razón que plantea esta pregunta es el enlentecimiento de las reacciones."
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta apunta al porqué fisiológico de consultar al médico ante un tratamiento. La respuesta correcta es la a: algunas medicinas pueden hacer que tus reacciones sean más lentas. El fundamento es que muchos fármacos, como relajantes, antialérgicos, ansiolíticos o algunos para el dolor, actúan sobre el sistema nervioso central y enlentecen el tiempo de reacción, ese instante entre que ves un peligro y actúas. El razonamiento descarta las demás: la b es falsa porque las drogas no hacen tus reacciones más rápidas, las deterioran; la c es incorrecta como motivo principal, el Seguro Obligatorio (SOAP) cubre a las víctimas independientemente; y aunque algunas medicinas sí pueden afectar la visión (d), la afirmación general y más segura sobre el riesgo es el enlentecimiento de las reacciones. El riesgo real es que medio segundo de reacción más lento a 100 km/h equivale a varios metros recorridos sin frenar. Truco: a 100 km/h recorres unos 28 metros por segundo, así que cualquier demora en reaccionar se mide en metros de distancia perdida."
  },
  {
    "id": 77,
    "question": "Si usted ha ingerido alcohol, ¿cuál o cuáles son los efectos más probables?",
    "options": [
      "Su capacidad de coordinación se reducirá.",
      "Su autoconfianza se incrementará.",
      "Presentará ceguera al color.",
      "Sus reacciones serán más rápidas.",
      "Su juicio empeorará.",
      "Su capacidad de concentración aumentará."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "El alcohol reduce la capacidad de coordinación (a), incrementa falsamente la autoconfianza (b) y empeora el juicio (e). Esta combinación es peligrosa: la persona se siente más capaz mientras en realidad está más torpe y con peor criterio para tomar decisiones al volante.",
    "wrongExplanations": [
      "",
      "",
      "Es falsa: el alcohol no produce ceguera al color.",
      "Es falsa: el alcohol enlentece las reacciones, no las hace más rápidas.",
      "",
      "Es falsa: el alcohol disminuye la capacidad de concentración, no la aumenta."
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento de esta pregunta es identificar el efecto combinado del alcohol como depresor del sistema nervioso central. Son correctas la a, la b y la e. El alcohol reduce la coordinación motora (a) porque afecta el cerebelo y la conexión entre cerebro y músculos. Incrementa falsamente la autoconfianza (b) porque desinhibe y nubla la autocrítica. Y empeora el juicio (e) porque deteriora la capacidad de evaluar riesgos y tomar buenas decisiones. El razonamiento descarta las demás: el alcohol NO acelera reacciones (d, falso, las enlentece), NO mejora la concentración (f, falso, la reduce) y NO causa ceguera al color (c, que es una condición visual no relacionada). El peligro está en la mezcla de a, b y e: menos coordinación, peor criterio y más confianza es la receta del accidente. Truco para recordar: el alcohol baja todo lo bueno (coordinación, juicio, concentración) y solo sube lo malo (la confianza ciega), por eso el conductor ebrio se cree mejor mientras maneja peor."
  },
  {
    "id": 78,
    "question": "¿Cómo afecta el consumo de alcohol a su conducción?",
    "options": [
      "Acelera sus reacciones.",
      "Aumenta su lucidez.",
      "Mejora su coordinación.",
      "Reduce su concentración."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "El consumo de alcohol reduce su concentración (d). Al disminuir la atención y la concentración, el conductor pasa por alto información del tránsito y reacciona peor, lo que aumenta notablemente el riesgo de accidente.",
    "wrongExplanations": [
      "Es falsa: el alcohol enlentece las reacciones, no las acelera.",
      "Es falsa: el alcohol disminuye la lucidez en lugar de aumentarla.",
      "Es falsa: el alcohol empeora la coordinación, no la mejora.",
      ""
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta aísla uno de los efectos centrales del alcohol sobre la conducción: la reducción de la concentración (opción d). El fundamento es que el alcohol es un depresor del sistema nervioso, por lo que disminuye la capacidad de mantener la atención sostenida y de procesar varias cosas a la vez, justo lo que exige el tránsito. El razonamiento descarta de plano las otras tres porque todas son falsas y describen mejoras inexistentes: el alcohol no acelera reacciones (a), no aumenta la lucidez (b) ni mejora la coordinación (c), sino que deteriora todas esas funciones. Al reducirse la concentración, el conductor pasa por alto señales, peatones, frenadas del auto de adelante y cambios del entorno. El riesgo real es la falla de atención que precede a la mayoría de los siniestros con alcohol. Truco simple para no confundirse: el alcohol nunca mejora nada en la conducción, así que ante estas preguntas la respuesta correcta es siempre la que indica un deterioro o reducción, nunca un beneficio."
  },
  {
    "id": 79,
    "question": "Si usted va conduciendo y comienza a sentir cansancio, es mejor que se detenga lo antes posible. ¿Qué debería hacer usted mientras no pueda detenerse?",
    "options": [
      "Aumentar su velocidad para encontrar pronto un lugar donde detenerse.",
      "Golpear suave y repetidamente el manubrio.",
      "Asegurarse de que entre aire fresco a su vehículo.",
      "Modificar permanentemente la velocidad para mejorar la concentración."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Mientras no pueda detenerse, lo recomendable es asegurarse de que entre aire fresco al vehículo (c). La ventilación ayuda a mantenerse más despierto y alerta de forma temporal, hasta que pueda detenerse a descansar, que es lo único que realmente combate el cansancio.",
    "wrongExplanations": [
      "Aumentar la velocidad es peligroso: con cansancio sus reacciones están disminuidas y el riesgo crece.",
      "Golpear el manubrio no combate el cansancio y además lo distrae de la conducción.",
      "",
      "Modificar permanentemente la velocidad es errático y peligroso; no es una forma adecuada de mantener la concentración."
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio rector de esta pregunta es que ante el cansancio la única solución real es detenerse y descansar, y todo lo demás son solo medidas temporales mientras encuentras dónde parar. La respuesta correcta es asegurarte de que entre aire fresco al vehículo (c), porque la ventilación y el oxígeno ayudan a mantenerte momentáneamente más alerta hasta poder detenerte. El razonamiento descarta las demás: aumentar la velocidad (a) es peligrosísimo, porque combinas fatiga con menos tiempo de reacción; golpear el manubrio (b) no aporta nada real; y modificar permanentemente la velocidad (d) no combate el sueño y desconcierta al resto del tránsito. El riesgo real del cansancio es el microsueño, esos segundos en que el cerebro se apaga sin que lo notes. Es clave entender que el aire fresco solo da unos minutos extra, no reemplaza el descanso. Truco: si bostezas y te cuesta concentrarte, abre la ventana, pero usa esos minutos para buscar de inmediato un lugar seguro donde detenerte a dormir o estirarte."
  },
  {
    "id": 80,
    "question": "¿Qué consejo daría usted a un conductor que ha ingerido bebidas alcohólicas en una fiesta?",
    "options": [
      "Que se vuelva a casa en taxi.",
      "Que tome una taza de café cargado y luego conduzca a casa.",
      "Que se vuelva a casa conduciendo lenta y muy cuidadosamente.",
      "Que espere un rato antes de irse conduciendo a casa."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El mejor consejo es que se vuelva a casa en taxi (a). Si ha ingerido alcohol no debe conducir, ya que sus capacidades están disminuidas; lo único seguro es dejar el auto y usar un medio de transporte alternativo. El tiempo es lo único que elimina el alcohol, pero lo prudente es no conducir.",
    "wrongExplanations": [
      "",
      "El café no elimina el alcohol del organismo; seguiría conduciendo disminuido y en infracción.",
      "Conducir lento y con cuidado no compensa la disminución de capacidades provocada por el alcohol.",
      "Esperar un rato no asegura que haya eliminado el alcohol; lo seguro es no conducir y volver en taxi."
    ],
    "page": 17,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta pone a prueba si conoces la única conducta verdaderamente segura tras consumir alcohol: no conducir. La respuesta correcta es aconsejar que se vuelva a casa en taxi (a), porque deja el auto y usa un transporte alternativo, eliminando por completo el riesgo de manejar con capacidades disminuidas. El fundamento clave es que solo el tiempo metaboliza el alcohol, ningún truco lo acelera. Por eso se descartan las otras: el café cargado (b) es un mito, te despierta pero no te quita la alcoholemia ni la torpeza; conducir 'lento y cuidadoso' (c) sigue siendo conducir ebrio, con juicio y reacciones deterioradas; y 'esperar un rato' (d) es insuficiente porque el alcohol puede tardar muchas horas en eliminarse. El riesgo real, además del accidente, es legal: en Chile conducir bajo influencia o en estado de ebriedad es delito sancionado por la Ley 18.290, con multas, suspensión de licencia e incluso cárcel. Truco que salva vidas: si tomaste, las llaves no son tuyas esta noche, pide taxi o un conductor designado."
  },
  {
    "id": 81,
    "question": "Un conductor hace algo que a usted le molesta. ¿Qué debería hacer usted?",
    "options": [
      "Hacerle saber cómo se siente.",
      "Encender y apagar sus luces delanteras repetidamente.",
      "Tratar de no reaccionar.",
      "Tocar la bocina."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Frente a una conducta que nos molesta, lo correcto es tratar de no reaccionar. La conducción agresiva o las represalias aumentan el riesgo de incidentes y de violencia vial; mantener la calma y la concentración es la actitud defensiva que protege a todos.",
    "wrongExplanations": [
      "Reaccionar para hacerle saber su molestia genera una confrontación que distrae y puede escalar a una situación peligrosa.",
      "Usar las luces como reproche es una distracción y una provocación que no aporta a la seguridad.",
      "",
      "Tocar la bocina con rabia es una forma de provocación; la bocina solo debe usarse para advertir un peligro, no para descargar enojo."
    ],
    "page": 17,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento aquí es la conducción defensiva y el control emocional, principios que la CONASET promueve porque la mayoría de los siniestros graves nace de reacciones impulsivas, no de fallas mecánicas. Cuando otro conductor lo molesta, su único objetivo debe seguir siendo llegar sano a destino, no impartir lecciones ni desahogarse. Encender luces, tocar la bocina o gesticular son represalias que escalan el conflicto y pueden derivar en una persecución o en violencia vial, dejándolo a usted como protagonista de un incidente que no buscaba. El razonamiento es simple: usted no controla la conducta ajena, pero sí la suya, y la respuesta más segura es no reaccionar, ceder el espacio y seguir concentrado. Un truco para recordarlo: pregúntese 'lo que voy a hacer, ¿me acerca a casa con seguridad o me mete en problemas?'. Por eso la respuesta correcta es la c, tratar de no reaccionar."
  },
  {
    "id": 82,
    "question": "Usted está a punto de volver a casa conduciendo, pero no puede encontrar los anteojos que necesita usar para conducir. ¿Qué debería hacer usted?",
    "options": [
      "Conducir a casa lentamente por calles tranquilas.",
      "Encontrar una forma de llegar a casa sin manejar.",
      "Pedir prestados los anteojos a un amigo para volver conduciendo a casa.",
      "Manejar hasta su casa de noche para que las luces lo ayuden."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si usted necesita anteojos para conducir y no los tiene, debe encontrar otra forma de llegar a casa sin manejar. La licencia exige una visión adecuada y conducir sin la corrección óptica que usted requiere es ilegal y muy peligroso, sin importar la hora o el trayecto.",
    "wrongExplanations": [
      "Conducir lento por calles tranquilas no compensa la falta de visión; sigue siendo ilegal y peligroso para usted y los demás.",
      "",
      "Los anteojos de otra persona tienen otra graduación y pueden empeorar su visión en vez de corregirla.",
      "Las luces no reemplazan la corrección visual que usted necesita; de noche la visibilidad es aún peor."
    ],
    "page": 19,
    "category": "Conduccion segura",
    "deepExplanation": "La razón de fondo es que la licencia de conducir incluye una restricción explícita: si en el examen médico se determinó que usted necesita lentes ópticos, esa corrección queda anotada y conducir sin ella constituye manejar sin cumplir las condiciones de su licencia, lo que es una infracción. Esto existe porque una visión deficiente alarga el tiempo en que usted detecta peligros, lee señales y calcula distancias, justo las capacidades de las que depende frenar a tiempo. No sirve ir lento, ni elegir calles tranquilas, ni esperar a la noche, porque la falla está en sus ojos y empeora, no mejora, con poca luz; tampoco resuelve nada usar anteojos ajenos, ya que una graduación distinta puede distorsionar más su visión. El razonamiento correcto es reconocer que en ese momento usted no está habilitado para conducir y buscar otra forma de llegar, sea transporte público, un taxi o pedir que alguien lo lleve. Por eso la respuesta es la b: encontrar una forma de llegar a casa sin manejar."
  },
  {
    "id": 83,
    "question": "Usted está a punto de conducir, pero se siente enfermo. Usted debería ...",
    "options": [
      "tomar una medicina antes de conducir.",
      "acortar el viaje si puede.",
      "no manejar.",
      "prometerse a sí mismo que se va a acostar tan pronto haya llegado a casa."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si usted se siente enfermo antes de manejar, lo correcto es no conducir. La enfermedad reduce la concentración, los reflejos y la capacidad de reaccionar ante imprevistos, condiciones indispensables para conducir con seguridad.",
    "wrongExplanations": [
      "Muchos medicamentos producen somnolencia o disminuyen los reflejos, por lo que tomar una medicina puede agravar el riesgo en vez de habilitarlo para manejar.",
      "Acortar el viaje no elimina el riesgo; aún enfermo no está en condiciones de conducir.",
      "",
      "Prometerse descansar al llegar no cambia que durante todo el trayecto usted estará conduciendo en malas condiciones."
    ],
    "page": 19,
    "category": "Conduccion segura",
    "deepExplanation": "El principio que sostiene esta respuesta es que conducir exige estar en plenas condiciones físicas y mentales, porque manejar es una tarea continua de percibir, decidir y actuar en fracciones de segundo. Sentirse enfermo, aunque sea un malestar 'menor', reduce la concentración, lentifica los reflejos y puede provocar un mareo, un desmayo o una distracción justo cuando necesita reaccionar. Las otras opciones son trampas: tomar un medicamento puede dar somnolencia y empeorar las cosas, acortar el viaje no elimina el riesgo durante el trayecto, y prometerse descansar al llegar no le sirve de nada si el accidente ocurre antes. El razonamiento es directo: si su cuerpo no responde bien, no es el momento de poner en juego su vida y la de otros. La regla práctica es tratar la enfermedad igual que el alcohol o la fatiga, son condiciones que inhabilitan. Por eso la respuesta correcta es la c: no manejar."
  },
  {
    "id": 84,
    "question": "En relación con el cansancio y la conducción, de las siguientes afirmaciones, ¿cuál es falsa?",
    "options": [
      "El cansancio es una causa importante de los accidentes que se registran en carreteras.",
      "Un conductor cansado ve empeorada su capacidad de reacción.",
      "Si un conductor está cansado, lo mejor es que su acompañante le vaya hablando permanentemente.",
      "El desorientarse y plantearse preguntas tales como, ¿pasé ya la ciudad X o aún no?, es un síntoma de cansancio."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación falsa es que el acompañante le vaya hablando permanentemente al conductor cansado. Conversar no combate la fatiga: cuando aparece el cansancio lo único seguro es detenerse y descansar. Las demás afirmaciones son verdaderas: el cansancio causa muchos accidentes, empeora la reacción y la desorientación es uno de sus síntomas.",
    "wrongExplanations": [
      "Es verdadera: la fatiga es una de las principales causas de accidentes en carretera.",
      "Es verdadera: el cansancio prolonga el tiempo de reacción y deteriora los reflejos.",
      "",
      "Es verdadera: la desorientación y la dificultad para recordar el trayecto recorrido son síntomas claros de fatiga."
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta evalúa si usted reconoce un mito peligroso sobre la fatiga. El fundamento es que el cansancio al volante es comparable al efecto del alcohol: deteriora la atención, alarga el tiempo de reacción y puede llevar a microsueños de segundos en los que usted recorre decenas de metros sin control. La afirmación de la opción c es falsa porque conversar con el acompañante no combate la fatiga, solo la disimula por un rato y distrae; cuando el cuerpo pide dormir, ninguna charla lo reemplaza, lo único efectivo es detenerse y descansar. Las otras tres son verdaderas y describen bien el fenómeno: el cansancio es una causa importante de accidentes en carretera, empeora la capacidad de reacción, y la desorientación, como no recordar si ya pasó una ciudad, es un síntoma claro de que el cerebro está fallando. El truco es desconfiar de cualquier 'remedio' que no implique detenerse y dormir. Por eso la afirmación falsa, y la respuesta correcta, es la c."
  },
  {
    "id": 85,
    "question": "Usted comienza a sentir cansancio en un viaje. ¿Qué debería hacer?",
    "options": [
      "Detenerse y comer una gran comida.",
      "Detenerse inmediatamente y respirar profundo.",
      "Terminar el viaje y después dormir.",
      "Detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Ante el cansancio lo recomendable es detenerse y dormir una pequeña siesta, o detenerse y tomar un poco de café. Lo esencial es interrumpir la conducción para recuperarse, ya que continuar fatigado es una de las situaciones más riesgosas al volante.",
    "wrongExplanations": [
      "Una comida abundante produce somnolencia y pesadez, lo que aumenta el sueño en vez de quitarlo.",
      "Respirar profundo no revierte la fatiga acumulada; es un alivio momentáneo, no una solución.",
      "Terminar el viaje cansado y dormir después es justamente el error: el peligro está en seguir manejando con sueño.",
      ""
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento es que la fatiga no se vence con fuerza de voluntad ni con trucos a medias, solo se revierte recuperando energía, y eso significa interrumpir la conducción. Detenerse en un lugar seguro y dormir una siesta breve de quince a veinte minutos, o tomar café y esperar a que haga efecto, son las únicas medidas que realmente restauran algo de alerta. Las otras opciones fallan: una comida abundante produce sopor y empeora la somnolencia, respirar profundo da un alivio momentáneo que no elimina el cansancio, y terminar el viaje para dormir después ignora que el peligro está precisamente en seguir manejando cansado. El razonamiento clave es que continuar fatigado es de las situaciones más riesgosas al volante, equiparable a conducir bajo los efectos del alcohol. Un dato útil: la siesta corta funciona mejor que una larga, porque un sueño profundo lo deja aún más aturdido al despertar. Por eso la respuesta correcta es la d: detenerse y dormir una pequeña siesta o detenerse y tomar un poco de café."
  },
  {
    "id": 86,
    "question": "¿Qué precauciones debe tomar un conductor cuando asiste a un evento social?",
    "options": [
      "Beber bastante café después de ingerir bebidas alcohólicas.",
      "Evitar circular por calles de mucho tráfico después de beber alcohol.",
      "Evitar beber alcohol con el estómago vacío.",
      "Evitar consumir alcohol."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La precaución correcta es evitar consumir alcohol. El alcohol deteriora los reflejos, el juicio y la coordinación desde dosis bajas, por lo que la única conducta verdaderamente segura para quien va a conducir es no beber.",
    "wrongExplanations": [
      "El café no elimina el alcohol de la sangre ni revierte sus efectos; solo da una falsa sensación de estar más despierto.",
      "Evitar el tráfico no reduce el deterioro que el alcohol produce en su capacidad de conducir.",
      "Beber con el estómago lleno o vacío no anula los efectos del alcohol sobre la conducción.",
      ""
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio que respalda esta respuesta es el de tolerancia cero práctica: el alcohol afecta la conducción desde dosis bajas, y la única forma segura de neutralizar ese riesgo es no consumirlo cuando se va a conducir. Las demás opciones repiten creencias falsas que la educación vial busca desterrar: el café no acelera la eliminación del alcohol en la sangre, solo despabila a una persona que sigue igual de ebria; evitar calles con tráfico no reduce el deterioro de los reflejos; y comer antes de beber apenas retrasa la absorción, pero no impide que el alcohol llegue a la sangre y afecte el juicio. El razonamiento correcto es entender que el alcohol y la conducción son incompatibles, y que ninguna 'precaución intermedia' compensa la pérdida de coordinación y de capacidad de reacción. La regla práctica más simple y segura: si va a manejar, no bebe; si bebió, no maneja y busca otra forma de volver. Por eso la respuesta correcta es la d: evitar consumir alcohol."
  },
  {
    "id": 87,
    "question": "De los siguientes efectos, ¿cuál no es consecuencia del consumo de alcohol antes de conducir?",
    "options": [
      "Falsa sensación de confianza.",
      "Mayor conciencia del peligro.",
      "Menor control del vehículo.",
      "Escaso juicio de la velocidad."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "El efecto que NO es consecuencia del alcohol es la mayor conciencia del peligro. El alcohol produce justo lo contrario: reduce la percepción del riesgo y genera una falsa confianza, menor control del vehículo y un mal cálculo de la velocidad.",
    "wrongExplanations": [
      "Sí es consecuencia del alcohol: provoca exceso de confianza y subestimación del riesgo.",
      "",
      "Sí es consecuencia del alcohol: deteriora la coordinación y el manejo del vehículo.",
      "Sí es consecuencia del alcohol: afecta el juicio para calcular distancias y velocidades."
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta se basa en cómo el alcohol actúa sobre el cerebro: es un depresor del sistema nervioso central que adormece las funciones de control y de juicio. Por eso produce una falsa sensación de confianza, hace que la persona se sienta capaz cuando en realidad está más torpe; reduce el control del vehículo por la pérdida de coordinación; y deteriora el cálculo de la velocidad, haciéndola parecer menor de la real. La opción b, mayor conciencia del peligro, describe justo lo contrario de lo que ocurre: el alcohol disminuye la percepción del riesgo, y esa combinación de menor cautela con exceso de confianza es la que vuelve tan letal conducir bebido. El razonamiento para resolverla es identificar cuál efecto sería 'positivo' o protector, porque ninguno lo es bajo alcohol. El truco mnemotécnico: el alcohol siempre resta capacidades y suma falsa seguridad, nunca agrega conciencia ni cuidado. Por eso el efecto que NO es consecuencia del alcohol es la opción b: mayor conciencia del peligro."
  },
  {
    "id": 88,
    "question": "De las siguientes capacidades de un individuo, ¿cuál de ellas no se ve afectada por el consumo de alcohol?",
    "options": [
      "La percepción de colores.",
      "El juicio acerca de la velocidad.",
      "Los tiempos de reacción.",
      "La coordinación."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La capacidad que NO se ve afectada por el alcohol es la percepción de colores. El alcohol sí deteriora el juicio de la velocidad, los tiempos de reacción y la coordinación, pero la distinción de colores no es una función que se altere por su consumo.",
    "wrongExplanations": [
      "",
      "El alcohol sí afecta el juicio de la velocidad, dificultando calcular bien las distancias.",
      "El alcohol sí aumenta los tiempos de reacción, retrasando la respuesta ante un peligro.",
      "El alcohol sí deteriora la coordinación de movimientos al conducir."
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El fundamento es distinguir entre las funciones que el alcohol deprime y las que no toca. El alcohol afecta funciones cerebrales superiores y motoras: el juicio sobre la velocidad, los tiempos de reacción y la coordinación se ven claramente deteriorados porque dependen del procesamiento del cerebro y del control muscular fino. En cambio, la percepción de colores es una función básica de la retina y de las vías visuales que no se altera por la ingesta de alcohol; una persona ebria sigue distinguiendo el rojo del verde de un semáforo, aunque reaccione tarde ante él. El razonamiento para resolverla es preguntarse cuál de las cuatro capacidades es puramente sensorial y no de coordinación o juicio. Cuidado de no confundir 'ver el color' con 'reaccionar a tiempo': lo primero se conserva, lo segundo no. Por eso la capacidad que NO se ve afectada, y la respuesta correcta, es la a: la percepción de colores."
  },
  {
    "id": 89,
    "question": "El tiempo que transcurre desde que usted percibe un peligro hasta que actúa se denomina tiempo de reacción. En una emergencia, ¿qué factor influye en su tiempo de reacción?.",
    "options": [
      "Su estado de salud.",
      "El estado de la calzada.",
      "La velocidad de su vehículo.",
      "Las condiciones climáticas."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "El factor que influye en su tiempo de reacción es su estado de salud. El tiempo de reacción depende de la persona: la fatiga, las enfermedades, el alcohol o los medicamentos lo alargan. La velocidad o el clima afectan la distancia de frenado, pero no el tiempo que su cuerpo tarda en responder.",
    "wrongExplanations": [
      "",
      "El estado de la calzada influye en la distancia de frenado y la adherencia, no en su tiempo de reacción personal.",
      "La velocidad aumenta la distancia recorrida durante la reacción, pero no cambia el tiempo que usted tarda en reaccionar.",
      "El clima afecta la visibilidad y el frenado, pero no el tiempo de reacción que depende de su organismo."
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Aquí es clave separar dos conceptos que suelen confundirse: el tiempo de reacción y la distancia de detención. El tiempo de reacción es el lapso entre que usted percibe el peligro y que su cuerpo actúa, por ejemplo levantar el pie y pisar el freno, y depende exclusivamente de usted como persona: su estado de salud, su nivel de fatiga, su edad, y factores como el alcohol o ciertos medicamentos que lo alargan. La velocidad del vehículo, el estado de la calzada y el clima sí influyen, pero en la distancia que el auto recorre hasta detenerse, no en lo que tarda su cerebro y sus músculos en responder. El razonamiento correcto es entender que el reloj del tiempo de reacción corre dentro de su cuerpo, no en el asfalto ni en el motor. Un dato útil: a 100 km/h, un solo segundo de reacción equivale a casi 28 metros recorridos sin frenar, por eso cualquier cosa que lo demore es grave. Por eso el factor que influye en su tiempo de reacción es la opción a: su estado de salud."
  },
  {
    "id": 90,
    "question": "¿Cuándo es más probable que usted pierda concentración cuando conduce?",
    "options": [
      "Cuando hace funcionar los limpiaparabrisas.",
      "Cuando mira a través del espejo retrovisor.",
      "Cuando va escuchando música a alto volumen.",
      "Cuando utiliza un teléfono celular.",
      "Cuando mira un mapa del camino."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Es más probable perder concentración al escuchar música a alto volumen, al usar un teléfono celular y al mirar un mapa del camino. Estas acciones desvían la atención, la vista o las manos de la tarea de conducir. En cambio, usar los limpiaparabrisas o mirar el espejo retrovisor son parte normal de la conducción segura.",
    "wrongExplanations": [
      "Accionar los limpiaparabrisas es una maniobra breve y propia de la conducción que no provoca pérdida de concentración.",
      "Mirar el espejo retrovisor es una acción necesaria y correcta para conducir con seguridad.",
      "",
      "",
      ""
    ],
    "page": 19,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "El principio rector es que la conducción exige tres tipos de atención que no deben interrumpirse: la visual, la manual y la cognitiva. Esta pregunta admite varias respuestas porque pide identificar todas las acciones que rompen alguna de esas atenciones. Escuchar música a alto volumen anula la atención auditiva, impidiéndole oír bocinas, sirenas o un tren que se aproxima; usar el celular ocupa las manos y, sobre todo, la mente, siendo una de las distracciones más peligrosas y sancionadas; y mirar un mapa desvía la vista del camino justo cuando podría aparecer un imprevisto. En cambio, accionar los limpiaparabrisas y mirar el espejo retrovisor son maniobras propias de la conducción segura, breves y orientadas a controlar el entorno, por lo que no constituyen distracción. El truco es preguntarse: ¿esta acción me quita los ojos, las manos o la cabeza de la tarea de manejar? Por eso las respuestas correctas son la c, la d y la e."
  },
  {
    "id": 91,
    "question": "¿Qué debería hacer el conductor del auto señalado con la flecha?",
    "options": [
      "Detenerse y esperar a que el peatón cruce.",
      "Señalizar con la mano al peatón para que retroceda.",
      "Continuar conduciendo lentamente.",
      "Detenerse, pero sólo si vienen más autos detrás suyo."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q91_0.png"
    ],
    "explanation": "En esta situación el conductor debe continuar conduciendo lentamente. Como el peatón aún no obstruye su trayectoria o se encuentra a un costado, lo correcto es avanzar con precaución y a baja velocidad, manteniéndose atento y preparado para detenerse si el peatón se cruza.",
    "wrongExplanations": [
      "Detenerse por completo no es necesario en esta escena; basta con avanzar lento y vigilar al peatón, listo para frenar.",
      "No corresponde indicarle al peatón que retroceda; debe respetarse su circulación y avanzar con cuidado.",
      "",
      "Detenerse no depende de si vienen autos detrás, pero además en este caso lo adecuado es avanzar lentamente con precaución."
    ],
    "page": 21,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta evalúa el criterio de proporcionalidad de la respuesta frente a un peatón que aún no obstruye la calzada o va por un costado. El fundamento es que el conductor siempre debe priorizar al peatón, pero la reacción debe ajustarse a la situación real: si el peatón todavía no se interpone en su trayectoria, detenerse por completo no es necesario y podría incluso confundir a quien viene detrás. Las otras opciones son incorrectas porque señalizar al peatón para que retroceda invierte la prioridad y lo presiona, y condicionar la detención a si vienen autos detrás revela que se estaría midiendo mal el deber de cuidado, que no depende del tráfico sino del peatón. El razonamiento correcto es avanzar a baja velocidad, manteniéndose alerta y listo para frenar de inmediato si el peatón decide cruzar. La clave es 'precaución activa': seguir, pero con el pie cerca del freno. Por eso la respuesta correcta es la c: continuar conduciendo lentamente."
  },
  {
    "id": 92,
    "question": "¿Cuáles son las 2 principales razones por las que no sería adecuado que usted adelantara al peatón en este momento?",
    "options": [
      "Podría ensuciar al peatón.",
      "La calzada es angosta y el peatón podría desviarse inesperadamente hacia la derecha.",
      "El vehículo de la izquierda podría avanzar.",
      "Podría aparecer sorpresivamente algún vehículo en sentido contrario."
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "images": [
      "q92_0.png"
    ],
    "explanation": "No es adecuado adelantar al peatón porque el vehículo de la izquierda podría avanzar y porque podría aparecer sorpresivamente un vehículo en sentido contrario. Adelantar en esa situación lo expone a invadir el carril opuesto o a chocar con quien se incorpore, en un espacio reducido y con poca visibilidad.",
    "wrongExplanations": [
      "Ensuciar al peatón no es la razón de seguridad relevante para no adelantar.",
      "Aunque la calzada angosta es un riesgo, el peatón normalmente se desvía hacia su izquierda o avanza, y esta no es una de las dos razones principales señaladas.",
      "",
      ""
    ],
    "page": 21,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de no adelantar aquí es la suma de riesgos en un espacio reducido, donde varios factores pueden coincidir y dejarlo sin escapatoria. Si usted se desplaza para sobrepasar al peatón, invade o se acerca al carril contrario, y en ese momento dos peligros independientes lo amenazan: el vehículo detenido a la izquierda podría ponerse en movimiento justo cuando usted ocupa ese espacio, y un vehículo en sentido contrario podría aparecer de improviso con poca visibilidad. Las otras opciones se descartan porque ensuciar al peatón es un detalle menor, no un motivo de seguridad real, y la angostura por sí sola, sin considerar a los otros vehículos, no captura las dos razones principales que pide la pregunta. El razonamiento correcto es identificar las amenazas de colisión, no las molestias. El truco: antes de adelantar, evalúe siempre 'qué se puede mover hacia mí', tanto de frente como desde los costados. Por eso las respuestas correctas son la c y la d."
  },
  {
    "id": 93,
    "question": "En relación con los cruces ferroviarios a nivel, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Extrañamente, está permitido estacionar a 10 m de un cruce ferroviario a nivel.",
      "Si ya ha ingresado a un cruce ferroviario y siente que se aproxima un tren a lo lejos, lo mejor es continuar.",
      "Si va con la radio de su vehículo encendida, es conveniente apagarla cuando se aproxima a un cruce ferroviario.",
      "Nada impide que pueda efectuar un adelantamiento en un cruce ferroviario, si no siente tren alguno en las proximidades."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Son verdaderas dos afirmaciones: si usted ya ingresó al cruce y advierte un tren a lo lejos, lo mejor es continuar para despejar la vía, y conviene apagar la radio al aproximarse para escuchar el tren y las señales. En cambio, no se permite estacionar tan cerca de un cruce ni adelantar sobre él.",
    "wrongExplanations": [
      "Es falsa: no está permitido estacionar a tan poca distancia de un cruce ferroviario, justamente para no obstruir ni bloquear la vía.",
      "",
      "",
      "Es falsa: está prohibido adelantar en un cruce ferroviario, aunque no se perciba ningún tren, por el alto riesgo que implica."
    ],
    "page": 21,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Los cruces ferroviarios a nivel tienen reglas estrictas porque un tren no puede frenar ni esquivar, y cualquier error del conductor del vehículo es potencialmente fatal. La afirmación b es verdadera con un matiz importante: si usted YA ingresó al cruce y advierte un tren a lo lejos, lo peor que puede hacer es detenerse o retroceder sobre la vía, lo correcto es continuar y despejar el cruce lo antes posible. La c también es verdadera, porque apagar la radio al aproximarse le permite oír el silbato del tren y las señales acústicas, recuperando una alerta vital. En cambio, la a es falsa porque la ley prohíbe estacionar tan cerca de un cruce, y la d es falsa porque adelantar sobre un cruce ferroviario está prohibido siempre, sin importar si percibe o no un tren. El razonamiento es que en estos cruces se elimina todo margen de improvisación. La regla de oro: ante un cruce ferroviario, primero ver y oír, nunca confiarse. Por eso las afirmaciones verdaderas son la b y la c."
  },
  {
    "id": 94,
    "question": "En esta ocasión usted va conduciendo a 70 km/h. ¿Qué hace usted?",
    "options": [
      "Frena en seco.",
      "Se desplaza hacia la izquierda.",
      "Continúa derecho.",
      "Frena suavemente."
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "images": [
      "q94_0.png"
    ],
    "explanation": "A 70 km/h lo correcto es continuar derecho y frenar suavemente. Frenar en seco o virar bruscamente a esa velocidad puede provocar la pérdida de control o un alcance por detrás; mantener la trayectoria y reducir la velocidad de forma progresiva es la maniobra segura.",
    "wrongExplanations": [
      "Frenar en seco a 70 km/h puede hacerle perder el control o provocar que el vehículo de atrás lo choque.",
      "Desplazarse hacia la izquierda a esa velocidad puede invadir el carril contrario o desestabilizar el vehículo.",
      "",
      ""
    ],
    "page": 22,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta respuesta es la física del vehículo a velocidad de carretera: a 70 km/h, cualquier maniobra brusca compromete la adherencia de los neumáticos y la estabilidad del auto. Frenar en seco puede bloquear las ruedas, hacerle perder el control o, aunque logre detenerse, provocar que el vehículo de atrás lo alcance por no alcanzar a reaccionar. Virar bruscamente hacia la izquierda lo lanzaría hacia el carril contrario o podría descontrolar el auto. Por eso lo correcto, frente a la situación planteada, es mantener la trayectoria continuando derecho y, a la vez, reducir la velocidad de forma progresiva con un frenado suave, lo que conserva el control y avisa de forma gradual a quien viene detrás. El razonamiento clave es que a mayor velocidad, los movimientos deben ser más suaves, no más violentos. El truco: 'a más velocidad, manos y pies más suaves'. Por eso las respuestas correctas son la c y la d: continuar derecho y frenar suavemente."
  },
  {
    "id": 95,
    "question": "Al aproximarse a una curva hacia la izquierda usted debería mantenerse bien a la derecha. ¿Por qué?",
    "options": [
      "Para superar el efecto de pendiente de la calzada.",
      "Para tener una mejor visual sobre el camino.",
      "Para permitirle el adelantamiento a quienes vienen rápido detrás suyo.",
      "Para estar en una ubicación más segura en caso que el vehículo se roncee."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Al aproximarse a una curva hacia la izquierda hay que mantenerse bien a la derecha para tener una mejor visual sobre el camino. Esa posición amplía el campo de visión hacia el interior de la curva, permitiéndole anticipar vehículos u obstáculos, y además lo aleja del carril contrario.",
    "wrongExplanations": [
      "La razón principal no es la pendiente de la calzada, sino mejorar la visibilidad en la curva.",
      "",
      "Mantenerse a la derecha no se hace para facilitar que otros lo adelanten en una curva; adelantar en curva es peligroso.",
      "El motivo central es la mejor visual, no únicamente la posición frente a un eventual deslizamiento."
    ],
    "page": 22,
    "category": "Conduccion segura",
    "deepExplanation": "El principio detrás de esta regla es maximizar la visibilidad y el margen de seguridad en una curva ciega. En una curva hacia la izquierda, el interior de la curva queda a su izquierda, hacia el carril contrario; si usted se mantiene bien a la derecha, su línea de visión se abre y alcanza a ver más adelante lo que viene por la curva, anticipando vehículos, peatones u obstáculos antes de llegar a ellos. Las otras opciones son incorrectas o riesgosas: la posición a la derecha no tiene que ver con la pendiente, y mantenerse a la izquierda para 'acortar' o 'suavizar' la curva lo metería peligrosamente en la trayectoria del tránsito que viene de frente. El razonamiento correcto es priorizar ver y separarse del peligro, no ganar tiempo. El truco para recordarlo: en curva a la izquierda, péguese a la derecha; en curva a la derecha, sin invadir, busque la posición que más visibilidad le dé. Por eso la respuesta correcta es la b: para tener una mejor visual sobre el camino."
  },
  {
    "id": 96,
    "question": "Usted conduce por una vía rápida en muy buenas condiciones. Por seguridad, ¿qué distancia debería mantener usted respecto del vehículo que va delante suyo?",
    "options": [
      "Un espacio equivalente al que usted recorre en 3 segundos.",
      "Un espacio igual al largo de un auto.",
      "3 metros.",
      "Un espacio igual al largo de 3 autos."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "En una vía rápida en buenas condiciones debe mantener un espacio equivalente al que recorre en 3 segundos. La regla de los tres segundos ajusta la distancia a su velocidad real: a mayor velocidad, mayor separación, dándole tiempo para frenar ante cualquier imprevisto.",
    "wrongExplanations": [
      "",
      "El largo de un auto es claramente insuficiente a alta velocidad para frenar a tiempo.",
      "Tres metros es una distancia mínima que no permite reaccionar ante un frenado del vehículo de adelante.",
      "El largo de tres autos sigue siendo una distancia fija que no se ajusta a la velocidad; la regla correcta se mide en tiempo, no en largos."
    ],
    "page": 22,
    "category": "Conduccion segura",
    "formula": "Regla de los 3 segundos: elige un punto fijo; cuando el auto de adelante lo pase, cuenta «mil uno, mil dos, mil tres». Si llegas antes de terminar, vas muy cerca.\nEquivale a la distancia que recorres en 3 s (a 100 km/h ≈ 83 m).",
    "deepExplanation": "El fundamento de la distancia de seguimiento es que usted siempre necesita un colchón de espacio para reaccionar y frenar si el auto de adelante se detiene de golpe. Expresar esa distancia en metros fijos es un error, porque a mayor velocidad usted recorre más metros por segundo; por eso la mejor regla es la de los tres segundos, que ajusta automáticamente la separación a su velocidad real. Aplicando la fórmula: elija un punto fijo del camino, como un poste o una señal; cuando el vehículo de adelante pase por ese punto, comience a contar 'mil uno, mil dos, mil tres', y si usted llega al mismo punto antes de terminar de contar, significa que va demasiado cerca y debe abrir distancia. Esa separación equivale a lo que recorre en tres segundos, que a 100 km/h son unos 83 metros. La ventaja de este método es que funciona a cualquier velocidad sin hacer cálculos complicados. Por eso la respuesta correcta es la a: un espacio equivalente al que usted recorre en 3 segundos."
  },
  {
    "id": 97,
    "question": "Usted se aproxima a una curva hacia la izquierda. ¿Qué debería hacer?",
    "options": [
      "Mantenerse bien a la derecha ya que así tardará menos en pasar la curva.",
      "Mantenerse bien a la derecha para tener una mejor visual sobre la curva.",
      "Mantenerse bien a la izquierda para evitar cualquier obstáculo que pueda haber en la cuneta.",
      "Mantenerse bien a la izquierda para hacer la curva menos pronunciada."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Al aproximarse a una curva hacia la izquierda debe mantenerse bien a la derecha para tener una mejor visual sobre la curva. Esa ubicación le abre el ángulo de visión hacia adelante y lo mantiene alejado del tránsito que viene en sentido contrario.",
    "wrongExplanations": [
      "Mantenerse a la derecha no busca tardar menos, sino mejorar la visibilidad y la seguridad.",
      "",
      "Mantenerse a la izquierda lo acerca peligrosamente al carril contrario en una curva a la izquierda.",
      "Cortar la curva por la izquierda invade el carril opuesto y es muy peligroso."
    ],
    "page": 22,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta refuerza el mismo principio de visibilidad y seguridad en curva, pero conviene razonarlo de nuevo para fijarlo. En una curva hacia la izquierda, mantenerse bien a la derecha le entrega una mejor visual sobre la curva, porque amplía el ángulo con que ve lo que viene más adelante y lo mantiene lejos del carril contrario, donde circula el tránsito en sentido opuesto. Las opciones que hablan de 'tardar menos' o de 'hacer la curva menos pronunciada' apuntan a una conducción deportiva o de competencia, donde se 'corta' la curva, algo prohibido y peligrosísimo en la vía pública porque invade el sentido contrario. La opción de mantenerse a la izquierda por la cuneta también es errada, ya que lo expone al tráfico que viene de frente. El razonamiento correcto siempre prioriza ver y separarse, no ganar tiempo ni comodidad. El truco mnemotécnico: 'curva a la izquierda, ojos abiertos por la derecha'. Por eso la respuesta correcta es la b: para tener una mejor visual sobre la curva."
  },
  {
    "id": 98,
    "question": "Usted conduce a 90 km/h. En condiciones normales, ¿cuál es la distancia mínima de seguridad que usted debería mantener respecto del vehículo que va adelante?",
    "options": [
      "Unos 75 metros",
      "Unos 15 metros",
      "Unos 20 metros",
      "Unos 100 metros"
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "A 90 km/h, en condiciones normales, la distancia mínima de seguridad ronda los 75 metros. A mayor velocidad la distancia de detención crece notablemente, por lo que se necesita un amplio espacio para alcanzar a frenar si el vehículo de adelante reduce la marcha o se detiene.",
    "wrongExplanations": [
      "",
      "Unos 15 metros son totalmente insuficientes a 90 km/h; no alcanzaría a frenar.",
      "Unos 20 metros tampoco bastan para detenerse con seguridad a esa velocidad.",
      "Unos 100 metros exceden lo requerido; la distancia mínima adecuada se aproxima a los 75 metros."
    ],
    "page": 22,
    "category": "Conduccion segura",
    "formula": "Distancia mínima de seguridad ≈ distancia de detención total.\nA 90 km/h: reacción (25 m) + frenado (≈ 45–50 m) ≈ 75 m. (También sirve la regla de los 3 segundos.)",
    "deepExplanation": "El fundamento es la distancia total de detención, que es la suma de dos tramos: lo que el vehículo recorre durante su tiempo de reacción, antes de que el freno actúe, más lo que recorre ya frenando hasta detenerse. A 90 km/h esa distancia crece mucho respecto de velocidades urbanas, porque la distancia de frenado aumenta con el cuadrado de la velocidad, no de forma proporcional. Aplicando la fórmula orientativa: a 90 km/h el tramo de reacción es de unos 25 metros y el de frenado ronda los 45 a 50 metros, lo que da una distancia total cercana a los 75 metros. Por eso las opciones de 15 o 20 metros son peligrosamente cortas y la de 100 metros excede lo necesario en condiciones normales. El razonamiento clave es que a alta velocidad se requiere muchísimo más espacio del que la intuición sugiere. Como alternativa práctica sirve siempre la regla de los tres segundos, que da un resultado equivalente sin calcular. Por eso la respuesta correcta es la a: unos 75 metros."
  },
  {
    "id": 99,
    "question": "Mire el dibujo. ¿Cuál es el peligro al que usted debe estar más atento(a)?",
    "options": [
      "El niño puede cruzar corriendo.",
      "El vendedor de helados puede poner su vehículo en movimiento.",
      "El auto estacionado puede ponerse en movimiento.",
      "El vendedor de helados puede bajarse de su vehículo."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q99_0.png"
    ],
    "explanation": "El peligro al que debe estar más atento es que el niño puede cruzar corriendo. Los niños actúan de forma imprevisible y pueden lanzarse a la calzada sin mirar, sobre todo cerca de un vehículo de helados; por eso se debe reducir la velocidad y estar preparado para detenerse.",
    "wrongExplanations": [
      "",
      "El vendedor de helados, detenido para vender, no representa el riesgo más inmediato; el peligro mayor es el niño.",
      "Un auto estacionado puede partir, pero en esta escena el riesgo principal y más probable es el niño cruzando.",
      "Que el vendedor se baje de su vehículo no es el peligro más relevante frente a un niño que puede cruzar corriendo."
    ],
    "page": 23,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento de esta respuesta es el principio de previsión de la conducta de los peatones más vulnerables, especialmente los niños. Un niño cerca de la calzada, y más aún junto a un vehículo de helados que despierta su interés, es altamente impredecible: puede cruzar corriendo de golpe, sin mirar y sin medir el peligro, porque a esa edad no ha desarrollado el juicio para evaluar la velocidad y la distancia de los autos. Por eso el peligro más urgente al que debe estar atento es justamente que el niño se lance a la calle. Las otras opciones, como que el vehículo del vendedor o el auto estacionado se muevan, o que el vendedor se baje, son posibilidades menos inmediatas y menos letales que un niño cruzando de improviso. El razonamiento correcto es jerarquizar los riesgos y poner primero al ser humano más impredecible y frágil. La regla práctica: ante niños cerca de la vía, levante el pie del acelerador y prepárese a frenar. Por eso la respuesta correcta es la a: el niño puede cruzar corriendo."
  },
  {
    "id": 100,
    "question": "Usted pretende doblar hacia la izquierda en un cruce, pero hay vehículos estacionados que le obstruyen la visual. ¿Qué debería hacer usted?",
    "options": [
      "Avanzar rápidamente, pero estando preparado para detenerse.",
      "Tocar la bocina y avanzar lentamente.",
      "Detenerse, luego avanzar lentamente hasta que tenga una visual plena.",
      "Tocar la bocina y avanzar rápidamente."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si vehículos estacionados le tapan la visual al doblar a la izquierda en un cruce, debe detenerse y luego avanzar lentamente hasta tener una visual plena. Nunca se cruza sin ver: avanzar de a poco le permite asomarse con seguridad y detenerse de inmediato si aparece un vehículo o peatón.",
    "wrongExplanations": [
      "Avanzar rápidamente sin ver es peligroso; podría salir al cruce frente a un vehículo que no alcanza a divisar.",
      "La bocina no reemplaza la visibilidad; avanzar sin ver sigue siendo riesgoso.",
      "",
      "Tocar la bocina y avanzar rápido sin tener visual es la maniobra más peligrosa de todas."
    ],
    "page": 23,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio que rige esta situación es que jamás se debe ingresar a un cruce o completar un viraje sin tener visibilidad plena de lo que viene, porque doblar 'a ciegas' es exponerse a un choque con un vehículo o a atropellar a un peatón que usted no alcanzó a ver. Cuando los autos estacionados le tapan la visual al doblar a la izquierda, la maniobra correcta es detenerse primero y luego avanzar muy lentamente, asomando el frente del vehículo de a poco hasta lograr una visual completa, lo que le permite frenar de inmediato si algo aparece. Las otras opciones son peligrosas: avanzar rápido, aun 'preparado para detenerse', no le da tiempo real de reacción, y tocar la bocina no reemplaza el ver, ya que la bocina advierte pero no garantiza que el otro se detenga ni que usted detecte el peligro. El razonamiento correcto privilegia la información sobre la rapidez: primero ver, después avanzar. El truco: 'asómese centímetro a centímetro, no metro a metro'. Por eso la respuesta correcta es la c: detenerse, luego avanzar lentamente hasta que tenga una visual plena."
  },
  {
    "id": 101,
    "question": "Usted va conduciendo al lado de una fila de autos estacionados. De pronto ve una pelota rebotando en la calzada un poco más adelante. ¿Qué debería hacer usted?",
    "options": [
      "Continuar a la misma velocidad, tocando la bocina.",
      "Continuar a la misma velocidad, pero encendiendo y apagando sus luces delanteras.",
      "Detenerse y señalar con la mano para que los niños crucen a recoger la pelota.",
      "Disminuir la velocidad y estar preparado para detenerse si aparece un niño."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q101_0.png"
    ],
    "explanation": "Una pelota que aparece rebotando en la calzada es una señal clara de alerta: detrás de ella casi siempre viene un niño corriendo sin mirar el tránsito. Por eso lo correcto es disminuir la velocidad y estar preparado para detenerse, anticipándose a que un menor salga sorpresivamente entre los autos estacionados. La conducción defensiva exige prever este tipo de situaciones de riesgo.",
    "wrongExplanations": [
      "Mantener la velocidad y solo tocar la bocina no evita el atropello; el niño puede aparecer igual y la bocina no detiene su carrera.",
      "Seguir a la misma velocidad es justamente lo peligroso; encender las luces no reemplaza la necesidad de reducir la marcha y poder frenar.",
      "Hacer señas a los niños para que crucen es un error grave: usted no puede garantizar la seguridad del resto del tránsito ni controlar a otros vehículos, y nunca debe inducir a un peatón a cruzar.",
      ""
    ],
    "page": 23,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento aquí es el principio de conducción defensiva, que obliga a interpretar las señales del entorno y anticipar lo que aún no se ve. Una pelota que entra rebotando a la calzada no es solo un objeto: es un indicador casi seguro de que un niño viene detrás corriendo tras ella, totalmente concentrado en el juego y sin mirar el tránsito. El razonamiento paso a paso es: veo la pelota, deduzco que hay un menor cerca, calculo que puede aparecer entre los autos estacionados en cualquier instante, y por eso suelto el acelerador, cubro el freno y reduzco la velocidad para tener distancia de reacción. Tocar la bocina o jugar con las luces no detiene a un niño y solo desvía su atención hacia usted en vez de hacia el peligro. Detenerse e invitarlo a cruzar con la mano tampoco corresponde, porque puede haber otros vehículos que no lo vean. La consecuencia real de no anticipar es un atropello a baja distancia, donde incluso pocos km/h marcan la diferencia entre frenar a tiempo o una tragedia. Un buen truco para recordarlo: detrás de cada pelota hay siempre un par de zapatillas corriendo."
  },
  {
    "id": 102,
    "question": "Al adelantar a animales que van por el camino, usted no debería...",
    "options": [
      "acelerar el motor o tocar la bocina.",
      "cambiar a una marcha más baja.",
      "usar los señalizadores de viraje.",
      "tener las luces encendidas."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Al adelantar animales que van por el camino, lo que NO debe hacer es acelerar el motor o tocar la bocina, porque los ruidos bruscos asustan a los animales y pueden provocar que se espanten e invadan la calzada de forma impredecible. Lo prudente es pasar con suavidad, despacio y sin sobresaltos para no alterarlos.",
    "wrongExplanations": [
      "",
      "Cambiar a una marcha más baja sí es recomendable, ya que permite conducir lento y con mayor control al pasar junto a los animales.",
      "Usar los señalizadores de viraje es correcto, pues advierte a los demás conductores de su maniobra de adelantamiento.",
      "Tener las luces encendidas mejora su visibilidad y es una práctica adecuada, no algo que deba evitar."
    ],
    "page": 23,
    "category": "Conduccion segura",
    "deepExplanation": "La regla se basa en que los animales reaccionan por instinto al ruido y al movimiento brusco, y el conductor debe adaptarse a esa naturaleza imprevisible. Acelerar el motor o tocar la bocina genera sonidos repentinos que los espantan, provocando que salten, retrocedan o invadan descontroladamente la calzada justo cuando usted los está adelantando. El razonamiento es simple: si el objetivo es pasar sin incidentes, debo eliminar todo lo que pueda alterar al animal, no agregarlo. Por eso las demás acciones del listado sí son correctas y de hecho recomendables: cambiar a una marcha más baja le da control y suavidad, usar los señalizadores avisa a otros conductores de la maniobra, y llevar las luces encendidas mejora su visibilidad. La consecuencia de espantar al animal puede ser un atropello, una caída del propio conductor si es motociclista, o un choque con quien venga detrás. El truco para memorizarlo: con animales se pasa en silencio y despacio, como caminando en puntillas, nunca a bocinazos."
  },
  {
    "id": 103,
    "question": "Al adelantar en un camino a una manada de ovejas, ¿qué hace usted?",
    "options": [
      "Deja un espacio lateral suficiente.",
      "Adelanta rápidamente y sin vacilaciones.",
      "Conduce lentamente.",
      "Toca la bocina levemente.",
      "Está preparado para detenerse."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Al adelantar una manada de ovejas debe dejar un espacio lateral suficiente, conducir lentamente y estar preparado para detenerse. Los animales en manada se mueven de forma impredecible y pueden cruzar o devolverse en cualquier momento, por lo que la prudencia y el control total del vehículo son indispensables para evitar atropellarlos o provocar un accidente.",
    "wrongExplanations": [
      "",
      "Adelantar rápidamente y sin vacilaciones es peligroso, ya que asusta a los animales y no le da margen para reaccionar si alguno cruza.",
      "",
      "Tocar la bocina, aunque sea levemente, puede espantar a las ovejas y dispersarlas hacia la calzada de forma descontrolada.",
      ""
    ],
    "page": 23,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es que una manada se comporta como un grupo impredecible: las ovejas se mueven en bloque, pero pueden devolverse, dispersarse o cruzar de golpe sin lógica aparente. Por eso la respuesta combina tres conductas que apuntan a un mismo objetivo, mantener el control total del vehículo en todo momento. Dejar un espacio lateral suficiente evita rozar o atropellar a un animal que se desvíe hacia usted; conducir lentamente reduce la energía de un eventual impacto y le da tiempo de leer el movimiento del rebaño; y estar preparado para detenerse le permite frenar por completo si la manada se cierra en su camino. En cambio, adelantar rápido y sin vacilaciones es exactamente lo contrario de lo prudente, y tocar la bocina las espanta y agrava el descontrol. El razonamiento clave es que con animales en grupo la prioridad nunca es el tiempo, sino llegar al otro lado sin provocar una estampida. Truco: trate la manada como un semáforo en amarillo permanente, pase lento, ancho y listo para parar."
  },
  {
    "id": 104,
    "question": "Usted va conduciendo por una calle de dos pistas y de doble sentido de tránsito en la cual hay vehículos estacionados al costado derecho. ¿Por cuáles 3 razones usted debe disminuir su velocidad?",
    "options": [
      "Pueden salir vehículos de su estacionamiento.",
      "Alguien puede abrir una puerta de un auto estacionado.",
      "Puede activar las alarmas de los automóviles.",
      "Para poder ser visto con mayor claridad por el tránsito que viene en contra.",
      "Entre los autos estacionados puede aparecer un niño corriendo."
    ],
    "correct": [
      0,
      1,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Al pasar junto a autos estacionados debe disminuir la velocidad por tres razones de seguridad: pueden salir vehículos desde su estacionamiento, alguien puede abrir una puerta repentinamente en su trayectoria, y entre los autos puede aparecer un niño corriendo. La menor velocidad le da el tiempo de reacción necesario para frenar ante cualquiera de estas situaciones.",
    "wrongExplanations": [
      "",
      "",
      "Activar las alarmas de otros automóviles no es una razón de tránsito ni un riesgo de seguridad; es un argumento sin sentido.",
      "La razón para reducir la velocidad no es ser visto por el tránsito contrario, sino poder reaccionar ante peligros que surjan desde los autos estacionados.",
      ""
    ],
    "page": 25,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio detrás de esta pregunta es que una fila de autos estacionados es una zona de peligros ocultos, y la velocidad debe ajustarse al riesgo que no se ve. Las tres razones correctas comparten que son situaciones que surgen desde esa fila y que usted no puede prever a tiempo si va rápido: un vehículo puede salir de su estacionamiento e incorporarse al tránsito, una persona puede abrir de golpe la puerta justo en su trayectoria, y un niño puede aparecer corriendo entre dos autos sin mirar. Disminuir la velocidad alarga su distancia de reacción y acorta la de frenado, que es lo único que le da margen ante estos imprevistos. Las opciones descartadas no resisten análisis: usted no puede activar alarmas ajenas con su sola circulación, y reducir la velocidad no busca ser visto por el tránsito contrario sino evitar atropellos y choques laterales. La consecuencia de pasar rápido junto a autos estacionados es no alcanzar a frenar ante una puerta o un peatón. Para recordarlo piense que cada auto estacionado es una puerta y un niño en potencia."
  },
  {
    "id": 105,
    "question": "Usted está esperando en un cruce en T. El vehículo azul que se acerca desde la izquierda señaliza a la derecha. ¿Qué debería hacer usted?",
    "options": [
      "Avanzar acelerando a fondo.",
      "Ponerse en marcha antes de que el vehículo azul llegue al cruce.",
      "Esperar hasta que el vehículo azul haya comenzado a virar.",
      "Avanzar lentamente."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q105_0.png"
    ],
    "explanation": "En un cruce en T, aunque el vehículo azul señalice que va a virar a la derecha, usted debe esperar hasta que efectivamente haya comenzado a virar. Las luces de viraje pueden estar encendidas por error o el conductor puede cambiar de decisión, así que solo cuando ve la maniobra concretarse es seguro avanzar. Nunca debe confiar ciegamente en la señalización del otro conductor.",
    "wrongExplanations": [
      "Avanzar acelerando a fondo es imprudente y peligroso, pues el vehículo azul podría no virar y usted provocaría una colisión.",
      "Ponerse en marcha antes de que el azul llegue al cruce es arriesgado, porque aún no sabe con certeza si realmente virará.",
      "",
      "Avanzar lentamente igual implica ingresar al cruce antes de confirmar la maniobra del otro vehículo, lo que sigue siendo riesgoso."
    ],
    "page": 25,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es no actuar nunca sobre una intención, sino solo sobre un hecho consumado, porque la señalización del otro conductor no garantiza la maniobra. Aunque el vehículo azul tenga encendido el indicador de viraje a la derecha, esa luz pudo quedar puesta por error de un viraje anterior, el conductor puede arrepentirse y seguir derecho, o puede dudar en el último momento. Si usted se pone en marcha confiando en esa señal y el azul continúa de frente, queda expuesto a una colisión en pleno cruce. El razonamiento correcto es esperar a ver que el vehículo efectivamente inicie el viraje, recién ahí su trayectoria queda libre y puede avanzar con seguridad. Por eso se descartan acelerar a fondo, partir antes de que llegue o avanzar lentamente confiando en la luz: todas asumen una maniobra que aún no ocurre. La regla práctica de oro es que las luces se confirman con los hechos, no con la fe; espere a ver girar las ruedas, no a ver la ampolleta encendida."
  },
  {
    "id": 106,
    "question": "Usted se ha quedado detenido justo al medio de un cruce ferroviario con sistema automático de señales y barreras y no puede echar a andar el motor nuevamente. La campanilla del cruce comienza a sonar. ¿Qué debería hacer usted?",
    "options": [
      "Correr por la vía para intentar avisar al maquinista.",
      "Salir del vehículo y alejarse de él.",
      "Seguir intentando reiniciar la marcha del vehículo.",
      "Intentar despejar el cruce empujando su vehículo."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si su vehículo queda detenido sobre un cruce ferroviario y no arranca, y la campanilla comienza a sonar indicando la llegada del tren, lo único correcto es salir del vehículo y alejarse de él de inmediato. Su vida vale más que el auto: ningún intento de mover o reiniciar el vehículo justifica permanecer en la zona de peligro ante un tren que no puede frenar a tiempo.",
    "wrongExplanations": [
      "Correr por la vía para avisar al maquinista no sirve, pues el tren no alcanza a detenerse y usted se expone inútilmente al peligro.",
      "",
      "Seguir intentando reiniciar el motor le hace perder segundos valiosos y arriesga su vida innecesariamente.",
      "Intentar empujar el vehículo toma demasiado tiempo y lo mantiene en la zona de impacto; debe priorizar ponerse a salvo."
    ],
    "page": 25,
    "category": "Senales y semaforos",
    "deepExplanation": "Aquí el principio que manda sobre todos los demás es que la vida humana vale infinitamente más que el vehículo, y un tren no puede detenerse a tiempo. Cuando su auto queda calado sobre la vía y la campanilla suena, eso significa que el tren ya viene en camino y que las barreras están por bajar; un tren cargado necesita cientos de metros para frenar, por lo que aunque el maquinista lo vea no podrá evitar el impacto. El razonamiento es directo: no hay nada que recuperar dentro o sobre el vehículo que justifique permanecer en la zona de impacto, por eso la única acción correcta es salir y alejarse de inmediato, idealmente caminando hacia el lado desde donde viene el tren para no ser alcanzado por restos tras la colisión. Seguir intentando encender el motor, empujar el auto solo o correr por la vía le hacen perder los segundos que necesita para ponerse a salvo. Truco para fijarlo: si suena la campanilla y el auto no parte, abandone todo y salga; el fierro se reemplaza, usted no."
  },
  {
    "id": 107,
    "question": "¿A qué debe estar especialmente atento el conductor del vehículo indicado con la flecha?",
    "options": [
      "Irregularidades de la superficie de calzada.",
      "Peatones que puedan aparecer sorpresivamente entre autos estacionados para cruzar.",
      "Autos que abandonen sus lugares de estacionamiento.",
      "Lugares disponibles para estacionar.",
      "Puertas de automóviles estacionados que se abran.",
      "Automóviles que vengan detrás de él."
    ],
    "correct": [
      1,
      2,
      4
    ],
    "multi": true,
    "images": [
      "q107_0.png"
    ],
    "explanation": "Al conducir junto a autos estacionados debe estar especialmente atento a tres riesgos: peatones que aparezcan sorpresivamente entre los autos para cruzar, vehículos que abandonen su estacionamiento, y puertas que se abran de improviso en su camino. Todos estos peligros surgen desde la fila de autos estacionados y exigen velocidad moderada y atención permanente para reaccionar a tiempo.",
    "wrongExplanations": [
      "Las irregularidades de la calzada no son el riesgo principal en esta situación de autos estacionados; lo crítico son los peligros que emergen de ellos.",
      "",
      "",
      "Buscar lugares para estacionar lo distrae de los riesgos reales y no es a lo que debe prestar atención prioritaria.",
      "",
      "Los autos que vengan detrás no constituyen el peligro principal aquí; el foco está en lo que surge desde los autos estacionados a su costado."
    ],
    "page": 25,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento es la lectura activa del entorno cuando se circula pegado a una fila de autos estacionados, donde los peligros aparecen siempre desde ese costado. Las tres respuestas correctas describen riesgos que nacen justamente de esa fila: peatones que cruzan saliendo de improviso entre dos vehículos sin que usted los vea venir, autos que abandonan su estacionamiento y se le atraviesan, y puertas que se abren repentinamente invadiendo su trayectoria. El hilo común es que todos exigen anticipación y velocidad moderada, porque la fila de autos le tapa la visibilidad y le quita reacción. Las opciones descartadas no son prioritarias en esta escena: las irregularidades de la calzada, los lugares para estacionar o los autos que vienen detrás no representan el peligro inmediato y dominante de este escenario. El razonamiento es concentrar la atención en la fuente real del riesgo, no dispersarla. Para recordarlo: junto a autos estacionados vigile siempre tres cosas que saltan al ruedo, una persona, un auto que sale y una puerta que se abre."
  },
  {
    "id": 108,
    "question": "¿Qué debería hacer el conductor del auto indicado con la flecha?",
    "options": [
      "Hacer señas con la mano a los peatones que están esperando poder cruzar.",
      "Pasar rápidamente por detrás del peatón que va cruzando la calzada.",
      "Esperar a que pase el peatón que va por la calzada.",
      "Decirle al peatón que no debería haber cruzado."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q108_0.png"
    ],
    "explanation": "Cuando un peatón ya va cruzando la calzada, el conductor debe esperar a que termine de pasar. El peatón tiene prioridad y la obligación del conductor es cederle el paso de forma segura, sin presionarlo ni intentar adelantarse. Detenerse y aguardar protege la integridad del peatón.",
    "wrongExplanations": [
      "Hacer señas a los peatones que esperan puede inducirlos a cruzar sin que usted controle el resto del tránsito, lo que es peligroso y no corresponde.",
      "Pasar rápidamente por detrás del peatón es imprudente y riesgoso, pues el peatón podría retroceder o cambiar de dirección.",
      "",
      "Recriminar al peatón no aporta nada a la seguridad y no es función del conductor; su deber es simplemente cederle el paso."
    ],
    "page": 26,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento legal y ético es la prioridad del peatón que ya inició el cruce, consagrada en la Ley de Tránsito: una vez que la persona pisó la calzada, el conductor tiene la obligación de cederle el paso de forma segura. El razonamiento es que un peatón en movimiento es vulnerable y no debe ser presionado ni sorprendido; por eso lo único correcto es detenerse y esperar a que termine de cruzar antes de continuar. Pasar rápidamente por detrás de él lo expone a un movimiento inesperado del peatón y elimina su margen de frenado; hacerle señas con la mano puede inducirlo a cruzar hacia un peligro que usted no controla, como otro vehículo; y reprenderlo es irrelevante y peligroso porque desvía su atención. La consecuencia de no esperar es un atropello que la ley atribuye al conductor por no respetar la preferencia peatonal. La idea clave a memorizar: peatón que ya cruza, conductor que se detiene y espera, sin apuro y sin gestos."
  },
  {
    "id": 109,
    "question": "¿Qué debería hacer el conductor del auto señalado con la flecha?",
    "options": [
      "Retroceder para salir del cruce.",
      "Esperar en el mismo lugar hasta tener luz verde.",
      "Esperar hasta tener luz roja.",
      "Continuar con precaución."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q109_0.png"
    ],
    "explanation": "Cuando el semáforo cambia y usted ya quedó dentro del cruce, debe continuar con precaución para despejarlo lo antes posible. Retroceder o quedarse detenido obstruiría la intersección y generaría riesgo de colisión; lo correcto es completar el paso con cuidado para liberar la zona y permitir el flujo normal del tránsito.",
    "wrongExplanations": [
      "Retroceder dentro de un cruce es peligroso, ya que no puede ver bien lo que viene detrás y puede chocar a otros vehículos.",
      "Esperar detenido en medio del cruce obstruye la intersección y expone su vehículo a ser impactado por el tránsito transversal.",
      "Esperar la luz roja no tiene sentido y solo prolonga su permanencia en una zona peligrosa donde bloquea el paso.",
      ""
    ],
    "page": 26,
    "category": "Senales y semaforos",
    "deepExplanation": "El principio rector es que la intersección debe despejarse siempre lo antes posible, porque un vehículo detenido en pleno cruce se convierte en un obstáculo que bloquea el flujo y multiplica el riesgo de colisión desde varias direcciones. Si el semáforo cambió mientras usted ya estaba dentro del cruce, no puede quedarse inmovilizado esperando otra luz ni mucho menos retroceder, porque retroceder lo expone a los vehículos y peatones que ya tienen su paso habilitado por detrás. El razonamiento correcto es continuar con precaución para liberar la intersección rápido, mirando que el camino de salida esté libre. Esperar luz verde quedándose en el cruce o esperar luz roja son maniobras que prolongan la obstrucción y agravan el peligro. La consecuencia de quedarse atascado es trabar la intersección y provocar choques o el clásico bloqueo en cruz. La regla de oro: nunca entre a un cruce si no tiene salida asegurada, y si ya está dentro cuando cambia la luz, complételo y despeje sin vacilar."
  },
  {
    "id": 110,
    "question": "¿Cuál es el principal peligro cuando usted sobrepasa al bus que está detenido en la parada?",
    "options": [
      "Que usted debe ceder el paso al bus si éste se pone en marcha.",
      "Que el auto que va adelante puede detenerse para ceder el paso a un peatón.",
      "Que alguien puede venir corriendo al bus desde el otro lado de la calle.",
      "Que algún pasajero que se baje del bus puede aparecer repentinamente delante del mismo para cruzar."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q110_0.png"
    ],
    "explanation": "El principal peligro al sobrepasar un bus detenido en la parada es que un pasajero que acaba de bajar aparezca repentinamente por delante del bus para cruzar la calle. Como el bus tapa la visibilidad, usted no alcanza a ver al peatón hasta que está frente a usted, por lo que debe pasar a baja velocidad y preparado para frenar.",
    "wrongExplanations": [
      "Aunque debe ceder el paso al bus si se reincorpora, ese no es el peligro principal al sobrepasarlo; lo crítico es el peatón oculto.",
      "El auto de adelante no es el riesgo central de esta situación específica de sobrepasar un bus detenido.",
      "Alguien que corre hacia el bus desde el otro lado es un riesgo menor comparado con el pasajero que cruza saliendo por delante del bus.",
      ""
    ],
    "page": 26,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es que el bus detenido actúa como una pantalla que tapa por completo la visibilidad, generando un peligro oculto clásico de la conducción urbana. El mayor riesgo al sobrepasarlo es que un pasajero que acaba de bajar cruce por delante del bus, sin verlo a usted y sin que usted lo vea, hasta que ambos quedan frente a frente con muy poco margen. El razonamiento es que la persona que baja tiende a cruzar de inmediato por el punto más corto, justo por delante del vehículo que la tapa, y como va apurada no evalúa el tránsito de la pista contigua. Las otras alternativas describen situaciones secundarias o menos críticas comparadas con este atropello casi inevitable si usted pasa rápido. La defensa correcta es sobrepasar el bus a baja velocidad, separado y con el pie listo en el freno, anticipando que alguien saldrá de esa zona ciega. Truco para no olvidarlo: delante de un bus detenido siempre puede haber un peatón escondido, trátelo como un muro con sorpresa."
  },
  {
    "id": 111,
    "question": "¿Qué significa la señal que está efectuando el camión?",
    "options": [
      "El camión va a disminuir la velocidad y va a detenerse.",
      "El conductor del camión le está indicando a usted que lo puede adelantar.",
      "El camión va a virar a la derecha.",
      "El conductor del camión ha olvidado apagar sus luces indicadoras de viraje."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q111_0.png"
    ],
    "explanation": "La señal que efectúa el camión, con el brazo extendido o la luz indicadora correspondiente, significa que va a virar a la derecha. Reconocer las señales manuales y luminosas de viraje de otros vehículos es esencial para anticipar sus maniobras y conducir de forma segura sin invadir su trayectoria.",
    "wrongExplanations": [
      "Esa señal no indica disminución de velocidad ni detención; corresponde a un viraje a la derecha.",
      "El conductor no le está autorizando a adelantar; está comunicando su propia intención de virar.",
      "",
      "No se trata de un olvido: la señal es deliberada y comunica claramente la intención de virar a la derecha."
    ],
    "page": 27,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento es el sistema de señales manuales del conductor, que existe como respaldo cuando los indicadores luminosos fallan o para reforzar la comunicación entre vehículos, especialmente en camiones y vehículos antiguos. Saber leerlas es parte de anticipar las maniobras ajenas. En este caso la señal del camión, ya sea por el brazo extendido o la luz indicadora correspondiente, significa que va a virar a la derecha, por lo que usted no debe intentar adelantarlo por ese costado ni invadir la trayectoria hacia la cual va a girar. El razonamiento es que un camión con remolque hace giros amplios y abiertos, de modo que interpretar mal su señal y quedar a su derecha lo expone a quedar atrapado en el ángulo del viraje. Por eso se descarta pensar que le cede el paso, que va a detenerse o que olvidó apagar la luz: la lectura correcta es una intención clara de giro. La clave es respetar el espacio del camión y nunca adelantar por el lado hacia donde está señalizando que girará."
  },
  {
    "id": 112,
    "question": "¿Qué debe hacer usted cuando va en una fila de autos?",
    "options": [
      "Debe concentrarse sólo en el vehículo que va inmediatamente delante suyo.",
      "Debe mantener un espacio suficiente respecto del vehículo que va delante suyo, de modo de posibilitar que otro vehículo lo adelante a usted e ingrese a dicho espacio.",
      "Debe mirar a buena distancia hacia adelante, eventualmente a través de los cristales de los otros vehículos, a fin de poder moderar la velocidad a tiempo si alguien frena.",
      "Debe mantenerse atento a los vehículos que van tanto delante como detrás suyo.",
      "Debe concentrarse sólo en el vehículo que va detrás suyo."
    ],
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Al ir en una fila de autos debe mantener un espacio suficiente con el vehículo de adelante para que otro pueda adelantarlo e incorporarse, mirar bien hacia adelante incluso a través de los cristales de otros vehículos para anticipar frenadas, y estar atento tanto a los que van delante como detrás suyo. Esta conducción anticipativa y de visión amplia le permite reaccionar a tiempo ante cualquier imprevisto.",
    "wrongExplanations": [
      "Concentrarse solo en el vehículo inmediatamente delante le impide anticipar lo que ocurre más adelante en la fila y reaccionar a tiempo.",
      "",
      "",
      "",
      "Fijarse solo en el vehículo de atrás lo deja ciego ante los peligros y frenadas que vienen desde adelante, que son los más críticos."
    ],
    "page": 27,
    "category": "Conduccion segura",
    "deepExplanation": "El principio es la conducción anticipativa y de visión amplia: ir en fila no significa mirar solo el parachoques de adelante, sino leer toda la cadena de vehículos para reaccionar antes de que el problema llegue a usted. Las tres conductas correctas se complementan: mantener un espacio suficiente con el de adelante permite que otro vehículo lo adelante e ingrese a ese hueco sin riesgo, y además es su propia distancia de frenado; mirar bien hacia adelante, incluso a través de los cristales de los autos que lo preceden, le permite ver cuando alguien dos o tres autos más allá frena y moderar la velocidad a tiempo en lugar de reaccionar tarde en cadena; y estar atento tanto a los de adelante como a los de atrás le da conciencia total de su entorno. Por eso se descartan las opciones de concentrarse solo en el de adelante o solo en el de atrás, porque la visión parcial es la que produce las colisiones múltiples por alcance. La consecuencia de mirar corto es frenar tarde y provocar el efecto acordeón. Truco: en fila, mire lejos y por entre los vidrios, no se quede pegado al auto de enfrente."
  },
  {
    "id": 113,
    "question": "¿Hacia dónde es más importante que usted mire en este momento?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q113_0.png"
    ],
    "explanation": "En esta situación lo más importante es mirar hacia el punto C, que corresponde a la zona de mayor riesgo inmediato en la escena, donde puede surgir el conflicto de tránsito que exige su atención prioritaria. Dirigir la vista hacia el peligro más probable le permite anticiparse y reaccionar con tiempo suficiente.",
    "wrongExplanations": [
      "El punto A no representa el riesgo más relevante en este momento; su atención debe ir al lugar de mayor peligro potencial.",
      "El punto B no es donde se concentra el riesgo principal de la situación.",
      "",
      "El punto D no corresponde a la zona crítica que requiere su atención prioritaria en este instante."
    ],
    "page": 27,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es la jerarquización del riesgo: en toda escena hay varios puntos donde mirar, pero el conductor seguro dirige su atención prioritaria hacia donde es más probable que se genere el conflicto inmediato. En esta situación ese punto es el C, que concentra el peligro más cercano y de mayor probabilidad de materializarse, por lo que mirar allí le entrega el tiempo de reacción que necesita para anticiparse. El razonamiento es que la vista guía la conducción: uno tiende a ir hacia donde mira y a reaccionar antes ante lo que observa con anticipación, de modo que enfocar el punto equivocado le hace perder segundos críticos frente al verdadero riesgo. Los demás puntos representan zonas secundarias o ya controladas que no exigen su atención principal en este instante. La idea práctica es entrenar el ojo para buscar siempre el peligro más probable, no el más vistoso. Regla útil: mire hacia donde puede aparecer el problema, no hacia donde no pasa nada."
  },
  {
    "id": 114,
    "question": "En esta situación, ¿a cuáles 3 riesgos debe estar usted principalmente atento?",
    "options": [
      "Al ciclista que viene en sentido contrario.",
      "Al tránsito en la intersección que hay más adelante.",
      "A las puertas de autos que pueden ser abiertas.",
      "A niños que pueden salir a la calzada por entre los autos.",
      "A los vehículos que pueden venir detrás suyo.",
      "A irregularidades de la superficie de calzada."
    ],
    "correct": [
      0,
      2,
      3
    ],
    "multi": true,
    "images": [
      "q114_0.png"
    ],
    "explanation": "En esta situación debe estar atento principalmente a tres riesgos: el ciclista que viene en sentido contrario, las puertas de autos estacionados que puedan abrirse, y los niños que pueden salir a la calzada por entre los autos. Todos son peligros que pueden surgir de improviso a su alrededor y exigen velocidad moderada y atención constante para frenar a tiempo.",
    "wrongExplanations": [
      "",
      "El tránsito de la intersección más adelante no es uno de los tres riesgos prioritarios e inmediatos en esta escena.",
      "",
      "",
      "Los vehículos que vienen detrás no constituyen el riesgo principal aquí; el foco está en los peligros que surgen al costado y al frente.",
      "Las irregularidades de la calzada no son el riesgo central; lo crítico son el ciclista, las puertas y los niños."
    ],
    "page": 28,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es la evaluación simultánea de múltiples fuentes de riesgo en un entorno urbano con autos estacionados y tránsito mixto. Los tres riesgos prioritarios provienen de direcciones distintas pero todos pueden materializarse de improviso: el ciclista que viene en sentido contrario, que es vulnerable y puede desviar su línea; las puertas de los autos estacionados que pueden abrirse de golpe en su trayectoria; y los niños que pueden salir corriendo a la calzada por entre los vehículos detenidos, sin mirar. El razonamiento es que estos tres comparten la característica de aparecer súbitamente y a corta distancia, exigiendo velocidad moderada y atención repartida. Se descartan como prioridad la intersección lejana, los vehículos de atrás y las irregularidades de la calzada, porque no son el peligro inmediato y dominante de esta escena específica. La consecuencia de no vigilarlos es no alcanzar a frenar ante una puerta, un niño o el ciclista. Para fijarlo: junto a autos estacionados piense en lo que cruza, lo que se abre y lo que viene de frente."
  },
  {
    "id": 115,
    "question": "Usted va conduciendo a 70 km/h que es la velocidad máxima permitida en esta vía. ¿Qué hace en esta situación?",
    "options": [
      "Está preparado para actuar ya que alguien puede salir corriendo a la calzada.",
      "Está preparado para actuar ya que el bus puede ponerse en marcha.",
      "Frena y cede el paso al bus, si éste está por salir de la parada.",
      "Sigue conduciendo sin estar preparado para nada en especial, ya que usted tiene dominio de su vehículo."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [
      "q115_0.png"
    ],
    "explanation": "Aunque circule a la velocidad máxima permitida, debe estar preparado para actuar porque alguien puede salir corriendo a la calzada y porque el bus puede ponerse en marcha. Ir a la velocidad legal no lo exime de conducir a la defensiva: siempre debe anticipar los riesgos del entorno y moderar la marcha si la situación lo requiere.",
    "wrongExplanations": [
      "",
      "",
      "Frenar y ceder el paso al bus no es lo que define esta situación; el bus debe esperar a que usted pase si no es seguro que se incorpore. Lo prioritario es estar atento a los riesgos descritos.",
      "Seguir sin estar preparado para nada es una actitud imprudente: el dominio del vehículo no evita los imprevistos del entorno y debe anticiparse siempre."
    ],
    "page": 28,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio fundamental es que el límite de velocidad es un máximo, no una obligación, y nunca exime al conductor de adaptar su marcha al riesgo presente. Aunque usted vaya a los 70 km/h permitidos, debe estar preparado para actuar por dos motivos concretos en esta escena: alguien puede salir corriendo a la calzada, y el bus detenido puede ponerse en marcha e incorporarse a su pista. El razonamiento es que circular dentro de la ley no garantiza seguridad si el entorno presenta peligros previsibles; la conducción defensiva obliga a anticipar y a reducir la velocidad si la situación lo amerita, incluso por debajo del máximo. Por eso se descarta la idea de seguir sin estar preparado para nada confiando en que domina el vehículo, porque el dominio mecánico no anticipa lo que hace un peatón o un bus. La opción de frenar y ceder el paso al bus como conducta única tampoco captura la doble alerta que exige la escena. La clave: la velocidad máxima es un techo, no un permiso para dejar de mirar y anticipar."
  },
  {
    "id": 116,
    "question": "¿Qué hace usted ante esta situación?",
    "options": [
      "Hace señales a los peatones para que se alejen de la calzada.",
      "Reduce su velocidad y continúa conduciendo.",
      "Hace señales de luces al vehículo que viene en contra para que espere a que usted haya pasado.",
      "Espera y deja pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q116_0.png"
    ],
    "explanation": "Cuando hay peatones junto a la calzada y un vehículo viene en sentido contrario por un espacio estrecho, lo correcto es esperar y dejar pasar primero al vehículo que viene en contra, y luego usted continúa y pasa a los peatones. Así evita maniobras simultáneas en un espacio reducido y resguarda la seguridad de todos, especialmente de los peatones.",
    "wrongExplanations": [
      "Hacer señas a los peatones para que se alejen no le corresponde y puede inducir movimientos peligrosos; debe ser usted quien adecue su conducción.",
      "Reducir la velocidad y simplemente continuar no resuelve el conflicto con el vehículo que viene en contra en el espacio estrecho.",
      "Hacer señales de luces para que el otro espere genera confusión y no es la forma correcta de coordinar el paso; lo prudente es ceder usted.",
      ""
    ],
    "page": 28,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento es la gestión de un espacio estrecho compartido, donde no caben dos maniobras simultáneas sin poner en riesgo al más vulnerable. Cuando hay peatones junto a la calzada y un vehículo viene en sentido contrario por un punto angosto, intentar pasar a los peatones al mismo tiempo que se cruza con el vehículo contrario lo obligaría a estrecharse justo contra las personas, sin margen de seguridad. El razonamiento correcto es secuenciar: primero esperar y dejar pasar al vehículo que viene en contra, despejando así el ancho de la calzada, y solo después continuar y pasar a los peatones con el espacio lateral suficiente para resguardarlos. Hacer señas a los peatones para que se alejen o hacer luces al vehículo contrario son intentos de imponer su prioridad que generan confusión y peligro; reducir la velocidad y seguir sin más no resuelve el conflicto de espacio. La consecuencia de no ceder es estrujar a los peatones contra el borde. Truco: cuando el espacio no alcanza para dos, ceda primero y proteja siempre al peatón pasándolo con holgura."
  },
  {
    "id": 117,
    "question": "Mientras va conduciendo su vehículo usted siente que lo están llamando a su teléfono celular, ¿qué hace usted para responder la llamada?",
    "options": [
      "Reduce su velocidad.",
      "Espera hasta encontrar un lugar seguro donde detenerse.",
      "Conduce con una mano en el volante.",
      "Es especialmente cauteloso en las intersecciones."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si suena su celular mientras conduce, lo correcto es esperar hasta encontrar un lugar seguro donde detenerse para responder. La Ley de Tránsito prohíbe manipular el teléfono mientras se conduce, ya que distrae la atención y aumenta enormemente el riesgo de accidente. La llamada siempre puede esperar.",
    "wrongExplanations": [
      "Reducir la velocidad no elimina la distracción de manipular el teléfono; conducir y hablar por celular sigue siendo peligroso y está prohibido.",
      "",
      "Conducir con una mano para sostener el teléfono disminuye su control del vehículo y su atención; es una práctica prohibida y riesgosa.",
      "Ser cauteloso en las intersecciones no compensa la distracción de usar el celular conduciendo; igual debe detenerse para contestar."
    ],
    "page": 30,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento legal es que la Ley de Tránsito 18.290 prohíbe expresamente manipular el teléfono celular mientras se conduce, porque la distracción visual, manual y cognitiva que genera multiplica el riesgo de accidente. Atender el teléfono al volante desvía la mirada del camino por varios segundos, tiempo en el que el vehículo recorre una distancia considerable a ciegas. El razonamiento correcto es que la llamada nunca tiene la urgencia que justifique ese riesgo, por lo que lo que corresponde es esperar hasta encontrar un lugar seguro donde detenerse por completo y recién ahí responder. Las demás opciones son falsas soluciones: reducir la velocidad sigue dejándolo distraído, conducir con una sola mano disminuye su control sobre el vehículo, y ser cauteloso en las intersecciones no compensa la atención que pierde al hablar. La consecuencia real es chocar o atropellar por mirar la pantalla en lugar del camino, además de la sanción legal. La regla simple para grabarla: si suena el teléfono, primero estacione seguro, después conteste; el celular y el manejo no se mezclan."
  },
  {
    "id": 118,
    "question": "Usted debería utilizar su teléfono celular en su automóvil sólo en la siguiente situación:",
    "options": [
      "Si su vehículo tiene cambio automático.",
      "Si necesita efectuar una llamada de emergencia.",
      "Cuando se encuentra detenido en un lugar seguro.",
      "Al circular por un camino secundario."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Usted solo debería usar el teléfono celular cuando se encuentra detenido en un lugar seguro. La normativa busca evitar cualquier distracción al volante, por lo que la única condición que permite manipular el teléfono con seguridad es estar completamente detenido y fuera del flujo de tránsito.",
    "wrongExplanations": [
      "Que el vehículo tenga cambio automático no tiene relación con la seguridad de usar el teléfono; igual lo distrae mientras conduce.",
      "Aunque sea una emergencia, lo seguro es detenerse en un lugar adecuado; manipular el teléfono en movimiento sigue siendo riesgoso.",
      "",
      "Circular por un camino secundario no autoriza el uso del teléfono; la distracción es igual de peligrosa en cualquier vía."
    ],
    "page": 30,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento es el mismo que prohíbe distraerse al volante: la única condición en que manipular el teléfono no compromete su control sobre el vehículo es cuando este está completamente detenido en un lugar seguro y fuera del flujo de tránsito. El razonamiento es que detenido y aparcado de forma segura usted ya no está conduciendo, por lo que su atención puede dedicarse al teléfono sin poner en riesgo a nadie. Las demás opciones son trampas frecuentes: tener cambio automático no libera su atención del camino, circular por un camino secundario no elimina los peligros, y aunque una emergencia sea grave, lo correcto sigue siendo detenerse en lugar seguro para realizar esa llamada en vez de hacerla en movimiento. El error común es creer que en situaciones de baja exigencia se puede usar el teléfono, cuando la norma no admite excepciones por la vía ni por el tipo de vehículo. La consecuencia de usarlo en marcha es la distracción que provoca accidentes. Para recordarlo: el teléfono solo se usa con el auto detenido y seguro, sin importar dónde ni qué auto sea."
  },
  {
    "id": 119,
    "question": "En un camino muy transitado usted desea adelantar a un camión con remolque que va lentamente delante suyo, ¿qué debería hacer usted?",
    "options": [
      "Mantenerse bien atrás del camión hasta que pueda ver que tiene espacio suficiente como para adelantarlo.",
      "Esperar atrás del camión hasta que su conductor le indique que puede adelantarlo.",
      "Encender y apagar s us luces para que quienes vienen en contra le faciliten el adelantamiento.",
      "Seguir muy de cerca al camión desplazándose permanentemente hacia el centro de la calzada para poder ver hacia adelante."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Para adelantar a un camión con remolque que va lento, debe mantenerse bien atrás de él hasta poder ver con claridad que tiene espacio suficiente para realizar la maniobra. Conservar esa distancia le da mejor visibilidad del camino y del tránsito que viene en contra, permitiéndole adelantar solo cuando sea totalmente seguro.",
    "wrongExplanations": [
      "",
      "No debe esperar que el conductor del camión le indique cuándo adelantar; la decisión y la responsabilidad de la maniobra son suyas, según su propia visibilidad.",
      "Encender y apagar las luces para presionar a los que vienen en contra es peligroso e inapropiado; usted debe adelantar solo cuando haya espacio seguro.",
      "Seguir muy de cerca al camión reduce su visibilidad y, al desplazarse hacia el centro, se expone al tránsito contrario; es una práctica muy riesgosa."
    ],
    "page": 30,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento es que adelantar a un camión con remolque exige una visibilidad amplia y despejada, y un vehículo largo justamente tapa por completo lo que viene adelante y en sentido contrario. La conducta correcta es mantenerse bien atrás del camión, porque cuanto mayor es la distancia que usted deja, mejor es el ángulo de visión que gana sobre el camino y sobre el tránsito que se aproxima de frente, permitiéndole confirmar que existe espacio real y seguro antes de salir a adelantar. El razonamiento es contraintuitivo pero clave: pegarse al camión para ver mejor produce el efecto opuesto, lo enceguece y lo deja sin margen de frenado. Por eso se descartan seguirlo muy de cerca desplazándose al centro, lo más peligroso, y esperar a que el conductor del camión le indique, porque la decisión y la responsabilidad de adelantar son siempre suyas. Hacer luces para que los de enfrente le faciliten el paso no garantiza nada. La regla práctica: para adelantar a un camión, atrás se ve más, así que retroceda la distancia, mire y solo salga cuando vea con claridad."
  },
  {
    "id": 120,
    "question": "a mayor parte de los accidentes de tránsito se produce en:",
    "options": [
      "Carreteras",
      "Salidas de colegios",
      "Caminos rurales",
      "Intersecciones"
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La mayor parte de los accidentes de tránsito se produce en las intersecciones, porque en ellas confluyen vehículos y peatones desde distintas direcciones, multiplicando los puntos de conflicto. Por eso debe extremar la precaución, reducir la velocidad y respetar la prioridad de paso al aproximarse a cualquier cruce.",
    "wrongExplanations": [
      "Aunque las carreteras pueden tener accidentes graves por la alta velocidad, no es donde se concentra la mayor cantidad de ellos.",
      "Las salidas de colegios son zonas de riesgo puntual, pero no concentran la mayoría de los accidentes de tránsito.",
      "Los caminos rurales presentan riesgos propios, pero no son el lugar donde ocurre la mayor parte de los accidentes.",
      ""
    ],
    "page": 30,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento estadístico y vial es que las intersecciones concentran la mayor parte de los accidentes de tránsito porque son los puntos donde convergen vehículos y peatones desde distintas direcciones, multiplicando los puntos de conflicto y las maniobras simultáneas como virajes, cruces y cambios de prioridad. El razonamiento es que en una carretera o un camino rural el tránsito fluye mayormente en la misma dirección y los conflictos son menos frecuentes, mientras que en un cruce coinciden trayectorias que se atraviesan, y basta un error de prioridad, una luz mal interpretada o una velocidad inadecuada para que se produzca la colisión. Por eso las salidas de colegios o los caminos rurales, aunque tienen sus riesgos propios, no son donde se acumula la mayor cantidad de siniestros. La consecuencia práctica es clara: al aproximarse a cualquier intersección debe reducir la velocidad, mirar a ambos lados, respetar la prioridad de paso y nunca asumir que el otro se detendrá. Para recordarlo: donde los caminos se cruzan, los peligros se suman."
  },
  {
    "id": 121,
    "question": "Entre los accidentes de tránsito se distinguen distintos tipos de éstos. En Chile, ¿cuál es el tipo de accidente que origina la mayor cantidad de muertos?",
    "options": [
      "Los choques contra obstáculos fijos.",
      "Las colisiones entre 2 o más vehículos.",
      "Los atropellos.",
      "Los volcamientos."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "En Chile, los atropellos son el tipo de accidente que origina la mayor cantidad de fallecidos. Esto se debe a que el peatón es el usuario más vulnerable de la vía: no cuenta con ninguna protección (carrocería, cinturón ni airbag) frente al impacto de un vehículo. Por eso la Ley de Tránsito pone especial énfasis en el deber del conductor de respetar y proteger al peatón.",
    "wrongExplanations": [
      "Los choques contra obstáculos fijos generan accidentes graves, pero no concentran la mayor cantidad de muertos en las estadísticas nacionales.",
      "Las colisiones entre vehículos son muy frecuentes, pero al estar ambos ocupantes protegidos por la carrocería no producen tantos muertos como los atropellos.",
      "",
      "Los volcamientos pueden ser muy graves, pero ocurren con menor frecuencia y no son la principal causa de muertes en el tránsito chileno."
    ],
    "page": 30,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta respuesta está en la vulnerabilidad física del cuerpo humano frente a un vehículo en movimiento. En un atropello, la energía del impacto se transfiere directamente al peatón, que no tiene carrocería, cinturón, airbag ni estructura que absorba el golpe, por lo que un choque incluso a velocidades moderadas puede ser mortal. A esto se suma que el peatón puede ser proyectado contra el suelo o contra otro objeto, sumando lesiones. Por eso las estadísticas de CONASET ubican el atropello como el accidente con mayor cantidad de fallecidos, por sobre colisiones, volcamientos o choques contra obstáculos fijos, donde los ocupantes sí cuentan con elementos de protección. La Ley 18.290 traduce este principio en obligaciones concretas para el conductor: reducir la velocidad cerca de pasos peatonales, colegios y zonas de alta circulación de personas. Truco para recordarlo: el más débil es el que más muere, y en la vía el más débil siempre es el peatón."
  },
  {
    "id": 122,
    "question": "Al estar estacionado, ¿qué debería hacer usted justo antes de poner su vehículo en movimiento?",
    "options": [
      "Ajustar sus espejos",
      "Seleccionar primera marcha",
      "Mirar a su alrededor y chequear sus puntos ciegos",
      "Señalizar"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Justo antes de poner el vehículo en movimiento desde un estacionamiento, lo último que debe hacer es mirar a su alrededor y revisar los puntos ciegos. Esto le permite detectar peatones, ciclistas u otros vehículos que pudieran estar acercándose y que los espejos no alcanzan a mostrar. Es una maniobra de seguridad indispensable para incorporarse al tránsito sin riesgo.",
    "wrongExplanations": [
      "Ajustar los espejos es algo que se hace antes, durante la preparación; no es el último chequeo justo antes de partir.",
      "Seleccionar la primera marcha es parte del proceso mecánico de partida, pero no reemplaza la verificación visual del entorno.",
      "",
      "Señalizar es importante para avisar su intención, pero debe hacerse después de comprobar que es seguro moverse; primero se mira el entorno."
    ],
    "page": 30,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La clave de esta pregunta es entender que existe una secuencia de acciones antes de partir y que cada una se hace en un momento distinto: ajustar espejos, señalizar y seleccionar la marcha son pasos previos de preparación, pero la última verificación, justo antes de soltar el embrague y moverse, es la revisión visual del entorno. Los espejos retrovisores dejan zonas que no muestran, llamadas puntos ciegos, donde puede haber un ciclista, un peatón o un vehículo aproximándose; por eso se requiere girar físicamente la cabeza para mirar. El fundamento es que la situación del tránsito cambia en segundos, así que aunque hayas mirado al ajustar los espejos, la realidad puede ser distinta un instante después. Si te incorporas sin esta comprobación, el riesgo real es atropellar a alguien que pasa junto al auto o provocar una colisión lateral con quien venía por la pista. Truco: piensa que lo último que tus ojos deben ver antes de moverte es la calle real, no el espejo. Por eso la respuesta correcta es mirar alrededor y chequear los puntos ciegos."
  },
  {
    "id": 123,
    "question": "Las fotografías muestran una secuencia cronológica de imágenes. ¿Cuáles son las 2 principales causas por las que surge esta situación de peligro?",
    "options": [
      "Por adelantar en un lugar prohibido.",
      "Por mala visibilidad.",
      "Porque el vehículo adelantado no anda lo suficientemente a la derecha.",
      "Porque el conductor del auto que llega a la carretera por la izquierda ingresa a ésta cuando no debió haberlo hecho."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [
      "q123_0.png"
    ],
    "explanation": "En esta secuencia, el peligro surge por dos causas principales: adelantar en un lugar prohibido (opción a) y que el conductor que ingresa a la carretera por la izquierda lo hace cuando no debió hacerlo (opción d). Adelantar donde está prohibido reduce el margen de seguridad y la visibilidad, mientras que incorporarse a la vía sin tener prioridad obliga a maniobras de emergencia. Ambos errores combinados crean la situación de riesgo.",
    "wrongExplanations": [
      "",
      "La mala visibilidad puede agravar una maniobra, pero en esta secuencia el origen del peligro es una conducta indebida, no la falta de visibilidad.",
      "Que el vehículo adelantado no circule lo suficientemente a la derecha no es la causa: el problema es adelantar en zona prohibida.",
      ""
    ],
    "page": 30,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El razonamiento aquí exige identificar quién comete una infracción que da origen al peligro, y la secuencia muestra dos errores que se combinan. El primero es adelantar en un lugar prohibido (opción a): el adelantamiento solo es legal donde la visibilidad y el espacio lo permiten, y hacerlo donde está vedado significa invadir el sentido contrario o una zona ciega, eliminando el margen para reaccionar. El segundo es que el conductor que llega a la carretera por la izquierda ingresa cuando no debía (opción d), es decir, sin tener la prioridad y sin ceder el paso a quien ya circulaba por la vía principal. Las otras opciones describen condiciones del entorno, como la mala visibilidad o que el vehículo adelantado no va suficientemente a la derecha, pero esas no son las causas que originan el peligro, sino circunstancias secundarias. El fundamento legal es que la prioridad y las zonas de adelantamiento existen precisamente para que dos vehículos no terminen ocupando el mismo espacio al mismo tiempo. Truco: busca siempre las dos maniobras que rompen una regla, no las condiciones del camino, porque el examen quiere que reconozcas la responsabilidad del conductor."
  },
  {
    "id": 124,
    "question": "Usted llega a una intersección regulada por semáforo que se encuentra en rojo y, al mismo tiempo, un Carabinero le indica que avance, ¿qué debe hacer usted?",
    "options": [
      "Detenerse, porque la luz roja se lo está indicando.",
      "Avanzar, porque las instrucciones de un Carabinero prevalecen sobre las señales del tránsito.",
      "Avanzar, sólo si detrás suyo no vienen otros vehículos.",
      "Avanzar, sólo si está seguro que la luz roja está próxima a cambiar."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe avanzar, porque las instrucciones de Carabineros prevalecen siempre sobre las señales del tránsito y los semáforos. Cuando un funcionario regula manualmente el tránsito, su indicación tiene la máxima jerarquía y los conductores están obligados a obedecerla por sobre la luz del semáforo. Esto evita confusiones cuando el agente está controlando un cruce.",
    "wrongExplanations": [
      "Detenerse por la luz roja sería un error, porque la indicación del Carabinero tiene mayor jerarquía que el semáforo.",
      "",
      "La presencia de otros vehículos detrás no condiciona la obediencia a Carabineros; debe avanzar igualmente cuando él lo indica.",
      "El cambio próximo de la luz es irrelevante: lo que manda es la instrucción del funcionario, no el estado del semáforo."
    ],
    "page": 32,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta evalúa el concepto de jerarquía de las señales del tránsito, un orden de prioridad que la Ley 18.290 establece para resolver contradicciones. En la cima de esa jerarquía están las indicaciones de Carabineros, luego las señales transitorias, después los semáforos, las señales fijas y finalmente las demarcaciones del pavimento. La razón de que el agente prevalezca sobre el semáforo es práctica: cuando un Carabinero regula manualmente un cruce, normalmente lo hace porque el semáforo está descompuesto, hay un accidente, una congestión o una situación especial que la máquina no puede gestionar, y él ve el panorama completo. Por eso, aunque la luz esté en rojo, si el funcionario te indica avanzar, debes obedecerle; detenerte iría contra su instrucción y generaría confusión o un choque por alcance con quien viene atrás esperando que la fila avance. Las demás opciones condicionan el avance a factores como que no vengan vehículos detrás o que la luz vaya a cambiar, pero ninguna de esas condiciones aplica porque la orden del agente es absoluta. Truco: recuerda que manda la persona antes que la máquina."
  },
  {
    "id": 125,
    "question": "¿En qué situación puede usted hacer uso de la bocina de su vehículo?",
    "options": [
      "Cuando cede a otro el derecho a vía.",
      "Cuando saluda a otros usuarios de la vía.",
      "Cuando trata de prevenir a otros acerca de un peligro.",
      "Cuando desea manifestar su disgusto."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La bocina solo debe usarse para prevenir a otros usuarios de la vía acerca de un peligro. La Ley de Tránsito restringe su uso a fines de seguridad, no como medio de comunicación social ni de expresión de emociones. Un uso indebido genera contaminación acústica y puede confundir o asustar a otros conductores y peatones.",
    "wrongExplanations": [
      "Ceder el derecho a vía se hace con maniobras y señalización adecuadas, no tocando la bocina.",
      "Saludar con la bocina es un uso indebido; la bocina no es un medio para comunicarse socialmente.",
      "",
      "Manifestar disgusto con la bocina está prohibido, ya que no corresponde a una finalidad de seguridad."
    ],
    "page": 32,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio detrás de esta norma es que la bocina es un dispositivo de seguridad, no de comunicación social. La Ley de Tránsito restringe su uso a la prevención de peligros porque un sonido fuerte e inesperado puede asustar, distraer o sobresaltar a otros conductores, peatones o ciclistas, generando reacciones bruscas y peligrosas. Por eso usarla para saludar a un conocido, para manifestar disgusto o incluso para ceder el paso queda fuera de lo permitido: en esos casos solo aporta ruido y contaminación acústica, que además afecta a quienes viven junto a las vías. El razonamiento para elegir la opción c es preguntarse cuál de las cuatro alternativas protege a alguien de un riesgo real, y solo prevenir a otros de un peligro cumple ese fin. El riesgo de abusar de la bocina es doble: legalmente constituye una infracción y prácticamente desensibiliza a la gente, que termina ignorándola justo cuando sí señala un peligro verdadero. Truco: la bocina avisa, no conversa ni reta."
  },
  {
    "id": 126,
    "question": "¿Cuándo puede usted hacer sonar la bocina de su auto?",
    "options": [
      "Para llamar la atención de un amigo.",
      "Para que le cedan el paso.",
      "Para apurar a un conductor que va más lento.",
      "Para prevenir la ocurrencia de un accidente."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La bocina puede usarse para prevenir la ocurrencia de un accidente, es decir, como advertencia de seguridad ante un peligro inminente. La normativa reserva su uso a este fin y no permite emplearla por motivos sociales o para presionar a otros conductores. Así se evita el abuso del dispositivo y el ruido innecesario.",
    "wrongExplanations": [
      "Llamar la atención de un amigo no es una finalidad de seguridad y constituye un uso indebido de la bocina.",
      "Usarla para que le cedan el paso no está permitido; eso se resuelve respetando las normas de prioridad.",
      "Apurar a otro conductor con la bocina es una conducta incorrecta y agresiva, no autorizada por la ley.",
      ""
    ],
    "page": 32,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta es muy similar a la anterior y refuerza el mismo principio desde otro ángulo: la bocina solo se justifica para prevenir la ocurrencia de un accidente, es decir, ante un peligro inminente y concreto. El razonamiento para descartar las otras opciones es directo: llamar la atención de un amigo es un uso social, pedir que te cedan el paso o apurar a un conductor más lento son usos para presionar o intimidar, y ninguno de ellos protege a nadie; al contrario, suelen aumentar la tensión y el riesgo en la vía. El fundamento es que el bocinazo debe reservarse para advertir, por ejemplo, a un peatón que se cruza sin mirar o a un vehículo que se sale de su pista, de modo que el otro tenga una fracción de segundo extra para reaccionar. Si se usa por cualquier motivo, pierde su valor de alerta porque la gente se acostumbra al ruido. Truco para fijarlo: ante cualquier opción de bocina, elige siempre la que evita un accidente y descarta todo lo que sea saludar, apurar o exigir paso."
  },
  {
    "id": 127,
    "question": "Usted se va acercando a un cruce regulado por semáforo. ¿Cuándo no debe usted ingresar al cruce aunque el semáforo esté en verde?",
    "options": [
      "Cuando hay peatones esperando para cruzar.",
      "Cuando pasado el cruce su pista no esté lo suficientemente despejada.",
      "Cuando usted cree que la luz está próxima a cambiar.",
      "Cuando usted va a virar a la derecha."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "No debe ingresar al cruce, aunque el semáforo esté en verde, cuando al otro lado su pista no esté lo suficientemente despejada. Si entra y queda detenido en medio de la intersección, bloqueará el paso del tránsito transversal y provocará un embotellamiento o un accidente. La regla es no avanzar si no se tiene asegurada la salida del cruce.",
    "wrongExplanations": [
      "Los peatones esperando para cruzar no le impiden avanzar con luz verde, salvo que estén cruzando; lo determinante aquí es tener despejada la salida.",
      "",
      "Que usted crea que la luz cambiará pronto no es razón para no avanzar si tiene la salida despejada y la luz está en verde.",
      "Virar a la derecha no le impide ingresar al cruce; puede hacerlo respetando a peatones y demás vehículos."
    ],
    "page": 32,
    "category": "Senales y semaforos",
    "deepExplanation": "Aquí el concepto central es no bloquear nunca una intersección, conocido también como no quedar atrapado en el cruce. El razonamiento es el siguiente: la luz verde te autoriza a pasar, pero esa autorización supone que podrás salir completamente del cruce; si la pista al otro lado está congestionada y no hay espacio para que tu vehículo termine de salir, entrar significa quedar detenido sobre la intersección. El riesgo real es grave, porque cuando el semáforo transversal cambie a verde, tu auto estará atravesado bloqueando el paso de quienes vienen perpendicularmente, provocando un embotellamiento general o una colisión. Las otras opciones se descartan porque tener peatones esperando, creer que la luz va a cambiar o ir a virar a la derecha no te impiden ingresar mientras tengas verde y la salida despejada. El fundamento es que la fluidez y la seguridad del cruce dependen de que cada vehículo libere el espacio que ocupa. Truco práctico: nunca entres a un cruce si no ves claramente dónde vas a salir, aunque el semáforo te diga que sí."
  },
  {
    "id": 128,
    "question": "Fuera de la ciudad, usted va por una carretera de doble calzada c on dos pistas por sentido. La velocidad máxima permitida es de 100 km/hr. Si usted va a 90 km/hr y no van vehículos delante suyo, ¿por cuál pista circula usted?",
    "options": [
      "Por la pista de la izquierda.",
      "Por la pista de la derecha.",
      "Por cualquiera de las dos pistas."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe circular por la pista de la derecha. La norma general establece que se transita por la pista derecha y que la izquierda se reserva para adelantar o para virar a la izquierda. Como no lleva vehículos delante y no está adelantando, corresponde mantenerse a la derecha.",
    "wrongExplanations": [
      "La pista izquierda solo se usa para adelantar o virar a la izquierda, no para circular normalmente.",
      "",
      "No es correcto usar cualquiera de las dos pistas: la regla obliga a mantenerse por la derecha cuando no se adelanta."
    ],
    "page": 32,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La regla que gobierna esta situación es el principio de circulación por la derecha, que en Chile es la norma general en toda vía de doble calzada. El fundamento es ordenar el flujo: la pista derecha es la de circulación normal y la izquierda queda reservada exclusivamente para dos maniobras, adelantar a un vehículo más lento o prepararse para virar a la izquierda. En tu caso vas a 90 km/h en un camino donde el máximo es 100, no llevas nadie adelante y no estás adelantando, por lo tanto no hay ninguna razón para ocupar la pista izquierda y debes mantenerte a la derecha. Es importante entender que ir bajo el límite de velocidad no te da derecho a quedarte en la izquierda; de hecho, ir lento por esa pista obstruye a quienes sí quieren adelantar y es una infracción frecuente. El riesgo de ocupar la izquierda sin motivo es generar maniobras peligrosas de otros que intentan rebasarte por la derecha, algo prohibido y muy riesgoso. Truco: la izquierda se pide prestada para adelantar y se devuelve de inmediato; tu casa es la pista derecha."
  },
  {
    "id": 129,
    "question": "En una carretera de doble calzada con dos pistas por sentido, ¿en cuáles 2 de las siguientes situaciones usted usaría la pista izquierda?",
    "options": [
      "Cuando va a virar a la izquierda.",
      "Al pasar a otro vehículo que va más lento.",
      "Al circular normalmente.",
      "Al conducir a una velocidad muy baja."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [],
    "explanation": "La pista izquierda se utiliza en dos situaciones: cuando va a virar a la izquierda (opción a) y cuando va a pasar o adelantar a otro vehículo que va más lento (opción b). En todos los demás casos debe circular por la pista derecha. La izquierda está reservada para estas maniobras puntuales, no para la circulación habitual.",
    "wrongExplanations": [
      "",
      "",
      "Al circular normalmente debe ir por la pista derecha, no por la izquierda.",
      "Conducir a velocidad muy baja obliga aún más a mantenerse por la derecha para no entorpecer el flujo; nunca justifica usar la pista izquierda."
    ],
    "page": 32,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta es el complemento de la anterior y te pide identificar las dos excepciones que justifican usar la pista izquierda. El fundamento es el mismo principio de circulación por la derecha: la izquierda no es para el uso habitual, sino para maniobras puntuales y definidas. La primera es virar a la izquierda (opción a), pues para girar en esa dirección necesitas ubicarte previamente en la pista que está del lado del giro, anticipándote y señalizando. La segunda es adelantar o pasar a un vehículo que va más lento (opción b), ya que el adelantamiento se hace por la izquierda y, una vez completado, debes regresar a la derecha. Las opciones de circular normalmente o conducir a velocidad muy baja se descartan porque en ambos casos corresponde la pista derecha; de hecho, ir lento por la izquierda es justamente lo contrario de lo que indica la ley. El riesgo de usar mal la pista izquierda es entorpecer el tránsito y forzar adelantamientos peligrosos por la derecha. Truco: solo dos verbos te llevan a la izquierda, virar y adelantar; cualquier otra cosa es derecha."
  },
  {
    "id": 130,
    "question": "¿En qué situación retrocede usted con su vehículo en un cruce?",
    "options": [
      "Si no hay nadie detrás suyo.",
      "En ningún momento.",
      "Sólo si ha quedado detenido sobre el paso de peatones.",
      "Sólo si recibe indicación expresa de un Carabinero."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Solo debe retroceder en un cruce si recibe la indicación expresa de un Carabinero. Retroceder en una intersección es una maniobra peligrosa porque sorprende a quienes vienen detrás y a los peatones; por eso únicamente se permite bajo la regulación directa de un funcionario que controla el tránsito.",
    "wrongExplanations": [
      "Que no haya nadie detrás no autoriza a retroceder en un cruce; sigue siendo una maniobra prohibida salvo orden de Carabineros.",
      "Decir que en ningún momento es demasiado absoluto: sí se permite cuando un Carabinero lo indica expresamente.",
      "Haber quedado sobre el paso de peatones no lo habilita por sí solo a retroceder; debe esperar la indicación de la autoridad.",
      ""
    ],
    "page": 32,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento de esta norma es que retroceder en un cruce es una de las maniobras más peligrosas e impredecibles que existen. Una intersección es un punto de convergencia de vehículos en varias direcciones y de peatones que cruzan, todos los cuales asumen que los autos avanzan hacia adelante; un vehículo que retrocede sorprende a quien viene detrás, que no espera ese movimiento, y puede atropellar a un peatón ubicado en el ángulo muerto trasero. Por eso la regla general es que jamás se retrocede en un cruce. La única excepción es que un Carabinero, que tiene control directo y visión completa de la situación, te dé la indicación expresa de hacerlo, normalmente para desbloquear una congestión o despejar tras un incidente. Las otras opciones se descartan: que no haya nadie detrás no garantiza nada porque puede aparecer alguien o un peatón estar en tu punto ciego, y haber quedado sobre el paso de peatones no se soluciona retrocediendo a ciegas. Truco: en un cruce solo retrocedes si quien manda en la vía, un Carabinero, te lo ordena con la voz o la mano."
  },
  {
    "id": 131,
    "question": "Usted se aproxima a un cruce de calles no señalizado. Por la otra calle también se aproxima un vehículo que pretende pasar el cruce. ¿Quién tiene la prioridad para pasar?",
    "options": [
      "El vehículo más grande.",
      "El vehículo que vaya a mayor velocidad.",
      "El otro vehículo, siempre que él se venga acercando al cruce por el lado derecho suyo.",
      "El otro vehículo, siempre que él se venga acercando al cruce por el lado izquierdo suyo."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Tiene prioridad el otro vehículo siempre que se aproxime al cruce por su lado derecho. En cruces no señalizados rige la regla de prioridad de la derecha: quien tiene un vehículo aproximándose por su derecha debe cederle el paso. Así se resuelve de forma clara quién pasa primero sin necesidad de señales.",
    "wrongExplanations": [
      "El tamaño del vehículo no otorga prioridad alguna; la regla se basa en la posición relativa, no en el porte.",
      "La velocidad no concede prioridad; al contrario, llegar más rápido no da derecho a pasar primero.",
      "",
      "Si el otro vehículo viene por su izquierda, la prioridad es suya, no de él; la prioridad la tiene quien viene por la derecha."
    ],
    "page": 32,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Esta pregunta evalúa la regla de prioridad de la derecha, el mecanismo que la Ley 18.290 usa para resolver quién pasa primero en cruces sin semáforo ni señalización. El principio es simple y universal: cuando dos vehículos llegan a la vez a una intersección no regulada, tiene preferencia el que se aproxima por la derecha del otro. En este caso, como el otro vehículo viene acercándose por tu lado derecho, es él quien tiene la prioridad y tú debes cederle el paso. La razón de que la norma elija la derecha y no otro criterio es que necesita ser objetiva y predecible; por eso se descartan opciones como el vehículo más grande o el que va más rápido, que dependerían de apreciaciones subjetivas y de quien decida imponerse, lo cual es justamente lo que causa accidentes. El riesgo de ignorar esta regla es una colisión en ángulo recto, una de las más graves porque impacta el costado del otro auto donde hay menos protección. Truco para recordarlo: mira tu derecha; si viene alguien por ahí, él pasa primero."
  },
  {
    "id": 132,
    "question": "Cuando dos vehículos van a cruzarse en una intersección en la que no hay señalización alguna, ¿quién debe ceder el paso?",
    "options": [
      "El vehículo más pequeño.",
      "El vehículo que va por la calle de pistas más angostas.",
      "El que se acerca al cruce por la derecha del otro.",
      "El que se acerca al cruce por la izquierda del otro."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe ceder el paso el que se acerca al cruce por la izquierda del otro. Esto es la otra cara de la regla de prioridad de la derecha: como el vehículo que viene por la derecha tiene preferencia, quien lo tiene a su izquierda es el que debe detenerse y cederle el paso. Es la norma que ordena los cruces sin señalización.",
    "wrongExplanations": [
      "El tamaño del vehículo no determina quién cede; la regla depende de la posición relativa en el cruce.",
      "El ancho de las pistas no influye en la prioridad en un cruce sin señalización.",
      "El que se acerca por la derecha tiene la prioridad, por lo que no es él quien cede el paso.",
      ""
    ],
    "page": 32,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta es la misma regla de prioridad de la derecha, pero formulada al revés: en lugar de preguntar quién tiene preferencia, pregunta quién debe ceder. El razonamiento es directo: si el vehículo que viene por la derecha tiene la prioridad, entonces el que cede es quien lo tiene a su izquierda, es decir, quien se acerca al cruce por la izquierda del otro. Conviene leer con cuidado, porque el examen suele invertir la pregunta para confirmar que entendiste el concepto y no memorizaste solo una palabra. Las opciones del vehículo más pequeño o del que va por pistas más angostas se descartan porque la ley no usa el tamaño ni el ancho de la calle como criterio en cruces no señalizados, sino exclusivamente la posición relativa. El fundamento es el mismo: dar una regla clara y objetiva que evite la colisión perpendicular cuando no hay señales que ordenen el paso. Truco: la prioridad es del que viene por tu derecha, así que el que cede siempre es el de la izquierda; basta con girar mentalmente la regla."
  },
  {
    "id": 133,
    "question": "¿Es seguro permitir que los niños viajen en un vehículo de 3 o 5 puertas en el espacio que queda detrás de los asientos traseros?",
    "options": [
      "No, en ninguna circunstancia.",
      "Sí, siempre que usted pueda ver sin problemas hacia atrás.",
      "Sí, si son menores de 10 años.",
      "No, a menos que los demás asientos estén ocupados."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "No es seguro en ninguna circunstancia llevar niños en el espacio detrás de los asientos traseros de un vehículo de 3 o 5 puertas. Esa zona no cuenta con cinturones de seguridad ni protección estructural, por lo que ante un choque o frenada brusca el niño saldría despedido. Todo ocupante debe ir en un asiento con su sistema de retención adecuado.",
    "wrongExplanations": [
      "",
      "Poder ver hacia atrás no aporta seguridad al niño; el problema es la falta total de protección en esa zona.",
      "La edad no cambia el riesgo: ningún niño, sin importar si es menor de 10 años, debe ir en ese espacio.",
      "La ocupación de los demás asientos no justifica usar el maletero como lugar de transporte de personas."
    ],
    "page": 34,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta prohibición absoluta es que el espacio detrás de los asientos traseros, el maletero o portaequipaje de un hatchback de 3 o 5 puertas, no es un lugar diseñado para transportar personas. Esa zona carece de cinturones de seguridad, de respaldo y de estructura que proteja en caso de impacto, por lo que un niño ubicado ahí queda completamente suelto. El riesgo real es doble: ante una frenada brusca o un choque, el niño es proyectado violentamente dentro del habitáculo o incluso por la luneta trasera, y además en una colisión por alcance esa zona es la que recibe el impacto directo. Por eso la respuesta es no, en ninguna circunstancia, y se descartan las opciones que intentan condicionarlo a la visibilidad, a la edad o a que los demás asientos estén ocupados, porque ninguna de esas circunstancias elimina la ausencia de protección. La regla de oro es que todo ocupante, sin excepción, debe viajar en un asiento con su sistema de retención adecuado. Truco: el maletero es para las cosas, nunca para las personas."
  },
  {
    "id": 134,
    "question": "¿Cuáles son las 2 formas más seguras para transportar una guagua en su automóvil?",
    "options": [
      "En brazos de un adulto que va con cinturón de seguridad.",
      "En brazos de un adulto de modo que el cinturón les sujete a ambos.",
      "En una silla de seguridad mirando hacia adelante.",
      "En el asiento delantero, en una silla de seguridad mirando hacia atrás, pero sólo si el vehículo no posee doble airbag.",
      "En el asiento trasero, en silla de seguridad mirando hacia atrás."
    ],
    "correct": [
      3,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Las dos formas más seguras de transportar a una guagua son: en una silla de seguridad mirando hacia atrás en el asiento delantero solo si el vehículo no posee airbag (opción d), y en el asiento trasero en una silla de seguridad mirando hacia atrás (opción e). La posición mirando hacia atrás protege la cabeza y el cuello del bebé ante un impacto frontal. Si hay airbag delantero activo, este puede causar lesiones graves al desplegarse sobre la silla, por eso solo se permite adelante cuando está desactivado o no existe.",
    "wrongExplanations": [
      "Llevar a la guagua en brazos es muy peligroso: en una colisión el adulto no puede sujetarla y el bebé sale despedido.",
      "Sujetar al bebé con el mismo cinturón del adulto es inseguro, porque el cuerpo del adulto puede aplastarlo en un impacto.",
      "Una silla mirando hacia adelante no es adecuada para una guagua; a esa edad debe ir mirando hacia atrás para proteger cuello y cabeza.",
      "",
      ""
    ],
    "page": 34,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La clave de esta pregunta es entender por qué una guagua debe viajar mirando hacia atrás. En un bebé, la cabeza representa una proporción muy grande del cuerpo y el cuello todavía es muy débil; en un impacto frontal, que es el más frecuente y violento, una silla orientada hacia adelante haría que la cabeza saliera disparada hacia el frente, sobreexigiendo el cuello con riesgo de lesión medular. En cambio, la silla mirando hacia atrás reparte la fuerza del choque por toda la espalda y la cabeza del bebé, protegiendo la columna cervical. Por eso las dos formas correctas son en el asiento trasero con silla mirando hacia atrás (opción e), que es la posición ideal y más protegida, y en el asiento delantero con silla mirando hacia atrás solo si el vehículo no tiene airbag delantero activo (opción d). La razón de esta última condición es crítica: un airbag se despliega con una fuerza explosiva y, si golpea una silla orientada hacia atrás, puede causar lesiones graves o fatales al bebé. Se descartan llevarlo en brazos, porque en un choque ningún adulto puede retener el peso multiplicado del bebé, y la silla mirando hacia adelante, inadecuada a esa edad. Truco: guagua siempre de espaldas al camino, y jamás frente a un airbag activo."
  },
  {
    "id": 135,
    "question": "¿Cuál es la forma más segura para llevar a un niño de 3 ó 4 años en su vehículo?",
    "options": [
      "En la falda de un adulto compartiendo un mismo cinturón de seguridad.",
      "En la falda de un adulto que va con su cinturón de seguridad.",
      "En cualquier asiento, siempre que lleve puesto el cinturón de seguridad para adultos.",
      "En el asiento trasero, en una silla de seguridad."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La forma más segura de llevar a un niño de 3 o 4 años es en el asiento trasero, en una silla de seguridad apropiada para su edad y peso. La silla distribuye las fuerzas de un impacto y mantiene al niño correctamente sujeto, algo que el cinturón de adulto no logra en cuerpos pequeños. El asiento trasero, además, es el lugar más protegido del vehículo.",
    "wrongExplanations": [
      "Llevarlo en la falda compartiendo cinturón es muy peligroso: el adulto puede aplastar al niño en una colisión.",
      "Llevarlo en la falda de un adulto, aunque este tenga su cinturón, deja al niño sin sujeción propia y expuesto a salir despedido.",
      "El cinturón de adulto no se ajusta al cuerpo de un niño pequeño y puede lesionarlo; necesita su silla de seguridad.",
      ""
    ],
    "page": 34,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de esta respuesta es que el cuerpo de un niño de 3 o 4 años todavía no calza con los sistemas de seguridad pensados para adultos. El cinturón de adulto está diseñado para apoyarse en la cadera y el hombro de una persona grande; en un niño pequeño queda a la altura del abdomen y el cuello, de modo que en un choque, en lugar de protegerlo, puede causarle lesiones internas o estrangulamiento. Por eso la forma más segura es una silla de seguridad apropiada para su edad y peso, que eleva al niño, posiciona correctamente el cinturón y distribuye las fuerzas del impacto en las zonas resistentes del cuerpo. Además, esa silla debe ir en el asiento trasero, que es estadísticamente el lugar más protegido del vehículo y el más alejado de los airbags delanteros. Se descartan las opciones de llevarlo en la falda de un adulto, compartiendo o no el cinturón, porque en un impacto el adulto no puede sujetar al niño y este se convierte en un proyectil o queda aplastado. Truco: hasta que el niño no calce bien el cinturón de adulto, su lugar es la sillita atrás."
  },
  {
    "id": 136,
    "question": "La forma más segura de viajar en un automóvil para un niño menor de 2 años es:",
    "options": [
      "En brazos de un adulto.",
      "Solo en el asiento delantero y con cinturón de seguridad.",
      "Solo en el asiento trasero y con cinturón de seguridad.",
      "En un asiento de seguridad mirando hacia atrás."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Un niño menor de 2 años debe viajar en un asiento de seguridad mirando hacia atrás. A esa edad la cabeza es proporcionalmente grande y el cuello aún frágil, por lo que la posición mirando hacia atrás reparte la fuerza del impacto y protege la columna cervical. Es la configuración que reduce drásticamente el riesgo de lesiones graves.",
    "wrongExplanations": [
      "En brazos de un adulto el niño no tiene sujeción y sería despedido en un choque; es la opción más peligrosa.",
      "El cinturón de adulto no protege a un menor de 2 años y la zona delantera, con airbag, es riesgosa para él.",
      "Aunque el asiento trasero es más seguro, el cinturón de adulto no sirve para un menor de 2 años: necesita silla mirando hacia atrás.",
      ""
    ],
    "page": 34,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Esta pregunta refuerza el mismo principio biomecánico aplicado a los menores de 2 años: deben viajar en un asiento de seguridad orientado mirando hacia atrás. La razón es anatómica y de desarrollo: bajo los 2 años la cabeza es proporcionalmente muy pesada respecto al resto del cuerpo y los ligamentos del cuello son frágiles, por lo que en un impacto frontal una posición hacia adelante provocaría un latigazo que el cuello no resiste, con alto riesgo de lesión en la médula. La orientación hacia atrás hace que el respaldo de la silla reciba y reparta toda la fuerza del choque, abrazando la cabeza, el cuello y la espalda como un solo bloque. Se descartan llevarlo en brazos de un adulto, que en una colisión es incapaz de retener al niño y puede incluso aplastarlo con su propio peso, y usar solo el cinturón de seguridad, que no está hecho para un cuerpo tan pequeño. El asiento trasero es además el más seguro. Truco: menores de 2 años siempre de espaldas al parabrisas; es la regla que más vidas salva en esta edad."
  },
  {
    "id": 137,
    "question": "En un vehículo de 3 o 5 puertas, ¿en qué condiciones sería seguro transportar niños pequeños en el espacio que queda detrás de los asientos traseros?",
    "options": [
      "Al efectuar un viaje corto dentro de la ciudad.",
      "Al circular por calles o caminos de poco tránsito.",
      "Nunca.",
      "Siempre es seguro."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Nunca es seguro transportar niños en el espacio detrás de los asientos traseros de un vehículo de 3 o 5 puertas. Esa zona carece de cinturones y de protección ante impactos, por lo que el riesgo existe sin importar la distancia o el tipo de camino. Los niños siempre deben ir en un asiento con su sistema de retención adecuado.",
    "wrongExplanations": [
      "Un viaje corto no reduce el peligro: un accidente puede ocurrir en cualquier trayecto, por breve que sea.",
      "El bajo tránsito no elimina el riesgo de una frenada o colisión que despida al niño desde esa zona sin protección.",
      "",
      "No es cierto que siempre sea seguro; esa zona nunca ofrece protección para transportar personas."
    ],
    "page": 34,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta vuelve sobre el espacio detrás de los asientos traseros de un hatchback de 3 o 5 puertas, pero ahora intentando que aceptes excepciones según la distancia o el tipo de camino, y la respuesta correcta sigue siendo nunca. El fundamento es que el riesgo no depende de cuánto manejes ni de por dónde lo hagas, sino de una carencia física permanente: esa zona no tiene cinturones, ni respaldo, ni estructura de protección, y eso no cambia en un viaje corto ni en una calle de poco tránsito. De hecho, la mayoría de los accidentes graves ocurren cerca del hogar y a baja velocidad, precisamente en esos trayectos que parecen seguros, así que la lógica de bajar la guardia por ser un viaje breve es justamente la que cobra víctimas. Un niño suelto ahí sería proyectado en cualquier frenazo o impacto, y en una colisión por alcance esa es la primera zona que se deforma. Por eso se descartan todas las opciones que condicionan la seguridad y solo es correcta nunca. Truco: ninguna excusa de distancia o tránsito convierte el maletero en un asiento; el niño siempre va en su sistema de retención."
  },
  {
    "id": 138,
    "question": "Usted está en una calle de un solo sentido de tránsito y desea virar a la izquierda. ¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s)?",
    "options": [
      "Usted está bien situado para virar a la izquierda.",
      "Si después de virar usted volverá a virar nuevamente a la izquierda en el siguiente cruce, lo mejor es que se mantenga en la pista izquierda de la calle hacia la cual está virando.",
      "Usted nunca puede saber si la calle hacia la cual vira tiene un solo sentido de tránsito o dos. Por eso, siempre debe tomar la pista derecha de la calle hacia la cual vira.",
      "No es necesario que usted señalice que va a virar."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [
      "q138_0.png"
    ],
    "explanation": "Las afirmaciones correctas son la a y la b. En una calle de un solo sentido usted está bien situado para virar a la izquierda desde la pista izquierda (opción a), ya que en sentido único se permite ubicarse en ese costado para girar. Además, si tras virar volverá a girar a la izquierda en el siguiente cruce, conviene mantenerse en la pista izquierda de la calle hacia la cual está ingresando (opción b), anticipando la próxima maniobra con seguridad.",
    "wrongExplanations": [
      "",
      "",
      "No es efectivo que siempre deba tomar la pista derecha al virar; en este caso puede mantenerse a la izquierda para encadenar el próximo viraje.",
      "Siempre es necesario señalizar la intención de virar; omitir la señalización es una falta y un peligro para los demás."
    ],
    "page": 35,
    "category": "Conduccion segura",
    "deepExplanation": "Para resolver esta pregunta hay que recordar cómo funcionan las pistas en una calle de un solo sentido. Cuando la calle es de sentido único, no existe tránsito que venga en contra, por lo que el conductor que va a virar a la izquierda puede y debe ubicarse en la pista izquierda, quedando bien situado para el giro (opción a, correcta). Esto difiere de una calle de doble sentido, donde la izquierda está ocupada por el flujo contrario. La opción b también es correcta porque anticipa la siguiente maniobra: si después de virar vas a girar nuevamente a la izquierda en el cruce siguiente, lo más seguro y fluido es ingresar a la pista izquierda de la calle a la que entras, evitando un cambio de pista de último momento que es riesgoso. Se descarta la opción c porque el conductor sí puede informarse, mediante señales y demarcaciones, de si la calle es de uno o dos sentidos, así que no es cierto que siempre deba tomar la derecha. Y se descarta la d porque señalizar el viraje es siempre obligatorio: avisar tus intenciones permite que los demás anticipen tu movimiento. Truco: en sentido único, la izquierda es tuya para girar a la izquierda, y la señal nunca es opcional."
  },
  {
    "id": 139,
    "question": "¿En cuál o cuáles de las siguientes situaciones puede usted virar a la izquierda sin que siempre deba detenerse antes?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multi": true,
    "images": [
      "q139_0.png"
    ],
    "explanation": "Las situaciones a, b y d permiten virar a la izquierda sin que necesariamente deba detenerse antes, porque en ellas usted tiene la prioridad o la vía está despejada para completar el giro de forma continua. En esos casos basta con señalizar, ubicarse correctamente y ceder el paso solo si fuera preciso, pero no se exige una detención obligatoria. La situación que sí obliga a detenerse corresponde a aquella donde existe tránsito en sentido contrario o una señal que impone la parada previa.",
    "wrongExplanations": [
      "",
      "",
      "En esta situación usted debe detenerse antes de virar, porque hay tránsito con prioridad o una indicación que obliga a parar para ceder el paso.",
      ""
    ],
    "page": 35,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta se apoya en imágenes que representan distintos escenarios de viraje a la izquierda, y lo que evalúa es en cuáles tienes prioridad o la vía despejada para completar el giro de forma continua, sin una detención obligatoria. En las situaciones a, b y d el giro puede hacerse de manera fluida porque o bien tienes el derecho de paso, o no hay tránsito en sentido contrario ni señal que te obligue a parar; en esos casos basta con señalizar con anticipación, posicionarte correctamente en la pista y completar el viraje, cediendo el paso solo si por seguridad fuera necesario en ese instante, pero sin estar obligado a una detención total. La situación restante, en cambio, es la que sí impone parar siempre, ya sea porque hay vehículos circulando en sentido contrario a los que debes ceder el paso o porque existe una señal, como un Pare, que ordena la detención previa antes de girar. El fundamento es distinguir entre ceder el paso, que a veces se logra solo aminorando, y detenerse por completo, que es una obligación absoluta. Truco: detenerse siempre solo aplica cuando algo o alguien con prioridad te obliga; si la vía está libre, basta con señalizar y virar con cuidado."
  },
  {
    "id": 140,
    "question": "¿Frente a cuál o cuáles de las siguientes señales e indicaciones del semáforo debe usted detenerse siempre?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [
      "q140_0.png"
    ],
    "explanation": "Frente a las indicaciones b y d usted debe detenerse siempre. Estas corresponden a la luz roja del semáforo y a la señal o indicación que impone detención obligatoria, ante las cuales el conductor está obligado a parar por completo sin excepción. Las otras indicaciones permiten avanzar o solo exigen precaución, pero no una detención total.",
    "wrongExplanations": [
      "Esta indicación no obliga a una detención total; permite el paso o solo requiere precaución al avanzar.",
      "",
      "Esta indicación no exige detenerse siempre; habilita la circulación o el avance con cuidado.",
      ""
    ],
    "page": 36,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta, basada en imágenes de señales e indicaciones del semáforo, busca que distingas entre las que obligan a una detención total y absoluta y las que solo exigen precaución o permiten avanzar. Las indicaciones b y d corresponden a una detención obligatoria sin excepción: típicamente la luz roja del semáforo y la señal Pare, ante las cuales el conductor debe detener por completo el vehículo, no basta con disminuir la velocidad. El fundamento es que estas son órdenes imperativas pensadas para los puntos de mayor conflicto, donde un cruce sin detención total provocaría una colisión con el tránsito transversal o con peatones que cruzan confiados. Las otras indicaciones se descartan porque corresponden a situaciones como la luz amarilla, que advierte el cambio inminente, o señales de Ceda el paso o precaución, en las que se puede continuar reduciendo la marcha y cediendo cuando corresponde, pero no se exige parar siempre. Es importante no confundir ceder el paso, que admite seguir si la vía está libre, con detenerse, que es una parada total obligatoria. Truco: rojo y Pare son detención total sin discusión; amarillo y ceda admiten avanzar con cuidado."
  },
  {
    "id": 141,
    "question": "Usted va por una calle de doble sentido de tránsito. Para virar a la izquierda, ¿dónde debería ubicarse?",
    "options": [
      "Lo más a la derecha posible.",
      "Justo a la izquierda de la línea de centro de calzada.",
      "Justo a la derecha de la línea de centro de calzada."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Para virar a la izquierda en una calle de doble sentido, debe ubicarse justo a la derecha de la línea de centro de la calzada. Así no invade la pista del sentido contrario y queda en posición para tomar la curva pegado al eje, dando la señal y respetando la preferencia de quienes vienen de frente.",
    "wrongExplanations": [
      "Ubicarse lo más a la derecha posible corresponde al viraje hacia la derecha, no a la izquierda.",
      "Ubicarse a la izquierda de la línea de centro significa invadir la pista del sentido contrario, lo que es peligroso y está prohibido.",
      ""
    ],
    "page": 36,
    "category": "Conduccion segura",
    "deepExplanation": "El principio detrás de esto es que el eje central de la calzada separa físicamente los dos sentidos de circulación, y nadie puede invadir la pista contraria mientras espera para virar. Por eso, en una calle de doble sentido, para doblar a la izquierda usted debe acercarse al eje pero quedando justo a la derecha de la línea de centro, nunca a su izquierda, porque cruzarla antes de tiempo lo deja de frente al tránsito que viene en contra. Paso a paso: enciende su señalizador izquierdo con anticipación, se desplaza suavemente hacia el eje manteniéndose en su pista, espera a que pase el flujo opuesto y recién entonces completa el giro. Ubicarse a la izquierda del eje (alternativa b) significa estar ya en la pista contraria, lo que provoca choques frontales y bloquea a quienes vienen de frente. Un truco para recordarlo: la línea de centro es como una pared imaginaria, usted siempre se 'apoya' en ella por su lado derecho hasta el momento exacto de cruzarla. Así mantiene la preferencia de paso a su favor y solo entra a la zona opuesta cuando está realmente despejada."
  },
  {
    "id": 142,
    "question": "Usted va detrás de un camión articulado que va a doblar a la derecha hacia una vía angosta. ¿Qué debe hacer usted?",
    "options": [
      "Desplazarse rápidamente hacia la pista adyacente y sobrepasarlo.",
      "Tocar la bocina para advertir su presencia.",
      "Sobrepasarlo por la derecha mientras él se desplace hacia la izquierda.",
      "Mantenerse detrás de él hasta que finalice su maniobra."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q142_0.png"
    ],
    "explanation": "Debe mantenerse detrás del camión articulado hasta que termine su maniobra. Los vehículos largos necesitan abrirse hacia la izquierda para poder doblar a la derecha en una vía angosta, por lo que adelantar o ubicarse a su costado lo deja en el ángulo ciego y en riesgo de ser atrapado por el barrido de la parte trasera.",
    "wrongExplanations": [
      "Sobrepasarlo rápidamente es muy peligroso, porque el camión se abrirá a la izquierda y puede arrollarlo durante el giro.",
      "Tocar la bocina no resuelve el riesgo; el camión igual ocupará el espacio que necesita para doblar.",
      "Sobrepasarlo por la derecha mientras él se abre lo deja justo en la zona hacia donde girará la parte trasera del camión, exponiéndolo a un choque.",
      ""
    ],
    "page": 36,
    "category": "Conduccion segura",
    "deepExplanation": "La clave está en entender cómo gira un vehículo articulado o de gran longitud: por geometría, sus ruedas traseras describen una curva mucho más cerrada que las delanteras, fenómeno llamado barrido o radio de giro trasero. Para doblar a la derecha hacia una vía angosta, el camión primero se abre hacia la izquierda con el frente, dando la falsa impresión de que cambiará de pista o seguirá derecho. Si usted interpreta mal esa apertura y avanza por la derecha para sobrepasarlo, queda exactamente en el espacio donde la cola del camión va a barrer, además de meterse en su ángulo ciego, donde el conductor no puede verlo. El resultado típico es quedar atrapado y aplastado contra el borde o la vereda. Por eso lo único seguro es mantenerse detrás hasta que la maniobra termine por completo. Truco para recordarlo: cuando un camión se abre hacia un lado, casi siempre es para doblar hacia el lado contrario, así que nunca llene el hueco que deja."
  },
  {
    "id": 143,
    "question": "¿Cómo señaliza usted con el brazo cuando va a virar hacia la derecha?",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q143_0.png"
    ],
    "explanation": "Para señalizar con el brazo un viraje a la derecha, se extiende el brazo izquierdo por la ventanilla con el antebrazo levantado en ángulo recto hacia arriba (forma de L), que es la imagen B. Este gesto sustituye visualmente al intermitente derecho cuando no se dispone de luces.",
    "wrongExplanations": [
      "Esa posición del brazo corresponde a otra maniobra (detención o viraje a la izquierda), no al viraje a la derecha.",
      "",
      "Esa posición del brazo no representa la señal reglamentaria de viraje a la derecha."
    ],
    "page": 36,
    "category": "Conduccion segura",
    "deepExplanation": "Las señales de brazo existen como respaldo legal para cuando las luces intermitentes fallan o no existen, y están normadas para que cualquier conductor las interprete igual. Como en Chile el conductor va al lado izquierdo, todas las señales se hacen con el brazo izquierdo sacado por la ventanilla, porque es el único visible para el resto. Para indicar viraje a la derecha se levanta el antebrazo en ángulo recto hacia arriba formando una L, que corresponde a la imagen B; esa forma 'apunta' simbólicamente hacia el lado derecho. El razonamiento es simple: con un solo brazo disponible, se necesita un gesto distinto e inequívoco para cada maniobra. Truco para no confundirse: brazo arriba en L significa 'subo o me voy a la derecha', brazo totalmente horizontal significa giro a la izquierda y brazo hacia abajo significa que voy a frenar o detenerme. Usar mal la señal puede inducir a otro conductor a un movimiento equivocado y causar un choque."
  },
  {
    "id": 144,
    "question": "¿Cuál señalización con el brazo del conductor de un vehículo que va adelante le indica que va a virar a la izquierda?",
    "options": [
      "A",
      "B",
      "C"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q144_0.png"
    ],
    "explanation": "El conductor que va a virar a la izquierda extiende el brazo izquierdo en forma totalmente horizontal hacia afuera, que corresponde a la imagen C. Esa señal indica claramente a los demás que se desplazará hacia la izquierda.",
    "wrongExplanations": [
      "Esa señal no corresponde al viraje a la izquierda; representa otra maniobra como detención o viraje a la derecha.",
      "Esa posición del brazo indica otra maniobra distinta al viraje a la izquierda.",
      ""
    ],
    "page": 38,
    "category": "Conduccion segura",
    "deepExplanation": "Aquí usted está en el rol del que observa al vehículo de adelante e interpreta su intención. La norma establece que el viraje a la izquierda se señaliza extendiendo el brazo izquierdo completamente horizontal hacia afuera, lo que corresponde a la imagen C. El fundamento es lógico: el brazo apunta en la misma dirección hacia la que el vehículo se va a desplazar, hacia la izquierda, por lo que es la señal más natural e intuitiva. Saber leer estas señales en otros es tan importante como hacerlas usted, porque le permite anticiparse: si el de adelante saca el brazo horizontal, usted ya sabe que frenará y se moverá al eje, y no debe intentar adelantarlo por la izquierda en ese momento. Truco: brazo recto y horizontal es como una flecha que apunta a la izquierda; en cambio el antebrazo doblado hacia arriba en L es derecha. Confundirlas puede llevarlo a adelantar justo cuando el otro va a cruzarse delante suyo."
  },
  {
    "id": 145,
    "question": "Usted ha alcanzado a un auto al que desea adelantar. ¿Cuáles son las 3 cosas más difíciles de juzgar?",
    "options": [
      "La velocidad del auto al que desea adelantar.",
      "Si es suficientemente ancho el espacio a la izquierda del vehículo que va adelante.",
      "La distancia al vehículo que v iene en sentido contrario.",
      "La longitud de la distancia de adelantamiento.",
      "El punto de encuentro con el vehículo que viene en contra."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Las tres cosas más difíciles de juzgar al adelantar son la distancia al vehículo que viene en sentido contrario (c), la longitud total de la distancia de adelantamiento (d) y el punto de encuentro con el vehículo que viene en contra (e). Son las variables que dependen de velocidades combinadas y de la apreciación del espacio disponible, por eso son las que más fácilmente se calculan mal y provocan choques frontales.",
    "wrongExplanations": [
      "La velocidad del auto que va adelante es relativamente fácil de estimar, ya que usted lo viene siguiendo y compara con su propia marcha.",
      "El ancho del espacio a la izquierda del vehículo se aprecia con la vista de manera directa y no es de las variables más difíciles de juzgar.",
      "",
      "",
      ""
    ],
    "page": 38,
    "category": "Conduccion segura",
    "deepExplanation": "El adelantamiento es una de las maniobras más peligrosas porque obliga a invadir temporalmente la pista del sentido contrario, y su seguridad depende de variables que la mente humana estima muy mal. Las tres más difíciles de juzgar son la distancia real al vehículo que viene de frente (c), la longitud completa del tramo que usted necesitará para completar el adelantamiento (d) y el punto exacto donde se encontraría con ese vehículo que viene en contra (e). El motivo es que todas ellas dependen de velocidades combinadas: usted y el que viene de frente se acercan sumando ambas velocidades, de modo que a 100 más 100 se aproximan a casi 56 metros por segundo, y el cerebro no calcula bien acercamientos tan rápidos a la distancia. En cambio, la velocidad del auto que va adelante (a) y el ancho disponible a su izquierda (b) son apreciaciones más estáticas y fáciles. Truco práctico: si tiene cualquier duda sobre el punto de encuentro, no adelante, porque el error en estas tres variables se paga con un choque frontal, el más letal de todos."
  },
  {
    "id": 146,
    "question": "Usted va conduciendo su vehículo a 90 km/h que es la velocidad máxima permitida en esa vía. ¿Qué hace usted si a pesar de todo un vehículo desea adelantarlo?",
    "options": [
      "Conduce lo más a la derecha posible.",
      "Se desplaza hacia la berma y circula por ella.",
      "Enciende sus luces de advertencia de peligro.",
      "No acelera."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [
      "q146_0.png"
    ],
    "explanation": "Aunque usted ya circule a la velocidad máxima, debe conducir lo más a la derecha posible (a) y no acelerar (d) para facilitar y no obstaculizar el adelantamiento del otro vehículo. La regla obliga a cooperar con quien adelanta dándole espacio y manteniendo una velocidad estable, nunca compitiendo con él.",
    "wrongExplanations": [
      "",
      "Desplazarse a la berma y circular por ella está prohibido y es peligroso; la berma no es una pista de circulación.",
      "Encender las luces de advertencia de peligro no corresponde en esta situación, ya que se usan para emergencias o detenciones.",
      ""
    ],
    "page": 38,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento es que el límite de velocidad es un máximo legal, no una autorización para 'tapar' o competir con quien quiere pasar; la ley impone al conductor adelantado el deber de cooperar para que la maniobra del otro sea lo más breve y segura posible. Por eso, aunque usted ya vaya a 90 km/h que es el máximo de esa vía, debe correrse lo más a la derecha posible (a) para ampliarle el espacio y, sobre todo, no acelerar (d) para no alargar el tiempo que el otro permanece en la pista contraria. Si usted acelerara, el que adelanta quedaría 'pegado' a su costado, sin poder completar el paso ni volver a su pista, exactamente en el punto donde podría aparecer tráfico de frente. Estacionar mentalmente la idea de que 'ya voy al máximo, que se aguante' es justamente lo que provoca accidentes. Truco: cuando alguien lo adelanta, suelte un poco el acelerador y péguese a la derecha; le toma dos segundos y puede salvar una vida. Encender luces de emergencia (c) o irse a la berma (b) son maniobras incorrectas y peligrosas en este caso."
  },
  {
    "id": 147,
    "question": "Usted va por una carretera a 100 km/h. ¿Qué hace usted si a pesar de todo un vehículo que viene atrás desea adelantarlo?",
    "options": [
      "Acelera para impedir el adelantamiento.",
      "Se mantiene lo más a la derecha posible.",
      "Mantiene o disminuye su velocidad.",
      "Enciende su intermitente izquierdo en señal de advertencia de que viene un vehículo en contra.",
      "Se acerca lo más posible hacia la línea de centro de calzada, para impedir el adelantamiento."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Debe mantenerse lo más a la derecha posible (b) y mantener o disminuir su velocidad (c) para permitir que el otro vehículo lo adelante con seguridad. Facilitar el adelantamiento es una obligación del conductor adelantado: nunca debe acelerar ni cerrar el espacio.",
    "wrongExplanations": [
      "Acelerar para impedir el adelantamiento es una infracción peligrosa que prolonga la maniobra y aumenta el riesgo de choque frontal.",
      "",
      "",
      "Encender el intermitente izquierdo no es señal válida para advertir tráfico en contra y puede confundir al otro conductor.",
      "Acercarse a la línea de centro para impedir el adelantamiento es maniobra peligrosa y prohibida que obstaculiza al otro vehículo."
    ],
    "page": 38,
    "category": "Conduccion segura",
    "deepExplanation": "Esta situación es la misma lógica de cooperación pero en carretera a 100 km/h, donde las consecuencias de un error son aún mayores por la energía involucrada. La ley obliga al conductor adelantado a facilitar el paso, así que usted debe mantenerse lo más a la derecha posible (b) para dar espacio y mantener o incluso disminuir su velocidad (c) para que el otro complete la maniobra rápido y vuelva a su pista. El razonamiento es que el tiempo de exposición en la pista contraria es el factor de riesgo número uno en un adelantamiento; mientras menos dure, menor es la probabilidad de encontrarse con un vehículo de frente. Acelerar para impedirlo (a) o cerrarse hacia el eje (e) no solo es ilegal sino una agresión que puede forzar un choque frontal o que el otro tenga que abortar bruscamente. Encender el intermitente izquierdo (d) sería una señal contradictoria y confusa. Truco: piense que el que adelanta está jugándose en la pista contraria por usted también, ayúdelo a salir rápido de ahí soltando el acelerador."
  },
  {
    "id": 148,
    "question": "Usted desea adelantar. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "El camión tiene la obligación de correrse hacia la berma para dejarle a usted más espacio.",
      "El auto que viene en sentido contrario tiene la obligación de correrse a la berma para aumentar la seguridad.",
      "El camión está obligado a reducir la velocidad.",
      "Usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos para luego adelantar."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q148_0.png"
    ],
    "explanation": "La única afirmación verdadera es que usted tiene la obligación de esperar a que la pista del sentido contrario esté libre de vehículos antes de adelantar (d). El conductor que adelanta es el único responsable de hacerlo con seguridad y solo cuando existe espacio y visibilidad suficientes.",
    "wrongExplanations": [
      "El camión no está obligado a correrse a la berma; es usted quien debe adelantar solo cuando es seguro.",
      "El vehículo que viene en sentido contrario no tiene obligación de correrse a la berma; usted no puede contar con esa maniobra.",
      "El camión no está obligado a reducir la velocidad para que usted lo adelante; la responsabilidad de la maniobra es suya.",
      ""
    ],
    "page": 39,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio jurídico central del adelantamiento es que toda la responsabilidad recae en quien lo ejecuta, no en los demás. Por eso la única afirmación verdadera es que usted está obligado a esperar a que la pista del sentido contrario esté libre de vehículos antes de adelantar (d). No existe ninguna obligación legal de que el camión que usted adelanta se corra a la berma (a) ni que reduzca su velocidad (c) para hacerle espacio, ni mucho menos de que el auto que viene en contra se aparte para 'aumentar la seguridad' (b); contar con eso es una receta para el choque, porque usted estaría delegando su seguridad en la reacción ajena. El razonamiento es que usted decide cuándo y cómo invadir la pista opuesta, así que usted asume el riesgo y debe asegurarse de tener espacio, visibilidad y tiempo suficientes. Truco para recordarlo: el que adelanta es siempre el dueño del problema; si algo sale mal, la culpa y el peligro son suyos. Por eso solo se adelanta cuando la pista contraria está completamente despejada, no cuando uno espera que el resto colabore."
  },
  {
    "id": 149,
    "question": "Usted ha comenzado a adelantar. El auto de la derecha va a aproximadamente 80 km/h. Por su espejo retrovisor usted ve otro auto que tiene intención de adelantar. ¿Qué hace usted?",
    "options": [
      "Frena ligeramente y vuelve a la pista derecha.",
      "Acelera y adelanta, porque el auto que usted adelanta tiene la obligación de reducir la velocidad.",
      "Acelera y adelanta tan rápido como pueda, para no obstaculizar al que viene detrás suyo.",
      "Acelera y adelanta, ya que el ancho de la calzada es suficiente para 3 vehículos si el que viene en contra se corre bien a su derecha."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q149_0.png"
    ],
    "explanation": "Lo correcto es frenar ligeramente y volver a la pista derecha (a). Si ya empezó a adelantar pero las condiciones no son seguras, debe abortar la maniobra regresando a su pista; nunca debe forzar el adelantamiento ni contar con que otros se corran para hacerle espacio.",
    "wrongExplanations": [
      "",
      "El auto que usted adelanta no está obligado a reducir su velocidad, por lo que no puede basar su maniobra en esa suposición.",
      "Acelerar lo más rápido posible solo para no estorbar al de atrás es imprudente y puede provocar un accidente.",
      "Contar con que la calzada alcanza para tres vehículos si el de enfrente se corre es una suposición temeraria y prohibida."
    ],
    "page": 39,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Aquí aparece una regla de oro de la conducción defensiva: ante la duda, aborte. Usted ya inició el adelantamiento del auto que va a 80 km/h, pero por el espejo ve a otro que también quiere adelantar, lo que significa que tendría tráfico presionándolo por detrás y la situación se vuelve insegura. Lo correcto es frenar ligeramente y regresar a la pista derecha (a), cancelando la maniobra de forma controlada. Las otras opciones se basan en suposiciones peligrosas: pensar que el auto adelantado 'tiene la obligación de reducir' (b) o que la calzada alcanza para tres vehículos si el que viene en contra se corre (d) es confiar la propia seguridad en que otros reaccionen perfectamente, y acelerar para no estorbar al de atrás (c) lo mete en una carrera. El fundamento es que ningún adelantamiento iniciado obliga a terminarse; siempre es preferible retroceder a forzar. Truco: si durante un adelantamiento sienten 'esto se está poniendo apretado', no acelere para salir del apuro, frene suave y vuelva a su pista, porque atrás siempre hay espacio seguro y adelante quizás no."
  },
  {
    "id": 150,
    "question": "Antes de adelantar a un vehículo de gran tamaño usted debería mantenerse suficientemente atrás de él. ¿Por qué?",
    "options": [
      "Para tener una mejor visual hacia adelante sobre la vía.",
      "Para tener espacio suficiente que le permita acelerar y adelantar en las curvas.",
      "Para tener espacio suficiente en caso que el vehículo se detenga y retroceda.",
      "Para poder ver mejor las señales que le pueda hacer su conductor."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe mantenerse suficientemente atrás de un vehículo grande para tener una mejor visual hacia adelante sobre la vía (a). La distancia le permite ver más allá del vehículo, comprobar si viene tráfico en contra y decidir con seguridad si puede adelantar.",
    "wrongExplanations": [
      "",
      "Nunca se debe adelantar en curvas, por lo que esa no es la razón para mantener distancia.",
      "Mantener distancia no se debe a que el vehículo retroceda, sino a la necesidad de tener buena visibilidad.",
      "El motivo principal es la visibilidad de la vía, no ver las señales del conductor del camión."
    ],
    "page": 39,
    "category": "Senales y semaforos",
    "deepExplanation": "La razón principal de mantener distancia con un vehículo de gran tamaño antes de adelantarlo es puramente de visibilidad: pegado a su cola, ese vehículo actúa como una pared que le tapa por completo lo que viene de frente y el desarrollo de la vía. Por eso la respuesta es tener una mejor visual hacia adelante sobre la vía (a). El razonamiento geométrico es simple: mientras más atrás se ubica usted, más abierto es el ángulo con que puede mirar por el costado izquierdo y ver el tráfico opuesto, las curvas y las señales; pegado atrás, su campo visual se reduce casi a cero. Las otras opciones son falsas o peligrosas: nunca se adelanta en curvas (b), no se cuenta con que el vehículo se detenga y retroceda (c), y la decisión de adelantar no depende de ver señales del otro conductor (d) sino de su propia evaluación. Truco: si no puede ver claramente la pista contraria más allá del camión, está demasiado cerca; retroceda hasta que la vía 'se abra' ante sus ojos antes siquiera de pensar en adelantar."
  },
  {
    "id": 151,
    "question": "¿Por qué adelantar a un camión es más arriesgado que adelantar a un auto?",
    "options": [
      "Porque los camiones pueden detenerse sorpresivamente.",
      "Porque los camiones son más largos que los autos.",
      "Porque los frenos de los camiones no son tan buenos.",
      "Porque los camiones suben las pendientes más lentamente."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Adelantar a un camión es más arriesgado porque los camiones son más largos que los autos (b). Su mayor longitud obliga a recorrer una distancia mucho mayor en la pista contraria, lo que aumenta el tiempo de exposición al tráfico que viene de frente.",
    "wrongExplanations": [
      "Los camiones no suelen detenerse sorpresivamente; el factor de riesgo al adelantar es su longitud.",
      "",
      "El riesgo no se debe a los frenos del camión, sino al mayor tramo que se debe recorrer por su largo.",
      "La lentitud en las pendientes no es la razón del mayor riesgo al adelantar; lo es su longitud."
    ],
    "page": 39,
    "category": "Conduccion segura",
    "deepExplanation": "El factor que hace más riesgoso adelantar un camión es su mayor longitud (b), y esto es pura física del tiempo de exposición. Un camión o vehículo articulado puede medir tres o cuatro veces lo que un auto, de modo que usted necesita recorrer una distancia mucho más larga en la pista del sentido contrario para sobrepasarlo por completo, lo que significa permanecer más segundos expuesto al tráfico que viene de frente. Como el riesgo de un adelantamiento es directamente proporcional al tiempo que uno pasa invadiendo la pista opuesta, a mayor largo del vehículo, mayor peligro de choque frontal. Las otras alternativas describen características reales de algunos camiones (frenos, lentitud en pendientes), pero no son la razón por la que el adelantamiento en sí es más arriesgado. Truco para dimensionarlo: adelantar un auto puede tomar unos pocos segundos, pero adelantar un camión grande puede exigir el doble o triple de distancia despejada en contra, así que solo hágalo en rectas largas con visibilidad total."
  },
  {
    "id": 152,
    "question": "Usted está a punto de adelantar a un vehículo pesado. ¿Qué debería hacer?",
    "options": [
      "Tocar la bocina para advertirle al conductor que usted está ahí.",
      "Mantenerse bien atrás del vehículo para tener una mayor visual.",
      "Conducir cerca del vehículo con el propósito de adelantarlo rápidamente.",
      "Encender y apagar sus luces y esperar hasta que el conductor le avise que es seguro adelantar."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Al estar a punto de adelantar un vehículo pesado debe mantenerse bien atrás de él para tener una mayor visual (b). Esa distancia le da el campo de visión necesario para ver el tráfico que viene en contra y decidir si la maniobra es segura.",
    "wrongExplanations": [
      "Tocar la bocina no es necesario ni suficiente para adelantar con seguridad a un vehículo pesado.",
      "",
      "Conducir pegado al vehículo le quita visibilidad hacia adelante y es muy peligroso.",
      "No debe esperar que el conductor del camión le avise; la decisión y responsabilidad de adelantar son suyas."
    ],
    "page": 39,
    "category": "Conduccion segura",
    "deepExplanation": "Esta pregunta refuerza el mismo principio de visibilidad aplicado al momento previo de adelantar un vehículo pesado: lo correcto es mantenerse bien atrás de él para tener una mayor visual (b). El fundamento es que un vehículo pesado bloquea casi todo su campo de visión frontal, y solo aumentando la distancia logra usted ver por el costado lo que viene en contra y decidir con base real si la maniobra es segura. Las otras opciones son malas prácticas que dan una falsa sensación de seguridad: tocar la bocina (a) o hacer señales de luces esperando que el camionero le 'autorice' el paso (d) es delegar en otro una decisión que es exclusivamente suya, y nada garantiza que ese conductor vea correctamente toda la vía por usted. Acercarse para adelantar rápido (c) es justamente lo que le quita visibilidad. Truco: la responsabilidad de adelantar con seguridad es siempre del que adelanta, nunca confíe en una señal del de adelante; primero abra distancia, mire usted mismo, y solo entonces decida."
  },
  {
    "id": 153,
    "question": "Usted va conduciendo de día por una zona rural. La calzada tiene pavimento en buen estado y tránsito bidireccional. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...",
    "options": [
      "50 km/hr",
      "90 km/hr",
      "100 km/hr",
      "120 km/hr"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "En zona rural, de día, con pavimento en buen estado y tránsito bidireccional, la velocidad máxima es 100 km/h salvo que una señal indique otra cosa. Es el límite general que fija la Ley de Tránsito para carreteras de doble sentido en esas condiciones.",
    "wrongExplanations": [
      "50 km/h es el límite general urbano, no el de zona rural.",
      "90 km/h no corresponde al límite de carretera bidireccional en buen estado en esas condiciones.",
      "",
      "120 km/h es propio de autopistas, no de una carretera rural bidireccional."
    ],
    "page": 41,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento está en los límites generales de velocidad que fija la Ley de Tránsito, que distingue entre zona urbana y zona rural y, dentro de esta, según el tipo de vehículo y las condiciones. Para un vehículo liviano en zona rural, de día, con pavimento en buen estado y tránsito bidireccional, el máximo es 100 km/h (c), salvo que una señal indique otra cosa. El razonamiento de fijarlo en 100 y no más es que en una vía de doble sentido el riesgo de encuentro frontal es alto, por lo que se reserva una velocidad mayor para las autopistas con calzadas separadas. Recuerde la jerarquía: 50 en ciudad, 100 en carretera rural bidireccional para vehículos livianos, y hasta 120 solo donde la señalización de autopista expresamente lo permita. Truco: 'doble sentido, cien'; el hecho de que el tránsito sea bidireccional es justamente lo que impide subir el límite, porque del otro lado puede venir alguien de frente. Y siempre prima la señal del lugar por sobre el límite general."
  },
  {
    "id": 154,
    "question": "Usted va conduciendo en la ciudad por una calle con 2 pistas en sentido único de tránsito. A menos que alguna señal le indique otra cosa, usted no debe exceder los ...",
    "options": [
      "30 km/hr",
      "50 km/hr",
      "60 km/hr",
      "80 km/hr"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "En la ciudad, salvo señal en contrario, la velocidad máxima es 50 km/h, incluso en una calle con dos pistas en un solo sentido. El límite urbano general fijado por la Ley de Tránsito es de 50 km/h independientemente del número de pistas.",
    "wrongExplanations": [
      "30 km/h aplica a zonas o calles especiales señalizadas, no es el límite urbano general.",
      "",
      "60 km/h no es el límite urbano general establecido por la ley.",
      "80 km/h excede ampliamente el límite urbano general de 50 km/h."
    ],
    "page": 41,
    "category": "Senales y semaforos",
    "deepExplanation": "Aquí la trampa está en pensar que más pistas o sentido único permiten ir más rápido, pero el límite urbano es general y no depende de eso. En la ciudad, salvo que una señal indique otra cosa, la velocidad máxima es 50 km/h (b), aunque la calle tenga dos pistas en un solo sentido. El fundamento es que en zona urbana coexisten peatones, ciclistas, cruces, accesos y locomoción colectiva, y a 50 km/h la distancia de frenado y la gravedad de un atropello todavía son manejables; por sobre esa velocidad, la probabilidad de muerte de un peatón atropellado se dispara. Por eso el legislador fijó un único límite urbano base sin importar el número de pistas. Truco mnemotécnico: 'ciudad, cincuenta', es uno de los datos más preguntados y más confundidos. No deje que el detalle de 'dos pistas en sentido único' lo haga elegir 60 u 80; solo una señal explícita podría cambiar el límite, nunca la geometría de la calle por sí sola."
  },
  {
    "id": 155,
    "question": "Como norma general, antes de tomar una curva cerrada, usted debe ...",
    "options": [
      "acelerar para salir cuanto antes de ella.",
      "acelerar para luego reducir la velocidad mientras vaya saliendo de ella.",
      "disminuir la velocidad, pero sólo si la calzada está mojada.",
      "disminuir la velocidad, para luego acelerar gradualmente mientras la va recorriendo."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Antes de una curva cerrada debe disminuir la velocidad y luego acelerar gradualmente mientras la va recorriendo (d). Llegar más lento da mejor control del vehículo, y acelerar suavemente a la salida mantiene la estabilidad y la adherencia.",
    "wrongExplanations": [
      "Acelerar antes de la curva hace perder el control y aumenta el riesgo de salirse de la vía.",
      "Acelerar para luego frenar dentro de la curva desestabiliza el vehículo y es peligroso.",
      "Se debe reducir la velocidad siempre antes de una curva cerrada, no solo con la calzada mojada.",
      ""
    ],
    "page": 41,
    "category": "Conduccion segura",
    "deepExplanation": "La técnica correcta en curvas se basa en la física de la adherencia y la transferencia de peso: debe disminuir la velocidad antes de entrar y luego acelerar gradualmente mientras la recorre (d). El razonamiento paso a paso es que al frenar antes de la curva el peso se carga sobre las ruedas delanteras dándoles mayor agarre para girar, y entrar más lento le da margen de reacción si la curva es más cerrada de lo previsto o hay algo en la calzada. Al ir saliendo, una aceleración suave y progresiva reparte el peso hacia atrás, estabiliza el auto y lo saca con tracción y control. Acelerar dentro de la curva (a y b) sobrecarga las ruedas exteriores y puede hacer que el vehículo derrape o se salga de la trayectoria, sobre todo si pierde adherencia. Reducir solo con pista mojada (c) es un error: la regla aplica siempre, aunque esté seco. Truco clásico de manejo: 'lento que entra, rápido que sale'; frene en la recta antes de la curva, nunca arriba de ella, y recién acelere cuando ya vea la salida."
  },
  {
    "id": 156,
    "question": "¿En cuál o cuáles situaciones el vehículo está mal estacionado?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [
      "q156_0.png"
    ],
    "explanation": "El vehículo está mal estacionado en las situaciones A y B. Corresponden a lugares prohibidos por la ley, como frente a accesos, sobre veredas o cruces, o de manera que se obstruye el tránsito; en cambio las demás muestran estacionamientos permitidos y bien ejecutados.",
    "wrongExplanations": [
      "",
      "",
      "En esta situación el vehículo está correctamente estacionado, en un lugar permitido y sin obstruir.",
      "En esta situación el vehículo está correctamente estacionado, respetando las normas."
    ],
    "page": 41,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento es que la ley enumera lugares donde estacionar está expresamente prohibido porque genera obstrucción o peligro, y en este caso las situaciones mal estacionadas son A y B. Esos casos corresponden típicamente a vehículos ubicados frente a accesos o entradas, sobre la vereda, encima de un cruce o de forma que entorpecen la circulación de otros, mientras que las demás imágenes muestran vehículos detenidos en lugares permitidos y bien alineados al borde derecho. El razonamiento para identificarlos es preguntarse siempre: ¿este vehículo le impide pasar a alguien, bloquea un cruce, una entrada, una rampa o reduce la visibilidad? Si la respuesta es sí, está mal estacionado. La consecuencia real no es solo la multa o el retiro por grúa, sino el riesgo de obligar a peatones a bajarse a la calzada o de tapar la salida de otro vehículo. Truco: un buen estacionamiento es invisible, no estorba a nadie ni obliga a nadie a esquivarlo; si su auto cambia el comportamiento de los demás, probablemente está mal puesto."
  },
  {
    "id": 157,
    "question": "¿En cuál o cuáles de las siguientes situaciones el conductor se ha detenido correctamente para recoger un pasajero?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      1,
      3
    ],
    "multi": true,
    "images": [
      "q157_0.png"
    ],
    "explanation": "El conductor se ha detenido correctamente para recoger un pasajero en las situaciones B y D. En ambas se detiene junto al borde derecho de la calzada sin obstruir el tránsito ni invadir cruces, accesos o zonas prohibidas.",
    "wrongExplanations": [
      "En esta situación la detención obstruye el tránsito o se ubica en un lugar prohibido, por lo que es incorrecta.",
      "",
      "En esta situación la detención no se realiza correctamente, ya sea por ubicarse en zona prohibida o entorpecer la circulación.",
      ""
    ],
    "page": 41,
    "category": "Conduccion segura",
    "deepExplanation": "El principio que rige detenerse a recoger o dejar a un pasajero es el mismo del estacionamiento momentáneo: hacerlo junto al borde derecho de la calzada, sin obstruir el tránsito ni invadir zonas prohibidas. Por eso las situaciones correctas son B y D, donde el vehículo se arrima bien a la derecha, no bloquea cruces, accesos ni la circulación de otros. El razonamiento para descartar las otras es que cualquier detención que deje el auto separado del borde, sobre un paso de peatones, en una intersección o frente a una entrada, transforma una maniobra simple en un obstáculo peligroso, obligando a los demás a esquivarlo y exponiendo al pasajero al bajarse hacia el lado del tránsito. La consecuencia real de detenerse mal es provocar frenadas bruscas detrás suyo o que el pasajero descienda a una zona de riesgo. Truco: para recoger a alguien, péguese siempre al borde derecho y deténgase donde no tape ningún cruce ni acceso; si tiene que invadir media pista para parar, busque otro punto unos metros más allá."
  },
  {
    "id": 158,
    "question": "Por una emergencia usted requiere estacionar de noche en una carretera sin alumbrado y con buenas bermas. ¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Usted debe estacionar al costado izquierdo enfrentando la circulación.",
      "Mientras el vehículo esté estacionado usted debe mantener encendidas sus luces de estacionamiento",
      "Usted debe estacionar al costado derecho y de modo que todo el vehículo quede sobre la berma.",
      "No está permitido estacionar en la berma."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Son verdaderas que debe mantener encendidas las luces de estacionamiento mientras el vehículo esté detenido (b) y que debe estacionar al costado derecho dejando todo el vehículo sobre la berma (c). De noche y sin alumbrado, las luces de estacionamiento lo hacen visible y dejar el vehículo completamente fuera de la calzada evita obstruir y exponerse al tránsito.",
    "wrongExplanations": [
      "Estacionar al costado izquierdo enfrentando la circulación está prohibido y es muy peligroso; siempre se estaciona en el sentido del tránsito y por la derecha.",
      "",
      "",
      "Sí está permitido estacionar en la berma en caso de emergencia, dejando todo el vehículo sobre ella."
    ],
    "page": 43,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Esta situación combina dos reglas de seguridad para detenerse en carretera de noche sin alumbrado. Son verdaderas que debe mantener encendidas las luces de estacionamiento mientras permanezca detenido (b) y que debe estacionar al costado derecho de modo que todo el vehículo quede sobre la berma (c). El fundamento de las luces de estacionamiento es la visibilidad: en una carretera oscura, un vehículo sin luces es prácticamente invisible y un conductor que se aproxima a 100 km/h no alcanza a reaccionar, por lo que esas luces son su única forma de advertir su presencia. El fundamento de dejar todo el vehículo sobre la berma es sacarlo por completo del flujo de circulación para que ningún auto que pase por la calzada lo impacte. Estacionar al costado izquierdo enfrentando el tránsito (a) es gravísimo porque lo deja de frente a los vehículos, y decir que no se puede usar la berma (d) es falso en una emergencia con buenas bermas. Truco: de noche en carretera, fuera de la calzada completo y con luces de posición encendidas; visible y fuera del paso son las dos consignas que salvan vidas."
  },
  {
    "id": 159,
    "question": "¿En cuál o cuáles de estos lugares podría el estacionamiento de su vehículo causar daño u obstrucción a otros usuarios de la vía?",
    "options": [
      "Frente a una entrada de autos de una propiedad.",
      "En o al llegar a una parada de locomoción colectiva.",
      "En un paso de peatones.",
      "En un espacio delimitado para estacionar."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "El estacionamiento causa daño u obstrucción frente a una entrada de autos de una propiedad (a), en o al llegar a una parada de locomoción colectiva (b) y en un paso de peatones (c). En todos esos lugares se impide el acceso, el uso del transporte público o el cruce seguro de los peatones, por lo que estacionar está prohibido.",
    "wrongExplanations": [
      "",
      "",
      "",
      "Un espacio delimitado para estacionar es precisamente el lugar habilitado para ello, por lo que no causa obstrucción."
    ],
    "page": 43,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Esta pregunta pide identificar los lugares donde estacionar perjudica a otros usuarios, y la respuesta abarca tres situaciones distintas que la ley prohíbe: frente a una entrada de autos de una propiedad (a), en o al llegar a una parada de locomoción colectiva (b) y sobre un paso de peatones (c). El fundamento de cada una es proteger un uso específico de la vía: frente a una entrada bloquea el ingreso o salida de los vehículos de esa propiedad; en una parada impide que los buses se arrimen al borde y obliga a los pasajeros a subir y bajar en plena calzada; y sobre un cruce cebra le quita a los peatones su espacio protegido y los obliga a rodear el auto exponiéndose al tránsito. La única opción correcta de estacionamiento es el espacio delimitado para ello (d), que existe justamente para no obstruir a nadie. Truco para recordarlo: pregúntese siempre 'a quién le quito el espacio'; si su auto le quita el paso a una entrada, a un bus o a un peatón, está estacionado donde no debe y arriesga multa, retiro por grúa y, peor, un accidente."
  },
  {
    "id": 160,
    "question": "¿En qué circunstancia usted se detendría justo sobre un cruce cebra existente a mitad de cuadra?",
    "options": [
      "En ningún momento.",
      "Cuando no hay peatones esperando para cruzar.",
      "Durante la noche.",
      "Cuando ello sea necesario para evitar un accidente."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Solo se detendría sobre un cruce cebra cuando ello sea necesario para evitar un accidente (d). La ley prohíbe detenerse sobre un paso de peatones, y la única excepción admisible es una maniobra de emergencia para impedir un mal mayor.",
    "wrongExplanations": [
      "Decir que en ningún momento es incorrecto, porque existe la excepción de evitar un accidente.",
      "La ausencia de peatones esperando no autoriza a detenerse sobre el cruce cebra.",
      "La noche no es una circunstancia que permita detenerse sobre un paso de peatones.",
      ""
    ],
    "page": 43,
    "category": "Conduccion segura",
    "deepExplanation": "La regla general es tajante: está prohibido detenerse sobre un paso de peatones, porque ese espacio está reservado al cruce protegido de las personas y bloquearlo las obliga a rodear el vehículo metiéndose en la calzada. Sin embargo, ninguna prohibición de tránsito es absoluta cuando está en juego evitar un daño mayor, y por eso la única circunstancia en que usted se detendría justo sobre un cruce cebra es cuando sea estrictamente necesario para evitar un accidente (d), por ejemplo una frenada de emergencia ante un obstáculo súbito. El razonamiento es el principio del mal menor: es preferible quedar momentáneamente sobre la cebra que provocar un choque o atropello. Las otras opciones son falsas porque la prohibición no desaparece por no haber peatones esperando (b) ni por ser de noche (c); la cebra sigue siendo zona prohibida. Truco: la única excusa válida para quedar sobre un paso de peatones es haber frenado para no chocar; cualquier otra detención voluntaria ahí es infracción."
  },
  {
    "id": 161,
    "question": "Como regla general, ¿en cuál o cuáles de los siguientes lugares usted no debe estacionar?",
    "options": [
      "En una parada de buses.",
      "Al costado derecho de una vía urbana.",
      "Al lado de un bandejón central.",
      "Frente a una entrada de autos de una casa particular.",
      "En una vía inclinada levemente.",
      "En una curva del camino."
    ],
    "correct": [
      0,
      2,
      3,
      5
    ],
    "multi": true,
    "images": [],
    "explanation": "La Ley de Tránsito prohíbe estacionar en lugares que ponen en riesgo la seguridad o entorpecen la circulación. Por eso no se puede estacionar en una parada de buses (interfiere con el transporte público), al lado de un bandejón central (obstruye la pista y dificulta la salida de pasajeros), frente a una entrada de autos de una casa particular (impide el acceso al inmueble) ni en una curva del camino (donde la visibilidad es reducida y aumenta el riesgo de choque).",
    "wrongExplanations": [
      "",
      "Estacionar al costado derecho de una vía urbana es justamente lo correcto y permitido como regla general.",
      "",
      "",
      "Una vía levemente inclinada no es por sí sola un lugar prohibido; basta con tomar precauciones como dejar las ruedas viradas y aplicar el freno de mano.",
      ""
    ],
    "page": 43,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento de estas prohibiciones es que un vehículo estacionado se transforma en un obstáculo fijo, y la Ley de Tránsito busca que ese obstáculo no comprometa la seguridad ni el flujo de otros usuarios. Por eso no se estaciona en una parada de buses, porque obligaría al transporte público a detenerse fuera de su zona y a que los pasajeros bajen a la calzada; tampoco al lado de un bandejón central, ya que ese sector está pensado para canalizar el tránsito y dejar un auto ahí invade la pista contigua. Frente a una entrada de autos de una casa particular se prohíbe porque le niega a un tercero el derecho a entrar o salir de su propiedad, un derecho protegido expresamente. Y en una curva nunca debes estacionar, porque quien viene detrás no tiene visibilidad anticipada del obstáculo y solo lo ve cuando ya está encima, lo que es la receta de un choque por alcance. Un truco para recordarlo: piensa siempre en 'a quién le tapo la vista o a quién le quito el espacio'; si la respuesta es alguien, no estaciones ahí. Las opciones correctas (a, c, d, f) son justamente todas las que generan riesgo u obstrucción."
  },
  {
    "id": 162,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) tratándose de una vía urbana sin señales de tránsito que prohíban o autoricen el estacionamiento o la detención?",
    "options": [
      "Usted puede detenerse en doble fila sólo por el tiempo necesario para que bajen pasajeros de su auto.",
      "Usted puede detenerse al costado de un bandejón central para permitir la subida de pasajeros a su vehículo.",
      "Al estacionar, usted debe hacerlo al costado derecho y preocupándose de dejar una distancia de a lo menos 10 m entre su vehículo y la esquina.",
      "Usted puede estacionar al costado derecho y a 5 m de la esquina si el cruce se encuentra semaforizado."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Al estacionar en una vía urbana, la ley exige hacerlo al costado derecho según el sentido del tránsito y mantener una distancia mínima de 10 metros desde la esquina, para no obstruir la visibilidad en los cruces ni el paso de peatones. Esta es la única afirmación correcta, ya que respeta tanto el lado como la distancia que establece la normativa.",
    "wrongExplanations": [
      "Detenerse en doble fila está prohibido siempre, ya que obstruye la circulación; no se permite ni siquiera para que bajen pasajeros.",
      "No se puede detener al costado de un bandejón central porque eso obliga a los pasajeros a subir desde la calzada, lo que es peligroso y está prohibido.",
      "",
      "La distancia mínima a la esquina es de 10 metros, no de 5; un cruce semaforizado no reduce esta exigencia."
    ],
    "page": 43,
    "category": "Senales y semaforos",
    "deepExplanation": "La clave de esta pregunta es entender que detenerse y estacionar no son lo mismo, y que la ley fija reglas estrictas sobre dónde y a qué distancia hacerlo. La detención en doble fila está prohibida aunque sea breve, porque deja un vehículo bloqueando una pista de circulación y eso entorpece a todos los que vienen detrás. Detenerse junto a un bandejón central para subir pasajeros también es incorrecto, ya que ese sector no es zona de embarque y obliga a las personas a transitar por el medio de la calzada. La única afirmación correcta es la c, porque combina las dos exigencias reales: estacionar al costado derecho según el sentido del tránsito y dejar al menos 10 metros desde la esquina. La opción d falla porque rebaja esa distancia a 5 metros inventando una excepción por semáforo que la norma no contempla. Para no equivocarte recuerda que la distancia mínima a la esquina es siempre 10 metros, exista o no semáforo, porque su razón de ser es despejar la visibilidad del cruce y el paso peatonal, no la presencia de luces."
  },
  {
    "id": 163,
    "question": "Usted va a dejar su vehículo estacionado. ¿En qué caso puede dejarlo con el motor funcionando?",
    "options": [
      "En ningún caso.",
      "Si va a estar estacionado menos de 5 minutos.",
      "Si la batería está descargada.",
      "Si en el vehículo va a permanecer una persona."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La norma es clara: en ningún caso debe dejarse un vehículo estacionado con el motor funcionando si el conductor se aleja de él. Esto evita que el vehículo se ponga en movimiento accidentalmente y reduce riesgos de robo y contaminación.",
    "wrongExplanations": [
      "",
      "No importa cuán breve sea el tiempo; dejar el motor encendido sin el conductor está prohibido en todo caso.",
      "Tener la batería descargada no justifica dejar el motor funcionando con el vehículo estacionado y sin conductor.",
      "Que quede una persona dentro no autoriza a dejar el vehículo estacionado con el motor en marcha."
    ],
    "page": 43,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El principio detrás de esta regla es que un motor encendido mantiene al vehículo en un estado potencialmente operativo, y un auto en esa condición sin conductor al volante es un peligro latente. Por eso la respuesta correcta es 'en ningún caso' (a): no importa si vas a demorar poco, si la batería está débil o si queda alguien adentro, debes apagar el motor al dejar el vehículo estacionado. El riesgo real es múltiple: el vehículo podría moverse solo por una falla o un golpe a la palanca, queda mucho más expuesto a ser robado con el motor andando, y se emiten gases contaminantes de forma innecesaria. Las otras alternativas son trampas que apelan a excusas cotidianas ('solo un ratito', 'la batería'), pero la norma no admite excepciones por comodidad. Un buen reflejo para memorizar: motor apagado, freno de mano puesto y llave fuera son los tres pasos de todo estacionamiento seguro."
  },
  {
    "id": 164,
    "question": "En una vía urbana de sentido único de tránsito, sin señalización que permita o prohíba el estacionamiento, ¿a qué lado puede estacionar?",
    "options": [
      "A ambos lados.",
      "En ninguno, porque no hay señales que lo permitan.",
      "Sólo al lado derecho según el sentido del tránsito.",
      "Sólo al lado izquierdo según el sentido del tránsito."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "En una vía urbana de sentido único, cuando no hay señalización que lo regule, solo se puede estacionar al lado derecho según el sentido del tránsito. Esta regla general busca uniformar la forma de estacionar y mantener el flujo seguro y ordenado.",
    "wrongExplanations": [
      "No se permite estacionar a ambos lados como regla general; el costado correcto es el derecho.",
      "Sí se puede estacionar aunque no haya señales; la regla general lo permite al costado derecho.",
      "",
      "El lado izquierdo no es el permitido por la regla general, sino el derecho según el sentido del tránsito."
    ],
    "page": 43,
    "category": "Senales y semaforos",
    "deepExplanation": "Mucha gente cree que en una calle de un solo sentido puede estacionar a cualquier lado porque 'no viene tránsito de frente', pero la regla general es clara y la respuesta correcta es solo al lado derecho según el sentido del tránsito (c). El fundamento es la uniformidad: si todos estacionan al mismo lado, los demás conductores, peatones y especialmente quienes salen de un estacionamiento saben dónde esperar vehículos detenidos, lo que reduce maniobras imprevistas. Estacionar a la izquierda obligaría al conductor a cruzar de vereda y a reincorporarse al tránsito desde un ángulo inusual, aumentando el riesgo. La opción que dice 'a ambos lados' es la trampa típica de las vías de sentido único, y la que afirma que 'no se puede en ninguno' confunde la ausencia de señal con una prohibición, cuando en realidad la falta de señalización significa que rige la regla general. Recuerda: salvo que una señal diga lo contrario, en Chile siempre se estaciona al costado derecho."
  },
  {
    "id": 165,
    "question": "¿En cuáles 3 de las siguientes ocasiones debe usted detener siempre su vehículo?",
    "options": [
      "Al verse involucrado en un accidente.",
      "Al enfrentar una señal CEDA EL PASO.",
      "Al enfrentar una luz roja de un semáforo.",
      "Ante un cruce cebra en el que no hay peatones cruzando ni esperando para cruzar.",
      "Cuando un Carabinero se lo solicita."
    ],
    "correct": [
      0,
      2,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Usted debe detener siempre su vehículo al verse involucrado en un accidente (es una obligación legal prestar auxilio y no fugarse), ante una luz roja de semáforo (que ordena detención total) y cuando un Carabinero se lo solicita (su autoridad prima sobre las demás señales). En estos tres casos la detención es obligatoria sin excepción.",
    "wrongExplanations": [
      "",
      "La señal CEDA EL PASO obliga a ceder el paso y solo a detenerse si es necesario, pero no exige detención total siempre.",
      "",
      "Si en el cruce cebra no hay peatones cruzando ni esperando, no está obligado a detenerse, solo a circular con precaución.",
      ""
    ],
    "page": 43,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta distingue entre situaciones donde la detención es absoluta y obligatoria y otras donde solo se cede el paso o se evalúa. Debes detenerte siempre al verse involucrado en un accidente (a), porque la ley te obliga a detenerte, prestar auxilio y no darte a la fuga; abandonar el lugar de un accidente es un delito. También ante una luz roja de semáforo (c), que ordena detención total e inmediata sin admitir avance. Y cuando un Carabinero te lo solicita (e), porque la autoridad encargada del control del tránsito prima por sobre cualquier señal o semáforo. Las trampas son el CEDA EL PASO, que obliga a ceder pero no necesariamente a detenerse por completo si el cruce está libre, y el cruce cebra sin peatones, donde no hay nadie a quien cederle el paso. El truco es preguntarte '¿esto admite que yo siga si está despejado?'; si la respuesta es no bajo ninguna circunstancia, es detención obligatoria, y eso aplica a las opciones a, c y e."
  },
  {
    "id": 166,
    "question": "¿A cuántos metros de una esquina es lo más cerca que usted puede estacionar?",
    "options": [
      "5 metros",
      "10 metros",
      "12 metros",
      "15 metros"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q166_0.png"
    ],
    "explanation": "La distancia mínima para estacionar respecto de una esquina es de 10 metros. Esto se exige para no tapar la visibilidad de quienes circulan o cruzan en la intersección y mantener despejado el paso peatonal.",
    "wrongExplanations": [
      "5 metros es una distancia insuficiente; la ley exige al menos 10 metros desde la esquina.",
      "",
      "12 metros excede el mínimo legal; lo más cerca permitido son 10 metros.",
      "15 metros excede el mínimo legal; lo más cerca permitido son 10 metros."
    ],
    "page": 45,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta es 10 metros (b), y conviene fijar ese número porque es uno de los más repetidos en la prueba y en la conducción diaria. El fundamento es la visibilidad en la intersección: si un vehículo se estaciona pegado a la esquina, tapa la vista tanto a los conductores que vienen por la vía transversal como a los peatones que esperan cruzar, generando un punto ciego justo donde más cruces y conflictos ocurren. Diez metros dan el espacio suficiente para que quien se asoma al cruce vea y sea visto a tiempo, y para mantener despejado el paso peatonal de la esquina. Las otras cifras (5, 12 o 15 metros) son distractores; el único valor que exige la norma es 10. Un truco simple: imagina diez pasos largos desde la esquina antes de poner el primer vehículo, y asocia siempre 'esquina con el número 10'."
  },
  {
    "id": 167,
    "question": "Como regla general, ¿en cuál o cuáles de los siguientes lugares nunca debe estacionar?",
    "options": [
      "En un paso de peatones.",
      "En un puente.",
      "A menos de 10 metros de una esquina.",
      "Al costado derecho de una vía urbana.",
      "En o al llegar a una parada de locomoción colectiva."
    ],
    "correct": [
      0,
      1,
      2,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Nunca debe estacionar en un paso de peatones (obstruye el cruce seguro de las personas), en un puente (entorpece la circulación en un punto estrecho y riesgoso), a menos de 10 metros de una esquina (tapa la visibilidad del cruce) ni en o al llegar a una parada de locomoción colectiva (interfiere con el transporte público). Todos estos lugares comprometen la seguridad o el flujo del tránsito.",
    "wrongExplanations": [
      "",
      "",
      "",
      "Estacionar al costado derecho de una vía urbana es lo correcto y permitido como regla general.",
      ""
    ],
    "page": 45,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Aquí se repite la lógica de que estacionar nunca debe interferir con la seguridad ni con espacios destinados a otros usos. No se estaciona en un paso de peatones (a) porque es el espacio reservado para que las personas crucen protegidas, y un auto ahí las empuja a rodearlo por la calzada. Tampoco en un puente (b), que suele ser angosto, sin berma y con poco margen de maniobra, de modo que un vehículo detenido genera un cuello de botella peligroso. A menos de 10 metros de una esquina (c) está prohibido por la visibilidad del cruce, como ya vimos. Y en o al llegar a una parada de locomoción colectiva (e) porque obstruyes el funcionamiento del transporte público y obligas a los buses a detenerse en mala posición. La única opción válida para estacionar es al costado derecho de una vía urbana (d), que es justamente la regla general permitida. Para resolver rápido: marca todo lugar que sea cruce, estrecho o de uso reservado, y deja fuera solo el costado derecho normal."
  },
  {
    "id": 168,
    "question": "De noche, en una zona rural, por emergencia usted estaciona su vehículo al costado de la vía. ¿En qué circunstancia debe usted encender sus luces de estacionamiento?",
    "options": [
      "Cuando la berma no es suficientemente ancha y parte del vehículo queda sobre la calzada.",
      "Cuando el centro de la calzada está demarcado con línea blanca continua.",
      "Cuando el camino es de tierra.",
      "Siempre."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Cuando estaciona de noche por emergencia en una zona rural, debe encender siempre sus luces de estacionamiento. Esto permite que los demás conductores adviertan la presencia del vehículo detenido a tiempo y eviten una colisión en la oscuridad.",
    "wrongExplanations": [
      "Las luces deben encenderse siempre en esta situación, no solo cuando parte del vehículo queda sobre la calzada.",
      "La demarcación del centro de la calzada no condiciona el uso de las luces; estas deben encenderse siempre.",
      "Que el camino sea de tierra no cambia la obligación; las luces deben encenderse siempre.",
      ""
    ],
    "page": 45,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta es 'siempre' (d), y el fundamento es que de noche y en zona rural la visibilidad es muy baja: no hay alumbrado público, las velocidades suelen ser altas y un vehículo detenido sin luces es prácticamente invisible hasta que es demasiado tarde para reaccionar. Las luces de estacionamiento (también llamadas de posición) cumplen exactamente esa función: hacer perceptible el contorno y la ubicación del vehículo detenido para que otro conductor lo advierta a distancia y maniobre con tiempo. Por eso las condiciones que plantean las otras alternativas, como que la berma sea angosta, que haya línea continua o que el camino sea de tierra, no cambian la obligación: el riesgo de ser embestido en la oscuridad existe en todos esos casos. La trampa es pensar que solo importa si el auto invade la calzada, pero incluso bien orillado debe ser visible. Memoriza la regla simple: de noche, detenido y en ruta, luces encendidas siempre."
  },
  {
    "id": 169,
    "question": "¿Qué hace usted ante esta situación?",
    "options": [
      "Continúa a la misma velocidad.",
      "Toca la bocina.",
      "Pasa el paso de peatones lo más rápido posible.",
      "Se detiene."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q169_0.png"
    ],
    "explanation": "Ante un paso de peatones donde hay personas cruzando o esperando para cruzar, usted debe detenerse y cederles el paso. El peatón tiene prioridad en estos cruces y su seguridad es lo primero.",
    "wrongExplanations": [
      "Continuar a la misma velocidad pone en riesgo a los peatones que tienen prioridad en el cruce.",
      "Tocar la bocina no resuelve la situación ni respeta la preferencia del peatón; debe detenerse.",
      "Pasar lo más rápido posible es peligroso e ilegal; debe ceder el paso al peatón.",
      ""
    ],
    "page": 45,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es detenerse (d), y se apoya en el principio de prioridad del peatón en los pasos habilitados para cruzar. Cuando hay personas cruzando o esperando para cruzar en un paso de peatones, la ley les reconoce preferencia, y tu obligación como conductor es detener el vehículo y cederles el paso de forma completa y segura, no solo aminorar. Las otras opciones reflejan conductas peligrosas o inútiles: continuar a la misma velocidad pone en riesgo directo a las personas, tocar la bocina las puede asustar o apurar generando un accidente, y cruzar lo más rápido posible es exactamente lo contrario a lo que exige la prudencia. El peatón es el usuario más vulnerable de la vía porque no tiene carrocería que lo proteja, y por eso la norma siempre inclina la balanza a su favor. La regla mental es clara: ante la duda en un paso peatonal, el vehículo se detiene y la persona pasa."
  },
  {
    "id": 170,
    "question": "Usted conduce a 90 km/h cuando la vía es obstruida sorpresivamente por un camión que está virando a la izquierda. ¿Qué es lo primero que hace usted ?",
    "options": [
      "Hace señales de luces y toca la bocina.",
      "Frena firmemente.",
      "Se desplaza a la pista de la izquierda.",
      "Disminuye levemente la velocidad."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q170_0.png"
    ],
    "explanation": "Ante un obstáculo súbito como un camión que vira a la izquierda y bloquea la vía, lo primero es frenar firmemente para reducir la velocidad y evitar o atenuar la colisión. A 90 km/h, detener o disminuir la velocidad rápidamente es la maniobra más segura y prioritaria.",
    "wrongExplanations": [
      "Hacer señales y tocar la bocina no detiene el vehículo a tiempo; lo primero es frenar.",
      "",
      "Desplazarse a la pista izquierda puede llevarlo directo hacia el camión que vira hacia ese lado, aumentando el riesgo.",
      "Disminuir levemente la velocidad no es suficiente para evitar el choque con un obstáculo tan cercano."
    ],
    "page": 46,
    "category": "Senales y semaforos",
    "deepExplanation": "Lo primero que debes hacer es frenar firmemente (b), porque ante un obstáculo súbito la prioridad absoluta es reducir la velocidad para evitar el impacto o, si es inevitable, llegar a él con la menor energía posible. A 90 km/h el vehículo recorre 25 metros por segundo, de modo que cada fracción de segundo cuenta y cualquier vacilación acorta drásticamente el espacio disponible para reaccionar. Por eso las otras alternativas son peligrosas o insuficientes: hacer señales de luces y tocar la bocina gasta tiempo valioso sin reducir velocidad; desplazarse a la pista de la izquierda puede llevarte justo hacia donde el camión está virando o hacia el tránsito que viene de frente; y disminuir levemente la velocidad no alcanza para detenerse a tiempo. El principio es que frenar es la respuesta que siempre reduce la energía del posible choque, mientras esquivar puede crear un riesgo nuevo. Recuerda la jerarquía en una emergencia: primero frenar para controlar la velocidad, y solo después, si es seguro, evaluar esquivar."
  },
  {
    "id": 171,
    "question": "¿Adquiere usted un derecho sobre otros usuarios de la vía cuando utiliza sus luces indicadoras de viraje?",
    "options": [
      "Sí, el usar las luces indicadoras de viraje le da a usted preferencia sobre los conductores que van en igual dirección a la suya.",
      "Sí, y además de darle a usted preferencia le exime de cualquier responsabilidad.",
      "No, porque usted sólo está advirtiendo su intención de realizar una maniobra que hará cuando sea seguro hacerla.",
      "Sí, pero sólo en el caso que usted esté tratando de abandonar un estacionamiento al borde de la calzada."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Usar las luces indicadoras de viraje no le otorga ningún derecho ni preferencia sobre los demás; solo advierte su intención de realizar una maniobra, la cual debe ejecutar únicamente cuando sea seguro hacerlo. Señalizar es una obligación de comunicación, no una autorización para imponerse.",
    "wrongExplanations": [
      "Señalizar no da preferencia sobre otros conductores; solo advierte una intención.",
      "Señalizar no otorga preferencia ni exime de responsabilidad; el conductor siempre responde por sus maniobras.",
      "",
      "No existe tal excepción; señalizar nunca otorga un derecho sobre los demás usuarios de la vía."
    ],
    "page": 46,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es la c: no, porque al usar las luces indicadoras solo estás advirtiendo tu intención de hacer una maniobra que ejecutarás cuando sea seguro. El fundamento es que la señalización es un acto de comunicación, no una autorización ni una transferencia de responsabilidad; encender el intermitente no obliga a los demás a cederte el paso ni te da preferencia sobre quienes ya circulan. El error que castiga esta pregunta es muy común en la práctica: el conductor que enciende la luz y se cambia de pista o vira de inmediato 'porque ya avisó', invadiendo el espacio de otro. La maniobra sigue siendo tu responsabilidad y solo es legítima cuando verificas que no genera riesgo. Las alternativas que afirman que las luces te dan preferencia o, peor aún, que te eximen de responsabilidad, son falsas precisamente porque invierten esa lógica. El truco para recordarlo: señalizar es 'pedir permiso y avisar', nunca 'ordenar y tener derecho'."
  },
  {
    "id": 172,
    "question": "Usted se aproxima a un cruce cebra. En la vereda hay peatones esperando cruzar. ¿Qué hace usted?",
    "options": [
      "Disminuye la velocidad y se prepara para detenerse.",
      "Da la pasada a los peatones sólo si éstos son ancianos o niños.",
      "Usa sus luces para indicarles que pueden pasar.",
      "Toca la bocina para indicarles que pueden cruzar."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Al aproximarse a un cruce cebra con peatones esperando para cruzar, debe disminuir la velocidad y prepararse para detenerse, cediéndoles el paso. El peatón tiene prioridad en este tipo de cruce y la conducción debe anticiparse a su paso.",
    "wrongExplanations": [
      "",
      "La preferencia del peatón en el cruce cebra es para todos, no solo para ancianos o niños.",
      "Usar las luces para indicar el paso genera confusión; lo correcto es detenerse y ceder el paso con claridad.",
      "Tocar la bocina intimida al peatón y no corresponde; debe disminuir la velocidad y detenerse."
    ],
    "page": 46,
    "category": "Conduccion segura",
    "deepExplanation": "La conducta correcta es disminuir la velocidad y prepararse para detenerse (a), porque la prioridad del peatón en un cruce cebra se ejerce no solo cuando ya está cruzando, sino también cuando está esperando en la vereda para hacerlo. El fundamento es la conducción defensiva y anticipativa: al ver personas esperando, debes asumir que van a cruzar y reducir velocidad con antelación, de modo que puedas detenerte sin maniobras bruscas. Las otras opciones son incorrectas por distintas razones: ceder el paso solo a ancianos o niños discrimina un derecho que es de todos los peatones; usar las luces para indicarles que pasen o tocar la bocina traslada al peatón una decisión que es responsabilidad tuya y puede inducirlo a cruzar sin que tú realmente te hayas detenido, lo que es muy peligroso. Tu deber es frenar y dejar que crucen, no 'autorizarlos' con señas. La regla mental: peatón esperando en cruce cebra equivale a vehículo que reduce y se prepara para parar."
  },
  {
    "id": 173,
    "question": "Usted conduce un vehículo de marcha lenta por un camino angosto y sinuoso. En estas circunstancias, usted debería ...",
    "options": [
      "circular cerca del centro de la calzada para evitar que otros lo adelanten peligrosamente.",
      "correrse hacia la derecha cuando pueda hacerlo en forma segura, para permitir que otros lo adelanten.",
      "hacer indicaciones con la mano a los otros conductores cuando usted crea que podrán adelantarlo rápidamente.",
      "señalizar con su intermitente derecho cuando adelantar no sea peligroso para los otros."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Conduciendo un vehículo de marcha lenta por un camino angosto y sinuoso, debe correrse hacia la derecha cuando pueda hacerlo en forma segura para permitir que los demás lo adelanten. Esto evita la formación de columnas de vehículos y reduce el riesgo de adelantamientos peligrosos.",
    "wrongExplanations": [
      "Circular cerca del centro para impedir adelantamientos es peligroso y entorpece el tránsito.",
      "",
      "Hacer indicaciones con la mano para que otros adelanten puede inducir maniobras inseguras; cada conductor decide cuándo adelantar.",
      "Indicar con el intermitente que otros pueden adelantar genera confusión y no es la maniobra correcta."
    ],
    "page": 46,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es correrse hacia la derecha cuando puedas hacerlo en forma segura para permitir que otros te adelanten (b). El fundamento es que un vehículo lento en un camino angosto y sinuoso genera detrás suyo una columna de conductores impacientes, y esa impaciencia provoca adelantamientos arriesgados en curvas o sin visibilidad, que son una de las causas más graves de accidentes frontales. Por eso la conducta cooperativa de orillarte y facilitar el paso reduce la presión y permite que cada uno adelante en un punto seguro. Las otras opciones son peligrosas: circular cerca del centro para impedir que te adelanten obstruye deliberadamente y aumenta la frustración y el riesgo; hacer señas con la mano o señalizar con el intermitente derecho para 'autorizar' un adelantamiento traslada al otro una decisión que él debe tomar viendo el camino, y tú no tienes la visibilidad completa de lo que viene de frente. La clave: tu rol como vehículo lento es no obstruir y dejar pasar, no dirigir las maniobras de los demás."
  },
  {
    "id": 174,
    "question": "Usted está circulando por una vía rápida en buenas condiciones. ¿Cómo puede estar seguro de que lo hace a una distancia adecuada del vehículo que va adelante?",
    "options": [
      "La distancia entre usted y el vehículo que va adelante debería ser dos veces el largo de su vehículo.",
      "La distancia entre usted y el vehículo que va adelante debería ser igual a su distancia de frenado.",
      "La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en tres segundos.",
      "La distancia entre usted y el vehículo que va adelante debería ser a lo menos igual a la que usted recorre en un segundo."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La forma segura de mantener distancia con el vehículo de adelante es la regla de los tres segundos: el espacio debe ser al menos igual a lo que usted recorre en tres segundos. Este criterio se adapta automáticamente a la velocidad y da margen suficiente para reaccionar y frenar.",
    "wrongExplanations": [
      "Dos veces el largo del vehículo es una distancia fija e insuficiente a velocidades altas.",
      "La distancia de frenado por sí sola no considera el tiempo de reacción del conductor; la regla práctica es la de los tres segundos.",
      "",
      "Un segundo no entrega margen suficiente para reaccionar y frenar de manera segura."
    ],
    "page": 46,
    "category": "Conduccion segura",
    "deepExplanation": "La forma segura es la regla de los tres segundos (c): la distancia con el vehículo de adelante debe ser al menos la que recorres en tres segundos. Su gran ventaja, y la razón de su fundamento, es que se ajusta sola a la velocidad: a mayor rapidez recorres más metros en esos tres segundos, así que la distancia crece automáticamente sin que tengas que calcular largos de vehículo. En la práctica eliges un punto fijo del camino, como un poste o una marca, y cuando el auto de adelante lo pasa cuentas 'mil uno, mil dos, mil tres'; si tú llegas a ese punto antes de terminar de contar, vas demasiado cerca. Las otras opciones fallan porque dos largos de vehículo es una distancia fija que se queda corta a alta velocidad, igualar tu propia distancia de frenado es difícil de estimar al instante, y un solo segundo no deja margen para reaccionar y frenar. Los tres segundos cubren tanto el tiempo de reacción como parte del frenado, por eso es el criterio recomendado."
  },
  {
    "id": 175,
    "question": "El conductor detrás suyo le sigue muy de cerca. ¿Qué hace usted?",
    "options": [
      "Señaliza a la derecha y le indica con lo mano para que lo adelante.",
      "Disminuye la velocidad y le permite que lo adelante.",
      "No hace nada y se mantiene dentro del límite de velocidad.",
      "Se acerca hacia el centro de la calzada."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si el conductor de atrás lo sigue muy de cerca, lo correcto es no hacer nada brusco y mantenerse dentro del límite de velocidad, conservando su distancia con el vehículo de adelante. Reaccionar de forma agresiva solo aumenta el riesgo; lo prudente es seguir conduciendo de manera segura y predecible.",
    "wrongExplanations": [
      "Señalizar e indicar con la mano para que lo adelanten puede inducir una maniobra insegura y no le corresponde decidir por el otro.",
      "Disminuir la velocidad para que lo adelante puede provocar una maniobra peligrosa; lo prudente es mantener su marcha segura.",
      "",
      "Acercarse al centro de la calzada es peligroso y no soluciona la situación."
    ],
    "page": 46,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es no hacer nada brusco y mantenerse dentro del límite de velocidad (c), conservando tu propia distancia con el vehículo de adelante. El fundamento es que el conductor que te sigue muy de cerca ya está cometiendo una imprudencia, y cualquier reacción tuya destinada a 'corregirlo' suele empeorar las cosas. Por eso las otras alternativas son peligrosas: disminuir la velocidad para que te adelante puede provocar justamente la colisión por alcance que quieres evitar; señalizar e indicarle con la mano que adelante traslada una decisión riesgosa al otro y te involucra si algo sale mal; y acercarte al centro de la calzada invade la pista contraria. Lo más seguro es ser predecible, mantener velocidad y trayectoria estables, y dejar más espacio adelante para tener margen extra de frenado, ya que si tú frenaras suave, ese colchón delantero evita una reacción brusca que el de atrás no alcanzaría a seguir. La idea central: no te dejes provocar; conducir de forma constante y prudente es la mejor defensa."
  },
  {
    "id": 176,
    "question": "Un bus está detenido en una parada delante suyo. El intermitente izquierdo del bus está parpadeando. ¿Qué hace usted?",
    "options": [
      "Hace parpadear sus luces delanteras y disminuye la velocidad.",
      "Toca la bocina y continua.",
      "Disminuye la velocidad y luego toca la bocina.",
      "Disminuye la velocidad y cede el paso al bus, siempre que ello sea seguro."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q176_0.png"
    ],
    "explanation": "Cuando un bus está detenido en una parada con su intermitente izquierdo parpadeando, indica que va a reincorporarse al tránsito. Usted debe disminuir la velocidad y cederle el paso, siempre que ello sea seguro, facilitando la salida del transporte público.",
    "wrongExplanations": [
      "Hacer parpadear las luces genera confusión; lo correcto es ceder el paso al bus si es seguro.",
      "Tocar la bocina y continuar no respeta la reincorporación del bus al tránsito.",
      "Disminuir la velocidad y tocar la bocina no corresponde; lo apropiado es ceder el paso, no bocinear.",
      ""
    ],
    "page": 47,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es disminuir la velocidad y cederle el paso al bus siempre que ello sea seguro (d). El fundamento está en una norma de cortesía y prioridad hacia el transporte público: cuando un bus detenido en una parada enciende su intermitente izquierdo, está señalizando que va a reincorporarse al flujo, y la ley pide a los demás conductores facilitarle esa salida. Esto tiene una lógica práctica, ya que un bus es grande, acelera lento y mueve a muchas personas, de modo que entorpecer su reincorporación afecta a todo el sistema de transporte. La condición 'siempre que sea seguro' es importante: cederle el paso no significa frenar de golpe ni provocar un riesgo para los que vienen detrás de ti, sino ajustar tu velocidad para abrirle el espacio. Las otras opciones son incorrectas: hacer parpadear tus luces o tocar la bocina son señales ambiguas o de apuro que no corresponden, y continuar sin más le niega la preferencia que la norma le reconoce al bus en esa maniobra."
  },
  {
    "id": 177,
    "question": "Usted va conduciendo en una carretera a la velocidad máxima permitida. El conductor que viene detrás suyo está tratando de adelantarlo. ¿Qué hace usted?",
    "options": [
      "Se acerca más al vehículo de adelante para que el conductor que viene atrás no tenga espacio suficiente para el adelantamiento.",
      "Le hace señas al conductor de atrás para que lo adelante, cuando sea seguro hacerlo.",
      "Acelera para alejarse del conductor de atrás.",
      "Mantiene o disminuye la velocidad y permite el adelantamiento."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Si el conductor de atrás intenta adelantarlo, debe mantener o disminuir su velocidad y permitir el adelantamiento. Facilitar la maniobra de forma segura evita situaciones de riesgo y es lo que corresponde a un conductor prudente y cooperador.",
    "wrongExplanations": [
      "Acercarse al vehículo de adelante para quitar espacio al de atrás es una conducta peligrosa e irresponsable.",
      "Hacerle señas para que adelante puede inducir una maniobra insegura; basta con mantener o reducir la velocidad y permitir el paso.",
      "Acelerar para alejarse impide el adelantamiento y crea una situación riesgosa.",
      ""
    ],
    "page": 47,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es mantener o disminuir la velocidad y permitir el adelantamiento (d). El fundamento es que un adelantamiento es una de las maniobras más riesgosas en carretera porque el vehículo que adelanta queda expuesto en la pista contraria, y mientras menos tiempo permanezca ahí, menor es el peligro para todos. Por eso, si tú aceleras o te pegas al de adelante para cerrarle el espacio, prolongas esa exposición y obligas al otro a tomar más riesgos o a abortar la maniobra en mal momento. La trampa de esta pregunta es la opción que propone acelerar para 'alejarte', que en realidad convierte el adelantamiento en una persecución peligrosa, y la que sugiere hacerle señas, que traslada al otro una decisión que él debe tomar con su propia visibilidad. Lo correcto y cooperativo es ser predecible y, si puedes, aflojar un poco para que complete el adelantamiento rápido y seguro. La regla: nunca compitas con quien te adelanta, facilítale el paso."
  },
  {
    "id": 178,
    "question": "Usted se está aproximando a un cruce cuando sorpresivamente un vehículo ingresa a la vía por la que usted va y se ubica delante suyo. ¿Qué hace usted?",
    "options": [
      "Lo esquiva y toca la bocina.",
      "Disminuye la velocidad y está atento para detenerse.",
      "Enciende y apaga sus luces delanteras y continúa muy cerca detrás de él.",
      "Acelera pasándolo inmediatamente."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si un vehículo ingresa sorpresivamente a su vía y se ubica delante suyo, debe disminuir la velocidad y estar atento para detenerse. Así recupera una distancia de seguridad y evita una colisión, priorizando el control de su vehículo por sobre cualquier reacción agresiva.",
    "wrongExplanations": [
      "Esquivar y tocar la bocina es una reacción riesgosa; lo seguro es reducir la velocidad y estar atento.",
      "",
      "Encender y apagar las luces y seguir muy de cerca es peligroso e intimidatorio; debe aumentar la distancia.",
      "Acelerar para pasarlo de inmediato es una maniobra imprudente que puede provocar un accidente."
    ],
    "page": 47,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es disminuir la velocidad y estar atento para detenerse (b). El fundamento es que cuando un vehículo se mete sorpresivamente delante de ti y reduce tu distancia de seguridad, lo prioritario es recuperar ese espacio aflojando el acelerador, de modo que vuelvas a tener margen para reaccionar y frenar si el otro lo hace. Las demás opciones son reacciones de riesgo o de rabia: esquivarlo y tocar la bocina puede llevarte a invadir otra pista o distraerte en un cruce donde justamente debes estar más concentrado; encender y apagar las luces siguiéndolo muy de cerca es una conducta agresiva que reduce aún más tu distancia y aumenta la probabilidad de choque por alcance; y acelerar para pasarlo de inmediato es exactamente lo contrario a lo prudente. El principio que se evalúa es la conducción defensiva: ante una maniobra ajena imprudente, tú no la respondes con otra imprudencia, sino recuperando el control y la distancia. El reflejo correcto es siempre soltar el acelerador y prepararte para frenar."
  },
  {
    "id": 179,
    "question": "Usted va conduciendo a la velocidad máxima permitida. Un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces. ¿Qué hace usted?",
    "options": [
      "Acelera para mantener un espacio adecuado detrás suyo.",
      "Presiona su freno para mostrarle sus luces de freno.",
      "Le permite el adelantamiento.",
      "Aumenta su velocidad y le impide que lo adelante."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si un vehículo se acerca muy rápido por atrás encendiendo y apagando sus luces, lo correcto es permitirle el adelantamiento cuando sea seguro. Facilitar el paso evita conflictos y reduce el riesgo, sin que usted deba competir ni obstaculizar al otro conductor.",
    "wrongExplanations": [
      "Acelerar para mantener distancia no soluciona nada y puede llevarlo a exceder los límites de velocidad.",
      "Frenar para mostrar las luces de freno es una conducta provocadora y peligrosa.",
      "",
      "Aumentar la velocidad para impedir el adelantamiento es agresivo y aumenta el riesgo de accidente."
    ],
    "page": 47,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es permitirle el adelantamiento cuando sea seguro (c). Aunque el otro conductor venga apurado y señalizando de forma molesta con luces, el fundamento es que tu objetivo no es 'darle una lección' ni competir, sino reducir el conflicto y el riesgo total en la vía. Por eso las otras opciones son contraproducentes: acelerar para mantener un espacio detrás tuyo prolonga la situación y te puede llevar a superar el límite de velocidad; frenar para mostrarle tus luces de freno es una maniobra provocadora que puede causar un choque por alcance; y aumentar la velocidad para impedirle el paso transforma el camino en una disputa peligrosa. Permitir que adelante, en cuanto haya un tramo seguro, hace que ese vehículo agresivo se aleje y deje de ser un peligro detrás tuyo. El principio es que mantener la calma y no engancharse con conductores impacientes es parte esencial de la conducción defensiva; el adelantamiento que él haga será su responsabilidad, no la tuya."
  },
  {
    "id": 180,
    "question": "Un espacio entre usted y el vehículo que marcha delante igual a lo que usted recorre en tres segundos es suficiente cuando ...",
    "options": [
      "las condiciones climáticas son buenas.",
      "está lloviendo fuertemente.",
      "recién ha cesado de llover.",
      "hay neblina."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La regla de los tres segundos de distancia es suficiente solo cuando las condiciones climáticas son buenas. Si hay lluvia, neblina o el pavimento está mojado, debe aumentar esa distancia porque la adherencia y la visibilidad disminuyen, alargando la distancia de frenado.",
    "wrongExplanations": [
      "",
      "Con lluvia fuerte el pavimento pierde adherencia, por lo que tres segundos no bastan y debe aumentar la distancia.",
      "Si recién dejó de llover el pavimento sigue mojado y resbaladizo, por lo que necesita más de tres segundos.",
      "Con neblina la visibilidad se reduce, por lo que tres segundos resultan insuficientes y debe aumentar la distancia."
    ],
    "page": 47,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es 'las condiciones climáticas son buenas' (a), y entender el porqué es clave para conducir con seguridad real, no solo para aprobar la prueba. La regla de los tres segundos se calibró pensando en un escenario favorable: pavimento seco, buena visibilidad y neumáticos con adherencia normal. En cuanto cambian esas condiciones, el supuesto deja de cumplirse: con lluvia fuerte, neblina o pavimento recién mojado, la distancia de frenado se alarga porque los neumáticos resbalan más y la visibilidad para detectar el peligro disminuye, de modo que tres segundos ya no alcanzan. Por eso en esos casos debes aumentar el margen a cuatro, cinco o más segundos según lo malas que sean las condiciones. Las otras alternativas son precisamente las situaciones donde los tres segundos resultan insuficientes y la pregunta busca que las descartes. El truco mental: tres segundos es el mínimo para un día perfecto; si el clima empeora, suma segundos."
  },
  {
    "id": 181,
    "question": "Usted está conduciendo al límite de la velocidad máxima permitida y un conductor intenta adelantarlo. ¿Trataría usted de evitar que lo adelante?",
    "options": [
      "No, a menos que sea seguro hacerlo.",
      "Sí, porque el otro conductor está actuando en forma peligrosa.",
      "Sí, porque el otro conductor está infringiendo la ley.",
      "No, en ningún momento."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Aunque usted vaya al límite de velocidad, nunca debe impedir que otro lo adelante. Acelerar, bloquear o estorbar la maniobra de adelantamiento es peligroso y está prohibido; su deber es facilitar la maniobra y, de ser necesario, incluso ceder espacio para que el otro complete el sobrepaso con seguridad.",
    "wrongExplanations": [
      "Condiciona la respuesta a la seguridad, pero la regla es clara: jamás debe usted tratar de evitar que lo adelanten, sin excepciones.",
      "El comportamiento del otro conductor no lo autoriza a usted a obstaculizar; tomarse la justicia por su mano genera más riesgo.",
      "Que el otro infrinja la ley no lo faculta a usted para impedir su maniobra; fiscalizar es tarea de Carabineros, no suya.",
      ""
    ],
    "page": 47,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es la d porque la ley de tránsito impone al conductor que va adelante un deber de cooperación con quien adelanta: la maniobra de adelantamiento es de por sí riesgosa y la norma busca que se realice en el menor tiempo y con el menor peligro posible. Aunque usted circule justo en el límite legal, no le corresponde a usted hacer cumplir la ley acelerando ni cerrándole el paso al otro; eso se llama tomar la justicia por la propia mano al volante y multiplica el riesgo. Si usted acelera mientras el otro está a su costado en sentido contrario o en la pista de adelantamiento, lo deja expuesto durante más tiempo a un choque frontal o lateral. El razonamiento es simple: el peligro de la maniobra no depende de quién tiene la razón, sino de cuánto dura la situación de exposición, así que su obligación es mantener velocidad estable o incluso levantar el pie para acortar el sobrepaso. Un buen truco para recordarlo es pensar que adelantar es como un puente angosto: mientras alguien está cruzando, lo último que se hace es moverlo o empujarlo. La consecuencia real de estorbar es provocar una colisión que usted, además, podría tener que responder legalmente."
  },
  {
    "id": 182,
    "question": "De los siguientes factores, ¿cuál es el que con mayor frecuencia se presenta en las colisiones por la parte trasera?",
    "options": [
      "El conducir demasiado cerca del vehículo que va adelante.",
      "El cambio repentino de las luces de los semáforos.",
      "La existencia de peatones que cruzan en áreas muy concurridas.",
      "El detenerse en todos los cruces."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Las colisiones por alcance (por la parte trasera) se producen principalmente porque el conductor de atrás no respeta la distancia de seguimiento. Al ir demasiado cerca, no alcanza a reaccionar ni frenar a tiempo cuando el vehículo de adelante se detiene. Por eso debe mantenerse siempre una distancia prudente, como la regla de los dos segundos.",
    "wrongExplanations": [
      "",
      "El cambio de luces del semáforo es previsible y no es la causa más frecuente; lo determinante es la falta de distancia para reaccionar.",
      "Los peatones que cruzan se asocian a atropellos, no a las colisiones traseras entre vehículos.",
      "Detenerse en los cruces es una conducta correcta y obligatoria; no es la causa de las colisiones por alcance."
    ],
    "page": 48,
    "category": "Senales y semaforos",
    "deepExplanation": "La alternativa a es la correcta porque la mayoría de las colisiones por alcance nacen de un solo error de fondo: ir demasiado pegado al vehículo de adelante, lo que elimina el espacio y el tiempo que su cerebro y sus frenos necesitan para responder. Hay que entender que frenar no es instantáneo: primero ocurre el tiempo de percepción y reacción (alrededor de un segundo o más), durante el cual el auto sigue avanzando, y recién después actúa la distancia de frenado propiamente tal. Si usted va muy cerca, ese primer tramo ya se le acaba el espacio antes siquiera de pisar el freno, y por eso choca por detrás. Las otras opciones describen situaciones que existen, pero no son la causa frecuente: el semáforo o los peatones son gatillos puntuales, mientras que la distancia corta es el factor estructural presente una y otra vez. La herramienta práctica es la regla de los dos segundos: cuando el vehículo de adelante pase por un punto fijo (un poste, una sombra), usted debería contar dos segundos completos antes de llegar al mismo punto, y con lluvia o noche, duplicarlo a cuatro. Mantener esa distancia es, estadísticamente, la forma más efectiva de no ser el conductor que choca por atrás."
  },
  {
    "id": 183,
    "question": "Usted está esperando poder incorporarse a una vía principal desde una calle lateral. ¿Por qué razón debería usted poner especial atención a las motocicletas?",
    "options": [
      "Porque generalmente las motocicletas circulan más rápido que los autos.",
      "Porque las patrullas de Carabineros suelen andar en motocicletas.",
      "Porque las motocicletas son pequeñas y difíciles de ver.",
      "Porque las motocicletas tienen el derecho preferente de paso."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Las motocicletas tienen un perfil pequeño y estrecho, por lo que son difíciles de ver y resulta complejo calcular la velocidad y distancia a la que se aproximan. Al incorporarse desde una calle lateral, una moto puede pasar desapercibida tras otros vehículos u obstáculos, por eso debe usted mirar con especial atención antes de avanzar.",
    "wrongExplanations": [
      "No es cierto que las motos circulen siempre más rápido; el problema real es su escasa visibilidad, no su velocidad.",
      "Que Carabineros use motocicletas no tiene relación con la precaución que se debe tener al incorporarse a la vía.",
      "",
      "La preferencia de paso la define la situación de la vía, no el tipo de vehículo; el motivo del cuidado es que son difíciles de ver."
    ],
    "page": 49,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La opción c es correcta porque la motocicleta presenta un perfil frontal pequeño y estrecho que la hace literalmente difícil de detectar, sobre todo cuando usted espera incorporarse desde una calle lateral y su vista barre rápidamente la vía principal buscando autos. El problema no es solo verla, sino calcular bien su velocidad y la distancia a la que viene: un objeto pequeño tiende a percibirse como más lejano y más lento de lo que realmente está, error de percepción que provoca muchos accidentes en los que el conductor dice no la vi venir o pensé que alcanzaba. Las otras alternativas son trampas: las motos no tienen derecho preferente por ser motos, no todas son de Carabineros, y aunque puedan ir rápido, el motivo real del cuidado es la dificultad de verlas y evaluarlas. Una moto puede además quedar oculta tras un poste, un árbol o la columna de otro auto justo en el instante en que usted mira. El truco es mirar dos veces antes de avanzar: una primera mirada general y una segunda mirada específica buscando algo pequeño y de un solo faro. La consecuencia de no hacerlo es una colisión donde el motociclista, sin carrocería que lo proteja, lleva siempre la peor parte."
  },
  {
    "id": 184,
    "question": "¿Cuál de los siguientes grupos de conductores tiene mayores probabilidades de verse involucrado en un accidente de tránsito?",
    "options": [
      "Los que tienen menos de 25 años.",
      "Los que tienen entre 36 y 45 años.",
      "Los que tienen entre 46 y 55 años.",
      "Los que tienen más de 55 años."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Las estadísticas de siniestralidad muestran que los conductores menores de 25 años son los más propensos a verse involucrados en accidentes. Esto se debe a su menor experiencia al volante, mayor tendencia a la imprudencia y a subestimar los riesgos. Por eso se les considera el grupo de mayor riesgo.",
    "wrongExplanations": [
      "",
      "Entre 36 y 45 años los conductores ya tienen experiencia consolidada, por lo que su riesgo es menor que el de los jóvenes.",
      "El grupo de 46 a 55 años suele conducir con prudencia y experiencia, no es el de mayor riesgo.",
      "Aunque los mayores de 55 pueden tener algunas limitaciones, estadísticamente no son el grupo con más accidentes; lo son los menores de 25."
    ],
    "page": 49,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta es a porque las estadísticas de siniestralidad, tanto en Chile como a nivel internacional, muestran de forma consistente que los conductores menores de 25 años concentran la mayor probabilidad de verse involucrados en accidentes. Esto tiene una explicación que va más allá de la edad como número: combina poca experiencia al volante, un cerebro que a esa edad todavía tiende a subestimar el riesgo y a sobreestimar las propias capacidades, y conductas más frecuentes como el exceso de velocidad, las distracciones y la conducción nocturna o en grupo. La experiencia importa porque conducir bien es, en gran parte, reconocer peligros antes de que ocurran, y eso solo se aprende con kilómetros recorridos. Por eso muchas legislaciones aplican licencias graduales o restricciones a conductores nuevos. No confunda esto con que los mayores de 55 conduzcan perfecto; lo que dice la pregunta es dónde está la mayor probabilidad estadística, y esa cae claramente en los más jóvenes. El dato para recordarlo es que el grupo de mayor riesgo es justamente el que recién obtiene su licencia: menos experiencia más sensación de invulnerabilidad es la mezcla que más siniestros produce."
  },
  {
    "id": 185,
    "question": "En una zona rural, usted va conduciendo por un camino muy angosto. ¿Dónde le resultaría más difícil ver personas a caballo que avanzan delante suyo?",
    "options": [
      "Al ir usted bajando un cerro.",
      "Al ir ellas subiendo un cerro.",
      "Al ir usted en una curva a la izquierda.",
      "Al ir usted en una curva a la derecha."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "En un camino angosto, una curva hacia la derecha le quita visibilidad de lo que va delante por su propio costado, ya que la trayectoria se cierra hacia ese lado y la vista queda obstruida. Por eso le resultaría más difícil ver a las personas a caballo que avanzan adelante. Debe reducir la velocidad y estar preparado para detenerse.",
    "wrongExplanations": [
      "Al bajar un cerro generalmente mejora la visibilidad hacia adelante, no la dificulta.",
      "Que ellas suban un cerro no es lo que más reduce su visibilidad en un camino angosto.",
      "En una curva a la izquierda la trayectoria tiende a abrir el campo visual hacia adelante, dificultando menos la visión.",
      ""
    ],
    "page": 49,
    "category": "Conduccion segura",
    "deepExplanation": "La alternativa correcta es la d porque en un camino angosto una curva hacia la derecha cierra su trayectoria hacia ese mismo lado y la visibilidad de lo que viene adelante por la orilla derecha queda tapada por el propio borde del camino, la vegetación, un muro o un cerro. Como las personas a caballo deben ir por la orilla derecha de la calzada, quedan precisamente en el punto ciego que esa curva le genera, apareciendo de golpe cuando usted ya está encima. Conviene visualizarlo: en una curva a la izquierda usted abre la vista hacia adelante y alcanza a ver más lejos por la derecha, pero en una curva a la derecha la línea de visión se acorta y lo que está pegado a esa orilla se le esconde hasta el último momento. Por eso las otras opciones son menos críticas: subir o bajar un cerro afecta más la pendiente que la visibilidad lateral inmediata. La regla práctica es entrar a toda curva ciega a la derecha como si detrás de ella hubiera algo lento o detenido: un jinete, un peatón, un ciclista o un vehículo. Reduzca la velocidad de modo de poder detenerse dentro del tramo de camino que efectivamente alcanza a ver."
  },
  {
    "id": 186,
    "question": "Usted va detrás de un camión articulado que se aproxima a un cruce. Su conductor señaliza hacia la derecha pero el vehículo se desplaza hacia la izquierda. ¿Qué debe hacer usted?",
    "options": [
      "Advertirle al conductor acerca de su señal equivocada.",
      "Esperar detrás del camión.",
      "Denunciar a Carabineros al conductor.",
      "Pasar al camión por la derecha."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q186_0.png"
    ],
    "explanation": "Los camiones articulados necesitan ocupar un espacio mayor para girar, por lo que a veces se desplazan hacia el lado contrario antes de doblar (por ejemplo, abren hacia la izquierda para virar a la derecha). Lo más seguro es esperar pacientemente detrás del camión hasta entender hacia dónde se dirige, sin intentar adelantarlo. Así evita quedar atrapado en el ángulo de giro del vehículo.",
    "wrongExplanations": [
      "Intentar advertirle distrae y no es necesario; el camión podría simplemente estar maniobrando para virar.",
      "",
      "Denunciar no corresponde, ya que probablemente el conductor está realizando una maniobra normal de giro amplio.",
      "Pasarlo por la derecha es muy peligroso, pues es justo hacia donde el camión podría completar su giro y atraparlo."
    ],
    "page": 49,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es la b porque un camión articulado, por su largo y su punto de pivote entre el tractor y el remolque, necesita ocupar un espacio mucho mayor para girar y muchas veces abre primero hacia el lado contrario antes de doblar; por eso puede señalizar a la derecha y desplazarse hacia la izquierda. Lo que parece un error o una señal equivocada es en realidad la maniobra normal de un vehículo largo que va a virar a la derecha cerrado: se corre a la izquierda para que el remolque no monte la vereda ni atropelle al cerrar la curva. Lo peor que usted podría hacer es interpretar ese hueco a la derecha como una invitación a pasarlo, porque quedaría justo dentro del ángulo de giro y el remolque lo aplastaría contra la vereda al cerrar; ese es el clásico punto ciego mortal de los camiones. Tampoco corresponde tocarle la bocina ni denunciarlo, porque no está cometiendo infracción. La actitud segura es esperar pacientemente detrás, dándole espacio, hasta confirmar hacia dónde efectivamente se va. El truco es recordar que con un camión largo nunca se entra al espacio que él acaba de dejar libre, porque casi siempre lo va a volver a ocupar."
  },
  {
    "id": 187,
    "question": "En una carretera de doble calzada con 2 pistas por sentido de tránsito, usted desea pasar al vehículo que va delante suyo. Por su espejo retrovisor ve que el auto que viene atrás se está cambiando de pista para sobrepasarlo a usted. ¿Qué debería hacer usted?",
    "options": [
      "Señalizar y luego cambiar de pista para sobrepasar.",
      "Señalizar para indicarle al conductor que viene atrás que usted también desea sobrepasar.",
      "Presionar levemente el pedal de frenos para mostrar sus luces de freno.",
      "No señalizar hasta que el auto lo haya pasado."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Si el vehículo de atrás ya inició su maniobra de sobrepaso, usted debe dejarlo pasar primero y no señalizar su intención de adelantar hasta que ese auto lo haya superado. Señalizar o cambiarse en ese momento generaría confusión y un riesgo de colisión. La seguridad exige respetar al que ya está adelantando.",
    "wrongExplanations": [
      "Cambiarse de pista cuando alguien ya viene sobrepasándolo provocaría una colisión; debe esperar.",
      "Señalizar en ese instante confunde al conductor de atrás que ya está adelantando y aumenta el riesgo.",
      "Frenar levemente es una maniobra brusca e innecesaria que puede sorprender al de atrás y provocar un accidente.",
      ""
    ],
    "page": 49,
    "category": "Conduccion segura",
    "deepExplanation": "La alternativa correcta es la d porque si por el espejo usted ya ve que el auto de atrás se cambió de pista e inició su sobrepaso, ese conductor tiene la prioridad de hecho de la maniobra y usted debe esperar a que lo supere antes de hacer cualquier cosa. Señalizar en ese instante es peligroso porque le anuncia una intención que va a ejecutar al mismo tiempo que el otro está pasando, generando una situación ambigua en la que ambos podrían terminar invadiendo la misma pista a la vez. La conducción segura se basa en que las maniobras se hagan una a la vez y con previsibilidad: primero termina la del que ya está en curso y recién después comienza la suya. Las otras opciones agravan el riesgo: cambiarse de pista provocaría una colisión lateral, y señalizar o frenar para comunicarse solo confunde al de atrás. Lo correcto es mantener su velocidad y trayectoria estables, dejar que el auto lo pase por completo, y entonces revisar de nuevo el espejo, señalizar y adelantar usted. El principio para recordarlo es no señalizar hasta que el camino que necesita esté realmente libre; anunciar una maniobra que aún no puede hacer es tan peligroso como hacerla."
  },
  {
    "id": 188,
    "question": "Un vehículo emerge sorpresivamente desde una vía lateral situándose delante suyo y obligándolo a frenar fuertemente. ¿Qué hace usted?",
    "options": [
      "Enciende y apaga sus luces para manifestarle su enojo.",
      "Ignora el error y permanece calmado.",
      "Toca la bocina para demostrar su enojo.",
      "Lo adelanta dejándolo atrás lo antes posible."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Ante el error de otro conductor, lo correcto es ignorar la falta y mantener la calma. Reaccionar con enojo solo aumenta la tensión y el riesgo de un incidente mayor. La conducción defensiva y serena es la mejor herramienta para evitar accidentes y conflictos viales.",
    "wrongExplanations": [
      "Encender y apagar las luces para manifestar enojo es una conducta agresiva que no aporta seguridad.",
      "",
      "Tocar la bocina por enojo es un mal uso de ella y aumenta la tensión innecesariamente.",
      "Adelantarlo apurado para dejarlo atrás es una reacción impulsiva y riesgosa, no una conducción segura."
    ],
    "page": 49,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la b porque, frente al error de otro conductor que lo obligó a frenar fuerte, lo más seguro es ignorar la falta y permanecer calmado, ya que su objetivo número uno tras evitar el choque es no escalar la situación. Reaccionar con bocinazos, luces o adelantándolo con rabia es lo que se conoce como agresividad vial, y solo agrega tensión, distracción y la posibilidad de que ese intercambio termine en una maniobra brusca o un incidente mayor entre ambos. Recuerde que usted ya logró lo importante (frenó y evitó el accidente), de modo que la energía que gaste en demostrar enojo es energía que le quita atención a seguir conduciendo de forma defensiva. La conducción defensiva parte de aceptar que los demás cometen errores y que no es su tarea castigarlos en la vía, sino protegerse de ellos. Un dato útil es que el enojo eleva el pulso y estrecha la atención, justo lo contrario de lo que se necesita para manejar bien en los segundos siguientes. El truco mental es respirar, soltar y seguir: la calma no es debilidad, es la herramienta que mantiene la situación bajo control."
  },
  {
    "id": 189,
    "question": "Usted se detiene ante un cruce cebra. En la vereda hay peatones esperando, pero ellos no comienzan a cruzar. ¿Qué hace usted?",
    "options": [
      "Les toca la bocina para apurarlos.",
      "Tiene paciencia y espera.",
      "Prosigue su marcha.",
      "Les hace señas con la mano apurándolos para que crucen."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Si los peatones no comienzan a cruzar, lo correcto es tener paciencia y esperar, ya que ellos tienen preferencia en el cruce cebra. Pueden estar dudando, esperando que usted se detenga del todo, o necesitar más tiempo. Nunca debe presionarlos ni avanzar mientras estén junto al cruce.",
    "wrongExplanations": [
      "Tocar la bocina para apurarlos los asusta y presiona; ellos tienen la preferencia en el cruce.",
      "",
      "Proseguir la marcha es peligroso, pues los peatones podrían iniciar el cruce y usted ya se comprometió a cederles el paso.",
      "Hacerles señas para apurarlos genera confusión y puede inducirlos a cruzar sin que la situación sea segura."
    ],
    "page": 50,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la b porque en un cruce cebra los peatones tienen la preferencia de paso, y si están esperando en la vereda pero aún no se deciden a cruzar, su deber es tener paciencia y esperar, no presionarlos. Muchas veces el peatón duda porque no está seguro de que usted realmente se vaya a detener, o porque hay un niño, un adulto mayor o alguien con movilidad reducida que necesita unos segundos más; tocar la bocina o hacerles señas para apurarlos los puede confundir o hacerlos cruzar antes de mirar bien, generando el riesgo de que avancen justo cuando otro vehículo no se detiene. Avanzar usted mientras ellos siguen junto al cruce es directamente un peligro de atropello y una infracción. El principio de fondo es que en la cebra el más débil manda, y a usted, protegido por la carrocería, le toca ceder y dar seguridad. Un detalle práctico es que un gesto de mano invitando a cruzar puede ser malinterpretado y crear responsabilidad si el peatón cruza confiado y aparece otro auto; por eso lo más limpio es simplemente quedarse detenido, sin gestos, y dejar que el peatón decida cuándo y cómo cruzar."
  },
  {
    "id": 190,
    "question": "Cuando el viento sopla muy fuertemente usted necesita tener especial cuidado ...",
    "options": [
      "al usar los frenos.",
      "al comenzar a subir una pendiente.",
      "al virar hacia un camino angosto.",
      "al pasar cerca de ciclistas."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Con viento fuerte debe tener especial cuidado al pasar cerca de ciclistas, ya que las ráfagas pueden desestabilizarlos y desviarlos hacia su trayectoria. Los vehículos de dos ruedas son muy vulnerables al viento. Por eso debe reducir la velocidad y dejarles mayor espacio lateral al adelantarlos.",
    "wrongExplanations": [
      "El viento no afecta de manera relevante el uso de los frenos.",
      "Subir una pendiente no es la situación de mayor riesgo asociada al viento fuerte.",
      "Virar hacia un camino angosto no es lo que el viento vuelve especialmente peligroso.",
      ""
    ],
    "page": 50,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la d porque el viento fuerte afecta de manera crítica a los vehículos de dos ruedas, y al pasar cerca de un ciclista una ráfaga puede empujarlo lateralmente y desviarlo justo hacia su trayectoria. El ciclista tiene muy poca masa y una superficie expuesta grande, por lo que el viento lo desestabiliza con facilidad, y el problema se agrava porque su propio vehículo, al adelantarlo, genera primero una zona de turbulencia y luego una succión que lo zamarrea aún más. Por eso el cuidado no es solo no chocarlo, sino anticipar que puede moverse de forma involuntaria en el peor momento. Las otras opciones tienen menos relación directa con el viento lateral: frenar, subir una pendiente o virar a un camino angosto se ven poco alterados por una ráfaga en comparación con la vulnerabilidad de un ciclista. La conducta correcta es reducir la velocidad y dejarle bastante más espacio lateral del habitual al sobrepasarlo, para que aunque el viento lo corra, usted tenga margen de sobra. El truco para recordarlo es que con viento fuerte todo lo que tiene dos ruedas se vuelve impredecible, así que se les pasa lento y bien apartado."
  },
  {
    "id": 191,
    "question": "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué debe hacer usted?",
    "options": [
      "Hacerles señas con la mano para que continúen.",
      "Tocar la bocina para hacerles notar que usted está ahí.",
      "Esperar que crucen.",
      "Encender sus luces de advertencia de peligro."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q191_0.png"
    ],
    "explanation": "Cuando los peatones ya están atravesando la calle hacia la que usted vira, ellos tienen la preferencia de paso y usted debe esperar a que terminen de cruzar. Virar mientras cruzan los pone en riesgo directo de atropello. La paciencia y ceder el paso al peatón es obligatoria.",
    "wrongExplanations": [
      "Hacerles señas para que continúen puede confundirlos y no le corresponde a usted dirigir el tránsito peatonal.",
      "Tocar la bocina los asusta innecesariamente; ellos ya tienen la preferencia y usted solo debe esperar.",
      "",
      "Encender las luces de advertencia no resuelve la situación; lo que corresponde es detenerse y esperar que crucen."
    ],
    "page": 50,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la c porque cuando los peatones ya están atravesando la calle hacia la cual usted está virando, ellos gozan de la preferencia de paso y su única obligación es esperar a que terminen de cruzar antes de completar el giro. Esto tiene una base lógica de prioridades: el peatón que ya inició el cruce está en la posición más vulnerable y comprometida, y cualquier avance suyo lo pone en riesgo directo de atropello, porque al virar usted invade exactamente el espacio que él está ocupando. Las otras alternativas son peligrosas o inútiles: hacerles señas para que continúen traslada a usted una responsabilidad indebida si aparece otro vehículo, tocar la bocina solo los asusta o apura, y encender las balizas no resuelve nada ni les da seguridad. El razonamiento del examen es siempre el mismo en estas situaciones: ante un peatón cruzando, el vehículo cede y espera, sin gestos ni presión. Un buen recordatorio es que virar es un movimiento que usted controla por completo, así que siempre puede esperar; el peatón, en cambio, no puede esquivar una tonelada de auto. Paciencia primero, giro después."
  },
  {
    "id": 192,
    "question": "En un cruce hay peatones atravesando la calle hacia la cual usted está virando. ¿Qué hace usted?",
    "options": [
      "Espera permitiéndoles que crucen.",
      "Continúa ya que usted tiene el derecho preferente de paso.",
      "Les hace señas para que retrocedan.",
      "Les toca la bocina para advertirles su presencia."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q192_0.png"
    ],
    "explanation": "Al igual que en la situación anterior, si hay peatones cruzando la calle hacia la que usted dobla, debe esperar y permitirles que terminen de cruzar. El peatón tiene preferencia y su seguridad es prioritaria. Avanzar o presionarlos constituye una infracción grave y un peligro de atropello.",
    "wrongExplanations": [
      "",
      "El peatón que ya está cruzando tiene la preferencia; usted no tiene derecho preferente sobre él.",
      "Hacerles señas para que retrocedan los confunde y los expone; lo correcto es dejarlos completar el cruce.",
      "Tocar la bocina los asusta y presiona innecesariamente, en lugar de cederles el paso con calma."
    ],
    "page": 50,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es la a porque, igual que en la situación equivalente anterior, si hay peatones cruzando la calle hacia la que usted dobla, lo único correcto es esperar y permitirles que terminen de cruzar, ya que la preferencia de paso es suya, del peatón. Conviene fijar este patrón porque el examen lo repite con distinta redacción justamente para verificar que usted internalizó el principio y no responde de memoria a una frase puntual: en cualquier giro donde haya un peatón ya cruzando, la respuesta siempre es ceder. La opción que dice que usted tiene el derecho preferente es la trampa clásica, porque al virar usted no tiene preferencia sobre el peatón que cruza la vía de destino; al revés, debe cederla. Hacerles señas para que retrocedan o tocarles la bocina son maniobras que generan confusión y peligro, ya que un peatón a mitad de calzada que retrocede o se detiene confundido queda más expuesto aún. La consecuencia de no respetar esto es un atropello y una infracción grave a la ley de tránsito. La regla mental para no fallar nunca es: si vira y hay alguien cruzando, frene y espere, sin importar cómo esté formulada la pregunta."
  },
  {
    "id": 193,
    "question": "¿Dónde debe tener usted especial cuidado con los motociclistas?",
    "options": [
      "En una estación de servicio.",
      "En los cruces de calles.",
      "En las proximidades de un área de servicio.",
      "Al ingresar a un recinto o área de estacionamientos."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Debe tener especial cuidado con los motociclistas en los cruces de calles, ya que es donde se producen la mayoría de las colisiones con ellos. Por su tamaño reducido son difíciles de ver y pueden aparecer entre los vehículos o desde ángulos poco visibles. Antes de cruzar o virar, mire siempre dos veces para detectarlos.",
    "wrongExplanations": [
      "Una estación de servicio no es el lugar de mayor riesgo de colisión con motos.",
      "",
      "Las proximidades de un área de servicio no concentran los accidentes con motociclistas como sí lo hacen los cruces.",
      "Al ingresar a un estacionamiento la velocidad es baja; el verdadero punto crítico son los cruces de calles."
    ],
    "page": 50,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La respuesta correcta es la b porque los cruces de calles concentran la mayor proporción de colisiones entre vehículos y motociclistas, y por eso es ahí donde debe extremar el cuidado con ellos. En una intersección convergen trayectorias desde varias direcciones, hay giros, hay que evaluar distancias y velocidades en poco tiempo, y justamente la moto, por su perfil pequeño y estrecho, es la que más fácilmente pasa desapercibida en ese contexto saturado de información. El conductor que dobla o que cruza muchas veces mira buscando autos y su cerebro descarta el objeto pequeño, o la moto queda oculta tras la columna del parabrisas o detrás de otro vehículo justo en el instante decisivo. Las otras opciones, como una estación de servicio o un estacionamiento, implican velocidades bajas y entornos más controlados, por lo que el riesgo de un impacto grave es mucho menor que en un cruce. El truco que enseñan los instructores es mirar dos veces en cada intersección, una mirada general y otra específica buscando algo angosto y con un solo faro, antes de cruzar o virar. Recuerde que en la moto el conductor no tiene carrocería: en un cruce, no verlo a tiempo suele significar una lesión grave o fatal."
  },
  {
    "id": 194,
    "question": "Cuando conduce en la ciudad ¿por qué razón debería usted tener cuidado al cruzarse con un bus que se encuentra detenido en una parada?",
    "options": [
      "Porque el bus puede estar en pana.",
      "Porque el bus puede ponerse en movimiento repentinamente.",
      "Porque pueden aparecer peatones detrás del bus.",
      "Porque el bus puede permanecer detenido."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "El principal riesgo al cruzarse con un bus detenido en una parada es que aparezcan peatones cruzando por delante o por detrás del bus, ya que este los oculta de su vista. Personas que bajaron del bus suelen cruzar la calzada de forma imprevista. Por eso debe reducir la velocidad y estar atento a posibles peatones.",
    "wrongExplanations": [
      "Que el bus esté en pana no representa el peligro principal para usted como conductor que se cruza.",
      "Aunque el bus puede partir, el riesgo más grave y frecuente es la aparición de peatones ocultos tras él.",
      "",
      "Que el bus permanezca detenido no constituye un peligro; el riesgo es lo que el bus oculta a su vista."
    ],
    "page": 51,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la c porque un bus detenido en una parada es, sobre todo, una pantalla que oculta peatones: personas que acaban de bajar suelen cruzar la calzada por delante o por detrás del bus de forma imprevista, y usted no las ve hasta que aparecen ya en su camino. Este es uno de los riesgos más subestimados de la conducción urbana, porque el peatón que cruza tapado por el bus no lo ve a usted ni usted a él, y ambos se encuentran de golpe. Aunque también es cierto que un bus puede ponerse en movimiento o quedarse detenido, esas situaciones son más previsibles y menos letales que el atropello de alguien que sale corriendo entre los vehículos. Por eso la respuesta apunta al peligro humano oculto. La conducta correcta al cruzarse o pasar junto a un bus en parada es reducir la velocidad y cubrir el freno, anticipando que en cualquier momento puede surgir una persona, especialmente niños, que son más bajos y más impulsivos. El truco para recordarlo es que todo bus detenido tiene peatones invisibles a su alrededor, así que se le pasa lento y listo para frenar."
  },
  {
    "id": 195,
    "question": "Usted se encuentra muy próximo a un cruce en el que pretende virar a la derecha. Delante suyo va un c iclista. ¿Qué hace usted?",
    "options": [
      "Adelanta al ciclista antes del cruce.",
      "Rodea al ciclista en el cruce.",
      "Se mantiene detrás del ciclista hasta que éste haya pasado la intersección.",
      "Se sitúa al lado del ciclista, sigue en línea recta y desiste de virar."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si va a virar a la derecha y delante suyo va un ciclista, debe mantenerse detrás de él hasta que haya cruzado la intersección. Adelantarlo y luego doblar lo cortaría peligrosamente, ya que el ciclista podría seguir recto. La paciencia evita atropellos en una de las maniobras más riesgosas para los ciclistas.",
    "wrongExplanations": [
      "Adelantar al ciclista antes del cruce y luego virar lo cortaría, exponiéndolo a un atropello.",
      "Rodear al ciclista en el cruce es una maniobra peligrosa que invade su trayectoria.",
      "",
      "Situarse a su lado y desistir de virar no corresponde a la maniobra correcta y genera confusión; lo seguro es mantenerse detrás."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la c porque cuando usted va a virar a la derecha y adelante suyo va un ciclista, lo seguro es mantenerse detrás de él hasta que haya pasado la intersección, en lugar de adelantarlo y doblar. El peligro concreto se llama el corte al ciclista: si usted lo sobrepasa y enseguida cierra hacia la derecha para doblar, le cruza la trayectoria justo cuando él podría seguir recto, y como van casi a la par, el ciclista no alcanza a frenar ni a esquivar y termina chocando contra el costado de su auto. Esta maniobra es una de las causas más frecuentes de atropello a ciclistas en zonas urbanas precisamente porque el conductor cree que alcanza a pasar. Las otras opciones lo confirman: adelantarlo antes del cruce o rodearlo dentro de la intersección crea exactamente ese conflicto de trayectorias, y ponerse a su lado y desistir de virar es innecesario. El principio es simple: nunca adelante a un ciclista si va a doblar inmediatamente hacia el lado donde él circula. La regla práctica es ganar unos segundos de paciencia quedándose detrás; perder ese sobrepaso no le cuesta nada, pero hacerlo mal puede costarle la vida al ciclista."
  },
  {
    "id": 196,
    "question": "Usted va conduciendo por un camino de doble tránsito cuando se encuentra con personas que van a caballo delante suyo. ¿Qué es lo primero que usted debería hacer?",
    "options": [
      "Desplazarse hacia el centro de la calzada.",
      "Acelerar alrededor de ellos.",
      "Señalizar hacia la izquierda.",
      "Prepararse para reducir la velocidad."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Al encontrarse con personas a caballo en un camino de doble tránsito, lo primero que debe hacer es prepararse para reducir la velocidad. Los caballos son animales impredecibles que pueden asustarse, por lo que hay que aproximarse con cautela. Disminuir la velocidad le da margen para reaccionar y adelantar con seguridad cuando sea posible.",
    "wrongExplanations": [
      "Desplazarse al centro de la calzada lo expone al tránsito en sentido contrario; primero hay que reducir velocidad.",
      "Acelerar alrededor de ellos asusta a los caballos y es muy peligroso.",
      "Señalizar a la izquierda no es lo primero que corresponde; antes debe disminuir la velocidad y evaluar.",
      ""
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la d porque al encontrarse con personas a caballo delante suyo en un camino de doble tránsito, lo primero y más importante es prepararse para reducir la velocidad, ya que el caballo es un animal vivo e impredecible que puede asustarse con un ruido, un movimiento brusco o un vehículo que se acerca rápido. Reducir la velocidad es lo primero porque es lo que le da margen de tiempo y de reacción ante cualquier reacción inesperada del animal; recién con esa base puede luego evaluar si es seguro adelantar. Las otras opciones son riesgosas o prematuras: acelerar alrededor de ellos es justamente lo que puede espantar al caballo, desplazarse al centro de la calzada lo expone al tránsito que viene en sentido contrario, y señalizar a la izquierda sin antes bajar la velocidad pone el carro delante de los bueyes. La secuencia correcta de toda aproximación delicada es primero frenar y observar, después decidir la maniobra. El dato para recordarlo es que ante caballos, peatones o cualquier elemento impredecible en la vía, lo primero siempre es soltar el acelerador y estar listo para detenerse; la prudencia se gana levantando el pie antes que cualquier otra acción."
  },
  {
    "id": 197,
    "question": "¿Cómo debería usted adelantar a personas que van a caballo?",
    "options": [
      "Conduciendo lentamente y dejando bastante espacio lateral.",
      "Pasando cerca de ellas y adelantándolas lo antes posible.",
      "La velocidad no es importante, pero sí el dejar suficiente espacio lateral.",
      "Tocando la bocina sólo una vez como señal de advertencia."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "A las personas que van a caballo se las debe adelantar conduciendo lentamente y dejando bastante espacio lateral. Una velocidad baja evita asustar al animal, y el amplio espacio lo protege ante un movimiento brusco del caballo. Ambos elementos, lentitud y distancia, son igualmente necesarios.",
    "wrongExplanations": [
      "",
      "Pasar cerca y rápido es justamente lo contrario de lo correcto: asusta al caballo y pone en peligro al jinete.",
      "La velocidad sí importa: ir lento es tan necesario como dejar espacio, porque un motor acelerado puede espantar al animal.",
      "Tocar la bocina puede asustar al caballo y provocar una reacción peligrosa del animal."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la a porque adelantar a personas que van a caballo exige las dos cosas a la vez: ir lentamente y dejar bastante espacio lateral, no una sola de ellas. La velocidad baja es clave porque el ruido y el desplazamiento de aire de un vehículo que pasa rápido pueden asustar al caballo, y un animal asustado puede encabritarse o moverse de golpe hacia la calzada, justo donde está usted. El amplio espacio lateral cumple la función de seguridad por si eso ocurre: si el caballo da un salto o se desvía, ese margen extra es lo que evita el contacto. Por eso la opción que dice que la velocidad no importa mientras haya espacio es incorrecta, porque ignora que la propia velocidad es lo que gatilla el susto del animal; ambos factores se necesitan juntos. Tampoco corresponde tocar la bocina, ni siquiera una vez, porque el bocinazo es precisamente uno de los sonidos que más espantan a un caballo. El truco para recordarlo es tratar al caballo como algo que puede explotar en cualquier momento: se le pasa despacio para no provocarlo y bien apartado para tener escape si reacciona."
  },
  {
    "id": 198,
    "question": "Usted va circulando a 65km/h aproximadamente cuando, lamentablemente, atropella a un peatón. A esa velocidad, ....",
    "options": [
      "es seguro que el peatón morirá.",
      "es muy probable que el peatón muera.",
      "es seguro que el peatón sobrevivirá.",
      "es muy probable que el peatón sobreviva."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "A unos 65 km/h, el impacto sobre un peatón es de tal magnitud que es muy probable que muera. La energía del choque aumenta con el cuadrado de la velocidad, por lo que a esa rapidez las lesiones suelen ser fatales. Esto demuestra por qué respetar los límites de velocidad salva vidas.",
    "wrongExplanations": [
      "No es absolutamente seguro que muera; siempre existe una posibilidad de sobrevida, aunque sea muy baja.",
      "",
      "Es falso que sobreviva con seguridad: a 65 km/h el riesgo de muerte es altísimo.",
      "A esa velocidad la probabilidad de sobrevivir es baja, no alta; lo más probable es la muerte."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la b porque a unos 65 km/h el impacto sobre el cuerpo de un peatón es de tal violencia que, si bien no es absolutamente seguro, sí es muy probable que la persona muera. La razón física es que la energía del choque crece con el cuadrado de la velocidad: si la rapidez se duplica, la energía liberada en el impacto se cuadruplica, de modo que las cifras de mortalidad suben de forma muy pronunciada a medida que aumenta la velocidad. Las estadísticas de seguridad vial muestran que atropellar a un peatón a 30 km/h deja una buena chance de sobrevivir, pero pasados los 50 km/h la probabilidad de muerte se dispara, y a 65 km/h las lesiones internas y los traumatismos suelen ser fatales. La pregunta usa muy probable y no seguro porque siempre puede haber casos excepcionales de supervivencia, pero el patrón general es claramente letal. Esto explica por qué los límites de velocidad urbanos existen y por qué respetarlos salva vidas reales. El dato para grabarlo es que en la ciudad cada kilómetro por hora de más no es solo una multa potencial, sino la diferencia entre que un peatón viva o muera si algo sale mal."
  },
  {
    "id": 199,
    "question": "Usted desea adelantar a un motociclista que va delante suyo, ¿qué hace usted?",
    "options": [
      "Trata de pasarlo en una curva.",
      "Pasa cerca de él y lo más rápido posible.",
      "Le da tanto espacio lateral como le daría a un automóvil.",
      "Toca la bocina para advertir su presencia."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Al adelantar a un motociclista debe darle tanto espacio lateral como le daría a un automóvil. La moto puede desestabilizarse por el viento, baches o el aire que desplaza su vehículo, por lo que necesita un amplio margen. Tratarlo como a un auto completo garantiza un sobrepaso seguro.",
    "wrongExplanations": [
      "Adelantar en una curva es peligroso por la falta de visibilidad, sea cual sea el vehículo de adelante.",
      "Pasar cerca y rápido puede desestabilizar al motociclista por el aire desplazado y provocar su caída.",
      "",
      "Tocar la bocina puede sobresaltar al motociclista; lo importante es darle espacio, no advertirle con ruido."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la c porque al adelantar a un motociclista usted debe darle exactamente tanto espacio lateral como le daría a un automóvil completo, tratándolo como si ocupara todo el ancho de un auto aunque físicamente sea angosto. El motivo es que la moto es mucho más inestable que un auto: una ráfaga de viento, un bache, una mancha de aceite o el propio desplazamiento de aire que genera su vehículo al pasar pueden hacer que el motociclista se mueva o corrija bruscamente justo en el peor momento. Si usted lo pasa pegado, ese margen estrecho desaparece ante cualquiera de esas variaciones y el roce o la caída se vuelven probables. Las otras opciones son directamente peligrosas: adelantar en una curva reduce la visibilidad y el espacio, pasar rápido y cerca aumenta la turbulencia que lo desestabiliza, y la bocina puede sobresaltarlo y hacerle perder el control. El principio que el examen quiere fijar es que el motociclista es un usuario vulnerable que merece el mismo respeto de espacio que un vehículo mayor. El truco es imaginar la moto dentro de una caja del tamaño de un auto y no invadir nunca esa caja al sobrepasar."
  },
  {
    "id": 200,
    "question": "Usted va siguiendo a un automóvil que es conducido por una persona de edad. Usted debería ...",
    "options": [
      "dar por seguro que el conductor manejará muy mal.",
      "estar consciente de que las reacciones del conductor pueden no ser tan rápidas como las suyas.",
      "encender y apagar sus luces y adelantarlo.",
      "mantenerse cerca tras él y conducir cuidadosamente."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Al seguir a un conductor de edad avanzada, debe estar consciente de que sus reacciones pueden no ser tan rápidas como las suyas. Por ello conviene mantener una distancia prudente y tener paciencia. Una actitud comprensiva y previsora evita accidentes y maniobras apresuradas.",
    "wrongExplanations": [
      "Dar por seguro que manejará mal es un prejuicio injusto; la prudencia se basa en sus posibles reacciones, no en suponer lo peor.",
      "",
      "Encender y apagar las luces para presionarlo y adelantarlo es una conducta agresiva e insegura.",
      "Mantenerse muy cerca tras él reduce su margen de reacción y aumenta el riesgo de colisión; debe guardar distancia."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "La respuesta correcta es la b porque al seguir a un automóvil conducido por una persona de edad lo prudente es estar consciente de que sus reacciones pueden no ser tan rápidas como las suyas, y ajustar su conducta a esa posibilidad con paciencia y distancia. Esto no es un prejuicio sino una previsión realista: con la edad pueden disminuir los reflejos, la visión, la audición y la rapidez para procesar situaciones, de modo que ese conductor quizás frene antes, acelere más lento o demore más en reaccionar ante un imprevisto. La opción a es incorrecta porque dar por seguro que manejará muy mal es un prejuicio absoluto e injusto; muchas personas mayores conducen con gran experiencia y cuidado, y el examen distingue entre estar consciente de una posibilidad y condenar de antemano. Las otras alternativas son agresivas o peligrosas: encender y apagar las luces y adelantar presiona innecesariamente, y mantenerse muy pegado tras él elimina el espacio de reacción que justamente más necesita en este caso. La conducta correcta combina comprensión y previsión: mantenga una distancia prudente, no lo apure y anticipe que sus maniobras podrían ser más lentas. El truco es recordar que conducir bien junto a otros se trata de adaptarse a ellos, no de exigirles que se adapten a usted."
  },
  {
    "id": 201,
    "question": "Al estacionar su vehículo en un lugar en el que no hay señales que lo permitan ni que lo prohiban, usted no debe ....",
    "options": [
      "dejar el freno de mano puesto.",
      "detener el motor.",
      "obstaculizar el tránsito a otros usuarios de la vía.",
      "estacionar al costado derecho de la calzada."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Aunque no haya señalización, todo conductor tiene el deber de no entorpecer la libre circulación. Por eso, lo que usted NO debe hacer es estacionar de manera que obstaculice el tránsito de otros usuarios de la vía, dejando siempre el paso expedito a vehículos, peatones y ciclistas.",
    "wrongExplanations": [
      "Dejar el freno de mano puesto es una buena práctica de seguridad al estacionar, no algo prohibido.",
      "Detener el motor es correcto y recomendable al estacionar; no es lo que se debe evitar.",
      "",
      "Estacionar al costado derecho de la calzada es justamente lo correcto en una vía de doble sentido."
    ],
    "page": 52,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La Ley de Tránsito parte de un principio rector: el espacio público vial es de uso común y nadie puede apropiarse de él de forma que perjudique al resto. Por eso, aunque no exista un disco o demarcación que prohíba o permita estacionar, sigue rigiendo el deber general de no entorpecer la libre circulación de personas y vehículos. El razonamiento es simple: la ausencia de señal no es una autorización para hacer cualquier cosa, sino que activa su criterio y responsabilidad como conductor. Detener el motor, dejar el freno de mano puesto y estacionar al costado derecho de la calzada son todas conductas correctas, así que la única que usted NO debe hacer es obstaculizar el tránsito de los demás, dejando bloqueado un acceso, una vía angosta o el paso de peatones y ciclistas. La consecuencia real de hacerlo es generar congestión, maniobras peligrosas de terceros que deben rodearlo y, además, su vehículo puede ser retirado por la grúa municipal. Un buen truco para recordarlo es preguntarse antes de bajar: 'si dejo el auto aquí, ¿puede pasar todo el mundo sin problema?'; si la respuesta es no, no estacione."
  },
  {
    "id": 202,
    "question": "Usted nunca debería intentar adelantar a un ciclista ...",
    "options": [
      "justo antes de doblar a la derecha.",
      "justo antes de doblar a la izquierda.",
      "recién pasada una intersección.",
      "en un camino de tierra."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Nunca debe adelantar a un ciclista justo antes de doblar a la derecha, porque al virar usted le cierra el paso y cruza su trayectoria, quedando el ciclista en su punto ciego. Esta maniobra es una de las causas más frecuentes de atropellos a ciclistas en intersecciones.",
    "wrongExplanations": [
      "",
      "Al doblar usted a la izquierda no cruza la línea por donde avanza el ciclista que va a su derecha, por lo que no es la situación de mayor riesgo.",
      "Recién pasada una intersección, si la vía está despejada, el adelantamiento puede hacerse con la debida distancia; no es la prohibición clave.",
      "El tipo de superficie (tierra) no es lo que define el peligro; el riesgo crítico está en cruzar la trayectoria del ciclista al doblar."
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta regla está en la geometría de las trayectorias: cuando usted adelanta a un ciclista y luego dobla a la derecha, su auto cruza por delante de la línea que el ciclista venía siguiendo, cerrándole literalmente el paso. El razonamiento paso a paso es claro: primero usted lo sobrepasa, lo deja a su costado derecho y casi de inmediato gira hacia ese mismo lado, momento en que el ciclista queda metido en su punto ciego y sin escapatoria. Esta maniobra, conocida como 'giro que atrapa', es una de las causas más frecuentes de atropello a ciclistas en zonas urbanas, porque el conductor cree que ya pasó y se olvida de que el ciclista sigue avanzando a su lado. La consecuencia puede ser fatal, ya que el ciclista no tiene carrocería que lo proteja y suele caer bajo las ruedas traseras del vehículo. Por eso la regla de oro es: si va a doblar a la derecha y hay un ciclista cerca, no lo adelante; mejor quédese detrás de él, déjelo pasar la esquina y recién entonces continúe. Para recordarlo piense 'primero el giro, después el adelantamiento, nunca al revés'."
  },
  {
    "id": 203,
    "question": "Cuando adelanta a un ciclista usted debe dejar el máximo espacio lateral posible. ¿Por qué?",
    "options": [
      "Porque el ciclista podría cambiar de pista.",
      "Porque el ciclista podría bajarse de la bicicleta.",
      "Porque el ciclista podría tener que virar a la izquierda.",
      "Porque el ciclista podría desviarse bruscamente."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Se deja el máximo espacio lateral porque el ciclista puede desviarse bruscamente al esquivar un hoyo, una rejilla, basura o por una ráfaga de viento, perdiendo momentáneamente el equilibrio. Ese margen amplio le da a usted tiempo y distancia para reaccionar sin golpearlo.",
    "wrongExplanations": [
      "Un cambio de pista del ciclista es una maniobra señalizable y previsible, no la razón principal del espacio extra.",
      "Que el ciclista se baje de la bicicleta es poco frecuente y no justifica el amplio margen lateral.",
      "El viraje a la izquierda es una maniobra anunciada con el brazo; lo crítico es el desvío imprevisto e involuntario.",
      ""
    ],
    "page": 52,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de dejar el máximo espacio lateral está en que la bicicleta es un vehículo inestable que depende del equilibrio constante de su conductor, a diferencia de un auto que se mantiene firme sobre cuatro ruedas. El razonamiento es que el ciclista puede desviarse bruscamente de su línea por causas que usted no controla ni anticipa: un hoyo en el pavimento, una rejilla de alcantarillado, vidrios o basura en la calzada, o incluso una ráfaga de viento que lo empuje. Ante cualquiera de esos obstáculos el ciclista hará un movimiento repentino para esquivarlo o para no perder el equilibrio, y si usted va pasando demasiado cerca, ese pequeño bandazo se transforma en un choque. El margen amplio actúa como un colchón de seguridad: le da tiempo de reacción a usted y espacio de maniobra al ciclista, de modo que un desvío inesperado no termine en contacto. La recomendación práctica de CONASET es dejar al menos 1,5 metros de distancia lateral al adelantar, y un buen truco es imaginar que lleva una puerta abierta de ese ancho entre su auto y la bicicleta."
  },
  {
    "id": 204,
    "question": "Cuando el viento está soplando muy fuerte, ¿por qué debe usted dejar un espacio lateral extra al adelantar a un motociclista?",
    "options": [
      "Porque el motociclista podría doblar repentinamente para escapar del viento.",
      "Porque el motociclista podría detenerse repentinamente.",
      "Porque el motociclista podría tambalear o ver desviada su trayectoria a consecuencia del viento.",
      "Porque el motociclista podría ir más rápido de lo normal."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Con viento fuerte debe dejar un espacio lateral adicional porque las ráfagas pueden hacer tambalear al motociclista o desviar su trayectoria de forma involuntaria. La motocicleta tiene poca masa y gran superficie expuesta al viento, por lo que es muy sensible a las corrientes de aire.",
    "wrongExplanations": [
      "El motociclista no dobla deliberadamente para 'escapar' del viento; el problema es el desvío involuntario que provoca la ráfaga.",
      "El riesgo con viento no es una detención repentina, sino la pérdida de estabilidad lateral.",
      "",
      "El viento fuerte tiende a frenar y desestabilizar a la moto, no a hacerla ir más rápido."
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento físico aquí es que la motocicleta tiene muy poca masa y una gran superficie expuesta al viento, sumada a que solo apoya dos ruedas, lo que la hace extremadamente sensible a las fuerzas laterales. El razonamiento paso a paso es el siguiente: una ráfaga fuerte empuja la moto de costado, el motociclista corrige instintivamente inclinándose o moviendo el manillar, y en esa corrección su trayectoria se desplaza lateralmente de forma involuntaria, pudiendo tambalear o invadir parte de su pista. A diferencia de un auto, que apenas se mueve con el viento, la moto puede desviarse medio metro o más en una sola racha. Por eso, al adelantarla con viento fuerte, usted debe dejar un espacio lateral extra que absorba ese posible desvío sin que se produzca contacto. La consecuencia de pasar demasiado cerca es que un bandazo del motociclista lo lleve contra su vehículo, con caída casi segura y alto riesgo de lesiones graves. Un truco para recordarlo es pensar que con viento la moto 'flota' lateralmente, así que necesita más cancha de la habitual."
  },
  {
    "id": 205,
    "question": "¿De qué le advierte esta señal?",
    "options": [
      "De la posible presencia de escolares.",
      "De la proximidad de un cruce de peatones.",
      "De la posible presencia de niños jugando.",
      "De la proximidad de un parque o plaza."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q205_0.png"
    ],
    "explanation": "Esta es una señal de advertencia de peligro que alerta sobre la posible presencia de escolares, generalmente cercana a colegios o establecimientos educacionales. Le indica que debe reducir la velocidad y extremar la atención ante niños que puedan cruzar.",
    "wrongExplanations": [
      "",
      "El cruce de peatones tiene su propia señal (paso peatonal), distinta a la que advierte presencia de escolares.",
      "La presencia de niños jugando corresponde a otra señalización; esta apunta específicamente al entorno escolar.",
      "La proximidad de un parque o plaza no es lo que advierte esta señal."
    ],
    "page": 54,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta señal pertenece al grupo de señales de advertencia de peligro, que en Chile se reconocen por su forma de rombo amarillo con símbolo y orla negros, y cuya función es anticipar un riesgo para que usted modifique su conducta antes de llegar a él. En este caso advierte la posible presencia de escolares, por lo que normalmente se instala en las cercanías de colegios, liceos y establecimientos educacionales. El razonamiento de por qué existe es que los niños y adolescentes son peatones impredecibles: pueden cruzar corriendo, distraídos o entre vehículos estacionados, sin medir bien las distancias ni las velocidades. Al verla, usted debe reducir la velocidad, levantar el pie del acelerador y aumentar su atención, anticipando que en cualquier momento puede aparecer un escolar cruzando. Conviene no confundirla con la señal de cruce de peatones ni con la de niños jugando; la clave está en que esta apunta específicamente al entorno escolar. La consecuencia de ignorarla puede ser un atropello a un menor, una de las situaciones más graves y de mayor reproche en el tránsito, además de las sanciones agravadas por ocurrir en zona escolar."
  },
  {
    "id": 206,
    "question": "Cuando es de noche, al adelantar usted debería ...",
    "options": [
      "tener mucho cuidado porque nuestra capacidad visual se ve reducida.",
      "mantener en todo momento sus luces altas.",
      "tocar 2 veces la bocina antes de desplazarse hacia la pista izquierda.",
      "estar muy atento a las curvas que pueda tener el camino.",
      "cambiar de luces altas a bajas repetidas veces antes de iniciar el adelantamiento."
    ],
    "correct": [
      0,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "De noche debe adelantar con mucho cuidado porque nuestra capacidad visual se reduce: disminuye la agudeza, el campo visual y la percepción de distancias y velocidades. Además debe estar muy atento a las curvas, ya que las luces no iluminan más allá del trazado recto y un vehículo en sentido contrario puede aparecer súbitamente.",
    "wrongExplanations": [
      "",
      "Mantener siempre las luces altas encandila a los demás conductores; deben bajarse al cruzarse o seguir a otro vehículo.",
      "Tocar la bocina dos veces no es el procedimiento para adelantar de noche.",
      "",
      "Cambiar repetidamente de altas a bajas distrae y encandila; no es la forma correcta de iniciar el adelantamiento."
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de extremar el cuidado al adelantar de noche está en las limitaciones propias de la visión humana en oscuridad: disminuye la agudeza visual, se reduce el campo de visión, cuesta más percibir distancias y velocidades, y aparecen el deslumbramiento y los puntos ciegos por la falta de luz. El razonamiento es que un adelantamiento exige calcular con precisión la distancia y la velocidad del vehículo que viene en sentido contrario, y justamente eso es lo que más se deteriora de noche, por lo que el margen de error se reduce peligrosamente. A esto se suma que las curvas son críticas: sus luces solo iluminan en línea recta y no alcanzan a 'doblar' el camino, de modo que un vehículo que se aproxima por una curva puede aparecer de golpe cuando usted ya está invadiendo la pista contraria. Por eso las respuestas correctas son tener mucho cuidado por la capacidad visual reducida y estar muy atento a las curvas que pueda tener el camino. Mantener luces altas durante el adelantamiento es un error, porque encandilaría al que viene de frente; lo correcto es coordinar las luces sin abusar de las altas. Un buen criterio práctico es: si de noche tiene dudas de si alcanza a adelantar, no adelante."
  },
  {
    "id": 207,
    "question": "Por una carretera, usted circula detrás de otro vehículo. Si la calzada está mojada, ¿qué espacio de tiempo mínimo mantiene usted respecto del vehículo que va adelante?",
    "options": [
      "A lo menos, el equivalente a lo que recorre en 4 segundos.",
      "El equivalente a lo que recorre en 1 segundo.",
      "El equivalente a lo que recorre en 2 segundos.",
      "Como máximo, el equivalente a lo que recorre en 3 segundos."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Con la calzada mojada disminuye la adherencia de los neumáticos y aumenta la distancia de frenado, por lo que debe mantener al menos el equivalente a 4 segundos respecto del vehículo de adelante. Esa mayor separación compensa el mayor tiempo y espacio que necesitará para detenerse sin riesgo.",
    "wrongExplanations": [
      "",
      "Un segundo es insuficiente incluso con pavimento seco; con calzada mojada es claramente peligroso.",
      "Dos segundos es la referencia para condiciones secas; con lluvia ese margen se queda corto.",
      "Tres segundos como máximo es inadecuado; con la calzada mojada la distancia debe ser mayor, no menor."
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de la regla de los segundos es que la distancia de seguimiento debe medirse en tiempo y no en metros, porque así se ajusta automáticamente a la velocidad: a mayor velocidad, mayor separación real. En condiciones secas y normales se recomienda mantener al menos 2 segundos respecto del vehículo de adelante, pero cuando la calzada está mojada esa cifra debe duplicarse a 4 segundos como mínimo. El razonamiento físico es que el agua reduce la adherencia entre el neumático y el pavimento, por lo que su distancia de frenado se alarga de manera importante; si conserva la misma separación que en seco, no alcanzará a detenerse si el de adelante frena de golpe. Para aplicarla en la práctica, elija un punto fijo del camino (un poste, una señal), y cuente 'mil uno, mil dos, mil tres, mil cuatro' desde que el vehículo de adelante lo pasa hasta que usted llega al mismo punto; si llega antes de terminar de contar, está demasiado cerca. La consecuencia de no respetarlo es una colisión por alcance, que en mojado ocurre con mucha más facilidad. El truco es simple: en seco dos segundos, en mojado el doble."
  },
  {
    "id": 208,
    "question": "Usted está conduciendo de noche y es encandilado por las luces delanteras de un vehículo que se aproxima. En estas circunstancias, ¿qué hace usted?",
    "options": [
      "Reduce la velocidad o se detiene.",
      "Cierra sus ojos.",
      "Hace parpadear sus luces.",
      "Baja la visera que tiene su vehículo para protegerlo del sol."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Si las luces de un vehículo que se aproxima lo encandilan, debe reducir la velocidad o incluso detenerse, ya que momentáneamente pierde visibilidad del camino. Conducir 'a ciegas' aunque sea por unos segundos es muy peligroso, por eso bajar la marcha le da tiempo a que su vista se recupere.",
    "wrongExplanations": [
      "",
      "Cerrar los ojos mientras se conduce es extremadamente peligroso; quedaría sin control del vehículo.",
      "Hacer parpadear sus luces no resuelve su encandilamiento y puede encandilar al otro conductor.",
      "La visera protege del sol, no de las luces de otro vehículo de noche; no soluciona el problema."
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de reducir la velocidad o detenerse al ser encandilado está en cómo funciona el ojo humano: la retina necesita unos segundos para adaptarse a los cambios bruscos de luz, y un haz intenso de frente provoca un encandilamiento que deja a su vista prácticamente inutilizada durante ese lapso. El razonamiento es que, mientras dura ese deslumbramiento, usted está conduciendo a ciegas, sin ver realmente el camino ni los obstáculos, peatones o vehículos que pueda haber adelante. Bajar la velocidad acorta la distancia que recorre 'sin ver' y le da el tiempo necesario para que sus ojos se recuperen; si el encandilamiento es muy fuerte, incluso detenerse es lo más prudente. Cerrar los ojos sería todavía más peligroso, hacer parpadear las luces no resuelve su falta de visión, y la visera sirve para el sol, no para luces nocturnas, por eso esas opciones son incorrectas. Un truco útil para no mirar directo al foco que lo encandila es desviar levemente la vista hacia el borde derecho de su pista, usando la línea blanca de la berma como guía para mantener la trayectoria mientras pasa el otro vehículo."
  },
  {
    "id": 209,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones son correctas en cuanto a la conducción durante la noche?",
    "options": [
      "En carretera, con luces bajas es posible ver las marcas en el pavimento a 200 m y más.",
      "Nuestra limitada capacidad para ver de noche aumenta los riesgos de accidentes.",
      "Nuestra capacidad de apreciar distancias en la noche se ve disminuida.",
      "El color de las ropas de un peatón influye en que éste pueda ser más o menos visible para los conductores."
    ],
    "correct": [
      1,
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Son correctas tres afirmaciones: de noche nuestra limitada visión aumenta el riesgo de accidentes, se reduce nuestra capacidad de apreciar distancias, y el color de la ropa del peatón influye en su visibilidad (las prendas claras o reflectantes se ven mucho mejor que las oscuras). Todas reflejan las limitaciones reales de la visión nocturna.",
    "wrongExplanations": [
      "Es falso: con luces bajas el alcance de iluminación es muy inferior a 200 m, por eso no se ven las marcas a esa distancia.",
      "",
      "",
      ""
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta pregunta es entender de manera realista las limitaciones de la visión nocturna, que es uno de los factores que más accidentes provoca de noche. Son correctas tres afirmaciones: que nuestra limitada capacidad de ver de noche aumenta el riesgo de accidentes, que se reduce nuestra capacidad de apreciar distancias, y que el color de la ropa del peatón influye en cuán visible resulta para los conductores. El razonamiento de la primera y la segunda es que en oscuridad el ojo pierde agudeza y profundidad de campo, por lo que cuesta más calcular a qué distancia está un objeto y a qué velocidad se acerca, lo que retrasa sus reacciones. La tercera se explica porque la ropa clara o con elementos reflectantes devuelve la luz de los focos y se distingue a mucha mayor distancia, mientras que la ropa oscura se confunde con el entorno y puede verse demasiado tarde. La afirmación falsa es la que dice que con luces bajas se ven las marcas del pavimento a 200 metros o más: las luces bajas alcanzan apenas unos 30 a 40 metros, justamente para no encandilar, así que esa distancia es irreal. El mensaje práctico es conducir de noche más despacio, aumentar las distancias y nunca confiarse de que verá a un peatón a tiempo."
  },
  {
    "id": 210,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción nocturna en un camino rural?",
    "options": [
      "Al cruzarse con otro vehículo siempre hay que poner luces bajas para no encandilar a su conductor.",
      "Al acercarse por atrás a otro vehículo hay que poner luces bajas.",
      "Al cruzarse con un ciclista no es necesario poner luces bajas.",
      "Si el camino es ancho no es necesario poner luces bajas al cruzarse con otro vehículo."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [],
    "explanation": "Son correctas dos: al cruzarse con otro vehículo siempre debe poner luces bajas para no encandilar a su conductor, y al acercarse por atrás a otro vehículo también debe usar luces bajas para no deslumbrarlo por el espejo retrovisor. En ambos casos las luces altas comprometerían la seguridad del otro conductor.",
    "wrongExplanations": [
      "",
      "",
      "Es falso: al cruzarse con un ciclista también debe poner luces bajas, pues las altas lo encandilan y lo hacen perder el equilibrio.",
      "El ancho del camino no exime de bajar las luces; siempre que se cruza con otro vehículo deben usarse luces bajas."
    ],
    "page": 54,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento del uso correcto de las luces de noche en camino rural es no encandilar a los demás usuarios, porque un conductor deslumbrado pierde la visión y puede provocar un accidente grave. Son correctas dos afirmaciones: al cruzarse con otro vehículo siempre debe poner luces bajas para no encandilar a su conductor que viene de frente, y al acercarse por atrás a otro vehículo también debe usar luces bajas, ya que las altas se reflejan en sus espejos retrovisores y lo deslumbran de la misma forma. El razonamiento es que las luces altas, pensadas para iluminar lejos en caminos oscuros y sin tránsito, se vuelven un peligro apenas hay otro vehículo en el campo visual, sea de frente o adelante de usted. Las opciones incorrectas tienen errores claros: con un ciclista sí debe bajar las luces, porque encandilarlo puede hacerlo perder el equilibrio y caer, y el ancho del camino no lo exime, porque por más ancha que sea la vía el otro conductor igual recibe el haz de luz de frente. La regla práctica es sencilla: apenas aparezca cualquier vehículo o usuario al que pueda deslumbrar, de frente o por atrás, baje las luces, y vuelva a las altas solo cuando esté nuevamente solo en el camino."
  },
  {
    "id": 211,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) correcta(s) en cuanto a la conducción bajo la lluvia?",
    "options": [
      "Cuando los neumáticos son nuevos no hay riesgo de que éstos patinen a consecuencia del agua en la calzada.",
      "Independientemente del estado de los neumáticos, el riesgo de que éstos patinen es mayor mientras mayor es la velocidad.",
      "El riesgo de que los neumáticos patinen es menor cuando recién ha comenzado a llover.",
      "Cuando los frenos están buenos el riesgo de patinaje no existe."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "La afirmación correcta es que, sin importar el estado de los neumáticos, el riesgo de patinar aumenta a mayor velocidad. A más velocidad sobre calzada mojada, los neumáticos no alcanzan a evacuar el agua y se produce el hidroplaneo, perdiendo el contacto con el pavimento.",
    "wrongExplanations": [
      "Es falso: aunque los neumáticos sean nuevos, si hay agua y velocidad igual existe riesgo de patinaje e hidroplaneo.",
      "",
      "Es falso: justo al comenzar a llover el riesgo es mayor, porque el agua se mezcla con el aceite y la suciedad de la calzada haciéndola más resbaladiza.",
      "Es falso: los frenos en buen estado no impiden el patinaje; este depende de la adherencia entre neumático y calzada."
    ],
    "page": 56,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de esta pregunta es entender que el patinaje sobre calzada mojada depende principalmente de la velocidad, y no solo del estado del vehículo. La afirmación correcta es que, independientemente del estado de los neumáticos, el riesgo de patinar es mayor mientras mayor es la velocidad. El razonamiento físico es el del hidroplaneo o aquaplaning: el neumático tiene dibujos cuya función es evacuar el agua que encuentra para que la goma toque el pavimento, pero ese drenaje toma tiempo, y a más velocidad el neumático llega a la siguiente porción de agua antes de haber expulsado la anterior, formándose una película líquida que lo levanta y separa del suelo. Cuando eso ocurre el vehículo prácticamente 'flota' y pierde adherencia, dirección y frenado. Las otras afirmaciones son falsas: ni neumáticos nuevos ni frenos en buen estado eliminan el riesgo de patinar, porque ningún componente vence las leyes de la física si usted va demasiado rápido, y además el riesgo no es menor al comenzar a llover, sino mayor, porque la primera agua se mezcla con el aceite y el polvo del pavimento formando una capa especialmente resbaladiza. La conclusión práctica es que en mojado la herramienta más poderosa que usted tiene es bajar la velocidad."
  },
  {
    "id": 212,
    "question": "¿Cuáles son las 2 causas más comunes de los resbalones ante la existencia de agua en la calzada?",
    "options": [
      "Frenos en mal estado.",
      "Neumáticos desgastados.",
      "Exceso de velocidad en relación a las condiciones de la calzada.",
      "Fallas en el sistema de dirección."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Las dos causas más comunes de resbalones con agua en la calzada son los neumáticos desgastados y el exceso de velocidad para las condiciones existentes. Los neumáticos sin dibujo no evacuan el agua y, a mayor velocidad, se forma una película de agua que separa la rueda del pavimento (hidroplaneo), haciendo perder adherencia.",
    "wrongExplanations": [
      "Los frenos en mal estado afectan la detención, pero no son la causa típica del resbalón por agua, que depende de la adherencia.",
      "",
      "",
      "Las fallas de dirección son poco frecuentes y no constituyen la causa habitual de resbalones por agua en la calzada."
    ],
    "page": 56,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de esta pregunta está en identificar las dos causas que más combinadas producen los resbalones cuando hay agua en la calzada: los neumáticos desgastados y el exceso de velocidad para las condiciones existentes. El razonamiento del primer factor es que el dibujo o labrado del neumático existe precisamente para canalizar y expulsar el agua; cuando está gastado y liso, pierde esa capacidad de drenaje y la goma no logra contactar el pavimento. El segundo factor es la velocidad, porque a mayor rapidez el neumático tiene menos tiempo para evacuar el agua y se forma la película líquida que lo levanta, produciendo el hidroplaneo. Cuando ambos se juntan, neumático liso más alta velocidad, el riesgo de perder por completo la adherencia se dispara y el vehículo deja de responder a la dirección y al freno. Los frenos en mal estado y las fallas de dirección son problemas serios, pero no son la causa típica del resbalón por agua, que es un problema de contacto rueda-pavimento. El consejo práctico es revisar el labrado de sus neumáticos (la profundidad mínima legal es de 1,6 mm) y, sobre mojado, soltar el acelerador y conducir más lento de lo habitual."
  },
  {
    "id": 213,
    "question": "Viajando de noche usted es encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    "options": [
      "Bajar su visor de protección solar.",
      "Poner luces delanteras altas.",
      "Poner su mano sobre sus ojos.",
      "Bajar la velocidad y eventualmente detenerse."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Al ser encandilado por un vehículo que viene en sentido contrario, debe bajar la velocidad y eventualmente detenerse, porque pierde momentáneamente la visión del camino. Reducir la marcha le da el margen necesario para que su vista se adapte nuevamente y evitar un accidente.",
    "wrongExplanations": [
      "El visor protege del sol diurno, no de las luces de un vehículo de noche; no resuelve el encandilamiento.",
      "Poner luces altas empeora la situación, encandilando al otro conductor y aumentando el riesgo para ambos.",
      "Taparse los ojos con la mano le hace perder el control del vehículo y agrava el peligro.",
      ""
    ],
    "page": 56,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento aquí es el mismo que rige todo encandilamiento nocturno: cuando un haz de luz intenso entra de frente, la pupila se contrae y la retina queda saturada, dejándolo sin visión útil del camino durante unos segundos hasta que el ojo se readapta. El razonamiento paso a paso es que, mientras dura ese deslumbramiento, usted no ve lo que tiene adelante, de modo que cualquier cosa que recorra a velocidad normal la recorre a ciegas; por eso lo correcto es bajar la velocidad y, si es necesario, detenerse, reduciendo así la distancia que avanza sin ver y dando tiempo a que su vista se recupere. Las otras opciones agravan el problema: bajar el visor solar no sirve contra luces nocturnas porque está diseñado para el sol, poner luces altas encandilaría al otro conductor y empeoraría la situación para ambos, y taparse los ojos con la mano lo dejaría sin visión y sin control. Un truco práctico mientras pasa el vehículo es no mirar directamente sus focos, sino desviar la vista hacia el borde derecho de su pista y guiarse por la línea blanca de la berma para mantener el rumbo sin recibir el haz de lleno en los ojos."
  },
  {
    "id": 214,
    "question": "Conduciendo de noche usted s e ve encandilado por las luces de un vehículo que viene en sentido contrario, ¿qué debería hacer usted?",
    "options": [
      "Frenar fuerte.",
      "Acelerar para alejarse rápido del vehículo que lo encandila.",
      "Hacer parpadear sus luces.",
      "Bajar la velocidad o detenerse."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Igual que en la situación anterior, lo correcto al ser encandilado es bajar la velocidad o detenerse, ya que la visibilidad se reduce drásticamente por unos instantes. Así evita conducir prácticamente sin ver y da tiempo a que sus ojos se recuperen.",
    "wrongExplanations": [
      "Frenar fuerte sin ver bien atrás puede provocar un alcance; debe reducir de forma controlada.",
      "Acelerar mientras está encandilado es muy peligroso, pues avanza más rápido sin ver el camino.",
      "Hacer parpadear sus luces no mejora su visión y puede encandilar al otro conductor.",
      ""
    ],
    "page": 56,
    "category": "Conduccion segura",
    "deepExplanation": "Esta situación es prácticamente idéntica a la anterior y refuerza el mismo principio: ante el encandilamiento de un vehículo que viene en sentido contrario, lo correcto es bajar la velocidad o detenerse. El fundamento es que durante el deslumbramiento usted pierde momentáneamente la referencia visual del camino y conduce sin ver realmente lo que hay adelante. El razonamiento de por qué se descartan las otras opciones vale la pena tenerlo claro: frenar fuerte es peligroso porque puede provocar que el vehículo de atrás lo choque por alcance o que usted derrape, sobre todo si la calzada está mojada; acelerar para 'salir rápido' del encandilamiento solo aumenta la distancia que recorre a ciegas y reduce su tiempo de reacción; y hacer parpadear las luces no le devuelve la visión y además puede confundir al otro conductor. La clave está en la diferencia entre frenar de golpe y bajar la velocidad de forma controlada: lo segundo es una desaceleración suave y progresiva que mantiene la estabilidad. El truco para recordarlo es asociar siempre encandilamiento con la palabra 'despacio', nunca con un movimiento brusco."
  },
  {
    "id": 215,
    "question": "Al frenar en una calzada mojada su vehículo comienza a patinar. ¿Qué es lo primero que usted debería hacer?",
    "options": [
      "Soltar el freno completamente.",
      "Tirar rápidamente del freno de mano.",
      "Apretar con más fuerza el pedal de freno.",
      "Poner el pie en el pedal de embrague."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Si el vehículo comienza a patinar al frenar en calzada mojada, lo primero es soltar el freno completamente para que las ruedas vuelvan a girar y recuperen adherencia y control de la dirección. Una rueda bloqueada pierde el agarre y la capacidad de dirigir; al liberar el freno se restablece el contacto efectivo con el pavimento.",
    "wrongExplanations": [
      "",
      "Tirar del freno de mano bloquea las ruedas traseras y agrava el derrape, pudiendo provocar un trompo.",
      "Apretar más fuerte el freno mantiene las ruedas bloqueadas y prolonga el patinaje sin control.",
      "Pisar el embrague no es lo primero; antes debe liberar el freno para recuperar adherencia y control."
    ],
    "page": 56,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de soltar el freno cuando el vehículo patina al frenar en mojado está en la diferencia entre una rueda que gira y una rueda bloqueada. Una rueda bloqueada, es decir, frenada al punto de dejar de rodar, pierde casi toda su capacidad de agarre y, lo más importante, pierde la capacidad de dirigir: con las ruedas trabadas el auto se desliza recto hacia donde lo lleva la inercia, sin responder al volante. El razonamiento paso a paso es que, al soltar el freno completamente, las ruedas vuelven a girar, recuperan el contacto efectivo y la adherencia con el pavimento, y con ello usted recupera el control de la dirección para poder corregir la trayectoria. Apretar con más fuerza el pedal solo profundizaría el bloqueo y el deslizamiento; tirar del freno de mano bloquearía las ruedas traseras y podría hacer girar el auto sin control; y pisar el embrague no detiene el patinaje. Por eso lo primero es liberar el freno, recuperar agarre y dirección, y recién entonces volver a frenar de forma más suave y dosificada. Conviene saber que los vehículos modernos con sistema ABS hacen automáticamente este 'soltar y aplicar' muchas veces por segundo, pero la pregunta evalúa el principio físico de fondo, que es el mismo."
  },
  {
    "id": 216,
    "question": "¿Cómo puede usted evitar que los neumáticos patinen cuando la calzada está con hielo?",
    "options": [
      "Manteniéndose siempre en primera.",
      "Poniendo el freno de mano si las ruedas comienzan a patinar.",
      "Conduciendo lentamente en la marcha más alta posible.",
      "Conduciendo en neutro."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Sobre hielo se evita el patinaje conduciendo lentamente y en la marcha más alta posible, ya que así se entrega menos fuerza a las ruedas y se reduce el riesgo de que estas pierdan adherencia y patinen. Un cambio alto suaviza la entrega de potencia y mantiene mejor el agarre sobre la superficie resbaladiza.",
    "wrongExplanations": [
      "Mantenerse en primera entrega demasiada fuerza a las ruedas y favorece el patinaje sobre el hielo.",
      "Poner el freno de mano si las ruedas patinan bloquea las ruedas traseras y agrava el derrape.",
      "",
      "Conducir en neutro le hace perder el frenado de motor y el control del vehículo, lo que es peligroso sobre hielo."
    ],
    "page": 56,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de conducir lentamente y en la marcha más alta posible sobre hielo está en controlar la fuerza que se transmite a las ruedas, porque sobre una superficie con casi nula adherencia cualquier exceso de torque las hace patinar. El razonamiento es que una marcha alta entrega menos fuerza de giro a las ruedas para una misma posición del acelerador, de modo que la potencia llega de manera más suave y gradual, sin el tirón brusco que en marchas bajas hace que las ruedas pierdan el poco agarre que tienen. En cambio, mantenerse siempre en primera entregaría demasiada fuerza y haría patinar las ruedas; conducir en neutro lo dejaría sin control del motor y sin freno motor, lo que es peligroso; y poner el freno de mano si las ruedas patinan bloquearía las traseras y podría provocar un trompo. La idea clave es la suavidad: sobre hielo cada acción, acelerar, frenar y girar, debe hacerse de manera lenta y delicada, evitando todo movimiento brusco. El truco es imaginar que tiene un huevo entre el pie y el acelerador, presionando con tanta suavidad que no lo rompa."
  },
  {
    "id": 217,
    "question": "Cuando la calzada está con hielo la distancia de frenado puede ser ...",
    "options": [
      "2 veces la distancia normal.",
      "5 veces la distancia normal.",
      "7 veces la distancia normal.",
      "10 veces la distancia normal."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Con la calzada cubierta de hielo, la distancia de frenado puede llegar a ser hasta 10 veces la distancia normal. Esto se debe a que el hielo reduce drásticamente la adherencia entre el neumático y el pavimento, por lo que el vehículo necesita mucho más espacio para detenerse.",
    "wrongExplanations": [
      "Subestima enormemente el efecto del hielo; la distancia de frenado puede ser mucho mayor que el doble.",
      "Cinco veces sigue siendo una estimación insuficiente para una superficie helada.",
      "Siete veces queda corto frente al efecto real del hielo sobre la adherencia.",
      ""
    ],
    "page": 56,
    "category": "Conduccion segura",
    "formula": "En hielo el coeficiente de fricción (μ) cae muchísimo. Como la distancia de frenado es inversamente proporcional a μ (∝ 1/μ), puede llegar a ser hasta 10 veces la distancia normal.",
    "deepExplanation": "El fundamento de que la distancia de frenado en hielo pueda llegar a ser hasta 10 veces la distancia normal está en el coeficiente de fricción entre el neumático y la superficie. Sobre pavimento seco ese coeficiente, que llamamos μ (mu), es relativamente alto y permite frenar en poco espacio; sobre hielo el μ cae a valores mínimos, porque prácticamente no hay agarre entre la goma y el hielo. La fórmula lo explica con claridad: la distancia de frenado es inversamente proporcional al coeficiente de fricción, es decir, distancia ∝ 1/μ, de modo que si el μ se reduce a una décima parte de su valor en seco, la distancia necesaria para detenerse se multiplica aproximadamente por diez. En términos concretos, lo que en seco frenaría en 10 metros podría requerir cerca de 100 metros sobre hielo. La consecuencia práctica es dramática: usted no puede confiar en el freno para sacarlo de un apuro sobre hielo, porque cuando vea el obstáculo ya será demasiado tarde. Por eso, en estas condiciones, la única defensa real es reducir muchísimo la velocidad y aumentar de forma exagerada la distancia con el vehículo de adelante, anticipándose en lugar de reaccionar."
  },
  {
    "id": 218,
    "question": "Al conducir con neblina a la luz del día, ¿qué luces enciende usted ?",
    "options": [
      "Las luces delanteras bajas.",
      "Las luces de estacionamiento.",
      "Las luces delanteras altas.",
      "Las luces de advertencia de peligro."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Con neblina, incluso de día, debe encender las luces delanteras bajas para ser visto por los demás y mejorar su propia referencia del camino. Las luces bajas dirigen el haz hacia el suelo y no se reflejan tanto en la bruma como las altas, evitando el efecto de 'pared blanca'.",
    "wrongExplanations": [
      "",
      "Las luces de estacionamiento son muy tenues e insuficientes para ser visto con neblina mientras circula.",
      "Las luces altas se reflejan en las gotas de la neblina y crean un encandilamiento que reduce aún más la visibilidad.",
      "Las luces de advertencia de peligro (intermitentes) son para detenciones de emergencia, no para circular con neblina."
    ],
    "page": 56,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento de encender las luces delanteras bajas con neblina, incluso de día, es doble: ser visto por los demás y mejorar su propia referencia del camino, ya que la bruma reduce drásticamente la visibilidad para todos los usuarios. El razonamiento de por qué bajas y no altas es óptico: las luces altas proyectan el haz hacia arriba y al frente, y al chocar contra las miles de gotas de agua suspendidas en la neblina, esa luz se refleja de vuelta hacia usted creando una especie de 'pared blanca' brillante que en lugar de ayudar lo encandila y le quita visión. Las luces bajas, en cambio, dirigen el haz hacia el suelo, iluminan la calzada inmediata sin reflejarse tanto en la bruma y permiten que los demás lo distingan a tiempo. Las luces de estacionamiento son demasiado tenues para esta situación, y las de advertencia de peligro (las balizas intermitentes) están reservadas para cuando el vehículo está detenido o constituye un obstáculo, no para circular. El truco para recordarlo es asociar neblina con luz baja y dirigida al suelo, nunca con luces altas que 'rebotan' en la niebla."
  },
  {
    "id": 219,
    "question": "Al conducir sobre una calzada con hielo usted siente la dirección de su vehículo más liviana. ¿ Por qué sucede esto?",
    "options": [
      "Porque los neumáticos tienen menos adherencia a la calzada.",
      "Porque los neumáticos tienen más adherencia a la calzada.",
      "Porque los neumáticos están demasiado blandos.",
      "Porque los neumáticos están demasiado duros."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "La dirección se siente más liviana sobre hielo porque los neumáticos tienen menos adherencia a la calzada. Al haber poco agarre, las ruedas oponen menos resistencia al giro, lo que da esa sensación de dirección ligera y, a la vez, advierte que el control del vehículo es precario.",
    "wrongExplanations": [
      "",
      "Es lo contrario: si hubiera más adherencia, la dirección se sentiría más firme, no más liviana.",
      "La sensación liviana no se debe a la presión de los neumáticos, sino a la falta de adherencia sobre el hielo.",
      "El que los neumáticos estén duros no explica la dirección liviana sobre hielo; la causa es la baja adherencia."
    ],
    "page": 56,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento de que la dirección se sienta más liviana sobre hielo está en la relación entre adherencia y resistencia al giro de las ruedas delanteras. Normalmente, cuando usted gira el volante, los neumáticos delanteros deben vencer la fricción contra el pavimento para cambiar de dirección, y esa resistencia es la que usted percibe en sus manos como el 'peso' o firmeza de la dirección. El razonamiento es que sobre hielo los neumáticos tienen mucha menos adherencia a la calzada, por lo que oponen mucha menos resistencia al ser girados, y esa falta de fricción se traduce en esa sensación de dirección ligera y suelta. Lo importante es interpretar correctamente esa señal: una dirección demasiado liviana no es comodidad, sino una advertencia de que las ruedas casi no están agarrando el suelo y que el control del vehículo es precario y puede perderse en cualquier maniobra brusca. Las otras opciones son incorrectas porque más adherencia daría una dirección más firme, no más liviana, y los neumáticos blandos o duros afectan el comportamiento por presión, no por el hielo. El consejo práctico es que apenas sienta la dirección anormalmente ligera, asuma que va sobre hielo y reduzca la velocidad con la mayor suavidad posible."
  },
  {
    "id": 220,
    "question": "¿Cuándo es su distancia de detención total mucho más larga?",
    "options": [
      "Cuando hay neblina.",
      "Cuando es de noche.",
      "Cuando está lloviendo.",
      "Cuando hay vientos fuertes."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La distancia de detención total es mucho más larga cuando está lloviendo, porque la calzada mojada reduce la adherencia y aumenta el espacio que el vehículo recorre al frenar. La distancia de detención suma el tramo de reacción más el de frenado, y este último crece de forma importante sobre el agua.",
    "wrongExplanations": [
      "La neblina reduce la visibilidad y obliga a ir más lento, pero no alarga directamente la distancia de frenado como sí lo hace la calzada mojada.",
      "La noche disminuye la visibilidad, pero el agarre del neumático se mantiene; no es lo que más alarga la distancia de detención.",
      "",
      "El viento fuerte afecta la estabilidad del vehículo, pero no aumenta significativamente la distancia de detención."
    ],
    "page": 58,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento de esta pregunta es entender qué compone la distancia de detención total y qué factor la alarga más. Esa distancia es la suma de dos tramos: la distancia de reacción, que es lo que el vehículo recorre desde que usted percibe el peligro hasta que efectivamente pisa el freno, y la distancia de frenado, que es lo que recorre ya frenando hasta detenerse por completo. El razonamiento es que la lluvia ataca justamente el segundo tramo, el de frenado, porque la calzada mojada reduce la adherencia de los neumáticos y el vehículo necesita mucho más espacio para detenerse una vez que usted ya está frenando. Por eso, de las alternativas dadas, es la lluvia la que hace mucho más larga la distancia de detención total, ya que afecta directamente la física del frenado. La neblina, la noche y el viento son condiciones peligrosas, pero principalmente afectan la visibilidad o la estabilidad, es decir, alargan sobre todo el tiempo de reacción o dificultan el control, no multiplican el espacio de frenado como sí lo hace el agua bajo las ruedas. La conclusión práctica es clara: cuando llueve, baje la velocidad y aumente la distancia con el vehículo de adelante, porque por buena que sea su reacción, el frenado le pedirá bastante más cancha."
  },
  {
    "id": 221,
    "question": "Usted acaba de conducir a través de una calle inundada. ¿Qué es lo primero que debería hacer?",
    "options": [
      "Chequear sus frenos.",
      "Detenerse y revisar sus neumáticos.",
      "Detenerse y secar sus frenos.",
      "Activar su limpiaparabrisas."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "Lo primero es chequear los frenos, porque al pasar por agua las pastillas y discos se mojan y pierden capacidad de frenado. Por eso, tras salir de la zona inundada, debes presionar suavemente el pedal de freno mientras avanzas a baja velocidad para secarlos por fricción y recuperar su eficacia antes de volver a la marcha normal.",
    "wrongExplanations": [
      "",
      "Los neumáticos no son lo prioritario tras una inundación; el riesgo inmediato es que los frenos mojados no respondan.",
      "Detenerse por completo no es la mejor forma de secar los frenos: estos se secan aplicándolos suavemente mientras el vehículo está en movimiento, no estando detenido.",
      "El limpiaparabrisas mejora la visión del vidrio, pero no resuelve el problema real que es la pérdida momentánea de frenado."
    ],
    "page": 58,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El fundamento es físico: el sistema de frenos funciona por fricción entre las pastillas y los discos (o entre las balatas y el tambor), y cuando esa superficie queda mojada al cruzar agua, la película líquida actúa como lubricante y disminuye drásticamente el roce, de modo que al pisar el pedal el vehículo casi no responde. Por eso lo primero, antes de revisar neumáticos o limpiaparabrisas, es chequear los frenos, ya que de ellos depende tu capacidad de detenerte ante cualquier imprevisto. El procedimiento correcto es avanzar a baja velocidad presionando el pedal de freno de forma suave y repetida: el propio roce genera calor que evapora el agua y seca las superficies, restaurando la potencia de frenado en pocos metros. El riesgo de no hacerlo es llegar a un cruce o una emergencia creyendo que tienes frenos y descubrir que no responden, con un accidente como consecuencia. Un truco para recordarlo: agua y frenos no se llevan, así que después de cualquier poza, primero pruebas y secas el freno antes de confiar en él."
  },
  {
    "id": 222,
    "question": "¿Cómo puede usted evitar que su vehículo patine cuando la calzada está cubierta con una capa de hielo?",
    "options": [
      "Usando el freno de mano si las ruedas comienzan a resbalar.",
      "Conduciendo a una velocidad baja en el cambio más alto posible.",
      "Frenando suave y repetidamente.",
      "Conduciendo en un cambio bajo todo el tiempo."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Sobre hielo debes conducir a baja velocidad pero en el cambio más alto posible, porque una marcha alta entrega menos torque a las ruedas y reduce el riesgo de que estas giren en exceso y patinen. Manejar suave, sin acelerones ni frenadas bruscas, mantiene la adherencia disponible.",
    "wrongExplanations": [
      "Usar el freno de mano sobre hielo bloquea las ruedas traseras y provoca un derrape, justo lo contrario de lo que se busca.",
      "",
      "Frenar repetidamente sobre hielo tiende a bloquear las ruedas y a perder adherencia; lo recomendable es frenar lo menos posible y muy suave.",
      "Una marcha baja entrega más fuerza a las ruedas y facilita que patinen sobre hielo; por eso conviene la marcha más alta posible."
    ],
    "page": 58,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La clave está en cuánta fuerza de giro (torque) llega a las ruedas: sobre hielo la adherencia es mínima, y si las ruedas reciben demasiada fuerza tienden a girar más rápido que el avance real del auto, patinando en el lugar. Conducir a baja velocidad pero en el cambio más alto posible reduce justamente ese torque, porque una marcha alta multiplica menos la fuerza del motor y entrega un empuje más suave a las ruedas, ayudándolas a mantener el poco agarre disponible. Por eso las otras opciones son peligrosas: el freno de mano bloquea las ruedas traseras y provoca un derrape inmediato, frenar repetido y bruscamente rompe la adherencia, y una marcha baja todo el tiempo entrega demasiada fuerza y hace patinar. El razonamiento es: menos fuerza a las ruedas equivale a menos riesgo de patinaje. El riesgo real de equivocarse es perder el control y derrapar sin poder corregir. Truco para memorizar: sobre hielo se maneja como con un huevo bajo el acelerador, suave y en marcha alta, sin movimientos bruscos."
  },
  {
    "id": 223,
    "question": "Usted está conduciendo bajo mucha lluvia y repentinamente siente la dirección muy liviana. ¿Qué hace usted para tener nuevamente el control de su vehículo?",
    "options": [
      "Cambia a una marcha más baja.",
      "Frena levemente para reducir la velocidad.",
      "Guía el vehículo por la parte más seca de la calzada.",
      "Suelta el acelerador."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Cuando la dirección se siente liviana bajo mucha lluvia es señal de aquaplaning: una capa de agua separa los neumáticos del pavimento y pierdes adherencia y control. Lo correcto es soltar el acelerador para que el vehículo reduzca velocidad por sí solo y los neumáticos vuelvan a tomar contacto con la calzada, sin frenar ni girar bruscamente.",
    "wrongExplanations": [
      "Cambiar de marcha durante el aquaplaning altera la tracción y puede agravar la pérdida de control en vez de recuperarlo.",
      "Frenar durante el aquaplaning, aunque sea levemente, puede bloquear las ruedas y provocar un derrape, ya que no hay adherencia.",
      "Buscar la parte más seca implica girar el volante, maniobra peligrosa mientras las ruedas no tienen agarre y pueden derrapar.",
      ""
    ],
    "page": 58,
    "category": "Conduccion segura",
    "deepExplanation": "Cuando bajo lluvia intensa la dirección se vuelve repentinamente liviana, lo que ocurre es aquaplaning o hidroplaneo: los neumáticos no alcanzan a expulsar el agua acumulada y flotan sobre una delgada capa líquida, perdiendo todo contacto con el pavimento. Al no tocar el suelo, las ruedas delanteras dejan de transmitir resistencia al volante, y por eso lo sientes suelto o liviano; en ese instante ni la dirección ni los frenos responden. La única maniobra correcta es soltar el acelerador y dejar que el vehículo pierda velocidad por sí mismo, manteniendo el volante firme y derecho, porque al reducir la marcha los neumáticos vuelven a perforar la capa de agua y recuperan el agarre. Frenar o girar bruscamente en pleno aquaplaning solo provoca un derrape descontrolado al recuperar la adherencia de golpe. El riesgo es salir despedido de la pista o cruzarte al sentido contrario. Truco: si la dirección flota, no toques nada brusco, solo levanta el pie y espera a que el auto vuelva a pisar tierra."
  },
  {
    "id": 224,
    "question": "Cuando hay nieve lo mejor es conducir manteniéndose en la marcha más alta posible. ¿Por qué es esto?",
    "options": [
      "Para reducir rápidamente la velocidad al frenar.",
      "Para que el patinaje de las ruedas no haga que el motor funcione demasiado rápido.",
      "Para ayudar a evitar que las ruedas patinen.",
      "Para dejar disponible una marcha baja en el caso de que las ruedas patinen."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Mantener la marcha más alta posible sobre nieve ayuda a evitar que las ruedas patinen, porque entrega menos fuerza al pavimento y permite que los neumáticos giren de forma más suave y controlada. Así se conserva la poca adherencia disponible en la superficie resbaladiza.",
    "wrongExplanations": [
      "La marcha alta no sirve para reducir rápido la velocidad; de hecho el freno motor es menor, y la prioridad sobre nieve es evitar el patinaje, no frenar fuerte.",
      "El motivo no es proteger el motor de revolucionarse, sino mantener la adherencia de las ruedas evitando que patinen.",
      "",
      "El objetivo no es reservar una marcha baja, sino prevenir directamente el patinaje conduciendo en marcha alta."
    ],
    "page": 58,
    "category": "Conduccion segura",
    "deepExplanation": "El principio es el mismo del control de torque sobre superficies resbaladizas, pero aquí la pregunta apunta a una razón específica entre varias parecidas: mantener la marcha más alta posible ayuda a evitar que las ruedas patinen, y esa es la finalidad central. Una marcha alta entrega menos fuerza de giro al pavimento, de modo que las ruedas no reciben más empuje del que la nieve puede tolerar, conservando la escasa adherencia. Hay que distinguirla de las opciones que suenan razonables pero no son la causa: la marcha alta no sirve para frenar más rápido ni se elige para tener una marcha baja de reserva, sino directamente para impedir el patinaje desde el inicio. El razonamiento paso a paso es: nieve igual a poco agarre, marcha alta igual a poca fuerza a las ruedas, poca fuerza igual a menos patinaje. El riesgo de usar marcha baja es que el exceso de torque haga girar las ruedas en vano y pierdas tracción y control. Para recordarlo: en nieve, mientras más alta la marcha y más suave el pie, menos patinas."
  },
  {
    "id": 225,
    "question": "¿Cuál es la principal razón por la cual su distancia de detención total es mayor después de una lluvia torrencial?",
    "options": [
      "Porque puede que usted no vea las pozas grandes.",
      "Porque los frenos estarán fríos al estar mojados.",
      "Porque sus neumáticos tendrán menos adherencia sobre la calzada.",
      "Porque el agua sobre el parabrisas nublará su visión hacia el frente."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "La razón principal es que los neumáticos tienen menos adherencia sobre la calzada mojada, ya que el agua reduce la fricción entre la goma y el pavimento. Con menos agarre, las ruedas necesitan más distancia para detenerse, por lo que la distancia total de detención aumenta.",
    "wrongExplanations": [
      "Aunque no ver las pozas es un riesgo, eso no explica por qué aumenta la distancia de detención; la causa real es la menor adherencia.",
      "Los frenos mojados pueden perder eficacia momentáneamente, pero no quedan fríos; la causa principal del mayor frenado es la falta de adherencia de los neumáticos.",
      "",
      "El agua en el parabrisas afecta la visibilidad, pero no es la razón física por la que el vehículo tarda más en detenerse."
    ],
    "page": 58,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La distancia total de detención es la suma de la distancia de reacción (lo que avanzas mientras decides frenar) más la distancia de frenado (lo que avanzas ya pisando el freno), y lo que cambia drásticamente con la lluvia es la segunda. El motivo principal es que los neumáticos tienen menos adherencia sobre el pavimento mojado: el agua reduce el coeficiente de fricción entre la goma y el asfalto, así que aunque pises el freno con la misma fuerza, las ruedas tardan más en disipar la energía y el vehículo recorre más metros antes de quedar quieto. Las otras opciones son distractores reales pero secundarios: no ver las pozas o tener el parabrisas nublado afectan la visión, no la física del frenado, y los frenos mojados se secan pronto, mientras que la falta de agarre persiste todo el rato que el suelo está húmedo. Por eso la regla práctica chilena es duplicar la distancia de seguimiento con lluvia. El riesgo de no hacerlo es chocar por alcance al no poder detenerte a tiempo. Truco: con pavimento mojado, cuenta el doble de segundos de separación que en seco."
  },
  {
    "id": 226,
    "question": "En una ocasión de mucha neblina usted va detrás de otros vehículos y lleva encendidas sus luces bajas. ¿De qué otra forma puede reducir las probabilidades de verse involucrado en un accidente?",
    "options": [
      "Usando sus luces altas en vez de bajas.",
      "Circulando a baja velocidad y aumentando la distancia al vehículo que va adelante.",
      "Manteniéndose cerca del vehículo que va delante suyo.",
      "Encendiendo sus luces de advertencia de peligro."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Con mucha neblina debes circular a baja velocidad y aumentar la distancia con el vehículo de adelante, porque la visibilidad reducida deja menos tiempo de reacción ante frenadas imprevistas. Esa mayor separación te da el espacio necesario para detenerte con seguridad.",
    "wrongExplanations": [
      "Las luces altas en neblina rebotan en las gotas de agua y producen un reflejo que encandila y empeora tu propia visión; por eso se usan las bajas.",
      "",
      "Mantenerse cerca del vehículo de adelante reduce el tiempo de reacción y aumenta el riesgo de colisión por alcance en condiciones de baja visibilidad.",
      "Las luces de advertencia de peligro se usan en emergencias o detenciones, no mientras circulas normalmente; podrían confundir a otros conductores."
    ],
    "page": 58,
    "category": "Conduccion segura",
    "deepExplanation": "Con neblina densa el problema central es que ves muy poco hacia adelante, por lo que cualquier frenada o detención del vehículo que va delante te sorprende con muy poco tiempo de reacción. La medida adicional correcta, además de las luces bajas, es circular a baja velocidad y aumentar la distancia con el de adelante, porque ese mayor espacio es lo único que te garantiza poder detenerte dentro del campo visual disponible. Las luces altas son un error frecuente: en neblina la luz alta rebota en las gotas suspendidas y forma una pantalla blanca que encandila al propio conductor, empeorando la visión, por eso van las bajas o las neblineras. Mantenerse cerca del de adelante para guiarse por sus luces es muy peligroso, porque si frena de golpe no alcanzas a reaccionar. El razonamiento es: menos visibilidad exige más distancia y menos velocidad para compensar el menor tiempo de reacción. El riesgo de no hacerlo es un choque en cadena, típico de los accidentes masivos en autopista con neblina. Truco: con neblina, baja el pie y abre el espacio."
  },
  {
    "id": 227,
    "question": "En un pavimento mojado usted va circulando detrás de un vehículo manteniéndose a una distancia segura de él. De pronto es adelantado por otro vehículo que se ubica en el espacio que usted había dejado. ¿Qué debería hacer usted?",
    "options": [
      "Encender y apagar sus luces en señal de advertencia.",
      "Tratar de adelantar tan pronto pueda hacerlo en forma segura.",
      "Disminuir su velocidad hasta recuperar una distancia segura respecto del que va adelante.",
      "Mantener su velocidad y esperar a que el vehículo se aleje."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si otro vehículo se mete en el espacio de seguridad que dejabas, debes disminuir tu velocidad hasta recuperar nuevamente una distancia segura respecto del que va adelante. En pavimento mojado la distancia de frenado es mayor, así que recuperar ese margen es fundamental para poder detenerte a tiempo.",
    "wrongExplanations": [
      "Hacer señales con las luces no soluciona el problema y puede ser interpretado como una provocación o distraer a los demás conductores.",
      "Intentar adelantar en pavimento mojado y con tráfico es arriesgado e innecesario; la prioridad es recuperar la distancia de seguridad.",
      "",
      "Mantener la velocidad esperando que se aleje te deja sin la distancia de seguridad necesaria, lo que es peligroso en calzada mojada."
    ],
    "page": 58,
    "category": "Conduccion segura",
    "deepExplanation": "La distancia de seguimiento no es un capricho sino tu margen de frenado: en pavimento mojado la distancia de detención aumenta porque hay menos adherencia, así que ese espacio debe ser aún mayor de lo normal. Cuando otro conductor te adelanta y se instala justo en el hueco que dejabas, tu margen de seguridad desaparece de golpe y quedas demasiado cerca del nuevo vehículo de adelante. La acción correcta es disminuir suavemente tu velocidad hasta recuperar nuevamente una distancia segura, cediendo terreno sin molestarte ni reaccionar de forma agresiva. Las otras opciones son contraproducentes: hacer luces o intentar adelantar de inmediato son maniobras de fastidio que aumentan el riesgo, y mantener la velocidad esperando que se aleje te deja sin margen si ese auto frena. El razonamiento es simple: si perdiste tu distancia de seguridad, la reconstruyes reduciendo velocidad. El riesgo de no hacerlo es no poder frenar a tiempo en suelo mojado y chocar por alcance. Truco: el espacio es tuyo y lo reconstruyes tú, soltando el acelerador hasta volver a respirar tranquilo."
  },
  {
    "id": 228,
    "question": "¿Cómo puede usted controlar mejor su vehículo al conducir con nieve?",
    "options": [
      "Conduciendo en un cambio bajo y sujetando el volante muy firmemente.",
      "Conduciendo en primera.",
      "Manteniendo el motor acelerado y presionando el pedal de embrague.",
      "Conduciendo lentamente en el cambio más alto posible."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Sobre nieve controlas mejor el vehículo conduciendo lentamente y en el cambio más alto posible, porque una marcha alta reduce la fuerza transmitida a las ruedas y evita que estas patinen. La baja velocidad, sumada a maniobras suaves, mantiene la estabilidad y la adherencia.",
    "wrongExplanations": [
      "Un cambio bajo entrega más torque a las ruedas y favorece el patinaje sobre nieve; sujetar fuerte el volante no compensa esa pérdida de control.",
      "Conducir en primera aplica demasiada fuerza a las ruedas y las hace patinar con facilidad en la nieve.",
      "Mantener el motor acelerado con el embrague presionado descontrola la tracción y no entrega un manejo seguro sobre nieve.",
      ""
    ],
    "page": 58,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Esta pregunta integra los dos factores que dan control sobre nieve: la velocidad y la marcha. La respuesta correcta combina ambos, conducir lentamente y en el cambio más alto posible, porque la baja velocidad te da tiempo de reacción y maniobras suaves, mientras que la marcha alta reduce la fuerza transmitida a las ruedas para que no patinen sobre la superficie de poca adherencia. Hay que descartar los distractores con cuidado: un cambio bajo entrega demasiado torque y hace girar las ruedas en falso, conducir en primera es lo mismo llevado al extremo, y mantener el motor acelerado pisando el embrague deja al vehículo sin control del motor y rodando libre, lo que es muy peligroso en bajada o en curva. El razonamiento es: suavidad más marcha alta igual a adherencia conservada. El riesgo de equivocarse es perder tracción, patinar y no poder dirigir el auto. Truco para memorizar: sobre nieve manejas despacio y arriba de marcha, como deslizándote en puntillas para no romper el hielo."
  },
  {
    "id": 229,
    "question": "Al ir de noche por una carretera usted debe mantener sus focos delanteros encendidos, a menos que ...",
    "options": [
      "su vehículo esté en pana en la berma.",
      "vayan vehículos muy cerca delante suyo.",
      "circule a menos de 50 km/hr.",
      "la carretera esté iluminada."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [],
    "explanation": "De noche en carretera debes mantener encendidos los focos delanteros, salvo que tu vehículo esté en pana en la berma, situación en la que corresponde usar las luces de emergencia y la señalización adecuada. En ese caso el vehículo está detenido fuera de la circulación, por lo que no requiere los focos delanteros encendidos del mismo modo.",
    "wrongExplanations": [
      "",
      "Aunque haya vehículos cerca delante, debes seguir con las luces encendidas (las bajas) para ser visto; nunca apagar los focos.",
      "La velocidad no exime de llevar los focos encendidos de noche; siempre debes mantener iluminación al circular en la oscuridad.",
      "Aunque la carretera esté iluminada, igual debes llevar tus focos encendidos de noche para ser visto por los demás conductores."
    ],
    "page": 60,
    "category": "Conduccion segura",
    "deepExplanation": "La regla general de la Ley de Tránsito es que de noche o con poca visibilidad todo vehículo en movimiento debe llevar encendidos sus focos delanteros para ver y, sobre todo, para ser visto por los demás. La excepción que plantea la pregunta es cuando el vehículo está en pana detenido en la berma: ahí ya no está circulando, sino estacionado de emergencia fuera de la pista, por lo que la señalización correcta pasa a ser las luces de advertencia de peligro (intermitentes) y el triángulo reflectante, no los focos delanteros encendidos que podrían incluso encandilar a quien se acerca de frente. Las demás alternativas son falsas: nunca apagas los focos porque vayan vehículos delante (eso solo cambia de altas a bajas), ni porque circules a menos de 50 ni porque la vía esté iluminada, ya que la iluminación de la calle no reemplaza tu obligación de ser visible. El razonamiento es distinguir entre vehículo en marcha (focos sí) y vehículo detenido de emergencia (señalización de peligro). El riesgo de apagar luces circulando es volverte invisible y provocar un choque. Truco: en movimiento siempre con luces; detenido en la berma, con balizas y triángulo."
  },
  {
    "id": 230,
    "question": "¿Cómo debería conducir usted en una curva cuando hay hielo en la calzada?",
    "options": [
      "Usando el embrague y el freno al mismo tiempo.",
      "Lenta y suavemente.",
      "En primera.",
      "Frenando a medida que va tomando la curva."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "En una curva con hielo debes conducir lenta y suavemente, evitando acelerones, frenadas o giros bruscos que rompan la escasa adherencia y provoquen un derrape. La suavidad en todas las maniobras es la clave para mantener el control sobre una superficie resbaladiza.",
    "wrongExplanations": [
      "Usar embrague y freno al mismo tiempo en la curva descontrola la tracción y favorece el derrape sobre el hielo.",
      "",
      "Conducir en primera entrega demasiada fuerza a las ruedas y puede hacerlas patinar al tomar la curva con hielo.",
      "Frenar mientras tomas la curva sobre hielo es muy peligroso, porque bloquea las ruedas y provoca pérdida de control."
    ],
    "page": 60,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "En una curva el vehículo enfrenta fuerza centrífuga que tiende a sacarlo hacia afuera, y para vencerla necesita adherencia lateral de los neumáticos; sobre hielo esa adherencia es casi nula, así que el margen para cualquier error es mínimo. Por eso debes conducir lenta y suavemente, llegando a la curva ya con la velocidad reducida desde antes y atravesándola sin acelerar, frenar ni girar de golpe, porque cualquier maniobra brusca consume la poca adherencia disponible y desencadena un derrape. Las otras opciones son errores clásicos: frenar mientras tomas la curva transfiere peso y hace perder el control del eje trasero, usar embrague y freno juntos deja las ruedas sin tracción del motor, y la primera entrega demasiado torque. El razonamiento es frenar antes de entrar y pasar la curva a velocidad constante y muy suave. El riesgo real es que el auto se vaya de lado o se salga de la pista sin que puedas corregirlo. Truco para recordar: en hielo se entra lento a la curva y se sale sin tocar el freno, todo con manos de seda."
  },
  {
    "id": 231,
    "question": "Hay mucha neblina y el auto que viene detrás suyo parece estar muy cerca. ¿Qué debería hacer usted?",
    "options": [
      "Encender sus luces de advertencia de peligro.",
      "Desplazarse hacia el costado derecho y detenerse de inmediato.",
      "Acelerar y alejarse de él.",
      "Continuar con mucho cuidado."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Si con neblina el auto de atrás se acerca demasiado, lo correcto es continuar con mucho cuidado, manteniendo tu velocidad segura y la distancia con quien va delante. No debes acelerar ni frenar bruscamente por presión del de atrás, ya que eso aumentaría el riesgo de accidente.",
    "wrongExplanations": [
      "Las luces de advertencia de peligro se reservan para emergencias o detenciones, no para indicarle a quien va detrás que se acerca.",
      "Detenerte de inmediato al costado en plena neblina es peligroso y puede provocar que el de atrás te impacte por la baja visibilidad.",
      "Acelerar para alejarte aumenta tu velocidad en condiciones de poca visibilidad, lo que es muy riesgoso y puede causar un accidente.",
      ""
    ],
    "page": 60,
    "category": "Conduccion segura",
    "deepExplanation": "Aquí la presión viene de atrás: con neblina densa otro conductor te sigue demasiado cerca, y tu instinto puede empujarte a acelerar para alejarte o a frenar para advertirle, pero ambas reacciones son peligrosas. Lo correcto es continuar con mucho cuidado, manteniendo tu propia velocidad segura y tu distancia con el vehículo de adelante, sin dejar que el de atrás te imponga su ritmo. Si aceleras igualas el error de él y reduces tu tiempo de reacción justo cuando la visibilidad es pésima; si frenas bruscamente o encerándolo con las luces de emergencia podrías provocar que te choque por alcance. La responsabilidad de mantener distancia es de quien va detrás, así que no debes asumir su riesgo cambiando tu conducción prudente. El razonamiento es: conserva tu seguridad, no te contagies del apuro ajeno. El riesgo de reaccionar mal es un choque en cadena, frecuente en neblina. Truco: el problema del de atrás es del de atrás; tú sigue firme, lento y atento a lo que tienes adelante."
  },
  {
    "id": 232,
    "question": "Usted va conduciendo de noche por una carretera cerca de otros vehículos que van delante suyo. ¿Qué luces debería mantener encendidas?",
    "options": [
      "Las neblineras delanteras.",
      "Las luces altas.",
      "Las luces bajas.",
      "Las luces de estacionamiento."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "De noche en carretera y cerca de otros vehículos que van delante debes mantener las luces bajas, porque las altas encandilarían por el espejo retrovisor al conductor que va adelante. Las luces bajas iluminan lo suficiente sin deslumbrar a los demás.",
    "wrongExplanations": [
      "Las neblineras delanteras se usan solo con neblina o muy baja visibilidad; usarlas en condiciones normales puede molestar a otros conductores.",
      "Las luces altas encandilarían por el retrovisor al vehículo que va adelante, por lo que no deben usarse cuando hay otros cerca.",
      "",
      "Las luces de estacionamiento son insuficientes para circular de noche y no iluminan adecuadamente la vía."
    ],
    "page": 60,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El fundamento normativo es la prohibición de encandilar a otros conductores: de noche, cuando circulas cerca de vehículos que van delante tuyo, debes usar las luces bajas, porque las altas se reflejan en sus espejos retrovisor e lateral y le enceguecen, además de deslumbrar a quienes vienen de frente. Las luces altas se reservan para carretera oscura y solitaria, sin nadie cerca, y debes bajarlas apenas aparezca otro vehículo. Las neblineras solo corresponden con niebla, lluvia o polvo, no como iluminación normal, y las luces de estacionamiento son insuficientes para circular porque casi no alumbran el camino. El razonamiento es elegir la luz que te permite ver lo suficiente sin perjudicar la visión de los demás, y esa es la baja. El riesgo de usar altas detrás de otro auto es que el conductor encandilado pierda referencia y provoque un accidente, además de la infracción correspondiente. Truco: si hay alguien adelante o de frente, bajas las luces; las altas son solo para la oscuridad sin compañía."
  },
  {
    "id": 233,
    "question": "¿Por qué razón debería usted reducir siempre su velocidad al conducir con neblina?",
    "options": [
      "Porque los frenos no funcionan bien.",
      "Porque las luces neblineras de otros lo pueden encandilar.",
      "Porque es más difícil ver lo que hay más adelante.",
      "Porque el motor está más frío."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Debes reducir la velocidad con neblina porque es más difícil ver lo que hay más adelante, y la menor visibilidad acorta el tiempo y la distancia para reaccionar ante un obstáculo o un vehículo detenido. A menor velocidad, mayor es tu margen para detenerte con seguridad.",
    "wrongExplanations": [
      "La neblina no afecta el funcionamiento de los frenos; el problema es la visibilidad reducida.",
      "Aunque las neblineras de otros pueden molestar, la razón principal para reducir velocidad es que tú ves menos hacia adelante.",
      "",
      "La temperatura del motor no tiene relación con la necesidad de bajar la velocidad en neblina."
    ],
    "page": 60,
    "category": "Conduccion segura",
    "deepExplanation": "La razón de reducir la velocidad con neblina es directa y se relaciona con la visibilidad: cuesta mucho ver lo que hay más adelante, y conducir es básicamente reaccionar a lo que ves, así que si ves menos, debes darte más tiempo y espacio para responder. La velocidad segura siempre es aquella que te permite detenerte dentro del tramo que alcanzas a ver, y con neblina ese tramo se acorta a pocos metros, por lo que la velocidad también debe bajar para no quedar manejando a ciegas hacia un obstáculo invisible. Las otras alternativas son falsas: los frenos funcionan normalmente con neblina, las neblineras ajenas rara vez encandilan como las altas, y el motor frío no tiene relación con la decisión de bajar la velocidad. El razonamiento es: visión reducida obliga a velocidad reducida para mantener el equilibrio entre lo que ves y lo que necesitas para frenar. El riesgo de no hacerlo es atropellar o chocar algo que apareció dentro de tu corta visibilidad. Truco: nunca manejes más rápido de lo que alcanzas a ver, y con neblina ves muy poco."
  },
  {
    "id": 234,
    "question": "Su vehículo ha quedado en pana en medio de una autopista. ¿Qué es lo primero que usted debería hacer?",
    "options": [
      "Intentar detener a los autos que pasan para solicitar ayuda.",
      "Intentar reparar su vehículo rápidamente.",
      "Encender sus luces de advertencia de peligro.",
      "Instalar un triángulo reflectante para advertir a los demás usuarios."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Si tu vehículo queda en pana en plena autopista, lo primero es encender las luces de advertencia de peligro para alertar de inmediato al resto de los conductores de que estás detenido. Esa señal visible reduce el riesgo de un choque por alcance mientras tomas las demás medidas, como instalar el triángulo.",
    "wrongExplanations": [
      "Detener a los autos que pasan es peligroso e inútil como primera acción; primero debes hacerte visible con las balizas de emergencia.",
      "Intentar reparar el vehículo en medio de la autopista es muy riesgoso; lo primero es advertir a los demás de tu presencia.",
      "",
      "El triángulo reflectante es una medida importante, pero se instala después de encender las luces de emergencia, que es lo primero e inmediato."
    ],
    "page": 60,
    "category": "Conduccion segura",
    "deepExplanation": "Cuando quedas en pana en plena autopista, el peligro inmediato es que otros vehículos circulan a alta velocidad y pueden no advertir a tiempo que estás detenido, por eso la prioridad es hacerte visible cuanto antes. Lo primero, por su rapidez, es encender las luces de advertencia de peligro (intermitentes), porque se activan en un segundo desde el interior y alertan de inmediato a quienes vienen detrás de que hay un vehículo inmóvil. Recién después, y con extrema precaución, corresponde instalar el triángulo reflectante a la distancia reglamentaria por detrás, que es la segunda capa de protección, pero requiere bajarse y caminar, lo que toma tiempo. Detener autos para pedir ayuda o ponerte a reparar el vehículo en medio del tránsito te exponen a ser atropellado y no resuelven la urgencia. El razonamiento es: la señal más rápida primero, luego la señalización fija. El riesgo de no encender las balizas de inmediato es un choque por alcance a alta velocidad. Truco: primero las balizas con un botón, después el triángulo caminando con cuidado, y siempre ponerte fuera de la calzada."
  },
  {
    "id": 235,
    "question": "Usted va circulando por la pista de la derecha de una carretera de doble calzada muy transitada. Una señal le indica que a 800 m su pista se encuentra cerrada. ¿Qué debería hacer usted?",
    "options": [
      "Señalizar a la izquierda, luego detenerse y esperar a que alguien le dé la pasada.",
      "Encender sus luces de advertencia de peligro y desplazarse hacia la pista de su izquierda.",
      "Continuar hasta llegar a la obstrucción y luego se cambia hacia la pista de la izquierda.",
      "Desplazarse hacia la pista de su izquierda tan pronto pueda hacerlo en forma segura."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q235_0.png"
    ],
    "explanation": "Al saber con 800 m de anticipación que tu pista estará cerrada, debes desplazarte hacia la pista de tu izquierda tan pronto puedas hacerlo en forma segura. Cambiarte con tiempo y cuando haya un espacio adecuado evita maniobras de último momento y frenadas bruscas que provocan accidentes.",
    "wrongExplanations": [
      "Detenerse y esperar a que alguien te dé la pasada en una carretera muy transitada es peligroso y entorpece la circulación.",
      "No es necesario encender las luces de emergencia; basta con señalizar y cambiarte de pista cuando sea seguro, sin alarmar a los demás.",
      "Continuar hasta la obstrucción y recién ahí cambiarse obliga a una maniobra de último minuto y a frenar bruscamente, lo que es muy riesgoso.",
      ""
    ],
    "page": 60,
    "category": "Senales y semaforos",
    "deepExplanation": "Una señal que anuncia el cierre de tu pista a 800 metros existe precisamente para que tengas tiempo de planificar el cambio con calma y no llegar improvisando al punto del obstáculo. Por eso lo correcto es desplazarte hacia la pista de tu izquierda tan pronto puedas hacerlo en forma segura, es decir, en cuanto se abra un espacio adecuado en el flujo, sin esperar al último momento. Las otras opciones generan peligro: detenerte a esperar que te den la pasada interrumpe una carretera muy transitada y provoca alcances, encender las balizas y cambiarte de inmediato sin verificar espacio es brusco y confunde a los demás, y continuar hasta la obstrucción para recién intentar el cambio te obliga a una maniobra forzada cuando ya no hay margen. El razonamiento es aprovechar la anticipación que la señal te regala para integrarte con suavidad al tránsito de la pista contigua. El riesgo de dejarlo para el final es quedar bloqueado junto al cono, frenado, mientras intentas colarte. Truco: si te avisan con tiempo, cámbiate con tiempo, apenas haya hueco seguro."
  },
  {
    "id": 236,
    "question": "En una calle de una pista por sentido de tránsito usted se encuentra con que su pista está obstruida.",
    "options": [
      "Continúa, porque usted tiene el derecho a vía.",
      "Hace señas con la mano a quienes vienen en contra para que le den la pasada.",
      "Cede el paso al tránsito que viene en sentido contrario.",
      "Acelera para poder pasar primero."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q236_0.png"
    ],
    "explanation": "Cuando tu propia pista está obstruida en una calle de un sentido por pista, eres tú quien invade el espacio del tránsito que viene de frente, por lo que debes cederle el paso. La preferencia la tiene quien circula por su lado libre, y solo avanzas cuando la vía esté despejada.",
    "wrongExplanations": [
      "No tienes el derecho a vía: como tu pista está obstruida, eres tú quien debe ceder el paso a quien viene de frente.",
      "No corresponde exigir con señas que te den la pasada; la obligación es tuya de ceder el paso al tránsito contrario.",
      "",
      "Acelerar para pasar primero es peligroso e infringe la norma, ya que debes cederle el paso a quien viene en sentido contrario."
    ],
    "page": 62,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El principio de preferencia de paso resuelve este caso: en una calle de una sola pista por sentido, cuando tu pista está obstruida por un vehículo estacionado, un contenedor o una obra, eres tú quien debe salirse de su carril e invadir el espacio del sentido contrario para sortear el obstáculo. Como eres tú quien sale de su lado, la preferencia la conserva quien viene de frente circulando por su pista libre, y por lo tanto debes cederle el paso y esperar a que la vía esté despejada antes de avanzar. Las demás opciones son erradas y peligrosas: no tienes derecho de vía porque tu lado está bloqueado, hacer señas para que te den la pasada no transfiere la preferencia que la ley asigna, y acelerar para pasar primero es una imprudencia que puede terminar en choque frontal. El razonamiento es: el que tiene la pista libre tiene la prioridad; el que invade, espera y cede. El riesgo de no ceder es una colisión de frente o un atochamiento. Truco: si el obstáculo está en tu lado, el problema es tuyo, así que tú esperas y cedes."
  },
  {
    "id": 237,
    "question": "Usted va tirando un remolque pequeño que comienza a zigzaguear.¿Qué hace usted?",
    "options": [
      "Frena a fondo y mantiene la presión sobre el pedal de freno.",
      "Aumenta su velocidad tan pronto sea posible.",
      "Suelta ligeramente el volante y espera que el problema se corrija solo.",
      "Retira suavemente el pie del acelerador y disminuye la velocidad."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Si el remolque comienza a zigzaguear, debes retirar suavemente el pie del acelerador y dejar que la velocidad baje de forma gradual, sin frenar de golpe ni hacer maniobras bruscas. Al disminuir la velocidad, el conjunto recupera estabilidad y el zigzagueo se detiene por sí solo.",
    "wrongExplanations": [
      "Frenar a fondo con un remolque que zigzaguea agrava el descontrol y puede provocar que el conjunto se cruce o derrape.",
      "Aumentar la velocidad intensifica el zigzagueo y aumenta el riesgo de perder el control del remolque.",
      "Soltar el volante deja el vehículo sin dirección; el problema no se corrige solo y puede terminar en un accidente.",
      ""
    ],
    "page": 62,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El zigzagueo o coleo de un remolque ocurre cuando este empieza a oscilar de lado a lado por exceso de velocidad, mala distribución de la carga o una ráfaga de viento, y la oscilación tiende a amplificarse sola si reaccionas mal. La maniobra correcta es retirar suavemente el pie del acelerador para que el conjunto pierda velocidad de forma gradual, ya que al bajar la velocidad las fuerzas que alimentan el balanceo disminuyen y el remolque se realinea por sí solo detrás del auto. Frenar a fondo es justo lo contrario de lo recomendado, porque al frenar bruscamente el remolque empuja al vehículo y puede provocar una tijera o un vuelco; acelerar agrava la oscilación, y soltar el volante deja el conjunto sin guía. El razonamiento es: el balanceo se mata quitando energía despacio, no de golpe. El riesgo de equivocarse es perder el control de auto y remolque a la vez, con un accidente serio. Truco: si el remolque colea, levanta el pie del acelerador y mantén el volante firme y derecho, dejando que la velocidad caiga sola."
  },
  {
    "id": 238,
    "question": "En relación con el transporte de una carga sobre la parrilla de un automóvil, ¿cuál de las siguientes afirmaciones constituye una obligación para el conductor?",
    "options": [
      "Debe llevarse sólo cuando es estrictamente necesario.",
      "Debe ser lo más liviana posible.",
      "Debe estar cubierta con un plástico.",
      "Debe estar muy bien sujeta."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "La obligación del conductor al llevar carga sobre la parrilla es que esta vaya muy bien sujeta, de modo que no se mueva, se desplace ni caiga a la vía durante la marcha. Una carga suelta es un grave peligro tanto para el propio vehículo como para los demás usuarios de la vía.",
    "wrongExplanations": [
      "Que se lleve solo cuando sea necesario es una recomendación, pero la obligación legal concreta es que la carga vaya bien sujeta.",
      "Que sea liviana es deseable, pero la exigencia para el conductor es asegurar firmemente la carga, sin importar tanto su peso.",
      "Cubrir con plástico puede protegerla del clima, pero no es la obligación principal; lo esencial es que esté bien sujeta para que no se caiga.",
      ""
    ],
    "page": 62,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La obligación legal al transportar carga sobre la parrilla del techo es que vaya muy bien sujeta, de manera que no pueda moverse, desplazarse ni caer a la vía durante la marcha; esta exigencia busca proteger tanto la estabilidad de tu propio vehículo como la seguridad del resto de los usuarios. Las otras alternativas describen recomendaciones de sentido común o buenas prácticas, pero no son la obligación que la norma impone: llevar carga solo cuando es necesario, que sea liviana o que vaya cubierta con plástico ayudan, pero nada de eso reemplaza el deber de amarrarla firmemente. El razonamiento es que una carga firme no se transforma en proyectil ni altera el comportamiento del auto, mientras que una carga suelta sí lo hace por bien escogida que esté. El riesgo real de una carga mal sujeta es que se caiga al pavimento y provoque un accidente a quienes vienen detrás, o que desestabilice tu vehículo al frenar o en una curva. Truco: en la parrilla, lo importante no es qué llevas sino cómo lo amarras, y debe quedar tan firme que no se mueva ni un centímetro."
  },
  {
    "id": 239,
    "question": "¿Cómo puede usted detener el zigzagueo de una casa rodante que va remolcando?",
    "options": [
      "Moviendo el volante lentamente hacia cada lado.",
      "Acelerando para aumentar la velocidad.",
      "Disminuyendo la velocidad gradualmente.",
      "Deteniéndose lo más rápido que pueda."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Para detener el zigzagueo de una casa rodante que remolcas debes disminuir la velocidad de forma gradual, soltando el acelerador suavemente sin frenazos ni giros bruscos. Al bajar la velocidad de manera progresiva, el conjunto recupera la estabilidad y el balanceo se va corrigiendo.",
    "wrongExplanations": [
      "Mover el volante de lado a lado para contrarrestar el balanceo suele amplificar el zigzagueo y empeorar el descontrol.",
      "Acelerar aumenta la inestabilidad y hace que el zigzagueo de la casa rodante sea más violento.",
      "",
      "Detenerse lo más rápido posible implica frenar bruscamente, lo que puede provocar que la casa rodante se cruce o derrape."
    ],
    "page": 62,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "El balanceo o zigzagueo de una casa rodante remolcada responde a la misma física que cualquier remolque que entra en oscilación: una vez iniciado el coleo, este se amplifica si introduces movimientos o frenadas bruscas, y se apaga si le quitas energía con suavidad. Por eso la respuesta correcta es disminuir la velocidad de forma gradual, soltando el acelerador poco a poco y manteniendo el volante firme y recto, sin corregir el coleo girando el volante de un lado a otro. Mover el volante hacia cada lado solo realimenta la oscilación, acelerar la empeora porque aumenta la energía del sistema, y detenerse lo más rápido posible con un frenazo puede hacer que la casa rodante empuje al auto y lo cruce o lo haga tijera. El razonamiento es: la estabilidad vuelve al reducir velocidad lentamente, no al maniobrar. El riesgo de equivocarse, dado el peso y tamaño de una casa rodante, es un vuelco o la pérdida total del control. Truco: ante el coleo, pie fuera del acelerador, volante quieto y derecho, y dejar que el conjunto se calme solo al ir más lento."
  },
  {
    "id": 240,
    "question": "¿Qué precaución debe tomar usted al cargar un remolque que va a arrastrar con su automóvil?",
    "options": [
      "Que el mayor peso se concentre en la parte trasera.",
      "Que la mayor parte del peso se concentre en la parte delantera.",
      "Que el peso se distribuya en forma pareja.",
      "Que el peso se concentre al lado derecho."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "Al cargar un remolque debes distribuir el peso en forma pareja, de manera que quede equilibrado y estable durante la marcha. Una buena distribución evita que el remolque tienda a zigzaguear o a desestabilizar al vehículo que lo arrastra.",
    "wrongExplanations": [
      "Concentrar el peso atrás levanta la parte delantera del remolque, reduce el agarre y favorece el zigzagueo.",
      "Cargar todo el peso adelante sobrecarga el enganche y desequilibra el conjunto; lo correcto es repartirlo de forma pareja.",
      "",
      "Concentrar el peso a un costado desbalancea lateralmente el remolque y lo vuelve inestable y propenso a derrapar."
    ],
    "page": 62,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "La estabilidad de un remolque depende en gran medida de cómo se reparte el peso de la carga en su interior, porque un reparto desequilibrado altera el centro de gravedad y favorece el zigzagueo o el cabeceo. La precaución correcta es distribuir el peso en forma pareja, de modo que el remolque quede equilibrado de adelante hacia atrás y de lado a lado, sin concentraciones que lo desestabilicen. Cargar todo atrás aligera el enganche y hace que el remolque tienda a colear; cargar todo adelante recarga el enganche y el eje trasero del auto, afectando la dirección; y concentrar el peso a un costado lo inclina y lo vuelve inestable en curvas. Como referencia práctica suele buscarse un leve predominio del peso justo delante del eje del remolque, pero la regla general que pide la pregunta es el reparto equilibrado. El razonamiento es: peso parejo igual a remolque estable y predecible. El riesgo de un mal reparto es el zigzagueo en marcha, con posible pérdida de control. Truco: carga el remolque como una balanza, repartiendo el peso de forma pareja y firme para que no cabecee ni colee."
  },
  {
    "id": 241,
    "question": "En una carretera de doble calzada y de mucho tránsito, usted está siendo seguido muy de cerca por un vehículo que viene atrás. ¿Qué hace usted para disminuir el riesgo de accidente?",
    "options": [
      "Sale a la berma y se detiene.",
      "Enciende sus luces de advertencia de peligro.",
      "Frena.",
      "Aumenta su distancia al vehículo que va adelante."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Cuando otro vehículo lo sigue muy de cerca (lo 'pega'), lo más seguro es aumentar la distancia con el vehículo que va adelante. Así se gana espacio de reacción: si debe frenar, podrá hacerlo en forma suave y progresiva, dando tiempo al que viene atrás para detenerse y evitando una colisión por alcance.",
    "wrongExplanations": [
      "Salir a la berma y detenerse es maniobra de emergencia, no la respuesta a que lo sigan de cerca; en una carretera de mucho tránsito puede provocar un accidente.",
      "Las luces de advertencia solo señalan una emergencia o vehículo detenido; no reducen el riesgo de que el de atrás lo alcance ni resuelven la situación.",
      "Frenar es justamente lo más peligroso: el vehículo que lo sigue de cerca no alcanzaría a detenerse y chocaría por detrás.",
      ""
    ],
    "page": 62,
    "category": "Conduccion segura",
    "deepExplanation": "El fundamento aquí es la teoría de las distancias de seguridad y de quién controla el espacio en la carretera. Cuando un vehículo lo sigue muy de cerca (lo va 'pegando'), ese conductor ya redujo su propia distancia de reacción, así que usted no puede confiar en que él frene a tiempo; lo único que usted controla es el espacio hacia adelante. Si aumenta la distancia con el vehículo de adelante, se crea un colchón que le permite frenar suave y progresivamente en vez de golpe, evitando obligar al de atrás a clavar los frenos. Frenar bruscamente o detenerse en la berma solo aumentaría el riesgo de una colisión por alcance, y encender las balizas no soluciona que falte espacio. El riesgo real que se previene es el choque trasero en cadena, típico en carreteras de alto tránsito. Truco para recordarlo: si no puedes controlar al que viene atrás, controla el espacio de adelante, porque ese sí depende de ti."
  },
  {
    "id": 242,
    "question": "Combine cada texto con el número de la señal correcta (ver imagen). ¿Cuál es la combinación correcta de 'Mantenga su derecha / Pavimento resbaladizo / Curva / No adelantar'?",
    "options": [
      "Mantenga su derecha=3, Pavimento resbaladizo=5, Curva=1, No adelantar=4",
      "Mantenga su derecha=1, Pavimento resbaladizo=2, Curva=3, No adelantar=4",
      "Mantenga su derecha=4, Pavimento resbaladizo=3, Curva=2, No adelantar=1",
      "Mantenga su derecha=5, Pavimento resbaladizo=4, Curva=1, No adelantar=3"
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q242_0.png"
    ],
    "explanation": "La combinación correcta es Mantenga su derecha=3, Pavimento resbaladizo=5, Curva=1, No adelantar=4. Cada texto corresponde a su señal: 'Mantenga su derecha' y 'No adelantar' son reglamentarias, mientras 'Curva' y 'Pavimento resbaladizo' son señales de advertencia (rombo amarillo).",
    "wrongExplanations": [
      "",
      "Esta asociación de números no coincide con las señales mostradas en la imagen.",
      "Esta asociación de números no coincide con las señales mostradas en la imagen.",
      "Esta asociación de números no coincide con las señales mostradas en la imagen."
    ],
    "page": 63,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta evalúa que el alumno distinga la familia a la que pertenece cada señal según su forma y color, lo que está normado en el Manual de Señalización de Tránsito. 'Mantenga su derecha' y 'No adelantar' son señales reglamentarias (imponen una obligación o prohibición), mientras que 'Curva' y 'Pavimento resbaladizo' son señales de advertencia de peligro, que en Chile son rombos amarillos con símbolo negro. El razonamiento paso a paso consiste en clasificar primero por categoría y luego asociar cada texto a la imagen que muestra el símbolo coherente: una flecha curva para la curva, las huellas serpenteantes para el pavimento resbaladizo, etc. La combinación correcta es la opción A (Mantenga su derecha=3, Pavimento resbaladizo=5, Curva=1, No adelantar=4). El riesgo de confundirlas es interpretar una advertencia como una orden o viceversa, lo que altera la reacción esperada. Truco: el rombo amarillo siempre te dice 'ojo, viene algo'; el disco con orla roja te da una orden que debes obedecer."
  },
  {
    "id": 243,
    "question": "Usted va circulando por una carretera de doble calzada con tres pistas por sentido. Las demarcaciones de pistas y de eje central están reforzadas con tachas reflectantes. Si a su izquierda las tachas son rojas y a su derecha éstas son blancas, ¿por cuál pista va usted?",
    "options": [
      "Por la pista del medio.",
      "Por la pista de la izquierda.",
      "Por la pista de la derecha."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "Las tachas reflectantes rojas marcan el eje central o el borde donde no se debe cruzar (sentido contrario), y las blancas separan pistas del mismo sentido. Si a su izquierda ve tachas rojas (eje central) y a su derecha tachas blancas (otra pista de su sentido), usted circula por la pista de más a la izquierda de su calzada.",
    "wrongExplanations": [
      "Si fuera por la pista del medio tendría tachas blancas a ambos lados, no rojas a la izquierda.",
      "",
      "Por la pista de la derecha tendría a su derecha el borde de la calzada (tachas amarillas o la berma), no tachas rojas a la izquierda."
    ],
    "page": 63,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento son las tachas reflectantes, esos dispositivos que de noche le entregan información cromática sobre dónde está usted dentro de la calzada. La norma define que las tachas rojas advierten un límite que no debe cruzar porque al otro lado viene tránsito en sentido contrario o es el borde del eje central, mientras que las blancas separan pistas que van en su mismo sentido. Razonando paso a paso: si a su izquierda ve rojo, significa que justo a su izquierda está el eje central y más allá vienen vehículos de frente, por lo tanto no hay más pistas de su sentido a su izquierda; y si a su derecha ve blanco, hay otra pista de su mismo sentido hacia ese lado. La conclusión es que usted va por la pista de más a la izquierda de su calzada (opción B). El riesgo de no leer bien las tachas es invadir el sentido contrario de noche o con niebla. Truco: rojo es 'pare, peligro, no cruces'; si el rojo está a tu izquierda, estás pegado al eje y no debes pasarte para allá."
  },
  {
    "id": 244,
    "question": "Al ir circulando en su vehículo usted enfrenta esta señal. ¿Qué significa?",
    "options": [
      "Que usted puede conducir hasta un 10% más rápido, porque la señal es sólo una recomendación.",
      "Que en días no hábiles, cuando hay poco tránsito, no rige tal restricción.",
      "Que usted no debe exceder esta velocidad.",
      "Que usted debe mantener una velocidad inferior a la indicada en la señal."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q244_0.png"
    ],
    "explanation": "Esta es una señal reglamentaria de velocidad máxima: indica que usted no debe exceder la velocidad señalada. Es una orden obligatoria, no una sugerencia, y rige siempre en ese tramo independiente del día o del tránsito.",
    "wrongExplanations": [
      "La señal es obligatoria; no permite ningún margen extra de velocidad porque no es una recomendación.",
      "La restricción de velocidad máxima rige todos los días, también en días no hábiles o con poco tránsito.",
      "",
      "La señal fija un máximo permitido, no obliga a ir por debajo de él; usted puede circular hasta esa velocidad sin superarla."
    ],
    "page": 63,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal reglamentaria de velocidad máxima, y su fundamento está en la Ley de Tránsito que faculta a la autoridad a fijar límites obligatorios según las condiciones del tramo. Por ser reglamentaria, no es una recomendación ni admite un margen del 10%, ni se suspende los días de poco tránsito o festivos: rige siempre mientras esté instalada. El razonamiento correcto es entender que el número indica un techo, un máximo que no se puede superar, por eso la respuesta es la opción C (no debe exceder esa velocidad). Hay que descartar la D, que dice mantener una velocidad inferior, porque usted puede circular justo a la velocidad indicada, solo no por sobre ella. El riesgo de tratarla como sugerencia es exceder el límite y provocar un accidente o recibir una infracción grave. Truco: la velocidad máxima es un tope, no un piso; puedes ir hasta ese número, pero ni un kilómetro más."
  },
  {
    "id": 245,
    "question": "¿Qué significa esta señal?",
    "options": [
      "Usted no debe exceder la velocidad indicada.",
      "Es más seguro conducir a la velocidad indicada.",
      "La velocidad indicada es la máxima aconsejada.",
      "Es una recomendación para cuando hay mucho tránsito."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q245_0.png"
    ],
    "explanation": "Es una señal reglamentaria de velocidad máxima (disco blanco con orla roja y número): usted no debe exceder la velocidad indicada. Es una prohibición de carácter obligatorio que limita la velocidad en ese tramo.",
    "wrongExplanations": [
      "",
      "No se trata de un consejo de seguridad sino de un límite obligatorio que no se puede sobrepasar.",
      "No es una velocidad aconsejada sino la velocidad máxima permitida por norma.",
      "No es una recomendación para tránsito intenso; rige siempre como límite máximo obligatorio."
    ],
    "page": 63,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento de esta señal es su forma y color, que en el sistema chileno definen su carácter: un disco blanco con orla roja y un número en negro corresponde siempre a una señal reglamentaria de velocidad máxima. Al ser reglamentaria, impone una prohibición obligatoria de superar ese valor, no entrega un consejo ni indica la velocidad 'más segura' o 'aconsejada', por eso se descartan las opciones que hablan de recomendación. El razonamiento es directo: orla roja igual prohibición, número igual el límite que no se debe exceder, por lo tanto la respuesta correcta es la opción A. El riesgo de interpretarla como recomendación es que el conductor crea que puede ir más rápido cuando el tránsito está despejado, lo que es falso y peligroso. Truco para recordarlo: todo lo que tiene orla roja te está prohibiendo algo, y aquí lo prohibido es pasarte del número."
  },
  {
    "id": 246,
    "question": "¿Cuándo puede usted ingresar a un cruce en cuya calzada se han pintado franjas amarillas diagonales?",
    "options": [
      "Siempre que el semáforo esté en verde.",
      "Cuando en la salida del cruce tenga espacio suficiente como para no quedar detenido en él.",
      "Cada vez que va a virar hacia la derecha.",
      "Sólo cuando haya menos de dos vehículos delante suyo."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q246_0.png"
    ],
    "explanation": "Las franjas amarillas diagonales (zona achurada) marcan un cruce que debe mantenerse despejado. Usted solo puede ingresar cuando tenga la certeza de que a la salida hay espacio suficiente para no quedar detenido sobre el cruce, evitando bloquear el paso del tránsito transversal.",
    "wrongExplanations": [
      "Tener verde no basta: aunque el semáforo lo autorice, no debe entrar si va a quedar detenido dentro del cruce achurado.",
      "",
      "La señal no se relaciona con virar a la derecha sino con no quedar detenido bloqueando el cruce.",
      "El número de vehículos delante no es el criterio; lo que importa es contar con espacio de salida para no detenerse en el cruce."
    ],
    "page": 65,
    "category": "Senales y semaforos",
    "deepExplanation": "Las franjas amarillas diagonales pintadas en un cruce, llamadas zona achurada o de no detención, existen para mantener despejado un punto crítico por donde circula tránsito transversal. El fundamento es evitar que un vehículo quede atrapado sobre el cruce cuando la fila de adelante no avanza, lo que bloquearía a quienes vienen por la otra vía y generaría un nudo de tránsito. Por eso la regla es que usted solo ingresa cuando tiene la certeza de que a la salida del cruce hay espacio suficiente para no quedar detenido encima de él, que es la opción B. No basta con que el semáforo esté en verde, porque el verde autoriza a avanzar pero no garantiza que haya espacio para salir. El riesgo real es quedar bloqueando el cruce, exponerse a colisiones laterales y entorpecer toda la intersección. Truco: antes de entrar al achurado, primero asegúrate de que tienes por dónde salir."
  },
  {
    "id": 247,
    "question": "¿Qué significa esta señal de tránsito?",
    "options": [
      "Gravilla suelta.",
      "Peligro de que se pinchen los neumáticos.",
      "Pavimento resbaladizo.",
      "Curvas en el camino."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q247_0.png"
    ],
    "explanation": "Esta señal de advertencia (rombo amarillo) significa Pavimento resbaladizo: avisa que más adelante la calzada puede estar deslizante, por lluvia, hielo u otra causa. El conductor debe disminuir la velocidad y evitar maniobras o frenadas bruscas.",
    "wrongExplanations": [
      "La señal de gravilla suelta es distinta; esta advierte específicamente sobre superficie resbaladiza.",
      "No existe una señal de 'peligro de pinchazo'; el rombo mostrado advierte pavimento resbaladizo.",
      "",
      "La señal de curvas tiene un trazado de flechas o líneas curvas; esta representa un vehículo deslizándose sobre la calzada."
    ],
    "page": 65,
    "category": "Vehiculo y mantencion",
    "deepExplanation": "Esta es una señal de advertencia de peligro, reconocible por su forma de rombo amarillo con símbolo negro, cuyo significado es Pavimento resbaladizo (opción C). Su fundamento es prevenir al conductor de que más adelante la adherencia entre el neumático y la calzada será menor, por causas como lluvia, hielo, derrames o un tipo de pavimento más liso. El símbolo característico son las huellas de un vehículo derrapando o serpenteando, que representan esa pérdida de control. El razonamiento de seguridad es que al perder adherencia las frenadas y los giros bruscos pueden hacer derrapar el auto, por lo que se debe reducir la velocidad con anticipación y maniobrar de forma suave. El riesgo real es el deslizamiento y la pérdida de control, especialmente al frenar fuerte. Truco: cuando veas las huellas torcidas, suelta el acelerador antes de llegar y evita cualquier movimiento brusco del volante o del freno."
  },
  {
    "id": 248,
    "question": "¿Qué significa esta señal?",
    "options": [
      "No adelantar.",
      "Mantenga su derecha.",
      "Preferencia al tránsito que viene en sentido contrario.",
      "No cambiar de pista."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q248_0.png"
    ],
    "explanation": "Esta señal reglamentaria significa No adelantar: prohíbe adelantar a otros vehículos en ese tramo, generalmente por falta de visibilidad o seguridad. Es de cumplimiento obligatorio mientras dure la zona indicada.",
    "wrongExplanations": [
      "",
      "'Mantenga su derecha' es otra señal reglamentaria distinta; esta prohíbe adelantar.",
      "La preferencia al sentido contrario corresponde a una señal diferente, no a la prohibición de adelantar.",
      "'No cambiar de pista' no es lo que indica esta señal; aquí se prohíbe específicamente adelantar."
    ],
    "page": 65,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal reglamentaria, lo que se nota porque impone una prohibición, y su significado es No adelantar (opción A). El fundamento es que en ese tramo adelantar resulta inseguro, normalmente por falta de visibilidad, curvas, pendientes o proximidad de cruces donde no se alcanza a ver el tránsito de frente. Al ser reglamentaria, su cumplimiento es obligatorio durante toda la zona señalada, no es una sugerencia. El razonamiento para no confundirla es separar 'no adelantar' (prohibición de pasar a otro vehículo) de 'mantenga su derecha' o 'no cambiar de pista', que regulan otra conducta. El riesgo de adelantar en una zona prohibida es el choque frontal con un vehículo que venga en sentido contrario y que usted no alcanza a ver. Truco: si la señal te prohíbe adelantar, es porque alguien que tú no ves podría venir de frente; quédate detrás y espera la zona habilitada."
  },
  {
    "id": 249,
    "question": "¿Cuál de los siguientes tipos de señales le indica que no haga algo?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q249_0.png"
    ],
    "explanation": "Las señales reglamentarias o de prohibición le indican que NO haga algo (por ejemplo, no adelantar, no entrar, no virar). Suelen ser circulares con orla roja, y la opción C corresponde a este tipo de señal prohibitiva.",
    "wrongExplanations": [
      "Esta señal no corresponde al tipo prohibitivo que indica no hacer algo.",
      "Esta señal no corresponde al tipo prohibitivo que indica no hacer algo.",
      "",
      "Esta señal no corresponde al tipo prohibitivo que indica no hacer algo."
    ],
    "page": 66,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta evalúa que el alumno reconozca las tres grandes familias de señales por su función: las reglamentarias dan órdenes o prohibiciones, las de advertencia previenen peligros y las informativas entregan datos. Las que le indican que NO haga algo son las reglamentarias de prohibición, que en Chile suelen ser circulares con orla roja y muchas veces una barra diagonal, como no adelantar, no entrar o prohibido virar; en este caso corresponden a la opción C. El razonamiento es asociar la idea de 'prohibido' con la forma circular y el color rojo, que universalmente significan restricción. El riesgo de no distinguir esta familia es ignorar una prohibición y cometer una infracción o provocar un accidente. Truco fácil: rojo y redondo casi siempre significa 'no'; si ves orla roja, hay algo que no puedes hacer."
  },
  {
    "id": 250,
    "question": "¿Qué debe hacer usted cuando enfrenta esta señal?",
    "options": [
      "Detenerse sólo si viene algún vehículo por la otra vía.",
      "Detenerse sólo si hay peatones esperando para cruzar.",
      "Detenerse sólo si en la calzada está pintada la leyenda PARE.",
      "Detenerse siempre."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q250_0.png"
    ],
    "explanation": "Esta es la señal PARE (octágono rojo), que obliga a detenerse siempre por completo antes de la línea de detención o del cruce. Tras la detención total, el conductor debe ceder el paso y solo avanzar cuando sea seguro.",
    "wrongExplanations": [
      "La señal PARE obliga a detenerse siempre, no solo cuando viene otro vehículo.",
      "La detención es obligatoria en todos los casos, exista o no peatones esperando.",
      "El deber de detenerse rige aunque la leyenda PARE no esté pintada en la calzada; basta la señal vertical.",
      ""
    ],
    "page": 66,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es la señal PARE, única en su forma de octágono rojo precisamente para que se reconozca incluso de espaldas o con poca visibilidad. El fundamento normativo es que obliga a una detención total y completa, siempre, antes de la línea de detención o del borde del cruce, sin importar si vienen o no vehículos o peatones, por eso la respuesta es 'detenerse siempre' (opción D). Las demás opciones son trampas porque condicionan la detención a que haya tránsito o leyenda pintada, lo cual es incorrecto: la obligación de detenerse es incondicional. El razonamiento de seguridad es que solo deteniéndose por completo el conductor puede mirar bien, evaluar el cruce y ceder el paso antes de avanzar cuando sea seguro. El riesgo de hacer solo una 'frenada de paso' sin detenerse es no ver un vehículo y provocar una colisión en la intersección. Truco: PARE significa ruedas totalmente quietas, no basta con disminuir."
  },
  {
    "id": 251,
    "question": "¿Qué significa esta señal?",
    "options": [
      "Semáforo fuera de servicio.",
      "Proximidad de semáforo.",
      "Semáforo activado por peatones.",
      "Semáforos sincronizados."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q251_0.png"
    ],
    "explanation": "Esta señal de advertencia (rombo amarillo) indica Proximidad de semáforo: avisa que más adelante hay un semáforo, generalmente donde no es fácil de ver con anticipación. Permite al conductor prepararse para detenerse si corresponde.",
    "wrongExplanations": [
      "No indica que el semáforo esté fuera de servicio; advierte que más adelante existe uno.",
      "",
      "No corresponde a un semáforo activado por peatones, sino a la advertencia de proximidad de un semáforo.",
      "No se refiere a semáforos sincronizados; anuncia la cercanía de un semáforo."
    ],
    "page": 66,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal de advertencia de peligro, identificable por su rombo amarillo con símbolo negro, y su significado es Proximidad de semáforo (opción B). Su fundamento es anticipar al conductor que más adelante hay un semáforo, sobre todo en lugares donde por una curva, una pendiente o un obstáculo no se alcanza a ver con suficiente anticipación. El razonamiento es distinguirla de las opciones de 'semáforo fuera de servicio' o 'activado por peatones', que describen estados o funciones distintas; aquí solo se avisa que viene un semáforo. El riesgo que previene es llegar al cruce sin tiempo para detenerse si la luz está en rojo, lo que obligaría a una frenada brusca o a pasarse el rojo. Truco: el rombo amarillo con el dibujo del semáforo te dice 'prepárate, viene un cruce con luces', así llegas a la velocidad adecuada para detenerte si corresponde."
  },
  {
    "id": 252,
    "question": "¿Qué significa un semáforo en rojo?",
    "options": [
      "Que usted puede seguir su camino si no vienen vehículos por la otra vía.",
      "Que usted debe disminuir su velocidad y estar preparado para detenerse.",
      "Que usted debe detenerse antes de la línea de detención de vehículos.",
      "Que usted debe detenerse sobre el paso de peatones."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "El semáforo en rojo obliga a detenerse completamente antes de la línea de detención de vehículos (o, en su defecto, antes del paso peatonal o del cruce). Se debe permanecer detenido hasta que la luz cambie a verde.",
    "wrongExplanations": [
      "La luz roja obliga a detenerse aunque no vengan vehículos por la otra vía; no autoriza a seguir.",
      "Disminuir y prepararse para detenerse corresponde a la luz amarilla, no al rojo, que obliga a la detención total.",
      "",
      "Detenerse sobre el paso de peatones es incorrecto: debe detenerse antes de la línea de detención, sin invadir el cruce peatonal."
    ],
    "page": 66,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento del semáforo en rojo es ordenar la prioridad de paso en una intersección, otorgando el verde a un sentido mientras detiene al otro para evitar que ambos crucen a la vez. La regla es clara: el rojo obliga a una detención completa antes de la línea de detención de vehículos, y por eso la respuesta correcta es la opción C. Si no existe línea de detención pintada, la detención se hace antes del paso peatonal o del cruce, pero nunca sobre el paso de peatones, que es justamente lo que descarta una de las opciones erróneas. El razonamiento es que detenerse antes de la línea deja libre el cruce peatonal y el área de la intersección para los demás. El riesgo de avanzar 'si no vienen vehículos' es atropellar a un peatón o chocar con quien tiene el verde. Truco: con luz roja, las ruedas quedan detrás de la línea blanca, nunca encima del cruce."
  },
  {
    "id": 253,
    "question": "¿Para qué sirven las señales amarillas con forma de rombo?",
    "options": [
      "Para entregar información.",
      "Para dar órdenes.",
      "Para indicar direcciones.",
      "Para advertir acerca de peligros."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q253_0.png"
    ],
    "explanation": "Las señales amarillas con forma de rombo son señales de advertencia: sirven para advertir al conductor sobre peligros o condiciones especiales del camino más adelante (curvas, cruces, pavimento resbaladizo, escolares, etc.). Su función es prevenir, no ordenar ni informar.",
    "wrongExplanations": [
      "Entregar información es función de las señales informativas (generalmente azules o verdes), no de los rombos amarillos.",
      "Dar órdenes corresponde a las señales reglamentarias; los rombos amarillos solo advierten.",
      "Indicar direcciones es propio de las señales informativas u orientativas, no de las de advertencia.",
      ""
    ],
    "page": 68,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta apunta al fundamento del sistema de señalización chileno, donde cada combinación de forma y color define la función de la señal. Las señales con forma de rombo y color amarillo pertenecen a la familia de advertencia de peligro, cuya misión es prevenir al conductor sobre una condición o peligro que encontrará más adelante, como curvas, cruces, pavimento resbaladizo, escolares o animales, por eso la respuesta es la opción D. El razonamiento es separar su propósito del de las reglamentarias (que dan órdenes) y del de las informativas (que entregan datos o direcciones). El amarillo se eligió por su alta visibilidad y porque universalmente se asocia con precaución, igual que en un semáforo. El riesgo de no entender su rol es no anticiparse al peligro y reaccionar tarde. Truco para memorizar: rombo amarillo igual 'atención, viene un peligro', siempre te avisa antes para que reduzcas la velocidad."
  },
  {
    "id": 254,
    "question": "¿Qué significa un semáforo en amarillo?",
    "options": [
      "Que usted debe prepararse para continuar.",
      "Que usted debe detenerse antes de entrar al cruce, a menos que no alcance a hacerlo en forma segura.",
      "Que usted debe continuar, siempre que vaya a virar.",
      "Que usted debe continuar si no hay peatones cruzando."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "El semáforo en amarillo indica que debe detenerse antes de entrar al cruce, salvo que ya esté tan cerca que detenerse sea inseguro (por ejemplo, frenar bruscamente). El amarillo anuncia el cambio a rojo, no autoriza a acelerar para pasar.",
    "wrongExplanations": [
      "El amarillo no significa prepararse para continuar; anuncia el rojo e indica que debe detenerse si puede hacerlo con seguridad.",
      "",
      "El amarillo no autoriza a continuar por el hecho de ir a virar; igualmente debe detenerse si alcanza a hacerlo en forma segura.",
      "La presencia o no de peatones no cambia el significado del amarillo, que obliga a detenerse cuando es seguro."
    ],
    "page": 68,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento de la luz amarilla del semáforo es servir de transición entre el verde y el rojo, dando aviso de que el paso está por cerrarse. La regla, recogida en la Ley de Tránsito, indica que ante el amarillo usted debe detenerse antes de entrar al cruce, salvo que ya esté tan cerca que frenar resulte inseguro, por ejemplo provocando una frenada brusca o un choque por alcance; por eso la respuesta correcta es la opción B. El error frecuente es interpretar el amarillo como una invitación a acelerar para 'alcanzar a pasar', lo cual contradice su propósito y es de las principales causas de choques en intersecciones. El razonamiento de seguridad es evaluar la distancia: si puede detenerse con comodidad, hágalo; si está sobre el cruce o demasiado cerca, complete el paso. El riesgo real es quedar atrapado en la intersección o chocar con quien arranca al obtener su verde. Truco: amarillo significa preparar la detención, no pisar el acelerador."
  },
  {
    "id": 255,
    "question": "¿Qué significa esta señal?",
    "options": [
      "Angostamiento de la vía.",
      "Preferencia al tránsito que viene en sentido contrario.",
      "Proximidad de doble calzada.",
      "Dos sentidos de tránsito más adelante."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q255_0.png"
    ],
    "explanation": "Esta señal de advertencia significa que más adelante hay dos sentidos de tránsito (doble sentido): la vía que venía separada o de un solo sentido pasa a tener circulación en ambos sentidos. Advierte para extremar precauciones con el tránsito que vendrá de frente.",
    "wrongExplanations": [
      "El angostamiento de la vía es otra señal distinta que muestra la calzada estrechándose, no el doble sentido.",
      "La preferencia al tránsito contrario es una señal reglamentaria diferente, no esta advertencia de doble sentido.",
      "La proximidad de doble calzada indica el inicio de calzadas separadas, lo contrario a lo que advierte esta señal.",
      ""
    ],
    "page": 68,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal de advertencia de peligro, de rombo amarillo con símbolo negro, y significa que más adelante la vía pasa a tener dos sentidos de tránsito (opción D). Su fundamento es prevenir al conductor que venía por una calzada de un solo sentido o separada por un bandejón, ya que a partir de ese punto se encontrará con vehículos circulando de frente. El símbolo característico son dos flechas verticales apuntando en sentidos opuestos. El razonamiento para no confundirla es que 'angostamiento' habla de una vía más estrecha y 'proximidad de doble calzada' es lo contrario a esta situación; aquí lo clave es la aparición del tránsito en contra. El riesgo real que previene es un choque frontal por no esperar vehículos de frente o por intentar adelantar invadiendo el otro sentido. Truco: las dos flechas en direcciones opuestas te dicen 'ahora compartes el camino con quien viene de frente', así que no adelantes a ciegas."
  },
  {
    "id": 256,
    "question": "¿Qué significa esta señal?",
    "options": [
      "Zona de escuela.",
      "Cruce de peatones.",
      "Niños jugando.",
      "Peatón debe transitar por su izquierda."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q256_0.png"
    ],
    "explanation": "Esta señal de advertencia indica un Cruce de peatones: avisa la proximidad de un lugar donde los peatones cruzan la calzada. El conductor debe reducir la velocidad y estar atento para cederles el paso.",
    "wrongExplanations": [
      "La zona de escuela tiene su propia señal (con la figura de escolares); esta advierte un cruce de peatones en general.",
      "",
      "'Niños jugando' es una señal distinta; esta se refiere específicamente al cruce de peatones.",
      "La señal no indica por qué lado debe transitar el peatón, sino que advierte un cruce de peatones."
    ],
    "page": 68,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal de advertencia de peligro, rombo amarillo con símbolo negro, que indica un Cruce de peatones más adelante (opción B). Su fundamento es alertar al conductor de la proximidad de un punto donde las personas cruzan la calzada, de modo que reduzca la velocidad y esté preparado para cederles el paso. El símbolo muestra la figura de una persona caminando sobre las líneas de un paso peatonal. El razonamiento para distinguirla es no confundirla con 'zona de escuela' o 'niños jugando', que advierten otra cosa: aquí el peligro específico es el cruce de peatones. El riesgo real que previene es el atropello, una de las consecuencias más graves del tránsito, sobre todo si el peatón aparece de improviso. Truco para recordarlo: si ves la figura caminando sobre las franjas, levanta el pie del acelerador y prepárate a frenar, porque alguien puede estar por cruzar."
  },
  {
    "id": 257,
    "question": "¿Cuál de estas señales le previene que más adelante hay una serie de curvas?",
    "options": [
      "A",
      "B",
      "C",
      "D"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q257_0.png"
    ],
    "explanation": "La señal de advertencia que previene una serie o sucesión de curvas (curvas sucesivas) corresponde a la opción B: muestra un trazado en zigzag con varias curvas consecutivas. Anuncia que el camino tendrá curvas encadenadas y se debe moderar la velocidad.",
    "wrongExplanations": [
      "Esta señal no representa una sucesión de curvas.",
      "",
      "Esta señal no representa una sucesión de curvas.",
      "Esta señal no representa una sucesión de curvas."
    ],
    "page": 69,
    "category": "Senales y semaforos",
    "deepExplanation": "El fundamento de esta pregunta es reconocer la señal de advertencia específica de curvas sucesivas, que se diferencia de la señal de una sola curva. Mientras una curva simple muestra un único giro, la de curvas sucesivas o serie de curvas dibuja un trazado en zigzag con dos o más curvas encadenadas, y corresponde a la opción B. El razonamiento es asociar la idea de 'serie' o 'varias' con el símbolo que muestra el camino serpenteando repetidamente. Su propósito es advertir que el tramo siguiente exige reducir la velocidad de forma sostenida, porque tras una curva viene otra de inmediato y no hay rectas largas para recuperar velocidad ni adelantar. El riesgo real es entrar demasiado rápido y perder el control en la primera curva o sorprenderse con la segunda. Truco: si el dibujo parece una S o un zigzag, son varias curvas seguidas, así que baja la velocidad antes de la primera y mantente prudente en todo el tramo."
  },
  {
    "id": 258,
    "question": "¿Qué significa esta señal?",
    "options": [
      "Que se cerca a una zona en la que no se permiten bicicletas.",
      "Que los ciclistas deben circular por la pista de la derecha.",
      "Que los ciclistas deben circular en sentido contrario.",
      "Que se acerca a una zona donde es muy probable la presencia de ciclistas en la vía."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [
      "q258_0.png"
    ],
    "explanation": "Esta señal de advertencia indica que usted se acerca a una zona donde es muy probable la presencia de ciclistas en la vía. Avisa para que el conductor extreme la precaución, reduzca la velocidad y respete la distancia al adelantar bicicletas.",
    "wrongExplanations": [
      "No prohíbe las bicicletas; al contrario, advierte que es probable encontrarlas en la vía.",
      "No ordena a los ciclistas circular por una pista determinada; es una advertencia para el conductor.",
      "No indica que los ciclistas vayan en sentido contrario; advierte su probable presencia en la vía.",
      ""
    ],
    "page": 69,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta es una señal de advertencia de peligro, rombo amarillo con la figura de una bicicleta, que indica que usted se acerca a una zona donde es muy probable la presencia de ciclistas en la vía (opción D). Su fundamento es proteger a un usuario vulnerable de la vía, alertando al conductor para que extreme la precaución en un sector con mucho tránsito de bicicletas. Es importante entender que la señal no prohíbe las bicicletas ni obliga a los ciclistas a ir en un sentido determinado; esas interpretaciones de las otras opciones son incorrectas, porque las señales de advertencia previenen, no ordenan. El razonamiento de seguridad es reducir la velocidad, aumentar la atención y respetar la distancia mínima al adelantar a un ciclista, que en Chile es de 1,5 metros. El riesgo real es atropellar o rozar a un ciclista, con consecuencias graves dada su exposición. Truco: rombo amarillo con bicicleta igual 'ojo, comparte el camino con ciclistas y dales su espacio'."
  },
  {
    "id": 259,
    "question": "¿Cuál de estas señales le advierte la proximidad de un cruce de peatones?",
    "options": [
      "Frente a una entrada de autos de una propiedad.",
      "En o al llegar a una parada de locomoción colectiva.",
      "En un paso de peatones.",
      "En un espacio delimitado para estacionar."
    ],
    "correct": [
      0
    ],
    "multi": false,
    "images": [
      "q259_0.png"
    ],
    "explanation": "De acuerdo con la respuesta oficial, la señal correcta que advierte la proximidad de un cruce de peatones corresponde a la opción A. Esta señal de advertencia anuncia la cercanía de una zona de cruce peatonal para que el conductor reduzca la velocidad y esté atento.",
    "wrongExplanations": [
      "",
      "No corresponde a la señal que advierte un cruce de peatones según la alternativa oficial.",
      "No corresponde a la señal que advierte un cruce de peatones según la alternativa oficial.",
      "No corresponde a la señal que advierte un cruce de peatones según la alternativa oficial."
    ],
    "page": 69,
    "category": "Senales y semaforos",
    "deepExplanation": "Según la respuesta oficial autoritativa, la señal que advierte la proximidad de un cruce de peatones corresponde a la opción A. El fundamento de las señales de advertencia es prevenir al conductor con anticipación sobre una condición del camino, en este caso la cercanía de un punto donde las personas cruzan la calzada, para que reduzca la velocidad y esté atento a ceder el paso. El razonamiento es identificar entre las imágenes la que representa el cruce peatonal y descartar las que aluden a otras situaciones. El propósito es darle tiempo al conductor para llegar a una velocidad que le permita detenerse si aparece un peatón. El riesgo real que previene es el atropello, especialmente grave por la indefensión del peatón frente al vehículo. Truco: cuando una señal anticipa un cruce de peatones, tu reacción debe ser siempre la misma, soltar el acelerador y mirar a ambos lados de la calzada buscando personas por cruzar."
  },
  {
    "id": 260,
    "question": "De las siguientes señales de tránsito, ¿cuál o cuáles corresponden a señales amarillas con forma de rombo?",
    "options": [
      "Puente angosto",
      "Angostamiento de la vía",
      "Dirección obligada",
      "Mantenga su derecha",
      "Bifurcación o cruce en T",
      "Cruce ferroviario"
    ],
    "correct": [
      0,
      1,
      4,
      5
    ],
    "multi": true,
    "images": [],
    "explanation": "Las señales amarillas con forma de rombo son señales de advertencia. De las opciones, corresponden a este tipo: Puente angosto, Angostamiento de la vía, Bifurcación o cruce en T y Cruce ferroviario, ya que todas previenen sobre una condición del camino más adelante.",
    "wrongExplanations": [
      "",
      "",
      "'Dirección obligada' es una señal reglamentaria (orden), no una advertencia en rombo amarillo.",
      "'Mantenga su derecha' es una señal reglamentaria (orden), no una advertencia en rombo amarillo.",
      "",
      ""
    ],
    "page": 69,
    "category": "Senales y semaforos",
    "deepExplanation": "Esta pregunta evalúa que el alumno clasifique correctamente las señales según su forma y color, pues solo las de advertencia de peligro tienen forma de rombo amarillo con símbolo negro. De las opciones, son de este tipo Puente angosto, Angostamiento de la vía, Bifurcación o cruce en T y Cruce ferroviario (alternativas A, B, E y F), porque todas previenen sobre una condición o peligro del camino más adelante. En cambio, 'Dirección obligada' y 'Mantenga su derecha' son señales reglamentarias, que imponen una obligación y no son rombos amarillos, por eso quedan fuera. El razonamiento es preguntarse en cada caso si la señal advierte un peligro (rombo amarillo) o da una orden (reglamentaria, con orla roja). El riesgo de confundirlas es reaccionar mal, tratando una orden como simple aviso o viceversa. Truco: si el texto describe algo que 'viene más adelante' en el camino, casi siempre es advertencia y por tanto rombo amarillo; si te manda hacer algo, es reglamentaria."
  },
  {
    "id": 261,
    "question": "Usted está enfrentando un semáforo en amarillo. ¿Qué luces se encenderán después?",
    "options": [
      "Primero la roja y luego la amarilla nuevamente.",
      "Primero la roja y luego la verde.",
      "Primero la verde y luego la roja.",
      "Primero la verde y luego la amarilla nuevamente."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "El ciclo normal de un semáforo va de amarillo a rojo, y luego del rojo pasa a verde. Por eso, después del amarillo que usted enfrenta, primero se encenderá la roja (que obliga a detenerse) y a continuación la verde (que autoriza el avance).",
    "wrongExplanations": [
      "El semáforo no vuelve del rojo al amarillo; tras el rojo siempre sigue el verde.",
      "",
      "El amarillo nunca da paso al verde directo; primero debe encenderse el rojo.",
      "Después del amarillo no viene el verde; el orden correcto es rojo y luego verde."
    ],
    "page": 71,
    "category": "Senales y semaforos",
    "deepExplanation": "El semáforo funciona con un ciclo fijo y unidireccional que nunca se devuelve: verde, amarillo y rojo, para luego reiniciar en verde. El amarillo no es un estado independiente que pueda repetirse, sino la fase de transición que avisa que el rojo está por venir, dando tiempo a frenar o despejar el cruce. Por eso, después del amarillo que usted enfrenta siempre se enciende el rojo, que obliga a la detención total, y solo entonces aparece el verde que autoriza el avance. Esta secuencia existe para que los flujos de vehículos que se cruzan nunca tengan luz para avanzar al mismo tiempo, evitando colisiones en la intersección. Un truco para recordarlo es pensar que el amarillo siempre 'baja la cortina' (rojo) antes de volver a 'abrir la puerta' (verde), nunca al revés. La respuesta correcta es la b: primero la roja y luego la verde."
  },
  {
    "id": 262,
    "question": "¿Qué significa la demarcación de centro de calzada que muestra la figura?",
    "options": [
      "Que no puede ser traspasada por un conductor que viene por la pista A.",
      "Que no puede ser traspasada por un conductor que va por la pista B.",
      "Que en ningún caso pueden efectuarse adelantamientos.",
      "Que sólo un conductor que va por la pista B podría efectuar un adelantamiento."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q262_0.png"
    ],
    "explanation": "Cuando la demarcación central combina una línea continua y una segmentada, la continua prohibe cruzarla a quien circula por el lado donde está esa línea continua. En este caso la continua mira hacia la pista B, por lo que el conductor que va por la pista B no puede traspasarla ni adelantar.",
    "wrongExplanations": [
      "El conductor de la pista A tiene la línea segmentada de su lado, así que sí podría traspasarla para adelantar.",
      "",
      "No es efectivo que en ningún caso se pueda adelantar; el de la pista A sí puede hacerlo por tener la línea segmentada.",
      "Es al revés: el de la pista B tiene la línea continua y por eso NO puede adelantar; quien sí puede es el de la pista A."
    ],
    "page": 71,
    "category": "Senales y semaforos",
    "deepExplanation": "Cuando la demarcación del centro de la calzada combina una línea continua con una segmentada paralela, cada conductor debe mirar cuál de las dos líneas le queda más cerca por su lado de circulación. La regla es que la línea continua prohíbe traspasarla y adelantar a quien la tiene de su lado, mientras que la segmentada permite el cruce a quien la tiene del suyo, normalmente porque ese conductor cuenta con mejor visibilidad del tramo. En esta figura la línea continua está del lado de la pista B, de modo que el conductor que circula por B no puede cruzarla ni efectuar adelantamientos. El fundamento es de seguridad: la línea continua se pinta donde adelantar resulta peligroso por curvas, pendientes o falta de visibilidad para ese sentido. Para recordarlo, piense 'la continua manda en su lado': si la línea sólida está a su izquierda, usted no puede pasarla. La respuesta correcta es la b."
  },
  {
    "id": 263,
    "question": "El vehículo indicado con la flecha se encuentra detenido sobre una zona achurada esperando poder efectuar un viraje en U, ¿es esto correcto?",
    "options": [
      "Sí, la zona achurada sólo separa sentidos de circulación.",
      "Sí, siempre que la zona achurada no esté reforzada con tachas o tachones reflectantes.",
      "No, porque los vehículos no pueden detenerse ni circular por zonas achuradas.",
      "No, porque se trata de una vía de mucho tránsito."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q263_0.png"
    ],
    "explanation": "Las zonas achuradas (rayado diagonal) son áreas de la calzada por las que está prohibido circular y detenerse; sirven para canalizar el tránsito y separar flujos. Por lo tanto, no es correcto que el vehículo permanezca detenido sobre ella esperando virar en U.",
    "wrongExplanations": [
      "La zona achurada no es solo un separador de sentidos; prohibe expresamente circular y detenerse sobre ella.",
      "La prohibición de detenerse y circular existe siempre, esté o no reforzada con tachas o tachones.",
      "",
      "El motivo no es el volumen de tránsito, sino que las zonas achuradas prohiben por norma detenerse y circular sobre ellas."
    ],
    "page": 71,
    "category": "Senales y semaforos",
    "deepExplanation": "Las zonas achuradas son áreas de la calzada pintadas con un rayado diagonal o en aspa que indican un espacio prohibido tanto para circular como para detenerse o estacionar. Su función es canalizar el tránsito, separar flujos opuestos o proteger zonas conflictivas, creando un colchón de seguridad que los vehículos deben respetar como si fuera una isla. Por eso es incorrecto que el vehículo de la flecha permanezca detenido sobre el achurado esperando virar en U, ya que ocupa un espacio que debe quedar siempre libre. El riesgo real es que un conductor que confía en que esa zona estará despejada se encuentre sorpresivamente con un vehículo detenido y provoque una colisión. La regla aplica siempre, tengan o no tachas reflectantes y sea o no una vía de mucho tránsito, por eso esas alternativas son falsas. La respuesta correcta es la c: no, porque los vehículos no pueden detenerse ni circular por zonas achuradas."
  },
  {
    "id": 264,
    "question": "De acuerdo a las circunstancias que se aprecian en la fotografía, ¿sería correcto que el automóvil indicado con la flecha continuara derecho ?",
    "options": [
      "Sí",
      "No"
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [
      "q264_0.png"
    ],
    "explanation": "De acuerdo con las circunstancias de la fotografía, el automovilista no puede seguir derecho porque la señalización o las condiciones del cruce no se lo permiten. La respuesta correcta es No.",
    "wrongExplanations": [
      "Las condiciones del cruce que muestra la imagen no permiten continuar derecho.",
      ""
    ],
    "page": 71,
    "category": "Conduccion segura",
    "deepExplanation": "Este tipo de preguntas exige leer la fotografía completa antes de decidir, observando señales verticales, demarcaciones del pavimento, semáforos y la posición de otros vehículos o peatones. En el caso presentado, las condiciones del cruce no permiten que el automóvil de la flecha siga derecho, ya sea por una señalización que lo prohíbe, por la configuración de las pistas o por la presencia de un riesgo que obliga a otra maniobra. El fundamento es que el conductor siempre debe ajustar su conducta a la señalización y a las circunstancias del entorno, y no a su simple intención de avanzar. Seguir derecho cuando la vía no lo autoriza constituye una infracción y puede provocar un accidente con quienes sí tienen el derecho de paso. Por eso la respuesta correcta es la b: No."
  },
  {
    "id": 265,
    "question": "¿Qué le indica la señal de tránsito que se observa en la fotografía?",
    "options": [
      "Que usted está obligado a detenerse a la altura de la señal.",
      "Advierte que el cruce al que usted se aproxima es peligroso.",
      "Que usted está obligado a ceder el paso a los vehículos que se aproximen por la otra vía.",
      "Es sólo una recomendación para que usted ponga especial atención al pasar el cruce."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [
      "q265_0.png"
    ],
    "explanation": "La señal de la fotografía es CEDA EL PASO (triángulo invertido), que obliga al conductor a otorgar preferencia a los vehículos que circulan por la vía a la que se aproxima. No exige detención total, sino ceder el paso y avanzar solo cuando sea seguro.",
    "wrongExplanations": [
      "Esa obligación de detenerse a la altura de la señal corresponde a la señal PARE, no a CEDA EL PASO.",
      "No es una señal de advertencia de cruce peligroso, sino una señal reglamentaria que obliga a ceder el paso.",
      "",
      "No es una simple recomendación: CEDA EL PASO es una señal reglamentaria de cumplimiento obligatorio."
    ],
    "page": 73,
    "category": "Senales y semaforos",
    "deepExplanation": "La señal de la fotografía es CEDA EL PASO, reconocible por su forma de triángulo equilátero invertido con borde rojo, única señal del tránsito con esa figura. Su mandato es que el conductor otorgue la preferencia a los vehículos que circulan por la vía a la que se aproxima, deteniéndose solo si es necesario para no interferir con ellos. La diferencia clave con la señal PARE es que el CEDA EL PASO no obliga a una detención total e incondicional: si la vía preferente está despejada, usted puede continuar reduciendo la velocidad sin frenar por completo. El fundamento es ordenar la prioridad en cruces donde un flujo tiene preferencia sobre otro, evitando colisiones laterales. El riesgo de ignorarla es entrar al cruce cuando viene un vehículo con derecho preferente y causar un choque del que usted sería responsable. La respuesta correcta es la c: ceder el paso a los vehículos que se aproximen por la otra vía."
  },
  {
    "id": 266,
    "question": "¿Qué significa la luz verde del semáforo?",
    "options": [
      "Siga tan pronto aparezca la luz verde.",
      "Siga, pero sólo si su pista está expedita justo después del cruce.",
      "Siga después de mirar hacia ambos lados.",
      "Siga."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "La luz verde autoriza a avanzar, pero solo si al cruzar no quedará detenido bloqueando la intersección. Por eso debe asegurarse de que su pista esté expedita justo después del cruce antes de seguir.",
    "wrongExplanations": [
      "El verde no obliga a partir 'tan pronto' aparezca; primero debe verificar que pueda cruzar sin quedar atrapado en la intersección.",
      "",
      "El verde ya le da la preferencia de paso; no se trata de mirar a ambos lados como si fuera un cruce sin control, sino de comprobar que la salida del cruce esté libre.",
      "Seguir sin más es incorrecto, porque podría quedar detenido obstruyendo el cruce si su pista no está expedita."
    ],
    "page": 73,
    "category": "Senales y semaforos",
    "deepExplanation": "La luz verde autoriza el avance, pero no es una orden absoluta de seguir en cualquier circunstancia. La ley exige que el conductor solo ingrese al cruce cuando tenga la certeza de que podrá despejarlo por completo, es decir, que su pista al otro lado de la intersección esté expedita. El fundamento es evitar el llamado 'bloqueo de cruce', que ocurre cuando un vehículo entra con verde pero queda atrapado en medio de la intersección al cambiar la luz, obstaculizando el paso del tránsito transversal. Esto genera congestión, maniobras peligrosas y choques. Por eso, aunque tenga verde, debe esperar si más adelante hay un taco que le impedirá salir del cruce. Un buen hábito es preguntarse 'si entro, ¿puedo salir?' antes de avanzar con luz verde. La respuesta correcta es la b: siga, pero solo si su pista está expedita justo después del cruce."
  },
  {
    "id": 267,
    "question": "¿Cuándo no debería usted detenerse al ponerse el semáforo en amarillo?",
    "options": [
      "Cuando la luz cambia sorpresivamente.",
      "Cuando va demasiado rápido.",
      "Cuando ya ha ingresado al cruce.",
      "Cuando está tan cerca del cruce que su detención puede ocasionar un accidente."
    ],
    "correct": [
      2,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "El amarillo anuncia el cambio a rojo y, como regla general, obliga a detenerse. La excepción es cuando ya ingresó al cruce o cuando está tan cerca que frenar bruscamente provocaría un accidente; en esos casos debe completar el paso con precaución.",
    "wrongExplanations": [
      "El hecho de que la luz cambie de forma inesperada no lo exime de detenerse si todavía puede hacerlo con seguridad.",
      "Ir demasiado rápido no es una justificación válida para no detenerse; al contrario, refleja un exceso de velocidad que es la causa del problema.",
      "",
      ""
    ],
    "page": 73,
    "category": "Senales y semaforos",
    "deepExplanation": "La luz amarilla es una advertencia de que el rojo está por encenderse y, como regla general, obliga al conductor a detenerse antes de la línea de detención o del cruce. Sin embargo, esta obligación admite dos excepciones de sentido común y seguridad. La primera es cuando el vehículo ya ingresó al cruce: detenerse ahí dejaría al conductor atrapado en medio de la intersección, por lo que debe completar el paso. La segunda es cuando está tan cerca del cruce que frenar bruscamente podría provocar un accidente, por ejemplo un alcance del vehículo que viene detrás. El fundamento es que la norma busca prevenir riesgos, no crearlos; frenar de golpe cuando ya no se alcanza a detener con seguridad es más peligroso que cruzar con cuidado. Note que ir demasiado rápido o que la luz cambie sorpresivamente no son excusas válidas, pues responden a una conducción imprudente. Las respuestas correctas son la c y la d."
  },
  {
    "id": 268,
    "question": "Usted se encuentra en el lugar de un accidente. ¿Qué hace para ayudar de mejor forma a una persona herida que está con una fuerte hemorragia en la parte inferior de una pierna?",
    "options": [
      "La sienta y le da a beber algo caliente para tranquilizarla.",
      "La mantiene tendida con la pierna herida en alto.",
      "Aplica presión manual firme sobre la herida con un paño limpio y luego la venda.",
      "La sienta y espera a que llegue una ambulancia.",
      "Le conversa tranquilamente ayudándola a mantenerse de pie."
    ],
    "correct": [
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Ante una hemorragia fuerte en la parte inferior de la pierna, lo correcto es controlar el sangrado y favorecer el retorno de sangre al tronco. Por eso se mantiene a la persona tendida con la pierna en alto y se aplica presión manual firme sobre la herida con un paño limpio para luego vendarla.",
    "wrongExplanations": [
      "No se debe sentar ni dar de beber a una persona con hemorragia importante: podría agravar el shock y, si requiere atención médica o cirugía, no debe ingerir líquidos.",
      "",
      "",
      "Sentarla y solo esperar no detiene la hemorragia; hay que actuar aplicando presión sobre la herida mientras llega la ayuda.",
      "Mantenerla de pie empeora la pérdida de sangre y el riesgo de shock; debe permanecer tendida con la pierna elevada."
    ],
    "page": 73,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Ante una hemorragia fuerte en la parte inferior de la pierna, el objetivo de los primeros auxilios es doble: cortar la pérdida de sangre y mantener la irrigación de los órganos vitales para prevenir el shock. La acción más eficaz para detener el sangrado es aplicar presión manual firme y directa sobre la herida con un paño limpio, y luego vendar para mantener esa presión; la presión comprime los vasos sanguíneos y favorece la coagulación. Además, se debe mantener a la persona tendida con la pierna herida elevada, porque al estar la extremidad por sobre el nivel del corazón disminuye el flujo de sangre hacia la herida y se favorece el retorno venoso hacia el tronco. Por el contrario, sentarla, darle algo caliente de beber o ayudarla a mantenerse de pie son acciones erróneas que pueden agravar el sangrado o precipitar un desmayo. Recuerde la combinación clave: presión directa más pierna en alto. Las respuestas correctas son la b y la c."
  },
  {
    "id": 269,
    "question": "Excepcionalmente, un joven de 17 años puede obtener licencia de conducir clase B. En tanto no cumpla 18 años deberá conducir siempre acompañado. ¿Qué requisitos debe cumplir su acompañante?",
    "options": [
      "Debe ir siempre sentado en el asiento delantero.",
      "Debe ser mayor de 35 años.",
      "Debe ser egresado de enseñanza media.",
      "Debe haber efectuado un curso especial en una escuela de conductores.",
      "Debe poseer una licencia de conducir, que le permita conducir vehículos de la clase B, de a lo menos 5 años de antigüedad."
    ],
    "correct": [
      0,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "El conductor de 17 años con licencia clase B debe ir siempre acompañado hasta cumplir 18. El acompañante debe ir sentado en el asiento delantero y poseer una licencia que lo habilite para conducir vehículos clase B con al menos 5 años de antigüedad, de modo que pueda supervisar y asistir al menor.",
    "wrongExplanations": [
      "",
      "La norma no exige una edad mínima de 35 años para el acompañante, sino una licencia clase B con cierta antigüedad.",
      "No se requiere que el acompañante sea egresado de enseñanza media.",
      "No se exige que el acompañante haya hecho un curso especial en una escuela de conductores.",
      ""
    ],
    "page": 73,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La ley permite excepcionalmente que un joven de 17 años obtenga licencia clase B, pero le impone una condición de seguridad mientras no cumpla 18 años: no puede conducir solo, sino siempre acompañado por una persona idónea que pueda supervisarlo y corregirlo. Para que esa supervisión sea efectiva, el acompañante debe cumplir dos requisitos. Primero, debe ir sentado en el asiento delantero, junto al conductor, de modo que esté al alcance para advertir riesgos, dar instrucciones e incluso intervenir si es necesario. Segundo, debe poseer una licencia que lo habilite para conducir vehículos de la clase B con una antigüedad de a lo menos 5 años, garantizando que cuente con experiencia real al volante. El fundamento es que el menor todavía está en una etapa de aprendizaje y necesita la guía permanente de un conductor experimentado para reducir el riesgo propio de la inexperiencia. Las respuestas correctas son la a y la e."
  },
  {
    "id": 270,
    "question": "Usted se ve involucrado en un accidente. Un pasajero del otro vehículo ha resultado con lesiones leves. ¿Debe usted informar el hecho a la policía?",
    "options": [
      "Sí, debe dar cuenta del hecho a la policía dentro de los próximos 20 días.",
      "No, el pasajero lesionado debe decidir si se informa a la policía o no.",
      "No, los accidentes en que sólo resultan lesionados leves no se informan a la policía.",
      "Sí, debe dar cuenta del hecho a la autoridad policial más inmediata a la brevedad."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "Cuando en un accidente hay personas lesionadas, aunque sean lesiones leves, el conductor está obligado a dar cuenta del hecho a la autoridad policial más cercana a la brevedad. La ley no fija un plazo de días para ello cuando hay heridos: la comunicación debe ser inmediata.",
    "wrongExplanations": [
      "No existe un plazo de 20 días: habiendo lesionados, el aviso a la policía debe ser de inmediato y a la autoridad más cercana.",
      "La obligación de informar es del conductor por mandato legal; no depende de la voluntad del pasajero lesionado.",
      "Es falso: todo accidente con lesionados, incluso leves, debe informarse a la policía.",
      ""
    ],
    "page": 73,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Cuando un accidente de tránsito deja personas lesionadas, sin importar que las lesiones sean leves, el conductor involucrado tiene la obligación legal de dar cuenta del hecho a la autoridad policial más cercana a la brevedad. El fundamento es que la presencia de heridos transforma el accidente en un hecho que la policía debe constatar de inmediato, tanto para asegurar la atención de las víctimas como para dejar registro de las circunstancias y eventuales responsabilidades. Por eso no corresponde aplicar el plazo de días que existe para ciertos trámites cuando solo hay daños materiales; con heridos, la comunicación debe ser inmediata. Tampoco queda la decisión de informar a criterio del lesionado, ya que es un deber del conductor. Abstenerse de avisar pudiendo hacerlo puede configurar el delito de fuga o abandono de la víctima. La respuesta correcta es la d: dar cuenta del hecho a la autoridad policial más inmediata a la brevedad."
  },
  {
    "id": 271,
    "question": "Usted se ha detenido en el lugar de un accidente para prestar ayuda. ¿Qué debería hacer usted ?",
    "options": [
      "Mantener a las personas lesionadas en movimiento haciéndolas caminar.",
      "Dar a las personas heridas algo caliente para beber.",
      "Mantener abrigadas y cómodas a las personas heridas.",
      "Mantener tranquilas a las personas heridas hablándoles alentadoramente.",
      "Asegurarse de que no queden solos los heridos."
    ],
    "correct": [
      2,
      3,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Al asistir a heridos en un accidente, la prioridad es no agravar sus lesiones y prevenir el shock. Por eso se les mantiene abrigados y cómodos, tranquilos hablándoles con calma y acompañados en todo momento hasta que llegue la ayuda especializada.",
    "wrongExplanations": [
      "Hacer caminar a los heridos puede agravar lesiones internas o de columna que no se ven; deben permanecer quietos.",
      "No se debe dar de beber a una persona herida, pues si requiere cirugía o tiene lesiones internas los líquidos son peligrosos.",
      "",
      "",
      ""
    ],
    "page": 74,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Quien se detiene a auxiliar en un accidente debe actuar sin agravar las lesiones y enfocándose en prevenir el shock, que es una de las principales causas de muerte en víctimas que inicialmente sobreviven. Por eso se debe mantener a los heridos abrigados y cómodos, ya que la pérdida de calor corporal empeora el shock; mantenerlos tranquilos hablándoles de forma alentadora, porque la angustia acelera el deterioro; y asegurarse de que nunca queden solos, para vigilar cambios en su estado y dar apoyo. En cambio, hacerlos caminar o moverse puede agravar fracturas o lesiones internas, y darles algo caliente de beber es peligroso porque podrían requerir cirugía o tener compromiso de conciencia y atragantarse. La regla de oro es no mover al herido innecesariamente y esperar al personal especializado, limitándose a contener y acompañar. Las respuestas correctas son la c, la d y la e."
  },
  {
    "id": 272,
    "question": "Usted es el primero en llegar al sitio de un accidente. ¿Qué debería hacer usted?",
    "options": [
      "Encender sus luces de advertencia de peligro para alertar a los demás conductores.",
      "Asegurarse de que los motores de los vehículos involucrados estén apagados.",
      "Abandonar el lugar tan pronto llegue otro conductor.",
      "Ayudar a salir a las personas ilesas de los vehículos."
    ],
    "correct": [
      0,
      1,
      3
    ],
    "multi": true,
    "images": [],
    "explanation": "Siendo el primero en llegar, debe ante todo prevenir nuevos accidentes y reducir riesgos. Para ello enciende sus luces de advertencia de peligro para alertar a otros conductores, se asegura de que los motores de los vehículos involucrados estén apagados (evitando incendios) y ayuda a salir a las personas que están ilesas.",
    "wrongExplanations": [
      "",
      "",
      "No debe abandonar el lugar apenas llegue otro conductor: tiene el deber de prestar ayuda y, si hay lesionados, de dar cuenta a la policía.",
      ""
    ],
    "page": 74,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Al ser el primero en llegar a un accidente, su prioridad inicial no es atender heridos sino asegurar el lugar para que no se produzcan nuevas víctimas, lo que se conoce como proteger la escena. Para ello debe encender sus luces de advertencia de peligro o intermitentes, de modo que los demás conductores adviertan el obstáculo y reduzcan la velocidad, evitando un segundo accidente en cadena. También debe asegurarse de que los motores de los vehículos involucrados estén apagados, porque el motor encendido junto a posibles fugas de combustible es una causa frecuente de incendio o explosión. Además, conviene ayudar a salir a las personas ilesas, alejándolas de la zona de riesgo. En cambio, abandonar el lugar apenas llega otro conductor es incorrecto, pues usted tiene deberes de auxilio y de informar. El orden lógico es proteger, alarmar y socorrer. Las respuestas correctas son la a, la b y la d."
  },
  {
    "id": 273,
    "question": "Usted es el primero en llegar al lugar de un accidente en el que hay heridos graves. ¿Qué hace usted?",
    "options": [
      "Enciende sus luces de advertencia de peligro.",
      "Se asegura de que alguien llame al 133 de Carabineros.",
      "Intenta que los heridos beban algo.",
      "Saca de los autos a los heridos."
    ],
    "correct": [
      0,
      1
    ],
    "multi": true,
    "images": [],
    "explanation": "Frente a heridos graves, las acciones seguras y prioritarias son alertar del peligro y conseguir auxilio profesional. Por eso enciende sus luces de advertencia de peligro y se asegura de que alguien llame al 133 de Carabineros para que lleguen los servicios de emergencia.",
    "wrongExplanations": [
      "",
      "",
      "No se debe dar de beber a heridos graves; si tienen lesiones internas o requieren cirugía, los líquidos pueden ser muy peligrosos.",
      "Sacar a los heridos graves de los autos sin personal capacitado puede agravar lesiones de columna o internas; solo se hace si hay riesgo inminente como incendio."
    ],
    "page": 74,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Cuando hay heridos graves, el riesgo de empeorar sus lesiones por una mala maniobra es muy alto, por lo que las acciones de un auxiliador sin formación deben limitarse a lo seguro y prioritario: proteger la escena y conseguir ayuda profesional cuanto antes. Por eso debe encender sus luces de advertencia de peligro para alertar a otros conductores y evitar un nuevo accidente, y asegurarse de que alguien llame al 133 de Carabineros para que se active la cadena de emergencia con ambulancias y rescate especializado. En cambio, sacar a los heridos de los autos puede agravar lesiones de columna o internas y solo se justifica ante un peligro inminente como un incendio; y dar de beber a un herido grave es peligroso porque puede atragantarse o complicar una eventual cirugía. La consigna es alertar y pedir ayuda, sin manipular al herido grave. Las respuestas correctas son la a y la b."
  },
  {
    "id": 274,
    "question": "Usted llega al lugar de un accidente en el que participó un camión cargado con productos químicos peligrosos. ¿Qué debería hacer usted antes de llamar al 133 de Carabineros?",
    "options": [
      "Tratar de mover el camión.",
      "Tratar de diluir los productos químicos con agua.",
      "Averiguar de qué clase de producto químico se trata mirando los rótulos y letreros que tiene el camión.",
      "Tratar de evitar que los productos químicos se sigan derramando."
    ],
    "correct": [
      2
    ],
    "multi": false,
    "images": [],
    "explanation": "En un accidente con productos químicos peligrosos, antes de llamar al 133 conviene identificar de qué sustancia se trata observando los rótulos y letreros del camión. Esa información permite a Carabineros y a los servicios de emergencia enviar el equipo adecuado y actuar con seguridad.",
    "wrongExplanations": [
      "Mover el camión puede provocar más derrames, incendios o explosiones; no debe manipularlo.",
      "Diluir con agua es peligroso, ya que muchas sustancias reaccionan violentamente con el agua o se dispersan más.",
      "",
      "Intentar contener el derrame lo expone directamente a sustancias tóxicas; eso corresponde a personal especializado."
    ],
    "page": 74,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "En un accidente que involucra un camión con productos químicos peligrosos, el primer riesgo es invisible: vapores tóxicos, sustancias corrosivas, inflamables o reactivas que pueden dañar a quien se acerque sin saber con qué está tratando. Por eso, antes de llamar al 133, conviene identificar de qué sustancia se trata observando a distancia los rótulos, paneles naranjos y letreros de seguridad que todo camión de carga peligrosa debe llevar, los cuales contienen códigos numéricos que identifican el producto y su riesgo. Con esa información, Carabineros y los servicios de emergencia pueden enviar el equipo especializado adecuado y tomar las precauciones correctas desde el inicio. En cambio, intentar mover el camión, diluir con agua o frenar el derrame por cuenta propia es extremadamente peligroso, porque algunas sustancias reaccionan violentamente con el agua o liberan gases tóxicos. La regla es identificar y reportar, nunca intervenir el material. La respuesta correcta es la c."
  },
  {
    "id": 275,
    "question": "Usted llega al lugar de un accidente en el que ha participado un motociclista. El motociclista yace consciente, pero en estado de shock. ¿De qué debería asegurarse usted?",
    "options": [
      "Que el motociclista se saque el casco.",
      "Que el motociclista no se saque el casco.",
      "Que al motociclista se le ayude a ponerse de pie.",
      "Que al motociclista se le dé algo para beber."
    ],
    "correct": [
      1
    ],
    "multi": false,
    "images": [],
    "explanation": "A un motociclista accidentado, consciente pero en shock, no se le debe retirar el casco, porque hacerlo puede agravar una posible lesión cervical o de cráneo. Lo correcto es asegurarse de que el casco no se lo saque y esperar a personal especializado.",
    "wrongExplanations": [
      "Sacarle el casco puede provocar o agravar una lesión de cuello o cabeza; no debe quitárselo.",
      "",
      "Ayudarlo a ponerse de pie puede agravar lesiones internas o de columna; debe permanecer quieto.",
      "No se debe dar de beber a un accidentado, sobre todo si está en shock o podría requerir cirugía."
    ],
    "page": 74,
    "category": "Emergencias y primeros auxilios",
    "deepExplanation": "Cuando un motociclista accidentado está consciente pero en estado de shock, la regla fundamental es no retirarle el casco. El casco abraza firmemente la cabeza y el cuello, y quitarlo implica mover la columna cervical, que tras un impacto puede estar lesionada; ese movimiento brusco podría dañar la médula espinal y causar una parálisis o agravar un trauma craneal. Por eso usted debe asegurarse de que el motociclista no se saque el casco y de que nadie más se lo retire, salvo que personal especializado lo haga con la técnica correcta o que exista una obstrucción que impida respirar. Tampoco se le debe ayudar a ponerse de pie ni darle algo de beber, pues ambas acciones pueden empeorar lesiones o provocar atragantamiento. Lo prudente es mantenerlo quieto, acompañado y esperar a los servicios de emergencia. La respuesta correcta es la b: que el motociclista no se saque el casco."
  },
  {
    "id": 276,
    "question": "Usted va por una autopista. De un camión cargado que va delante suyo cae una caja sin que su conductor se dé cuenta. ¿Qué hace usted?",
    "options": [
      "Trata de alcanzar al camión y de llamar la atención de su conductor.",
      "Se detiene junto a la caja y enciende sus luces de emergencia hasta que llegue la policía.",
      "Se desplaza hacia la berma y luego intenta recoger la caja.",
      "Continúa hasta donde haya un teléfono para avisar a la policía o a los servicios de emergencia."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "En una autopista no debe detenerse junto a la carga ni intentar recogerla, porque pondría en grave riesgo su vida y la de otros conductores. Lo correcto es continuar hasta un lugar seguro con teléfono y avisar a la policía o a los servicios de emergencia para que retiren el obstáculo.",
    "wrongExplanations": [
      "Intentar alcanzar al camión implica maniobras peligrosas y distracción a alta velocidad en la autopista.",
      "Detenerse junto a la caja en plena autopista es muy peligroso y puede provocar otro accidente.",
      "Bajarse a recoger la caja lo expone a ser atropellado por el tránsito de la autopista.",
      ""
    ],
    "page": 74,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "Si una caja cae de un camión a la autopista, se convierte en un obstáculo peligroso, pero la forma de reaccionar debe priorizar siempre su seguridad y la del resto del tránsito. En una autopista los vehículos circulan a alta velocidad, de modo que detenerse junto a la carga, bajarse a recogerla o intentar alcanzar al camión son maniobras que lo exponen a ser atropellado o a provocar una colisión en cadena. Lo correcto es continuar la marcha con normalidad hasta llegar a un lugar seguro donde haya un teléfono o pueda comunicarse, y avisar a la policía o a los servicios de emergencia para que ellos, con los medios adecuados, retiren el obstáculo y adviertan a los demás conductores. El fundamento es que ningún objeto en la calzada vale más que la vida de las personas, y la gestión del riesgo en vías rápidas corresponde a la autoridad. La respuesta correcta es la d."
  },
  {
    "id": 277,
    "question": "¿Quién o quiénes están cubiertos por el Seguro Obligatorio de Accidentes Personales?",
    "options": [
      "Sólo el conductor del vehículo asegurado.",
      "Sólo los pasajeros del vehículo asegurado.",
      "Sólo los pasajeros y el conductor del vehículo asegurado.",
      "El conductor, los pasajeros y cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado."
    ],
    "correct": [
      3
    ],
    "multi": false,
    "images": [],
    "explanation": "El Seguro Obligatorio de Accidentes Personales (SOAP) tiene una cobertura amplia: protege al conductor, a los pasajeros y a cualquier tercero afectado en un accidente de tránsito en que participe el vehículo asegurado. Su finalidad es garantizar atención por muerte o lesiones a todas las víctimas.",
    "wrongExplanations": [
      "El SOAP no cubre solo al conductor; ampara también a pasajeros y a terceros afectados.",
      "No se limita a los pasajeros; incluye al conductor y a terceros.",
      "Va más allá de pasajeros y conductor: también cubre a cualquier tercero afectado.",
      ""
    ],
    "page": 74,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "El Seguro Obligatorio de Accidentes Personales, conocido como SOAP, es un seguro que la ley exige contratar a todo vehículo motorizado para poder obtener su permiso de circulación, y su propósito es garantizar que ninguna víctima de un accidente de tránsito quede sin cobertura básica por muerte o lesiones. Por eso su cobertura es deliberadamente amplia y no se limita al dueño ni a quien conduce. El SOAP cubre al conductor del vehículo asegurado, a todos sus pasajeros y también a cualquier tercero afectado, sea un peatón, un ciclista o un ocupante de otro vehículo, siempre que el vehículo asegurado haya participado en el accidente. El fundamento es de protección social: la indemnización se paga por las lesiones o la muerte sin necesidad de demostrar previamente quién tuvo la culpa, lo que agiliza la atención de las víctimas. La respuesta correcta es la d: el conductor, los pasajeros y cualquier tercero afectado."
  },
  {
    "id": 278,
    "question": "¿Qué documento no está obligado a portar usted siempre en su vehículo?",
    "options": [
      "El Permiso de Circulación.",
      "El certificado de un Seguro Obligatorio de Accidentes Personales.",
      "Su licencia de conductor.",
      "El certificado de revisión técnica o de homologación.",
      "El certificado de inscripción en el Registro Nacional de Vehículos Motorizados."
    ],
    "correct": [
      4
    ],
    "multi": false,
    "images": [],
    "explanation": "Los documentos que se deben portar siempre en el vehículo son el Permiso de Circulación, el certificado del SOAP, la licencia de conductor y el certificado de revisión técnica u homologación. El certificado de inscripción en el Registro Nacional de Vehículos Motorizados (padrón) no es de porte obligatorio permanente.",
    "wrongExplanations": [
      "El Permiso de Circulación sí debe portarse siempre en el vehículo.",
      "El certificado del Seguro Obligatorio (SOAP) sí es de porte obligatorio.",
      "La licencia de conductor sí debe llevarse siempre al conducir.",
      "El certificado de revisión técnica o de homologación sí debe portarse en el vehículo.",
      ""
    ],
    "page": 74,
    "category": "Leyes, normas y documentos",
    "deepExplanation": "La ley obliga a portar permanentemente en el vehículo un conjunto de documentos que permiten acreditar en cualquier control que el vehículo y el conductor están en regla. Esos documentos de porte obligatorio son el Permiso de Circulación, que acredita el pago anual y la habilitación para circular; el certificado del Seguro Obligatorio de Accidentes Personales (SOAP), que asegura la cobertura a las víctimas; la licencia de conductor, que habilita a la persona para manejar; y el certificado de revisión técnica o de homologación, que acredita las condiciones mecánicas y de seguridad. En cambio, el certificado de inscripción en el Registro Nacional de Vehículos Motorizados, conocido como padrón, prueba la propiedad pero no es de porte obligatorio permanente, ya que esa información puede verificarse en el registro. Un truco para recordarlo es que lo que se exige en la calle es lo que se renueva cada año y lo que habilita a circular y conducir. La respuesta correcta es la e."
  },
  {
    "id": 279,
    "question": "En relación con las infracciones a las normas del tránsito, ¿cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Conducir un vehículo bajo los efectos del alcohol es una infracción gravísima.",
      "No respetar una señal PARE es una infracción gravísima.",
      "La comisión de una infracción gravísima es sancionada no sólo con una multa, sino que también con la suspensión de la licencia de conducir del infractor.",
      "Solamente son infracciones gravísimas el no respetar la luz roja de un semáforo y el exceso de velocidad.",
      "En ningún caso una licencia de conducir puede ser cancelada por el Juez."
    ],
    "correct": [
      0,
      1,
      2
    ],
    "multi": true,
    "images": [],
    "explanation": "Conducir bajo los efectos del alcohol y no respetar una señal PARE están clasificadas como infracciones gravísimas. Además, la comisión de una infracción gravísima se sanciona no solo con multa, sino también con la suspensión de la licencia de conducir del infractor.",
    "wrongExplanations": [
      "",
      "",
      "",
      "Es falso que solo sean gravísimas el no respetar la luz roja y el exceso de velocidad; existen muchas otras, como conducir con alcohol o no respetar un PARE.",
      "Es falso: el Juez sí puede cancelar la licencia de conducir en los casos que la ley establece."
    ],
    "page": 75,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "La Ley de Tránsito clasifica las infracciones en leves, graves y gravísimas según el peligro que representan, y las dos primeras afirmaciones reflejan correctamente esa clasificación: conducir bajo los efectos del alcohol es una infracción gravísima por el altísimo riesgo que implica, y no respetar una señal PARE también es gravísima porque omitir la detención obligatoria en un cruce es una de las causas más frecuentes de colisiones graves. Además, es verdadera la afirmación de que una infracción gravísima no solo se castiga con multa, sino también con la suspensión de la licencia de conducir del infractor, lo que refuerza el carácter disuasivo de la sanción. Son falsas, en cambio, la idea de que solo el no respetar la luz roja y el exceso de velocidad serían gravísimas, pues existen muchas más, y la afirmación de que un juez nunca podría cancelar una licencia, ya que la cancelación sí procede en casos calificados. Las respuestas correctas son la a, la b y la c."
  },
  {
    "id": 280,
    "question": "¿Cuál o cuáles de las siguientes afirmaciones es(son) verdadera(s)?",
    "options": [
      "Las únicas infracciones gravísimas son el conducir bajo los efectos del alcohol y el exceso de velocidad.",
      "Las infracciones gravísimas son sancionadas con multas y, además, con la suspensión de la licencia de conducir del infractor.",
      "Dos infracciones graves cometidas en un período de 12 meses dan origen a una suspensión de la licencia de conducir del infractor.",
      "No respetar el derecho preferente de paso de un peatón es una inf racción leve.",
      "No respetar una señal Ceda el Paso es una infracción gravísima si a consecuencia de la infracción se produce un accidente."
    ],
    "correct": [
      1,
      2,
      4
    ],
    "multi": true,
    "images": [],
    "explanation": "Las infracciones gravísimas se sancionan con multa y además con la suspensión de la licencia del infractor. Dos infracciones graves cometidas en 12 meses dan origen a la suspensión de la licencia, y no respetar un Ceda el Paso es gravísima cuando a consecuencia de ello se produce un accidente.",
    "wrongExplanations": [
      "Es falso que las únicas gravísimas sean conducir con alcohol y el exceso de velocidad; hay muchas más conductas gravísimas tipificadas en la ley.",
      "",
      "",
      "No respetar el derecho preferente de paso de un peatón no es una infracción leve, sino de mayor gravedad.",
      ""
    ],
    "page": 75,
    "category": "Factores humanos (alcohol, fatiga, salud)",
    "deepExplanation": "Esta pregunta combina varios principios del régimen de infracciones. Es verdadera la afirmación de que las infracciones gravísimas se sancionan con multa y además con la suspensión de la licencia del infractor, lo que distingue a esta categoría de las menos graves. También es verdadera que la acumulación de dos infracciones graves dentro de un período de 12 meses da origen a la suspensión de la licencia, mecanismo pensado para corregir al conductor reincidente antes de que cause un daño mayor. Y es verdadera que no respetar una señal Ceda el Paso, que en sí misma es una infracción grave, se eleva a gravísima cuando a consecuencia de ella se produce un accidente, porque la ley agrava la sanción según el resultado dañoso. Son falsas la afirmación de que las únicas gravísimas serían el alcohol y el exceso de velocidad, y la que califica de leve el no respetar el derecho preferente del peatón, que en realidad es más grave por el riesgo a la persona. Las respuestas correctas son la b, la c y la e."
  }
];

export default questions;
