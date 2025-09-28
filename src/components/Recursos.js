import { useState } from "react";
import { motion } from "framer-motion";
import { Download } from "lucide-react"; 

const condiciones = {
  neurodesarrollo: [
{
  id: 1,
  titulo: "Trastorno del Espectro Autista (TEA)",
  resumen: "Condición del neurodesarrollo que afecta la comunicación, la interacción social y la conducta.",
  imagen: "/recursos/tea.jpg",
  detalle: {
    definicion: "El Trastorno del Espectro Autista (TEA) es un trastorno del neurodesarrollo caracterizado por dificultades persistentes en la comunicación e interacción social, junto con patrones restringidos y repetitivos de comportamiento, intereses o actividades. Se denomina 'espectro' porque los síntomas varían en intensidad y manifestación de una persona a otra.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: antes se diferenciaban diagnósticos como Autismo clásico, Síndrome de Asperger o Trastorno Generalizado del Desarrollo No Especificado (TGD-NE). Desde el DSM-5, todos se agrupan bajo TEA." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Dificultades en la comunicación social y reciprocidad emocional.",
        "Limitaciones en la comprensión y uso de gestos, contacto visual y expresiones faciales.",
        "Intereses restringidos e intensos, con tendencia a la repetición.",
        "Necesidad de rutinas o resistencia a los cambios."
      ]},
      { tipo: "texto", contenido: "Grados de severidad (DSM-5):" },
      { tipo: "lista", items: [
        "Nivel 1 (requiere apoyo): dificultades sociales leves y conductas repetitivas ocasionales.",
        "Nivel 2 (requiere apoyo sustancial): problemas evidentes en comunicación, flexibilidad y adaptación.",
        "Nivel 3 (requiere apoyo muy sustancial): limitaciones graves en lenguaje, interacción y conductas adaptativas."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, TOD, discapacidad intelectual, epilepsia, ansiedad, depresión y trastornos del lenguaje." },
      { tipo: "texto", contenido: "Edad de inicio: los signos suelen aparecer antes de los 3 años, aunque algunos se evidencian en la etapa escolar." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos: predisposición hereditaria y alteraciones cromosómicas.",
        "Diferencias en la conectividad y desarrollo cerebral.",
        "Factores ambientales prenatales/perinatales: infecciones, complicaciones en el parto, exposición a tóxicos.",
        "El TEA no está relacionado con la crianza ni con las vacunas."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultades en iniciar y mantener interacciones sociales.",
        "Escaso o nulo contacto visual.",
        "Juego simbólico limitado o ausente.",
        "Movimientos repetitivos (aletear, balancearse, girar objetos).",
        "Hipersensibilidad o hiposensibilidad a estímulos sensoriales.",
        "Necesidad de rutinas rígidas."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso o ausencia del desarrollo del lenguaje.",
        "Uso literal o repetitivo del habla (ecolalia).",
        "Dificultad para comprender ironías, bromas o dobles sentidos.",
        "Intereses muy específicos o absorbentes.",
        "Resistencia marcada a cambios en el entorno o rutinas.",
        "Reacciones inusuales ante luces, sonidos, texturas u olores."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia de lenguaje y sistemas aumentativos de comunicación.",
        "Terapia ocupacional con integración sensorial.",
        "Apoyos visuales como pictogramas y agendas.",
        "Intervenciones conductuales basadas en evidencia (p. ej. ABA).",
        "Rutinas estructuradas y predecibles en casa y escuela.",
        "Capacitación y acompañamiento a padres/cuidadores."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/M3dsE7wn84k?si=sdXsGbwL1gEUcptw",
          titulo: "¿Cómo ayudar a un niño con autismo en casa?",
          descripcion: "Consejos y estrategias para apoyar a un niño con autismo en el hogar, mejorando su bienestar y desarrollo."
        },
        {
          url: "https://www.youtube.com/embed/SdUL6_dc3So?si=Iqw47CNv9_ufmNIW",
          titulo: "¿Cómo mejorar la comunicación con niños con TEA? Uso de pictogramas",
          descripcion: "Explicación práctica del uso de pictogramas como herramienta de apoyo en la comunicación de niños con TEA."
        },
        {
          url: "https://www.youtube.com/embed/hGjbVbDezhY?si=TJQIlTZk9KQ8P8eV",
          titulo: "Actividades sencillas y juegos de estimulación para niños con TEA",
          descripcion: "Propuestas de juegos sencillos para estimular el aprendizaje y la interacción en niños con autismo."
        },
        {
          url: "https://www.youtube.com/embed/fBZ-vdreD28?si=eduPrjpTndHJFlYi",
          titulo: "15 actividades para niños con autismo en el aula",
          descripcion: "Ejemplos de actividades escolares diseñadas para fomentar la inclusión y participación de estudiantes con TEA."
        }
      ],
      pdfs: [
        { nombre: "Cuaderno de actividades alumnado TEA Vol. 2", link: "/recursos/Cuaderno-de-actividades-alumnado-TEA-VOL-2.pdf" },
        { nombre: "Pictogramas de escuela", link: "/recursos/PICTOGRAMAS-ESCUELA.pdf" },
        { nombre: "Pictogramas de higiene personal", link: "/recursos/pictogramas-higiene-personal.pdf" },
        { nombre: "Pictogramas de autonomía", link: "/recursos/PICTOGRAMAS-AUTONOMIA-DE-TRABAJO-1.pdf" },
        { nombre: "Guía para el juego con niños TEA", link: "/recursos/yo_tambien_juego_teapuntas_optimizado.pdf" },
        { nombre: "Manual de actividades para el autismo", link: "/recursos/El-Manual-de-Actividades-para-el-Autismo-Actividades-para-ayudar-a-los-ninos-a-comunicarse-pdf.pdf" }
      ]
    }
  }
},

{
  id: 2,
  titulo: "Trastorno por Déficit de Atención e Hiperactividad (TDAH)",
  resumen: "Dificultad para mantener la atención, controlar impulsos y regular la actividad.",
  imagen: "/recursos/tdah.jpg",
  detalle: {
    definicion: "El Trastorno por Déficit de Atención e Hiperactividad (TDAH) es un trastorno del neurodesarrollo caracterizado por un patrón persistente de inatención, hiperactividad y/o impulsividad, que afecta el desempeño escolar, social y emocional del niño. Puede continuar en la adolescencia y la adultez.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: antes se hablaba de TDA (déficit de atención sin hiperactividad), pero hoy se considera una presentación del mismo diagnóstico." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Inatención: dificultad para concentrarse, distraerse fácilmente, olvidos frecuentes.",
        "Hiperactividad: exceso de movimiento, dificultad para permanecer quieto, hablar en exceso.",
        "Impulsividad: dificultad para esperar turnos, interrumpir a otros o actuar sin pensar."
      ]},
      { tipo: "texto", contenido: "Presentaciones clínicas (DSM-5):" },
      { tipo: "lista", items: [
        "Predominantemente inatento.",
        "Predominantemente hiperactivo-impulsivo.",
        "Combinada."
      ]},
      { tipo: "texto", contenido: "Grados de severidad:" },
      { tipo: "lista", items: [
        "Leve: síntomas presentes pero con bajo impacto.",
        "Moderado: impacto significativo en varios contextos.",
        "Grave: síntomas persistentes y altamente incapacitantes."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: Trastorno Oposicionista Desafiante (TOD), Trastorno del Espectro Autista (TEA), dislexia, discalculia, ansiedad y depresión." },
      { tipo: "texto", contenido: "Edad de inicio: los síntomas deben estar presentes antes de los 12 años." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos: fuerte influencia hereditaria.",
        "Alteraciones en neurotransmisores (dopamina y noradrenalina).",
        "Factores prenatales: exposición a alcohol, tabaco o estrés materno.",
        "Complicaciones perinatales: bajo peso al nacer o parto prematuro."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultad para mantener la atención en tareas o juegos.",
        "Nivel de energía superior al esperado para la edad.",
        "Impulsividad que afecta la toma de decisiones.",
        "Problemas para organizarse y seguir rutinas.",
        "Necesidad frecuente de moverse o cambiar de actividad.",
        "Desempeño académico irregular, con altibajos marcados.",
        "Dificultades en la autorregulación emocional (frustración o enojo rápido)."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Distracción frecuente e incapacidad para concentrarse.",
        "Olvidos constantes y desorganización.",
        "Exceso de movimiento en contextos inapropiados.",
        "Hablar en exceso e interrumpir conversaciones.",
        "Impulsividad en decisiones o respuestas.",
        "Bajo rendimiento académico pese a capacidad intelectual normal."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Rutinas claras y predecibles en casa y escuela.",
        "Uso de refuerzos positivos y recompensas.",
        "Dividir tareas en pasos pequeños.",
        "Aplicar pausas activas y técnicas de autorregulación.",
        "Apoyo psicopedagógico y terapia conductual.",
        "En algunos casos, tratamiento farmacológico supervisado."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/RbCDNc9yd6I?si=ZWyOZnLBd85RU_8m",
          titulo: "20 Estrategias Prácticas para Niños con TDAH en Casa y en la Escuela",
          descripcion: "Consejos útiles para apoyar a niños con TDAH en el hogar y en el colegio."
        },
        {
          url: "https://www.youtube.com/embed/fsc5O6Y7Etc?si=v9C7uKgS1kl8CfNy",
          titulo: "15 Actividades para Niños con Déficit de Atención (TDAH)",
          descripcion: "Actividades para mejorar concentración, autocontrol y habilidades sociales."
        },
        {
          url: "https://www.youtube.com/embed/POwLR91PPV0?si=udcoHKXhxH7-B_DB",
          titulo: "¿Qué alimentación debe llevar un niño con TDAH? - 7 pautas obligatorias",
          descripcion: "Explicación sobre la importancia de la nutrición adecuada para el manejo del TDAH."
        },
        {
          url: "https://www.youtube.com/embed/qrp_VSy-WN4?si=Nq0BiYQd0goxYzie",
          titulo: "TDAH 101: Estrategias diferentes para niños con TDAH",
          descripcion: "Estrategias de crianza y enseñanza adaptadas a las necesidades de niños con TDAH."
        }
      ],
      pdfs: [
        { nombre: "Cuadro de recompensas", link: "/recursos/recompensas.pdf" },
        { nombre: "Mi rutina diaria", link: "/recursos/Mi_rutina.pdf" },
        { nombre: "Diferencias del TDAH", link: "/recursos/diferencias.pdf" },
        { nombre: "Actividades de laberintos y sopas de letras", link: "/recursos/Actividades.pdf" },
        { nombre: "Alimentación y tareas domésticas", link: "/recursos/dieta.pdf" },
        { nombre: "Estrategias para niños con TDAH", link: "/recursos/estrategias-tdha.pdf" }
      ]
    }
  }
},


