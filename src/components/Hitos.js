import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ======== RESUMEN GENERAL POR EDADES ========
const resumenMotor = [
  "0-6 meses: Bebé boca abajo levantando la cabeza.",
  "6-12 meses: Bebé sentado o intentando ponerse de pie.",
  "12-18 meses: Niño pequeño caminando con ayuda.",
  "18-24 meses: Niño corriendo o subiendo escalones.",
  "2-3 años: Niño pedalando triciclo o saltando.",
  "3-5 años: Niño corriendo, saltando y usando tijeras.",
];

const resumenLenguaje = [
  "0-6 meses: Gorgojeo y sonidos guturales.",
  "6-12 meses: Balbuceo con sílabas simples (mamá, papá).",
  "12-18 meses: Dice primeras palabras con significado.",
  "18-24 meses: Frases de 2-3 palabras y comprensión simple.",
  "2-3 años: Construye frases cortas y hace preguntas simples.",
  "3-5 años: Frases completas y coherentes, narración de historias.",
];

const resumenCognitivo = [
  "0-6 meses: Observa y reconoce estímulos visuales y auditivos.",
  "6-12 meses: Explora objetos y entiende causa-efecto.",
  "12-18 meses: Resuelve problemas simples y sigue instrucciones básicas.",
  "18-24 meses: Participa en juegos de memoria y clasificación.",
  "2-3 años: Comprende conceptos básicos de cantidad y tamaño.",
  "3-5 años: Desarrollo de pensamiento lógico y resolución de problemas.",
];

const resumenSocial = [
  "0-6 meses: Sonríe y responde a la voz de los padres.",
  "6-12 meses: Reconoce caras y muestra preferencias sociales.",
  "12-18 meses: Imita acciones y gestos de otros.",
  "18-24 meses: Juega al lado de otros niños.",
  "2-3 años: Comienza el juego cooperativo y comparte objetos.",
  "3-5 años: Desarrolla empatía y relaciones sociales más complejas.",
];

const resumenHabilidades = [
  "0-6 meses: Reacciona a necesidades básicas y cambios de postura.",
  "6-12 meses: Intenta agarrar objetos y moverse independientemente.",
  "12-18 meses: Participa en actividades sencillas de la vida diaria.",
  "18-24 meses: Comienza a vestirse y alimentarse con ayuda mínima.",
  "2-3 años: Desarrolla rutinas básicas de higiene y alimentación.",
  "3-5 años: Mayor independencia en actividades de autocuidado y organización.",
];

// ======== DATOS DE LOS DESARROLLOS ========

