import React from 'react'
import Image from 'next/image'
import logo from '../images/image05.png'

function NavBar() {
  return (
    <>
        <div className="flex text-white mb-6 justify-between items-center ">
            <div className='flex justify-center items-center'>
                <Image src={logo} alt='LOGO'/>
            </div>  
            <div className="flex gap-4 ">
                <a href="" className="text-xl">Home</a>
                <a href="" className="text-xl">About Us</a>
                <a href="" className="text-xl">Contact Us</a>
            </div>
        </div>
    </>
  )
}

export default NavBar
