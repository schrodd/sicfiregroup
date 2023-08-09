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
    <footer className="bg-gradient-to-b from-zinc-800 to-zinc-900 flex flex-col md:flex-row text-white gap-10 p-10 md:p-0 md:pl-[15%]">
      <div className="bg-white border-orange-600 border-b-4 p-3 pl-2 w-fit h-fit md:mt-10">
        <div className="w-[85px] h-[80px] bg-[url('/logo.png')] bg-center bg-contain bg-no-repeat"></div>
      </div>
      <div className="flex-1 tracking-wider font-light md:mt-10">
        <h3 className="border-b border-white mb-2 pb-1 font-semibold">Secciones</h3>
        <ul className="text-xs list-disc list-inside text-white/70">
          <li><a href="#nosotros">Nosotros</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#clientes">Clientes</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </div>
      <div className="flex-1 tracking-wider font-light md:mt-10">
        <h3 className="border-b border-white mb-2 pb-1 font-semibold">Datos de contacto</h3>
        <ul className="text-xs list-inside text-white/70">
          <li className='flexrow w-fit gap-2'><PiPhoneBold/>+54 9 11 6515-4907</li>
          <li className='flexrow w-fit gap-2'><PiPhoneBold/>+54 9 11 3375-4669</li>
          <li className='flexrow w-fit gap-2'><PiMapPinBold/>Rosetti 2641 - San Miguel, Buenos Aires</li>
          <li className='flexrow w-fit gap-2'><PiMapPinBold/>Rojas 1804 - Villa Crespo, Ciudad de Buenos Aires.</li>
          <li className='flexrow w-fit gap-2'><PiEnvelopeBold/>infosicfire@gmail.com</li>
        </ul>
      </div>
      <div className="flex-grow tracking-wider font-light">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.0664929928375!2d-58.7159413!3d-34.5265433!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcbd4712cbf1d5%3A0xb93541f2c90bf617!2sRosetti%202641%2C%20San%20Miguel%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses-419!2sar!4v1691444518769!5m2!1ses-419!2sar" height="250" width="300" loading="lazy" referrerPolicy="no-referrer-when-downgrade" className='w-full'></iframe>
      </div>
    </footer>
    <Touch/>
    </>
  )
}