import React from 'react'
import itSplit from '../../assets/itsplit.png'

const card_2 = () => {
  return (
    // It-split app ui design
    <div className="w-auto bg-[#181A20] flex flex-col flex-wrap items-center rounded-[30px] cursor-pointer px-[40px] pt-[40px] max-sm:px-6 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="flex flex-col text-center">
        <h2 className="font-secondary text-white font-bold text-[30px] my-[30px] title">
          Side Project
        </h2>
        <p className="font-secondary text-white font-bold text-[48px] lg:text-[52px] leading-[112%] mb-[40px] sub-heading">
          Introducing <br />
          Itsplit App
        </p>
        <p className="text-lg text-white max-sm:text-base">
          Easy to Split bills and pay from anywhere <br className='max-sm:hidden'/>
          with every member of bill.
        </p>
      </div>
      <div className="bg-[#1E212A] text-white flex items-center mt-12 px-10 py-5 max-sm:m-5 rounded-full gap-2"
      onClick={() => window.open('https://www.behance.net/gallery/158286593/Itsplit-Mobile-App-UIUX', '_blank')}
      >
        <p className="text-base font-normal font-secondary">Case Study</p>
        <img
          className="w-7"
          src="https://cdn.prod.website-files.com/61e45677f3f6b3e9bf77d423/637b6ee0e3a0df6586006721_arrow.svg"
          alt=""
        />
      </div>
      <img className="w-full" src={itSplit} alt="" />
    </div>
  )
}

export default card_2