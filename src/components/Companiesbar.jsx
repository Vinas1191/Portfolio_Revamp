import React from 'react'
import HeadFirst from '../assets/HeadFirst.png'
import OmegaOrian from '../assets/Omega.png'
import Dione from '../assets/DioneApps.png'
import HCDLogo from '../assets/HCD.png'


const Companiesbar = () => {
  return (
    <div className='bg-black flex justify-evenly p-8 items-center'>
        <a
            className="lg:p-4 p-2"
            href="https://www.linkedin.com/in/vinas-mavani-001306211/"
            target="”_blank”"
        >
            <img className="w-[160px] h-auto" src={HeadFirst} alt="" />
        </a>
        <a
            className="lg:p-4 p-2"
            href="https://www.linkedin.com/in/vinas-mavani-001306211/"
            target="”_blank”"
        >
            <img className="w-[160px] h-auto" src={HCDLogo} alt="" />
        </a>
        <a
            className="lg:p-4 p-2"
            href="https://www.linkedin.com/in/vinas-mavani-001306211/"
            target="”_blank”"
        >
            <img className="w-[120px]" src={OmegaOrian} alt="" />
        </a>
        <a
            className="lg:p-4 p-2"
            href="https://www.linkedin.com/in/vinas-mavani-001306211/"
            target="”_blank”"
        >
            <img className="w-12" src={Dione} alt="" />
        </a>
    </div>
  )
}

export default Companiesbar