export const WA = "https://api.whatsapp.com/send?phone=50689980112&text=Hola%2C%20ocupo%20consulta";
export const TEL = "+50689980112";
export const EMAIL = "jriveracheves@gmail.com";

export const RC_CASES = [
  {
    slug: "nadia-peraza",
    year: "2026",
    yearRange: "2024 – 2026",
    location: "San Pablo de Heredia · Costa Rica",
    status: "Sentencia firme",
    statusTone: "closed" as const,
    name: "Nadia Peraza Espinoza",
    short: "Femicidio agravado por desmembramiento. Concurso material con suplantación de identidad y estafa informática. Sentencia: **79 años readecuados al máximo legal de 50 años** de cárcel efectiva.",
    role: "Querellante privado · representación de la madre, Marilyn Espinoza",
    sentence: "50 años (máximo legal · CR) — pena nominal 79 años",
    headline: "El caso que detuvo al país",
    summary: "Joven madre de 21 años desaparecida en febrero de 2024 y hallada desmembrada dentro de una refrigeradora en el jardín de una vivienda de San Pablo de Heredia. La autopsia evidenció un nivel extremo de crueldad: el cuerpo carecía de zona pélvica y genital, el tronco no presentaba órganos internos y las extremidades habían sido desarticuladas con un objeto punzocortante de gran filo. El imputado, Jeremy Buzano Paisano (25 años, expareja), intentó justificar una herida profunda en su mano derecha alegando un asalto. Rivera Cheves logró vincularla científicamente con el esfuerzo de la desmembración.",
    hechos: "En febrero de 2024, **Nadia Peraza Espinoza**, joven madre de 21 años, desaparece en San Pablo de Heredia. En mayo del mismo año, **sus restos desmembrados son localizados dentro de una refrigeradora** colocada en el jardín de una vivienda, un crimen de saña inusitada que conmocionó a la opinión pública costarricense. La autopsia y las pruebas forenses presentadas en el debate evidenciaron **un nivel extremo de crueldad y sadismo**: el cuerpo carecía de la zona pélvica y genital, el tronco no presentaba órganos internos y las extremidades habían sido desarticuladas minuciosamente con un objeto punzocortante de gran filo. El imputado, **Jeremy Buzano Paisano (25 años, expareja de la víctima)**, justificó una herida profunda en su mano derecha alegando un asalto de indigentes o un accidente con varillas de construcción.",
    desafio: "La Fiscalía de Género pretendía limitar la acusación al tipo básico de femicidio, **cuya pena máxima en Costa Rica es de 35 años**. La defensa del imputado, a cargo del abogado Francisco Herrera, planteó **argumentos de inimputabilidad** por supuestos problemas psiquiátricos para dilatar el juicio. Adicionalmente, el imputado continuaba **hostigando a la familia de la víctima** mediante llamadas y mensajes de voz realizados de forma clandestina desde el centro penitenciario La Reforma.",
    estrategia: "Rivera Cheves interpuso **una querella privada y una acción civil resarcitoria** para ampliar la plataforma fáctica. Mediante **compliance forense aplicado**, rastreó las transacciones informáticas post-mortem: tras el homicidio, Buzano retuvo el teléfono celular y las tarjetas de débito de Nadia, realizando **suplantación de identidad en redes sociales** para entorpecer la búsqueda y **estafa informática** mediante compras y retiros en el BAC San José y el Banco de Costa Rica para costear fiestas personales. La firma **vinculó científicamente la herida de la mano del imputado con el esfuerzo de desmembrar el cadáver** y refutó la inimputabilidad señalando la lucidez del acusado para ocultar el cuerpo y suplantar la identidad. El resultado fue **una condena histórica por concurso material**: femicidio + 1 sustracción patrimonial + 11 estafas informáticas + 8 suplantaciones de identidad, totalizando **79 años, readecuados al límite máximo legal de 50 años de cárcel efectiva**.",
    media: "joseph10.jpg",
    tags: ["Femicidio", "Pena máxima legal", "Compliance forense", "Cobertura nacional"],
    timeline: [
      { date: "2024 · Febrero",  label: "Desaparición",      text: "Nadia Peraza Espinoza, 21 años, desaparece en San Pablo de Heredia. Comienza la búsqueda familiar." },
      { date: "2024 · Mayo",     label: "Hallazgo",          text: "Restos desmembrados localizados dentro de una refrigeradora en el jardín de una vivienda. Detención inmediata de Jeremy Buzano Paisano." },
      { date: "2024 · Mayo",     label: "Asunción del caso", text: "El Lic. Rivera Cheves asume la representación legal de Marilyn Espinoza, madre de la víctima, como querellante privado." },
      { date: "2024 — 2025",     label: "Investigación",     text: "Compliance forense: rastreo de transacciones bancarias, suplantación de identidad en redes y estafas informáticas. Vinculación científica de la herida del imputado con la desmembración." },
      { date: "2026 · Marzo 20", label: "Sentencia firme",   text: "Tribunal Penal de Heredia dicta condena: 79 años por concurso material, readecuados al máximo legal de 50 años de cárcel efectiva. Sentencia histórica." },
    ],
    quote: "Por Nadia, por su hija, por todas.",
    quoteContext: "Palabras finales del Lic. Rivera Cheves en las conclusiones del juicio — virales en redes sociales.",
    press: [
      { medio: "Diario Extra", t: "Algunos jueces le tienen miedo a poner la pena máxima", u: "https://www.diarioextra.com/noticia/algunos-jueces-les-da-miedo-poner-la-pena-maxima/" },
    ],
    facts: [
      { k: "Pena efectiva",     v: "50 años (máximo legal CR)" },
      { k: "Pena nominal",      v: "79 años" },
      { k: "Hechos / Sentencia",v: "Feb 2024 → Mar 2026" },
      { k: "Concurso material", v: "Femicidio + 8 suplantación + 11 estafa informática + sustracción patrimonial" },
      { k: "Tribunal",          v: "Penal de Heredia" },
      { k: "Imputado",          v: "Jeremy Buzano Paisano (25)" },
    ],
    gallery: [
      {
        src: "/images/casos/nadia-peraza-tribunal.jpg",
        alt: "Abogado penalista Joseph Rivera Cheves junto a Marilyn Espinoza, madre de Nadia Peraza, en audiencia ante el Tribunal Penal de Heredia — condena 50 años femicidio Costa Rica 2026",
        caption: "Audiencia oral · Tribunal Penal de Heredia",
        sub: "El Lic. Rivera Cheves junto a Marilyn Espinoza, madre de Nadia Peraza, sosteniendo la querella privada y la acción civil resarcitoria que llevó a la condena de 50 años — máximo legal en Costa Rica.",
      },
      {
        src: "/images/casos/nadia-peraza-familia.jpg",
        alt: "Abogado Joseph Rivera Cheves con los padres de Nadia Peraza durante la preparación del caso de femicidio — bufete penalista Costa Rica",
        caption: "Junto a la familia Peraza Espinoza",
        sub: "Acompañamiento integral a la familia durante todo el proceso. Marilyn Espinoza viste el recordatorio «Nadia Peraza · Mamá Lin», símbolo de la memoria que sostiene este caso.",
      },
      {
        src: "/images/casos/nadia-peraza-tv-trivision.jpg",
        alt: "Abogado penalista Joseph Rivera Cheves identificado en Noticias Trivisión como defensor de la familia de Nadia Peraza — caso femicidio Costa Rica",
        caption: "Noticias Trivisión · 12:21",
        sub: "Cobertura televisiva nacional. El Lic. Rivera Cheves se consolidó como vocero público de la familia Peraza durante toda la etapa procesal y mediática del caso.",
      },
      {
        src: "/images/casos/nadia-peraza-tribunal-prensa.jpg",
        alt: "Abogado Joseph Rivera Cheves a la salida de audiencia con familiares de Nadia Peraza — Tribunal Penal Heredia — condena histórica 50 años femicidio",
        caption: "Tribunales · acompañamiento familiar",
        sub: "Los familiares de Nadia llevaron al tribunal sus recordatorios y camisetas con el rostro de la víctima en cada audiencia — una presencia que dignificó el proceso.",
      },
    ],
    instagramReel: {
      url: "https://www.instagram.com/reel/DWHZdGMx4C8/",
      eyebrow: "Memoria · Esperanza",
      title: "Por Nadia — y por las que vendrán",
      msg: "La memoria de Nadia se transforma hoy en esperanza para otras familias. Cada palabra en el juicio, cada gesto frente a los medios, cada paso del proceso fue una afirmación: que la dignidad de la víctima no se pierde, y que la justicia — aunque tarde — es posible cuando alguien decide acompañar hasta el final.",
    },
  },
  {
    slug: "carla-stefaniak",
    year: "2018",
    yearRange: "2018 – 2020",
    location: "San Antonio de Escazú · Costa Rica",
    status: "Sentencia firme",
    statusTone: "closed" as const,
    name: "Carla Stefaniak",
    short: "Turista estadounidense de origen venezolano, asesinada en un Airbnb en Escazú. **Cooperación con el FBI** y diplomacia activa. Cobertura internacional en Telemundo y CNN en Español.",
    role: "Representación del padre de la víctima",
    sentence: "Sentencia condenatoria firme",
    headline: "Hito de la cooperación judicial internacional",
    summary: "Turista estadounidense de origen venezolano que viajó a Costa Rica para celebrar su cumpleaños y fue brutalmente asesinada a finales de noviembre de 2018 en una propiedad de alquiler vacacional (Airbnb) en San Antonio de Escazú. Su cuerpo apareció sepultado y cubierto de plástico a pocos metros de la edificación turística. El caso adquirió relevancia mediática internacional inmediata con cobertura en Telemundo, CNN en Español y medios de Estados Unidos.",
    hechos: "A finales de noviembre de 2018, **Carla Stefaniak** —turista estadounidense de origen venezolano— viajó a Costa Rica para celebrar su cumpleaños y **se hospedó en una propiedad de alquiler vacacional (Airbnb) en San Antonio de Escazú**. Pocos días después fue reportada como desaparecida. **Su cuerpo apareció sepultado y cubierto de plástico** a pocos metros de la edificación turística, en circunstancias que sugerían un crimen con múltiples participantes.",
    desafio: "La hipótesis inicial del Ministerio Público apuntaba a **un asalto aislado perpetrado individualmente por el guarda de seguridad** de la propiedad. La defensa técnica de los imputados planteó de forma recurrente **argumentos de contaminación de la escena del crimen** para descartar la prueba forense recolectada por las autoridades costarricenses.",
    estrategia: "Rivera Cheves sostuvo desde las etapas iniciales una hipótesis procesal distinta: **que en el ataque y posterior ocultamiento del cuerpo participaron entre 5 y 7 personas** vinculadas al establecimiento, no un solo agresor. Dada la ciudadanía estadounidense de la víctima, el bufete **coordinó y facilitó la incorporación de agentes del FBI** de los Estados Unidos en las diligencias forenses realizadas en Costa Rica en 2018. Esta cooperación interestatal permitió ejecutar **análisis biológicos avanzados en la habitación donde ocurrió el ataque**, asegurando que la prueba científica resistiera las objeciones de contaminación de la escena planteadas por los defensores técnicos.",
    media: "joseph7.jpg",
    tags: ["Cobertura internacional", "Cooperación FBI", "Telemundo", "CNN en Español"],
    timeline: [
      { date: "2018 · Noviembre", label: "Hechos",             text: "Carla Stefaniak viaja a Costa Rica para celebrar su cumpleaños. Días después es reportada desaparecida tras hospedarse en un Airbnb en San Antonio de Escazú." },
      { date: "2018 · Diciembre", label: "Hallazgo",           text: "Las autoridades costarricenses localizan los restos sepultados a pocos metros de la propiedad. El caso adquiere relevancia mediática internacional inmediata." },
      { date: "2018 · Diciembre", label: "Cooperación FBI",    text: "El bufete coordina la incorporación de agentes del FBI en las diligencias forenses en Costa Rica. Análisis biológicos avanzados en la escena del crimen." },
      { date: "2019",             label: "Asunción del caso",  text: "El Lic. Rivera Cheves representa formalmente al padre de Carla Stefaniak en el proceso judicial costarricense." },
      { date: "2019 — 2020",      label: "Proceso y condena",  text: "Hipótesis sostenida: participación de 5–7 personas. Acompañamiento integral durante todo el proceso penal." },
    ],
    quote: "El caso fue un hito en la visibilidad internacional de la justicia penal de Costa Rica y en la protección de ciudadanos extranjeros en el país.",
    quoteContext: "Sobre la relevancia internacional del proceso",
    press: [
      { medio: "Telemundo",      t: "Cobertura del caso Stefaniak en Costa Rica",       u: "#" },
      { medio: "CNN en Español", t: "Reportaje sobre el proceso judicial",              u: "#" },
    ],
    facts: [
      { k: "Año de los hechos",    v: "Noviembre 2018" },
      { k: "Jurisdicción",         v: "Escazú, San José" },
      { k: "Nacionalidad víctima", v: "EE.UU. / Venezuela" },
      { k: "Cooperación",          v: "FBI · 2018" },
      { k: "Cobertura mediática",  v: "Telemundo, CNN, prensa internacional" },
      { k: "Hipótesis sostenida",  v: "5–7 partícipes en el crimen" },
    ],
  },
  {
    slug: "junieysis-merlo",
    year: "2026",
    yearRange: "2026 →",
    location: "Salitral de Santa Ana · Costa Rica",
    status: "Caso activo",
    statusTone: "active" as const,
    name: "Junieysis Merlo Espinoza",
    short: "Ciudadana nicaragüense de 29 años. Asfixia mecánica con fractura del cartílago laríngeo. **Representación pro-bono**. El gobierno de Ortega-Murillo denegó el ingreso a Nicaragua al abogado por supuesta **vinculación con la CIA**.",
    role: "Representación pro-bono de los padres de la víctima (Madriz, Nicaragua)",
    sentence: "En proceso · pena máxima exigida",
    headline: "Litigio humanitario bajo presión geopolítica",
    summary: "Ciudadana nicaragüense de 29 años hallada sin vida en una fosa dentro de un condominio residencial en Salitral de Santa Ana. El bufete asumió la representación de los padres de la víctima — residentes del departamento de Madriz, Nicaragua — de manera totalmente gratuita debido a sus condiciones de pobreza extrema. El caso escaló de las salas penales costarricenses a un conflicto político bilateral: el régimen de Daniel Ortega y Rosario Murillo denegó formalmente el ingreso del Lic. Rivera Cheves a Nicaragua bajo la paranoia de que era un agente encubierto de la CIA.",
    hechos: "El 31 de marzo de 2026, **Junieysis Merlo Espinoza**, ciudadana nicaragüense de 29 años, desaparece. El 9 de abril del mismo año, **su cuerpo es hallado enterrado en una fosa dentro de un condominio residencial** en Salitral de Santa Ana, San José. El dictamen del OIJ determinó que la causa del deceso fue **asfixia mecánica por compresión del cuello con fractura del cartílago laríngeo**. El principal sospechoso, **Ramírez Calvo (57 años, expareja de la joven)**, fue detenido de forma inmediata.",
    desafio: "Los padres de la víctima residen en **condiciones de pobreza extrema** en el departamento de Madriz, Nicaragua, sin capacidad económica para contratar representación legal. La víctima dejó huérfanas a **hijas gemelas de 4 años** cuya custodia y repatriación segura debían gestionarse en simultáneo al proceso penal. El 25 de abril de 2026, **el gobierno nicaragüense denegó formalmente el ingreso del Lic. Rivera Cheves al país**, bajo la sospecha de que era un agente encubierto de la CIA.",
    estrategia: "El bufete asumió **la representación pro-bono** atendiendo a la situación humanitaria. Pese a la prohibición migratoria nicaragüense, la firma continúa **dirigiendo la estrategia penal en Costa Rica para exigir la pena máxima** y gestiona —junto con el **PANI y la Cancillería General de la República**— la custodia y repatriación segura de las hijas gemelas de la víctima.",
    media: "joseph3.jpg",
    tags: ["Caso activo", "Pro-bono", "Cooperación binacional", "Riesgo geopolítico"],
    timeline: [
      { date: "2026 · Marzo 31",  label: "Desaparición",         text: "Junieysis Merlo Espinoza, 29 años, desaparece en San José." },
      { date: "2026 · Abril 9",   label: "Hallazgo",             text: "Cuerpo localizado en fosa dentro de condominio en Salitral de Santa Ana. OIJ determina asfixia mecánica con fractura del cartílago laríngeo." },
      { date: "2026 · Abril",     label: "Detención",            text: "Detención inmediata del principal sospechoso, Ramírez Calvo (57 años, expareja)." },
      { date: "2026 · Abril",     label: "Asunción pro-bono",    text: "El bufete asume gratuitamente la representación de los padres de la víctima, residentes en Madriz, Nicaragua." },
      { date: "2026 · Abril 25",  label: "Veto migratorio",      text: "El gobierno de Daniel Ortega y Rosario Murillo deniega el ingreso a Nicaragua del Lic. Rivera Cheves, alegando vinculación con la CIA." },
      { date: "En curso",         label: "Estrategia paralela",  text: "Litigio penal en CR para exigir pena máxima + gestión con PANI y Cancillería para repatriación de hijas gemelas (4 años) de la víctima." },
    ],
    quote: "Trabajamos activamente para garantizar que se haga justicia y que los derechos de la familia sean respetados durante todo el proceso judicial.",
    quoteContext: "Comunicado del bufete · 2026",
    press: [],
    facts: [
      { k: "Desaparición",         v: "31 de marzo de 2026" },
      { k: "Hallazgo",             v: "9 de abril de 2026" },
      { k: "Causa de muerte",      v: "Asfixia mecánica · fractura laríngea" },
      { k: "Imputado",             v: "Ramírez Calvo (57)" },
      { k: "Representación",       v: "Pro-bono" },
      { k: "Veto migratorio",      v: "Nicaragua · 25 abril 2026" },
    ],
    gallery: [
      {
        src: "/images/casos/junieysis-merlo-prensa-joseph-rivera.jpg",
        alt: "Abogado penalista Joseph Rivera Cheves con familiares de Junieysis Merlo Espinoza durante conferencia de prensa — caso femicidio Salitral de Santa Ana Costa Rica 2026",
        caption: "Conferencia de prensa · caso Junieysis Merlo Espinoza",
        sub: "El Lic. Rivera Cheves junto a familiares de la víctima en la conferencia de prensa en que se anunció la representación pro-bono del bufete en este caso humanitario.",
      },
      {
        src: "/images/casos/junieysis-merlo-familiar-declaracion.jpg",
        alt: "Familiar de Junieysis Merlo Espinoza durante declaración pública — caso femicidio Salitral de Santa Ana Costa Rica 2026 — representación pro-bono Rivera Cheves & Asociados",
        caption: "Declaración pública · familiar de la víctima",
        sub: "Familiar de Junieysis Merlo Espinoza durante el proceso mediático del caso, acompañada por el equipo del bufete Rivera Cheves & Asociados.",
      },
    ],
    tiktokVideos: [
      "https://www.tiktok.com/@josephriveraabogado/video/7642726335940398357",
      "https://www.tiktok.com/@josephriveraabogado/video/7631844776681180436",
    ],
  },
  {
    slug: "luany-salazar",
    year: "2024",
    yearRange: "2020 – 2024",
    location: "Costa Rica",
    status: "Sentencia firme · 3 debates",
    statusTone: "closed" as const,
    name: "Luany Valeria Salazar Zamora",
    short: "Joven de 23 años engañada y asesinada por su vecino con múltiples puñaladas. **Tres juicios en cuatro años**. Pena máxima: **35 años de cárcel** por homicidio calificado tras revertir condena inicial de 19 años.",
    role: "Querellante privado · representación de la madre, Patricia Zamora Masís",
    sentence: "35 años (máximo legal · homicidio calificado)",
    headline: "Cuatro años, tres juicios, una sentencia justa",
    summary: "Joven de 23 años llevada mediante engaños a la casa de su vecino Kenneth Enrique Mejía Chavarría (alias 'Hippie', 38 años) bajo la falsa promesa de negociar un anillo. Tras ingresar, el imputado la drogó, propinó múltiples puñaladas, se apoderó de sus pertenencias y semienterró el cuerpo en el patio. La participación de Rivera Cheves fue una cruzada técnica de cuatro años contra la negligencia inicial del aparato fiscal y los sesgos del tribunal, llevando el caso a tres debates orales hasta obtener la pena máxima legal.",
    hechos: "El 9 de junio de 2020, **Luany Valeria Salazar Zamora (23 años)** es reportada como desaparecida. El 16 de junio del mismo año, su cuerpo es localizado sin vida. Fue **llevada mediante engaños** a la casa de su vecino **Kenneth Enrique Mejía Chavarría (alias «Hippie», 38 años)**, ubicada a escasos 15 metros de su propia residencia, bajo la falsa promesa de negociar un anillo. Tras ingresar a la vivienda, el imputado la drogó, le propinó **múltiples puñaladas**, se apoderó de sus pertenencias y **procedió a semienterrar su cuerpo en el patio de su propia casa**.",
    desafio: "**Primer debate (julio 2021)**: los jueces condenaron a Mejía Chavarría a únicamente **19 años** por homicidio simple y hurto menor, desechando pruebas de ensañamiento. La sentencia fue catalogada como injusta por el **INAMU** y colectivos de derechos humanos. El médico forense minimizó el sufrimiento de Luany afirmando que la joven **«se desvaneció rápido»**, y autoridades judiciales aludieron a supuestos problemas de adicción de la víctima para justificar la agresión.",
    estrategia: "Rivera Cheves interpuso recurso de apelación denunciando enérgicamente **las valoraciones machistas del médico forense**. **(1) Segundo debate (agosto 2022)**: el Tribunal de Apelación de Cartago anuló el primer juicio. La firma demostró la alevosía y elevó la condena a **26 años**, pero apeló de nuevo por concurso material. **(2) Tercer debate (julio 2024)**: el tribunal impuso finalmente **la pena máxima legal: 35 años de prisión efectiva**. Las juezas fundamentaron la severidad en el carácter cínico, cruel y perverso del imputado al sepultar a la joven a pocos metros de la casa de la madre.",
    media: "joseph4.jpg",
    tags: ["Homicidio calificado", "Pena máxima legal", "3 debates orales", "Violencia de género"],
    timeline: [
      { date: "2020 · Junio 9",   label: "Desaparición",            text: "Luany Valeria Salazar Zamora, 23 años, es reportada como desaparecida." },
      { date: "2020 · Junio 16",  label: "Hallazgo",                text: "Cuerpo localizado sin vida, envuelto en plástico negro y semienterrado en el patio de la casa de Kenneth Mejía Chavarría ('Hippie', 38), a 15 metros de su residencia." },
      { date: "2020",             label: "Asunción del caso",       text: "El Lic. Rivera Cheves asume la representación de Patricia Zamora Masís, madre de la víctima." },
      { date: "2021 · Julio",     label: "Primer debate",           text: "Tribunal condena a 19 años por homicidio simple y hurto menor. La sentencia es catalogada injusta por INAMU y colectivos de derechos humanos." },
      { date: "2022 · Agosto",    label: "Segundo debate · reenvío",text: "Tribunal de Apelación de Cartago anula el primer juicio. Nuevo tribunal eleva la condena a 26 años al acoger la alevosía. El bufete apela por concurso material." },
      { date: "2024 · Julio 23",  label: "Tercer debate · final",   text: "Sentencia definitiva: 35 años de prisión efectiva, pena máxima legal para homicidio calificado. Juezas fundamentan en el carácter cínico y perverso del imputado." },
    ],
    quote: "Cada caso representa un compromiso personal con la justicia y con las familias que buscan que sus seres queridos sean recordados con dignidad.",
    quoteContext: "Sobre el trabajo continuado del bufete en violencia de género",
    press: [],
    facts: [
      { k: "Pena efectiva",     v: "35 años (máximo legal CR)" },
      { k: "Debates orales",    v: "3 (2021, 2022, 2024)" },
      { k: "Duración del caso", v: "4 años · 2020 → 2024" },
      { k: "Tribunal de cierre",v: "Apelación de Cartago" },
      { k: "Imputado",          v: "Kenneth Mejía Chavarría ('Hippie', 38)" },
      { k: "Tipo penal",        v: "Homicidio calificado + robo agravado" },
    ],
  },
  {
    slug: "yendry-loaiza",
    year: "2019",
    yearRange: "2019 →",
    location: "28 Millas de Batán, Matina · Limón",
    status: "Querella activa",
    statusTone: "active" as const,
    name: "Yendry Loaiza Fernández",
    short: "**Menor de edad (16 años)** hallada en fosa clandestina en plantación agrícola del Caribe. Fiscalía liberó inicialmente a los detenidos. El bufete asumió como querellante para reactivar el caso y exigir pena hasta **50 años**.",
    role: "Querellante particular · representación de la familia",
    sentence: "Pena hasta 50 años exigida",
    headline: "Litigio en condiciones de impunidad estructural",
    summary: "Menor de edad de 16 años desaparecida en agosto de 2019 en la localidad de 28 Millas de Batán, cantón de Matina, provincia de Limón. Nueve días después, su cuerpo fue desenterrado de una fosa clandestina localizada en una plantación agrícola. El Ministerio Público decretó inicialmente la libertad sin medidas restrictivas de los dos principales detenidos. Rivera Cheves & Asociados asumió la representación como querellante particular para revertir el archivo del caso y exigir penas de hasta 50 años de prisión.",
    hechos: "En agosto de 2019, **Yendry Loaiza Fernández, menor de 16 años**, desaparece en la localidad de 28 Millas de Batán, cantón de Matina, provincia de Limón. **Nueve días después, su cuerpo sin vida es desenterrado de una fosa clandestina** localizada en una plantación agrícola de la zona. La región presenta condiciones de **alta peligrosidad social e impunidad estructural** característica de los territorios caribeños.",
    desafio: "Apenas iniciadas las indagaciones, **el Ministerio Público decretó la libertad sin medidas restrictivas de los dos principales detenidos**. La indignación y el desamparo de la familia motivaron la intervención del bufete. El caso enfrentaba **la posibilidad de archivo por inacción fiscal**, en un contexto territorial de difícil acceso probatorio.",
    estrategia: "Rivera Cheves asumió la dirección legal como **querellante particular** y lideró una estrategia de control e impugnación de la actividad fiscal: **(1) oposición a los intentos de archivo de la causa**, (2) exigencia de reconstrucción técnica de la escena del hallazgo, (3) forzar la realización de **exámenes biológicos rigurosos** sobre las prendas secuestradas a los sospechosos. Este esfuerzo logró reencauzar la causa hacia **la exigencia de penas de hasta 50 años de prisión**, demostrando la capacidad del bufete para operar fuera del GAM en condiciones de impunidad estructural.",
    media: "joseph5.jpg",
    tags: ["Menor de edad", "Limón", "Reactivación de causa", "Impunidad estructural"],
    timeline: [
      { date: "2019 · Agosto",  label: "Desaparición",       text: "Yendry Loaiza Fernández, 16 años, desaparece en 28 Millas de Batán, cantón de Matina, Limón." },
      { date: "2019 · Agosto",  label: "Hallazgo",           text: "Cuerpo desenterrado de una fosa clandestina en una plantación agrícola, 9 días después de la desaparición." },
      { date: "2019",           label: "Liberación inicial", text: "Ministerio Público decreta libertad sin medidas restrictivas a dos principales detenidos (incluyendo de apellido Soto)." },
      { date: "2019",           label: "Asunción del caso",  text: "El bufete asume la dirección legal como querellante particular ante el desamparo procesal de la familia." },
      { date: "En curso",       label: "Reactivación",       text: "Estrategia: oposición a archivo, reconstrucción técnica de la escena, exámenes biológicos sobre prendas secuestradas. Pena exigida: hasta 50 años." },
    ],
    quote: "Litigar en condiciones de impunidad estructural fuera del GAM exige el mismo rigor técnico que en San José — y la misma firmeza ante la inacción fiscal.",
    quoteContext: "Sobre el caso Yendry Loaiza · Litoral Caribe",
    press: [],
    facts: [
      { k: "Edad de la víctima", v: "16 años (menor)" },
      { k: "Año de los hechos",  v: "Agosto 2019" },
      { k: "Ubicación",          v: "28 Millas de Batán, Matina, Limón" },
      { k: "Pena exigida",       v: "Hasta 50 años" },
      { k: "Rol del bufete",     v: "Querellante particular" },
      { k: "Estrategia clave",   v: "Reactivación de causa archivada" },
    ],
  },
  {
    slug: "finca-lajas",
    year: "2025",
    yearRange: "2025 →",
    location: "Santa Marta de Alajuelita · San José",
    status: "Causa activa · investigación",
    statusTone: "active" as const,
    name: "Toño y Maureen — Finca Lajas",
    short: "Doble homicidio de adultos mayores queridos por toda una comunidad: **Antonio «Toño» Badilla (80 años) y Maureen Molina (65)**, fundadores del restaurante Finca Lajas en Alajuelita. El bufete asumió la querella para exigir la **máxima pena**.",
    role: "Querellante privado · representación de los familiares de las víctimas",
    sentence: "Causa activa · imputado en prisión preventiva",
    headline: "El doble homicidio que paralizó a la comunidad de Alajuelita",
    summary: "Antonio «Toño» Badilla (80 años) y su esposa Maureen Molina (65 años), fundadores del restaurante Finca Lajas en Santa Marta de Alajuelita, fueron hallados sin vida el 16 de noviembre de 2025 dentro de su hogar con múltiples heridas de arma blanca. El principal sospechoso es Mairena, peón nicaragüense de 28 años que trabajaba para la pareja y que, según vecinos, había recibido apoyo económico de los propios Badilla-Molina. El OIJ lo capturó y un tribunal lo envió a prisión preventiva. El Lic. Rivera Cheves asumió la querella con el respaldo criminalístico del Lic. Álvaro Borbón Barrantes — 30 años de experiencia en el OIJ.",
    hechos: "El domingo **16 de noviembre de 2025**, clientes habituales de Finca Lajas llegaron temprano al restaurante y encontraron una escena que describieron como «terrible»: **Antonio «Toño» Badilla (80 años) y su esposa Maureen Molina (65 años) yacían sin vida** en su hogar. El reporte al OIJ ingresó a las **8:32 a.m.** con **múltiples heridas causadas por arma blanca**. Toño y Maureen eran los fundadores del restaurante Finca Lajas — un espacio reconocido en la zona sur de San José por sus senderos, su cocina casera y la calidez genuina de sus dueños, quienes durante años convirtieron la finca en **punto de encuentro de senderistas, familias y vecinos** de toda la comunidad.",
    desafio: "El principal sospechoso, **Mairena (28 años, de origen nicaragüense)**, era un peón que trabajaba directamente para la pareja y que —según testimonios de vecinos— **había recibido apoyo económico de los propios Badilla-Molina**. El vínculo de confianza entre víctimas y agresor constituye una **circunstancia agravante** que la estrategia jurídica debe acreditar plenamente. La **reconstrucción técnica de los hechos** —realizada en la escena del crimen en mayo de 2026— es una pieza procesal clave para consolidar la cadena probatoria.",
    estrategia: "El Lic. Rivera Cheves asumió la dirección del caso como **querellante privado**, contando con el apoyo técnico del **Lic. Álvaro Borbón Barrantes**: abogado, notario y criminólogo con más de **30 años de experiencia investigativa en el OIJ**, especializado en análisis de escena del crimen y cadena de custodia. La estrategia combina la construcción de una **plataforma probatoria sólida** —ancla en la reconstrucción in situ de mayo 2026— con la exigencia de **las penas máximas aplicables al doble homicidio con agravantes**, garantizando que la brutalidad del crimen y el abuso de confianza del imputado queden plenamente acreditados ante el tribunal.",
    media: "joseph1.jpg",
    tags: ["Doble homicidio", "Adultos mayores", "Caso activo", "Alajuelita"],
    timeline: [
      { date: "2025 · Nov 16",  label: "Hallazgo",            text: "Clientes de Finca Lajas encuentran a Antonio «Toño» Badilla (80) y Maureen Molina (65) sin vida. Reporte al OIJ a las 8:32 a.m. Múltiples heridas de arma blanca." },
      { date: "2025 · Nov",     label: "Identificación",      text: "El OIJ divulga la fotografía del principal sospechoso: Mairena, 28 años, nicaragüense, peón que laboraba en la finca y había recibido apoyo de las propias víctimas." },
      { date: "2025 · Nov",     label: "Captura",             text: "Autoridades capturan al sospechoso. El tribunal lo envía a seis meses de prisión preventiva mientras avanza la investigación." },
      { date: "2025 — 2026",    label: "Asunción del caso",   text: "El Lic. Rivera Cheves asume la representación de los familiares como querellante privado. Se integra al equipo el Lic. Álvaro Borbón Barrantes, criminólogo con 30+ años en el OIJ." },
      { date: "2026 · Mayo",    label: "Reconstrucción",      text: "Se realiza la reconstrucción oficial de los hechos en la escena del crimen — Finca Lajas, Alajuelita. Pieza procesal clave para la cadena probatoria." },
      { date: "En curso",       label: "Investigación activa",text: "Causa en etapa de investigación. El bufete exige la pena máxima por doble homicidio con agravantes." },
    ],
    quote: "Toño y Maureen construyeron una comunidad alrededor de Finca Lajas. Nuestra obligación es que su memoria reciba la misma justicia que merece su vida.",
    quoteContext: "Lic. Joseph Rivera Cheves · asunción del caso Finca Lajas · 2025",
    press: [
      { medio: "Acontecer",   t: "Joseph Rivera asume caso del doble homicidio de Finca Lajas",                              u: "https://acontecer.co.cr/nacionales/joseph-rivera-asume-caso-doble-homicidio-finca-lajas-alajuelita" },
      { medio: "Teletica",    t: "Doble homicidio en Alajuelita: asesinan a pareja de adultos mayores",                       u: "https://www.teletica.com/sucesos/doble-homicidio-en-alajuelita-asesinan-a-pareja-de-adultos-mayores_397205" },
      { medio: "La Nación",   t: "Adultos mayores asesinados en Alajuelita eran los dueños del restaurante Finca Lajas",      u: "https://www.nacion.com/sucesos/adultos-mayores-asesinados-en-alajuelita-eran-los/SBBRQ2AGJFG35P4TSK2OIRUORQ/story/" },
      { medio: "CR Hoy",      t: "Pareja celebró cumpleaños a amigo antes de ser asesinada en finca en Alajuelita",           u: "https://crhoy.com/nacionales/video-pareja-celebro-cumpleanos-a-amigo-antes-de-ser-asesinada-en-finca-en-alajuelita/" },
      { medio: "La Teja",     t: "Doble homicidio sacude de nuevo la Cruz de Alajuelita: asesinan a pareja dueña de «Donde Toño»", u: "https://www.lateja.cr/sucesos/doble-homicidio-sacude-de-nuevo-la-cruz-de/CCJLGK72YJCDRJQBMTSDP3ATZI/story/" },
    ],
    facts: [
      { k: "Hechos",          v: "16 de noviembre de 2025" },
      { k: "Víctimas",        v: "Toño (80 años) · Maureen (65 años)" },
      { k: "Causa de muerte", v: "Múltiples heridas de arma blanca" },
      { k: "Imputado",        v: "Mairena (28) · peón · prisión preventiva" },
      { k: "Ubicación",       v: "Sta. Marta de Alajuelita · San José" },
      { k: "Rol del bufete",  v: "Querellante · pena máxima exigida" },
    ],
    gallery: [
      {
        src: "/images/casos/finca-lajas-vista-panoramica.jpg",
        alt: "Vista panorámica desde Finca Lajas Donde Toño en Santa Marta de Alajuelita — reconstrucción de hechos caso doble homicidio Toño Badilla y Maureen Molina — fotografía Carlos Valencia periodista mayo 2026",
        caption: "Vista desde Finca Lajas · Alajuelita",
        sub: "La finca está enclavada en las montañas de Santa Marta de Alajuelita. Desde su mirador se aprecian los valles y plantaciones agrícolas de la zona sur de San José. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-cartel-restaurante-donde-tono.jpg",
        alt: "Cartel interior del restaurante Finca Las Lajas Donde Toño en Alajuelita con información de pago Sinpemóvil — escena fotografiada durante reconstrucción judicial de hechos — doble homicidio adultos mayores Costa Rica 2025",
        caption: "Cartel del restaurante · Finca Las Lajas «Donde Toño»",
        sub: "«Un lugar diferente para disfrutar». El cartel con el nombre del restaurante y el número de pago por Sinpemóvil, tal como lo dejaron Toño y Maureen. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-puerta-mensajes-visitantes.jpg",
        alt: "Puerta roja del restaurante Finca Lajas Donde Toño en Alajuelita con mensajes escritos por visitantes — «Esperar Nada Agradecer Todo» — fotografiada durante reconstrucción de hechos caso doble homicidio Costa Rica mayo 2026",
        caption: "Puerta roja · mensajes de visitantes de Finca Lajas",
        sub: "«Esperar Nada, Agradecer Todo». Los visitantes de Finca Lajas dejaron sus huellas escritas en la puerta roja del restaurante — testimonio del impacto que este lugar tenía en la comunidad. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-reconstruccion-medicion-interior.jpg",
        alt: "Investigador midiendo la escena del crimen en el interior del restaurante Finca Lajas Alajuelita durante reconstrucción oficial de hechos — caso doble homicidio Toño Badilla Maureen Molina — cinta métrica y cinta de precaución — fotografía Carlos Valencia mayo 2026",
        caption: "Reconstrucción oficial · interior del restaurante",
        sub: "Durante la reconstrucción de hechos de mayo 2026, el equipo investigador tomó medidas precisas del interior del restaurante. La cinta amarilla de precaución delimita las zonas procesales clave. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-mirador-reconstruccion-1.jpg",
        alt: "Mirador del restaurante Finca Lajas Donde Toño en Alajuelita durante reconstrucción judicial de hechos — equipo de investigación en la escena del doble homicidio de adultos mayores — Costa Rica mayo 2026 — fotografía Carlos Valencia",
        caption: "Mirador de Finca Lajas · reconstrucción de hechos",
        sub: "El equipo del Lic. Rivera Cheves recorre el mirador del restaurante durante la reconstrucción de hechos. Al fondo, los valles de Alajuelita y la cordillera de San José. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-mirador-reconstruccion-2.jpg",
        alt: "Interior del mirador de Finca Lajas Donde Toño en Alajuelita — vista nocturna durante reconstrucción oficial caso doble homicidio adultos mayores Toño y Maureen — Costa Rica 2026 — fotografía Carlos Valencia periodista",
        caption: "Mirador · segunda perspectiva",
        sub: "Segunda perspectiva del mirador durante la reconstrucción. Las mesas y bancas de madera donde Toño y Maureen recibieron a cientos de familias durante años. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-joseph-rivera-declaraciones-prensa.jpg",
        alt: "Abogado penalista Joseph Rivera Cheves dando declaraciones a la prensa en el interior de Finca Lajas Donde Toño en Alajuelita durante reconstrucción de hechos del caso doble homicidio — Costa Rica mayo 2026 — fotografía Carlos Valencia",
        caption: "Lic. Joseph Rivera Cheves · declaraciones en la escena",
        sub: "El Lic. Rivera Cheves atiende a medios de comunicación en el interior del restaurante durante la reconstrucción de hechos. La estrategia del bufete combina rigor técnico con visibilidad mediática para garantizar justicia. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-letrero-metalico.jpg",
        alt: "Letrero metálico dorado del restaurante Finca Lajas Donde Toño en Santa Marta de Alajuelita Costa Rica — fotografiado durante reconstrucción de hechos caso doble homicidio adultos mayores noviembre 2025 — fotografía Carlos Valencia",
        caption: "Letrero dorado · «Finca Lajas Donde Toño»",
        sub: "El letrero dorado que identifica el restaurante contra el fondo verde de las montañas de Alajuelita. Símbolo de lo que Toño y Maureen construyeron durante décadas para la comunidad. Fotografía de Carlos Valencia, periodista.",
      },
      {
        src: "/images/casos/finca-lajas-taza-recuerdo-tono-maureen.jpg",
        alt: "Taza personalizada del restaurante Finca Lajas con fotografía de Antonio Toño Badilla y Maureen Molina junto a imagen religiosa — objetos personales hallados durante reconstrucción de hechos caso doble homicidio Alajuelita Costa Rica 2025",
        caption: "Taza de Finca Lajas · recuerdo de Toño y Maureen",
        sub: "Una taza personalizada con la fotografía de Toño y Maureen junto a una imagen religiosa — el testimonio más íntimo de quiénes eran las víctimas y del lugar que habían construido con sus propias manos. Fotografía de Carlos Valencia, periodista.",
      },
    ],
    tiktokVideos: [
      "https://www.tiktok.com/@josephriveraabogado/video/7644068550449040660",
    ],
  },
];

