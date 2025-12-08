import Hero from '../components/Hero';
import SobreNosotros from '../components/SobreNosotros';
import Servicios from '../components/Servicios';
import Proyectos from '../components/Proyectos';
import Contacto from '../components/Contacto';

export default function Home() {
  return (
    <main>
      <Hero />
      <SobreNosotros />
      <Servicios />
      <Proyectos />
      <Contacto />
    </main>
  );
}
