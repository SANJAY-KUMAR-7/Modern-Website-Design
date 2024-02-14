import React, { useState } from 'react'
import Image from 'next/image'
import logo from '../images/image05.png'
import Link from 'next/link'
import { Menu } from 'lucide-react';

function NavBar() {
  const [burger,setBurger]=useState(0)

const burgermenu=(()=>{
  setBurger(1);
  return <div>
      
  </div>



})

  return (
    <>
        <div className="flex text-white mb-6 justify-between items-center mx-4 md:mx-0">
            <div className='flex justify-center items-center'>
                <Image src={logo} alt='LOGO'/>
            </div>  
            <div className=" gap-4 hidden md:flex">
                <Link href="/" className="text-xl">Home</Link>
                <Link href="/about" className="text-xl">About Us</Link>
                <a href="../Pages/contact.tsx" className="text-xl">Contact Us</a>
            </div>
            <div className='flex md:hidden'>
              <button>
                <Menu onClick={burgermenu}/>
                </button>
            </div>
        </div>
    </>
  )
}

export default NavBar