// ── SEO por caso — título, descripción y keywords específicos ─────────────

export const RC_CASES_SEO: Record<string, {
  title: string;
  desc: string;
  keywords: string[];
}> = {
  "nadia-peraza": {
    title: "Nadia Peraza Espinoza — Femicidio Heredia 2026 | Abogado Joseph Rivera",
    desc: "Caso Nadia Peraza: femicidio con desmembramiento en Heredia, CR. Condena histórica 50 años (máximo legal). Representación por el Lic. Joseph Rivera Cheves, abogado penalista.",
    keywords: [
      "nadia peraza",
      "nadia peraza espinoza",
      "caso nadia peraza",
      "nadia peraza costa rica",
      "jeremy buzano paisano",
      "femicidio heredia 2024",
      "pena maxima 50 años costa rica",
      "caso refrigeradora heredia",
      "nadia peraza abogado",
      "nadia peraza sentencia",
    ],
  },
  "carla-stefaniak": {
    title: "Carla Stefaniak — Caso Escazú Costa Rica 2018 | Abogado Joseph Rivera",
    desc: "Caso Carla Stefaniak: turista estadounidense asesinada en Airbnb de Escazú 2018. Cooperación FBI. Representación del padre por el Lic. Joseph Rivera Cheves, abogado penalista Costa Rica.",
    keywords: [
      "carla stefaniak",
      "caso carla stefaniak",
      "carla stefaniak costa rica",
      "carla stefaniak escazu",
      "carla stefaniak airbnb",
      "fbi costa rica homicidio 2018",
      "joseph rivera carla stefaniak",
      "caso airbnb escazu",
    ],
  },
  "junieysis-merlo": {
    title: "Junieysis Merlo — Femicidio Santa Ana 2026 | Abogado Joseph Rivera",
    desc: "Caso Junieysis Merlo: ciudadana nicaragüense asesinada en Santa Ana CR, 2026. Representación pro-bono. El régimen de Ortega vetó al Lic. Joseph Rivera Cheves. Abogado penalista Costa Rica.",
    keywords: [
      "junieysis merlo",
      "junieysis merlo espinoza",
      "caso junieysis merlo",
      "femicidio santa ana 2026",
      "caso nicaragua costa rica",
      "abogado pro bono femicidio",
      "joseph rivera junieysis merlo",
      "ortega abogado costarricense",
    ],
  },
  "luany-salazar": {
    title: "Luany Salazar — Homicidio 3 Debates 35 Años | Abogado Joseph Rivera",
    desc: "Caso Luany Salazar: 3 juicios en 4 años hasta lograr 35 años (pena máxima homicidio calificado). Representación de la madre por el Lic. Joseph Rivera Cheves, abogado penalista Costa Rica.",
    keywords: [
      "luany salazar",
      "luany salazar zamora",
      "caso luany salazar",
      "kenneth mejia chavarria hippie",
      "homicidio calificado pena maxima",
      "tres debates orales costa rica",
      "joseph rivera luany salazar",
      "caso 3 juicios costa rica",
    ],
  },
  "yendry-loaiza": {
    title: "Yendry Loaiza — Caso Limón Costa Rica 2019 | Abogado Joseph Rivera",
    desc: "Caso Yendry Loaiza: menor de 16 años hallada en fosa clandestina en Matina, Limón 2019. Bufete reactivó causa archivada. Representación por el Lic. Joseph Rivera Cheves, abogado penalista.",
    keywords: [
      "yendry loaiza",
      "yendry loaiza fernandez",
      "caso yendry loaiza",
      "femicidio limon costa rica",
      "fosa clandestina matina limon",
      "caso limon costa rica 2019",
      "joseph rivera yendry loaiza",
      "caso menor edad limon",
    ],
  },
  "finca-lajas": {
    title: "Finca Lajas — Doble Homicidio Alajuelita 2025 | Abogado Joseph Rivera",
    desc: "Caso Finca Lajas: doble homicidio de Toño Badilla (80) y Maureen Molina (65), dueños del restaurante en Alajuelita. Noviembre 2025. Representación por el Lic. Joseph Rivera Cheves, abogado penalista Costa Rica.",
    keywords: [
      "finca lajas",
      "finca lajas alajuelita",
      "donde toño alajuelita",
      "toño maureen alajuelita",
      "doble homicidio alajuelita 2025",
      "adultos mayores asesinados alajuelita",
      "joseph rivera finca lajas",
      "caso finca lajas costa rica",
      "antonio badilla maureen molina",
      "restaurante donde toño homicidio",
    ],
  },
};

