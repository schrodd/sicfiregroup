import { PiWrenchThin, PiArrowRightLight } from "react-icons/pi";
import Replicate from "./Replicate";
import Title from "./Title";

export default function Clients() {
  return (
    <section className="flexcol relative text-white py-16 gap-10 px-[15%]">
      <Title>CLIENTES</Title>
      <div className="flex flex-wrap max-w-[1200px] w-full gap-y-5">
        <Replicate n={8}>
          <div className="flex flex-col justify-center px-4 min-h-[140px] shadow transition-all slow-animation w-1/4">
            <div className="w-full bg-white bg-[url('https://1000marcas.net/wp-content/uploads/2021/06/YPF-logo.png')] h-16 bg-contain bg-center bg-no-repeat mb-2 border-b-4 border-orange-600">
            </div>
            <p className="leading-5 font-semibold">Yacimientos Petrolíferos Fiscales S.A. (YPF)</p>
            <button className="text-xs font-light flexrow gap-1 w-fit hover:text-orange-500 transition mt-1">
              Ver trabajos realizados
              <PiArrowRightLight />
            </button>
          </div>
        </Replicate>
      </div>
      <div className="flexrow absolute h-full w-full -z-10">
        <div className="bg-zinc-950 flex-1 h-full"></div>
        <div className="bg-zinc-900 flex-1 h-full"></div>
      </div>
    </section>
  )
}