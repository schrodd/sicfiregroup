'use client'
import { PiShieldCheckBold, PiArrowsLeftRightBold, PiClipboardTextBold, PiSealCheckBold } from 'react-icons/pi'
import Replicate from './Replicate'

export default function MoreInfo() {
  return (
    <section className="bg-[url('/bgorange.jpg')] bg-cover bg-center bg-fixed flexcol p-10 md:py-16 md:px-[15%] text-center gap-5 text-zinc-600">
      <PiShieldCheckBold className='text-white w-10 h-10'/>
      <h2 className="text-2xl text-white drop-shadow">SEGURIDAD ANTE TODO</h2>
      <p className="max-w-[700px] text-white drop-shadow">Trabajamos con mucha vocación al servicio de la seguridad en función de disminuir riesgos y con
      un único objetivo principal: <b>salvaguardar vidas y proteger los bienes materiales para garantizar la
      continuidad del negocio.</b></p>
      <div className="md:flex md:flex-row md:items-center p-0 bg-gradient-to-t from-zinc-200 to-zinc-100 shadow-lg max-w-[1000px] mt-5">
        <div className='m-5 md:my-0 md:mx-10 md:py-5'>
          <p className='text-xs font-bold tracking-widest text-orange-600 mb-1 md:w-fit'>NOVEDAD - TANQUES DE RESERVA DE AGUA</p>
          <p className="md:text-justify text-sm">Incorporamos el diseño y fabricación de tanques de reserva de agua tanto para el cumplimiento de normas locales como de normas internacionales.<br/>Diseñamos tanques de reserva de agua para el sistema de extinción de planta o negocio, garantizamos y aseguramos un suministro constante y confiable para los sistemas de extinción todos diseñados bajo estrictas normas y las más exigentes siempre a medida del proyecto y necesidad de cada cliente.
          </p>
        </div>
        <img src='/agua.jpg' alt="About us text container" className={`w-full h:auto md:w-auto md:h-52`}/>
      </div>
      <div className='w-full md:flex gap-5 max-w-[1000px]'>
        <div className='flex flex-col p-5 md:py-8 md:px-10 bg-gradient-to-t from-zinc-200 to-zinc-100 shadow-lg gap-2 flex-1 mb-2 md:mb-0'>
          <div className='flex items-center gap-2 mb-2 text-orange-600'>
            <PiSealCheckBold className='w-9 h-9 mr-1 mb-1'/>
            <p className='font-semibold tracking-wide text-left w-min leading-[17px] '>Calidad y durabilidad</p>
          </div>
          <p className='text-xs text-left'>Fabricados con materiales de alta resistencia y con rigurosos estándares de calidad, nuestros tanques están diseñados para resistir las condiciones más exigentes y mantener su integridad a lo largo del tiempo.</p>
        </div>
        <div className='flex flex-col p-5 md:py-8 md:px-10 bg-gradient-to-t from-zinc-200 to-zinc-100 shadow-lg gap-2 flex-1 mb-2 md:mb-0'>
          <div className='flex items-center gap-2 mb-2 text-orange-600'>
            <PiArrowsLeftRightBold className='w-9 h-9 mr-1 mb-1'/>
            <p className='font-semibold tracking-wide text-left w-min leading-[17px] '>Adaptabilidad y versatilidad</p>
          </div>
          <p className='text-xs text-left'>Ofrecemos opciones personalizadas adaptadas a las necesidades específicas de tu proyecto. <br /> Nuestros tanques pueden ser usados en edificios comerciales, instalaciones industriales, entre otros.</p>
        </div>
        <div className='flex flex-col p-5 md:py-8 md:px-10 bg-gradient-to-t from-zinc-200 to-zinc-100 shadow-lg gap-2 flex-1 mb-2 md:mb-0'>
          <div className='flex items-center gap-2 mb-2 text-orange-600'>
            <PiClipboardTextBold className='w-9 h-9 mr-1 mb-1'/>
            <p className='font-semibold tracking-wide text-left w-min leading-[17px] '>Cumplimiento normativo</p>
          </div>
          <p className='text-xs text-left'>Todos nuestros tanques cumplen con las normativas y regulaciones de seguridad contra incendios, brindando tranquilidad y confianza a nuestros clientes.</p>
        </div>
      </div>
      <div className='p-5 md:py-8 md:px-10 backdrop-blur text-white bg-white/5 text-left shadow-lg max-w-[1000px]'>
        <p className='text-xl font-bold tracking-wide mb-3 drop-shadow'>Ventajas de los tanques de reserva de agua</p>
        <ul className='list-disc list-inside text-sm drop-shadow'>
          <li>Incrementa la efectividad de los sistemas de extinción por agua.</li>
          <li>Reduce los tiempos de respuesta ante incendios.</li>
          <li>Aumenta la seguridad y la protección de las personas y propiedades.</li>
          <li>Minimiza el impacto ambiental al contar con una fuente sostenible de agua para combatir incendios.</li>
          <li>Nuestro equipo de expertos en ingeniería contra incendios está listo para asesorarte en la selección del tanque de agua ideal para tu proyecto.</li>
          <li>Tendrás el respaldo de una trayectoria reconocida en la industria y el compromiso de brindar soluciones que marcan la diferencia.</li>
        </ul>
        <p className='mt-3 font-semibold drop-shadow'>¡Contáctanos hoy mismo para obtener más información y un presupuesto personalizado!</p>
      </div>
    </section>
  )
}