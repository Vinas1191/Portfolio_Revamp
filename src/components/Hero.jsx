import React from 'react'
import avatar from '../assets/port1.png'

const Hero = () => {
  return (
    <div className="w-full flex justify-center mt-[180px] flex-col items-center
    motion-translate-x-in-[0%] motion-translate-y-in-[50%] motion-opacity-in-[0%] motion-duration-[2.00s] motion-ease-out-cubic">

      {/* Background Layer */}
      {/* <div className="absolute inset-0 -z-10 bg-gradient-to-l from-pink-400 via-purple-400 to-blue-400
        bg-[length:200%_200%] animate-gradient blur-2xl opacity-20">
      </div> */}

    <div className="flex justify-center flex-col lg:text-center items-center">
      <p className="font-secondary font-bold text-[2.5em] leading-[110%]  lg:text-[5em]">
        Vinas Mavani is
        <br />
        an UX Engineer
        <br />
        at Head-first
      </p>
      <p className="font-primary font-medium text-[24px] mt-7 hidden md:block">
        Bridging research, design, and development with clarity.
      </p>
    </div>
    <img className="lg:w-[650px] max-md:mb-[-1px] max-md:z-[-1] mt-[80px] grayscale" src={avatar} alt=""/>
  </div>
  )
}

export default Hero