{
  id: 3,
  titulo: "Trastorno Oposicional Desafiante (TOD)",
  resumen: "Patrón persistente de conductas desafiantes, desobedientes y hostiles hacia figuras de autoridad.",
  imagen: "/recursos/tod.jpg",
  detalle: {
    definicion: "El Trastorno Oposicional Desafiante (TOD), también llamado Trastorno Negativista Desafiante, es un trastorno del comportamiento caracterizado por un patrón recurrente de oposición, desafío, discusiones y hostilidad hacia figuras de autoridad. A diferencia de los trastornos de conducta, no implica necesariamente actos delictivos graves, pero puede afectar el funcionamiento escolar, social y familiar.",
    
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno Negativista Desafiante, clasificado dentro de los Trastornos del Comportamiento Disruptivo." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Frecuentes discusiones con adultos o figuras de autoridad.",
        "Provocación intencional y desafío abierto.",
        "Irritabilidad y susceptibilidad al enojo."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad:" },
      { tipo: "lista", items: [
        "Leve: síntomas en un solo contexto (hogar, escuela o pares).",
        "Moderado: síntomas en al menos dos contextos.",
        "Grave: síntomas en tres o más contextos, con fuerte impacto."  
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, TEA, trastornos de ansiedad y depresión." },
      { tipo: "texto", contenido: "Diferencia con el TDAH: en el TDAH predominan la inatención e impulsividad; en el TOD, la oposición activa hacia reglas y autoridad." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Predisposición genética: historia familiar de TDAH o trastornos de conducta.",
        "Alteraciones neurobiológicas en la regulación emocional.",
        "Factores psicosociales: crianza inconsistente, alto conflicto familiar, negligencia o abuso."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Patrón constante de oposición hacia figuras de autoridad.",
        "Tendencia a discutir y desafiar reglas establecidas.",
        "Reactividad emocional alta ante límites o correcciones.",
        "Mayor probabilidad de conflictos en casa y escuela.",
        "Conductas provocadoras para llamar la atención o controlar situaciones.",
        "Dificultad para asumir responsabilidades o reconocer errores.",
        "Baja tolerancia a la frustración."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Discute frecuentemente con adultos.",
        "Desobedece reglas de manera intencional.",
        "Molesta deliberadamente a los demás.",
        "Culpa a otros de sus propios errores.",
        "Actitud rencorosa o vengativa.",
        "Explosiones de enojo frecuentes."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia conductual para autocontrol y resolución de problemas.",
        "Entrenamiento a padres en manejo conductual y disciplina positiva.",
        "Terapia familiar para mejorar la comunicación.",
        "Aplicar refuerzos positivos y límites claros.",
        "Coordinación con la escuela para estrategias consistentes.",
        "En casos graves, valoración psiquiátrica infantil."
      ]}
    ],

    recursos: {
videos: [
  {
    url: "https://www.youtube.com/embed/gbP9nSZLS04?si=dc_0WPmJNY8bXZ4M",
    titulo: "¿Qué es el trastorno de oposición desafiante (ODD)?",
    descripcion: "Explicación introductoria del TOD/ODD: qué es, cómo identificarlo, principales comportamientos y cuándo consultar con un especialista." 
  },
  {
    url: "https://www.youtube.com/embed/zqpGZINcn2A?si=S7qYz9NDmSZOR0RU",
    titulo: "Cuáles son los comportamientos de un niño con Trastorno Negativista Desafiante?",
    descripcion: "Ejemplos concretos de conductas típicas del TOD: oposiciones, rabietas, desafío, irritabilidad, cómo reconocerlos y diferenciarlos del comportamiento habitual."
  },
  {
    url: "https://www.youtube.com/embed/V_Xxox4O9S4?si=DoCzcn6jO-3kGF4L",
    titulo: "Aspectos básicos: Trastorno Oposicionista Desafiante (TOD)",
    descripcion: "Cómo se diagnostica el TOD, criterios principales, causas posibles y estrategias básicas de intervención familiar y escolar."
  },
  {
    url: "https://www.youtube.com/embed/YOXAOJ2Uc0I?si=hh1ccHk4SkL4xrVk",
    titulo: "TND pronóstico (trastorno negativista desafiante)",
    descripcion: "Qué esperar a largo plazo: evolución, posibles riesgos si no se atiende, comorbilidades frecuentes y cómo mejorar el pronóstico desde casa."
  }
]
,
      pdfs: [
        { nombre: "Guía Clinica del TND", link: "/recursos/guia-clinica-trastorno_negativista.pdf" },
        { nombre: "Guia para maestros de niños con TOD", link: "/recursos/Guia_Docents_Alumnado_desafiante_y_negativista_castella-2.pdf" },
        { nombre: "Protocolo de manejo para niños y adolescentes con TOD", link: "/recursos/Protocolo-de-manejo-TND.pdf" }

      ]
    }
  }
},


 {
  id: 4,
  titulo: "Trastorno del Desarrollo de la Coordinación (Dispraxia)",
  resumen: "Dificultad persistente en la coordinación motora que afecta actividades cotidianas, escolares y de autocuidado.",
  imagen: "/recursos/dispraxia.jpg",
  detalle: {
    definicion: "El Trastorno del Desarrollo de la Coordinación (TDC), también conocido como dispraxia, es un trastorno del neurodesarrollo caracterizado por dificultades significativas en la adquisición y ejecución de habilidades motoras coordinadas. Estas dificultades no se deben a discapacidad intelectual, problemas visuales ni condiciones neurológicas conocidas, y afectan el desempeño en actividades de la vida diaria, escolares y sociales.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: dispraxia, trastorno dispraxia del desarrollo, trastorno de la coordinación motora." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Torpeza motora evidente al correr, saltar o atrapar objetos.",
        "Dificultad en habilidades finas como abotonar, escribir o recortar.",
        "Problemas de planificación motora para organizar movimientos secuenciales."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad:" },
      { tipo: "lista", items: [
        "Leve: torpeza motora, pero logra independencia con apoyo.",
        "Moderado: necesita adaptaciones en la escuela y apoyo en la vida diaria.",
        "Grave: requiere asistencia constante en actividades básicas y terapias intensivas."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, TEA, trastornos del aprendizaje (especialmente dislexia) y dificultades en el lenguaje." },
      { tipo: "texto", contenido: "Diferencia con el TDAH: en el TDC la dificultad central es motora y de coordinación; en el TDAH predominan problemas de atención e impulsividad." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores neurobiológicos relacionados con inmadurez o diferencias en el desarrollo cerebral.",
        "Antecedentes de prematuridad o bajo peso al nacer.",
        "Posible influencia genética en el desarrollo motor.",
        "Factores ambientales que afectan la estimulación temprana."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultad para aprender y automatizar habilidades motoras nuevas.",
        "Movimientos torpes, lentos o descoordinados en comparación con pares.",
        "Problemas en la motricidad fina: escritura, uso de cubiertos, abrochar botones.",
        "Evita actividades físicas por miedo al fracaso o burlas.",
        "Fácil fatiga al realizar tareas que requieren esfuerzo motor.",
        "Problemas de autoestima vinculados a la torpeza percibida.",
        "Mayor riesgo de aislamiento social en la infancia."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Caídas frecuentes o tropiezos al caminar o correr.",
        "Dificultad para manejar bicicleta, patines o juegos de coordinación.",
        "Problemas para escribir de forma legible y ordenada.",
        "Tardanza en aprender a vestirse o manejar utensilios.",
        "Evita deportes o juegos de grupo por dificultad motora.",
        "Problemas en la orientación espacial y la coordinación ojo-mano."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia ocupacional enfocada en habilidades motoras finas y gruesas.",
        "Fisioterapia para mejorar fuerza, equilibrio y coordinación.",
        "Apoyo psicopedagógico en la escuela con adaptaciones razonables.",
        "Motivar la participación en actividades físicas seguras y agradables.",
        "Usar herramientas adaptadas: lápices ergonómicos, tijeras especiales, cubiertos adaptados.",
        "Fomentar la autoestima con refuerzo positivo y celebrar logros pequeños.",
        "Trabajo conjunto entre familia, escuela y terapeutas."
      ]}
    ],

    recursos: {
      videos: [
  {
    url: "https://www.youtube.com/embed/vE7jwdk-UYk?si=V-FfEmLn3KavAQKj",
    titulo: "¿Qué es la dispraxia o TDC?",
    descripcion: "Introducción detallada al Trastorno del Desarrollo de la Coordinación (Dispraxia): qué es, cuáles son sus signos típicos en los primeros años y cómo se manifiesta en actividades cotidianas."
  },
  {
    url: "https://www.youtube.com/embed/T13bt9lqpxo?si=8zJNXm-3quJaHWMM",
    titulo: "Dispraxia: Un reto invisible en el aprendizaje",
    descripcion: "Cómo la dispraxia afecta silenciosamente el aprendizaje: dificultades escolares, coordinación física oculta, retos emocionales y señales para identificar temprano."
  },
  {
    url: "https://www.youtube.com/embed/k_Ch0Wl9dU8?si=0vdM85UAiBDvYbVT",
    titulo: "Trastorno del desarrollo de la coordinación",
    descripcion: "Descripción de la dispraxia y el TDC con ejemplos prácticos: tareas motoras afectadas, comparativa con niños de su misma edad, y sugerencias iniciales de apoyo en el hogar y la escuela."
  },
  {
    url: "https://www.youtube.com/embed/zrT2c8mAPiM?si=4u7d9wx9cfRRYQZm",
    titulo: "Dispraxia Infantil - Actividades",
    descripcion: "Video de actividades prácticas para niños con dispraxia: ejercicios sencillos de coordinación motora fina y gruesa que se pueden incorporar en casa o escuela para estimular habilidades motoras."
  }

        
      ],
      pdfs: [
        { nombre: "Dispraxia y rendimiento escolar", link: "/recursos/Dispraxia y rendimiento escolar.pdf" },
        { nombre: "Ejercicios para la dispraxia", link: "/recursos/ejercicios-dispraxia.pdf" },
        { nombre: "Dispraxia verbal: características clínicas y tratamiento logopédico", link: "/recursos/dispraxia_verbal.pdf" }
      ]
    }
  }
},
{
  id: 5,
  titulo: "Trastorno Específico del Lenguaje (TEL / TDL)",
  resumen: "Dificultad persistente en la adquisición y uso del lenguaje.",
  imagen: "/recursos/tel.jpg",
  detalle: {
    definicion: "El Trastorno Específico del Lenguaje (TEL), también denominado Trastorno del Desarrollo del Lenguaje (TDL), es un trastorno del neurodesarrollo caracterizado por dificultades persistentes en la comprensión y/o la expresión del lenguaje. Estas dificultades interfieren en la comunicación, el aprendizaje escolar y las interacciones sociales, y no se explican por discapacidad intelectual, déficit auditivo ni falta de estimulación.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno del Desarrollo del Lenguaje (TDL), disfasia evolutiva." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Retraso en la aparición de las primeras palabras y frases.",
        "Dificultades para comprender instrucciones o preguntas.",
        "Lenguaje expresivo limitado, con frases cortas o mal estructuradas.",
        "Errores gramaticales frecuentes y vocabulario reducido."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad:" },
      { tipo: "lista", items: [
        "Leve: dificultades que afectan la fluidez comunicativa, pero permiten interacción social básica.",
        "Moderado: problemas significativos en comprensión y expresión que impactan en la escolaridad.",
        "Grave: comunicación muy limitada, con necesidad de apoyos alternativos y terapias intensivas."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, dislexia, dispraxia, dificultades de aprendizaje y trastornos emocionales asociados a la frustración por la comunicación." },
      { tipo: "texto", contenido: "Diferencia con la dislalia o retraso simple del lenguaje: en el TEL/TDL las dificultades son persistentes y complejas, no se limitan a problemas de pronunciación ni desaparecen espontáneamente con la edad." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores neurológicos relacionados con el desarrollo cerebral.",
        "Antecedentes familiares de dificultades en el lenguaje.",
        "Componente genético en la transmisión de habilidades lingüísticas.",
        "No es causado por falta de estimulación ni por negligencia familiar."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Habla limitada o frases cortas para su edad.",
        "Errores frecuentes en tiempos verbales, artículos y plurales.",
        "Dificultad para narrar hechos o explicar ideas.",
        "Problemas de comprensión de instrucciones largas o complejas.",
        "Vocabulario reducido en comparación con sus pares.",
        "Mayor esfuerzo para comunicarse, lo que genera frustración.",
        "Retraso en habilidades académicas relacionadas con el lenguaje, como lectura y escritura."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en la aparición de las primeras palabras (más allá de los 2 años).",
        "Lenguaje ininteligible o poco claro para personas fuera del entorno familiar.",
        "Uso de frases muy cortas o desestructuradas.",
        "Dificultad para seguir conversaciones o instrucciones simples.",
        "Problemas para aprender canciones, rimas o vocabulario nuevo.",
        "Tendencia al aislamiento social por frustración al comunicarse."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia de lenguaje temprana y constante, con objetivos adaptados a la edad.",
        "Uso de apoyos visuales (pictogramas, imágenes) para mejorar la comprensión.",
        "Trabajo en conjunto entre terapeutas, docentes y familia.",
        "Crear un entorno comunicativo rico en lenguaje: leer cuentos, cantar, conversar con el niño.",
        "Evitar corregir de forma negativa: reforzar con paciencia y repetir modelos correctos.",
        "Adaptaciones escolares: tiempo adicional, instrucciones claras y apoyo en lectoescritura.",
        "Estimular la autoestima reforzando los logros comunicativos."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/6XSTy2OOHl4?si=O03KYaSZjjPBv-xD",
          titulo: "Trastorno Específico del Lenguaje y escolaridad",
          descripcion: "Explica cómo el TEL impacta en la etapa escolar, resaltando las principales dificultades de aprendizaje y las estrategias de apoyo que pueden aplicarse en el aula."
        },
        {
          url: "https://www.youtube.com/embed/GiFq_RCCWG8?si=5trFi_P89LYdMyxG",
          titulo: "Recomendaciones para padres de niños con T.E.L. - Dra. Verónica Maggio",
          descripcion: "Consejos prácticos dirigidos a padres para estimular el lenguaje en casa y mejorar la comunicación diaria con niños diagnosticados con TEL."
        },
        {
          url: "https://www.youtube.com/embed/QCywO8Ll_lI?si=KDi2Ys7QmgiXwiNT",
          titulo: "Trastorno del Desarrollo del Lenguaje ¿qué es eso? | Mi terapia con Ximena",
          descripcion: "Explicación clara y accesible sobre qué es el TDL, cómo identificarlo y qué pasos iniciales tomar para abordarlo de manera efectiva."
        },
        {
          url: "https://www.youtube.com/embed/CEqpQzaY-Yw?si=QhYS4ngiutbHrXuO",
          titulo: "Actividades para niños con TEL expresivo",
          descripcion: "Muestra ejercicios y dinámicas enfocadas en estimular la expresión oral en niños con TEL, adaptados para el hogar y la escuela."
        }
      ],
      pdfs: [
        { nombre: "Aspectos y actividades a trabajar en TEL", link: "/recursos/tel-aspectos-y-actividades-a-trabajar.pdf"},
        { nombre: "Actividades para estimular el lenguaje", link: "/recursos/actividades-lenguaje.pdf"},
        { nombre: "Cuaderno de actividades para estimular el lenguaje (Red Cenit)", link: "/recursos/Cuaderno-actividades-para-estimular-el-lenguaje-Red-Cenit.pdf"},
        { nombre: "Guía para padres de niños con TEL", link: "/recursos/guia_padres_tel.pdf"}
      ]
    }
  }
},

