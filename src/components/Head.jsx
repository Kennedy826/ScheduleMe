import React, { useState, useEffect } from 'react';
import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import { headerLogo } from "../assets/images"
import {  lightDark } from '../assets/icons'
import { navLinks } from "../constants"


const Head = () => {

    const [darkMode, setDarkMode] = useState(false);
    useEffect(() => {
        // let mode= darkMode?'Dark':'light'
        document.documentElement.classList.toggle("dark")
    }, [!darkMode]);

    let [open, setOpen] = useState(false);

    return (
        <div className='shadow-md w-full fixed top-0 left-0 z-10'>
            <div className='flex  justify-between bg-white dark:bg-[rgb(23,27,63)]  py-4 md:px-10 px-7'>

                {/* logo section */}
                <div className='font-bold text-2xl cursor-pointer flex items-center gap-1'>

                    <a href="/">
                        <img src={headerLogo}
                            alt='this contains the logo for the nike website'
                            width={130}
                            height={29}

                        />
                    </a>

                </div>

                {/* Menu icon */}
                <div onClick={() => setOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-7 h-7'>
                    {
                        open ?  < XMarkIcon className="text-[rgb(23,27,63)] 
                       cursor-pionter dark:text-coral-red" /> :
                        <Bars3BottomRightIcon className="text-[rgb(23,27,63)] 
                       cursor-pionter dark:text-coral-red" />
                    }
                </div>



                {/* linke items */}
                <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-white dark:bg-[rgb(23,27,63)]  md:z-10  left-0 w-full md:w-auto md:pl-0 pl-9  gap-6 transition-all duration-100 z-[99] ease-in ${open ? 'top-[120px]' : 'top-[-490px]'}`}>
                    {navLinks.map((item) => (
                        <li className='px-3 py-3 md:px-2 md:font-small' key={item.label}>
                            <a
                                href={item.href}
                                className="font-monserrat leasding-normal text-lg text-slate-gray">
                                {item.label}
                            </a>
                            
                        </li>
                    ))}


                    {/* /----------originl */}


                    {/* {
                    Links.map((link) => (
                    <li className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <a href={link.link} className='text-gray-800 hover:text-blue-400 duration-500'>{link.name}</a>
                    </li>))
                } */}


                    <button className="bg-black text-white font-palanquin flex items-center gap-2 rounded-full p-3" onClick={() => { setDarkMode(!darkMode) }} > {darkMode ? 'Dark' : 'Light'} Mode
                        <img src={lightDark}
                            width={16}
                            height={16} alt="darkmode" />
                    </button>
                </ul>
                <div></div>

                {/* button */}
            </div>
        </div>
    );
};

export default Head;