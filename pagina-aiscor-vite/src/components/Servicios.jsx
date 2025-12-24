export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Patios de lixiviación & Presas de jales",
      descripcion: "Diseño y construcción de patios de lixiviación y presas de jales con controles de seguridad y gestión ambiental.",
      icono: "🏭"
    },
    {
      id: 2,
      titulo: "Movimiento de tierras",
      descripcion: "Excavación, traslado y compactación usando equipo especializado para proyectos de gran escala.",
      icono: "🚜"
    },
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