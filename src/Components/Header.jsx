import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from './Button'

const Header = () => {
  return (
    <header className='flex justify-around items-center py-8 sticky top-0 bg-white z-10'>
        <Link to="/" className='font-bold text-lg max-sm:hidden'>AUTONO</Link>
        <nav className='flex gap-4 items-center *:text-lg'>
            <NavLink to="/" className='hover:text-orange-300'>Tecnologia</NavLink>
            <NavLink to="/about" className='hover:text-orange-300'>Sobre</NavLink>
            <NavLink to="/contact" className='hover:text-orange-300'>Carreiras</NavLink> 
         <Button className='bg-black px-8 py-1 cursor-pointer text-white rounded-lg hover:bg-white hover:text-black hover:border hover:rounded-md'>Assinar</Button> 
        </nav>
    </header>
  )
}

export default Header