import React from 'react'
import Button from './Button'

const Informacaos = () => {
    const [paragrafo, setParagrafo] = React.useState('Sou um parágrafo. Aqui você pode adicionar e editar seu próprio texto. É fácil, basta clicar em "Editar texto" ou clicar duas vezes sobre mim. Você também pode alterar a fonte e mais. Sou um ótimo lugar para você compartilhar a sua história com os visitantes.');
        const handleParagrafo = () => {
            setParagrafo(prompt('Digite o novo parágrafo:'));
        }
  return (
    <section className='flex justify-around items-center max-sm:flex-col-reverse'>
        <div>
            <img src="../../public/img/informacaos.avif" alt="" className='object-fill w-full h-full'/>
        </div>
        <div className='flex flex-col justify-center items-start gap-8 p-12'>
            <h2 className='uppercase text-5xl leading-relaxed' style={{width:'10ch'}}>Informaçãos ao vivo</h2>
            <p className='text-lg' style={{width:'30ch'}} onClick={handleParagrafo}>{paragrafo}</p>
            <Button className='border-1 border-black hover:bg-black hover:text-white rounded-md cursor-pointer py-2 w-40'>Saiba Mais</Button>
        </div>
    </section>
  )
}

export default Informacaos