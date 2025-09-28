import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hitos from "./components/Hitos";
import ChatIA from "./components/ChatIA";
import Recursos from "./components/Recursos";
import Informacion from "./components/Informacion";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hitos" element={<Hitos />} />
        <Route path="/chat" element={<ChatIA />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
