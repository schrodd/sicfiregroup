'use client'
import { PiCaretRightLight } from 'react-icons/pi'
import { useState } from 'react'
import { serviceDropdownItems } from '../types/Types'
import { GiWaterTank, GiShower, GiRingingAlarm, GiChemicalBolt, GiSteam } from 'react-icons/gi'
import { AiFillPlusCircle } from 'react-icons/ai'
import ServiceDetailsSwiper from './ServiceDetailsSwiper'

const featuredServices: {name: string, icon: React.ReactNode}[] = [
  { name: 'Tanques de reserva de agua', icon: <GiWaterTank className='w-12 h-12'/> },
  { name: 'Rociadores automáticos', icon: <GiShower className='w-12 h-12'/> },
  { name: 'Sistemas de detección y alarma', icon: <GiRingingAlarm className='w-12 h-12'/> },
  { name: 'Sistemas de extinción con gases', icon: <GiSteam className='w-12 h-12'/> },
  { name: 'Sistemas de espumas', icon: <GiChemicalBolt className='w-12 h-12'/> },
  { name: 'Otros sistemas contra incendios', icon: <AiFillPlusCircle className='w-12 h-12'/> }
]

function FeaturedService({icon, children}: {icon: React.ReactNode, children: string}){
  return (
    <div className="flexcol bg-zinc-100 w-full md:w-1/4 min-h-[140px] outline outline-1 outline-zinc-300 text-zinc-500 hover:text-orange-600 shadow transition">
      {icon}
      <h3 className='w-2/3 text-center text-sm mt-2'>{children}</h3>
    </div>
  )
}

function FirstSub(){
  return (
    <div className="flex flex-wrap max-w-[1200px]">
      <div className="w-full md:w-1/2 pr-5 pb-5">
        <h2 className='border-l-8 border-orange-600 pl-3 mb-2'>NUESTROS SERVICIOS</h2>
        <p className='text-sm text-zinc-500'>Contamos con una amplia gama de soluciones innovadoras y de alta calidad en ingeniería contra incendios. Nuestros servicios especializados y productos de excelencia superan expectativas, creando entornos seguros y tranquilos para nuestros clientes.</p>
      </div>
      {featuredServices.map((e,i) => (
        <FeaturedService key={i} icon={e.icon}>{e.name}</FeaturedService>
      ))}
    </div>
  )
}

function SecondSub(){
  return (
    <div className='md:flex md:flex-row md:items-center max-w-[1200px] gap-5'>
      <div className='flex-1'>
        <p className='text-xs font-bold tracking-widest text-orange-600 mb-1'>NUESTRA MISIÓN</p>
        <p className='text-2xl font-semibold mb-3 md:mr-5'>Ofrecer un excelente servicio con el compromiso de proteger vidas, bienes y el medio ambiente.</p>
      </div>
      <div className='text-zinc-500 text-sm flex-1 text-justify flexcol gap-3'>
        <p>Brindamos soluciones innovadoras y de alta calidad en ingeniería contra incendios, siempre ajustado a las necesidades del cliente y según las leyes y normas que rigen el campo de la seguridad contra incendios.</p>
        <p>Nos comprometemos a ofrecer servicios y productos especializados que excedan las expectativas de nuestros clientes y cumplan con los más altos estándares de seguridad. Trabajamos con pasión y dedicación para crear entornos más seguros que garanticen tranquilidad y seguridad a nuestros clientes.</p>
      </div>
    </div>
  )
}

function ThirdSub({toggle, items}: {toggle: (n:number) => void, items: serviceDropdownItems[]}){
  return (
    <div className='dropdown flex flex-col w-full gap-1 max-w-[1200px]'>
      {items.map((e,i) => (
        <div key={i}>
          <button onClick={() => toggle(i)} className={`px-8 py-5 text-white text-left w-full shadow-lg transition-all flex justify-between relative ${e.active ? 'bg-orange-600' : 'bg-zinc-900'}`}>
            <p>{e.title}</p>
            <PiCaretRightLight className={`${e.active && 'rotate-90'} transition w-6 h-6`}/>
          </button>
          <div className={`${e.active ? 'max-h-none px-6 py-5 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white shadow-lg slow-animation text-zinc-600 text-sm`}>
            {e.content}
          </div>
        </div>
      ))}
    </div>
  )
}

function DisIngService(){
  return (
    <div className='flex flex-col gap-3'>
      <ServiceDetailsSwiper/>
      <p className=''>Desarrollo de ingeniería teniendo como base las últimas versiones de la Norma Nacional IRAM 3597, Ley Nacional 19587 y las Standares NFPA (National Fire Protection Association) aplicables, en los siguientes sistemas de agua contra incendios:</p>
      <ul className='list-disc list-inside'>
        <li>Sistemas de Rociadores Automáticos</li>
        <li>Sistemas de Hidrantes</li>
        <li>Sistema de agua fraccionada en transformadores</li>
        <li>Sistemas de agua fraccionada en reservorios de gases y líquidos inflamables</li>
        <li>Sistemas de preacción</li>
        <li>Sala de bombas</li>
        <li>Tanques de reserva de agua contra incendios nacionales y bajo normas internacionales</li>
        <li>Sistemas de espumas de baja, media y alta expansión</li>
        <li>Sistemas de Detección y Alarma contra incendios</li>
        <li>Sistemas de Extinción con gases</li>
      </ul>
      <p>Contamos con Ingenieros Calificados y certificados en fábrica para el diseño de sistemas de extinción por agente limpio utilizando la norma NFPA 2001 “Sistemas de extinción de incendios mediante agentes limpios”, con el fin de proteger activos e información de mayor valor.</p>
    </div>
  )
}

