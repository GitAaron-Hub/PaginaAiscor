import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Proyectos() {
  const [proyectos] = useState([
    {
      id: 1,
      titulo: "Carretera Principal - Región X",
      categoria: "Carreteras",
      imagen: "/images/proyecto1.jpg",
      descripcion: "Construcción de 50km de carretera de doble calzada",
      estatusActivo: "Activo"
    },
    {
      id: 2,
      titulo: "Presa Hidroeléctrica",
      categoria: "Presas",
      imagen: "/images/proyecto2.jpg",
      descripcion: "Construcción de presa con capacidad de 100 millones de m³",
      estatusTerminado: "Terminado"
    },
    {
      id: 3,
      titulo: "Movimiento de Tierra",
      categoria: "Movimientos",
      imagen: "/images/proyecto3.jpg",
      descripcion: "Excavación de 5 millones de toneladas de material",
      estatusActivo: "Activo"
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
                Ver Proyecto
              </Link>
<<<<<<< HEAD
              <div className='estatus-container'>
              <p className='estatusActivo'>{proyecto.estatusActivo}</p>
              <p className='estatusTerminado'>{proyecto.estatusTerminado}</p></div>
=======
              <div>
              <p className='estatusActivo'>{proyecto.estatusActivo}</p>
              <p className='estatusTerminado'>{proyecto.estatusTerminado}</p>
              </div>
>>>>>>> 06f479b59b00775319f3810a7c292123c35d47ed
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}