// Litigación recursiva ante Sala Tercera (Casación Penal)
export const RC_CASACIONES = {
  intro: "Defensa exitosa de sentencias condenatorias en sede de casación penal ante la Sala Tercera de la Corte Suprema de Justicia. Cuando la defensa técnica de los imputados argumenta contaminación de escenas, prueba espuria o nulidades formales para revertir condenas, el bufete sostiene la firmeza técnica de la prueba testimonial y científica.",
  destacado: {
    voto: "Sala Tercera · Voto Nº 000374",
    rol:  "Abogado director de la Querella y de la Acción Civil Resarcitoria",
    resultado: "Rechazo de plano de las pretensiones de nulidad. Inadmisión de los recursos de la defensa por defectos formales. Confirmación de la condena de prisión obtenida en debate.",
  },
};

// Doctrina académica e incidencia legislativa
export const RC_DOCTRINA = {
  articulos: [
    {
      titulo: "Ineficacia de la casación penal costarricense",
      tipo: "Artículo académico",
      desc: "Análisis crítico de los **mecanismos recursivos** en sede de casación y propuesta de **reforma procedimental**.",
    },
  ],
  propuestas: [
    {
      titulo: "Reforma del Artículo 156 del Código Penal — Delito de violación",
      tipo: "Propuesta legislativa",
      desc: "Proyecto de modificación del tipo penal de violación para **ampliar protección de víctimas** y robustecer la **persecución estatal**.",
    },
  ],
  reconocimientos: [
    "Asesor ad honorem · Asamblea Legislativa de Costa Rica (2020–2022)",
    "Docencia en 6 universidades costarricenses",
    "Especialización en Litigación Oral · Temple University (Filadelfia, EE.UU.)",
    "Máster en Compliance, Fraude y Blanqueo · EALDE Business School + Universidad de Murcia",
  ],
};

