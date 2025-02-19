import React from 'react'
import SiteImg from '../../assets/design agency site.png'
import AppImg from '../../assets/Diamondapp.png'

const card_67 = () => {
  return (
    //college projects
    <div className="w-full flex max-md:flex-col lg:space-x-5">
      <div className="lg:w-1/2 bg-white flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer transition transform 0.3s ease-in-out hover:zoom px-8 pt-10">
        <div className="flex flex-col text-center">
          <h2 className="font-primary text-black text-[24px] my-[20px]">
            Service page
          </h2>
          <p className="font-secondary text-black font-bold text-[28px] lg:text-[38px] leading-[112%] mb-[20px]">
            Design agency
            <br />
            website design
          </p>
          <p className="text-lg text-black">
            Modern, user-focused design agency website
            <br />
            showcasing creativity and expertise.
          </p>
        </div>
        <div className="bg-black text-white flex items-center mt-12 px-10 py-5  rounded-full gap-2">
          <p className="text-base font-normal font-secondary">Case Study</p>
          <img
            className="w-7"
            src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
            alt=""
          />
        </div>
        <img
          className="w-full mt-10"
          src={SiteImg}
          alt=""
        />
      </div>
      <div className="lg:w-1/2 bg-[#FF6584] flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer transition transform 0.3s ease-in-out hover:zoom px-8 pt-10 max-md:mt-[18px]">
        <div className="flex flex-col text-center">
          <h2 className="font-primary text-white text-[24px] my-[20px]">
            Side Project
          </h2>
          <p className="font-secondary text-white font-bold text-[28px] lg:text-[38px] leading-[112%] mb-[20px]">
            Introducing <br />
            Diamond world App
          </p>
          <p className="text-lg text-white">
            The App is made to sell world's best and impeccable precious stones,
            which joins buyer and sellers throughout the world.
          </p>
        </div>
        <div className="bg-[#1E212A] text-white flex items-center mt-12 px-10 py-5 rounded-full gap-2">
          <p className="text-base font-normal font-secondary">Case Study</p>
          <img
            className="w-7"
            src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
            alt=""
          />
        </div>
        <img className="w-full mt-10" src={AppImg} alt="" />
      </div>
    </div>
  )
}

export default card_67