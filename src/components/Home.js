import React from "react";
import { motion } from "framer-motion";
import {
  FaBaby,
  FaBrain,
  FaComments,
  FaGamepad,
  FaCheckCircle,
  FaBookOpen,
  FaShieldAlt
} from "react-icons/fa";

function Home() {
  // Variantes para animaciones reutilizables
  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      {/* Hero Section */}
<section
  className="relative bg-cover bg-center text-white h-screen flex items-center"
  style={{ backgroundImage: "url('/Hero.jpg')" }}
>
  {/* Overlay con gradiente */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/30"></div>

  <div className="relative container mx-auto text-center z-10 px-6">
    <motion.h1
      className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      MIT – Mundo Infantil Terapéutico
    </motion.h1>

    <motion.p
      className="text-base md:text-xl mb-8 max-w-2xl mx-auto"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.8 }}
    >
MIT – Mundo Infantil Terapéutico es una plataforma web educativa diseñada para orientar a padres, madres, cuidadores, 
estudiantes y profesionales mediante información confiable sobre desarrollo infantil, neurodiversidad, hitos del desarrollo, 
recursos educativos y preguntas frecuentes organizadas de forma clara y accesible.    </motion.p>

    <motion.a
      href="/informacion/"
      className="bg-blue-500 hover:bg-blue-600 text-white py-3 px-8 rounded-full shadow-lg transition text-lg font-semibold"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.6, duration: 0.6 }}
    >
      Descubre más
    </motion.a>
  </div>
</section>


      {/* About / Features Section */}
      <section className="py-16 bg-blue-50">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Funcionalidades de MIT
          </motion.h2>
          <motion.p
            className="text-lg text-blue-700 mb-12 max-w-2xl mx-auto"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            MIT – Mundo Infantil Terapéutico es una plataforma web educativa que reúne información organizada por edades, 
            hitos del desarrollo, recursos educativos clasificados por neurodivergencias y preguntas 
            frecuentes basadas en fuentes confiables para apoyar a familias, cuidadores, estudiantes y profesionales.
          </motion.p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Card 1 */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ delay: 0.2, duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaBaby className="text-blue-600 w-12 h-12 mb-4" />

  <h3 className="text-xl font-semibold mb-2 text-blue-800">
    Hitos del Desarrollo
  </h3>

  <p className="text-blue-700 text-center mb-4">
    Consulta los principales hitos del desarrollo infantil organizados por edades para conocer las habilidades esperadas en cada etapa.
  </p>

  <a
    href="/hitos/"
    className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
  >
    Ver hitos
  </a>
</motion.div>

            {/* Card 2 */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ delay: 0.3, duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaBrain className="text-blue-600 w-12 h-12 mb-4" />

  <h3 className="text-xl font-semibold mb-2 text-blue-800">
    Información y Material Educativo
  </h3>

  <p className="text-blue-700 text-center mb-4">
    Accede a contenido educativo organizado por rangos de edad para orientar el acompañamiento del desarrollo infantil.
  </p>

  <a
    href="/informacion/"
    className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
  >
    Ver información
  </a>
</motion.div>

          {/* Card 3 */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ delay: 0.4, duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaComments className="text-blue-600 w-12 h-12 mb-4" />

  <h3 className="text-xl font-semibold mb-2 text-blue-800">
    Preguntas Frecuentes (FAQ)
  </h3>

  <p className="text-blue-700 text-center mb-4">
    Encuentra respuestas rápidas y confiables sobre desarrollo infantil, TEA, TDAH, lenguaje y neurodiversidad.
  </p>

  <a
    href="/faq/"
    className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
  >
    Ir al FAQ
  </a>
</motion.div>

           {/* Card 4 */}
<motion.div
  className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition flex flex-col items-center"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  transition={{ delay: 0.5, duration: 0.6 }}
  viewport={{ once: true }}
>
  <FaGamepad className="text-blue-600 w-12 h-12 mb-4" />

  <h3 className="text-xl font-semibold mb-2 text-blue-800">
    Recursos y Actividades
  </h3>

  <p className="text-blue-700 text-center mb-4">
    Explora información organizada por cada neurodivergencia con definiciones, síntomas, recomendaciones y recursos complementarios como videos y documentos descargables.
  </p>

  <a
    href="/recursos/"
    className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
  >
    Explorar recursos
  </a>
</motion.div>
</div>
        </div>
      </section>

      {/* ¿Por qué elegir MIT? */}

<section className="py-16 bg-white">

  <div className="container mx-auto px-6">

    <motion.h2
      className="text-3xl font-bold text-blue-800 text-center mb-4"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      transition={{ duration: .6 }}
      viewport={{ once: true }}
    >
      ¿Por qué elegir MIT?
    </motion.h2>

    <motion.p
      className="text-center text-blue-700 max-w-3xl mx-auto mb-12"
      initial="hidden"
      whileInView="visible"
      variants={fadeUp}
      transition={{ delay: .2, duration: .6 }}
      viewport={{ once: true }}
    >
      MIT fue desarrollado para brindar orientación confiable a padres,
      madres, cuidadores, estudiantes y profesionales interesados en el
      desarrollo infantil y la neurodiversidad mediante información organizada,
      recursos educativos y herramientas de consulta de fácil acceso.
    </motion.p>

    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

      {/* CARD */}

      <motion.div
        className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: .2 }}
        viewport={{ once: true }}
      >

        <FaBookOpen className="text-5xl text-blue-600 mx-auto mb-5"/>

        <h3 className="text-xl font-bold text-blue-800 mb-3">
          Información basada en evidencia
        </h3>

        <p className="text-blue-700 leading-relaxed">
          El contenido fue organizado utilizando fuentes académicas,
          literatura científica y documentos de organismos nacionales e
          internacionales relacionados con el desarrollo infantil.
        </p>

      </motion.div>

      {/* CARD */}

      <motion.div
        className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: .4 }}
        viewport={{ once: true }}
      >

        <FaCheckCircle className="text-5xl text-green-600 mx-auto mb-5"/>

        <h3 className="text-xl font-bold text-blue-800 mb-3">
          Recursos para las familias
        </h3>

        <p className="text-blue-700 leading-relaxed">
          Incluye materiales descargables, actividades, juegos,
          recomendaciones y guías que favorecen el acompañamiento del
          desarrollo infantil desde el hogar.
        </p>

      </motion.div>

      {/* CARD */}

      <motion.div
        className="bg-blue-50 rounded-2xl shadow-lg p-8 text-center hover:shadow-xl transition"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ delay: .6 }}
        viewport={{ once: true }}
      >

        <FaShieldAlt className="text-5xl text-purple-600 mx-auto mb-5"/>

        <h3 className="text-xl font-bold text-blue-800 mb-3">
          Plataforma educativa
        </h3>

        <p className="text-blue-700 leading-relaxed">
          La información está organizada en secciones intuitivas para
          facilitar la consulta sobre hitos del desarrollo,
          neurodiversidad, recursos educativos y preguntas frecuentes.
        </p>

      </motion.div>

    </div>

  </div>
      </section>
    </div>
  );
}

export default Home;
