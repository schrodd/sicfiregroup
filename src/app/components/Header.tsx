'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavLink from './NavLink';
import Link from 'next/link';

export default function Header(){
  return (
    <>
      <header className="flexrow md:justify-between w-full px-[12%] bg-gradient-to-t from-zinc-800 to-zinc-950 md:from-black/60 md:hover:bg-black/80 md:to-black/90 backdrop-blur transition text-white shadow-lg md:fixed md:top-0 z-50">
        <a href='/' className='w-40 py-3 flex flex-col items-center gap-1'>
          <img src='/logo.png' alt='SICFIRE Logo' className="main-logo w-3/5"/>
          <p className='text-center text-xs'>Servicio de Ingeniería Contra Incendios</p>
        </a>
        <nav className="hidden md:block">
          <ul className="flexrow gap-4 drop-shadow">
            <li className="tracking-wider text-sm font-semibold mt-1">
              <NavLink href='#nosotros'>NOSOTROS</NavLink>
            </li>
            <li className="tracking-wider text-sm font-semibold mt-1">
              <NavLink href='#servicios'>SERVICIOS</NavLink>
            </li>
            <li className="tracking-wider text-sm font-semibold mt-1">
              <NavLink href='#clientes'>CLIENTES</NavLink>
            </li>
            <li className="tracking-wider text-sm font-semibold mt-1">
              <NavLink href='#contacto'>CONTACTO</NavLink>
            </li>
            <li><a href="tel:1133754669"><LocalPhoneIcon className='hover:text-orange-600 transition'/></a></li>
            <li><a href="https://www.linkedin.com/in/sic-fire-group-109895231/" rel='noreferrer' target='_blank'><LinkedInIcon className='hover:text-orange-600 transition'/></a></li>
          </ul>
        </nav>
      </header>
      <div className='fixed bottom-8 right-8 w-16 h-16 opacity-80 hover:opacity-100 z-50 transition-all'>
        <a target="_blank" href="https://wa.me/+5491133754669?text=Hola!%20Me%20gustar%C3%ADa%20consultar%20m%C3%A1s%20informaci%C3%B3n%20sobre...">
          <img src="/wsp.svg" alt="Whatsapp icon" className=''/>
        </a>
      </div>
    </>
  )
}