const edadesMotor = [
  {
    rango: "0-6 meses",
    descripcion: [
      "Sostener la cabeza brevemente cuando está boca abajo.",
      "Mover brazos y piernas de manera desordenada.",
      "Seguir objetos con la mirada.",
      "Levantar el pecho al estar boca abajo.",
      "Girar la cabeza hacia sonidos.",
      "Abrir y cerrar las manos.",
      "Empujar con piernas al estar boca abajo.",
      "Mostrar reflejo de agarre.",
      "Reaccionar a cambios de postura.",
      "Llevar manos a la boca.",
    ],
    imagen: "./desarrollo_motor.jpg",
    imagenGrande: "./desarrollo_motor.jpg",
  },
  {
    rango: "6-12 meses",
    descripcion: [
      "Sostener la cabeza de manera estable.",
      "Girar de boca arriba a boca abajo.",
      "Sentarse sin apoyo.",
      "Arrastrarse o gatear.",
      "Intentar ponerse de pie con apoyo.",
      "Caminar agarrado de muebles.",
      "Lanzar y recoger objetos.",
      "Aplaudir o dar palmadas.",
      "Empezar a usar cucharas con ayuda.",
      "Mantener equilibrio momentáneo de pie.",
    ],
    imagen: "./desarrollo_motor1.jpg",
    imagenGrande: "./desarrollo_motor1.jpg",
  },
  {
    rango: "12-18 meses",
    descripcion: [
      "Caminar de manera independiente.",
      "Subir escalones con ayuda.",
      "Patear una pelota hacia adelante.",
      "Llevar objetos pequeños de un lugar a otro.",
      "Empujar y jalar juguetes con ruedas.",
      "Levantar brazos para alcanzar objetos.",
      "Agacharse y levantarse sin ayuda.",
      "Imitar movimientos de adultos.",
      "Correr distancias cortas.",
      "Comenzar a saltar con ambos pies.",
    ],
    imagen: "./desarrollo_motor2.jpg",
    imagenGrande: "./desarrollo_motor2.jpg",
  },
  {
    rango: "18-24 meses",
    descripcion: [
      "Correr sin caerse.",
      "Pararse sobre un pie por unos segundos.",
      "Usar cucharas y tenedores para comer.",
      "Subir y bajar escalones sin ayuda.",
      "Saltar con ambos pies al mismo tiempo.",
      "Trepar estructuras bajas de juegos.",
      "Lanzar y atrapar pelotas pequeñas.",
      "Empezar a pedalear triciclo pequeño.",
      "Levantar objetos pesados con supervisión.",
      "Caminar hacia atrás.",
    ],
    imagen: "./desarrollo_motor3.jpg",
    imagenGrande: "./desarrollo_motor3.jpg",
  },
  {
    rango: "2-3 años",
    descripcion: [
      "Caminar hacia atrás sin perder equilibrio.",
      "Saltar con ambos pies de manera controlada.",
      "Comenzar a pedalear triciclo.",
      "Mantener equilibrio al pararse en un pie unos segundos.",
      "Subir y bajar escaleras alternando pies.",
      "Empujar y tirar juguetes con precisión.",
      "Lanzar y atrapar pelotas medianas.",
      "Subir y bajar del mobiliario bajo con seguridad.",
      "Saltar de un escalón pequeño.",
      "Correr alrededor de obstáculos sin caerse.",
    ],
    imagen: "./desarrollo_motor4.jpg",
    imagenGrande: "./desarrollo_motor4.jpg",
  },
  {
    rango: "3-5 años",
    descripcion: [
      "Correr en línea recta y girar rápidamente.",
      "Saltar hacia adelante y hacia atrás.",
      "Utilizar tijeras con precisión.",
      "Trepar estructuras de juegos medianas.",
      "Saltar con un pie y luego con el otro.",
      "Lanzar y atrapar pelotas grandes.",
      "Mantener equilibrio al caminar por una línea recta.",
      "Subir y bajar escaleras sin apoyo.",
      "Saltar desde altura baja con seguridad.",
      "Participar en juegos que requieran coordinación motora.",
    ],
    imagen: "./desarrollo_motor5.jpg",
    imagenGrande: "./desarrollo_motor5.jpg",
  },
];

