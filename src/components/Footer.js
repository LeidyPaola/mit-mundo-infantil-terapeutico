import React from "react";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6 gap-4">
        {/* Logo y misión */}
        <div className="flex items-center gap-4">
          <img src="/logo.png" alt="MIT Logo" className="w-16 h-16" />
          <p className="text-sm md:text-base">
            Apoyando el desarrollo infantil con información confiable
          </p>
        </div>

        {/* Redes sociales */}
        <div className="flex gap-4">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer">
            TikTok
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            Facebook
          </a>
        </div>

        {/* Derechos de autor */}
        <p className="text-sm md:text-base">&copy; 2025 MIT - Mundo Infantil Terapéutico</p>
      </div>
    </footer>
  );
}

export default Footer;
