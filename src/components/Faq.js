import React, { useState } from "react";
import { faq } from "../data/faq";
import { motion, AnimatePresence } from "framer-motion";

function FAQ() {
  const [selected, setSelected] = useState("Todos");
  const [openId, setOpenId] = useState(null);

  const categorias = ["Todos", "TEA", "TDAH", "Lenguaje", "Neurodiversidad"];

  const filtered =
    selected === "Todos"
      ? faq
      : faq.filter((item) => item.category === selected);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };

  const colors = {
    TEA: "bg-blue-50 border-blue-400",
    TDAH: "bg-orange-50 border-orange-400",
    Lenguaje: "bg-green-50 border-green-400",
    Neurodiversidad: "bg-purple-50 border-purple-400",
  };

  const btnActive = {
    Todos: "bg-gray-700 text-white",
    TEA: "bg-blue-600 text-white",
    TDAH: "bg-orange-500 text-white",
    Lenguaje: "bg-green-600 text-white",
    Neurodiversidad: "bg-purple-600 text-white",
  };

  const btnInactive = {
    Todos: "bg-white border border-gray-400 text-gray-700 hover:bg-gray-100",
    TEA: "bg-white border border-blue-400 text-blue-700 hover:bg-blue-100",
    TDAH: "bg-white border border-orange-400 text-orange-700 hover:bg-orange-100",
    Lenguaje: "bg-white border border-green-400 text-green-700 hover:bg-green-100",
    Neurodiversidad: "bg-white border border-purple-400 text-purple-700 hover:bg-purple-100",
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white px-4 py-10">
      <div className="max-w-5xl mx-auto">

        {/* HEADER */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-center text-blue-800"
        >
          Preguntas Frecuentes (FAQ)
        </motion.h1>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Encuentra respuestas claras sobre desarrollo infantil, neurodiversidad,
          TEA, TDAH y lenguaje.
        </p>

        {/* CATEGORÍAS */}
        <div className="flex flex-wrap justify-center gap-3 mt-8">
          {categorias.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`px-4 py-2 rounded-full font-semibold transition hover:scale-105 ${
                selected === cat ? btnActive[cat] : btnInactive[cat]
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* LISTA FAQ */}
        <div className="mt-10 space-y-4">

          {filtered.map((item) => {
            const isOpen = openId === item.id;

            return (
              <motion.div
                key={item.id}
                layout
                className={`rounded-xl shadow-md overflow-hidden border-l-4 ${colors[item.category]}`}
              >

                {/* PREGUNTA */}
                <button
                  onClick={() => toggle(item.id)}
                  className="w-full flex justify-between items-center p-5 text-left"
                >
                  <span className="font-semibold text-gray-800">
                    {item.question}
                  </span>

                  <span className={`transition-transform ${isOpen ? "rotate-180" : ""}`}>
                    ▼
                  </span>
                </button>

                {/* RESPUESTA */}
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-700">

                        <p className="mb-4">{item.answer}</p>

                        {item.recommendations && (
                          <ul className="list-disc pl-5 space-y-1">
                            {item.recommendations.map((r, i) => (
                              <li key={i}>{r}</li>
                            ))}
                          </ul>
                        )}

                        <div className="flex justify-end mt-4">
                          <span className="bg-white rounded-full px-3 py-1 text-xs text-gray-600 shadow">
                            📌 Fuente: {item.source}
                          </span>
                        </div>

                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </motion.div>
            );
          })}

        </div>
      </div>
    </div>
  );
}

export default FAQ;

                          

                     