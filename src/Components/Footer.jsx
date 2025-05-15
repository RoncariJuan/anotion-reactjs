import React from 'react'
import { Link } from 'react-router-dom'
import Button from './Button'

const Footer = () => {
  return (
    <footer className='grid grid-cols-3 my-18 bg-white max-sm:grid-cols-1 max-sm:gap-8'>
        <div className='flex flex-col gap-4 items-center'>
            <ul className='flex flex-col gap-4'>
                <Link to='/'>Tecnologia</Link>
                <Link to='/'>Sobre</Link>
                <Link to='/'>Serviços</Link>
            </ul>
        </div>

         <div className='flex flex-col gap-4 max-sm:items-center'>
             <span>Tel: (11) 3456-7890</span>
             <span>Email: info@meusite.com</span>
        </div>

         <div className='flex flex-col gap-4 items-center max-sm:items-center'>
            <ul className='flex gap-4 flex-col max-sm:items-center'>
                <li>ASSINAR</li>
                <li>Receba notícias e atualizações sobre o Autono</li>
                <li>Email</li>
                <div className='max-sm:flex max-sm:flex-col max-sm:items-center max-sm:jutify-center'>
                    <input type="text" name="" id="" className='border-1 border-black rounded-sm p-2 w-66'/>
                    <Button className='bg-black text-white p-2 rounded-sm cursor-pointer hover:bg-white hover:text-black hover:border-black hover:border-1'>Assinar</Button>
                </div>
            </ul>
        </div>
            <p className='text-center text-red-500 font-bold'>Desenvolvido por Juan Roncari</p>
    </footer>
  )
}

export default Footer