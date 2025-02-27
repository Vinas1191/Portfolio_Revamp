import React from 'react'
import MyCommune from '../../assets/mycommune.png'
import MyCommuneLogo from '../../assets/commune_logo.png'
import screens from '../../assets/Group 2650164.png'

const card_5 = () => {
  return (
    // My commune UI-KIT 
    <div className="w-auto bg-[#D4ECDD] text-[#112031] flex flex-wrap items-center rounded-[30px] cursor-pointer pt-[100px] pb-[40px] px-[40px] max-sm:py-10 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
        <div className="lg:w-2/3 flex flex-col lg:pl-[60px] max-md:items-center">
          <h2 className="font-secondary text-[#261C4E] font-bold text-[32px] my-[30px] title">
            My Commune App
          </h2>
          <p className="font-secondary text-[#261C4E] font-bold text-[50px] lg:text-[68px] max-md:text-center leading-[112%] mb-[40px] sub-heading">
            An interface that allows neighbours to connect
          </p>
          <p className="text-lg text-[#261C4E] max-md:hidden">
            An app that allows neighbours to connect and share information about
            crime and safety concerns in their area, as well as report
            suspicious activity and receive alerts from community.
          </p>
        </div>
        <div className="lg:w-1/3">
          <img className="w-full" src={MyCommune} alt="" />
        </div>
      </div>
      <div className="flex w-[100%] p-10 rounded-[20px] bg-[#C0D8CC] max-sm:bg-[#D4ECDD] max-sm:p-0  justify-between max-sm:justify-center">
        <div className="flex justify-center gap-4 max-sm:hidden">
          <img
            className="w-[50px] object-contain"
            src={MyCommuneLogo}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">My Commune - UI Kit</p>
            <p className="text-xs">★★★★★ 4.8</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain"
            src={screens}
            alt=""
          />
          <div>
            <p className="text-xl font-medium">50+ Screens</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain"
            src="https://static.thenounproject.com/png/4808961-200.png"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Both</p>
            <p className="text-xs">light &amp; dark mode</p>
          </div>
        </div>
        <div className="bg-[#112031] text-white flex items-center px-10 py-5 max-sm:px-24 rounded-full gap-2"
          onClick={() => window.open('https://heliotrope-peak-106.notion.site/My-Commune-A-Community-App-87793e3e799e4d0097a7db382d40a45e?pvs=4', '_blank')}
        >
          <p className="text-base font-normal font-secondary">Case Study</p>
          <img
            className="w-7"
            src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  )
}

export default card_5