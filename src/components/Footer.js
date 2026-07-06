import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-6">

        {/* Logo + descripción */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="MIT Logo" className="w-14 h-14" />
          <div>
            <p className="font-semibold">MIT – Mundo Infantil Terapéutico</p>
            <p className="text-sm opacity-90">
              Plataforma educativa para el acompañamiento del desarrollo infantil y la neurodiversidad
            </p>
          </div>
        </div>

        {/* Redes sociales oficiales */}
        <div className="flex flex-col items-center gap-2 text-sm">
          <p className="font-semibold">Síguenos</p>

          <div className="flex gap-4">
            <a
              href="https://www.instagram.com/mundoinfantilterapeutico/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Instagram
            </a>

            <a
              href="https://www.tiktok.com/@mundoinfantilterapeutico"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              TikTok
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61591347587804"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Facebook
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-center md:text-right opacity-90">
          © 2026 MIT – Mundo Infantil Terapéutico<br />
          Todos los derechos reservados
        </div>

      </div>
    </footer>
  );
}

export default Footer;