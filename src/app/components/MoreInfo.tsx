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
        <p className="md:text-justify m-5 md:my-0 md:mx-10 text-zinc-500">Proveemos servicios de ingeniería contra incendios, somos una empresa conformada por profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana, abarcamos distintos sectores desde la higiene y seguridad hasta la instalación y mantenimiento de sistemas contra incendios.</p>
        <img src='https://img.freepik.com/premium-photo/young-man-engineer-working-factory_1303-28457.jpg' alt="About us text container" className={`w-full h:auto md:w-auto md:h-52`}/>
      </div>
    </section>
  )
}