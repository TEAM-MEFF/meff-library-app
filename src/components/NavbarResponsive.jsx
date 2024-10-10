import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import IonIcon from '@reacticons/ionicons';
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { faTimes } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';


const NavbarResponsive = () => {

    let [open, setOpen] = useState(false);

    return (
        <header className='flex justify-between md:flex-col bg-slate-200 sticky top-0 z-[1] w-full'>
            <div className='flex items-center md:w-[92%]  mx-auto justify-center md:justify-between py-2 bg-slate-200'>
                <div className="content-center items-center">
                    <Link href="#">
                        <span className="bg-[#0E345A] text-lg px-4 py-2  text-white font-bold content-center text-center">MEFF</span>
                        <span href="#" className=" px-2 py-1.5 text-lg text-[#0E345A] content-center hover:bg-[#0E345A] hover:text-white border-[#0E345A] border- border-2 text-center">LIBRARY</span></Link>
                </div>
                <SearchBox />
                <div className='flex items-center gap-2'>
                    <Link><IonIcon name="person-circle" className="text-4xl md:text-5xl text-[#0E345A]" /></Link>
                    <Link><IonIcon name="cart-outline" className="text-4xl md:text-5xl text-[#0E345A]" /></Link>
                </div>
            </div >
            <nav className='flex items-center gap-2 md:w-[92%]  mx-auto py-2 justify-center bg-slate-200'>
                <div className={`sm:min-h-fit  md:min-h-fit md:w-auto md:z-auto z-[1] px-12 py-6 md:py-0 absolute md:static bg-slate-200 min-h-[40vh] right-0  flex items-center transition-all duration-500 ease-in-out ${open ? 'top-14 opacity-100' : 'top-[-500px] md:opacity-100 opacity-0'}`}>
                    <div className='flex sm:gap-5 sm:flex-row md:items-center gap-2 md:flex-row flex-col transition-all duration-1000 ease-in-out'>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>Home</Link>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>Bookstore</Link>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>Best Selling</Link>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>Events</Link>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>About Us</Link>
                        <Link className='sm:text-base md:text-lg px-2 py-1 hover:bg-[#0E345A] hover:text-white rounded'>Contact Us</Link>
                    </div>
                </div >
                <div onClick={() => setOpen(!open)} className='menuIcon text-[#0E345A] mx-2 cursor-pointer md:hidden text-4xl'>
                    <IonIcon name={open ? 'close' : 'menu'} />
                    {/* <IonIcon name="close" /> */}
                </div>
            </nav >
        </header >

    )
}

export default NavbarResponsive