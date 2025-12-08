export default function Servicios() {
  const servicios = [
    {
      id: 1,
      titulo: "Construcción de Carreteras",
      descripcion: "Diseño y construcción de vías de alta calidad",
      icono: "🛣️"
    },
    {
      id: 2,
      titulo: "Movimientos de Tierra",
      descripcion: "Excavación y movimiento eficiente de terreno",
      icono: "🏗️"
    },
    {
      id: 3,
      titulo: "Construcción de Presas",
      descripcion: "Infraestructuras hidráulicas de envergadura",
      icono: "🌊"
    },
    {
      id: 4,
      titulo: "Proyectos Especiales",
      descripcion: "Soluciones a medida para tus necesidades",
      icono: "⚙️"
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