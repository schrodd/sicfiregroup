'use client'
import { PiWrenchThin, PiCaretRightLight } from 'react-icons/pi'
import Replicate from './Replicate'
import { useState } from 'react'
import { serviceDropdownItems } from '../types/Types'

function TempServiceItem(){
  return (
    <div className="flexcol bg-zinc-100 w-full md:w-1/4 min-h-[140px] outline outline-1 outline-zinc-300 text-zinc-500 shadow">
      <PiWrenchThin className='w-10 h-10'/>
      <h3>Lorem ipsum</h3>
    </div>
  )
}

function FirstSub(){
  return (
    <div className="flex flex-wrap max-w-[1200px]">
      <div className="w-full md:w-1/2 pr-5 pb-5">
        <h2 className='border-l-8 border-orange-600 pl-3 mb-2'>NUESTROS SERVICIOS</h2>
        <p className='text-sm text-zinc-500'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation.</p>
      </div>
      <Replicate n={6}>
        <TempServiceItem/>
      </Replicate>
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
          <div className={`${e.active ? 'max-h-none px-8 py-5 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white shadow-lg slow-animation`}>
            {e.content}
          </div>
        </div>
      ))}
    </div>
  )
}

function DisIng(){
  return (
    <h1>hola</h1>
  )
}

const dropdownItems: serviceDropdownItems[] = [
  {
    title: 'Diseño e ingeniería contra incendios',
    content: <DisIng/>,
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
    <section className="bg-gradient-to-t from-zinc-300 to-zinc-100 py-10 md:py-16 flexcol px-[10%] md:px-[15%] gap-16">
      <FirstSub />
      <SecondSub />
      <ThirdSub toggle={toggleDropdown} items={dropdown}/>
    </section>
  )
}