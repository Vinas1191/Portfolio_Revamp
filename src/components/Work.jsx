import React from 'react'
import Card8 from './WorkCards/card_8'
import Card9 from './WorkCards/card_9'
import Card10 from './WorkCards/card_10'
import Card11 from './WorkCards/card_11'
import Card12 from './WorkCards/card_12'
import Card67 from './WorkCards/card_67'  


const Work = () => {
  return (
    <div
      id="Work"
      className="w-full flex justify-center flex-wrap bg-secondary-200 pb-[20px] lg:px-[20px]"
    >
      <h1 className='font-secondary font-extrabold lg:text-[40px] text-[30px] pt-20 pb-7'>Featured Work ✨</h1>
      {/* Mechanic Mate */}
      <Card8 />
      {/* Itsplit */}
      <Card9 />
      {/* Recipely */}
      <Card10 />
      {/* FIFA API */}
      <Card11 />
      {/* My Commune */}
      <Card12 />
      {/* College Projects */}
      <Card67 />
    </div>
  )
}

export default Work
