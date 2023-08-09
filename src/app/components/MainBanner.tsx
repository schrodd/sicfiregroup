import Header from "./Header"
// h-[650px]
export default function MainBanner() {
  return (
    <>
      <main className="h-[250px] md:h-[550px] bg-[url('/bg5.jpg')] bg-cover relative bg-center md:bg-fixed">
        <Header/>
        <div className="hidden md:flex flex-col absolute bottom-0 bg-black/80 backdrop-blur text-white text-center px-5 py-7 border-t-8 border-orange-600 md:left-[12%] md:text-left md:items-end md:w-1/3 md:bottom-[120px] md:border-l-8 md:border-t-0 shadow-lg">
          <h1 className="mb-3 md:text-3xl !leading-8">SERVICIO INTEGRAL CONTRA INCENDIOS</h1>
          <p className="text-sm">Proveemos servicios de ingeniería contra incendios, con profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana.</p>
        </div>
        
      </main>
      <div className="md:hidden bottom-0 bg-zinc-900 flexcol text-white text-center px-5 py-7 border-t-8 border-orange-600 md:left-[12%] md:text-left md:items-end md:w-1/3 md:bottom-[150px] md:border-l-8 md:border-t-0">
        <h1 className="mb-3 md:text-3xl !leading-8">SERVICIO INTEGRAL CONTRA INCENDIOS</h1>
        <p className="text-sm">Proveemos servicios de ingeniería contra incendios, con profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana.</p>
      </div>
    </>
  )
}