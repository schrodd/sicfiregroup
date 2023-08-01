'use client'
import { PiPaperPlaneRightBold } from 'react-icons/pi'

function FormItem({name, label, type}: {name:string, label:string, type:string}){
  return (
    <div className={`flex flex-col w-full md:w-1/2 pr-3`}>
      <label htmlFor={name} className='text-sm font-light text-zinc-400 mb-1'>{label}</label>
      <input type={type} name={name} id={name} className='px-3 py-2 text-zinc-700 shadow text-sm' />
    </div>
  )
}

export default function ContactUs() {
  return (
    <section id='contacto' className="flex bg-gradient-to-t from-zinc-300 to-zinc-100">
      <div className="md:w-1/2 p-10 md:pl-[15%] md:py-16 md:pr-10">
        <h2 className='border-l-8 border-orange-600 pl-3 mb-5'>CONTACTANOS</h2>
        <form className="flex flex-wrap gap-y-3" action="https://formsubmit.co/contacto@touchandgrow.com.ar" method="POST" id='contact-form'>
          <FormItem name='name' label='Nombre' type='text'/>
          <FormItem name='email' label='Email' type='email'/>
          <FormItem name='tel' label='Teléfono' type='number'/>
          <div className='flex flex-col w-full md:w-1/2 pr-3'>
            <label htmlFor="reason" className='text-sm font-light text-zinc-400 mb-1'>Motivo</label>
            <select name="reason" id="reason" className='p-2 text-zinc-700 shadow rounded-none text-sm' placeholder='general'>
              <option value="general">Consulta general</option>
              <option value="cotizacion">Cotización</option>
              <option value="agendar">Agendar reunión</option>
            </select>
          </div>
          <div className={`flex flex-col w-full h-24 pr-3`}>
            <label htmlFor='msg' className='text-sm font-light text-zinc-400 mb-1'>Mensaje</label>
            <textarea name='msg' id='msg' className='px-3 py-2 text-zinc-700 shadow text-sm flex-grow line-clamp-3' />
          </div>
          <input type="hidden" name="_next" value="http://localhost:3000/website"></input>
          {/* <input type="hidden" name="_cc" value="another@email.com"></input> */}
          <input type="hidden" name="_captcha" value="false"></input>
          <button type="submit" className='flexrow bg-orange-600 hover:bg-orange-500 transition text-white px-3 py-2 mt-3 mr-3 shadow-lg gap-2 w-full'>Enviar <PiPaperPlaneRightBold/></button>
        </form>
      </div>
      <div className="bg-[url('/bg2.jpg')] bg-center bg-cover w-1/2 h-auto hidden md:block"></div>
    </section>
  )
}