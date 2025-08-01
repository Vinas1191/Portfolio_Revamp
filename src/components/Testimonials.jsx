import React, { useState } from 'react';
import quoteIcon from '../assets/quote.png'; // your local quote image

const testimonials = [
  {
    name: "Lauren Mackay",
    title: "Founder @Head First",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=928&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Vinas demonstrated exceptional strength in UI/UX design and frontend development, consistently delivering high-quality, thoughtful work. Proactive and reliable, he skillfully transformed design concepts into polished, functional interfaces. I would highly recommend Vinas to any team seeking a talented and dedicated designer-developer hybrid. He would be a valuable asset to any organization."
  },
  {
    name: "Mark Jensen",
    title: "CTO @Creative Labs",
    image: "https://images.unsplash.com/photo-1654110455429-cf322b40a906?q=80&w=1160&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Vinas is a game changer! His ability to blend beautiful design with functional code is unmatched. His work ethic and attention to detail make him stand out in any project."
  },
  {
    name: "Sophie Lee",
    title: "Product Lead @Nova",
    image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    text: "Creative, dependable, and truly skilled at bringing ideas to life — Vinas was a key contributor to our product success. Highly recommend working with him!"
  }
];

const getCardState = (index, activeIndex) => {
  if (index === activeIndex) return "active";

  // Determine position relative to active
  if (activeIndex === 0) {
    if (index === 1) return "midQuote";
    if (index === 2) return "stretchedEmpty";
  }

  if (activeIndex === 1) {
    return "midQuote"; // all non-active cards get quote
  }

  if (activeIndex === 2) {
    if (index === 1) return "midQuote";
    if (index === 0) return "stretchedEmpty";
  }

  return "collapsed";
};

const getStyles = (state) => {
  switch (state) {
    case "active":
      return {
        bg: "#272727",
        width: "500px",
        padding: "28px",
        content: true,
      };
    case "midQuote":
      return {
        bg: "#545454",
        width: "100px",
        padding: "28px 0",
        content: "quote",
      };
    case "stretchedEmpty":
      return {
        bg: "#E5E5E5",
        width: "45px",
        padding: "0px",
        content: false,
      };
    default:
      return {
        bg: "#545454",
        width: "100px",
        padding: "0px",
        content: false,
      };
  }
};

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full flex flex-col items-center bg-secondary-200 py-20 lg:px-5 max-md:hidden">
      <h1 className="flex w-full justify-center font-secondary font-extrabold text-[40px] pt-20 pb-7">What people say 💬</h1>

      <div className="flex overflow-x-auto no-scrollbar gap-5 px-5">
        {testimonials.map((item, index) => {
          const state = getCardState(index, activeIndex);
          const { bg, width, padding, content } = getStyles(state);

          return (
            <div
              key={index}
              onClick={() => setActiveIndex(index)}
              className="flex-shrink-0 rounded-3xl transition-all duration-500 ease-in-out flex flex-col justify-start items-start cursor-pointer"
              style={{
                backgroundColor: bg,
                width,
                height: "330px",
                padding,
                overflow: "hidden",
              }}
            >
              {content === true && (
                <div className="flex flex-col justify-start w-full h-full opacity-0 animate-fadeIn">
                    <div className="flex items-center min-h-[70px]">
                    <img
                        className="object-cover rounded-xl h-16 w-16 transition-all duration-300 ease-in-out"
                        src={item.image}
                        alt={item.name}
                    />
                    <div className="flex flex-col justify-center pl-3">
                        <p className="font-secondary text-[#ffffff] text-[20px] whitespace-nowrap">
                        {item.name}
                        </p>
                        <p className="font-primary font-medium text-[#9b9b9b] text-xs whitespace-nowrap">
                        {item.title}
                        </p>
                    </div>
                    </div>

                    <div className="mt-4 text-secondary-200 leading-snug transition-opacity duration-700 ease-in-out">
                    <p className="font-normal text-base">{item.text}</p>
                    </div>
                </div>
                )}

              {content === "quote" && (
                <div className="flex flex-col items-center h-full w-full">
                  <img
                    className="object-cover rounded-xl h-14 w-14 mb-4"
                    src={item.image}
                    alt={item.name}
                  />
                  <img
                    src={quoteIcon}
                    alt="quote"
                    className="w-6 pt-14"
                  />
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Testimonials;