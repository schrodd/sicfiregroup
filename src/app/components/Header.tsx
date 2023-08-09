'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import NavLink from './NavLink';

export default function Header(){
  return (
    <header className="flexrow md:justify-between w-full px-[12%] bg-gradient-to-t from-black/30 hover:bg-black/50 to-black/70 backdrop-blur transition text-white shadow-lg fixed top-0 z-50">
      <a href='/' className='bg-white backdrop-blur shadow-lg -mb-6 w-20 h-20 md:w-24 md:h-24 flexrow hover:bg-white transition'>
        <img src='/logo.png' alt='SICFIRE Logo' className="main-logo h-4/5"/>
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
          <li><a href="tel:1122550255"><LocalPhoneIcon className='hover:text-orange-600 transition'/></a></li>
          <li><a href="https://www.linkedin.com/in/sic-fire-group-109895231/" rel='noreferrer' target='_blank'><LinkedInIcon className='hover:text-orange-600 transition'/></a></li>
        </ul>
      </nav>
    </header>
  )
}