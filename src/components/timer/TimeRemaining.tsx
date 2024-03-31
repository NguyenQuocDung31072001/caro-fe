import React from "react"
import { formatTimeUnit } from "util/formatTimeUnit"

type TimeRemainingProps = {
  targetTime: number
}

export const TimeRemaining: React.FC<
  TimeRemainingProps
> = ({ targetTime }) => {
  const [timeRemaining, setTimeRemaining] =
    React.useState<number>(
      targetTime - new Date().getTime(),
    )
  React.useEffect(() => {
    const intervalId = setInterval(() => {
      setTimeRemaining(
        targetTime - new Date().getTime(),
      )
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [targetTime])

  const getTimeRemainingWithSecond = Math.floor(
    timeRemaining / 1000,
  )

  const hour = formatTimeUnit(
    Math.floor(getTimeRemainingWithSecond / 60),
  )
  const minute = formatTimeUnit(
    Math.floor(getTimeRemainingWithSecond % 60),
  )

  return (
    <div>
      {hour}:{minute}
    </div>
  )
}
