import Point from "components/Point"
import { useMatrixContext } from "context/MatrixContext"
import React from "react"
import { useParams } from "react-router-dom"
import PlayerInfo from "./component/PlayerInfo"

export default function HomeDetailPage() {
  const params = useParams()
  const id = params?.id
  const { caroMatrix } = useMatrixContext()

  return (
    <div className="w-full flex flex-col items-center p-4 bg-blue-100">
      <PlayerInfo />
      <div className="bg-white">
        {caroMatrix.map((row, i) => {
          return (
            <div key={i} className="flex">
              {caroMatrix[i].map((col, j) => {
                return (
                  <Point
                    key={`${i}${j}`}
                    row={i}
                    col={j}
                  />
                )
              })}
            </div>
          )
        })}
      </div>
      <PlayerInfo />
    </div>
  )
}
