import React from 'react'
import Button from './Button'
const Servicos = () => {
    const [paragrafo, setParagrafo] = React.useState('Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.');
    const handleParagrafo = () => {
        setParagrafo(prompt('Digite o novo parágrafo:'));
    }

  return (
    <section className='bg-white p-12 flex flex-col gap-8'>
        <div className='border-l-2 border-black pl-8 gap-8 flex flex-col max-sm:pl-4'>
            <h2 className='text-4xl'>Serviços</h2>
        <h3 className='text-xl' style={{width:'20ch'}}>Entregamos produtos e serviços incríveis no mundo todo</h3>
        </div>

        <div className='flex justify-between  items-center max-sm:flex-col'>
            <div className='flex flex-col gap-8'>
                <h3 className='text-5xl' style={{width:'10ch', lineHeight:'1.6'}}>DIREÇÃO AUTÔNOMA</h3>
                <p className='text-xl  max-sm:text-sm' style={{width:'30ch'}} onClick={handleParagrafo}>{paragrafo}</p>
                <Button className='border-1 border-black hover:bg-black hover:text-white rounded-md cursor-pointer py-2 w-40'>Saiba Mais</Button>
            </div>
            <div>
                <img src='/assets/carro2.avif' alt="" />
            </div>
        </div>
    </section>
  )
}

export default Servicos