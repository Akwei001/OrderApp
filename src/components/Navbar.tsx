import React from 'react'
import Menu from './Menu'
import Link from 'next/link'
import CartIcon from './CartIcon'
import Image from 'next/image'

const Navbar = () => {

  const user = false
  return (
    <div>
     
      <div className="h-12 text-red-500 p-4 flex justify-between items-center border-b-2 border-b-red-500 uppercase">
        {/*LEFT LINKS*/}
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
        {/*RIGHT LINKS*/}
        <div className='hidden md:flex gap-4 items-center'>
          <div className="flex items-center">
            <Image src="/phone.png" alt="" width={20} height={20}/>
            <span>555 123 456</span>
          </div>
         {!user ? (<Link href="/login">Login</Link>) :
          (<Link href="/orders">Orders</Link>)}
          <CartIcon/>
        </div>
      </div>
      
      
      
      
      </div>
  )
}

export default Navbar