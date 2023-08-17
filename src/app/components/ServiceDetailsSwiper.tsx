import { useEffect } from "react";
import Swiper from "swiper";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

export default function ServiceDetailsSwiper() {
  useEffect(() => {
    const swiper = new Swiper('.serviceDetailsSwiper.swiper', {
      modules: [Navigation, Pagination, Autoplay],
      loop: true,
      pagination: { el: '.swiper-pagination' },  
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      autoplay: {
        delay: 5000,
        pauseOnMouseEnter: true,
      },
    })
  }, [])
  const slides = [
    { name: 'Sistema de agua fraccionada en transformadores', route: '/serv/1/agua_fracc.jpg' },
    { name: 'Sistemas de extinción con gases', route: '/serv/1/co2.jpg' },
    { name: 'Sistemas de espumas de baja, media y alta expansión', route: '/serv/1/espuma.jpg' },
    { name: 'Sistemas de hidrantes', route: '/serv/1/hidrantes.jpg' },
    { name: 'Sala de bombas', route: '/serv/1/sistema_bombeo.jpg' },
  ]
  return (
    <div className="w-full flexcol">
      <div className='serviceDetailsSwiper swiper mb-3 w-full md:max-w-[600px] shadow-lg'>
        <div className='swiper-wrapper'>
          {slides.map((e,i) => (
            <div key={i} className='swiper-slide relative'>
              <div className="bg-zinc-800 flexcol p-2 w-full h-10">
                <p className="text-white tracking-wider text-xs drop-shadow text-center">{e.name}</p>
              </div>
              <img className="w-full" src={e.route} alt={e.name} />
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
    </div>
  );
};