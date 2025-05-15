import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/pagination'
import React from 'react'
import Button from './Button'


const vagas = [
  {
    titulo: 'ENGENHEIRO ELÉTRICO',
    local: 'Curitiba, PR',
    descricao: 'Estamos procurando um profissional inovador para se juntar à nossa equipe.',
  },
  {
    titulo: 'DESENVOLVEDOR FRONT-END',
    local: 'Remoto',
    descricao: 'Trabalhe com tecnologias modernas em projetos desafiadores.',
  },
  {
    titulo: 'UX/UI DESIGNER',
    local: 'São Paulo, SP',
    descricao: 'Crie interfaces incríveis para nossos produtos.',
  },
]

const Carreira = () => {
  return (
    <section className='flex mx-auto bg-black justify-center items-center max-sm:flex-col-reverse max-sm:gap-8 border-t-1 border-white'>
      <div className="bg-black text-white py-10 px-4 flex flex-col md:flex-row items-center justify-center gap-10">
      <div className="max-w-md">
        <h2 className="uppercase tracking-widest text-sm mb-2">Carreiras</h2>
        <p className="text-2xl font-light leading-relaxed">
          Procuramos pessoas talentosas e inovativas para o nosso time.
          Veja as vagas e envie seu CV.
        </p>
        <Button className='border-1 mt-4 border-white hover:bg-black hover:text-white rounded-md cursor-pointer py-2 w-40'>Saiba Mais</Button>
      </div>

      <div className="max-w-sm w-full h-[400px]">
        <Swiper
          modules={[Pagination]}
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1}
        >
          {vagas.map((vaga, index) => (
            <SwiperSlide key={index}>
              <div className="border h-[400px] border-white p-6 rounded-xl min-h-[250px] flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-semibold">{vaga.titulo}</h3>
                  <p className="text-sm text-gray-300 mb-4">{vaga.local}</p>
                  <p className="text-sm">{vaga.descricao}</p>
                </div>
                <button className="mt-6 border border-white px-4 py-2 rounded-full flex items-center gap-2">
                  Enviar CV <span>➜</span>
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
    </section>
  )
}

export default Carreira