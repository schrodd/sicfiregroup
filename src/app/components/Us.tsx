import Title from "./Title"

function Container({right, text, imageUrl, certs}: {right: boolean, text: string, imageUrl: string, certs: string[] | undefined}) {
  return (
    <div className={`${right ? 'md:-mr-16 md:border-r-8 bg-gradient-to-tr from-zinc-900 to-zinc-800' : 'md:-ml-16 md:border-l-8 text-zinc-950 bg-white'} border-b-8 md:border-b-0 md:mx-5 md:flex md:flex-row md:items-center p-0 shadow-xl border-orange-600 max-w-[900px]`}>
      <div className="flexcol">
        <p className={`m-5 md:my-0 md:mx-10 text-sm text-center md:text-left`}>{text}</p>
        {certs && (
          <div className="mb-5 md:mb-0 md:pt-3 flexrow gap-5 w-full">
            {certs.map((e,i) => <img className="w-16" src={`/cert/${e}.jpg`} alt={`Logo certificado ${e}`}/>)}
          </div>
        )}
      </div>
      <img src={imageUrl} alt="About us text container" className={`${!right && '-order-1'} w-full h:auto md:w-auto md:h-60`}/>
    </div>
  )
}

export default function Us() {

  const content = [
    {
      isRight: true,
      text: `Somos SIC FIRE, empresa que provee servicios de ingeniería contra incendios, conformada por profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana, abarcamos distintos sectores desde la higiene y seguridad hasta la instalación y mantenimiento de sistemas contra incendios.`,
      imageUrl: '/us/1.png'
    },
    {
      isRight: false,
      text: `Contamos con total conocimiento y aplicación de las normas nacionales e internacionales, brindando a nuestros clientes las herramientas necesarias para cumplir con los requerimientos en sus proyectos, garantizando así el cumplimiento total de las normativas Argentinas y estándares internacionales.`,
      imageUrl: '/us/2.png',
      certs: ["IRAM", "NFPA", "GC", "IFCI"]
    },
    {
      isRight: true,
      text: `SIC FIRE nace a partir del cese de actividades de SICI SRL, empresa líder en el mercado relacionada a la protección contra incendios, tomando el know-how adquirido en más de 45 años en el mercado, con profesionales y técnicos que han transitado muchos años el negocio de la ingeniería contra incendios, servicios de mantenimiento y capacitación, incorporando además el servicio de Seguridad, Higiene y Ambiente comprendiendo asesoramiento, capacitación, estudios y análisis especializados en cargas de fuego.`,
      imageUrl: '/us/3.png'
    },
    {
      isRight: false,
      text: `Abordamos la problemática de los incendios desde distintas necesidades de los clientes, es decir, ante requerimientos normativos del estado, de normas internas de las empresas, solicitudes de compañías aseguradoras o la preocupación propia de directivos o propietarios. Trabajamos con mucha vocación al servicio de la seguridad en función de disminuir riesgos y con un solo objetivo principal: Salvaguardar vidas y proteger los bienes materiales para garantizar la continuidad del negocio.`,
      imageUrl: '/us/4.png'
    },
  ]
  return (
    <section className="flexcol relative text-white px-5 py-10 md:py-16 gap-6 md:gap-10">
      <span id='nosotros' className="anchor"></span>
      <Title>NOSOTROS</Title>
      {content.map((e,i) => (
        <Container text={e.text} right={e.isRight} imageUrl={e.imageUrl} certs={e?.certs} key={i}/>
      ))}
      <div className="flexrow absolute h-full w-full -z-10">
        <div className="bg-zinc-900 flex-1 h-full"></div>
        <div className="bg-zinc-950 flex-1 h-full"></div>
      </div>
    </section>
  )
}