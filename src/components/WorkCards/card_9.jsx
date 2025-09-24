import React from 'react'
import screens from '../../assets/hcdscreen.png'
import arrow from '../../assets/Right Arrow.png'
import lock from '../../assets/lock.png'

const card_9 = () => {
  return (
    // HCD - First Step Ottawa
    <div  className="w-auto h-4/5 bg-[#FFD793] text-[#112031] flex flex-wrap items-center rounded-[30px] overflow-hidden cursor-pointer pt-[80px] px-[80px] max-sm:pt-8 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
         <div className="lg:w-2/5 order-2 lg:order-1">
          <img className="w-full" src={screens} alt="" />
         </div>
        <div className="lg:w-3/5 lg:pl-10 flex flex-col justify-between pb-[55px] lg:pb-[80px] max-md:items-center order-1 lg:order-2">
          <div>
          <h2 className="font-secondary max-md:text-center text-[#111111] text-[30px] my-[30px] title">
            Human-Centered Lab
          </h2>

          <p className="font-secondary text-[#111111] font-bold text-[50px] lg:text-[46px] max-md:text-center leading-[112%] mb-[40px] sub-heading">
            Service Design for City of Ottawa
          </p>
          </div>

          <div className="bg-[#111111] text-white flex flex-end w-fit items-center px-8 py-4 max-sm:px-10 rounded-full gap-3"
          onClick={() => window.open('/', '_blank')}
            >
              <p className="text-base font-normal font-tertiary">Coming soon</p>
              <img
                className="w-5"
                src={lock}
                alt=""
              />
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default card_9