export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>AISCOR</h4>
            <p>Piensa, Analiza, Define y Ejecuta...</p>
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
              <a href="#fb">facebook</a>
              <a href="#ig">Instagram</a>
              <a href="#in">in</a>
              <a href="#yt">▶</a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; </p>
        </div>
      </div>
    </footer>
  );
}