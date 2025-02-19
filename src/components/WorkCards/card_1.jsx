import React from 'react'
import Order_Estimate from '../../assets/Group 1000003650.png';
import proLogo from "../../assets/LogoWhite--Blue copy 1.png";
import download from "../../assets/playstore.svg"
import ProjectShowcase from '../../assets/mechanic mate.png';

const card_1 = () => {
  return (
    //  mechanic mate app re-design
    <div className="w-auto bg-secondary-100 flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer border-[1px] border-gray-100 p-[40px] mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="flex flex-col text-center">
        <h2 className="font-secondary font-bold text-[32px] my-[30px]">
          Mechanic Mate
        </h2>
        <p className="font-secondary font-bold text-[58px] lg:text-[68px] leading-[112%] mb-[40px]">
          Manage your <br /> workshop anytime, <br /> anywhere.
        </p>
        <p className="text-lg max-md:hidden">
          Take advantage of features like Estimate, Invoices, Service history,
          Expense <br />
          management, Maintenance Reminders.
        </p>
      </div>
      <img
        className="w-[70%] max-md:w-full"
        src={ProjectShowcase}
        alt=""
      />
      <div className="flex w-[100%] p-10 rounded-[20px] bg-[#F8F8F8] justify-between max-sm:justify-center">
        <div className="flex justify-center gap-4 max-sm:hidden">
          <img
            className="w-[50px] object-contain"
            src={proLogo}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Mechanic Mate</p>
            <p className="text-xs">★★★★★ 4.5</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain"
            src={Order_Estimate}
            alt=""
          />
          <div>
            <p className="text-xl font-medium">Quick Order/Estimate</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain"
            src={download}
            alt=""
          />
          <div>
            <p className="text-xl font-medium">download now</p>
          </div>
        </div>
        <div className="bg-black text-white flex items-center px-10 py-5 rounded-full gap-2">
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

export default card_1