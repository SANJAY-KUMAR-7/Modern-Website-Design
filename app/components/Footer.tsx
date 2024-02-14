import React from 'react'
import { Instagram, Mail,Twitter } from 'lucide-react';
import logo from '../images/image05.png'
import Image from 'next/image'

function Footer() {
    return (
        <>
            <footer className="text-white  backdrop-blur-sm">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center justify-between">
                        <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                            <Image src={logo} alt="..." width={100}/>
                        </a>
                        <ul className="flex items-center mb-6 text-sm font-medium gap-6">
                            <li>
                                <Instagram/>
                            </li>
                            <li>
                                <Twitter/>
                            </li>
                            <li>
                               <Mail/>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-white lg:my-8" />
                    <span className="block text-sm text-white sm:text-center ">© 2023 <a href="" className="hover:underline">Barshop Studios™</a>. All Rights Reserved.</span>
                </div>
            </footer>
        </>
    )
}

export default Footer
