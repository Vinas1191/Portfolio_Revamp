import React from 'react'
import Role from '../../assets/role.png';
import RecipelyLogo from "../../assets/RecipelyLogo.png";
import mernstack from "../../assets/mern.png"
import Recipely from '../../assets/recipelyprok.png'

const card_3 = () => {
  return (
    //  Recipely Project  
    <div className="w-auto bg-[#FFE7CE] flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer border-[1px] border-gray-100 p-[40px] max-sm:py-10 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="flex flex-col text-center mb-11">
      <h2 className="font-secondary text-[#261C4E] font-bold text-[30px] my-[30px] title">
          Recipely, <br className='lg:hidden'/> be a pro cook!!
        </h2>
        <p className="font-secondary text-[#261C4E] font-bold text-[48px] lg:text-[52px] leading-[112%] mb-[40px] sub-heading">
          filter recipes according <br /> to your choice
        </p>
        <p className="text-lg text-[#261C4E]">
            Upload Your Own Home-made Recipe And Share it With Other Members <br className='max-lg:hidden'/>
            And Reciply Community &amp; Get New Ideas, Re-invent and Inhancements...
        </p>
      </div>
      <img
        className="w-[60%] max-md:w-full mb-5"
        src={Recipely}
        alt=""
      />
      <div className="flex w-[100%] p-10 rounded-[20px] bg-[#ffffff] max-sm:bg-[#FFE7CE] max-sm:p-0 justify-between max-sm:justify-center">
        <div className="flex justify-center gap-4 max-sm:hidden">
          <img
            className="w-[120px] object-contain"
            src={RecipelyLogo}
            alt=""
          />
        </div>
        <div className="gap-[10px] flex items-center max-md:hidden">
          <img
            className="w-[40px] object-contain"
            src={Role}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">UX Engineer</p>
            <p className="text-xs">Role In project</p>
          </div>
        </div>
        <div className="gap-[20px] flex items-center max-md:hidden">
          <img
            className="w-[45px] object-contain"
            src={mernstack}
            alt=""
          />
          <div className="flex flex-col justify-center">
            <p className="text-xl font-medium">Mern Stack</p>
            <p className="text-xs">Technologies Used</p>
          </div>
        </div>
        <div className="bg-[#FB9300] text-white flex items-center px-10 py-5 rounded-full gap-2"
              onClick={() => window.open('https://github.com/Vinusmavani/recipely', '_blank')}
              >
          <p className="text-base font-normal font-secondary">GitHub Repo</p>
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

export default card_3