import Header from "./Header"

export default function MainBanner() {
  return (
    <main className="h-[650px] bg-[url('/bg5.jpg')] bg-cover relative bg-center bg-fixed">
      <Header/>
      <div className="absolute bottom-0 bg-white/80 backdrop-blur flexcol text-white text-center px-8 py-10 border-t-8 border-orange-600 md:left-[12%] md:text-left md:items-end md:w-1/3 md:bottom-[150px] md:border-l-8 md:border-t-0 shadow-lg">
        <h1 className="mb-3 text-orange-600 md:text-3xl !leading-8">SERVICIO INTEGRAL CONTRA INCENDIOS</h1>
        <p className="text-sm text-zinc-800">Proveemos servicios de ingeniería contra incendios, con profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana.</p>
      </div>
    </main>
  )
}