function ObrasService(){
  return (
    <div className='flex flex-col gap-3'>
      <div className='flex flex-col md:flex-row gap-1 drop-shadow mb-2 overflow-hidden pt-2'>
        <img src="/serv/2/1.png" alt="" className='flex-grow md:w-1/3'/>
        <img src="/serv/2/2.png" alt="" className='flex-grow md:w-1/3'/>
        <img src="/serv/2/3.png" alt="" className='flex-grow md:w-1/3'/>
      </div>
      <p className=''>Contamos con personal de jefatura y supervisión de obras con amplia experiencia en el rubro de ingeniería contra incendios, contamos con equipamiento y herramental propio para todas las especialidades antes descritas.</p>
      <p>Construcción de obras llave en mano (Lump Sum).</p>
    </div>
  )
}

function MaintenanceService(){
  return (
    <div className='flex flex-col md:flex-row gap-3'>
      <div>
        <p className=''>Realizamos mantenimientos mensuales trimestrales y anuales de las instalaciones fijas siempre respetando y garantizando la prevención y la extinción de incendio según programas de nuestros clientes, según normas IRAM 3546 y la norma NFPA 25 “Inspecciones, Pruebas, Mantenimiento”, resoluciones del GCABA, de la Agencia Gubernamental de Control, y otras resoluciones vigentes para el mantenimiento de instalaciones fijas contra incendios.</p>
        <p>Ofrecemos mantenimiento de los sistemas de protección contra incendios y desarrollamos operaciones de mantenimiento específicas para cada sistema. A través del mantenimiento sometemos a las instalaciones a las condiciones que se darían en el caso de producirse un incendio. De esta manera, medimos y parametrizamos la respuesta que ofrecen los sistemas y comprobamos que cumplen las prestaciones para las que fueron diseñadas e instaladas.</p>
      </div>
      <img src="/serv/3/ing.jpg" alt="bomberos" className='w-[350px] h-fit shadow-lg'/>
    </div>
  )
}

function ConsultingService(){
  return (
    <div className='flex flex-col md:flex-row gap-3'>
      <div>
        <p className=''>Brindamos el servicio de técnicos en seguridad e higiene en obras para distintas necesidades de nuestros clientes:</p>
        <ul className='pl-4 pt-2 list-disc'>
          <li>Capacitaciones, conferencias, entrenamientos, planes y simulacros de evacuación, informes en base a auditorías externas de verificación de estado de cumplimiento de las normativas vigentes en higiene y seguridad en el trabajo, calidad y medio ambiente</li>
          <li>Informes en base a auditorías externas de verificación de estado de cumplimiento de las normativas vigentes en higiene y seguridad en el trabajo, calidad y medio ambiente</li>
          <li>Programas de seguridad, procedimientos de trabajo seguro, análisis de riesgo, optimización de prevención de riesgos laborales</li>
          <li>Mediciones de ambiente de trabajo, según protocolos actualizados y bajo normativa vigente; ruido laboral, puesta a tierra, iluminación, carga térmica, carga de fuego, entre otros</li>
          <li>Planes de evacuación. Sistema de autoprotección Ley 5920/15 (CABA)</li>
          <li>Auditorías de cumplimiento de las normativas aplicables. Relevamientos, auditorías e informes técnicos según las exigencias y necesidades del cliente siempre acatando las disposiciones reglamentarias y leyes nacionales y provinciales, manteniendo la exigencia de la ley 19.587 del decreto 351 de higiene y seguridad en el trabajo</li>
          <li>Ejecución de planos antisiniestrales con gestión de aprobación para habilitación de industrias</li>
        </ul>
      </div>
      <img src="/serv/4/bomb.jpg" alt="bomberos" className='w-[350px] h-fit shadow-lg'/>
    </div>
  )
}

const dropdownItems: serviceDropdownItems[] = [
  {
    title: 'Diseño e ingeniería contra incendios',
    content: <DisIngService/>,
    imageUrl: '',
    active: false
  },
  {
    title: 'Obras - Manejo y supervisión',
    content: <ObrasService/>,
    imageUrl: '',
    active: false
  },
  {
    title: 'Mantenimiento de instalaciones fijas contra incendios',
    content: <MaintenanceService/>,
    imageUrl: '',
    active: false
  },
  {
    title: 'Consultoría de Seguridad, Higiene y ambiente',
    content: <ConsultingService/>,
    imageUrl: '',
    active: false
  }
]

export default function Services() {
  const [dropdown, setDropdown] = useState(dropdownItems)
  function toggleDropdown(idx: number): void {
    setDropdown(state => {
      const newState = [...state]
      newState[idx].active = !newState[idx].active
      console.log(newState)
      return newState
    })
  }
  return (
    <section className="bg-gradient-to-t from-zinc-300 to-zinc-100 py-10 md:py-16 flexcol px-6 md:px-[15%] gap-16 relative">
      <span id='servicios' className="anchor"></span> 
      <FirstSub />
      <SecondSub />
      <ThirdSub toggle={toggleDropdown} items={dropdown}/>
    </section>
  )
}