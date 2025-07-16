import React, { useRef, useState, useEffect } from 'react'
import gsap from 'gsap';

const slides = [
  { src: "/images/abrazarse.png" },
  { src: "/images/cafe-muller.png" },
  { src: "/images/desapareciendo.png" },
  { src: "/images/escarbate.png" },
  { src: "/images/pesadillas.jpg" },
  { src: "/images/tiempo.jpg" },
  { src: "/images/soundsystem.png" },
  { src: "/images/sisyphone.png" },
];

function Carrousel() {
  const [current, setCurrent] = useState(0);
  const mainRef = useRef(null);
  const bgRef = useRef(null);
  const isScrolling = useRef(false);

  useEffect(() => {
    const handleWheel = (e) => {
      if (isScrolling.current) return;

      isScrolling.current = true;
      setTimeout(() => (isScrolling.current = false), 1000);

      if (e.deltaY > 0) {
        goToSlide(current + 1);
      } else if (e.deltaY < 0) {
        goToSlide(current - 1);
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [current]);

  useEffect(() => {
    if (mainRef.current) {
      gsap.fromTo(
        mainRef.current,
        { opacity: 0, scale: 1.1 },
        { opacity: 1, scale: 1, duration: 1, ease: "power3.out" }
      );
    }

    if (bgRef.current) {
      gsap.fromTo(
        bgRef.current,
        { opacity: 0 },
        { opacity: 0.4, duration: 1.2, ease: "power2.out" }
      );
    }
  }, [current]);

  const goToSlide = (index) => {
    const newIndex = (index + slides.length) % slides.length;
    setCurrent(newIndex);
  };

  return (
    <div className='flex'>
      <div className='w-1/2'>
        <h1>Este es un texto que va a salir al lado de lo otro creo</h1>
      </div>
      <div className="relative h-screen overflow-hidden bg-black w-1/2">
        {/* Imagen de fondo: desenfocada */}
        <img
          ref={bgRef}
          key={`bg-${current}`}
          src={slides[current].src}
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-0 transition-opacity duration-1000"
          alt="Fondo actual"
        />

        {/* Imagen principal */}
        <img
          ref={mainRef}
          key={`main-${current}`}
          src={slides[current].src}
          className="absolute inset-0 w-3/4 h-3/4 object-contain z-10 opacity-0"
          alt={slides[current].name}
        />
      </div>
    </div>
  );
}

export default Carrousel