export const RC_AREAS = [
  {
    n: "01", slug: "derecho-penal",
    t: "Derecho Penal y Delitos Complejos",
    pre: "Derecho Penal y ", em: "Delitos Complejos", post: "",
    d: "**Homicidios**, femicidios, **delitos sexuales**, estafas, narcotráfico, extorsión, **delincuencia organizada** y asociaciones ilícitas.",
    items: ["Homicidios y femicidios","Delitos sexuales","Estafas y fraudes","Narcotráfico y extorsión","Delincuencia organizada","Asociaciones ilícitas"],
    long: [
      "El bufete Rivera Cheves & Asociados representa a familias y a personas imputadas en los procesos penales más complejos del ordenamiento jurídico costarricense. Más de 10 años de litigación oral en sede penal — desde audiencias preliminares hasta juicios orales y públicos de alta exposición mediática.",
      "Nuestra práctica abarca el espectro completo de los delitos contra la vida (homicidios, femicidios), delitos sexuales, delitos patrimoniales (estafas, fraudes, apropiaciones), narcotráfico y extorsión, y la criminalidad organizada. Trabajamos tanto en representación de víctimas como en defensa técnica de personas imputadas, siempre bajo el estándar constitucional de presunción de inocencia y debido proceso.",
      "Cada caso se aborda con un equipo multidisciplinario: jurídico, criminalístico y forense. Esta combinación nos permite construir teorías del caso sólidas, identificar prueba indirecta determinante, y litigar con base científica frente a tribunales de juicio y de casación.",
    ],
    relatedCases: ["nadia-peraza","luany-salazar","junieysis-merlo"],
    faqs: [
      { q: "¿Atienden tanto a víctimas como a personas imputadas?", a: "Sí. Representamos a familias de víctimas en delitos contra la vida y la integridad sexual, y también asumimos defensas técnicas de personas imputadas cuando el conflicto de interés lo permite." },
      { q: "¿En qué etapas del proceso pueden intervenir?", a: "Desde la primera diligencia ante el Ministerio Público o el OIJ hasta el juicio oral, casación ante Sala Tercera y revisión. Lo recomendable es contactarnos lo antes posible." },
      { q: "¿Atienden casos fuera de la zona metropolitana?", a: "Sí, litigamos en todos los circuitos judiciales de Costa Rica. Para casos urgentes coordinamos desplazamiento al circuito correspondiente." },
    ],
  },
  {
    n: "02", slug: "compliance-forense",
    t: "Compliance Forense y Delitos Financieros",
    pre: "Compliance Forense y ", em: "Delitos Financieros", post: "",
    d: "Aplicación de técnicas de **compliance**, prevención del blanqueo y **análisis forense financiero** para resolver no solo casos económicos sino también crímenes de sangre complejos — como el rastreo post-mortem de transacciones que sustentó la **condena de 50 años en el caso Nadia Peraza**.",
    items: ["Lavado de activos","Capitalización ilícita","Legitimación de capitales","Compliance forense aplicado","Análisis forense financiero","Rastreo de transacciones post-mortem"],
    long: [
      "El Lic. Joseph Rivera Cheves es Máster en Compliance, Fraude y Blanqueo por EALDE Business School (España) y la Universidad de Murcia, con doble titulación internacional. Esta especialización es el activo diferencial del bufete: aplicamos técnicas de análisis forense financiero no solo a delitos económicos clásicos sino también a casos de criminalidad violenta, donde el rastreo patrimonial frecuentemente sostiene la imputación.",
      "Un ejemplo concreto es el caso Nadia Peraza Espinoza, donde el análisis post-mortem de transacciones bancarias fue parte de la prueba que sustentó la condena de máxima pena. La técnica forense aplicada al patrimonio del imputado permitió corroborar versiones, identificar contactos y construir cronologías que la prueba testimonial por sí sola no habría producido.",
      "En sede económica, defendemos a personas físicas y empresas en investigaciones por lavado de activos, capitalización ilícita y legitimación de capitales — tanto en sede administrativa (SUGEF, ICD) como penal. También asesoramos a corporaciones en el diseño de programas de compliance preventivos.",
    ],
    relatedCases: ["nadia-peraza"],
    faqs: [
      { q: "¿Qué diferencia al compliance forense del compliance preventivo?", a: "El compliance preventivo construye controles antes del evento. El forense reconstruye qué pasó después — sigue el rastro patrimonial, identifica anomalías, y prepara prueba pericial para sede penal o sancionatoria." },
      { q: "¿Trabajan con peritos financieros propios?", a: "Sí. Coordinamos con peritos colegiados y con analistas forenses que han comparecido como peritos de parte en juicios de alto perfil." },
      { q: "¿Pueden representar a empresas en sede SUGEF / ICD?", a: "Sí. Asesoramos a sujetos obligados durante inspecciones, requerimientos y procedimientos sancionatorios, así como en la implementación de programas preventivos." },
    ],
  },
  {
    n: "03", slug: "derecho-corporativo",
    t: "Derecho Corporativo y Empresarial",
    pre: "Derecho Corporativo y ", em: "Empresarial", post: "",
    d: "Constitución de **sociedades**, fusiones, adquisiciones, **fideicomisos** y optimización de estructuras corporativas.",
    items: ["Constitución de sociedades","Fusiones y adquisiciones","Registro de accionistas","Fideicomisos","Compliance corporativo","Estructuras empresariales"],
    long: [
      "Asesoramos a empresas y emprendimientos en la estructuración legal de su operación en Costa Rica — desde la constitución inicial de la sociedad anónima o SRL hasta la implementación de programas de compliance corporativo escalables a partir de la Ley 9986.",
      "Nuestra práctica cubre fusiones y adquisiciones (M&A) de cuantías medias y altas, reorganizaciones societarias, transmisión de cuotas y acciones, fideicomisos de garantía y de administración, y el registro y mantenimiento del libro de accionistas conforme a la regulación vigente de transparencia y beneficiarios finales.",
      "El Lic. Rivera Cheves fue notario público de planta de la Corporación Grupo Q (2014-2015), abogado de planta del Banco Nacional de Costa Rica (2010-2011) y asesor legal del Colegio de Ciencias Económicas. Esta trayectoria corporativa garantiza criterio de negocio, no solo criterio jurídico.",
    ],
    relatedCases: [] as string[],
    faqs: [
      { q: "¿Constituyen sociedades para no residentes en Costa Rica?", a: "Sí, frecuentemente. Coordinamos el cumplimiento migratorio y bancario para que la constitución se complete sin desplazamiento del cliente." },
      { q: "¿Hacen due diligence pre-adquisición?", a: "Sí. Coordinamos due diligence legal, tributario y de compliance forense para operaciones de M&A." },
    ],
  },
  {
    n: "04", slug: "derecho-laboral",
    t: "Derecho Laboral",
    pre: "Derecho ", em: "Laboral", post: "",
    d: "Defensa en **despidos injustificados**, conciliaciones y conflictos laborales del sector privado.",
    items: ["Despidos injustificados","Conciliaciones laborales","Conflictos laborales","Derechos del trabajador","Defensa del empleador","Procesos ante el MTSS"],
    long: [
      "Atendemos conflictos laborales del sector privado desde ambos lados de la mesa — defensa del trabajador frente a despidos injustificados o sin responsabilidad, y defensa del empleador en denuncias, demandas y procedimientos sancionatorios. Esto nos da ventaja estratégica al anticipar la posición contraria en cada caso.",
      "Tramitamos conciliaciones administrativas ante el Ministerio de Trabajo y Seguridad Social (MTSS), demandas ante los Juzgados de Trabajo, recursos ante los Tribunales de Trabajo y la Sala Segunda de la Corte Suprema. Cuando el conflicto laboral conecta con materia penal (despido derivado de denuncia falsa, persecución penal por el empleador, etc.), integramos el equipo penalista del bufete.",
      "Buscamos resoluciones rápidas y eficaces — la mayoría de conflictos laborales benefician a ambas partes cuando se concilian temprano. Cuando la conciliación no es viable, litigamos con preparación técnica completa.",
    ],
    relatedCases: [] as string[],
    faqs: [
      { q: "¿Atienden casos del sector público?", a: "Nuestra práctica principal es sector privado. Para sector público referimos a colegas especializados en empleo público / Servicio Civil." },
      { q: "¿Cuánto tarda un proceso laboral en Costa Rica?", a: "Una conciliación administrativa puede resolverse en semanas. Un proceso judicial completo, considerando primera instancia y apelación, oscila entre 12 y 30 meses según el circuito." },
    ],
  },
  {
    n: "05", slug: "derecho-notarial",
    t: "Derecho Notarial y Registral",
    pre: "Derecho Notarial y ", em: "Registral", post: "",
    d: "Servicios notariales y registrales: **escrituras**, testamentos e inscripción de actos en **registros públicos**.",
    items: ["Escrituras públicas","Testamentos","Inscripción registral","Autenticación de documentos","Traspasos de propiedad","Contratos notariales"],
    long: [
      "El Lic. Rivera Cheves es notario público en ejercicio con Maestría en Derecho Notarial y Registral (Universidad Latina de Costa Rica, 2010). Otorgamos escrituras públicas para todo tipo de actos — traspasos de bienes inmuebles, constitución y modificación de sociedades, testamentos, hipotecas, fideicomisos, mandatos y contratos atípicos.",
      "Llevamos el trámite completo: desde el estudio de registro previo, redacción del proyecto, otorgamiento y autorización de la escritura, hasta su inscripción en el Registro Nacional. Coordinamos también las autenticaciones consulares cuando el cliente está fuera de Costa Rica.",
      "Para clientes corporativos mantenemos el libro de accionistas y el libro de actas conforme a la normativa de transparencia vigente, y gestionamos los reportes de beneficiarios finales ante el Banco Central.",
    ],
    relatedCases: [] as string[],
    faqs: [
      { q: "¿Pueden hacer un testamento si la persona está enferma?", a: "Sí. Podemos desplazarnos a hospital o domicilio cuando las condiciones lo requieran. Coordinamos previamente con el médico tratante para confirmar capacidad cognitiva al momento del otorgamiento." },
      { q: "¿Cuánto tarda la inscripción de un traspaso de inmueble?", a: "Entre 5 y 20 días hábiles según la complejidad del estudio registral y la carga del Registro Nacional al momento del depósito." },
    ],
  },
  {
    n: "06", slug: "asesoria-internacional",
    t: "Asesoría Estratégica Internacional",
    pre: "Asesoría Estratégica ", em: "Internacional", post: "",
    d: "Estrategia legal frente a **terrorismo**, subversión y **crimen organizado** a nivel nacional e internacional. Cooperación con agencias de seguridad (**FBI · 2018**) y litigio de **derechos humanos ante la OEA** contra regímenes autoritarios.",
    items: ["Crimen organizado transnacional","Cooperación con FBI","Terrorismo y subversión","Derechos humanos · OEA","Extradiciones","Delitos transfronterizos"],
    long: [
      "Asesoramos a clientes, gobiernos y organizaciones civiles en estrategia legal transfronteriza. Nuestra práctica incluye cooperación con agencias de seguridad internacional — destacando el trabajo con el FBI en 2018 en un caso de cobertura mediática internacional — y litigio de derechos humanos ante el Sistema Interamericano contra regímenes autoritarios.",
      "En sede penal internacional manejamos extradiciones (activa y pasiva), asistencia judicial recíproca, y la coordinación con autoridades extranjeras durante investigaciones por delitos transfronterizos. Conocemos los protocolos de cooperación bilateral más utilizados desde Costa Rica.",
      "En derechos humanos, hemos preparado peticiones y casos ante la Comisión Interamericana de Derechos Humanos (OEA) por violaciones graves cometidas por estados autoritarios de la región. Esta línea de trabajo se ejerce frecuentemente pro-bono o con financiamiento de organizaciones civiles.",
    ],
    relatedCases: ["carla-stefaniak","junieysis-merlo"],
    faqs: [
      { q: "¿Manejan extradiciones desde y hacia Costa Rica?", a: "Sí. Hemos asistido tanto a personas requeridas por estados extranjeros como a víctimas que buscan que un imputado fugitivo sea extraditado a Costa Rica." },
      { q: "¿Aceptan casos pro-bono de derechos humanos?", a: "Sí, según disponibilidad. Los casos ante el SIDH suelen tramitarse con financiamiento de organizaciones civiles o fondos propios cuando la causa lo amerita." },
    ],
  },
  {
    n: "07", slug: "casacion-penal",
    t: "Casación Penal · Sala Tercera",
    pre: "Casación Penal · ", em: "Sala Tercera", post: "",
    d: "Defensa técnica de sentencias condenatorias en sede recursiva ante la **Sala Tercera de la Corte Suprema de Justicia**. Rechazo sistemático de pretensiones de nulidad e inadmisión de recursos por **defectos formales**.",
    items: ["Casación de sentencias condenatorias","Defensa de prueba testimonial","Defensa de prueba científica","Litigación recursiva","Voto Nº 000374 (Sala Tercera)","Confirmación de condenas"],
    long: [
      "La casación penal es el último filtro técnico antes de que una sentencia condenatoria quede firme. Defendemos sentencias obtenidas en juicio oral frente a los recursos de casación interpuestos por la defensa de personas condenadas, así como representamos a víctimas y al Ministerio Público en sus posiciones procesales ante la Sala Tercera de la Corte Suprema de Justicia.",
      "Nuestra estrategia recursiva busca el rechazo sistemático de las pretensiones de nulidad, defendiendo la validez de la prueba testimonial, pericial y científica admitida en debate, y demostrando que los recursos no superan los estándares formales de admisibilidad cuando ese es el caso. El Voto Nº 000374 de Sala Tercera es un ejemplo reciente del trabajo del bufete en esta sede.",
      "La litigación recursiva requiere preparación distinta a la litigación oral — argumentación escrita densa, dominio de la jurisprudencia constitucional y casacional, y capacidad de oralizar en audiencia con tiempos muy acotados. Es una práctica especializada y el bufete la ofrece como línea propia.",
    ],
    relatedCases: ["nadia-peraza"],
    faqs: [
      { q: "¿En qué plazo se interpone un recurso de casación?", a: "El plazo ordinario es de 15 días hábiles contados desde la notificación de la sentencia. Es prudente contactarnos apenas se notifique el fallo." },
      { q: "¿Defienden únicamente sentencias condenatorias?", a: "No. También representamos a víctimas y al Ministerio Público en sus pretensiones ante Sala Tercera, y a personas imputadas en recursos de revisión cuando se descubre prueba nueva." },
      { q: "¿La casación suspende la ejecución de la pena?", a: "La sola interposición no suspende automáticamente la pena. Hay vías procesales para solicitar medidas alternativas según el caso." },
    ],
  },
];

