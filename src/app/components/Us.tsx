import Title from "./Title"

function Container({right, text, imageUrl}: {right: boolean, text: string, imageUrl: string}) {
  return (
    <div className={`${right ? 'md:-mr-16 md:border-r-8' : 'md:-ml-16 md:border-l-8'} border-b-8 md:border-b-0 md:mx-5 md:flex md:flex-row md:items-center p-0 bg-gradient-to-tr from-zinc-900 to-zinc-800 shadow-xl border-orange-600 max-w-[850px]`}>
      <p className={`text-justify m-5 md:my-0 md:mx-10 text-sm`}>{text}</p>
      <img src={imageUrl} alt="About us text container" className={`${!right && '-order-1'} w-full h:auto md:w-auto md:h-52`}/>
    </div>
  )
}

export default function Us() {

  const content = [
    {
      isRight: true,
      text: 'Proveemos servicios de ingeniería contra incendios, somos una empresa conformada por profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana, abarcamos distintos sectores desde la higiene y seguridad hasta la instalación y mantenimiento de sistemas contra incendios.',
      imageUrl: 'https://img.freepik.com/premium-photo/young-man-engineer-working-factory_1303-28457.jpg'
    },
    {
      isRight: false,
      text: 'Proveemos servicios de ingeniería contra incendios, somos una empresa conformada por profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana, abarcamos distintos sectores desde la higiene y seguridad hasta la instalación y mantenimiento de sistemas contra incendios.',
      imageUrl: 'https://img.freepik.com/premium-photo/young-man-engineer-working-factory_1303-28457.jpg'
    },
    {
      isRight: true,
      text: 'Proveemos servicios de ingeniería contra incendios, somos una empresa conformada por profesionales y técnicos con alta experiencia y notablemente calificados en el área de protección contra incendios y seguridad humana, abarcamos distintos sectores desde la higiene y seguridad hasta la instalación y mantenimiento de sistemas contra incendios.',
      imageUrl: 'https://img.freepik.com/premium-photo/young-man-engineer-working-factory_1303-28457.jpg'
    },
  ]
  return (
    <section className="flexcol relative text-white px-5 py-10 md:py-16 gap-10">
      <Title>NOSOTROS</Title>
      {content.map((e,i) => (
        <Container text={e.text} right={e.isRight} imageUrl={e.imageUrl} key={i}/>
      ))}
      <div className="flexrow absolute h-full w-full -z-10">
        <div className="bg-zinc-900 flex-1 h-full"></div>
        <div className="bg-zinc-950 flex-1 h-full"></div>
      </div>
    </section>
  )
}