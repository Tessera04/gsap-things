import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import NavbarDos from './components/NavbarDos.jsx';
import Carrousel from './components/Carrousel.jsx';
import Card3D from './components/Card3D.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <NavbarDos />
      <Card3D />
      <Carrousel />
      <Card3D />
    </>
  )
}

export default App
