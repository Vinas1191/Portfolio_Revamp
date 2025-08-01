import React from 'react'
import screens from '../../assets/recipelyscreen.png'
import arrow from '../../assets/Right Arrow.png'

const card_11 = () => {
  return (
    // Recipely
    <div className="w-auto h-4/5 bg-[#FFE7CE] text-[#112031] flex flex-wrap items-center rounded-[30px] overflow-hidden cursor-pointer pt-[80px] pr-[80px] pb-10 max-sm:py-10 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
         <div className="lg:w-3/6">
          <img className="w-full" src={screens} alt="" />
         </div>
        <div className="lg:w-3/6 flex flex-col justify-between pl-6 pb-[80px] max-md:items-center">
          <div>
          <h2 className="font-secondary text-[#111111] text-[30px] my-[30px] title">
            Recipely
          </h2>

          <p className="font-secondary text-[#111111] font-bold text-[50px] lg:text-[46px] max-md:text-center leading-[112%] mb-[40px] sub-heading">
            Crafted design kit on Real-life issue, transform in possible solution
          </p>
          </div>

          <div className="bg-[#FB9300] text-white flex flex-end w-fit items-center px-8 py-4 max-sm:px-24 rounded-full gap-3"
          onClick={() => window.open('https://heliotrope-peak-106.notion.site/My-Commune-A-Community-App-87793e3e799e4d0097a7db382d40a45e?pvs=4', '_blank')}
            >
                <p className="text-base font-normal font-tertiary">Case Study</p>
                <img
                    className="w-8"
                    src={arrow}
                    alt=""
                />
         </div>
        </div>
      </div>
      
    </div>
  )
}

export default card_11