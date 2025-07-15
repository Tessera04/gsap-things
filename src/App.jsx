import React from 'react';
import gsap from 'gsap';
import { ScrollTrigger, SplitText } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <div className='flex-center h-[100vh]'>
      <h1 className='text-amber-700 text-8xl'>Holis</h1>
    </div>
  )
}

export default App
