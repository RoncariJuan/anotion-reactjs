import React from 'react'


const Industria = () => {
   const [paragrafo, setParagrafo] = React.useState('Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.');
            const handleParagrafo = () => {
                setParagrafo(prompt('Digite o novo parágrafo:'));
            }
  return (
    <section className='flex mx-auto bg-black justify-around items-center max-sm:flex-col-reverse max-sm:gap-8'>
      <div className='*:text-white p-8 gap-4 flex flex-col border-1 border-l-white ml-8  max-sm:justify-center max-sm:gap-4'>
        <h1 className='text-xl'>Industria</h1>
        <span className='text-2xl'>Nossos Parceiros</span>
        <p onClick={handleParagrafo} style={{width:'30ch'}}>{paragrafo}</p>
      </div>

      <div className='grid grid-cols-2 gap-12 items-center max-sm:flex max-sm:gap-8 max-sm:mt-12'>
        <div className='flex flex-col gap-4 items-center'>
          <img src='/public/assets/trinex.avif' alt="" />
          <p  className='text-white'>TRI-NEX</p>
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <img src='/public/assets/IDI_Software.avif' alt="" />
          <p className='text-white'>IDI SOFTWARE</p>
        </div>

        <div className='flex flex-col gap-4 items-center'>
          <img src='/public/assets/imagine.avif' alt="" />
          <p className='text-white'>Imagine Cars</p>
        </div>

      </div>
    </section>
  )
}

export default Industria