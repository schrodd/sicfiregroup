'use client'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function MainBanner() {
  return (
    <main className="h-[650px] bg-[url('/bg2.jpg')] bg-cover relative bg-center">
      <div className="flexrow">
        <header className="relative flexrow md:justify-between w-full px-[12%] bg-gradient-to-t from-black/30 hover:bg-black/50 to-black/70 backdrop-blur transition text-white shadow-lg">
          <div className="bg-white/90 backdrop-blur shadow-xl -mb-6 w-24 h-24 flexrow">
            <img src='/logo.png' alt='SICFIRE Logo' className="main-logo"/>
          </div>
          <nav className="hidden md:block">
            <ul className="flexrow gap-4 drop-shadow">
              <li className="tracking-wider text-sm font-semibold">NOSOTROS</li>
              <li className="tracking-wider text-sm font-semibold">SERVICIOS</li>
              <li className="tracking-wider text-sm font-semibold">CONTACTO</li>
              <li className='mb-1'><LocalPhoneIcon/></li>
              <li className='mb-1'><LinkedInIcon/></li>
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