// ── Per-area SEO metadata + attorney photo ─────────────────────
export const RC_AREAS_SEO: Record<string, {
  title:      string;
  desc:       string;
  keys:       string[];
  photo:      string;
  credential: string;
}> = {
  "derecho-penal": {
    title:      "Abogado Penalista Costa Rica | Derecho Penal · Rivera Cheves & Asociados",
    desc:       "Defensa y querella en delitos graves: femicidio, homicidio, narcotráfico y crimen organizado. Litigación oral ante Tribunal de Juicio y Sala Tercera. Lic. Joseph Rivera Cheves.",
    keys:       ["abogado penalista costa rica","abogado penal costa rica","defensa penal costa rica","abogado joseph rivera","joseph rivera abogado","abogado derecho penal san jose"],
    photo:      "/images/joseph/tribunal.jpg",
    credential: "10+ años en litigación oral penal · Penas máximas obtenidas en casos de alto perfil",
  },
  "compliance-forense": {
    title:      "Abogado Lavado de Dinero Costa Rica | Compliance Forense · Rivera Cheves",
    desc:       "Defensa en delitos de lavado de dinero, enriquecimiento ilícito y fraude corporativo. Máster en Compliance, Fraude y Blanqueo — EALDE Business School, España.",
    keys:       ["abogado lavado dinero costa rica","compliance forense costa rica","fraude corporativo costa rica","abogado joseph rivera","blanqueo capitales costa rica"],
    photo:      "/images/joseph/editorial.jpg",
    credential: "Máster en Compliance, Fraude y Blanqueo · EALDE Business School (España)",
  },
  "derecho-corporativo": {
    title:      "Abogado Corporativo Costa Rica | Sociedades y Empresas · Rivera Cheves",
    desc:       "Constitución de sociedades, contratos mercantiles, cumplimiento SUGEF y estrategia corporativa. Experiencia en el Banco Nacional y Corporación Grupo Q.",
    keys:       ["abogado corporativo costa rica","derecho societario costa rica","constitucion sociedades costa rica","abogado empresa costa rica","abogado joseph rivera"],
    photo:      "/images/joseph/retrato.jpg",
    credential: "Ex notario de planta, Corporación Grupo Q · Ex abogado del Banco Nacional de Costa Rica",
  },
  "derecho-laboral": {
    title:      "Abogado Laboral Costa Rica | Despidos y Conflictos · Rivera Cheves",
    desc:       "Representación en despidos injustificados, fueros especiales y conflictos colectivos. Rivera Cheves & Asociados atiende tanto trabajadores como empleadores.",
    keys:       ["abogado laboral costa rica","abogado despido injustificado costa rica","fuero laboral costa rica","abogado joseph rivera","conflicto laboral costa rica"],
    photo:      "/images/joseph/prensa.jpg",
    credential: "Representación en ambos lados — trabajadores y empleadores en Costa Rica",
  },
  "derecho-notarial": {
    title:      "Notario Público Costa Rica | Escrituras y Registro · Rivera Cheves",
    desc:       "Escrituras de bienes raíces, traspasos, hipotecas y poderes notariales. Notario público en ejercicio con Maestría en Derecho Notarial y Registral (UCR).",
    keys:       ["notario publico costa rica","escritura bienes raices costa rica","traspaso propiedades costa rica","hipoteca abogado costa rica","abogado joseph rivera"],
    photo:      "/images/joseph/retrato.jpg",
    credential: "Notario público en ejercicio · Maestría en Derecho Notarial y Registral (UCR)",
  },
  "asesoria-internacional": {
    title:      "Abogado Crimen Organizado Costa Rica | Asesoría Internacional · Rivera Cheves",
    desc:       "Defensa en crimen organizado, extradiciones y litigación ante organismos internacionales. Cooperación activa con el FBI (2018) y ante la CIDH-OEA.",
    keys:       ["abogado crimen organizado costa rica","extradicion costa rica abogado","cooperacion internacional costa rica","abogado joseph rivera","litigacion cidh"],
    photo:      "/images/joseph7.jpg",
    credential: "Cooperación con el FBI (2018) · Litigación ante la CIDH-OEA",
  },
  "casacion-penal": {
    title:      "Casación Penal Costa Rica | Sala Tercera · Abogado Joseph Rivera Cheves",
    desc:       "Recursos de casación ante la Sala Tercera de la Corte Suprema de Justicia. Defensa técnica de sentencias condenatorias e impugnación de prueba en sede recursiva.",
    keys:       ["casacion penal costa rica","sala tercera costa rica abogado","recurso casacion penal","abogado joseph rivera","impugnacion sentencia costa rica"],
    photo:      "/images/joseph/prensa-tribunales.jpg",
    credential: "Defensa exitosa en Sala Tercera · Voto Nº 000374 · Inadmisión de recursos obtenida",
  },
};

