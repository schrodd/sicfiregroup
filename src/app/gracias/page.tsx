import Link from "next/link";
import Footer from "../components/Footer";
import MainBanner from "../components/MainBanner";
import Header from "../components/Header";
import { PiArrowLeft } from "react-icons/pi";

export default function Page(){
  return (
    <>
      <Header/>
      <main className="pt-[160px] h-screen bg-[url('/bg5.jpg')] bg-cover flexcol">
        <div className="bg-black/50 backdrop-blur flexcol p-6 text-white border-b-8 border-orange-600">
          <h1>¡Gracias!</h1>
          <h3 className="font-normal">Te contactaremos en breve</h3>
          <Link href='/' className="text-sm flexrow gap-1 mt-3">
            <PiArrowLeft/>
            Volver
          </Link>
        </div>
      </main>
      <Footer/>
    </>
  )
}