import { useState } from 'react';

export default function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí irá la lógica para enviar el formulario
    console.log(formData);
    alert('Mensaje enviado. Nos contactaremos pronto');
    setFormData({ nombre: '', email: '', telefono: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="contacto">
      <div className="container">
        <h2>Contacto</h2>
        <div className="contacto-grid">
          <div className="info-contacto">
            <h3>Información de Contacto</h3>
            <p><strong>Teléfono (Oficina):</strong> (662) 458 38 26</p>
            <p><strong>Teléfono (Salida):</strong> (662) 368 32 74</p>
            <p><strong>Email:</strong> contacto@aiscoringenieros.com.mx</p>
            <p><strong>Dirección:</strong> Mazatlán No 631, Col. Libertad, CP 83130, Hermosillo, Sonora, México</p>
            
            <h4>Descargar</h4>
            <p>
              <a className="btn-secundario" href="/curriculum.pdf" target="_blank" rel="noopener noreferrer">Descargar Curriculum (PDF)</a>
            </p>

            <h4>Síguenos en Redes Sociales</h4>
            <div className="redes-sociales">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#youtube">YouTube</a>
            </div>

            <div className="map-responsive" style={{ marginTop: '20px' }}>
              <iframe
                src="https://maps.google.com/maps?q=Mazatl%C3%A1n%20631%20Col.%20Libertad%2C%20Hermosillo&t=&z=13&ie=UTF8&iwloc=&output=embed"
                title="Ubicación AISCOR"
                frameBorder="0"
                style={{ border: 0, width: '100%', height: '100%', borderRadius: 8 }}
                allowFullScreen
              ></iframe>
            </div>

          </div>


          <form onSubmit={handleSubmit} className="formulario">
            <input
              type="text"
              name="nombre"
              placeholder="Tu Nombre"
              value={formData.nombre}
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Tu Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="tel"
              name="telefono"
              placeholder="Tu Teléfono"
              value={formData.telefono}
              onChange={handleChange}
            />
            <textarea
              name="mensaje"
              placeholder="Tu Mensaje"
              rows="6"
              value={formData.mensaje}
              onChange={handleChange}
              required
            ></textarea>
            <button type="submit" className="btn-primary">
              Enviar Mensaje
            </button>
          </form>
      
        </div>
      </div>
    </section>
  );
}