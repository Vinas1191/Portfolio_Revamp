import React from 'react'
import Linkedin from '../assets/linkedin.png'
import Behance from '../assets/behance.png'
import Github from '../assets/github.png'
import Dribble from '../assets/dribblelg.png'

const ContactUs = () => {
  return (
    <div
    id="get_in_touch"
    className="w-full flex items-center text-center flex-col flex-wrap bg-secondary-200 max-sm:p-6 "
  >
    <div className="w-auto flex justify-center lg:pt-[170px] lg:pb-[170px] py-9">
      <a
        className="lg:p-4 p-2"
        href="https://www.linkedin.com/in/vinas-mavani-001306211/"
        target="”_blank”"
      >
        <img className="w-[62px]" src={Linkedin} alt="" />
      </a>
      <a
        className="lg:p-4 p-2"
        href="https://www.behance.net/vinusmavani"
        target="”_blank”"
      >
        <img className="w-[62px]" src={Behance} alt="" />
      </a>
      <a
        className="lg:p-4 p-2"
        href="https://github.com/Vinusmavani"
        target="”_blank”"
      >
        <img className="w-[62px]" src={Github} alt="" />
      </a>
      <a
        className="lg:p-4 p-2"
        href="https://dribbble.com/vm1191"
        target="”_blank”"
      >
        <img className="w-[62px]" src={Dribble} alt="" />
      </a>
    </div>
    <p className="font-secondary text-[30px] lg:text-[34px] font-extrabold lg:pt-[10px]">
      Have something in mind? <br /> Let’s connect!
    </p>
    <div className="w-full flex flex-col flex-wrap items-center pt-12 pb-[200px]">
      <div className="w-auto flex md:flex-row flex-col justify-center gap-4">
        <div className="flex flex-col flex-wrap items-start">
          <label className="text-lg mb-[6px]" htmlFor="text">
            Name
          </label>
          <input
            className="border-[1px] border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[30px] pr-[150px]"
            type="text"
            placeholder="Enter your name"
            required=""
          />
        </div>
        <div className="flex flex-col items-start">
          <label className="text-lg mb-[6px]" htmlFor="email">
            Email
          </label>
          <input
            className="border-[1px] border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[100px] pr-[150px]"
            type="email"
            placeholder="Enter your email"
            required=""
          />
        </div>
      </div>
      <div className="w-auto flex flex-col items-start mt-8">
        <label className="text-lg mb-[6px]" htmlFor="message">
          Message
        </label>
        <textarea
          className="border-[1px] border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[352px] pr-[150px]"
          rows={5}
          type="email"
          placeholder="Enter your message"
          required=""
          defaultValue={""}
        />
      </div>
      <div className="bg-black text-white flex items-center mt-5 px-8 py-4 rounded-full gap-2 hover:bg-neutral-800 cursor-pointer">
        <p className="text-lg font-bold font-secondary">Submit</p>
      </div>
    </div>
  </div>
  )
}

export default ContactUs