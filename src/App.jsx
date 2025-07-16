import gsap from 'gsap';
import { ScrollTrigger} from 'gsap/ScrollTrigger';
import Navbar from './components/Navbar.jsx';
import Carrousel from './components/Carrousel.jsx';
import Main from './components/Main.jsx';

gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <>
      <Main />
      <Navbar />
      <Carrousel />
    </>
  )
}

export default App
