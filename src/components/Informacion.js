import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download } from "lucide-react"; 



export default function Informacion() {
  const [rangoEdad, setRangoEdad] = useState("0-1");

  const informacionGeneral = {
    titulo: "Recursos para la Estimulación Temprana del Lenguaje",
    descripcion:
      "Explora actividades, videos, canciones y materiales educativos diseñados para estimular el desarrollo del lenguaje y las habilidades cognitivas de tu hijo. Selecciona el rango de edad para acceder al contenido correspondiente.",
  };

  const rangosLabel = {
    "0-1": "0 a 1 año",
    "1-2": "1 a 2 años",
    "2-3": "2 a 3 años",
    "3-5": "3 a 5 años",
  };

  const coloresContenedor = {
  "0-1": "bg-blue-50 border-t-4 border-blue-400",
  "1-2": "bg-green-50 border-t-4 border-green-400",
  "2-3": "bg-purple-50 border-t-4 border-purple-400",
  "3-5": "bg-pink-50 border-t-4 border-pink-400",
};

  const coloresBotonesActivos = {
  "0-1": "bg-blue-500 text-white shadow-lg border-2 border-blue-500",
  "1-2": "bg-green-500 text-white shadow-lg border-2 border-green-500",
  "2-3": "bg-purple-500 text-white shadow-lg border-2 border-purple-500",
  "3-5": "bg-pink-500 text-white shadow-lg border-2 border-pink-500",
};

const coloresBotonesInactivos = {
  "0-1": "bg-white text-blue-700 border-2 border-blue-300 hover:bg-blue-100",
  "1-2": "bg-white text-green-700 border-2 border-green-300 hover:bg-green-100",
  "2-3": "bg-white text-purple-700 border-2 border-purple-300 hover:bg-purple-100",
  "3-5": "bg-white text-pink-700 border-2 border-pink-300 hover:bg-pink-100",
};

const informacionData = {
  "0-1": {
    videosYouTube: [
      {
        src: "https://www.youtube.com/embed/QdknQCp6KPA",
        titulo: "Estimulación de Lenguaje de 0 a 6 meses",
      },
      {
        src: "https://www.youtube.com/embed/_SRH-g6AZn0?si=ShnMZKc8HmX_DIO8",
        titulo: "Estimulación de Lenguaje de 6 a 12 meses",
      },
    ],
    videosTikTok: [
      {
        src: "https://www.tiktok.com/embed/6901802490061147393",
        descripcion: "Estimulación auditiva y visual para bebés de 0 a 3 meses."
      },
      {
        src: "https://www.tiktok.com/embed/7261055603760549125",
        descripcion: "Juegos de imitación para bebés de 4 a 6 meses."
      },
      {
        src: "https://www.tiktok.com/embed/7355699489845431557",
        descripcion: "Canciones con gestos para bebés de 7 a 12 meses."
      },
    ],
    actividades: {
      iniciales: {
      lista: [
        "Hablar y cantar con diferentes tonos para captar la atención y fomentar la escucha activa.",
        "Mostrar libros con imágenes repetitivas para que el bebé reconozca y amplíe su vocabulario.",
        "Jugar a esconder y buscar objetos mientras se nombran para estimular la memoria y el lenguaje.",
        "Cantar canciones sencillas como 'Cabeza, hombros, rodillas y pies' con gestos para coordinación y lenguaje.",
        "Interactuar con distintas entonaciones al hablar para despertar curiosidad y atención."
      ],
      imagen: "/informacion/prelinguistica_0-6.jpg",
    },
    avanzadas: {
      lista: [
        "Realizar juegos de imitación de sonidos, gestos y acciones simples para reforzar la comunicación.",
        "Leer libros con palabras e imágenes repetitivas para estimular el reconocimiento de palabras.",
        "Esconder objetos y animar al bebé a encontrarlos mientras se nombran para desarrollar memoria y lenguaje.",
        "Cantar canciones con gestos y movimientos para coordinación y expresión verbal.",
        "Usar distintas entonaciones al hablar para mantener la atención y estimular la escucha activa."
      ],
      imagen: "/informacion/prelinguistica_7-12.jpg",
    }},
    canciones: [
      {
        titulo: "Hola ¿Cómo estás?",
        letra: "Hola hola hola cómo estás, yo muy bien y tú qué tal... Hola hola hola cómo estás, vamos a cantar.",
        beneficios: [
          "Aprender a saludar con 'hola'.",
          "Diferenciarse a sí mismo de alguien más.",
          "Identificar acciones como aplaudir, saltar, gritar o bailar.",
        ],
        video: "https://www.youtube.com/embed/7wTkHmpDE9k",
      },
      {
        titulo: "Vamos a mover las manos",
        letra: "Mis manitas se escondieron, yo no sé dónde estarán... suben suben hasta el cielo, bajan bajan hasta el suelo...",
        beneficios: [
          "Identificar partes de su cuerpo.",
          "Comprender diferencias como arriba/abajo, cielo/suelo.",
          "Mandar besitos y despedirse.",
        ],
        video: "https://www.youtube.com/embed/zThjbvTE8p8",
      },
      {
        titulo: "Cinco ratoncitos",
        letra: "5 ratoncitos de colita gris, mueven las orejas, mueven la nariz...",
        beneficios: [
          "Ampliar vocabulario con animales.",
          "Relacionar partes del cuerpo con un animal.",
          "Acciones como mover, comer, cerrar y dormir.",
        ],
        video: "https://www.youtube.com/embed/AOKtWbJBZQg",
      },
      {
        titulo: "Abejitas",
        letra: "Oye las abejas zumbando en el jardín... zum zum zum ¡déjame salir!",
        beneficios: [
          "Trabajar el fonema 's' mediante onomatopeyas.",
          "Hablar sobre el cuidado de las abejas y la naturaleza.",
        ],
        video: "https://www.youtube.com/embed/4SKy4WQJpkI",
      },
    ],
  },

  "1-2": {
    videosYouTube: [
      {
        src: "https://www.youtube.com/embed/oBmmApvo800",
        titulo: "Actividades para estimular el lenguaje: 1 a 2 años",
      },
    ],
    videosTikTok: [
      {
        src: "https://www.tiktok.com/embed/7062852518560206086",
        descripcion: "Juegos de imitación y vocabulario para niños de 1 a 2 años."
      },
      {
        src: "https://www.tiktok.com/embed/7372305460529138950",
        descripcion: "Canciones y rimas con gestos para reforzar el lenguaje."
      },
      {
        src: "https://www.tiktok.com/embed/7159656918422719749",
        descripcion: "Historias cortas y narración para estimular la comprensión."
      },
    ],
    actividades: {
    iniciales: {
      lista: [
    "Jugar a imitar acciones simples como saludar, aplaudir, saltar o bailar mientras se nombra la acción.",
    "Leer libros con imágenes y hacer preguntas sobre lo que se observa para desarrollar comprensión.",
    "Nombrar objetos, colores, partes del cuerpo y animales mientras se juega.",
    "Hablar durante las rutinas diarias como comer o vestirse para reforzar la comunicación.",
    "Cantar canciones con gestos y ritmo para fomentar la memoria y la atención.",
    "Relacionar palabras con imágenes u objetos reales mediante juegos de asociación.",
    "Hacer preguntas abiertas como '¿Qué ves aquí?' para estimular la expresión verbal.",
    "Inventar historias usando juguetes o figuras para estimular la imaginación.",
    "Dar órdenes simples como 'Trae tu pelota' o 'Dame el libro rojo' para practicar la comprensión de instrucciones.",
    "Jugar con bloques o encajables y nombrar los colores y formas mientras se construye.",
    "Repetir palabras y frases nuevas escuchadas en canciones o cuentos cortos.",
    "Usar títeres o muñecos para representar situaciones y fomentar el diálogo.",
    "Hacer juegos de sonidos con objetos cotidianos, como palmas, vasos o cucharas.",
    "Nombrar emociones mientras se muestran caras o expresiones en libros ilustrados.",
    "Explorar texturas y objetos nuevos y describirlos en voz alta para ampliar vocabulario.",
    "Jugar a seguir instrucciones de 2 pasos, como 'Toma la pelota y ponla en la caja'.",
    "Jugar con canciones que incluyan movimientos de manos, pies o cuerpo, mientras se dice el nombre de cada parte.",
    "Crear pequeñas rutinas de juego diario donde se nombren objetos y acciones para reforzar memoria y lenguaje."
  
      ],
      imagen: "/informacion/prelinguistica_12-24.jpg",
    }},
    canciones: [
      {
        titulo: "Un día con Leo",
        letra: "Este cuento interactivo guía a los niños en sus rutinas diarias con un puppet como protagonista. Leo enseña hábitos saludables como vestirse y lavarse los dientes.",
        beneficios: [
          "Fomenta la comunicación verbal.",
          "Refuerza el aprendizaje con repetición de palabras clave.",
          "Estimula la participación activa y la comprensión.",
        ],
        video: "https://www.youtube.com/embed/W2F2BYeY0Xk",
      },
      {
        titulo: "Mi día de suerte",
        letra: "Historia de un cerdito y un zorro que enseña la astucia y resolución de problemas.",
        beneficios: [
          "Expande el vocabulario con nuevas palabras.",
          "Mejora la comprensión de estructuras narrativas.",
          "Fomenta el pensamiento crítico y la creatividad.",
        ],
        video: "https://www.youtube.com/embed/LFvuwEwZI94",
pdf: [
    {
      nombre: "Mi día de suerte",
      link: "/informacion/mi_dia_de_suerte.pdf",
    }
  ],      },
    ],
    pdfs: [
      {
        nombre: "5 Sentidos",
        link: "/informacion/5_sentidos.pdf",
        imagen: "/informacion/5_sentidos.jpg",
      },
      {
        nombre: "Onomatopeyas 1",
        link: "/informacion/onomatopeyas_1.pdf",
        imagen: "/informacion/onomatopeyas1.jpg",
      },
      {
        nombre: "Onomatopeyas 2",
        link: "/informacion/Onomatopeyas_2.pdf",
        imagen: "/informacion/onomatopeyas2.jpg",
      },
      {
        nombre: "Onomatopeyas 3",
        link: "/informacion/Onomatopeyas_3.pdf",
        imagen: "/informacion/onomatopeyas3.jpg",
      },
      {
        nombre: "Onomatopeyas 4",
        link: "/informacion/Onomatopeyas_4.pdf",
        imagen: "/informacion/onomatopeyas4.jpg",
      },
      {
        nombre: "Onomatopeyas 5",
        link: "/informacion/Onomatopeyas_5.pdf",
        imagen: "/informacion/onomatopeyas5.jpg",
      },
    ],
  },

"2-3": {
  videosYouTube: [
    {
      src: "https://www.youtube.com/embed/u1E15u2uXho?si=4E62yY5iqQBLHjNG",
      titulo: "Terapia de lenguaje para Niños de 2 a 3 años",
    },
  ],
  videosTikTok: [
    {
      src: "https://www.tiktok.com/embed/7253041355595828485",
      descripcion: "¿Tu peque habla? ¿Imita? ¿Comprende? Sigue instrucciones y estimula el lenguaje.",
    },
    {
      src: "https://www.tiktok.com/embed/7284814688133631238",
      descripcion: "Actividades de lenguaje 2 a 3 años en casa.",
    },
    {
      src: "https://www.tiktok.com/embed/7377504260684008709",
      descripcion: "Lo que los niños de 2 a 3 años deberían decir. Prueba con tu hijo.",
    },
  ],
  actividades: {
        iniciales: {
         lista: [
  "Lectura de cuentos cortos y coloridos con imágenes llamativas.",
  "Juegos de vocabulario: nombrar objetos, animales, colores y partes del cuerpo.",
  "Conversaciones dirigidas sobre experiencias recientes y emociones.",
  "Preguntas abiertas que fomenten reflexión y razonamiento.",
  "Juegos de clasificación de objetos por formas, tamaños, colores o funciones.",
  "Narración de historias con juguetes, dibujos o figuras de acción.",
  "Canciones y rimas con movimientos para mejorar memoria y ritmo del lenguaje.",
  "Juegos de roles con juguetes o disfraces.",
  "Escucha activa para fomentar confianza y comunicación efectiva.",
  "Exploración de sonidos y creación de palabras nuevas o nombres imaginarios.",
  "Repetir palabras o frases nuevas escuchadas en canciones o cuentos cortos.",
  "Hacer preguntas simples sobre imágenes en libros para estimular la observación.",
  "Representar cuentos usando títeres o muñecos para fomentar el diálogo.",
  "Crear pequeñas historias usando dibujos o figuras para ejercitar la imaginación.",
  "Jugar con movimientos corporales y nombrar cada acción (saltar, girar, tocar).",
  "Explorar objetos nuevos y describirlos en voz alta para ampliar vocabulario.",
  "Realizar pequeñas instrucciones de 2 pasos, como 'Toma la pelota y ponla en la caja'.",
  "Cantar canciones con gestos de manos, pies o cuerpo, reforzando vocabulario y coordinación."
],
          imagen: "/informacion/etapa_linguistica_2-3.jpg",
        },
      },
  canciones: [
    {
      titulo: "Actividades para estimular el lenguaje 2 a 3 años (materiales gratis)",
      video: "https://www.youtube.com/embed/ZV_X1WrS0qE?si=tfMvlYS7bUOEw7b6",
      pdf: [
        { 
          nombre: "Actividad vaca", 
          link: "/informacion/Actividad_vaca.pdf" },
        { 
          nombre: "Actividad dado", 
          link: "/informacion/Actividad_dado.pdf" },
        { 
          nombre: "Actividad de colores", 
          link: "/informacion/Actividad_colores.pdf" },
      ],
    },
    {
      titulo: "Actividades de lenguaje 2 y 3 años | MATERIAL DIDACTICO",
      video: "https://www.youtube.com/embed/AWEpT6SNH7A?si=PQGKAuNAVRcbBVP4",
      pdf: [
        { 
          nombre: "Actividad de lavar ropa", link: "/informacion/Actividad_lavar_ropa.pdf" },
        { 
          nombre: "Actividad vistiendo", link: "/informacion/Vistiendo.pdf" },
      ],
    },
  ],
  pdfs: [
    { 
      nombre: "Colores", 
      link: "/informacion/Colores.pdf", 
      imagen: "/informacion/Colores.jpg" },
    { 
      nombre: "Números", 
      link: "/informacion/Numeros.pdf", 
      imagen: "/informacion/Numeros.jpg" },
    { 
      nombre: "ABC", 
      link: "/informacion/ABC.pdf", 
      imagen: "/informacion/ABC.jpg" },
    { 
      nombre: "Emociones", 
      link: "/informacion/Emociones.pdf", 
      imagen: "/informacion/emociones.jpg" },
    { 
      nombre: "Partes del cuerpo ingles y español", 
      link: "/informacion/Partes_del_cuerpo.pdf", 
      imagen: "/informacion/Partes_del_cuerpo.jpg" },
    { 
      nombre: "Familia en ingles y español", 
      link: "/informacion/Familia.pdf", 
      imagen: "/informacion/familia.jpg" },
  ],
},


  "3-5": {
    videosYouTube: [
      {
        src: "https://www.youtube.com/embed/ecZ9Jpctieo?si=wsZJ9dc8XeJmr8jF",
        titulo: "Juegos para la estimulación del lenguaje en niños 3-5 años",
      },
    ],
    videosTikTok: [
      {
        src: "https://www.tiktok.com/embed/7253041355595828485",
        descripcion: "¿Tu peque habla? ¿Imita? ¿Comprende? Pon estas ideas en práctica y estimula el lenguaje."
      },
      {
        src: "https://www.tiktok.com/embed/7397036017871572230",
        descripcion: "Potencia habilidades e inteligencia con actividades didácticas para niños de 3 a 11 años."
      },
      {
        src: "https://www.tiktok.com/embed/7396425279612275973",
        descripcion: "Actividades para la concentración y paciencia en niños de 3 a 5 años."
      },
    ],
    actividades: {
      iniciales: {
        lista: [
      "Leer cuentos ilustrados y animar al niño a identificar personajes, acciones y escenarios",
    "Mantener conversaciones sobre experiencias del día, emociones y eventos recientes",
    "Nombrar objetos, colores, números y formas durante juegos y actividades cotidianas",
    "Inventar historias en las que el niño agregue personajes, lugares o acciones imaginarias",
    "Resolver adivinanzas, trabalenguas y pequeños acertijos para estimular la atención y memoria",
    "Realizar juegos de roles usando disfraces, muñecos o figuras para simular situaciones reales",
    "Dibujar, colorear y crear manualidades usando diferentes materiales y texturas",
    "Cantar canciones, realizar movimientos coordinados y combinar música con gestos y acciones",
    "Asociar palabras con imágenes, conceptos opuestos, categorías o secuencias de objetos",
    "Narrar cuentos completos incluyendo inicio, desarrollo y final con participación activa",
    "Jugar a memorizar secuencias de palabras, números o imágenes de manera divertida",
    "Contar experiencias propias, describir objetos y expresar opiniones en grupo o individualmente",
    "Representar pequeños diálogos o situaciones cotidianas con muñecos, familiares o amigos",
    "Agrupar palabras o elementos por categorías como animales, alimentos o lugares",
    "Crear rimas simples, repetir sonidos y practicar fonemas de manera lúdica",
    "Seguir instrucciones de 2 o 3 pasos durante juegos, actividades o tareas cotidianas",
    "Explorar objetos y describir texturas, tamaños, colores y sensaciones al tocarlos",
    "Usar títeres, muñecos o figuras para representar pequeñas historias o escenas"
    
    ],
        imagen: "/informacion/etapa_linguistica_3-5.jpg",
      }
    },
    canciones: [
      {
        titulo: "Actividades para estimular el lenguaje",
        letra: "Este video guía actividades prácticas de estimulación del lenguaje en niños de 3 a 5 años.",
        beneficios: [
          "Fomenta la comunicación verbal.",
          "Refuerza el aprendizaje con repetición de palabras clave.",
          "Estimula la participación activa y la comprensión.",
        ],
        video: "https://www.youtube.com/embed/V7vrBPqApeY?si=mkpeREx8G_cqpYji",
      },
      {
        titulo: "Juegos y dinámicas para estimular el lenguaje",
        letra: "Dinámicas de juego que promueven vocabulario, concentración y expresión verbal.",
        beneficios: [
          "Expande el vocabulario con nuevas palabras.",
          "Mejora la comprensión de instrucciones y estructuras narrativas.",
          "Fomenta la creatividad y pensamiento crítico.",
        ],
        video: "https://www.youtube.com/embed/GLh7EyAWeSg?si=0rDCR4rN0898cqg8",
      },
    ],
    pdfs: [
      {
        nombre: "Silabas ABC",
        link: "/informacion/Silabas_ABC.pdf",
        imagen: "/informacion/silabas_ABC.jpg",
      },
      {
        nombre: "Vegetales en inglés",
        link: "/informacion/Vegetales.pdf",
        imagen: "/informacion/vegetales.jpg",
      },
      {
        nombre: "Sombras",
        link: "/informacion/Sombras.pdf",
        imagen: "/informacion/sombras.jpg",
      },
      {
        nombre: "Semana",
        link: "/informacion/semana.pdf",
        imagen: "/informacion/semana.jpg",
      },
      {
        nombre: "Estaciones",
        link: "/informacion/estaciones.pdf",
        imagen: "/informacion/estaciones.jpg",
      },
      {
        nombre: "Partes del cuerpo",
        link: "/informacion/Partes_del_cuerpo1.pdf",
        imagen: "/informacion/Partes_del_cuerpo1.jpg",
      },
    ],
  },

};

    const data = informacionData[rangoEdad] || {};

return (
  <div className="w-full max-w-[1400px] mx-auto px-6 py-10 font-sans">
    {/* Título */}
    <motion.h1
      className="text-4xl font-bold text-center mb-6 text-blue-800"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      {informacionGeneral.titulo}
    </motion.h1>

    {/* Descripción */}
    <motion.p
      className="text-lg text-center text-gray-600 mb-12"
      initial={{ opacity: 0, x: -15 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
    >
      {informacionGeneral.descripcion}
    </motion.p>

{/* Botones de rango de edad */}
    <motion.div
      className="flex flex-wrap justify-center mb-12 gap-4"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: { staggerChildren: 0.15 }, // animación en cascada
        },
      }}
    >
      {Object.keys(informacionData).map((rango) => (
        <motion.button
          key={rango}
          onClick={() => setRangoEdad(rango)}
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className={`px-6 py-2 rounded-full font-semibold shadow-md transition-all duration-300
            ${
              rangoEdad === rango
                ? coloresBotonesActivos[rango]
                : coloresBotonesInactivos[rango]
            }`}
        >
          {rangosLabel[rango]}
        </motion.button>
      ))}
    </motion.div>

    {/* Contenedor dinámico para el contenido por rango */}
    <AnimatePresence mode="wait">
      <motion.div
        key={rangoEdad}
        className={`rounded-xl shadow-lg p-8 ${coloresContenedor[rangoEdad]}`}
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -20, scale: 0.95 }}
        transition={{ duration: 0.5 }}
      >
     



      {/* Videos YouTube */}
      {data.videosYouTube?.length > 0 && (
        <motion.section key={`yt-${rangoEdad}`} className="mb-14">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Videos de Estimulación Temprana
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.videosYouTube.map((video, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-4 shadow-md w-full md:w-[520px]"
              >
                <iframe
                  src={video.src}
                  title={video.titulo}
                  className="w-full h-56 md:h-64 rounded-lg"
                  frameBorder="0"
                  allowFullScreen
                  loading="lazy"
                ></iframe>
                <p className="mt-2 text-center font-semibold">{video.titulo}</p>
              </div>
            ))}
          </div>
        </motion.section>
      )}

      {/* Videos TikTok */}
      {data.videosTikTok?.length > 0 && (
        <motion.section key={`tt-${rangoEdad}`} className="mb-14">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Actividades en TikTok
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            {data.videosTikTok.map((video, i) => (
              <div key={i} className="flex flex-col items-center">
                <iframe
                  src={video.src}
                  className="w-[280px] h-[460px] rounded-lg shadow-lg"
                  frameBorder="0"
                  allowFullScreen
                  title={`TikTok ${i}`}
                  loading="lazy"
                ></iframe>
                {video.descripcion && (
                  <p className="text-gray-700 text-center mt-2 max-w-[280px] text-sm">
                    {video.descripcion}
                  </p>
                )}
              </div>
            ))}
          </div>
        </motion.section>
      )}

