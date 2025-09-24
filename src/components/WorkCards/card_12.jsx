import React from 'react'
import screens from '../../assets/communescreen.png'
import screensMobile from '../../assets/communemscreen.png'
import arrow from '../../assets/Right Arrow.png'
import lock from '../../assets/lock.png'

const card_12 = () => {
  return (
    // Mechanic Mate - product revamp
    <div className="w-auto h-4/5 bg-[#D4ECDD] text-[#112031] flex flex-wrap items-center rounded-[30px] overflow-hidden cursor-pointer pl-[80px] max-sm:pt-10 max-sm:px-3 max-sm:m-2 mb-5 transition transform 0.3s ease-in-out hover:zoom">
      <div className="w-auto flex flex-wrap">
        <div className="lg:w-7/12 flex flex-col justify-between pb-[55px] lg:py-[80px] max-md:items-center">
          <div>
          <h2 className="font-secondary max-md:text-center  text-[#112031] text-[30px] my-[30px] title">
            My Commune - UI kit design
          </h2>

          <p className="font-secondary text-[#112031] font-bold text-[50px] lg:text-[46px] max-md:text-center leading-[112%] mb-[40px] sub-heading">
            Design Kit for Real-World Issues
          </p>
          </div>

          <div className="bg-[#112031] text-white flex flex-end w-fit items-center px-8 py-4 max-sm:px-10 rounded-full gap-3"
          onClick={() => window.open('/', '_blank')}
            >
            <p className="text-base font-normal font-tertiary">Coming soon</p>
              <img
                className="w-5"
                src={lock}
                alt=""
              />
         </div>

        </div>
        <div className="lg:w-5/12">
                    <img className="w-full hidden lg:block" src={screens} alt="Mycommune Desktop" />
                    {/* Mobile Image */}
                    <img className="w-full block lg:hidden" src={screensMobile} alt="Mycommune Mobile" />
        </div>
      </div>
      
    </div>
  )
}

export default card_12