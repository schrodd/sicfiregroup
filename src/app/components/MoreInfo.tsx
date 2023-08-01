'use client'
import { PiShieldCheckBold } from 'react-icons/pi'

export default function MoreInfo() {
  return (
    <section className="bg-[url('/bgorange.jpg')] bg-cover bg-center bg-fixed flexcol p-10 md:py-16 md:px-[15%] text-center gap-5">
      <PiShieldCheckBold className='text-white w-10 h-10'/>
      <h2 className="text-2xl text-white drop-shadow">SEGURIDAD ANTE TODO</h2>
      <p className="max-w-[700px] text-white drop-shadow">Trabajamos con mucha vocación al servicio de la seguridad en función de disminuir riesgos y con
      un único objetivo principal: <b>salvaguardar vidas y proteger los bienes materiales para garantizar la
      continuidad del negocio.</b></p>
      <div className="md:mx-5 md:flex md:flex-row md:items-center p-0 bg-gradient-to-t from-zinc-200 to-zinc-100 shadow-lg max-w-[1000px] my-5">
        <div className='m-5 md:my-0 md:mx-10 md:py-5'>
          <p className='text-xs font-bold tracking-widest text-orange-600 mb-1 w-fit'>NOVEDAD</p>
          <p className="md:text-justify text-zinc-500 text-sm">Incorporamos el diseño y fabricación de tanques de reserva de agua tanto para el cumplimiento de normas locales como de normas internacionales. Diseñamos tanques de reserva de agua para el sistema de extinción de planta o negocio, garantizamos y aseguramos un suministro constante y confiable para los sistemas de extinción todos diseñados bajo estrictas normas y las más exigentes siempre a medida del proyecto y necesidad de cada cliente.
          </p>
        </div>
        <img src='/agua.jpg' alt="About us text container" className={`w-full h:auto md:w-auto md:h-52`}/>
      </div>
    </section>
  )
}