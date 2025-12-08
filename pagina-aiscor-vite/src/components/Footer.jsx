export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AISCOR</h4>
            <p>Expertos en construcción y obras civiles</p>
          </div>
          <div className="footer-section">
            <h4>Enlaces</h4>
            <ul>
              <li><a href="#inicio">Inicio</a></li>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#proyectos">Proyectos</a></li>
              <li><a href="#contacto">Contacto</a></li>
            </ul>
          </div>
          <div className="footer-section">
            <h4>Redes Sociales</h4>
            <div className="redes">
              <a href="#fb">f</a>
              <a href="#ig">📷</a>
              <a href="#in">in</a>
              <a href="#yt">▶</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2024 AISCOR Ingenieros. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}