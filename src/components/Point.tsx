import React from "react"
import { useMatrixContext } from "../context/MatrixContext"

interface PointProps {
  row: number
  col: number
}
const lengthOfMatrix = 3
export default function Point({
  row,
  col,
}: PointProps) {
  const { caroMatrix, socket } =
    useMatrixContext()

  const isFirstRow = row === 0
  const isLastRow = row === lengthOfMatrix - 1
  const isFirstCol = col === 0
  const isLastCol = col === lengthOfMatrix - 1

  const handleClick = () => {
    const newCaroMatrix = [...caroMatrix]
    newCaroMatrix[row][col] = "x"
    socket.emit("Client-sent-data", newCaroMatrix)
  }
  return (
    <div
      role="presentation"
      className={`w-12 h-12 flex items-center justify-center border-[0.5px]
      ${isFirstRow ? "border-t-[1px]" : ""} 
      ${isLastRow ? "border-b-[1px]" : ""}
     ${isFirstCol ? "border-l-[1px]" : ""}
    ${isLastCol ? "border-r-[1px]" : ""}
      border-solid border-black
      hover:bg-red-700
      cursor-pointer
      `}
      onClick={handleClick}
    >
      {caroMatrix[row][col]}
    </div>
  )
}
