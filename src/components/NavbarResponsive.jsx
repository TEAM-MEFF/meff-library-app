import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IonIcon from '@reacticons/ionicons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const NavbarResponsive = () => {

    let [open, setOpen] = useState(false);

    return (
        <header className='flex justify-center md:flex-col bg-slate-100'>
            <div className='flex items-center md:w-[92%]  mx-auto justify-between py-2 bg-slate-200'>
                <div className="content-center items-center md:mr-0">
                    <Link href="#">
                        <span className="bg-[#0E345A] px-4 py-2  text-white font-bold content-center text-center">MEFF</span>
                        <span href="#" className="px-2 py-2 content-center hover:bg-[#0E345A] hover:text-white border-2 text-center">LIBRARY</span></Link>
                </div>
                <div className='flex justify-center relative'>
                    <input type="search" name="search" id="search" className='' />
                    <Link><IonIcon name="search" className="absolute right-2 top-1" /></Link>
                </div>
                <div className='flex items-center gap-2'>
                    <Link><IonIcon name="person-circle" className="text-3xl" /></Link>
                    <Link><IonIcon name="cart-outline" className="text-3xl" /></Link>
                </div>
            </div >
            <nav className='flex items-center gap-2 md:w-[92%]  mx-auto justify-center  py-2 bg-slate-200'>
                <div className={`sm:static sm:min-h-fit sm:w-auto md:min-h-fit md:w-auto md:z-auto z-[1] px-12 absolute bg-slate-300 min-h-[40vh] left-0 w-full flex items-center transition-all duration-500 ease-in-out ${open ? 'top-10 opacity-100' : 'top-[-500px] md:opacity-100 opacity-0'}`}>
                    <ul className='flex sm:items-center sm:gap-1 sm:flex-row md:items-center gap-2 md:flex-row flex-col transition-all duration-1000 ease-in-out'>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Home</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Bookstore</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Best Selling</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Events</a></li>
                        <li><a href="#" className='sm:text-base md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>About Us</a></li>
                        <li><a href="#" className='sm:text-lg md:text-lg px-2 py-1 hover:bg-slate-500 hover:text-white rounded'>Contact Us</a></li>
                    </ul>
                </div>
                <div onClick={() => setOpen(!open)} className='menuIcon text-[#0E345A] mx-2 cursor-pointer md:hidden text-2xl'>
                    <IonIcon name={open ? 'close' : 'menu'} />
                    {/* <IonIcon name="close" /> */}
                </div>
            </nav>
        </header >

    )
}

export default NavbarResponsive