const edadesLenguaje = [
  {
    rango: "0-6 meses",
    descripcion: [
      "Gorgojeo y sonidos guturales.",
      "Reacción a la voz de los padres.",
      "Balbuceo inicial.",
      "Sonrisa y gestos para comunicarse.",
      "Reconocimiento de tonos de voz.",
      "Imitación de sonidos simples.",
      "Respuesta a estímulos auditivos.",
      "Llorar para expresar necesidades.",
      "Atención a conversaciones cercanas.",
      "Diferenciación de voces familiares.",
    ],
    imagen: "./desarrollo_lenguaje.jpg",
    imagenGrande: "./desarrollo_lenguaje.jpg",
  },
  {
    rango: "6-12 meses",
    descripcion: [
      "Balbuceo con sílabas repetidas (mamá, papá).",
      "Reacción a órdenes simples.",
      "Imitación de sonidos y gestos.",
      "Uso de gestos para señalar objetos.",
      "Reconocimiento de palabras simples.",
      "Producción de sonidos variados.",
      "Responde a su nombre.",
      "Empieza a usar sonidos con significado.",
      "Se interesa por historias cortas.",
      "Reconoce entonación y emoción en la voz.",
    ],
    imagen: "./desarrollo_lenguaje1.jpg",
    imagenGrande: "./desarrollo_lenguaje1.jpg",
  },
  {
    rango: "12-18 meses",
    descripcion: [
      "Dice primeras palabras con significado.",
      "Reconoce nombres de objetos y personas.",
      "Sigue instrucciones simples.",
      "Imita palabras de adultos.",
      "Combinación de palabras simples.",
      "Señala para pedir o mostrar cosas.",
      "Entiende conceptos básicos (dentro/fuera).",
      "Participa en juegos de palabras simples.",
      "Empieza a nombrar partes del cuerpo.",
      "Reconoce canciones o rimas.",
    ],
    imagen: "./desarrollo_lenguaje2.jpg",
    imagenGrande: "./desarrollo_lenguaje2.jpg",
  },
  {
    rango: "18-24 meses",
    descripcion: [
      "Frases de 2-3 palabras.",
      "Comprende órdenes de dos pasos.",
      "Expresa necesidades y deseos.",
      "Usa pronombres simples (yo, tú).",
      "Pregunta con palabras como 'qué' y 'dónde'.",
      "Reconoce y nombra emociones básicas.",
      "Amplía vocabulario rápidamente.",
      "Usa plurales y verbos simples.",
      "Participa en pequeñas conversaciones.",
      "Empieza a narrar experiencias simples.",
    ],
    imagen: "./desarrollo_lenguaje3.jpg",
    imagenGrande: "./desarrollo_lenguaje3.jpg",
  },
  {
    rango: "2-3 años",
    descripcion: [
      "Construye frases de 3-4 palabras.",
      "Usa preguntas simples.",
      "Comprende conceptos de tiempo básicos (ayer, hoy).",
      "Cuenta historias cortas.",
      "Explica lo que ve o siente.",
      "Aprende palabras nuevas rápidamente.",
      "Usa plurales, tiempos verbales simples.",
      "Participa activamente en juegos verbales.",
      "Reconoce letras y sonidos básicos.",
      "Empieza a usar conectores simples (y, pero).",
    ],
    imagen: "./desarrollo_lenguaje4.jpg",
    imagenGrande: "./desarrollo_lenguaje4.jpg",
  },
  {
    rango: "3-5 años",
    descripcion: [
      "Frases completas y coherentes.",
      "Cuenta historias con secuencia lógica.",
      "Usa vocabulario amplio y descriptivo.",
      "Comprende instrucciones complejas.",
      "Participa en conversaciones con adultos y pares.",
      "Hace preguntas complejas (por qué, cómo).",
      "Puede narrar experiencias del pasado y futuro.",
      "Usa correctamente tiempos verbales básicos.",
      "Comprende cuentos y puede resumirlos.",
      "Inicia la lectura de palabras simples.",
    ],
    imagen: "./desarrollo_lenguaje5.jpg",
    imagenGrande: "./desarrollo_lenguaje5.jpg",
  },
];

