import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

// Endpoint del chat
app.post("/chat", async (req, res) => {
  try {
    let messages = req.body?.messages || [];

    messages = messages.map((msg) => ({
      role: msg.role || "user",
      content: msg.content || msg.text || "",
    }));

    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: messages,
      }),
    });

    const data = await response.json();
    console.log("Respuesta OpenAI:", JSON.stringify(data, null, 2));

    const reply =
      data?.choices?.[0]?.message?.content ||
      "No se recibió respuesta de OpenAI.";

    res.json({ role: "assistant", text: reply });
  } catch (error) {
    console.error("Error en backend:", error);
    res.status(500).json({ error: "Error en el servidor" });
  }
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Backend corriendo en http://localhost:${PORT}`);
});
