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
            <p><strong>Teléfono:</strong> +56 9 XXXX XXXX</p>
            <p><strong>Email:</strong> contacto@aiscor.cl</p>
            <p><strong>Dirección:</strong> Calle Principal 123, Ciudad, País</p>
            
            <h4>Síguenos en Redes Sociales</h4>
            <div className="redes-sociales">
              <a href="#facebook">Facebook</a>
              <a href="#instagram">Instagram</a>
              <a href="#linkedin">LinkedIn</a>
              <a href="#youtube">YouTube</a>
            </div>

            <iframe 
              width="100%" 
              height="300" 
              src="https://maps.google.com/maps?q=tu+ubicacion&t=&z=13&ie=UTF8&iwloc=&output=embed"
              style={{marginTop: '20px', borderRadius: '8px'}}
            ></iframe>
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