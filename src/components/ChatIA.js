import React, { useRef } from "react";
import { DeepChat } from "deep-chat-react";

function ChatIA() {
  const chatRef = useRef(null);

  const scrollToChat = () => {
    chatRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-blue-100 to-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-800 drop-shadow-md text-center">
        Chat IA MIT 🤗
      </h1>

      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white p-6 rounded-xl shadow-lg border border-blue-200 mb-12">
        <img
          src="/terapia-ocupacional.jpg"
          alt="Bienvenida MIT"
          className="rounded-lg shadow-md w-full max-h-[300px] object-contain"
        />
        <div>
          <p className="text-gray-700 leading-relaxed text-lg mb-4">
            Bienvenido/a al{" "}
            <span className="font-semibold text-blue-600">Chat IA MIT</span>.
            Aquí podrás hacer preguntas sobre{" "}
            <strong>desarrollo infantil, terapias en casa e inclusión</strong>.
          </p>
          <div className="text-gray-600 text-base mb-4">
            <p className="font-medium mb-2">Ejemplos de lo que puedes preguntar:</p>
            <ul className="list-disc list-inside space-y-1">
              <li>¿Qué actividades puedo hacer con mi hijo en casa?</li>
              <li>¿Cómo ayudo a mi hijo a concentrarse en tareas?</li>
              <li>¿Qué juegos favorecen el desarrollo del lenguaje?</li>
            </ul>
          </div>
          <div className="flex justify-center mt-6">
          <button
            className="px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
            onClick={scrollToChat}
          >
            Ir al chat
          </button></div>
        </div>
      </div>

      <div
        ref={chatRef}
        className="w-full max-w-2xl h-[450px] border-2 border-blue-400 rounded-2xl shadow-lg overflow-hidden bg-gradient-to-b from-blue-50 to-white"
      >
        <DeepChat
          style={{
            flex: 1,
            display: "flex",
            width: "100%",
            height: "100%",
            backgroundColor: "transparent",
          }}
          textInput={{ placeholder: { text: "Escribe un mensaje..." } }}
          connect={{
            url: `${process.env.REACT_APP_API_URL || "http://localhost:5000"}/chat`,
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "x-system-prompt":
                "Eres un asistente experto en desarrollo infantil. Responde de forma clara y concreta.",
            },
          }}
        />
      </div>
    </div>
  );
}

export default ChatIA;
