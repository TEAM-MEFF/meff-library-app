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
      <div className='grid sm:flex md:flex justify-around items-center text-center p-3 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l relative bottom-10'>
        <div className='border-2 border-[#0E345A] p-2 rounded-lg flex w-[290px]'>
          <img src={sixtyYears} alt="topRated" className='w-[30px] md:w-[80px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-[#0E345A] pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
        <div className='border-2 border-[#0E345A] p-2 rounded-lg flex w-[290px]'>
          <img src={bestSeller} alt="topRated" className='w-[30px] md:w-[80px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-[#0E345A] pt-2'>Internationally Recognized Seller!</h1>
        </div>

        <div className='border-2 border-[#0E345A] p-1 rounded-lg flex w-[290px]'>
          <img src={yearsOfWork} alt="topRated" className='w-[30px] md:w-[90px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-[#0E345A] pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
        <div className='border-2 border-[#0E345A] p-2 rounded-lg flex w-[290px]'>
          <img src={topRated} alt="topRated" className='w-[30px] md:w-[100px]' />
          <h1 className='text-sm md:text-xl md:font-semibold text-[#0E345A] pt-2'>Ghana's Largest Online BookShop!</h1>
        </div>
      </div>
      <br />
      <div className='grid sm:flex md:flex justify-around items-center text-center pb-1 bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l'>
        <img src={sixtyYears} alt="topRated" className='w-[60px] md:w-[100px]' />
        <img src={bestSeller} alt="topRated" className='w-[60px] md:w-[120px]' />
        <h1 className='text-3xl md:text-5xl md:font-semibold'>Ghana's Largest Online BookShop!</h1>
        <img src={yearsOfWork} alt="topRated" className='w-[60px] md:w-[130px]' />
        <img src={topRated} alt="topRated" className='w-[60px] md:w-[120px]' />
      </div>
    </div>


  )
}

export default Hero