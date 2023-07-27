'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavLink from './NavLink';

export default function MainBanner() {
  return (
    <main className="h-[650px] bg-[url('/bg2.jpg')] bg-cover relative bg-center bg-fixed">
      <div className="flexrow">
        <header className="flexrow md:justify-between w-full px-[12%] bg-gradient-to-t from-black/30 hover:bg-black/50 to-black/70 backdrop-blur transition text-white shadow-lg fixed top-0 z-50">
          <a href='/' className='bg-white/90 backdrop-blur shadow-lg -mb-6 w-24 h-24 flexrow hover:bg-white transition'>
            <img src='/logo.png' alt='SICFIRE Logo' className="main-logo"/>
          </a>
          <nav className="hidden md:block">
            <ul className="flexrow gap-4 drop-shadow">
              <li className="tracking-wider text-sm font-semibold mt-1">
                <NavLink href=''>NOSOTROS</NavLink>
              </li>
              <li className="tracking-wider text-sm font-semibold mt-1">
                <NavLink href=''>SERVICIOS</NavLink>
              </li>
              <li className="tracking-wider text-sm font-semibold mt-1">
                <NavLink href=''>CONTACTO</NavLink>
              </li>
              <li><LocalPhoneIcon className='hover:text-orange-600 transition'/></li>
              <li><LinkedInIcon className='hover:text-orange-600 transition'/></li>
            </ul>
          </nav>
        </header>
      </div>
      <div className="absolute bottom-0 bg-white/70 backdrop-blur flexcol text-white text-center px-8 py-10 border-t-8 border-orange-600 md:right-[12%] md:text-right md:items-end md:w-1/3 md:bottom-[150px] md:border-r-8 md:border-t-0 shadow-lg">
        <h1 className="mb-3 text-orange-600 md:text-3xl !leading-8">SERVICIO INTEGRAL CONTRA INCENDIOS</h1>
        <p className="text-zinc-800 text-sm">Proveemos servicios de ingeniería contra incendios,
        con profesionales y técnicos con alta experiencia y
        notablemente calificados en el área de protección
        contra incendios y seguridad humana.</p>
      </div>
    </main>
  )
}