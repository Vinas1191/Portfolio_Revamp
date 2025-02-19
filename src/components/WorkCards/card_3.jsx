import React from 'react'
import Recipely from '../../assets/recipely.png'

const card_3 = () => {
  return (
    //  Recipely Project  
    <div className="w-auto bg-[#FFE7CE] flex flex-wrap md:flex-row flex-col items-center rounded-[30px] cursor-pointer lg:py-[100px] lg:px-[60px] p-[40px] mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="lg:w-1/2 w-full flex flex-col flex-wrap max-md:text-center lg:items-start lg:pl-10">
        <h2 className="font-secondary text-[#261C4E] font-bold text-[32px] my-[30px]">
          Recipely, be a pro cook!!
        </h2>
        <p className="font-secondary text-[#261C4E] font-bold text-[50px] lg:text-[68px] leading-[112%] mb-[40px]">
          filter recipes <br /> according to your choice
        </p>
        <p className="text-lg text-[#261C4E] max-md:hidden">
          Upload Your Own Home-made Recipe And Share it With Other Members And
          Reciply Community &amp; Get New Ideas, Re-invent and Inhancements...
        </p>
        <button className="bg-[#F68712] text-white flex items-center lg:mt-12 px-10 py-5 rounded-full gap-2 max-md:hidden">
          <p className="text-base font-normal font-secondary">Case Study</p>
          <img
            className="w-7"
            src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
            alt=""
          />
        </button>
      </div>
      <button className="bg-[#F68712] text-white flex items-center lg:mt-12 px-10 py-5 rounded-full gap-2 lg:hidden">
        <p className="text-base font-normal font-secondary">Case Study</p>
        <img
          className="w-7"
          src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
          alt=""
        />
      </button>
      <div className="lg:w-1/2 w-full">
        <img className="w-full" src={Recipely} alt="" />
      </div>
    </div>
  )
}

export default card_3