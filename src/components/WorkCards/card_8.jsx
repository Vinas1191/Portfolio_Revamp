import React from 'react'
import { useNavigate } from 'react-router-dom'
import screens from '../../assets/hfs.png'
import arrow from '../../assets/Right Arrow.png'

const card_8 = () => {
  const navigate = useNavigate();

  const handleCaseStudyClick = () => {
    navigate('/case-study/head-first');
  };

  return (
    // Head-first care
    <div  className="w-auto h-4/5 bg-[#ffffff] text-[#112031] flex flex-wrap items-center rounded-[30px] overflow-hidden cursor-pointer pt-[80px] px-[80px] max-sm:pt-8 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
        <div className="lg:w-2/3 flex flex-col justify-between pb-[55px] lg:pb-[80px] max-lg:items-center">
          <div>
          <h2 className="font-secondary max-md:text-center text-[#111111] text-[30px] my-[30px] title">
            Start-Up MVP Design
          </h2>

          <p className="font-secondary text-[#111111] font-bold text-[50px] lg:text-[46px] max-md:text-center mb-[40px] sub-heading">
            Healthcare Portal for Brain Concussion Support
          </p>
          </div>

          <div className="bg-[#1A5E3A] text-white flex flex-end w-fit items-center px-8 py-4 max-sm:px-10 rounded-full gap-3 cursor-pointer hover:bg-[#134a2e] transition-colors duration-300"
          onClick={handleCaseStudyClick}
            >
                <p className="text-base font-normal font-tertiary">Case Study</p>
                <img
                    className="w-8"
                    src={arrow}
                    alt=""
                />
         </div>

        </div>
        <div className="lg:w-1/3">
          <img className="w-full" src={screens} alt="" />
        </div>
      </div>
      
    </div>
  )
}

export default card_8