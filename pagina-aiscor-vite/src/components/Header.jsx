import { useState, useEffect } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState(() => window.location.hash || '#inicio');

  useEffect(() => {
    const onHashChange = () => setActiveHash(window.location.hash || '#inicio');
    window.addEventListener('hashchange', onHashChange);
    return () => window.removeEventListener('hashchange', onHashChange);
  }, []);

  // Keep CSS variable --header-offset in sync with the actual header height
  useEffect(() => {
    const setHeaderOffset = () => {
      const headerEl = document.querySelector('.header');
      if (!headerEl) return;
      const height = headerEl.offsetHeight;
      document.documentElement.style.setProperty('--header-offset', `${height}px`);
    };

    setHeaderOffset();
    window.addEventListener('resize', setHeaderOffset);

    // Observe header size changes (menu open/close, font load, etc.)
    let ro;
    const headerEl = document.querySelector('.header');
    if (typeof ResizeObserver !== 'undefined' && headerEl) {
      ro = new ResizeObserver(setHeaderOffset);
      ro.observe(headerEl);
    }

    return () => {
      window.removeEventListener('resize', setHeaderOffset);
      if (ro && headerEl) ro.disconnect();
    };
  }, [isOpen]);

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <img
            src="images/logo.png"
            alt="AISCOR Ingenieros"
            className="header-logo"
            loading="lazy"
          />
        </div>

        <nav id="main-nav" className={`nav ${isOpen ? 'open' : ''}`} aria-label="Navegación principal">
          <a
            href="#inicio"
            className={`nav-link ${activeHash === '#inicio' ? 'active' : ''}`}
            onClick={() => setActiveHash('#inicio')}
          >
            Inicio
          </a>
          <a
            href="#quienes-somos"
            className={`nav-link ${activeHash === '#quienes-somos' ? 'active' : ''}`}
            onClick={() => setActiveHash('#quienes-somos')}
          >
            Quiénes Somos
          </a>
          <a
            href="#servicios"
            className={`nav-link ${activeHash === '#servicios' ? 'active' : ''}`}
            onClick={() => setActiveHash('#servicios')}
          >
            Servicios
          </a>
          <a
            href="#proyectos"
            className={`nav-link ${activeHash === '#proyectos' ? 'active' : ''}`}
            onClick={() => setActiveHash('#proyectos')}
          >
            Proyectos
          </a>
          <a
            href="#contacto"
            className={`nav-link contact-btn ${activeHash === '#contacto' ? 'active' : ''}`}
            onClick={() => setActiveHash('#contacto')}
          >
            Contacto
          </a>
        </nav>

        <button 
          className="hamburger"
          aria-expanded={isOpen}
          aria-controls="main-nav"
          aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>
      </div>
    </header>
  );
}