{
  id: 6,
  titulo: "Trastorno de la Comunicación Social (Pragmático)",
  resumen: "Dificultad persistente en el uso social de la comunicación verbal y no verbal.",
  imagen: "/recursos/pragmatico.jpg",
  detalle: {
    definicion: "El Trastorno de la Comunicación Social (pragmático) es un trastorno del neurodesarrollo caracterizado por dificultades persistentes en el uso social de la comunicación verbal y no verbal. Se manifiesta en problemas para adaptar el lenguaje al contexto, seguir las reglas conversacionales y comprender significados implícitos. Estas dificultades afectan la interacción social, el rendimiento académico y la vida cotidiana, sin que exista un déficit intelectual, auditivo o un trastorno del espectro autista.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno pragmático de la comunicación, dificultades en las habilidades sociales del lenguaje." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Problemas para usar el lenguaje de acuerdo al contexto social.",
        "Dificultad para seguir turnos en una conversación.",
        "Limitaciones para comprender bromas, metáforas o dobles sentidos.",
        "Problemas en la comunicación no verbal (gestos, contacto visual, expresiones faciales)."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad:" },
      { tipo: "lista", items: [
        "Leve: dificultades notables en la conversación, pero mantiene comunicación básica.",
        "Moderado: impacto significativo en las relaciones sociales y en la escuela.",
        "Grave: gran limitación en la comunicación social, requiere apoyos terapéuticos intensivos."
      ]},
      { tipo: "texto", contenido: "Diferencia con el TEA: en el Trastorno de la Comunicación Social no hay patrones de comportamiento repetitivos o intereses restringidos, característicos del autismo." },
      { tipo: "texto", contenido: "Diferencia con el TEL/TDL: en el TEL/TDL las dificultades son principalmente estructurales del lenguaje (vocabulario, gramática, construcción de frases), mientras que en el Trastorno de la Comunicación Social el lenguaje puede estar bien estructurado, pero el problema está en el uso social y pragmático del mismo." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos relacionados con el desarrollo del lenguaje y la comunicación.",
        "Alteraciones en áreas cerebrales implicadas en la comprensión social y pragmática.",
        "Historia familiar de trastornos de comunicación o lenguaje.",
        "No es causado por falta de estimulación social o negligencia."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Uso inadecuado del lenguaje en diferentes contextos sociales.",
        "Dificultad para saludar, iniciar o mantener una conversación.",
        "Problemas para ajustar el tono, estilo o formalidad del lenguaje.",
        "Incapacidad para interpretar bromas, sarcasmo o expresiones figuradas.",
        "Uso limitado de gestos y contacto visual en la comunicación.",
        "Dificultad para organizar narraciones o contar experiencias de forma coherente."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "No entender normas sociales básicas en la conversación (ejemplo: interrumpir constantemente).",
        "Respuestas fuera de contexto en un diálogo.",
        "Dificultad para comprender y usar expresiones no literales (refranes, ironía, metáforas).",
        "Problemas para captar señales no verbales como tono de voz o expresiones faciales.",
        "Falta de reciprocidad en las interacciones sociales.",
        "Aislamiento o frustración debido a fallos en la comunicación social."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia del lenguaje enfocada en la pragmática y el uso social de la comunicación.",
        "Entrenamiento en habilidades sociales y resolución de conflictos.",
        "Modelar conductas comunicativas adecuadas en casa y la escuela.",
        "Uso de apoyos visuales y ejemplos concretos para explicar significados implícitos.",
        "Promover actividades grupales estructuradas que favorezcan la interacción.",
        "Trabajo coordinado entre terapeutas, docentes y familia.",
        "Refuerzo positivo ante logros comunicativos y sociales."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/8thryNHWSFQ?si=LhvaDKuOe2nFhXiU",
          titulo: "Neurólogo Pediatra en GDL/TRASTORNO DE COMUNICACIÓN SOCIAL (PRAGMÁTICO) ¿ES LO MISMO QUE AUTISMO?",
          descripcion: "Explicación clara sobre las características del trastorno pragmático y su diferencia con el TEA."
        },
        {
          url: "https://www.youtube.com/embed/VIf70HGaJKA?si=EM0Ih8E2soV67D02",
          titulo: "Tema 16 Trastorno pragmático del lenguaje",
          descripcion: "Ejemplos prácticos de cómo se manifiestan las dificultades pragmáticas y estrategias de apoyo."
        },
        {
          url: "https://www.youtube.com/embed/Sy_WQfQWxZE?si=N3DhcHK1pRCq6y-H",
          titulo: "Desarrollo pragmático",
          descripcion: "Cómo identificar dificultades en el uso social del lenguaje y el rol de la familia en el acompañamiento."
        },
        {
          url: "https://www.youtube.com/embed/Pt9-LmChUDw?si=J1xTaDLEb0_SW7L_",
          titulo: "Actividades para estimular el desarrollo pragmático en el lenguaje",
          descripcion: "Recomendaciones de intervención terapéutica para niños con dificultades pragmáticas."
        }
      ],
      pdfs: [
        { nombre: "Trastorno de la Comunicación Social", link: "/recursos/guia_trastorno_comunicacion_social.pdf"},
        { nombre: "Guía clínica del trastorno pragmático", link: "/recursos/Guia-clinica-trastorno-pragmatico.pdf"},
        { nombre: "Intervención en niños con trastornos pragmáticos del lenguaje y la comunicación", link: "/recursos/intervencion_en_Trastorno_semantico_pragmatico-monfort.pdf"},
        { nombre: "Actividades para el desarrollo pragmático", link: "/recursos/Actividades-TEL_TDL.pdf"}
      ]
    }
  }
},
   {
  id: 7,
  titulo: "Discapacidad Intelectual",
  resumen: "Limitaciones significativas en el funcionamiento intelectual y en la conducta adaptativa, que afectan las habilidades cognitivas, sociales y prácticas necesarias para la vida diaria.",
  imagen: "/recursos/discapacidad_intelectual.jpg",
  detalle: {
    definicion: "La Discapacidad Intelectual es un trastorno del neurodesarrollo caracterizado por un funcionamiento intelectual significativamente inferior al promedio y limitaciones en la conducta adaptativa. Se diagnostica antes de los 18 años y afecta áreas como el aprendizaje, la comunicación, la socialización y la autonomía en la vida diaria.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: retraso mental (término en desuso), discapacidad cognitiva." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Limitaciones en el razonamiento, la resolución de problemas y la planificación.",
        "Dificultades en la comunicación oral y escrita.",
        "Limitaciones en la autonomía personal y en las habilidades de la vida diaria.",
        "Problemas para adaptarse a las demandas sociales y escolares."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad (según DSM-5):" },
      { tipo: "lista", items: [
        "Leve: puede lograr cierta independencia con apoyos educativos y sociales.",
        "Moderada: requiere entrenamiento en habilidades adaptativas y apoyo constante.",
        "Grave: necesita asistencia significativa en la mayoría de las áreas de la vida.",
        "Profunda: dependencia total en cuidados y supervisión constante."
      ]},
      { tipo: "texto", contenido: "Diferencia con los trastornos específicos del aprendizaje: en la Discapacidad Intelectual el déficit es global y afecta múltiples áreas cognitivas y adaptativas, mientras que en los trastornos específicos del aprendizaje las dificultades se limitan a áreas concretas (lectura, escritura, cálculo)." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Alteraciones genéticas como el Síndrome de Down, Síndrome X Frágil o Síndrome de Rett.",
        "Complicaciones durante el embarazo (infecciones, exposición a tóxicos, malnutrición).",
        "Problemas durante el parto como falta de oxígeno (anoxia neonatal).",
        "Enfermedades infecciosas tempranas que afectan el sistema nervioso central.",
        "Factores ambientales graves: negligencia extrema, desnutrición prolongada."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Retraso en la adquisición de hitos del desarrollo (caminar, hablar).",
        "Dificultad para comprender conceptos abstractos o instrucciones complejas.",
        "Problemas de memoria, atención y razonamiento lógico.",
        "Lenguaje limitado o simplificado según el nivel de gravedad.",
        "Necesidad de apoyo en actividades de la vida diaria (alimentación, vestido, higiene).",
        "Dificultades en la interacción social y la resolución de problemas cotidianos."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Bajo rendimiento escolar generalizado.",
        "Retraso en el desarrollo motor, cognitivo y del lenguaje.",
        "Dificultades para adaptarse a contextos sociales y educativos.",
        "Problemas en la autonomía y el autocuidado.",
        "Conductas inmaduras en comparación con sus pares.",
        "Dependencia de apoyo externo para la toma de decisiones."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Estimulación temprana desde la infancia para potenciar las habilidades cognitivas y motoras.",
        "Programas educativos individualizados adaptados al ritmo de aprendizaje.",
        "Terapias del lenguaje, ocupacional y fisioterapia según las necesidades del niño.",
        "Apoyo psicopedagógico para fortalecer la autoestima y las habilidades sociales.",
        "Participación activa de la familia en los procesos terapéuticos y educativos.",
        "Fomentar la inclusión escolar y social con adaptaciones razonables.",
        "Promover la autonomía en la medida de lo posible, reforzando logros y avances."
      ]}
    ],

recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/QO10CHs6pC8?si=3sinsNsFhQlo6Tc8",
      titulo: "Entendiendo la discapacidad intelectual en niños",
      descripcion: "Video introductorio que explica qué es la discapacidad intelectual, sus implicaciones en el desarrollo infantil y cómo reconocer sus manifestaciones en niños."
    },
    {
      url: "https://www.youtube.com/embed/xpkwLew77fs?si=B1ZN3kwnS3dTvJ-t",
      titulo: "Atención temprana y discapacidad intelectual",
      descripcion: "Presenta la labor de la Asociación Aspromin con niños 0-6 años, destacando terapias y herramientas de intervención temprana para apoyar el desarrollo cognitivo y adaptativo."
    },
    {
      url: "https://www.youtube.com/embed/e1fzjYgVdcw?si=GBUTak7alK-UUTpL",
      titulo: "Discapacidad Intelectual: Lo que Debes Saber y Nadie te Explica",
      descripcion: "Video orientado a familias que aborda conceptos, mitos y realidad de la discapacidad intelectual desde una perspectiva cercana y accesible."
    },
    {
      url: "https://www.youtube.com/embed/IXzBaCtVzUY?si=pMKBTMEn70dyat0f",
      titulo: "¿Cómo Educar un Niño con Discapacidad Intelectual?",
      descripcion: "Consejos prácticos y estrategias educativas para madres, padres y docentes que acompañan a niños con discapacidad intelectual en su aprendizaje diario."
    }
  ],
  pdfs: [
    { nombre: "Actividades para niños con Discapacidad Intelectual", link: "/recursos/Actividades_discapacidad_intelectual.pdf" },
    { nombre: "Apoyos educativos para la discapacidad intelectual", link: "/recursos/cartilla-cognitiva-7.pdf" },
    { nombre: "Educación inclusiva para niños con discapacidad intelectual", link: "/recursos/Discapacidad_intelectual.pdf" }
  ]
}

  }
},

  {
  id: 8,
  titulo: "Síndrome de Down",
  resumen: "Condición genética causada por la presencia de una copia extra del cromosoma 21.",
  imagen: "/recursos/sd.jpg",
  detalle: {
    definicion: `El Síndrome de Down es una condición genética producida por la trisomía del cromosoma 21. Se caracteriza por una combinación de rasgos físicos particulares, cierto grado de discapacidad intelectual y una mayor probabilidad de presentar problemas médicos asociados.`,
    
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trisomía 21." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Presencia de discapacidad intelectual en grados variables.",
        "Rasgos físicos característicos: ojos almendrados, puente nasal plano, baja estatura, tono muscular bajo (hipotonía).",
        "Mayor riesgo de problemas médicos como cardiopatías congénitas, alteraciones digestivas y problemas de visión o audición."
      ]},
      { tipo: "texto", contenido: "Clasificación de gravedad: no se clasifica en leve, moderado o grave como otros trastornos; la variabilidad depende de los apoyos médicos, educativos y familiares." },
      { tipo: "texto", contenido: "Comorbilidades frecuentes: hipotiroidismo, trastornos del sueño, dificultades auditivas y visuales, así como riesgo aumentado de Alzheimer en la adultez." },
      { tipo: "texto", contenido: "Diferencia con la Discapacidad Intelectual: el Síndrome de Down es una causa específica de discapacidad intelectual, pero con rasgos físicos y médicos particulares que lo distinguen." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Trisomía libre: copia extra completa del cromosoma 21 (la forma más común).",
        "Translocación: material extra del cromosoma 21 se adhiere a otro cromosoma.",
        "Mosaicismo: mezcla de células con y sin copia extra del cromosoma 21."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Hipotonía (bajo tono muscular) al nacer.",
        "Retraso en el desarrollo motor y del lenguaje.",
        "Facilidad para la socialización y buen nivel de interacción afectiva.",
        "Rasgos faciales característicos como fisuras palpebrales oblicuas, lengua grande y orejas pequeñas.",
        "Mayor riesgo de enfermedades médicas asociadas."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en el desarrollo cognitivo y motor.",
        "Dificultades de aprendizaje y de memoria.",
        "Problemas de atención y lenguaje.",
        "Mayor susceptibilidad a infecciones respiratorias.",
        "Dificultades de tono muscular y coordinación."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Estimulación temprana desde los primeros meses de vida.",
        "Apoyo psicopedagógico y adaptaciones escolares.",
        "Terapias del lenguaje, ocupacional y fisioterapia.",
        "Revisiones médicas periódicas (cardiología, endocrinología, otorrinolaringología).",
        "Promoción de la autonomía y habilidades sociales.",
        "Acompañamiento familiar y programas de inclusión social."
      ]}
    ],

recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/D5x7UNct7o?si=Ztm78ZoQ6ueo5OJO",
      titulo: "Estrategias Para Estimular El Habla En Niños Con Síndrome De Down",
      descripcion: "Presenta ejercicios y técnicas de estimulación del lenguaje diseñadas para mejorar la comunicación en niños con Síndrome de Down."
    },
    {
      url: "https://www.youtube.com/embed/8kvO5cXlpA?si=exQNI2-oquvSwWRU",
      titulo: "Estimulación temprana para niños con Síndrome de Down",
      descripcion: "Explica la importancia de la estimulación temprana en el desarrollo motor, cognitivo y social de niños con Síndrome de Down."
    },
    {
      url: "https://www.youtube.com/embed/n8GcMjRa1M?si=SR6GYgGjts_SkfF-",
      titulo: "Ejercicios de Intervención Temprana para bebés con Síndrome de Down de 0 a 6 meses",
      descripcion: "Muestra actividades prácticas y adaptadas para favorecer el desarrollo desde los primeros meses de vida en bebés con Síndrome de Down."
    },
    {
  url: "https://www.youtube.com/embed/TEXcnUF3qZY?si=94fQ4Chr-1fDPoiM",
  titulo: "¿Qué es el síndrome de Down?",
  descripcion: "Explicación sencilla sobre qué es el Síndrome de Down, su origen genético y las características principales de esta condición."
}

  ],
  pdfs: [
    { nombre: "Cartilla sobre el Síndrome de Down", link: "/recursos/Anexo1_Cartilla Sindrome de Down.pdf" },
    { nombre: "Cuadernillo de actividades para niños con Síndrome de Down", link: "/recursos/Cuadernillo_de_actividades_sd.pdf" },
    { nombre: "SÍNDROME de DOWN (Trisomía 21)", link: "/recursos/Guia_sd.pdf" }
  ]
}
  }
},

{
  id: 9,
  titulo: "Parálisis Cerebral Infantil (PCI)",
  resumen: "Trastorno motor causado por una lesión cerebral temprana que afecta la postura, el movimiento y, en algunos casos, otras funciones asociadas.",
  imagen: "/recursos/paralisis.jpg",
  detalle: {
    definicion: "La Parálisis Cerebral Infantil (PCI) es un grupo de trastornos permanentes que afectan el movimiento, el tono muscular y la postura, causados por lesiones no progresivas en el cerebro en desarrollo, ocurridas antes, durante o poco después del nacimiento. Aunque la lesión no empeora con el tiempo, sus manifestaciones pueden cambiar a medida que el niño crece.",
    
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Parálisis cerebral, trastorno motor cerebral no progresivo." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Alteraciones motoras persistentes: rigidez, movimientos involuntarios o debilidad.",
        "Afecta la postura, el control del movimiento y el equilibrio.",
        "Puede acompañarse de dificultades sensoriales, cognitivas o de comunicación.",
        "Grados variables: desde leve (independencia parcial) hasta grave (dependencia total)."
      ]},
      { tipo: "texto", contenido: "Clasificación según el tipo de afectación:" },
      { tipo: "lista", items: [
        "Espástica: rigidez y reflejos exagerados (más frecuente).",
        "Atetósica/discinética: movimientos involuntarios y lentos.",
        "Atáxica: problemas de equilibrio y coordinación.",
        "Mixta: combinación de los anteriores."
      ]}
    ],

    causas: [
      { tipo: "lista", items: [
        "Lesiones cerebrales durante el embarazo (infecciones, falta de oxígeno, malformaciones).",
        "Complicaciones en el parto (asfixia perinatal, prematuridad).",
        "Daño cerebral en los primeros años de vida (traumatismos, meningitis, encefalitis).",
        "Factores de riesgo: bajo peso al nacer, embarazos múltiples, partos prematuros."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultad para controlar movimientos voluntarios.",
        "Alteraciones en la postura y tono muscular (hipertonía o hipotonía).",
        "Problemas de coordinación y equilibrio.",
        "Movimientos involuntarios o reflejos anormales.",
        "Posible presencia de convulsiones o epilepsia.",
        "Retraso en hitos del desarrollo motor (sentarse, caminar).",
        "En algunos casos, problemas de visión, audición, lenguaje o cognición asociados."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en sostener la cabeza, sentarse o caminar.",
        "Rigidez muscular o flacidez extrema.",
        "Movimientos incontrolados o espasmos.",
        "Dificultad para coordinar movimientos finos (coger objetos, escribir).",
        "Problemas para mantener el equilibrio al caminar o estar de pie.",
        "Retraso en el lenguaje o dificultades para comunicarse.",
        "Dependencia parcial o total en las actividades de la vida diaria."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Fisioterapia constante para mejorar el control postural y la movilidad.",
        "Terapia ocupacional para fomentar la autonomía en la vida diaria.",
        "Terapia de lenguaje y comunicación aumentativa en casos necesarios.",
        "Uso de órtesis, sillas de ruedas u otros apoyos técnicos adaptados.",
        "Atención médica integral (neuropediatría, ortopedia, rehabilitación).",
        "Apoyo psicoemocional para la familia y programas de inclusión escolar.",
        "Estimulación temprana y acompañamiento interdisciplinario desde los primeros meses."
      ]}
    ],

recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/tkY_5u-beQ8?si=fwtZtFcCzMOdZYzT",
      titulo: "Rehabilitación de fisioterapia para parálisis cerebral pediátrica",
      descripcion: "Explica en qué consiste la rehabilitación en fisioterapia para niños con PCI y cómo favorece la movilidad y la postura."
    },
    {
      url: "https://www.youtube.com/embed/VxknrQ4ATjU?si=myJtv9iP-jyDMpiD",
      titulo: "Actividades para niños con Parálisis Cerebral con material reciclado - Caja de cartón -",
      descripcion: "Muestra ideas creativas con materiales reciclados que estimulan la motricidad y la interacción en niños con PCI."
    },
    {
      url: "https://www.youtube.com/embed/fDiYEU9OdoU?si=sI9lGbwGSZhOsC4L",
      titulo: "Ejercicios de movilizaciones para niños con Parálisis Cerebral",
      descripcion: "Presenta ejercicios prácticos de movilización que ayudan a prevenir contracturas y mejorar la flexibilidad."
    },
    {
      url: "https://www.youtube.com/embed/ScqJ636KIhY?si=xrRGErEFRexXuWZf",
      titulo: "Ejercicios KitSmile - Posición supino - Rehabilitación niños con parálisis Cerebral",
      descripcion: "Explica cómo usar herramientas de apoyo como el KitSmile para favorecer la postura y la rehabilitación en niños con PCI."
    }
  ],
  pdfs: [
    { nombre: "Guía básica sobre Parálisis Cerebral Infantil", link: "/recursos/Parálisis_cerebral.pdf" },
    { nombre: "Cartilla sobre parálisis cerebral", link: "/recursos/cartilla-cerebral-6.pdf" },
    { nombre: "Guía para el juego adaptado para personas con parálisis cerebral", link: "/recursos/Guia_para_el_juego_adaptado_ASPACE_Granada.pdf" }
  ]
}

  }
}


  ],

  aprendizaje: [
    
{
  id: 10,
  titulo: "Disgrafía",
  resumen: "Dificultad específica en la escritura motriz y grafomotora que afecta la legibilidad, el ritmo y la organización del texto.",
  imagen: "/recursos/disgrafia.jpg",
  detalle: {
    definicion: "La disgrafía es un trastorno específico del aprendizaje que afecta la escritura, caracterizado por dificultades persistentes en la grafomotricidad, la organización espacial y la coherencia en el trazo de las letras y palabras. No se debe a una falta de inteligencia, sino a alteraciones en la motricidad fina, la coordinación visomotora y, en algunos casos, procesos cognitivos relacionados con la escritura.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: trastorno de la expresión escrita, dificultad grafomotora." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Letra ilegible, desorganizada o inconsistente.",
        "Dificultad para mantener un tamaño y forma uniforme en las letras.",
        "Problemas para respetar márgenes, espacios o líneas al escribir.",
        "Fatiga o dolor en la mano al realizar actividades de escritura.",
        "Lentitud excesiva al escribir en comparación con la edad esperada."
      ]},
      { tipo: "texto", contenido: "Clasificación:" },
      { tipo: "lista", items: [
        "Disgrafía motriz: relacionada con dificultades en la motricidad fina y coordinación visomotora.",
        "Disgrafía específica: vinculada a problemas cognitivos en el aprendizaje de la escritura (ortografía, gramática)."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: dislexia, TDAH, dispraxia, dificultades de atención y problemas de motricidad fina." },
      { tipo: "texto", contenido: "Edad de inicio: suele detectarse en la etapa escolar, cuando se exige mayor precisión y velocidad en la escritura." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Dificultades en la motricidad fina y coordinación visomotora.",
        "Trastornos del procesamiento perceptivo-motor.",
        "Problemas de lateralidad o integración sensorial.",
        "Factores neurológicos o madurativos.",
        "Ansiedad o bloqueos emocionales relacionados con el rendimiento escolar."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Letra irregular, poco legible o desproporcionada.",
        "Espaciado inadecuado entre letras y palabras.",
        "Errores frecuentes en el copiado de textos.",
        "Cansancio o dolor al escribir durante periodos cortos.",
        "Dificultades en la organización del texto en la hoja.",
        "Velocidad de escritura lenta y esfuerzo desmedido."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Grafía desordenada o ilegible.",
        "Uso excesivo de tachaduras y correcciones.",
        "Inconsistencia en la inclinación y tamaño de las letras.",
        "Problemas para copiar del tablero o de un texto.",
        "Rechazo o frustración hacia actividades que implican escritura."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia ocupacional para trabajar la motricidad fina y la postura.",
        "Ejercicios de grafomotricidad (trazos, laberintos, dibujos dirigidos).",
        "Uso de lápices adaptados, correctores de postura o plantillas de escritura.",
        "Actividades lúdicas para fortalecer la coordinación ojo-mano.",
        "Refuerzos positivos y evitar críticas negativas sobre la escritura.",
        "Uso de herramientas tecnológicas (computadora, tablet) como apoyo en la producción escrita."
      ]}
    ],

recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/hnf8C_Xkmc0?si=EIK-FY8UJFCHy-lx",
      titulo: "¿Qué es la DISGRAFÍA? ¿Qué Tipos de Disgrafía hay? 5+1 Ejercicios de Reeducación en Disgrafía",
      descripcion: "Explicación clara sobre qué es la disgrafía, sus tipos más comunes y ejemplos de ejercicios prácticos de reeducación para mejorar la escritura."
    },
    {
      url: "https://www.youtube.com/embed/MFPN5xzwdU4?si=qse74sCOiIAvthYM",
      titulo: "DISGRAFÍA: QUÉ ES Y CÓMO SE DETECTA",
      descripcion: "Presenta las señales de alerta para identificar la disgrafía y ofrece pautas iniciales para padres y docentes en la detección temprana."
    },
    {
      url: "https://www.youtube.com/embed/CwUwvbBPmS8?si=a0DEFV9B9Td6LbiU",
      titulo: "Diferencias entre la disgrafía y la disortografía",
      descripcion: "Aclara las diferencias entre disgrafía y disortografía, y propone estrategias educativas para abordar cada dificultad de manera adecuada."
    }
  ],
  pdfs: [
    { nombre: "Actividades para la disgrafía", link: "/recursos/Actividades_disgrafia.pdf" },
    { nombre: "Ejercicios para disgrafía", link: "/recursos/Ejercicios para disgrafia.pdf" },
    { nombre: "Cuadernillo para disgrafía", link: "/recursos/CUADERNILLO-DISGRAFÍA.pdf" }
  ]
}

}
},

{
  id: 11,
  titulo: "Disortografía",
  resumen: "Dificultad específica de aprendizaje que afecta la correcta aplicación de las reglas ortográficas, a pesar de una enseñanza y escolarización adecuadas.",
  imagen: "/recursos/disortografia.jpg",
  detalle: {
    definicion: "La disortografía es un trastorno del aprendizaje que se manifiesta en la escritura mediante errores ortográficos persistentes que no corresponden con el nivel de instrucción recibido. No está relacionada con la inteligencia del niño, sino con dificultades en la percepción, memoria y asociación de sonidos con grafías.",
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno específico de la ortografía." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Errores persistentes en la escritura, incluso tras recibir instrucción adecuada.",
        "Confusión en la correspondencia entre sonidos y letras.",
        "Dificultad para aplicar reglas ortográficas arbitrarias (h, tildes, b/v).",
        "Producción de textos con errores frecuentes que afectan la comprensión lectora."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: errores ocasionales que no interfieren significativamente con la comunicación escrita.",
        "Moderada: errores frecuentes que requieren apoyo constante en tareas escolares.",
        "Severa: errores muy recurrentes que impiden la comprensión del texto escrito y demandan intervención especializada."
      ]},
      { tipo: "texto", contenido: "Tipos de disortografía:" },
      { tipo: "lista", items: [
        "Natural: dificultades en la correspondencia sonido-letra.",
        "Arbitraria: errores en reglas ortográficas no fonéticas (h, tildes, b/v).",
        "Visoespacial: desorganización en la escritura por problemas perceptivos.",
        "Mixta: combinación de varias formas."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: dislexia, TDAH, dispraxia, dificultades de atención y problemas de motricidad fina." },
      { tipo: "texto", contenido: "Edad de inicio: suele detectarse en la etapa escolar, cuando se exige mayor precisión y velocidad en la escritura." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Déficits en la memoria auditiva secuencial y la percepción fonológica.",
        "Problemas en la discriminación visual y auditiva de letras y sonidos.",
        "Dificultades en la memoria a corto plazo para secuencias lingüísticas.",
        "Antecedentes de otros trastornos de aprendizaje como dislexia o disgrafía."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultad persistente para recordar y aplicar reglas ortográficas.",
        "Errores frecuentes en palabras de uso común.",
        "Escritura fonética (escribir tal como suena).",
        "Confusión en letras similares: b/d, p/q, ll/y, s/z.",
        "Problemas para aplicar tildes y signos de puntuación.",
        "Baja autoestima o frustración ante tareas escritas."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Omisiones, sustituciones o inversiones de letras y sílabas.",
        "Errores frecuentes en el uso de tildes, h, b/v, g/j, ll/y, s/z.",
        "Escritura de palabras tal como suenan, sin aplicar reglas ortográficas.",
        "Dificultad para recordar y aplicar normas ortográficas aprendidas.",
        "Producción de textos con errores recurrentes que afectan la comprensión."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Realizar dictados cortos y frecuentes con retroalimentación positiva.",
        "Fomentar la lectura diaria en voz alta para reforzar la memoria visual de las palabras.",
        "Usar pictogramas, tarjetas visuales o aplicaciones interactivas de ortografía.",
        "Apoyo de un fonoaudiólogo o psicopedagogo especializado.",
        "Ejercicios de conciencia fonológica y juegos lingüísticos.",
        "Integrar la corrección ortográfica de manera lúdica y motivadora."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/O27NZDT8kSE?si=JXkzFT-klc8GzLRq",
          titulo: "TEA: DISLEXIA, DISGRAFÍA, DISORTOGRAFÍA Y DISCALCULIA",
          descripcion: "Explicación general de los principales trastornos de aprendizaje, con comparación entre dislexía, disgrafía, disortografía y discalculia."
        },
        {
          url: "https://www.youtube.com/embed/teKVYaUgHHs?si=Wz7bi8XdsOW2k0nY",
          titulo: "DISORTOGRAFÍA",
          descripcion: "Descripción detallada de la disortografía: características, causas y ejemplos de errores ortográficos frecuentes."
        },
        {
          url: "https://www.youtube.com/embed/_QT4knii4CQ?si=Hs6eCwWL7vSX9pXM",
          titulo: "¿Cómo tratar la disortografía en los niños? Juegos, Ejercicios y Actividades",
          descripcion: "Propuestas prácticas (juegos y ejercicios) para trabajar la disortografía de forma lúdica en el aula y en casa."
        }
      ],
      pdfs: [
        { nombre: "Guía práctica para trabajar la disortografía", link: "/recursos/Guia_disortografia.pdf" },
        { nombre: "Ejercicios para disgrafía y disortografía", link: "/recursos/Disortografía y Disgrafía.pdf" },
        { nombre: "¿Qué es la disortografía?", link: "/recursos/disortografia-1.pdf" }
      ]
    }
  }
},

{
  id: 12,
  titulo: "Discalculia",
  resumen: "Dificultad específica del aprendizaje que afecta la adquisición y manejo de conceptos numéricos y habilidades matemáticas.",
  imagen: "/recursos/discalculia.jpg",
  detalle: {
    definicion: "La discalculia es un trastorno del aprendizaje que interfiere en la capacidad de comprender, recordar y manipular conceptos matemáticos básicos. No se debe a falta de enseñanza ni a discapacidad intelectual, sino a alteraciones específicas en el procesamiento numérico y espacial en el cerebro.",
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno específico del aprendizaje de las matemáticas." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Dificultad persistente para comprender números y cantidades.",
        "Problemas con la memorización de tablas de multiplicar y operaciones básicas.",
        "Errores frecuentes en cálculos mentales y escritos.",
        "Dificultad para comprender el valor posicional de los números."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: dificultades en cálculos complejos, aunque mantiene autonomía en operaciones simples.",
        "Moderada: errores frecuentes en operaciones básicas, requiere apoyo constante.",
        "Severa: incapacidad significativa para realizar cálculos y comprender conceptos matemáticos básicos."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: dislexia, TDAH, trastorno del lenguaje, ansiedad matemática." },
      { tipo: "texto", contenido: "Edad de inicio: suele detectarse en la etapa escolar primaria, cuando se intensifica la enseñanza formal de matemáticas." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Alteraciones en áreas cerebrales relacionadas con el procesamiento numérico (lóbulos parietales).",
        "Déficits en la memoria de trabajo y atención sostenida.",
        "Factores genéticos y antecedentes familiares de trastornos de aprendizaje.",
        "Problemas de percepción visoespacial o coordinación motora."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Dificultad para reconocer y escribir números correctamente.",
        "Confusión entre símbolos matemáticos (+, -, x, ÷).",
        "Problemas para asociar cantidades con sus representaciones numéricas.",
        "Errores frecuentes en operaciones básicas (sumar, restar, multiplicar, dividir).",
        "Dificultad para comprender problemas matemáticos escritos.",
        "Evita actividades relacionadas con matemáticas por frustración."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en el aprendizaje de contar y reconocer números.",
        "Dificultad para aprender las tablas de multiplicar.",
        "Errores constantes en cálculos sencillos.",
        "Problemas con la orientación espacial (confusión izquierda-derecha).",
        "Lentitud excesiva en la resolución de ejercicios matemáticos.",
        "Ansiedad o rechazo hacia las tareas matemáticas."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Usar material manipulativo (fichas, regletas, ábacos) para reforzar el aprendizaje.",
        "Incorporar juegos matemáticos que motiven el aprendizaje lúdico.",
        "Aplicar técnicas multisensoriales (visual, auditivo y kinestésico).",
        "Reforzar los logros con retroalimentación positiva.",
        "Apoyo pedagógico especializado y adaptaciones curriculares.",
        "Fomentar la confianza y reducir la ansiedad matemática."
      ]}
    ],

    recursos: {
       videos: [
        {
          url: "https://www.youtube.com/embed/fs19szj8L78?si=8Jou4AsA0eCoNZqE",
          titulo: "¿Qué es la DISCALCULIA? Todo lo que necesitas saber",
          descripcion: "Explica de manera clara en qué consiste la discalculia, sus causas más comunes y las principales señales de alerta en el entorno escolar."
        },
        {
          url: "https://www.youtube.com/embed/cPjuij_h_5c?si=3LL2UrmtpWklbtmN",
          titulo: "Discalculia, dislexia de los números",
          descripcion: "Ofrece estrategias prácticas y consejos dirigidos a padres y docentes para apoyar a los niños con discalculia."
        },
        {
          url: "https://www.youtube.com/embed/c_ah9Acn8xk?si=r8NtOISdzTc1JHp_",
          titulo: "Tipos de discalculia",
          descripcion: "Describe las diferentes formas en que se manifiesta la discalculia, ilustrando con ejemplos concretos en el ámbito escolar."
        },
        {
          url: "https://www.youtube.com/embed/ITNcGb6EEmg?si=P2VKLsQ6fmo07oLI",
          titulo: "Juegos para problemas de discalculia",
          descripcion: "Muestra actividades lúdicas y juegos didácticos diseñados para reforzar el aprendizaje matemático en niños con discalculia."
        }
      ],
      pdfs: [
        { nombre: "Ejercicios para la discalculia", link: "/recursos/Discalculia-Ejercicios.pdf" },
        { nombre: "Estrategias pedagógicas para la discalculia", link: "/recursos/Guia_estrategias_discalculia.pdf" },
        { nombre: "Guía de estrategias lúdicas para la discalculia", link: "/recursos/Guia_estrategias_ludicas_discalculia.pdf" }
      ]
    }
  }
},

