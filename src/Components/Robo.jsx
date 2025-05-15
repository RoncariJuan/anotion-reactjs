import React from 'react'
import ferramentaFoto from '../../public/assets/ferramenta.avif'
const Robo = () => {
  return (
    <section className='flex mx-auto justify-between items-center max-sm:flex-col-reverse pb-12'>
       <div>
            <img src={ferramentaFoto} alt="" />
        </div>
        <div className='flex flex-col gap-4'>
            <h1 className='uppercase text-3xl leading-relaxed' style={{width:'10ch'}}>Autono em numeros</h1>
            <div className='grid grid-cols-2 overflow-hidden gap-4'>
                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold p-4  max-sm:text-sm border-l-2 border-black' style={{width: '30ch'}}>200</h2>
                    <p className='text-lg'>EMPREGADOS</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold p-4  max-sm:text-sm border-l-2 border-black' style={{width: '30ch'}}>5</h2>
                    <p className='text-lg'>EQUIPES</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold p-4  max-sm:text-sm border-l-2 border-black' style={{width: '30ch'}}>R$100M</h2>
                    <p className='text-lg'>EM CAPITAL</p>
                </div>

                <div className='flex flex-col gap-2'>
                    <h2 className='text-xl font-bold p-4  max-sm:text-sm border-l-2 border-black' style={{width: '30ch'}}>326</h2>
                    <p className='text-lg'>PARCEIROS</p>
                </div>
            </div>
       </div>
    </section>
  )
}

export default Robo