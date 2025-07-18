import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import NavbarDos from './components/NavbarDos.jsx';
import Carrousel from './components/Carrousel.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <NavbarDos />
      <Carrousel />
    </>
  )
}

export default App