{
  id: 13,
  titulo: "Dislexia",
  resumen: "Dificultad específica del aprendizaje que afecta la precisión, fluidez y comprensión lectora.",
  imagen: "/recursos/dislexia.jpg",
  detalle: {
    definicion: "La dislexia es un trastorno específico del aprendizaje que interfiere en la lectura, afectando la precisión, la fluidez y la comprensión, a pesar de contar con inteligencia y escolarización adecuadas. No se debe a falta de enseñanza ni a problemas sensoriales, sino a alteraciones neurobiológicas en el procesamiento fonológico y verbal.",
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno específico del aprendizaje con dificultad en la lectura." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Dificultad persistente para identificar y asociar letras con sus sonidos.",
        "Problemas en la decodificación y comprensión lectora.",
        "Lectura lenta, entrecortada y con errores frecuentes.",
        "Inversiones, omisiones o sustituciones de letras y sílabas.",
        "Pobre memoria visual verbal y dificultad para recordar palabras ya vistas."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: lectura funcional con errores ocasionales, compensable con estrategias pedagógicas.",
        "Moderada: lectura lenta y con errores frecuentes, afecta el rendimiento académico y requiere apoyo especializado.",
        "Severa: graves dificultades para leer y comprender, incluso con intervención intensiva, impactando la vida académica y social."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, disgrafía, disortografía, discalculia, ansiedad escolar y baja autoestima." },
      { tipo: "texto", contenido: "Edad de inicio: suele detectarse en los primeros años de primaria, cuando se espera la adquisición formal de la lectura y escritura." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos y antecedentes familiares de dislexia u otros trastornos de aprendizaje.",
        "Alteraciones en áreas cerebrales encargadas del procesamiento fonológico (hemisferio izquierdo).",
        "Déficits en la memoria de trabajo verbal y la velocidad de procesamiento.",
        "Dificultades en la conciencia fonológica desde la etapa preescolar."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Errores frecuentes al leer en voz alta (omitir, añadir o cambiar letras).",
        "Confusión de letras con grafías similares (p-b-d-q).",
        "Problemas para leer palabras nuevas o poco frecuentes.",
        "Lectura con poca entonación y comprensión limitada.",
        "Escritura con errores ortográficos persistentes, incluso tras enseñanza repetida."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en el aprendizaje de la lectura respecto a sus pares.",
        "Lectura lenta y con esfuerzo excesivo.",
        "Dificultad para recordar palabras comunes o reconocerlas rápidamente.",
        "Problemas para comprender textos escritos.",
        "Ansiedad, frustración o rechazo hacia actividades de lectura y escritura."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Implementar programas de intervención fonológica desde edades tempranas.",
        "Fomentar la lectura guiada y adaptada a su nivel de comprensión.",
        "Uso de tecnología de apoyo: audiolibros, software lector y aplicaciones educativas.",
        "Proporcionar más tiempo en evaluaciones y actividades escritas.",
        "Reforzar la autoestima y la motivación con logros alcanzables.",
        "Intervención multidisciplinaria con docentes, terapeutas del lenguaje y psicopedagogos."
      ]}
    ],

    recursos: {
      videos: [
        {
          url: "https://www.youtube.com/embed/u9QJYweVceY?si=Jr2tl-OaOQMvQAmj",
          titulo: "Todo lo que debes saber sobre la dislexia",
          descripcion: "Explicación completa sobre qué es la dislexia, sus causas, características principales y cómo afecta el aprendizaje."
        },
        {
          url: "https://www.youtube.com/embed/Z3TIJ6ERYIc?si=nx4nRsWWC-nKQcXN",
          titulo: "6 ACTIVIDADES PARA NIÑOS CON DISLEXIA",
          descripcion: "Presenta ejercicios y estrategias lúdicas para fortalecer la lectura, escritura y comprensión en niños con dislexia."
        },
        {
          url: "https://www.youtube.com/embed/bNjr9Y1k0SI?si=H5gt6yi0u0zzl5Oq",
          titulo: "La dislexia es una dificultad de aprendizaje, no es una enfermedad",
          descripcion: "Reflexiona sobre la dislexia como una condición del aprendizaje, diferenciándola de una enfermedad, y propone pautas de acompañamiento."
        }
      ],
      pdfs: [
        { nombre: "Recursos para trabajar la dislexia", link: "/recursos/50-recursos-para-trabajar-la-dislexia.pdf" },
        { nombre: "Guía para la dislexia", link: "/recursos/Guia_dislexia.pdf" },
        { nombre: "Cuadernillo de trabajo para la dislexia", link: "/recursos/Cuadernillo-de-trabajo-mejorar-la-lectoescritura-Dislexia.pdf" }
      ]
    }
  }
}

  ],

  neurologicos: [
    
   {
  id: 14,
  titulo: "Trastorno de Tics / Tourette",
  resumen: "Trastorno neurológico caracterizado por movimientos o vocalizaciones involuntarias repetitivas y persistentes.",
  imagen: "/recursos/tourette.jpg",
  detalle: {
    definicion: "El síndrome de Tourette es un trastorno neurológico del desarrollo que se manifiesta por la presencia de múltiples tics motores y al menos un tic vocal durante más de un año. Los tics son movimientos o sonidos repentinos, rápidos y recurrentes, que la persona no puede controlar voluntariamente.",
    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno de tics múltiples, síndrome de Tourette." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Tics motores (movimientos rápidos e involuntarios, como parpadeo, muecas, encogimiento de hombros).",
        "Tics vocales (sonidos como gruñidos, carraspeos, palabras o frases).",
        "Fluctúan en frecuencia e intensidad, empeorando con estrés o ansiedad.",
        "Suelen aparecer en la infancia, con pico de intensidad entre los 9 y 14 años.",
        "Pueden disminuir en la adultez, aunque en algunos casos persisten."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: tics poco frecuentes y poco notorios, sin gran impacto en la vida diaria.",
        "Moderada: tics notorios que interfieren en la concentración y en las relaciones sociales.",
        "Severa: tics constantes e intensos que afectan de manera significativa la calidad de vida y pueden generar dolor físico o lesiones."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, TOC, ansiedad, depresión, problemas de aprendizaje." },
      { tipo: "texto", contenido: "Edad de inicio: entre los 5 y 7 años, con evolución variable a lo largo del tiempo." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos: predisposición hereditaria demostrada en familias.",
        "Alteraciones en neurotransmisores, especialmente dopamina y serotonina.",
        "Cambios en los circuitos cerebrales que regulan el control motor.",
        "Factores ambientales que pueden exacerbar los síntomas (estrés, fatiga)."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Movimientos involuntarios repentinos y breves, que pueden ser simples (parpadeo, muecas) o complejos (saltos, gestos).",
        "Tics vocales simples (toser, gruñir, carraspear) o complejos (palabras, frases).",
        "Sensación premonitoria antes del tic, descrita como tensión interna que se libera al realizarlo.",
        "Variación en intensidad y frecuencia, a menudo empeoran con el estrés.",
        "Dificultad para suprimirlos de forma voluntaria, aunque a veces logran contenerse por periodos cortos."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Parpadeo excesivo y repetitivo.",
        "Encogimiento de hombros o movimientos bruscos de cabeza.",
        "Muecas faciales, movimientos de brazos o piernas.",
        "Sonidos como gruñidos, carraspeos o chasquidos.",
        "Repetición involuntaria de palabras propias o ajenas (ecolalia).",
        "En algunos casos, coprolalia (uso involuntario de palabras obscenas)."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Psicoeducación: informar a la familia y al entorno escolar para reducir estigmas.",
        "Terapias conductuales, como la inversión del hábito o la exposición y prevención de respuesta.",
        "Terapia ocupacional y técnicas de relajación para disminuir el impacto del estrés.",
        "Apoyo psicológico para trabajar la autoestima y la ansiedad asociada.",
        "En casos graves, valoración médica para tratamiento farmacológico (neurolépticos o reguladores dopaminérgicos).",
        "Fomentar rutinas estables, ejercicio físico y actividades que ayuden a la autorregulación."
      ]}
    ],

recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/TIe3DrM1tKQ?si=ZpJ5mymkEiMmnuyy",
      titulo: "¿Qué es el síndrome de Tourette?",
      descripcion: "Explica qué es el síndrome de Tourette, sus síntomas característicos y cómo impacta en la vida cotidiana de quienes lo presentan."
    },
    {
      url: "https://www.youtube.com/embed/JK8HO4G711U?si=z7liraWWZvw7oceK",
      titulo: "¿Hay diferentes tipos de trastornos por TICS?",
      descripcion: "Describe los distintos tipos de tics motores y vocales, así como sus variaciones en intensidad y frecuencia."
    },
    {
      url: "https://www.youtube.com/embed/dqSp0XhJHGg?si=a9aAZLy1ddwL9woW",
      titulo: "¿Cuáles son los tratamientos más eficaces para el síndrome de Tourette?",
      descripcion: "Presenta las principales opciones terapéuticas disponibles para el síndrome de Tourette, desde intervenciones conductuales hasta tratamientos médicos."
    },
    {
      url: "https://www.youtube.com/embed/YuXhXtEmR7k?si=_rtMTYihLv3LfqIz",
      titulo: "SÍNDROME de TOURETTE: ¿Qué es? | Draw My Life",
      descripcion: "Explica el síndrome de Tourette a través de una narración visual tipo 'Draw My Life', con un enfoque claro y educativo."
    }
  ],
  pdfs: [
    { nombre: "Estrategias para síndrome de Tourette", link: "/recursos/Estrategias_para_sindrome_tourette.pdf" },
    { nombre: "Cuaderno para padres: síndrome de Tourette", link: "/recursos/Cuaderno_para_Padres.pdf" },
    { nombre: "Guía para manejo del síndrome de Tourette", link: "/recursos/Guia_para_tourette.pdf" }
  ]
}

  }
},

