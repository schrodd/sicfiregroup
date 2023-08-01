import { PiWrenchThin, PiArrowRightLight } from "react-icons/pi";
import Replicate from "./Replicate";
import Title from "./Title";

function Client({img, children}:any){
  return (
    <div className="flex flex-col justify-center px-4 min-h-[140px] shadow transition-all slow-animation w-full md:w-1/4">
      <div className={`w-full bg-white h-16 mb-2 border-b-4 border-orange-600 flexcol p-3`}>
        <img src={img} alt={children} className="max-h-full" />
      </div>
      <p className="leading-5 font-semibold">{children}</p>
      <button className="text-xs font-light flexrow gap-1 w-fit hover:text-orange-500 transition mt-1">
        Detalles
        <PiArrowRightLight />
      </button>
    </div>
  )
}

export default function Clients() {
  const clientes = [
    {name:'AES Argentina', img: '/clientes/aes.png'},
    {name:'Grupo RB - Ferrosider', img: '/clientes/ferro.png'},
    {name:'Pampa Energía', img: '/clientes/pampa.png'},
    {name:'SC Johnson & Son', img: '/clientes/scj.png'},
    {name:'Techint Ingeniería y Construcciones', img: '/clientes/techint.png'},
    {name:'Yacimientos Petrolíferos Fiscales S.A. (YPF)', img: '/clientes/ypf.png'},
  ]
  return (
    <section className="flexcol relative text-white p-10 md:py-16 gap-10 md:px-[15%]" id='clientes'>
      <Title>CLIENTES</Title>
      <div className="flex flex-wrap justify-center max-w-[1200px] w-full gap-y-5">
        {clientes.map((e,i) => <Client key={i} img={e.img}>{e.name}</Client>)}
      </div>
      <div className="flexrow absolute h-full w-full -z-10">
        <div className="bg-zinc-950 flex-1 h-full"></div>
        <div className="bg-zinc-900 flex-1 h-full"></div>
      </div>
    </section>
  )
}