const edadesCognitivo = [
  {
    rango: "0-6 meses",
    descripcion: [
      "Observa y sigue objetos con la vista.",
      "Reconoce caras y voces familiares.",
      "Responde a estímulos visuales y auditivos.",
      "Muestra curiosidad por nuevas sensaciones.",
      "Imita expresiones simples de adultos.",
      "Explora con manos y boca los objetos.",
      "Diferencia entre luz y sombra.",
      "Reacciona ante sonidos distintos.",
      "Empieza a anticipar rutinas simples.",
      "Reconoce emociones básicas en las personas cercanas."
    ],
    imagen: "./desarrollo_cognitivo.jpg",
    imagenGrande: "./desarrollo_cognitivo.jpg",
  },
  {
    rango: "6-12 meses",
    descripcion: [
      "Busca objetos que caen fuera de su vista.",
      "Imita acciones simples de adultos.",
      "Reconoce su nombre y palabras comunes.",
      "Explora objetos golpeándolos, sacudiéndolos o tirándolos.",
      "Empieza a comprender causa-efecto.",
      "Responde a instrucciones simples.",
      "Muestra preferencia por ciertos juguetes.",
      "Explora texturas y sonidos de manera activa.",
      "Desarrolla memoria a corto plazo.",
      "Reconoce objetos familiares en fotos o videos."
    ],
    imagen: "./desarrollo_cognitivo1.jpg",
    imagenGrande: "./desarrollo_cognitivo1.jpg",
  },
  {
    rango: "12-18 meses",
    descripcion: [
      "Resuelve problemas simples como encajar piezas.",
      "Comprende instrucciones de uno o dos pasos.",
      "Reconoce su imagen en el espejo.",
      "Imita juegos de adultos (limpiar, cocinar).",
      "Clasifica objetos por tamaño o forma.",
      "Explora causas y efectos de manera intencional.",
      "Expande vocabulario y comprensión de conceptos básicos.",
      "Participa en juegos de imitación.",
      "Recuerda dónde se guardan objetos habituales.",
      "Muestra preferencias y elecciones simples."
    ],
    imagen: "./desarrollo_cognitivo2.jpg",
    imagenGrande: "./desarrollo_cognitivo2.jpg",
  },
  {
    rango: "18-24 meses",
    descripcion: [
      "Usa objetos de manera funcional (cepillo, cubiertos).",
      "Comienza a reconocer colores y formas básicas.",
      "Resuelve rompecabezas simples de 2-3 piezas.",
      "Sigue instrucciones de dos pasos sin ayuda.",
      "Muestra curiosidad por nuevas actividades.",
      "Empieza a entender conceptos de cantidad y tamaño.",
      "Relaciona causa y efecto en acciones cotidianas.",
      "Imita juegos simbólicos más complejos.",
      "Recuerda la ubicación de objetos familiares.",
      "Participa activamente en juegos de memoria simples."
    ],
    imagen: "./desarrollo_cognitivo3.jpg",
    imagenGrande: "./desarrollo_cognitivo3.jpg",
  },
  {
    rango: "2-3 años",
    descripcion: [
      "Comienza a clasificar objetos por color y forma.",
      "Cuenta hasta 2-3 objetos.",
      "Resuelve rompecabezas más complejos (4-6 piezas).",
      "Comienza a usar conceptos de tiempo simples (ahora, luego).",
      "Imita historias o situaciones de adultos.",
      "Comienza a reconocer letras y números.",
      "Realiza juegos de memoria más prolongados.",
      "Expresa ideas simples mediante preguntas y comentarios.",
      "Comprende instrucciones de 3 pasos.",
      "Participa en juegos simbólicos y de rol."
    ],
    imagen: "./desarrollo_cognitivo4.jpg",
    imagenGrande: "./desarrollo_cognitivo4.jpg",
  },
  {
    rango: "3-5 años",
    descripcion: [
      "Resuelve rompecabezas de varias piezas (6-12).",
      "Comienza a entender conceptos de tiempo (ayer, hoy, mañana).",
      "Cuenta objetos hasta 10.",
      "Clasifica y organiza objetos según múltiples características.",
      "Participa en juegos de memoria más elaborados.",
      "Reconoce letras y números básicos.",
      "Expresa pensamientos y emociones con mayor claridad.",
      "Imita situaciones complejas en juegos de rol.",
      "Comprende relaciones causa-efecto más abstractas.",
      "Muestra curiosidad por explorar y aprender cosas nuevas."
    ],
    imagen: "./desarrollo_cognitivo5.jpg",
    imagenGrande: "./desarrollo_cognitivo5.jpg",
  },
];