{/* Actividades */}
{data.actividades && (
  <motion.section key={`act-${rangoEdad}`} className="mb-14 bg-gray-50 rounded-xl p-8 shadow-lg">
    <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
      Actividades de Estimulación del Lenguaje
    </h2>

    {/* 0-1 años */}
    {rangoEdad === "0-1" && (
      <div className="grid md:grid-cols-2 gap-10 items-start">
        {data.actividades.iniciales && (
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
              Para niños de 0 a 6 meses
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
  {data.actividades.iniciales.lista.map((act, i) => (
    <motion.li
      key={i}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      whileInView="visible"
      transition={{ duration: 0.5, delay: i * 0.1 }}
    >
      {act}
    </motion.li>
  ))}
</ul>

            <img
              src={data.actividades.iniciales.imagen}
              alt="Actividades iniciales"
              className="rounded-lg mt-4 mx-auto"
            />
          </div>
        )}
        {data.actividades.avanzadas && (
          <div>
            <h3 className="text-xl font-semibold text-orange-500 mb-4 text-center">
              Para niños de 7 a 12 meses
            </h3>
            <ul className="list-disc pl-6 space-y-2 text-gray-700">
              {data.actividades.avanzadas.lista.map((act, i) => (
                <li key={i}>{act}</li>
              ))}
            </ul>
            <img
              src={data.actividades.avanzadas.imagen}
              alt="Actividades avanzadas"
              className="rounded-lg mt-4 mx-auto"
            />
          </div>
        )}
      </div>
    )}

    {/* 1-2 años: texto izquierda, imagen derecha */}
    {rangoEdad === "1-2" && data.actividades.iniciales && (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {data.actividades.iniciales.lista.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2">
          <img
            src={data.actividades.iniciales.imagen}
            alt="Actividades iniciales 1-2 años"
            className="rounded-lg mx-auto"
          />
        </div>
      </div>
    )}

    {/* 2-3 años: imagen izquierda, texto derecha */}
    {rangoEdad === "2-3" && data.actividades.iniciales && (
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2">
          <img
            src={data.actividades.iniciales.imagen}
            alt="Actividades iniciales 2-3 años"
            className="rounded-lg mx-auto"
          />
        </div>
        <div className="md:w-1/2">
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            {data.actividades.iniciales.lista.map((act, i) => (
              <li key={i}>{act}</li>
            ))}
          </ul>
        </div>
      </div>
    )}

    {/* 3-5 años */}
{rangoEdad === "3-5" && data.actividades.iniciales && (
  <div className="flex flex-col md:flex-row items-center gap-8">
    <div className="md:w-1/2">
      <ul className="list-disc pl-6 space-y-2 text-gray-700">
        {data.actividades.iniciales.lista.map((act, i) => (
          <li key={i}>{act}</li>
        ))}
      </ul>
    </div>
    <div className="md:w-1/2">
      <img
        src={data.actividades.iniciales.imagen}
        alt="Actividades iniciales 3-5 años"
        className="rounded-lg mx-auto"
      />
    </div>
  </div>
)}

  </motion.section>
)}


{/* Canciones */}
{data.canciones?.length > 0 && (
  <motion.section key={`songs-${rangoEdad}`} className="mb-14">
    <h2 className="text-2xl font-bold text-blue-700 mb-8 text-center">
      Canciones y Cuentos para Estimular el Lenguaje
    </h2>
    <div className="grid md:grid-cols-2 gap-8">
      {data.canciones.map((cancion, i) => (
        <div
          key={i}
          className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
        >
          <iframe
            src={cancion.video}
            title={cancion.titulo}
            className="w-full h-48 rounded-lg mb-4"
            frameBorder="0"
            allowFullScreen
            loading="lazy"
          ></iframe>
          <h3 className="text-xl text-center font-semibold text-blue-900 mb-2">
            {cancion.titulo}
          </h3>
          {cancion.letra && (
            <p className="text-gray-500 mb-3 italic leading-relaxed">
              {cancion.letra}
            </p>
          )}
          {cancion.beneficios && (
            <>
              <p className="font-semibold text-blue-800 mb-1">Beneficios:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-800">
                {cancion.beneficios.map((b, j) => (
                  <li key={j}>{b}</li>
                ))}
              </ul>
            </>
          )}
          {/* PDFs por canción */}
          {cancion.pdf?.length > 0 && (
            <div className="mt-3 flex flex-col gap-2">
              {cancion.pdf.map((pdfItem, j) => (
                <a
                key={j}
                href={pdfItem.link}
                className="text-blue-600 text-center font-semibold underline hover:text-blue-800 flex items-center justify-center gap-2"
                target="_blank"
                rel="noopener noreferrer"
                >
                    <Download size={18} /> {pdfItem.nombre}
                </a>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  </motion.section>
)}


      {/* PDFs generales */}
      {data.pdfs?.length > 0 && (
        <motion.section key={`pdfs-${rangoEdad}`} className="mb-14">
          <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">
            Recursos en PDF
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {data.pdfs.map((pdf, i) => (
              <div
                key={i}
                className="bg-white shadow-md p-6 rounded-lg flex flex-col items-center text-center hover:shadow-lg transition"
              >
                <img
                  src={pdf.imagen || "/informacion/pdf_icon.png"}
                  alt={pdf.nombre}
                  className="w-24 h-24 object-contain mb-3 rounded"
                />
                <h3 className="font-semibold text-gray-800 p-3">{pdf.nombre}</h3>
                <a
                  href={pdf.link}
                  className="flex items-center gap-2 px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600 transition"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                 <Download size={18} /> Descargar
                </a>
              </div>
            ))}
          </div>
        </motion.section>
      )}
    </motion.div>
    </AnimatePresence>
    </div>
    
  );
}

