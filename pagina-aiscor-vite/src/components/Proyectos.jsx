import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Proyectos() {
  const [proyectos] = useState([
    {
      id: 1,
      titulo: "Carretera Principal - Región X",
      categoria: "Carreteras",
      imagen: "/images/proyecto1.jpg",
      descripcion: "Construcción de 50km de carretera de doble calzada"
    },
    {
      id: 2,
      titulo: "Presa Hidroeléctrica",
      categoria: "Presas",
      imagen: "/images/proyecto2.jpg",
      descripcion: "Construcción de presa con capacidad de 100 millones de m³"
    },
    {
      id: 3,
      titulo: "Movimiento de Tierra - Proyecto Minero",
      categoria: "Movimientos",
      imagen: "/images/proyecto3.jpg",
      descripcion: "Excavación de 5 millones de toneladas de material"
    }
  ]);

  return (
    <section id="proyectos" className="proyectos">
      <div className="container">
        <h2>Nuestros Proyectos</h2>
        <div className="proyectos-grid">
          {proyectos.map(proyecto => (
            <div key={proyecto.id} className="proyecto-card">
              <img src={proyecto.imagen} alt={proyecto.titulo} />
              <h3>{proyecto.titulo}</h3>
              <p className="categoria">{proyecto.categoria}</p>
              <p>{proyecto.descripcion}</p>
              <Link to={`/proyecto/${proyecto.id}`} className="btn-secundario">
                Ver Detalles
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}