const edadesSocial = [
  {
    rango: "0-6 meses",
    descripcion: [
      "Sonreír en respuesta a estímulos sociales.",
      "Mostrar preferencia por el contacto visual con los cuidadores.",
      "Reconocer voces familiares.",
      "Reaccionar al tacto y abrazos.",
      "Mostrar señales de malestar o comodidad (llorar, calmarse).",
      "Emitir sonidos o gorgojeos en interacción.",
      "Seguir objetos o personas con la mirada.",
      "Imitar expresiones faciales simples.",
      "Mostrar interés por la voz de los padres.",
      "Responder a cambios emocionales de los cuidadores."
    ],
    imagen: "./desarrollo_social.jpg",
    imagenGrande: "./desarrollo_social.jpg",
  },
  {
    rango: "6-12 meses",
    descripcion: [
      "Mostrar alegría al interactuar con los demás.",
      "Mostrar ansiedad por la separación de los cuidadores.",
      "Comenzar a imitar acciones y expresiones faciales.",
      "Reaccionar a emociones de otros niños.",
      "Demostrar preferencia por ciertos adultos o niños.",
      "Intentar comunicarse con gestos y sonidos.",
      "Explorar objetos mientras observa a los demás.",
      "Iniciar juego de interacción simple (palmadas, juegos de escondite).",
      "Responder a su nombre y a instrucciones simples.",
      "Reconocer y expresar emociones básicas como alegría o tristeza."
    ],
    imagen: "./desarrollo_social1.jpg",
    imagenGrande: "./desarrollo_social1.jpg",
  },
  {
    rango: "12-18 meses",
    descripcion: [
      "Mostrar afecto hacia familiares y cuidadores.",
      "Comenzar a jugar al lado de otros niños.",
      "Experimentar emociones como la alegría, frustración y tristeza.",
      "Imitar acciones de adultos o niños mayores.",
      "Participar en juegos simples de interacción.",
      "Seguir instrucciones básicas de dos pasos.",
      "Demostrar curiosidad social al observar a otros.",
      "Expresar desacuerdo o frustración de manera evidente.",
      "Usar gestos para pedir ayuda o atención.",
      "Reaccionar ante las emociones de otros niños (consolar o imitar)."
    ],
    imagen: "./desarrollo_social2.jpg",
    imagenGrande: "./desarrollo_social2.jpg",
  },
  {
    rango: "18-24 meses",
    descripcion: [
      "Compartir juguetes y mostrar interés por la interacción social.",
      "Imitar acciones y comportamientos de adultos.",
      "Mostrar empatía hacia otros niños y adultos.",
      "Iniciar juego simbólico simple.",
      "Seguir reglas básicas en juegos con adultos.",
      "Reconocer emociones propias y ajenas.",
      "Usar palabras simples para expresar necesidades sociales.",
      "Participar en interacciones breves con otros niños.",
      "Responder a elogios o reprimendas de manera consciente.",
      "Mostrar preferencias por amigos o compañeros de juego."
    ],
    imagen: "./desarrollo_social3.jpg",
    imagenGrande: "./desarrollo_social3.jpg",
  },
  {
    rango: "2-3 años",
    descripcion: [
      "Comenzar a jugar cooperativamente con otros niños.",
      "Mostrar interés en imitar roles de adultos.",
      "Expresar emociones de manera más compleja y verbal.",
      "Iniciar resolución de conflictos simples.",
      "Seguir reglas en juegos de grupo.",
      "Demostrar solidaridad y ayuda a otros niños.",
      "Participar en juegos simbólicos más elaborados.",
      "Identificar y nombrar emociones básicas.",
      "Desarrollar interacción social en actividades estructuradas.",
      "Mostrar iniciativa para invitar a otros niños a jugar."
    ],
    imagen: "./desarrollo_social4.jpg",
    imagenGrande: "./desarrollo_social4.jpg",
  },
  {
    rango: "3-5 años",
    descripcion: [
      "Jugar cooperativamente en grupos pequeños.",
      "Mostrar interés en compartir y ayudar a otros.",
      "Desarrollar amistades y mostrar empatía hacia compañeros.",
      "Seguir reglas más complejas en juegos grupales.",
      "Resolver conflictos sociales simples de manera autónoma.",
      "Expresar emociones y necesidades verbalmente.",
      "Participar en actividades de grupo con organización.",
      "Iniciar conversaciones con otros niños y adultos.",
      "Mostrar comprensión de turnos y colaboración.",
      "Demostrar respeto y consideración hacia sentimientos ajenos."
    ],
    imagen: "./desarrollo_social5.jpg",
    imagenGrande: "./desarrollo_social5.jpg",
  },
];