{
  id: 15,
  titulo: "Trastorno Obsesivo-Compulsivo Infantil (TOC/TEOc)",
  resumen: "Pensamientos obsesivos y conductas repetitivas que interfieren en la vida diaria.",
  imagen: "/recursos/toc.jpg",
  detalle: {
    definicion: "El TOC infantil es un trastorno de ansiedad caracterizado por la presencia de obsesiones (pensamientos intrusivos, repetitivos e indeseados) y compulsiones (conductas o rituales realizados para disminuir la ansiedad). Puede confundirse con manías propias de la infancia, con rutinas del Trastorno del Espectro Autista (TEA) o con el Trastorno de Ansiedad Generalizada, pero en el TOC los rituales tienen como fin neutralizar el malestar causado por los pensamientos obsesivos.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: Trastorno obsesivo-compulsivo de inicio en la infancia o adolescencia (TEOc)." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Presencia de pensamientos obsesivos intrusivos y repetitivos.",
        "Necesidad de realizar rituales o compulsiones para reducir la ansiedad.",
        "Persistencia e interferencia significativa en la vida escolar, familiar y social.",
        "Conciencia parcial en el niño de que sus miedos y conductas son excesivas."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: síntomas controlables, no interfieren de forma significativa en la rutina diaria.",
        "Moderada: las compulsiones ocupan más de 1 hora al día, afectan rendimiento escolar y relaciones.",
        "Grave: los rituales consumen varias horas al día, limitando la vida familiar, social y escolar."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: ansiedad generalizada, depresión, tics, síndrome de Tourette, TDAH." },
      { tipo: "texto", contenido: "Edad de inicio: suele comenzar entre los 7 y 12 años, aunque algunos casos se detectan en la adolescencia temprana." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Alteraciones neurobiológicas en circuitos cerebrales relacionados con serotonina y dopamina.",
        "Factores genéticos y antecedentes familiares de TOC u otros trastornos de ansiedad.",
        "Eventos estresantes o traumáticos en la infancia.",
        "Factores ambientales que refuerzan rituales o conductas repetitivas."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Lavado de manos excesivo o ritualizado.",
        "Comprobaciones constantes (cerraduras, objetos, tareas escolares).",
        "Necesidad de orden o simetría extrema.",
        "Acumulación de objetos sin valor real.",
        "Repetición de palabras, oraciones o acciones para evitar un daño imaginario.",
        "Miedo intenso a la contaminación o a causar daño."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Pensamientos intrusivos de miedo, duda o culpa.",
        "Conductas repetitivas que consumen tiempo y energía.",
        "Irritabilidad y ansiedad si se interrumpe el ritual.",
        "Impacto en el rendimiento escolar y en la interacción social.",
        "Dificultad para concentrarse en tareas académicas.",
        "Evita situaciones que despierten obsesiones."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Terapia cognitivo-conductual con técnicas de exposición y prevención de respuesta.",
        "Psicoeducación a la familia para apoyar sin reforzar los rituales.",
        "Apoyo escolar con adaptaciones que reduzcan la presión académica.",
        "Uso de recursos de relajación y mindfulness en casa y escuela.",
        "Tratamiento farmacológico en casos moderados o graves, siempre supervisado por un especialista."
      ]}
    ],

    recursos: {
videos: [
  {
    url: "https://www.youtube.com/embed/sKT-6GTQSUE?si=EpbVSjdt6w2mW8K4",
    titulo: "Tu cerebro cuando tienes TOC - Trastorno Obsesivo Compulsivo",
    descripcion: "Explica los mecanismos cerebrales implicados en el TOC, cómo se activan los circuitos de obsesiones y compulsiones, y su relación con la ansiedad."
  },
  {
    url: "https://www.youtube.com/embed/uuq5TvBvq4M?si=8geavlvOQkb0XOty",
    titulo: "El TOC en la infancia",
    descripcion: "Describe cómo se manifiesta el TOC en niños, ejemplos de síntomas frecuentes y la importancia de un diagnóstico temprano."
  },
  {
    url: "https://www.youtube.com/embed/gVZlcC6KLII?si=mKXUsjucnYIFNxlQ",
    titulo: "7 Tipos de TOC ¿Tienes alguno? (Trastorno Obsesivo Compulsivo)",
    descripcion: "Presenta los diferentes tipos de TOC que existen, con ejemplos claros de las variantes más comunes en jóvenes y adultos."
  }
],

      pdfs: [
        { nombre: "Guía tratamiento de TOC infantil", link: "/recursos/toc_libro.pdf" },
        { nombre: "Manual de evaluación e intervención de TOC", link: "/recursos/EManual-TOC-1.pdf" },
        { nombre: "Cuaderno técnico en TOC", link: "/recursos/TOC.pdf" }
      ]
    }
  }
},

