import React from 'react'
import NavbarResponsive from '../../components/NavbarResponsive'
import pic from "./under.png";
import { Link } from 'react-router-dom';

const UnderConstruction = () => {
    return (
        <div>
            <NavbarResponsive />
            <div className='w-[500px] mx-auto'>
                <img
                    className="w-[350px] mx-auto"
                    src={pic}
                    alt="pic"
                />
                <p className='text-center text-2xl font-semibold mb-4'>Our website is under construction</p>
                <div className='flex gap-2'>
                    <input
                        required
                        type="text"
                        placeholder="Enter your email..."
                        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-600 mb-6"
                    />
                    <button
                        type="submit"
                        className="w-[100px] bg-[#0E345A] text-white py-3 rounded-lg hover:bg-[#0e345ade] transition-colors mb-5"
                    ><Link to="/login">
                            Notify Me</Link>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction