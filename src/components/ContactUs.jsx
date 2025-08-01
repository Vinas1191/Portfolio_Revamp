import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import Linkedin from '../assets/linkedin.png';
import Behance from '../assets/behance.png';
import Github from '../assets/github.png';
import Dribble from '../assets/dribblelg.png';

const ContactUs = () => {
  const form = useRef();
  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_jhiy964', // e.g. 'service_abc123'
        'template_q73y3sw', // e.g. 'template_xyz456'
        form.current,
        'KyYKNcIcDLSEZLQn5' // e.g. 'UuIm3xi45B_C-L-xyz'
      )
      .then(
        () => {
          setStatus('Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          setStatus('Failed to send. Please try again later.');
          console.error(error.text);
        }
      );
      emailjs.sendForm(
        'service_jhiy964',
        'template_8y745gp',       // ✅ Your new auto-reply template
        form.current,
        'KyYKNcIcDLSEZLQn5'
      );
  };

  return (
    <div id="get_in_touch" className="w-full flex items-center text-center flex-col bg-secondary-200 max-sm:p-6">
      {/* ... Social Icons and Header remain the same ... */}
      <div className="w-auto flex justify-center lg:pt-[170px] lg:pb-[100px] py-9">
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

      <p className="font-secondary text-[24px] lg:text-[34px] font-extrabold lg:pt-[10px]">
        Have something in mind? <br className='max-lg:hidden'/> Let’s connect!
      </p>

      <form ref={form} onSubmit={sendEmail} className="w-full flex flex-col items-center pt-12 pb-[200px] max-lg:pb-12">
        <div className="w-auto flex md:flex-row flex-col justify-center gap-4">
          <div className="flex flex-col items-start">
            <label className="text-lg mb-[6px]">Name</label>
            <input
              name="name"
              className="border border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[30px] pr-[60px]"
              type="text"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="flex flex-col items-start">
            <label className="text-lg mb-[6px]">Email</label>
            <input
              name="email"
              className="border border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[100px] pr-[60px]"
              type="email"
              placeholder="Enter your email"
              required
            />
          </div>
        </div>

        <div className="w-auto flex flex-col items-start mt-8">
          <label className="text-lg mb-[6px]">Message</label>
          <textarea
            name="message"
            className="border border-[#e0e0e0] text-lg font-light rounded-xl p-[18px] lg:pr-[352px] pr-[60px]"
            rows={5}
            placeholder="Enter your message"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-black text-white flex items-center mt-5 px-8 py-4 rounded-full gap-2 hover:bg-neutral-800 cursor-pointer"
        >
          <p className="text-lg font-bold font-secondary">Submit</p>
        </button>

        {status && (
          <p className="mt-4 text-green-600 font-medium">{status}</p>
        )}
      </form>
    </div>
  );
};

export default ContactUs;