export type PressType  = "reportaje" | "opinion" | "entrevista" | "doctrina" | "podcast";
export type PressEntry = {
  medio:  string;
  t:      string;        // título
  u:      string;        // URL
  year:   string;
  date?:  string;        // YYYY-MM-DD opcional para orden cronológico
  type:   PressType;
  desc:   string;        // descripción 1-2 líneas
  lang?:  "es" | "en";
  image?: string;        // path opcional /images/prensa/[slug].jpg
};

// Color de marca aproximado por medio — utilizado en la insignia del outlet
export const OUTLET_COLORS: Record<string, string> = {
  "La Nación":         "#c8102e",
  "CRHoy":             "#0066b3",
  "Diario Extra":      "#d62027",
  "Delfino.cr":        "#2a8e8b",
  "ElMundo.cr":        "#003c71",
  "La Prensa":         "#1f3a5f",
  "Infobae":           "#00aaff",
  "Acontecer":         "#e8763d",
  "Tico Times":        "#1d6b46",
  "Masterlex":         "#2a2a2a",
  "Radio Monumental":  "#7e0102",
};

export const RC_PRESS: PressEntry[] = [
  // ── 2026 ────────────────────────────────────────────────────────
  {
    medio: "La Prensa",     year: "2026", date: "2026-04-27",   type: "entrevista", lang: "es",
    t: "«Creen que soy un espía de la CIA»: régimen Ortega-Murillo habría investigado a abogado costarricense Joseph Rivera",
    u: "https://www.laprensani.com/2026/04/27/nacionales/3683937-abogado-costarricense-espia-cia-nicaragua",
    desc: "Entrevista en exclusiva donde el penalista denuncia las teorías conspirativas, la vigilancia estatal del régimen nicaragüense y el abandono a la familia de Junieysis.",
  },
  {
    medio: "Infobae",       year: "2026", date: "2026-04-27",   type: "reportaje", lang: "es",
    t: "El Gobierno de Nicaragua impidió el ingreso de Joseph Rivera, abogado de la familia de Junieysis Merlo Espinoza",
    u: "https://www.infobae.com/costa-rica/2026/04/27/gobierno-de-nicaragua-impide-el-ingreso-del-abogado-costarricense-vinculado-al-femicidio-de-la-tiktoker-junieysis-merlo/",
    desc: "Cable de prensa internacional con los pormenores del asedio migratorio que impidió la reunión del jurista costarricense con los padres de la víctima en Madriz.",
  },
  {
    medio: "CRHoy",         year: "2026", date: "2026-04-25",   type: "reportaje", lang: "es",
    t: "Abogado de familia de víctima de femicidio de tiktoker nicaragüense denuncia que Nicaragua le negó ingreso al país",
    u: "https://crhoy.com/nacionales/abogado-de-familia-de-victima-de-femicidio-denuncia-que-nicaragua-le-nego-ingreso-al-pais/",
    desc: "Denuncia pública de Rivera Cheves sobre el bloqueo migratorio arbitrario del gobierno nicaragüense que entorpeció la gestión legal de custodia de las menores.",
  },
  {
    medio: "Radio Monumental", year: "2026", date: "2026-04-15", type: "podcast", lang: "es",
    t: "Femicidio de Junieysis Merlo · Matices (programa del 15 de abril de 2026)",
    u: "https://podcasts.apple.com/be/podcast/matices/id1468579267?l=fr-FR",
    desc: "Mesa de diálogo conducida por Randall Rivera donde se expone la gravedad procesal y humanitaria del caso que involucra la repatriación de cenizas y custodia.",
  },
  {
    medio: "CRHoy",         year: "2026", date: "2026-04",      type: "reportaje", lang: "es",
    t: "«Buscaremos justicia por Junieysis»: dice abogado de familia de víctima de femicidio",
    u: "https://crhoy.com/nacionales/buscaremos-justicia-por-junieysis-dice-abogado-de-familia-de-victima-de-femicidio/",
    desc: "Detalles sobre la formalización del patrocinio legal pro-bono a favor de los familiares de la joven nicaragüense asesinada en Santa Ana.",
  },
  {
    medio: "Acontecer",     year: "2026", date: "2026-04",      type: "reportaje", lang: "es",
    t: "Joseph Rivera, quien representó a la familia de Nadia Peraza, asumirá la representación legal de los familiares de Junieysis Adely Merlo Espinoza",
    u: "https://www.acontecer.co.cr/nacionales/joseph-rivera-defensa-junieysis-merlo-santa-ana",
    desc: "Anuncio del inicio de las gestiones del bufete en el presunto femicidio del condominio en Salitral de Santa Ana.",
  },
  {
    medio: "La Nación",     year: "2026", date: "2026-03",      type: "reportaje", lang: "es",
    t: "Supuesto asesino de Nadia Peraza intenta contactar familia de víctima desde la cárcel, dice abogado",
    u: "https://www.nacion.com/sucesos/crimenes/supuesto-asesino-de-nadia-peraza-intenta-contactar/TJSGGD65IRG6ZN73ZKJZ5BRMHU/story/",
    desc: "Reportaje sobre las acciones de hostigamiento del imputado Jeremy Buzano desde el centro penitenciario La Reforma y el proceso de entrega de los restos.",
  },
  {
    medio: "La Nación",     year: "2026",                       type: "reportaje", lang: "es",
    t: "Sospechoso de femicidio de Nadia Peraza usó tarjeta bancaria de víctima después de su muerte, afirma abogado",
    u: "https://www.nacion.com/sucesos/judiciales/sospechoso-de-femicidio-de-nadia-peraza-uso/EQUFYXIAQFCPDAOSU6AMZJU3DQ/story/",
    desc: "Declaraciones del Lic. Rivera explicando el uso fraudulento de las cuentas bancarias de la víctima por parte de su expareja para costear gastos personales.",
  },
  {
    medio: "Diario Extra",  year: "2026",                       type: "reportaje", lang: "es",
    t: "Acusan de 3 delitos más a sospechoso de matar a Nadia Peraza",
    u: "https://www.diarioextra.com/noticia/acusan-de-3-delitos-mas-a-sospechoso-de-matar-a-nadia-peraza/",
    desc: "Reportaje sobre la presentación de la querella formal para acumular los cargos de estafa informática, suplantación y violación de medidas de protección.",
  },
  {
    medio: "CRHoy",         year: "2026",                       type: "reportaje", lang: "es",
    t: "Presentan apelación por omisión de delitos en caso de muerte de Nadia Peraza",
    u: "https://crhoy.com/nacionales/presentan-apelacion-por-omision-de-delitos-en-caso-de-muerte-de-nadia-peraza/",
    desc: "Nota sobre el recurso de apelación de sentencia presentado para forzar el reconocimiento de los delitos de estafa y sustracción patrimonial.",
  },
  {
    medio: "Acontecer",     year: "2026",                       type: "reportaje", lang: "es",
    t: "Joseph Rivera impulsa la «Ley Nadia» en la Asamblea Legislativa",
    u: "https://www.acontecer.co.cr/nacionales/joseph-rivera-ley-nadia-femicidio-costa-rica",
    desc: "Cabildeo legislativo y presentación del proyecto de Ley Nadia para aumentar las penas efectivas de prisión por femicidio en Costa Rica.",
  },
  {
    medio: "Acontecer",     year: "2026",                       type: "reportaje", lang: "es",
    t: "Abogado Joseph Rivera pide salida del Fiscal General de la República",
    u: "https://www.acontecer.co.cr/nacionales/abogado-joseph-rivera-pide-salida-del-fiscal-general-de-la-republica",
    desc: "Declaraciones exigiendo un cambio estructural profundo en el Ministerio Público y denunciando la sobrecarga y abandono del personal fiscal en Costa Rica.",
  },
  {
    medio: "Acontecer",     year: "2026",                       type: "opinion", lang: "es",
    t: "Jueces deben imponer penas más severas al crimen organizado",
    u: "https://acontecer.co.cr/opinion/jueces-deben-imponer-penas-mas-severas-crimen-organizado",
    desc: "Columna de opinión del Lic. Joseph Rivera analizando la crisis de inseguridad ciudadana y la tibieza de las penas impuestas por los tribunales.",
  },

  // ── 2025 ────────────────────────────────────────────────────────
  {
    medio: "CRHoy",         year: "2025",                       type: "doctrina", lang: "es",
    t: "Ley 9986: técnica jurídica y aeronáutica convergen para proteger al Estado",
    u: "https://crhoy.com/ley-9986-cuando-la-tecnica-juridica-y-la-tecnica-aeronautica-convergen-para-proteger-al-estado/",
    desc: "Análisis técnico-jurídico del Lic. Rivera sobre la Ley 9986 y la convergencia entre derecho aeronáutico y protección estatal.",
  },
  {
    medio: "Delfino.cr",    year: "2025", date: "2025-05",      type: "opinion", lang: "es",
    t: "Caso Topo: ¿quién defiende a los jueces?",
    u: "https://delfino.cr/2025/05/caso-topo-quien-defiende-a-los-jueces",
    desc: "Reflexión sobre las garantías procesales de los magistrados frente a embates institucionales en Costa Rica.",
  },
  {
    medio: "Delfino.cr",    year: "2025", date: "2025-04",      type: "opinion", lang: "es",
    t: "Concusión y dignidad institucional: una reflexión jurídica y ciudadana para Costa Rica",
    u: "https://delfino.cr/2025/04/concusion-y-dignidad-institucional-una-reflexion-juridica-y-ciudadana-para-costa-rica",
    desc: "Análisis doctrinal escrito por el Lic. Rivera que desglosa el marco legal de la concusión, la inmunidad y la aplicación de la ley procesal penal.",
  },
  {
    medio: "ElMundo.cr",    year: "2025",                       type: "opinion", lang: "es",
    t: "TSE carece de facultades para impedir ingreso de Bukele al país, asegura jurista",
    u: "https://elmundo.cr/costa-rica/tse-carece-de-facultades-para-impedir-ingreso-de-bukele-al-pais-asegura-jurista/",
    desc: "Análisis legal sobre la soberanía del Poder Ejecutivo en política exterior e inmigración, aclarando las limitaciones de competencia del TSE.",
  },
  {
    medio: "ElMundo.cr",    year: "2025",                       type: "opinion", lang: "es",
    t: "Menores de edad, mayores delitos: ¿está fallando la justicia penal juvenil en Costa Rica?",
    u: "https://elmundo.cr/opinion/menores-de-edad-mayores-delitos-esta-fallando-la-justicia-penal-juvenil-en-costa-rica/",
    desc: "Columna sobre la creciente participación de menores en delitos graves y las limitaciones de la justicia penal juvenil costarricense.",
  },

  // ── 2024 ────────────────────────────────────────────────────────
  {
    medio: "La Nación",     year: "2024", date: "2024-07",      type: "reportaje", lang: "es",
    t: "Tribunal impone pena máxima al responsable de matar a Luany Valeria Salazar",
    u: "https://www.nacion.com/sucesos/judiciales/tribunal-eleva-pena-de-carcel-contra-el/IGCKCIPRFRHNPAAN2V2AMPVDQQ/story/",
    desc: "Nota detallada sobre la histórica imposición de la pena máxima de 35 años de cárcel al culpable del femicidio en Linda Vista de Río Azul.",
  },
  {
    medio: "La Nación",     year: "2024",                       type: "reportaje", lang: "es",
    t: "Sentencia por asesinato de Luany Valeria de nuevo a discusión este lunes",
    u: "https://www.nacion.com/sucesos/crimenes/sentencia-por-asesinato-de-luany-valeria-de-nuevo/2FGHW56SFBGTXEW5KDKOX4E6ZY/story/",
    desc: "Reportaje sobre el recurso de apelación liderado por el abogado de la familia para aumentar la condena e incorporar el delito de robo agravado.",
  },
  {
    medio: "Diario Extra",  year: "2024",                       type: "reportaje", lang: "es",
    t: "Caso Nadia Peraza: algunos jueces le tienen miedo a poner la pena máxima",
    u: "https://www.diarioextra.com/noticia/algunos-jueces-les-da-miedo-poner-la-pena-maxima/",
    desc: "Declaraciones del Lic. Rivera Cheves sobre la cautela judicial en la imposición de penas máximas en casos de femicidio en Costa Rica.",
  },
  {
    medio: "ElMundo.cr",    year: "2024",                       type: "opinion", lang: "es",
    t: "Diputados derrochan mientras el pueblo con hambre — el cafetín de la vergüenza",
    u: "https://elmundo.cr/opinion/diputados-derrochan-mientras-el-pueblo-con-hambre-el-cafetin-de-la-verguenza-en-la-asamblea-legislativa/",
    desc: "Crítica del Lic. Rivera al gasto público de la Asamblea Legislativa en contraste con las necesidades sociales del país.",
  },

  // ── 2019 / 2018 ────────────────────────────────────────────────
  {
    medio: "Tico Times",    year: "2019", date: "2019-04-29",   type: "reportaje", lang: "en",
    t: "What happened to Carla Stefaniak? Few new details in case",
    u: "https://ticotimes.net/2019/04/29/what-happened-to-carla-stefaniak-few-new-details-in-case",
    desc: "International coverage of the Carla Stefaniak case with the firm's hypothesis on the possible complicity of multiple suspects.",
  },
  {
    medio: "Masterlex",     year: "2018", date: "2018-02",      type: "doctrina", lang: "es",
    t: "Ineficacia del recurso de casación en Costa Rica",
    u: "https://www.masterlex.com/descargas/PuntoJuridico/2018/Febrero/Ineficacia_recurso_casaci%C3%B3n.docx",
    desc: "Documento jurídico del Lic. Rivera Cheves que detalla las causas frecuentes de inadmisibilidad del recurso de casación penal ante la Sala Tercera.",
  },
];

