import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img src="/logo.png" alt="MIT Logo" className="w-14 h-14 mr-3" />
          <span className="text-xl md:text-2xl font-bold leading-tight">
            MIT <span className="hidden sm:inline">- Mundo Infantil Terapéutico</span>
          </span>
        </Link>

        {/* Botón menú (solo en móvil) */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-blue-700 transition"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Menú navegación */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-blue-600 shadow-md md:shadow-none
             md:static md:block md:w-auto`}
        >
          <ul className="flex flex-col md:flex-row gap-6 items-center p-4 md:p-0 text-lg font-medium">
            <li>
              <Link
                to="/"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Inicio
              </Link>
            </li>
            <li>
              <Link
                to="/hitos/"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Hitos
              </Link>
            </li>
            <li>
              <Link
                to="/informacion/"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Información
              </Link>
            </li>
            <li>
              <Link
                to="/chat/"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Chat IA
              </Link>
            </li>
            <li>
              <Link
                to="/recursos/"
                className="hover:text-blue-200 transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                Recursos
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
