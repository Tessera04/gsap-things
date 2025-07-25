import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

const slides = [
  { src: "/images/abrazarse.png", bg: "#afcb2f", titulo: "Abrazarse", contenido: "y abrazarse viste", fecha: "", paleta: "5", },
  { src: "/images/cafe-muller.png", bg: "#814f16", titulo: "Cafe Muller", contenido: "un cafesini" },
  { src: "/images/desapareciendo.png", bg: "#044efb", titulo: "Desapareciendo", contenido: "jijo" },
  { src: "/images/escarbate.png", bg: "#eb6b89", titulo: "Escarbate", contenido: "escarbate" },
  { src: "/images/pesadillas.jpg", bg: "#ac0404", titulo: "Pesadillas", contenido: "pesadillas" },
  { src: "/images/tiempo.jpg", bg: "#b6b924", titulo: "Tiempo", contenido: "Tiempo" },
  { src: "/images/soundsystem.png", bg: "#899cbb", titulo: "Soundsystem", contenido: "Soundsystem" },
  { src: "/images/sisyphone.png", bg: "#c0bcb5", titulo: "Sisyphone", contenido: "Sisyphone" },
];

function Carrousel() {
  const [current, setCurrent] = useState(0);
  const mainRef = useRef(null);
  const bgRef = useRef(null);
  const glowRef = useRef(null);
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
    const card = mainRef.current;

    const handleMouseMove = (e) => {
      const bounds = card.getBoundingClientRect();

      const mouseX = e.clientX;
      const mouseY = e.clientY;

      const leftX = mouseX - bounds.x;
      const topY = mouseY - bounds.y;

      const center = {
        x: leftX - bounds.width / 2,
        y: topY - bounds.height / 2,
      };

      // Movimiento instantáneo sin delay
      gsap.set(card, {
        scale: 1.05,
        rotateX: center.y / 15,
        rotateY: -center.x / 15,
        transformPerspective: 2000,
        transformOrigin: 'center',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        rotateX: 0,
        rotateY: 0,
        duration: 0.2,
        ease: 'power2.out',
      });
    };

    if (card) {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    }

    return () => {
      if (card) {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      }
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
    <div className='flex h-[calc(100vh-78px)]'>
      <div
        className='w-1/2 flex flex-col items-center justify-center px-8'
        style={{ backgroundColor: slides[current].bg }}
      >
        <p className="text-lg text-center text-black max-w-md leading-relaxed">
          {slides[current].contenido}
        </p>
      </div>

      <div className="relative overflow-hidden bg-black w-1/2">
        <img
          ref={bgRef}
          key={`bg-${current}`}
          src={slides[current].src}
          className="absolute inset-0 w-full h-full object-cover blur-md scale-105 opacity-0 transition-opacity duration-100"
          alt="Fondo actual"
        />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative w-2/4 h-3/4">
            <img
              ref={mainRef}
              key={`main-${current}`}
              src={slides[current].src}
              className="w-full h-full object-contain opacity-0 rounded-lg"
              alt={slides[current].name}
            />
            <h1 className="text-4xl font-roboto font-light text-center mb-6 text-[#d0d0d0] pt-4">
              "{slides[current].titulo}"
            </h1>
            <div
              ref={glowRef}
              className="absolute inset-0 pointer-events-none rounded-lg z-10"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Carrousel;
