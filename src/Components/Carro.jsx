import React from 'react'

const Carro = () => {
  const [paragrafo, setParagrafo] = React.useState('Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.');
          const handleParagrafo = () => {
              setParagrafo(prompt('Digite o novo parágrafo:'));
          }
  return (
    <section className='flex mx-auto bg-black justify-between items-center max-sm:flex-col'>
        <div className='*:text-white flex flex-col gap-4 justify-around  p-8 border-l-4 border-white ml-8 h-[500px] max-sm:justify-center max-sm:gap-4'>
          <span className='text-white'>VISÃO</span>
            <h1 className='text-white text-xl uppercase mb-8  max-sm:text-sm max-sm:mb-0'>Uma revolução no modo como pensamos sobre carros</h1>
            <h2 className='text-2xl font-light max-sm:text-sm' style={{width: '30ch'}} onClick={handleParagrafo}>{paragrafo}</h2>
        </div>
        <div>
            <img src="../../public/img/carrinho.avif" alt="" />
        </div>
    </section>
  )
}

export default Carro