import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container" style={{ padding: '60px 20px', textAlign: 'center', minHeight: '80vh' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>404</h1>
      <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Página no encontrada</p>
      <Link to="/" className="btn-primary">Volver al inicio</Link>
    </div>
  );
}
