import React from 'react'
import Role from '../../assets/role.png';
import proLogo from "../../assets/LogoWhite--Blue copy 1.png";
import ProjectShowcase from '../../assets/mechanic mate.png';

const card_1 = () => {
  return (
    //  mechanic mate app re-design
    <div className="w-auto bg-secondary-100 flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer border-[1px] border-gray-100 p-[40px] max-sm:py-10 max-sm:px-3 max-sm:m-2  mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="flex flex-col text-center">
        <h2 className="font-secondary font-bold text-[30px] my-[30px] title">
          Mechanic Mate
        </h2>
        <p className="font-secondary font-bold text-[48px] lg:text-[52px] leading-[112%] lg:mb-[40px] mb-[28px] sub-heading">
          Manage your <br /> workshop anytime, <br /> anywhere.
        </p>
        <p className="text-lg max-sm:text-base">
          Take advantage of features like Estimate, Invoices, Service history,
          Expense <br className='max-md:hidden'/>
          management, Maintenance Reminders.
        </p>
      </div>
      <img
        className="w-[70%] max-md:w-full max-sm:py-5"
        src={ProjectShowcase}
        alt=""
      />
      <div className="flex w-[100%] p-10 rounded-[20px] bg-[#F8F8F8] max-sm:p-2 max-sm:bg-[#FFFFFF] justify-between max-sm:justify-center">
        <div className="flex justify-center gap-4 max-sm:hidden">
          <img
            className="w-[50px] object-contain"
            src={proLogo}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Mechanic Mate</p>
            <p className="text-xs">Product Revamp</p>
          </div>
        </div>
        <div className="gap-[10px] flex items-center max-md:hidden">
          <img
            className="w-[40px] object-contain"
            src={Role}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">UI/UX Designer</p>
            <p className="text-xs">Role In project</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain"
            src="http://cdn.prod.website-files.com/642fefd79c6a513eeff0a61c/64a55a2b2733eb77e39a2360_Logo.svg"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Omega Orion</p>
            <p className="text-xs">Company worked for</p>
          </div>
        </div>
        <div className="bg-black text-white flex items-center px-10 py-5 rounded-full gap-2 hover:bg-neutral-800 max-sm:px-12"
              onClick={() => window.open('https://www.figma.com/proto/Z3K5KPFqk49rP0Mh8CfhDJ/Mechanic-mate?page-id=0%3A1&node-id=1-5&p=f&viewport=72%2C326%2C0.02&t=3NKIABgBcGw5TlQC-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A5', '_blank')}
              >
          <p className="text-base font-normal font-secondary">Preview</p>
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