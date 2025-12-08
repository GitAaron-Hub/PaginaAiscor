import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <h1>AISCOR</h1>
        </div>
        
        <nav className={`nav ${isOpen ? 'open' : ''}`}>
          <a href="#inicio">Inicio</a>
          <a href="#quienes-somos">Quiénes Somos</a>
          <a href="#servicios">Servicios</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </nav>

        <button 
          className="hamburger"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}