function Item({route, children}: {children:string, route:string}){
  return (
    <div className="flexcol relative">
      <img src={route} alt={children}/>
      <div className="w-full h-full absolute opacity-0 hover:opacity-100 bg-black/50 text-white flexcol transition slow-animation p-5">
        <p className="text-center">{children}</p>
      </div>
    </div>
  )
}

export default function ServiceDetailsSwiper() {
  const slides = [
    { name: 'Sistema de agua fraccionada en transformadores', route: '/serv/1/agua_fracc.png' },
    { name: 'Sistemas de extinción con gases', route: '/serv/1/co2.png' },
    { name: 'Sistemas de espumas de baja, media y alta expansión', route: '/serv/1/espuma.png' },
    { name: 'Sistemas de hidrantes', route: '/serv/1/hidrantes.png' },
    { name: 'Sala de bombas', route: '/serv/1/sistema_bombeo.png' },
  ]
  return (
    <div className="flex flex-col md:flex-row gap-1 my-2">
      {slides.map((e,i) => <Item route={e.route} key={i}>{e.name}</Item>)}
    </div>
  );
};