export default function SobreNosotros() {
  return (
    <section id="quienes-somos" className="sobre-nosotros">
      <div className="container">
        <h2>Quiénes Somos</h2>
        <p align="justify">
          AISCOR Ingenieros, S.A. de C.V. es una empresa sonorense dedicada al
          ramo de la ingeniería civil en todas sus vertientes, como es: construcción y supervisión de obra, 
          proyectos y diseño estructural y vial. Inicia operaciones en el año 2019, impulsada por un equipo
          innovador de trabajo altamente capacitado y con la firme convicción de convertirse en un referente
          de soluciones ingenieriles a nivel regional. 
        </p>

        <div className="sobre-content">
          <div className="sobre-row img-left">
            <figure className="sobre-img">
              <img src="/images/mision.png" alt="Misión de AISCOR Ingenieros" loading="lazy" />
            </figure>
            <div className="sobre-text">
              <h3>MISIÓN</h3>
              <p>
                Brindar servicios de ingeniería, satisfaciendo las necesidades de nuestros grupos de interés
                mediante la aplicación de altos estándares de control de calidad, desarrollo sustentable y
                procesos de mejora continua, lo que nos permite contribuir al bienestar social y económico
                de nuestros colaboradores.
              </p>
            </div>
          </div>

          <div className="sobre-row img-right">
            <div className="sobre-text">
              <h3>VISIÓN</h3>
              <p>
                Ser una empresa líder en el ámbito de la ingeniería y la construcción, siendo un referente
                en nuestra localidad por nuestro alto compromiso con nuestros clientes y nuestra comunidad.
              </p>
            </div>
            <figure className="sobre-img">
              <img src="/images/vision.png" alt="Visión de AISCOR Ingenieros" loading="lazy" />
            </figure>
          </div>
        </div>



      </div>
    </section>
  );
}