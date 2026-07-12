import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import { Analytics } from '@vercel/analytics/react';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Hitos from "./components/Hitos";
import Faq from "./components/Faq";
import Recursos from "./components/Recursos";
import Informacion from "./components/Informacion";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <Router>
      <ScrollToTop /> 
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hitos" element={<Hitos />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/recursos" element={<Recursos />} />
        <Route path="/informacion" element={<Informacion />} />
      </Routes>
      <Footer />
      <Analytics />
    </Router>
  );
}

export default App;
