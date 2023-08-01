'use client'
import { PiPhoneBold, PiEnvelopeBold, PiMapPinBold } from 'react-icons/pi'

function Touch(){
  const year = new Date().getFullYear()
  return (
      <div className='py-3 px-5 md:flex justify-between items-center text-zinc-500 text-xs md:text-sm'>
          <p className='text-center md:text-left mb-2 md:mb-0'>Copyright © {year} | SIC FIRE GROUP</p>
          <div className='flexrow gap-3'>
              <p>Desarrollado por</p>
              <a href='https://www.touchandgrow.com.ar/' rel='noopener noreferrer' target='_blank'>
                  <img src="/touch.svg" alt="Touch logo" className='h-6 opacity-30 hover:opacity-40'/>
              </a>
          </div>
      </div>
  )
}

export default function Footer() {
  return (
    <>
    <footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 flex flex-col md:flex-row p-10 md:py-12 md:px-[15%] text-white gap-5 md:gap-10">
      <div className="bg-white border-orange-600 border-b-4 p-3 pl-2 w-fit">
        <div className="w-[85px] h-[80px] bg-[url('/logo.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
      <div className="flex-1 tracking-wider font-light">
        <h3 className="border-b border-white mb-2 pb-1 font-semibold">Secciones</h3>
        <ul className="text-xs list-disc list-inside text-white/70">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className="flex-1 tracking-wider font-light">
        <h3 className="border-b border-white mb-2 pb-1 font-semibold">Datos de contacto</h3>
        <ul className="text-xs list-inside text-white/70">
          <li className='flexrow w-fit gap-2'><PiPhoneBold/>+54 9 11 2255 0255</li>
          <li className='flexrow w-fit gap-2'><PiMapPinBold/>Av Corrientes al 2000, CABA</li>
          <li className='flexrow w-fit gap-2'><PiEnvelopeBold/>contacto@business.com</li>
        </ul>
      </div>
    </footer>
    <Touch/>
    </>
  )
}