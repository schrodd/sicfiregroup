'use client'
import { PiWrenchThin, PiArrowRightLight, PiArrowLeftLight } from "react-icons/pi";
import Replicate from "./Replicate";
import Title from "./Title";
import { useState } from "react";
import { link } from "fs";

function Client({img, children, togglePopup, index}:any){
  return (
    <div className="flex flex-col justify-center px-4 min-h-[140px] shadow transition-all slow-animation w-full md:w-1/4">
      <div className={`w-full bg-white h-16 mb-2 border-b-4 border-orange-600 flexcol p-3`}>
        <img src={img} alt={children} className="max-h-full" />
      </div>
      <p className="leading-5 font-semibold">{children}</p>
      <button className="text-xs font-light flexrow gap-1 w-fit hover:text-orange-500 transition mt-1" onClick={() => togglePopup(null, index)}>
        Detalles
        <PiArrowRightLight />
      </button>
    </div>
  )
}

export default function Clients() {
  interface ClientesType {
    name:string
    img:string
    items: string[]
  }
  const clientes: ClientesType[] = [
    {
      name:'AES Argentina',
      img: '/clientes/aes.png',
      items: [
        "Hidroeléctrica Alicura",
        "Hidroeléctrica ULLUM",
        "Hidroeléctrica El Tunal",
        "Hidroeléctrica Caracoles",
        "Central Térmica Sarmiento"
      ]    
    },
    {
      name:'Grupo RB - Ferrosider', 
      img: '/clientes/ferro.png',
      items: [
        "Red de hidrantes contra incendios exterior e interior",
        "Casa de bombas"
      ]    
    },
    {
      name:'Pampa Energía', 
      img: '/clientes/pampa.png',
      items: ["Pase a ciclo combinado Central Térmica Loma de La Lata (para Isolux – Tecna)"]
    },
    {
      name:'SC Johnson & Son', 
      img: '/clientes/scj.png',
      items: [
        "Líneas de embalaje -Planta Pilar",
        "Terminales paletizadoras -Planta Pilar"
      ]  
    },
    {
      name:'Techint Ingeniería y Construcciones', 
      img: '/clientes/techint.png',
      items: [
        "Central Hidroeléctrica Punta Negra – San Juan",
        "Mina Veladero – San Juan",
        "Mina Pirquitas – Jujuy"
      ]  
    },
    {
      name:'Yacimientos Petrolíferos Fiscales S.A. (YPF)', 
      img: '/clientes/ypf.png',
      items: [
        "Upstream – Downstream",
        "Refinería Plaza Huincul",
        "Refinería La Plata",
        "Refinería Lujan de Cuyo",
        "Terminal La Plata",
        "Terminal La Matanza",
        "Petroquímica La Plata",
        "Jefatura Región OESTE – Neuquén",
        "Unidad Económica -Loma de La Lata",
        "Estación de Bombeo Indio Rico (para AESA)",
        "Estación de Bombeo Chillar (para AESA)",
        "Estación de Bombeo Cacharí (para AESA)",
        "Derivación Brandsen (para AESA)",
        "Cabecera Poliductos- La Plata",
        "Puerto Regasificador -Escobar",
        "Muelle Propanero -Dock Sud",
        "Terminal ORION (Tierra del Fuego)"
      ]    
    },
  ]
  const [clientPopup, setClientPopup]: any = useState({})
  const [popupOpen, setPopupOpen] = useState(false)
  function togglePopup(ev: any, index: number = 0){
    setClientPopup(clientes[index])
    setPopupOpen(state => !state)
  }
  return (
    <section className="flexcol relative text-white p-10 md:py-16 gap-10 md:px-[15%]" id='clientes'>
      <Title>CLIENTES</Title>
      <div className="flex flex-wrap justify-center max-w-[1200px] w-full gap-y-5">
        {clientes.map((e,i) => <Client key={i} img={e.img} togglePopup={togglePopup} index={i}>{e.name}</Client>)}
      </div>
      <div className="flexrow absolute h-full w-full -z-10">
        <div className="bg-zinc-950 flex-1 h-full"></div>
        <div className="bg-zinc-900 flex-1 h-full"></div>
      </div>
      {popupOpen && (
        <div className="wrapper w-screen h-screen fixed top-0 left-0 flexcol z-[55]">
          <div className="bg w-full h-full absolute bg-black/70 backdrop-blur" onClick={togglePopup}/>
          <div className="bg-white z-[60] text-zinc-800 m-5 md:m-0 p-5 border-b-4 border-orange-600 flex flex-col items-start gap-2 max-w-[450px]">
            <img src={clientPopup.img} alt={clientPopup.name} className="max-h-12 self-center" />
            <h2 className="text-center w-full">{clientPopup.name}</h2>
            <ul className="text-sm">
              {clientPopup.items.map((e:string,i:number) => (
                <li key={i}>{e}</li>
              ))}
            </ul>
            <button onClick={togglePopup} className="flexrow gap-2 text-sm">
              <PiArrowLeftLight />
              Volver
            </button>
          </div>
        </div>
      )}
    </section>
  )
}