const edadesHabilidades = [
  {
    rango: "0-6 meses",
    descripcion: [
      "Reconocer y responder a la rutina diaria (comida, sueño, baño).",
      "Mostrar preferencias por ciertos juguetes o actividades.",
      "Comenzar a desarrollar patrones de sueño regulares.",
      "Reaccionar a cambios de postura o posición.",
      "Coordinar movimientos de manos y boca al alimentarse.",
      "Mantener contacto visual con cuidadores durante la alimentación.",
      "Explorar objetos con manos y boca.",
      "Mostrar reflejos de agarre.",
      "Seguir objetos con la mirada.",
      "Reaccionar a sonidos familiares."
    ],
    imagen: "./desarrollo_habilidades.jpg",
    imagenGrande: "./desarrollo_habilidades.jpg",
  },
  {
    rango: "6-12 meses",
    descripcion: [
      "Comer alimentos sólidos y beber de una taza con ayuda.",
      "Participar en rutinas básicas de cuidado personal (lavarse manos, cepillarse dientes con ayuda).",
      "Comenzar a desarrollar autonomía al jugar (explorar juguetes, tomar decisiones simples).",
      "Intentar vestirse con ayuda mínima.",
      "Girar y moverse de manera más coordinada.",
      "Sostener objetos y transferirlos entre manos.",
      "Imitar acciones simples de adultos.",
      "Reconocer objetos familiares por nombre.",
      "Participar en la hora del baño de manera cooperativa.",
      "Intentar alimentarse con cuchara o dedo con supervisión."
    ],
    imagen: "./desarrollo_habilidades1.jpg",
    imagenGrande: "./desarrollo_habilidades1.jpg",
  },
  {
    rango: "12-18 meses",
    descripcion: [
      "Comenzar a usar cubiertos para comer con ayuda.",
      "Mostrar interés en el control de esfínteres.",
      "Participar en rutinas de vestimenta y aseo personal.",
      "Imitar tareas domésticas simples (guardar juguetes).",
      "Intentar ponerse zapatos y ropa con ayuda mínima.",
      "Lavar y secar manos con supervisión.",
      "Beber de vaso sin derramar demasiado.",
      "Reconocer objetos de uso diario (cepillo, taza, cubiertos).",
      "Ayudar a colocar la mesa de manera básica.",
      "Seguir instrucciones simples de rutina diaria."
    ],
    imagen: "./desarrollo_habilidades2.jpg",
    imagenGrande: "./desarrollo_habilidades2.jpg",
  },
  {
    rango: "18-24 meses",
    descripcion: [
      "Vestirse y desvestirse con ayuda.",
      "Comer de manera más independiente.",
      "Usar el inodoro para orinar o defecar con ayuda y supervisión.",
      "Participar en la limpieza de juguetes y objetos.",
      "Lavar manos y cara con supervisión mínima.",
      "Seguir rutinas simples de cuidado personal sin recordar constantemente.",
      "Beber y comer de manera autónoma la mayor parte del tiempo.",
      "Ayudar a recoger utensilios y platos simples.",
      "Reconocer necesidades básicas (sed, hambre, sueño) y comunicarlo.",
      "Comenzar a organizar sus juguetes después de jugar."
    ],
    imagen: "./desarrollo_habilidades3.jpg",
    imagenGrande: "./desarrollo_habilidades3.jpg",
  },
  {
    rango: "2-3 años",
    descripcion: [
      "Comenzar a lavarse las manos y cepillarse los dientes de manera independiente.",
      "Vestirse con ayuda para prendas más complejas.",
      "Usar el inodoro de manera más autónoma, especialmente durante el día.",
      "Participar en rutinas básicas de limpieza (recoger juguetes, poner ropa en cesto).",
      "Ayudar en pequeñas tareas domésticas (servir agua, llevar platos).",
      "Reconocer y nombrar objetos de higiene y cuidado personal.",
      "Seguir rutinas de alimentación sin supervisión constante.",
      "Comenzar a tomar decisiones simples sobre ropa o juguetes.",
      "Desarrollar hábitos de orden en su espacio de juego.",
      "Seguir instrucciones de dos pasos relacionadas con cuidado personal."
    ],
    imagen: "./desarrollo_habilidades4.jpg",
    imagenGrande: "./desarrollo_habilidades4.jpg",
  },
  {
    rango: "3-5 años",
    descripcion: [
      "Vestirse de manera independiente, incluyendo abotonarse y atarse los zapatos.",
      "Usar el inodoro de manera completamente autónoma, tanto de día como de noche.",
      "Participar en actividades de cuidado del hogar de manera básica (guardar juguetes, ayudar a preparar alimentos sencillos).",
      "Preparar su mochila o ropa para la escuela con supervisión mínima.",
      "Servir agua o comida simple de manera autónoma.",
      "Seguir rutinas de higiene de manera consistente.",
      "Ayudar a organizar su espacio de juegos y materiales.",
      "Reconocer la necesidad de higiene personal y actuar en consecuencia.",
      "Seguir instrucciones de tres pasos relacionadas con tareas domésticas.",
      "Comenzar a planificar acciones simples de cuidado personal y juegos."
    ],
    imagen: "./desarrollo_habilidades5.jpg",
    imagenGrande: "./desarrollo_habilidades5.jpg",
  }
];

