import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

function Main() {
  const rockRef = useRef(null);

  useEffect(() => {
    const rock = rockRef.current;

    gsap.fromTo(rock,
      {
        x: -100,
        y: 200,
        rotation: 0,
      },
      {
        scrollTrigger: {
          trigger: document.body,
          start: 'top top',    // ajusta para que pin funcione bien
          end: '+=3000vh',
          scrub: true,
          pin: '.slope-container',
        },
        x: 600,
        y: -180,
        rotation: 720,
        ease: 'none',
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };

  }, []);

  return (
    <section className="slope-container relative h-screen bg-white overflow-hidden">
      {/* Triángulo de la colina */}
      <svg className="absolute bottom-0 left-0 w-full h-full" viewBox="0 0 100 50" preserveAspectRatio="none">
        <polygon points="100,0 0,50 100,500" fill="black" />
      </svg>

      <div className="absolute bottom-16 right-16 text-white z-10">
        <h1 className="text-6xl md:text-8xl font-bold mb-4 text-right">
          Gemo Planeta
        </h1>
        <p className="text-xl md:text-2xl font-light text-right max-w-2xl">
          Donde cada gema cuenta una historia única
        </p>
      </div>

      {/* Roca (imagen) */}
      <img
        ref={rockRef}
        src="./images/round-stone.png"
        alt="Roca"
        className="absolute w-[25%] bottom-[25%] left-10"
      />
    </section>
  );
}

export default Main
