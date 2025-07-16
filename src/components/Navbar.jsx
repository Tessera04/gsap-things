import React from 'react'

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[9999]">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-14">
          <div className="flex items-center">
            <h1 className="text-xl font-medium text-gray-900 tracking-tight">
              Gemo Planet
            </h1>
          </div>
          
          <div className="flex items-center space-x-8">
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
              Inicio
            </button>
            <button className="text-sm text-gray-600 hover:text-gray-900 transition-colors duration-300">
              Acerca
            </button>
            <button className="text-sm text-gray-900 hover:text-gray-600 transition-colors duration-300">
              Contacto
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar