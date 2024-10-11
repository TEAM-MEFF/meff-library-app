import React from 'react'
import HeroCarousel from './HeroCarousel'
import topRated from '../assets/images/topRated.png'
import sixtyYears from '../assets/images/sixtyYears.png'
import bestSeller from '../assets/images/bestSeller.png'
import yearsOfWork from '../assets/images/yearsOfWork.png'

const Hero = () => {
  return (
    <div>
      <HeroCarousel />
      <div className='grid sm:flex flex-wrap gap-2 md:flex mt-5 justify-around items-center text-center p-3 bg-[#0E345A]'>
        <div className='border-2 border-white p-2 rounded-lg flex w-[290px] my-auto mx-auto'>
          <img src={sixtyYears} alt="topRated" className='w-[30px] md:w-[80px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-white pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
        <div className='border-2 border-white p-2 rounded-lg flex w-[290px] my-auto mx-auto'>
          <img src={bestSeller} alt="topRated" className='w-[30px] md:w-[80px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-white pt-2'>Internationally Recognized Seller!</h1>
        </div>

        <div className='border-2 border-white p-1 rounded-lg flex w-[290px] my-auto mx-auto'>
          <img src={yearsOfWork} alt="topRated" className='w-[30px] md:w-[90px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-white pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
        <div className='border-2 border-white p-2 rounded-lg flex w-[290px] my-auto mx-auto'>
          <img src={topRated} alt="topRated" className='w-[30px] md:w-[100px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-white pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
      </div>
      <br />
      {/* <div className='flex sm:flex md:flex justify-around items-center text-center pb-1 bg-[#0E345A]'>
        <img src={sixtyYears} alt="topRated" className='w-[60px] md:w-[100px]' />
        <img src={bestSeller} alt="topRated" className='w-[60px] md:w-[120px]' />
        <h1 className='text-3xl md:text-5xl md:font-semibold text-white'>Ghana's Largest Online BookShop!</h1>
        <img src={yearsOfWork} alt="topRated" className='w-[60px] md:w-[130px]' />
        <img src={topRated} alt="topRated" className='w-[60px] md:w-[120px]' />
      </div> */}
    </div>


  )
}

export default Hero