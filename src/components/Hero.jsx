import React from 'react'
import avatar from '../assets/port1.png'

const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-[170px] flex-col items-center
    motion-translate-x-in-[0%] motion-translate-y-in-[50%] motion-opacity-in-[0%] motion-duration-[2.00s] motion-ease-out-cubic">
    <div className="flex justify-center flex-col lg:text-center items-center">
      <p className="font-secondary font-bold text-[2.5em] leading-[110%]  lg:text-[5em]">
        Vinas Mavani
        <br />
        an UX Engineer
        <br />
        at Head-first
      </p>
      <p className="font-primary font-medium text-[24px] mt-7 hidden md:block">
        Designing intuitive, user-first digital journeys.
      </p>
    </div>
    <img className="lg:w-[650px] max-md:mb-[-32px] max-md:z-[-1] mt-[80px] grayscale" src={avatar} alt=""/>
  </div>
  )
}

export default Hero