'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavLink from './NavLink';

export default function Header(){
  return (
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
            <NavLink href=''>CLIENTES</NavLink>
          </li>
          <li className="tracking-wider text-sm font-semibold mt-1">
            <NavLink href=''>CONTACTO</NavLink>
          </li>
          <li><LocalPhoneIcon className='hover:text-orange-600 transition'/></li>
          <li><LinkedInIcon className='hover:text-orange-600 transition'/></li>
        </ul>
      </nav>
    </header>
  )
}