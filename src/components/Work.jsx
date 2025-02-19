import React from 'react'
import Card1 from './WorkCards/card_1'
import Card2 from './WorkCards/card_2'
import Card3 from './WorkCards/card_3'
import Card4 from './WorkCards/card_4'
import Card5 from './WorkCards/card_5'
import Card67 from './WorkCards/card_67'

const Work = () => {
  return (
    <div
      id="Work"
      className="w-full flex justify-center flex-wrap bg-secondary-200 pb-[20px] lg:px-[20px]"
    >
      {/* Mechanic Mate */}
      <Card1 />
      {/* Itsplit */}
      <Card2 />
      {/* Recipely */}
      <Card3 />
      {/* FIFA API */}
      <Card4 />
      {/* My Commune */}
      <Card5 />
      {/* College Projects */}
      <Card67 />
    </div>
  )
}

export default Work
