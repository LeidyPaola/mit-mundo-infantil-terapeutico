import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinkClass = ({ isActive }) =>
    isActive
      ? "text-green-300 font-semibold border-b-2 border-green-300 transition-colors"
      : "hover:text-blue-200 transition-colors";

  return (
    <header className="bg-blue-600 text-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center py-4 px-6">
        {/* Logo */}
        <NavLink to="/" className="flex items-center" onClick={() => setMenuOpen(false)}>
          <img src="/logo.png" alt="MIT Logo" className="w-14 h-14 mr-3" />
          <span className="text-xl md:text-2xl font-bold leading-tight">
            MIT <span className="hidden sm:inline">- Mundo Infantil Terapéutico</span>
          </span>
        </NavLink>

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
              <NavLink to="/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink to="/hitos/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Hitos
              </NavLink>
            </li>
            <li>
              <NavLink to="/informacion/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Información
              </NavLink>
            </li>
            <li>
              <NavLink to="/chat/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Chat IA
              </NavLink>
            </li>
            <li>
              <NavLink to="/recursos/" className={navLinkClass} onClick={() => setMenuOpen(false)}>
                Recursos
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