{
  id: 16,
  titulo: "Epilepsia Infantil",
  resumen: "Trastorno neurológico caracterizado por crisis convulsivas recurrentes en la niñez.",
  imagen: "/recursos/epilepsia.jpg",
  detalle: {
    definicion: "La epilepsia infantil es un trastorno neurológico crónico en el que la actividad eléctrica cerebral se ve alterada, generando crisis epilépticas recurrentes. Estas crisis pueden manifestarse de formas diversas, desde ausencias breves hasta convulsiones generalizadas. Puede confundirse con desmayos, tics, migrañas con aura o trastornos de conducta, pero la epilepsia se diferencia por los registros de actividad eléctrica cerebral anormal en un electroencefalograma (EEG).",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: epilepsia pediátrica, epilepsia de inicio en la infancia." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Presencia de crisis epilépticas recurrentes sin causa inmediata aparente.",
        "Episodios que pueden incluir convulsiones, ausencias, desconexión del entorno o movimientos repetitivos.",
        "Duración variable: de segundos a minutos.",
        "Posibilidad de afectación cognitiva o conductual dependiendo de la frecuencia e intensidad de las crisis."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: crisis ocasionales, controladas con medicación.",
        "Moderada: crisis más frecuentes, requieren ajustes terapéuticos continuos.",
        "Grave: crisis diarias o resistentes a fármacos, con impacto significativo en la calidad de vida."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: TDAH, dificultades de aprendizaje, ansiedad, depresión." },
      { tipo: "texto", contenido: "Edad de inicio: suele detectarse en los primeros años de vida, aunque puede manifestarse en cualquier etapa de la infancia." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos que predisponen a una actividad eléctrica cerebral anómala.",
        "Malformaciones en el desarrollo cerebral.",
        "Traumatismos craneoencefálicos en la infancia.",
        "Infecciones del sistema nervioso central (meningitis, encefalitis).",
        "Alteraciones metabólicas o causas desconocidas en algunos casos."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Convulsiones con movimientos bruscos y pérdida de control muscular.",
        "Episodios de mirada fija o desconexión del entorno (ausencias).",
        "Movimientos repetitivos de brazos, piernas o boca durante la crisis.",
        "Confusión, somnolencia o cansancio después de los episodios.",
        "Variabilidad en la frecuencia: desde una vez al año hasta varias veces al día."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Convulsiones generalizadas o parciales.",
        "Pérdida momentánea de conciencia o desconexión breve.",
        "Movimientos repetitivos e involuntarios.",
        "Sensaciones extrañas previas a la crisis (aura).",
        "Dificultad para recordar lo ocurrido tras la crisis.",
        "Cambios de conducta asociados a la frecuencia de los episodios."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Supervisión médica especializada con neurólogo pediátrico.",
        "Cumplir estrictamente con el tratamiento farmacológico prescrito.",
        "Evitar desencadenantes conocidos: falta de sueño, luces intermitentes, estrés excesivo.",
        "Implementar rutinas de sueño regulares y hábitos saludables.",
        "Capacitar a docentes y cuidadores en primeros auxilios para crisis epilépticas.",
        "Ofrecer apoyo emocional y acompañamiento escolar al niño y la familia."
      ]}
    ],

    recursos: {
videos: [
  {
    url: "https://www.youtube.com/embed/YWMXApHZkf4?si=ZWCe5NvLCML4EWPC",
    titulo: "10 consejos fundamentales para padres de niños con crisis epilépticas",
    descripcion: "Ofrece recomendaciones prácticas para padres y cuidadores sobre cómo manejar las crisis epilépticas en casa y apoyar al niño en su vida diaria."
  },
  {
    url: "https://www.youtube.com/embed/eqSnAslgjSI?si=hq6YaTiMCnkj6EtI",
    titulo: "¿Qué es la epilepsia en los niños?",
    descripcion: "Explica en qué consiste la epilepsia infantil, cuáles son sus síntomas principales y la importancia del diagnóstico temprano."
  },
  {
    url: "https://www.youtube.com/embed/T4ZYL-Do7BU?si=2AtaqpOFdbS_jrU9",
    titulo: "Tipos de EPILEPSIA. Cuáles hay y cuál es su pronóstico.",
    descripcion: "Describe los distintos tipos de epilepsia en niños y jóvenes, así como su pronóstico y evolución según cada caso."
  }
],

      pdfs: [
        { nombre: "Guía para padres sobre epilepsia infantil", link: "/recursos/Guia_epilepsia.pdf" },
        { nombre: "Manual de diagnóstico para epilepsia", link: "/recursos/Manual_epilepsia.pdf" },
        { nombre: "Guía de apoyo para la epilepsia", link: "/recursos/guia-ninos-y-adolescentes.pdf" }
      ]
    }
  }
}


  ],

  sensoriales: [
    
    
{
  id: 17,
  titulo: "Discapacidad Auditiva",
  resumen: "Dificultad parcial o total para percibir sonidos, que puede afectar el desarrollo del lenguaje y la comunicación en la infancia.",
  imagen: "/recursos/discapacidad_auditiva.jpg",
  detalle: {
    definicion: "La discapacidad auditiva infantil es una condición sensorial que implica la pérdida parcial (hipoacusia) o total (sordera) de la capacidad de oír. Puede ser congénita o adquirida, y su impacto depende del grado de pérdida y de la edad en que aparece. Suele confundirse con retrasos del lenguaje, dificultades de atención o problemas conductuales, pero se diferencia al confirmarse con pruebas audiométricas y estudios especializados.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: hipoacusia, sordera infantil, pérdida auditiva." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Dificultad para percibir y discriminar sonidos del entorno.",
        "Afecta la adquisición y desarrollo del lenguaje oral.",
        "Interfiere en la comunicación y la interacción social.",
        "El impacto depende del grado (leve, moderada, severa o profunda) y del momento de aparición."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: dificultades para escuchar sonidos bajos o en ambientes ruidosos.",
        "Moderada: problemas para seguir conversaciones sin apoyo visual.",
        "Severa: percepción muy limitada de sonidos fuertes.",
        "Profunda: ausencia total de percepción auditiva."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: retraso en el lenguaje, dificultades de aprendizaje, ansiedad, aislamiento social." },
      { tipo: "texto", contenido: "Edad de inicio: puede ser congénita o manifestarse en cualquier etapa de la infancia tras infecciones, traumatismos o exposición a ruido intenso." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos y hereditarios.",
        "Infecciones prenatales (rubéola, citomegalovirus).",
        "Complicaciones en el parto (hipoxia neonatal, bajo peso).",
        "Infecciones del oído medio (otitis recurrentes).",
        "Exposición prolongada a ruidos fuertes.",
        "Traumatismos craneoencefálicos.",
        "Causas desconocidas en algunos casos."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "No responder a sonidos o ruidos cotidianos.",
        "Dificultad para adquirir o desarrollar el lenguaje oral.",
        "Habla limitada, ininteligible o inexistente sin intervención.",
        "Necesidad de apoyarse en gestos o lectura labial.",
        "Problemas de socialización derivados de la comunicación limitada."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Retraso en el inicio del balbuceo o lenguaje.",
        "No reaccionar cuando se le llama por su nombre.",
        "Dificultades para seguir instrucciones verbales.",
        "Elevar el volumen excesivamente de la televisión u otros dispositivos.",
        "Problemas de rendimiento escolar asociados a la comprensión oral.",
        "Aislamiento o frustración en contextos sociales."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Diagnóstico precoz mediante tamizaje auditivo neonatal y pruebas audiológicas.",
        "Uso de audífonos o implantes cocleares según el grado de pérdida.",
        "Terapia fonoaudiológica intensiva para estimular el lenguaje y la comunicación.",
        "Apoyo educativo con adaptaciones en el aula (señas, materiales visuales).",
        "Capacitar a la familia y docentes en estrategias de comunicación inclusivas.",
        "Fomentar la participación en entornos sociales con apoyo emocional."
      ]}
    ],

    recursos: {
videos: [
  {
    url: "https://www.youtube.com/embed/XpjpnlGaG-g?si=VY54jL2xoOPXFYFq",
    titulo: "Discapacidad auditiva. Recursos para el acceso a la comunicación y a la formación",
    descripcion: "Muestra recursos, apoyos y herramientas que permiten a las personas con discapacidad auditiva acceder a la comunicación y la educación de forma inclusiva."
  },
  {
    url: "https://www.youtube.com/embed/oEHjNclhCU0?si=9_v6z3Ts6iR3JqZS",
    titulo: "Discapacidad Auditiva",
    descripcion: "Explica qué es la discapacidad auditiva, sus causas más frecuentes y cómo impacta en el desarrollo del lenguaje y la interacción social."
  },
  {
    url: "https://www.youtube.com/embed/AphnueESt18?si=WlzYXXSq3GdoIZvX",
    titulo: "Discapacidad auditiva y sus tipos",
    descripcion: "Detalla los diferentes grados y tipos de discapacidad auditiva, resaltando la importancia de la detección temprana y del apoyo educativo."
  }
],

      pdfs: [
        { nombre: "Fichero sobre discapacidad auditiva", link: "/recursos/Fichero-Discapacidad-Auditiva.pdf" },
        { nombre: "Cartilla para discapacidad auditiva", link: "/recursos/cartilla-auditiva-4.pdf" },
        { nombre: "Actividades de apoyo auditivo", link: "/recursos/Actividades_discapacidad_auditiva.pdf" }
      ]
    }
  }
},

   {
  id: 18,
  titulo: "Discapacidad Visual",
  resumen: "Limitación parcial o total de la visión que afecta el desarrollo, el aprendizaje y la interacción social en la infancia.",
  imagen: "/recursos/discapacidad_visual.jpg",
  detalle: {
    definicion: "La discapacidad visual infantil es una condición sensorial que implica una disminución parcial (baja visión) o total (ceguera) en la capacidad de ver. Puede ser congénita o adquirida, y su impacto depende de la severidad y de la etapa del desarrollo en que se presenta. Puede confundirse con desinterés escolar o problemas de atención, pero se diferencia mediante pruebas oftalmológicas y optométricas especializadas.",

    definicionPuntos: [
      { tipo: "texto", contenido: "Otros nombres: baja visión, ceguera infantil, pérdida visual." },
      { tipo: "texto", contenido: "Características nucleares:" },
      { tipo: "lista", items: [
        "Dificultad para percibir o interpretar estímulos visuales.",
        "Afecta la exploración del entorno y el aprendizaje académico.",
        "Interfiere en la interacción social y en la autonomía.",
        "El impacto depende del grado de pérdida y del momento de aparición."
      ]},
      { tipo: "texto", contenido: "Gravedad:" },
      { tipo: "lista", items: [
        "Leve: visión borrosa o dificultad con detalles finos.",
        "Moderada: limitación significativa para leer o reconocer objetos sin ayudas.",
        "Severa: percepción muy limitada de formas o luces.",
        "Ceguera total: ausencia de percepción visual."
      ]},
      { tipo: "texto", contenido: "Comorbilidades frecuentes: retraso en el desarrollo psicomotor, dificultades de aprendizaje, ansiedad, aislamiento social." },
      { tipo: "texto", contenido: "Edad de inicio: puede ser congénita o adquirida en cualquier etapa de la infancia debido a enfermedades o lesiones oculares." }
    ],

    causas: [
      { tipo: "lista", items: [
        "Factores genéticos y hereditarios (ej. albinismo ocular, retinosis pigmentaria).",
        "Malformaciones congénitas del ojo.",
        "Infecciones prenatales (rubéola, toxoplasmosis).",
        "Complicaciones en el parto (retinopatía del prematuro, hipoxia neonatal).",
        "Traumatismos oculares o craneales.",
        "Enfermedades como glaucoma o cataratas infantiles.",
        "Causas desconocidas en algunos casos."
      ]}
    ],

    caracteristicas: [
      { tipo: "lista", items: [
        "Acercarse mucho a los objetos para verlos.",
        "Dificultad para leer, escribir o reconocer personas a distancia.",
        "Movimientos oculares anormales (nistagmo).",
        "Preferencia por materiales con alto contraste.",
        "Evitar actividades que requieran visión detallada.",
        "Desorientación en entornos desconocidos."
      ]}
    ],

    sintomas: [
      { tipo: "lista", items: [
        "Frotarse los ojos con frecuencia o guiñar un ojo para enfocar.",
        "Tropezar o chocar con objetos con facilidad.",
        "Retraso en la adquisición de habilidades visuales y motoras.",
        "Dificultad para seguir objetos en movimiento.",
        "Dolores de cabeza o cansancio ocular.",
        "Bajo rendimiento escolar por problemas de visión no corregidos."
      ]}
    ],

    recomendaciones: [
      { tipo: "lista", items: [
        "Diagnóstico temprano con oftalmólogo y optómetra pediátrico.",
        "Uso de lentes, lupas, bastones, dispositivos electrónicos o sistemas Braille según el grado de pérdida.",
        "Apoyo educativo con materiales accesibles (letra grande, contraste de colores, audio-libros).",
        "Entrenamiento en orientación y movilidad para fomentar autonomía.",
        "Capacitación a docentes y familias en estrategias inclusivas.",
        "Estimulación multisensorial para favorecer el aprendizaje y la socialización."
      ]}
    ],

 recursos: {
  videos: [
    {
      url: "https://www.youtube.com/embed/sP6IsbboRZU?si=W6QGidDW-k9Prs61",
      titulo: "QUE SABER SOBRE CEGUERA INFANTIL/ DISCAPACIDAD VISUAL",
      descripcion: "Describe las causas más comunes de la ceguera infantil, signos de alerta y la importancia de la detección temprana."
    },
    {
      url: "https://www.youtube.com/embed/llQb_DvSsdI?si=yF6xCwZ3m7CYy5T4",
      titulo: "Discapacidad Visual - Minders",
      descripcion: "Explica qué es la discapacidad visual, sus grados y propone estrategias de inclusión en el entorno escolar y social."
    },
    {
      url: "https://www.youtube.com/embed/eOEmwXqaGJU?si=SpGzJVirw37J4sYo",
      titulo: "Educación Inicial - Educación Especial - Discapacidad visual ¿Cómo hacerlo más fácil?",
      descripcion: "Ofrece recomendaciones prácticas para docentes y familias sobre cómo adaptar la enseñanza a niños con discapacidad visual."
    }
  ],
      pdfs: [
        { nombre: "Fichero sobre discapacidad visual", link: "/recursos/Fichero-Discapacidad-Visual.pdf" },
        { nombre: "cartilla material didactico para estudiantes con discapacidad visual", link: "/recursos/cartilla material didactico para estudiantes con dv.pdf" },
        { nombre: "Guia para apoyo de discapacidad visual", link: "/recursos/guia-discapacidad-visual.pdf" }
      ]
    }
  }
}

  ]
};
export default function Recursos() {
  const [open, setOpen] = useState(false);
  const [condicionActiva, setCondicionActiva] = useState(null);
  const [tab, setTab] = useState("definicion");

  const abrirModal = (condicion) => {
    setCondicionActiva(condicion);
    setTab("definicion");
    setOpen(true);
  };

  const cerrarModal = () => {
    setCondicionActiva(null);
    setOpen(false);
  };

const renderContenido = (contenido) => {
  if (!contenido) return null;

  if (Array.isArray(contenido)) {
    return contenido.map((item, index) => {
      if (typeof item === "string") {
        return <p key={index} className="mb-2">{item}</p>;
      }

      if (item.tipo === "texto") {
        return <p key={index} className="mb-2">{item.contenido}</p>;
      }

      if (item.tipo === "lista") {
        return (
          <ul key={index} className="list-disc pl-5 mb-3 space-y-1">
            {item.items.map((subItem, subIndex) => (
              <li key={subIndex}>{subItem}</li>
            ))}
          </ul>
        );
      }

      return null;
    });
  }

  return <p className="mb-2">{contenido}</p>;
};

  return (
    <div className="p-6">
      {/* Encabezado de la página */}
      <div className="text-center max-w-[1400px] mx-auto mb-10">
        <motion.h1
          className="text-4xl font-bold text-center mb-6 text-blue-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Recursos sobre condiciones del desarrollo infantil
        </motion.h1>
        <motion.p
          className="text-lg text-center text-gray-600 mb-12"
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          En esta sección encontrarás información clara y práctica sobre diversas
          condiciones neurológicas y del desarrollo que pueden presentarse en la
          primera infancia. Cada recurso incluye una definición breve, posibles
          causas, síntomas tempranos, recomendaciones y materiales de apoyo para
          familias y cuidadores.
        </motion.p>
      </div>

      {/* Renderizado por categorías */}
      {Object.entries(condiciones).map(([categoria, items]) => (
        <div key={categoria} className="mb-12">
          {/* Encabezado de cada categoría */}
          <h2 className="text-2xl font-bold text-blue-700 mb-6">
            {categoria === "neurodesarrollo" && "🧠 Trastornos del Neurodesarrollo"}
            {categoria === "aprendizaje" && "📚 Trastornos del Aprendizaje"}
            {categoria === "neurologicos" && "⚡ Trastornos Neurológicos"}
            {categoria === "sensoriales" && "👂👁️ Trastornos Sensoriales"}
          </h2>

          {/* Grid de tarjetas de esa categoría */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {items.map((cond) => (
              <div
                key={cond.id}
                className="bg-white shadow-lg rounded-2xl p-6 flex flex-col items-center text-center hover:shadow-2xl transition cursor-pointer"
                onClick={() => abrirModal(cond)}
              >
                <img
                  src={cond.imagen}
                  alt={cond.titulo}
                  className="w-40 h-40 object-contain mb-4"
                />
                <h2 className="text-xl font-bold">{cond.titulo}</h2>
                <p className="text-gray-600">{cond.resumen}</p>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                  Ver más
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}

{/* Modal */}
{open && condicionActiva && (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
    <div className="bg-white rounded-lg p-6 w-11/12 md:w-3/4 lg:w-2/3 max-h-[90vh] overflow-y-auto relative">
      
      {/* Botón de cierre sticky sin fondo */}
      <button
        className="sticky top-2 right-2 ml-auto block text-gray-600 hover:text-gray-900 text-xl font-bold z-20 bg-transparent"
        onClick={cerrarModal}
      >
        ✖
      </button>

      <h2 className="text-2xl font-bold mb-4">{condicionActiva.titulo}</h2>

      {/* Tabs */}
      <div className="flex gap-3 mb-4 border-b pb-2 flex-wrap">
        {["definicion", "causas", "caracteristicas", "sintomas", "recomendaciones", "recursos"].map((t) => (
          <button
            key={t}
            className={`px-3 py-1 rounded-lg ${
              tab === t ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
            onClick={() => setTab(t)}
          >
            {t.charAt(0).toUpperCase() + t.slice(1)}
          </button>
        ))}
      </div>



{/* Contenido dinámico */}
<div className="text-gray-700">
  {tab === "definicion" && (
  <div className="space-y-4">
    <div>{renderContenido(condicionActiva.detalle.definicion)}</div>

    {condicionActiva.detalle.definicionPuntos && (
      <div className="pl-5">
        {renderContenido(condicionActiva.detalle.definicionPuntos)}
      </div>
    )}
  </div>
)}

  {tab === "causas" && renderContenido(condicionActiva.detalle.causas)}
    {tab === "caracteristicas" && renderContenido(condicionActiva.detalle.caracteristicas)}
  {tab === "sintomas" && renderContenido(condicionActiva.detalle.sintomas)}
  {tab === "recomendaciones" && renderContenido(condicionActiva.detalle.recomendaciones)}

  {tab === "recursos" && (
    <div>
      <h3 className="font-semibold mb-2">Videos</h3>
      <div className="grid md:grid-cols-2 gap-4 mb-4">
{condicionActiva.detalle.recursos?.videos?.map((video, index) => (
  <div key={index}>
    <iframe
      src={video.url}
      title={video.titulo}
      className="w-full h-64 rounded-lg"
      allowFullScreen
    ></iframe>
    <h4 className="font-semibold mt-2">{video.titulo}</h4>
    {video.descripcion && (
      <p className="text-gray-600 text-sm mt-1">{video.descripcion}</p>
    )}
  </div>
))}

      </div>
      <h3 className="font-semibold mb-2">PDFs descargables</h3>
<ul className="space-y-2">
  {condicionActiva.detalle.recursos.pdfs.map((pdf, i) => (
    <li key={i}>
      <a
        href={pdf.link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 text-blue-600 hover:underline"
      >
        <Download size={18} />
        <span>{pdf.nombre}</span>
      </a>
    </li>
  ))}
</ul>

    </div>
  )}
</div>

          </div>
        </div>
      )}
    </div>
  );
}