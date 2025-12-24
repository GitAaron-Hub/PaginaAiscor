export default function Servicios() {
  const servicios = [
  
  
    {
      id: 3,
      titulo: "Producción de agregados (trituración y cribado)",
      descripcion: "Plantas y procesos para la producción de agregados pétreos cumpliendo estándares de calidad.",
      icono: "⛏️"
    },
    {
      id: 4,
      titulo: "Estructuras, puentes y drenaje",
      descripcion: "Diseño y ejecución de obras de infraestructura como puentes, drenajes y estructuras civiles.",
      icono: "🏗️"
    },
    {
      id: 5,
      titulo: "Pavimentación de concreto asfáltico e hidráulico",
      descripcion: "Pavimentación y obras viales con mezclas y procedimientos certificados.",
      icono: "🛣️"
    }
  ];

  return (
    <section id="servicios" className="servicios">
      <div className="container">
        <h2>Nuestros Servicios</h2>
        <div className="servicios-visual">
          <div className="hex hex-large" style={{ backgroundImage: "url('/images/pavimentación.png')" }}>
            <span className="hex-caption">PAVIMENTACIÓN<br/>ASFÁLTICO & HIDRÁULICO</span>
          </div>

          <div className="hex-col">
            <div className="hex hex-small" style={{ backgroundImage: "url('/images/Movimiento de tierras.png')" }}>
              <span className="hex-caption">MOVIMIENTO<br/>DE TIERRAS</span>
            </div>

            <div className="hex hex-small" style={{ backgroundImage: "url('/images/Lixiviacion.png')" }}>
              <span className="hex-caption">PATIO DE<br/>LIXIVIACIÓN</span>
            </div>
          </div>
        </div>

        <div className="servicios-grid">
          {servicios.map(servicio => (
            <div key={servicio.id} className="servicio-card">
              <div className="icono">{servicio.icono}</div>
              <h3>{servicio.titulo}</h3>
              <p>{servicio.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}