// ======== COMPONENTE GENERICO ========
function Desarrollo({ titulo, colorFondo, colorTexto, videoSrc, edades, resumen }) {
  const [desplegado, setDesplegado] = useState(false);
  const [abiertos, setAbiertos] = useState(edades.map(() => false));
  const refs = useRef([]); // referencias a cada rango

  const toggleRango = (index) => {
    const nuevosAbiertos = [...abiertos];
    nuevosAbiertos[index] = !nuevosAbiertos[index];
    setAbiertos(nuevosAbiertos);

    // Scroll suave al abrir un rango
    if (!abiertos[index] && refs.current[index]) {
      setTimeout(() => {
        refs.current[index].scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }, 400); // espera un poco a que termine la animación
    }
  };

  const coloresContenedor = {
  Motor: "bg-blue-50 border-t-4 border-blue-400",
  Lenguaje: "bg-green-50 border-t-4 border-green-400",
  Cognitivo: "bg-purple-50 border-t-4 border-purple-400",
  "Social y Emocional": "bg-pink-50 border-t-4 border-pink-400",
  "Habilidades Adaptativas": "bg-yellow-50 border-t-4 border-yellow-400",
};

   return (
    <motion.div
      className="container mx-auto px-6 py-6"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      {/* CARD PRINCIPAL CON RESUMEN Y VIDEO */}
<motion.div
  className={`rounded-xl shadow-lg p-8 mb-10 transition-all duration-500 ${coloresContenedor[titulo]}`}
  initial={{ opacity: 0, scale: 0.95 }}
  animate={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.5 }}
>

        <h2 className={`text-3xl font-bold ${colorTexto} mb-6 text-center`}>
          {titulo}
        </h2>

        <div className="flex flex-col md:flex-row items-start md:items-center justify-center gap-8">
          <div className="flex-1 md:max-w-lg text-left">
            <ul className={`list-disc list-inside ${colorTexto}`}>
              {resumen.map((hito, i) => (
                <motion.li
                  key={i}
                  className="mb-2"
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                >
                  {hito}
                </motion.li>
              ))}
            </ul>
          </div>

          {videoSrc && (
            <motion.div
              className="flex-1 md:max-w-md w-full"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <video
                src={videoSrc}
                controls
                className="w-full rounded-lg shadow-md"
              />
            </motion.div>
          )}
        </div>

        <div className="flex justify-center mt-6">
          <p
            className={`${colorTexto} mb-6 font-semibold text-center max-w-2xl mx-auto`}
          >
            Conoce los hitos de {titulo} de tu hijo desde los 0 hasta los 5
            años. Haz clic en "Ver más" para explorar cada rango de edad y sus
            actividades recomendadas.
          </p>
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={() => setDesplegado(!desplegado)}
            className={`${colorFondo.replace(
              "-100",
              "-500"
            )} hover:opacity-90 text-white py-2 px-8 rounded-full shadow-lg`}
          >
            {desplegado ? "Ver menos" : "Ver más"}
          </button>
        </div>
      </motion.div>

      {/* DETALLE DE RANGOS DE EDAD */}
      <AnimatePresence>
        {desplegado &&
          edades.map((edad, idx) => (
            <motion.div
              key={edad.rango}
              ref={(el) => (refs.current[idx] = el)} // referencia al div
              className={`${coloresRango[titulo]} rounded-lg shadow-md mb-6 overflow-hidden`}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <button
                className={`w-full flex items-center justify-between px-6 py-4 text-left focus:outline-none transition-colors duration-300
                ${coloresRango[titulo]} ${coloresHover[titulo]}`}
                onClick={() => toggleRango(idx)}
              >
                <div className="flex items-center gap-4">
                  {!abiertos[idx] && (
                    <motion.img
                      src={edad.imagen}
                      alt={edad.rango}
                      className="w-24 h-24 object-cover rounded-lg"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <span className="text-xl font-semibold text-gray-800">
                    {edad.rango}
                  </span>
                </div>
                <motion.span
                  className="text-2xl"
                  animate={{ rotate: abiertos[idx] ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  ▼
                </motion.span>
              </button>

              <AnimatePresence>
                {abiertos[idx] && (
                  <motion.div
                    className="px-6 py-4 flex flex-col md:flex-row gap-6"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <ul className="list-disc list-inside text-gray-700 flex-1">
                      {edad.descripcion.map((hito, i) => (
                        <motion.li
                          key={i}
                          className="mb-1"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: i * 0.05 }}
                        >
                          {hito}
                        </motion.li>
                      ))}
                    </ul>
                    <div className="flex-1 flex items-start">
                      <motion.img
                        src={edad.imagenGrande}
                        alt={edad.rango}
                        className="w-auto max-h-[300px] rounded-lg"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4 }}
                      />
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
      </AnimatePresence>
    </motion.div>
  );
}

// ======== CARDS DE SELECCIÓN ========
const tiposDesarrollo = [
  { nombre: "Motor", color: "bg-blue-100", texto: "text-blue-800", video: "./desarrollo_motor.mp4", edades: edadesMotor, resumen: resumenMotor },
  { nombre: "Lenguaje", color: "bg-green-100", texto: "text-green-800", video: "./desarrollo_lenguaje.mp4", edades: edadesLenguaje, resumen: resumenLenguaje },
  { nombre: "Cognitivo", color: "bg-purple-100", texto: "text-purple-800", video: "./desarrollo_cognitivo.mp4", edades: edadesCognitivo, resumen: resumenCognitivo },
  { nombre: "Social y Emocional", color: "bg-pink-100", texto: "text-pink-800", video: "./desarrollo_social.mp4", edades: edadesSocial, resumen: resumenSocial },
  { nombre: "Habilidades Adaptativas", color: "bg-yellow-100", texto: "text-yellow-800", video: "./desarrollo_habilidades.mp4", edades: edadesHabilidades, resumen: resumenHabilidades },
];

const coloresRango = {
  Motor: "bg-blue-100",
  Lenguaje: "bg-green-100",
  Cognitivo: "bg-purple-100",
  "Social y Emocional": "bg-pink-100",
  "Habilidades Adaptativas": "bg-yellow-100",
};

const coloresHover = {
  Motor: "hover:bg-blue-200",
  Lenguaje: "hover:bg-green-200",
  Cognitivo: "hover:bg-purple-200",
  "Social y Emocional": "hover:bg-pink-200",
  "Habilidades Adaptativas": "hover:bg-yellow-200",
};


// ======== COMPONENTE PRINCIPAL ========
function Hitos() {
  const [seleccionado, setSeleccionado] = useState("Motor");
  const desarrolloActual = tiposDesarrollo.find((d) => d.nombre === seleccionado);

 

  const coloresBotonesInactivos = {
  Motor: "bg-white border-2 border-blue-500 text-blue-600",
  Lenguaje: "bg-white border-2 border-green-500 text-green-600",
  Cognitivo: "bg-white border-2 border-purple-500 text-purple-600",
  "Social y Emocional": "bg-white border-2 border-pink-500 text-pink-600",
  "Habilidades Adaptativas": "bg-white border-2 border-yellow-500 text-yellow-600",
};

const coloresBotonesActivos = {
  Motor: "bg-blue-500 text-white shadow-md",
  Lenguaje: "bg-green-500 text-white shadow-md",
  Cognitivo: "bg-purple-500 text-white shadow-md",
  "Social y Emocional": "bg-pink-500 text-white shadow-md",
  "Habilidades Adaptativas": "bg-yellow-500 text-white shadow-md",
};

  return (
    <div className="container mx-auto px-6 py-6">
      {/* Título animado */}
      <motion.h1
        className="text-4xl font-bold text-center mb-10 text-blue-800 w-full"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Hitos del Desarrollo Infantil
      </motion.h1>

      {/* Subtítulo animado */}
      <motion.p
        className="text-lg md:text-xl max-w-3xl mx-auto mb-6 text-gray-700 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        Explora los hitos más importantes en el desarrollo de tu hijo, desde
        los primeros meses hasta la infancia.
      </motion.p>

      {/* CONTENEDOR DE BOTONES CON ANIMACIÓN EN CASCADA */}
<motion.div
  className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-6 text-center font-semibold"
  initial="hidden"
  animate="visible"
  variants={{
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }}
>
  {tiposDesarrollo.map((tipo) => (
    <motion.button
      key={tipo.nombre}
      onClick={() => setSeleccionado(tipo.nombre)}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300
        ${
          seleccionado === tipo.nombre
            ? coloresBotonesActivos[tipo.nombre]
            : coloresBotonesInactivos[tipo.nombre]
        }`}
    >
      {tipo.nombre}
    </motion.button>
  ))}
</motion.div>


      {/* RENDERIZAR EL DESARROLLO SELECCIONADO */}
      {desarrolloActual && (
        <Desarrollo
          key={desarrolloActual.nombre}
          titulo={desarrolloActual.nombre}
          colorFondo={desarrolloActual.color}
          colorTexto={desarrolloActual.texto}
          videoSrc={desarrolloActual.video}
          edades={desarrolloActual.edades}
          resumen={desarrolloActual.resumen}
        />
      )}
    </div>
  );
}


export default Hitos;


