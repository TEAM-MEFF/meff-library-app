import React from 'react'
import HeroCarousel from './HeroCarousel'
import topRated from '../assets/images/topRated.png'
import sixtyYears from '../assets/images/sixtyYears.png'
import bestSeller from '../assets/images/bestSeller.png'
import yearsOfWork from '../assets/images/yearsOfWork.png'

const Hero = () => {
  return (
    <div>
      <div className='grid sm:flex md:flex justify-around items-center text-center pt-[400px] pb-1 md:pt-[120px] bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l'>
        <img src={sixtyYears} alt="topRated" className='w-[60px] md:w-[100px]' />
        <img src={bestSeller} alt="topRated" className='w-[60px] md:w-[120px]' />
        <h1 className='text-3xl md:text-5xl md:font-semibold'>Ghana's Largest Online BookShop!</h1>
        <img src={yearsOfWork} alt="topRated" className='w-[60px] md:w-[130px]' />
        <img src={topRated} alt="topRated" className='w-[60px] md:w-[120px]' />
      </div>
      <HeroCarousel />
    </div>

  )
}

export default Hero