export const RC_FORMACION = [
  { t: "Auditor Líder · ISO 37001:2025 — Sistema de Gestión Antisobornos", s: "EALDE Business School, Madrid · 2026", d: "Certificación internacional para auditorías de **cumplimiento antisoborno**. Pilar técnico del **compliance forense** aplicado a delitos económicos, corrupción y delincuencia organizada." },
  { t: "Auditor Líder · ISO 31000:2018 — Risk Management",                  s: "EALDE Business School, Madrid · 2026", d: "Gestión integral de riesgos. Marco metodológico aplicado a **litigación penal compleja**, análisis forense de operaciones empresariales y casos bajo **riesgo geopolítico**." },
  { t: "Máster en Compliance, Fraude y Blanqueo",  s: "EALDE Business School, España · Universidad de Murcia", d: "**Doble titulación internacional** con especialidad en **Gestión de Riesgos y Análisis Forense Financiero**." },
  { t: "Maestría en Derecho Penal",                 s: "Universidad Latina de Costa Rica · 2015",               d: "Especialización en **litigación penal compleja**, teoría del delito y defensa de **derechos fundamentales**." },
  { t: "Maestría en Derecho Notarial y Registral",  s: "Universidad Latina de Costa Rica · 2010",               d: "Gestión de **escrituras públicas**, testamentos e inscripción en **registros públicos**." },
  { t: "Licenciado en Derecho",                     s: "Universidad de la Salle · 2008",                        d: "Formación integral en todas las ramas del **derecho costarricense e internacional**." },
  { t: "Especialización en Litigación Oral",        s: "Temple University, Filadelfia · 2024",                  d: "Técnicas avanzadas de **oratoria forense**, argumentación legal y presentación ante tribunales — el mismo perfil técnico que motivó el **veto migratorio nicaragüense**." },
  { t: "Especialización en Compras Públicas",       s: "Universidad de Costa Rica · 2024",                      d: "Marco normativo, estrategias en **contratación administrativa** y licitaciones del Estado." },
];

