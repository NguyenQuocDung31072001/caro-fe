import React from "react"
import HourglassIcon from "assets/images/hourglass.png"
import { TimeRemaining } from "components/timer/TimeRemaining"

export default function PlayerInfo() {
  const timeToRemain = 0 * 60 * 1000 + 8 * 1000
  const targetTime =
    new Date().getTime() + timeToRemain

  return (
    <div className="flex justify-start bg-blue-400 w-[480px]">
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfdWwVU65gZW5--Ypno_l2GBNhI_sinWkNUw&usqp=CAU"
        alt=""
        className="w-16 h-16 object-cover rounded-full"
      />
      <div className="px-8">
        <p className="text-white">Hoang nguyen</p>
        <div className="flex items-center">
          <div className="w-6 h-6 flex items-center justify-center bg-white text-black rounded-full">
            x
          </div>
          <img
            src={HourglassIcon}
            alt=""
            className="w-8 h-8 object-cover"
          />
          <TimeRemaining
            targetTime={targetTime}
          />
        </div>
      </div>
    </div>
  )
}
