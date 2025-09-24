import React from 'react'
import screens from '../../assets/mmscreen.png'
import arrow from '../../assets/Right Arrow.png'
import lock from '../../assets/lock.png'

const card_10 = () => {
  return (
    // Mechanic Mate - product revamp
    <div className="w-auto h-4/5 bg-[#4EBBEC] text-[#112031] flex flex-wrap items-center rounded-[30px] overflow-hidden cursor-pointer pt-[80px] px-[80px] max-sm:pt-8 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
        <div className="lg:w-3/5 flex flex-col justify-between pb-[55px] lg:pb-[80px] max-lg:items-center">
          <div>
          <h2 className="font-secondary max-md:text-center text-[#ffffff] text-[30px] my-[30px] title">
            Mechanic Mate
          </h2>

          <p className="font-secondary text-[#ffffff] font-bold text-[50px] lg:text-[46px] max-md:text-center  mb-[40px] sub-heading">
            App Redesign to Improve Usability
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
        <div className="lg:w-2/5">
          <img className="w-full" src={screens} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default card_10