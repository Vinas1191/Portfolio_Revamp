import React from 'react'
import fifaLogo from '../../assets/fifalg.png'
import Role from '../../assets/role.png';
import fifa from '../../assets/Group 1000003670.png'
import dione from '../../assets/dione.png'

const card_4 = () => {
  return (
    // Fifa Project 
    <div className="w-auto bg-secondary-100 text-[#1E232D] flex flex-wrap items-center rounded-[30px] cursor-pointer pt-[100px] pb-[40px] px-[40px] max-sm:py-10 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
        <div className="lg:w-1/3 px-10 pb-10">
          <img className="w-full" src={fifa} alt="" />
        </div>
        <div className="lg:w-2/3 flex flex-col lg:pl-[60px] max-md:items-center">
          <h2 className="font-secondary text-[#1E232D] font-bold text-[32px] my-[30px] title">
            Football App API
          </h2>
          <p className="font-secondary text-[#1E232D] font-bold text-[50px] lg:text-[64px] max-md:text-center leading-[112%] mb-[40px] sub-heading">
            An API for football match predictions, results, and analytics.
          </p>
          <p className="text-lg text-[#1E232D] max-md:hidden">
            An API that provides user predictions, game results, and analytics
            for FIFA football matches, enhancing engagement with real-time data
            and insights.
          </p>
        </div>
      </div>
      <div className="flex w-[100%] p-10 rounded-[20px] bg-[#F8F8F8] max-sm:bg-secondary-100 max-sm:p-0  justify-between max-sm:justify-center">
        <div className="flex justify-center gap-4 max-sm:hidden">
          <img
            className="w-[50px] object-contain"
            src={fifaLogo}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Fifa football - API</p>
            <p className="text-xs">★★★★★ 4.8</p>
          </div>
        </div>
        <div className="gap-[10px] flex items-center max-md:hidden">
          <img
            className="w-[40px] object-contain"
            src={Role}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Backend Developer</p>
            <p className="text-xs">Role In project</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[46px] object-contain rounded-lg"
            src={dione}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Dione Apps</p>
            <p className="text-xs">Company worked for</p>
          </div>
        </div>
        <div className="bg-[#1E232D] text-white flex items-center px-10 py-5 rounded-full gap-2"
          onClick={() => window.open('https://github.com/Vinusmavani/Fifa_API.git', '_blank')}
        >
          <p className="text-base font-normal font-secondary">Github Repo</p>
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

export default card_4