import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap'

const Navbar = () => {
  const navbarRef = useRef(null)
  const videoRef = useRef(null)
  const videoContainerRef = useRef(null)
  const mainRef = useRef(null)
  const [showVideo, setShowVideo] = useState(true)

  const [isLogoFixed, setIsLogoFixed] = useState(false)

  useEffect(() => {
    const navbar = navbarRef.current
    const video = videoRef.current
    const container = videoContainerRef.current

    gsap.set(navbar, { height: '100vh' })

    video.play()

    const handleEnded = () => {
      requestAnimationFrame(() => {
        const targetWidth = 64
        const targetHeight = 64
        const targetLeft = 38
        const targetTop = 430

        const x =
          -window.innerWidth / 2 + targetWidth / 2 + targetLeft
        const y =
          -window.innerHeight / 2 + targetHeight / 2 + targetTop

        const tl = gsap.timeline()

        tl.to(container, {
          width: targetWidth,
          height: targetHeight,
          x,
          y,
          duration: 0.3,
          ease: 'power1.out',
          onComplete: () => setIsLogoFixed(true),
        })

        tl.to(
          navbar,
          {
            height: '80px',
            duration: 0.3,
            ease: 'power2.inOut',
            onComplete: () => {
              if (mainRef.current) {
                gsap.fromTo(
                  mainRef.current,
                  { opacity: 0, y: 50 },
                  { opacity: 1, y: 0, duration: 0.2, ease: 'power2.out', onComplete: () => { setShowVideo(false) }, }
                )
              }
              else {
                setShowVideo(false) // fallback
              }
            },
          },
          '<'
        )
      })
    }

    video.addEventListener('ended', handleEnded)
    return () => video.removeEventListener('ended', handleEnded)
  }, [])

  return (
    <>
      <nav
        ref={navbarRef}
        className="fixed top-0 left-0 right-0 z-[9998] overflow-hidden bg-[#d0d0d0]"
        style={{ height: '100vh' }}
      >
        <div className="w-full h-full flex items-center justify-center relative container gap-2 py-2 lg:px-0 px-2 mx-auto">
          <div
            ref={videoContainerRef}
            className={`overflow-hidden flex items-center justify-center ${isLogoFixed ? 'fixed z-[9999]' : 'relative'
              }`}
            style={{
              width: isLogoFixed ? '100px' : '100%',
              height: isLogoFixed ? '50px' : '100%',
              transformOrigin: 'center center',
            }}
          >
            {showVideo && (
              <video
                ref={videoRef}
                src="/video/preview2.mp4"
                className="w-full h-full object-cover"
                muted
                playsInline
              />
            )}
          </div>
        </div>

        {isLogoFixed && (
          <div
            ref={mainRef}
            className="top-0 left-0 right-0 z-[9999] fixed pt-2"
            style={{ height: '80px' }}
          >
            <div className="flex justify-between items-center h-full w-full">
              <div className="flex items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 595.28 841.89"
                  width="80"
                  height="112"
                  fill="none"
                  className='pt-2'
                >
                  <g>
                    <path
                      d="M420.7,434.14c.28-2.31,4.07,1.59,6.03,2.85,8.19,5.26,15.35,4.41,18,3.37,4.14-1.63,6.27-7.16,6.15-11.27-.12-3.86,2-43.23.61-45.5-1.01-1.66-4.2-1.77-6.2-.53-4.04,2.52-9.5,8.83-14,10.02-3.78,1.01-12.04-.39-15.83-1.19-6.86-1.45-7.55-17.76-14.34-13.94-8.31,4.68.84,16.74,5.43,21.58,4.31,4.55,13.68,3.49,19.96,4.38,1.2.17,2.16,1.08,2.48,2.25,6.23,22.75.28,9.61-12.17,10.63-4.1.34-7.36,3.59-7.96,7.66-1.49,9.99-4.19,27.9-1.08,33.39,2.46,4.59,11.49,4.39,12.05-1.55,0,0,.86-22.16.86-22.16Z"
                      fill="#1f1f24"
                    />
                    <path
                      d="M433.48,450.21l4.32,34.45c.38,2.12,1.62,4.08,3.55,5.02,4.79,2.33,10.05-.79,9.83-7.66l-3.39-34.15c-.61-4.16-4.62-6.93-8.73-6.03h0c-3.81.84-6.27,4.53-5.58,8.37Z"
                      fill="#1f1f24"
                    />
                    <path
                      d="M433.01,349.18l9.32,28.86c.67,1.75,2,3.9,3.87,3.73,4.5-.4,6.7-.97,5.38-6.83l-6.68-30.1c-1.2-3.47-5.1-5.19-8.48-3.75h0c-3.13,1.34-4.64,4.91-3.42,8.09Z"
                      fill="#1f1f24"
                    />
                    <path
                      d="M437.09,373.41c-8.47-10.11-24.91,1.16-18.51,12.52,8.26,14.67,29.03.03,18.51-12.52Z"
                      fill="#1f1f24"
                    />
                  </g>
                  <path
                    d="M123.57,514.55c0,.38,0-.3,0-1.91-.01-24.92-.06-273.74,1.32-310.73.1-2.56,2.2-4.58,4.76-4.58h39.28c1.84-1.69,33.11,32.16,34.8,33.99l267.19,283.23c.99,1.07.95,1.94.38,2.82-.83,1.28-2.33,1.96-3.85,1.96h-4.49s-339.4,0-339.4,0"
                    fill="#1f1f24"
                  />
                  <path
                    d="M303.1,360.43c-24.51-24.51-33.39-61.72-20.25-96.17,11.9-31.18,41.15-53.34,74.36-56.72,56.95-5.79,104.46,41.66,98.78,98.59-3.32,33.23-25.45,62.54-56.64,74.49-34.47,13.21-71.73,4.33-96.26-20.2Z"
                    fill="#1f1f24"
                  />
                </svg>

                <h1 className="text-[55px] font-normal text-[#1f1f24] tracking-tight pb-1">
                  Planetgemo
                </h1>
              </div>

              <div className="flex items-center pr-5 pl-55 ml-70 pt-1 w-full">
                <button className="text-[42px] text-gray-600 hover:text-[#1f1f24] transition-colors duration-300 mx-auto pl-4">
                  Obras
                </button>
                <button className="text-[42px] text-gray-600 hover:text-[#1f1f24] transition-colors duration-300 mx-16 pl-4">
                  Servicios
                </button>
                <button className="text-[42px] text-gray-600 hover:text-[#1f1f24] transition-colors duration-300 ml-auto pr-4">
                  Contacto
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </>
  )
}

export default Navbar
