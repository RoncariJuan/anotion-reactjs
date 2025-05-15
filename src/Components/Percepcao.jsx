import React from 'react'
import Button from './Button'
import carro3 from '../assets/carro3.avif'
const Percepcao = () => {
    const [paragrafo, setParagrafo] = React.useState('Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.');
              const handleParagrafo = () => {
                  setParagrafo(prompt('Digite o novo parágrafo:'));
              }
  return (
        <section className='flex mx-auto justify-between items-center max-sm:flex-col'>
        <div className='*:text-black flex flex-col gap-4 justify-center  p-8 border-l-4 border-white ml-8 h-[500px] max-sm:justify-center max-sm:gap-4'>
            <h1 className='uppercase text-5xl leading-relaxed' style={{width:'10ch'}}>PERCEPÇÃO ATIVADA</h1>
            <h2 className='text-2xl font-light max-sm:text-sm' style={{width: '30ch'}} onClick={handleParagrafo}>{paragrafo}</h2>
            <Button className='border-1 border-black hover:bg-black hover:text-white rounded-md cursor-pointer py-2 w-40'>Saiba Mais</Button>
        </div>
        <div>
            <img src={carro3} alt="" />
        </div>
    </section>
  )
}

export default Percepcao