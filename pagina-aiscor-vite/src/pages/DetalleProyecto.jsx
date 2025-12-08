import { useParams, Link } from 'react-router-dom';

export default function DetalleProyecto() {
  const { id } = useParams();

  return (
    <div className="container" style={{ padding: '60px 20px', minHeight: '80vh' }}>
      <h1>Proyecto {id}</h1>
      <p>Detalles del proyecto {id}</p>
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </div>
  );
}
