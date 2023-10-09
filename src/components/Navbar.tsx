import React from 'react'
import Menu from './Menu'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div>
     
      <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
        <div className='hidden md:flex gap-4'>
          <Link href="/">Homepage</Link>
          <Link href="/menu">Menu</Link>
          <Link href="/">Contact</Link>
        </div>
         {/*LOGO*/}
         <div className='text-xl'>
         <Link href="/">OrderApp</Link>
         </div>
        
        <div>
          {/*Mobile menu*/}
          <div className='md:hidden'>
            <Menu/>
          </div>
        </div>
      </div>
      
      
      
      
      </div>
  )
}

export default Navbar