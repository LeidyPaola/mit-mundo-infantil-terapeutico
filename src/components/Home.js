import React from "react";
import { motion } from "framer-motion";
import { FaBaby, FaBrain, FaRobot, FaGamepad } from "react-icons/fa";

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
  style={{ backgroundImage: "url('/hero.jpg')" }}
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
      Plataforma diseñada para padres con hijos neurodivergentes. Aquí
      encontrarás información clara sobre desarrollo infantil, hitos clave
      y herramientas con Chat IA para responder tus dudas.
    </motion.p>

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
            MIT ayuda a padres y cuidadores a entender el desarrollo de sus
            hijos, identificar hitos importantes y acceder a información
            confiable sobre neurodivergencias.
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
                Hitos de Desarrollo
              </h3>
              <p className="text-blue-700 text-center mb-4">
                Consulta los hitos esperados por edad y compara con el progreso
                de tu hijo.
              </p>
              <a
                href="/hitos"
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
              >
                Ver más
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
                Información sobre Neurodivergencias
              </h3>
              <p className="text-blue-700 text-center mb-4">
                Accede a material confiable sobre TEA, TDAH y otras condiciones
                para apoyar a tu hijo.
              </p>
              <a
                href="/informacion"
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
              >
                Ver más
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
              <FaRobot className="text-blue-600 w-12 h-12 mb-4" />
              <h3 className="text-xl font-semibold mb-2 text-blue-800">
                Chat con IA
              </h3>
              <p className="text-blue-700 text-center mb-2">
                Haz preguntas y recibe orientación inmediata sobre desarrollo
                infantil y terapias.
              </p>
              <p className="text-sm text-blue-600 italic mb-4">
                Disponible 24/7 para responder tus preguntas
              </p>
              <a
                href="/chat"
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full shadow-md transition"
              >
                Ir al chat
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
                Encuentra juegos y ejercicios adaptados para estimular
                habilidades según la edad de tu hijo.
              </p>
              <a
                href="/recursos"
                className="mt-auto bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full transition"
              >
                Ver más
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <motion.h2
            className="text-3xl font-bold text-blue-800 mb-8"
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Lo que dicen los padres
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                text: "MIT nos ha ayudado a entender mejor el desarrollo de nuestro hijo y nos da confianza para apoyarlo día a día.",
                name: "María G.",
                role: "Madre de niño con TDAH",
                stars: "★ ★ ★ ★ ☆",
              },
              {
                text: "Gracias a los recursos y consejos de MIT, podemos seguir los hitos de desarrollo sin preocuparnos tanto.",
                name: "Carlos R.",
                role: "Padre de niño con TEA",
                stars: "★ ★ ★ ★ ★",
              },
              {
                text: "La sección de tips y el chat IA nos da respuestas inmediatas a nuestras dudas como padres primerizos.",
                name: "Luisa M.",
                role: "Madre de niña neurodivergente",
                stars: "★ ★ ★ ★ ★",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                className="bg-blue-50 p-6 rounded-lg shadow-lg"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <p className="text-blue-700 mb-4">"{t.text}"</p>
                <h3 className="font-semibold text-blue-800">{t.name}</h3>
                <span className="text-blue-600 text-sm">{t.role}</span>
                <div className="flex justify-center mt-3">
                  <span className="text-yellow-400">{t.stars}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
