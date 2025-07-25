import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const Card3D = () => {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

useEffect(() => {
  const card = cardRef.current;
  const glow = glowRef.current;

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

    // Movimiento instantáneo, sin easing ni delay
    gsap.set(card, {
      scale: 1.5,
      rotateX: center.y / 17,
      rotateY: -center.x / 17,
      transformPerspective: 2000,
      transformOrigin: 'center',
    });

    glow.style.backgroundImage = `
      radial-gradient(
        circle at
        ${center.x + bounds.width / 2}px
        ${center.y + bounds.height / 2}px,
        #ffffff25,
        #00000000
      )
    `;
  };

  const handleMouseLeave = () => {
    gsap.to(card, {
      scale: 1,
      rotateX: 0,
      rotateY: 0,
      duration: 0.2,
      ease: 'power2.out',
    });

    glow.style.backgroundImage = '';
  };

  card.addEventListener('mousemove', handleMouseMove);
  card.addEventListener('mouseleave', handleMouseLeave);

  return () => {
    card.removeEventListener('mousemove', handleMouseMove);
    card.removeEventListener('mouseleave', handleMouseLeave);
  };
}, []);


  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-100">
      <div
        ref={cardRef}
        className="relative w-[300px] h-[400px] text-right font-bold text-[#181a1a] rounded-lg shadow-md bg-cover bg-center transition-all duration-300 hover:shadow-2xl"
        style={{
          backgroundImage:
            "url('./images/sisyphone.png')",
        }}
      >
        <div
          ref={glowRef}
          className="absolute inset-0 pointer-events-none rounded-lg"
        />
      </div>
    </div>
  );
};

export default Card3D;