export const RC_EXP = [
  { anio: "2015 — presente", cargo: "Abogado litigante en materia penal",  lugar: "Bufete Rivera Cheves & Asociados",          desc: "Representación en **casos penales complejos**, asesoría en política penal y litigación judicial a nivel **nacional e internacional**." },
  { anio: "2020 — 2022",     cargo: "Asesor ad honorem",                   lugar: "Asamblea Legislativa de Costa Rica",        desc: "Asesoría jurídica especializada en **materia penal y legislativa** para la Asamblea Legislativa." },
  { anio: "2016 — 2018",     cargo: "Asesor legal",                        lugar: "Colegio de Ciencias Económicas de CR",      desc: "Asesoría legal institucional en materia **administrativa y penal**." },
  { anio: "2014 — 2015",     cargo: "Notario público de planta",           lugar: "Corporación Grupo Q",                       desc: "Gestión notarial y registral para una de las **corporaciones más grandes de Centroamérica**." },
  { anio: "2011 — 2012",     cargo: "Asesor legal",                        lugar: "Municipalidad de Santa Bárbara de Heredia", desc: "Asesoría en materia **administrativa**, contratación pública y asuntos municipales." },
  { anio: "2010 — 2011",     cargo: "Abogado de planta",                   lugar: "Banco Nacional de Costa Rica",              desc: "Asesoría legal en materia **bancaria**, contractual y gestión de créditos." },
  { anio: "2009 — 2010",     cargo: "Asesor legal",                        lugar: "Dirección General de Aviación Civil",       desc: "Asesoría jurídica en **regulación aeronáutica** y derecho administrativo." },
  { anio: "2008 — 2013",     cargo: "Abogado de Fiscalía",                 lugar: "Colegio de Abogados de Costa Rica",         desc: "Investigación y tramitación de **casos disciplinarios** en el Colegio de Abogados." },
];

export const RC_DOCENCIA = [
  "Universidad Santa Lucía",
  "Universidad Libre de Costa Rica (ULICORI)",
  "Universidad Panamericana",
  "Universidad Florencio del Castillo",
  "ULACIT",
  "Universidad de San José",
];
