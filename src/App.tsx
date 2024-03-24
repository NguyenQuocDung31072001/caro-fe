import React from "react"
import "./App.css"
// import Point from "./components/Point"
import { useMatrixContext } from "./context/MatrixContext"
import { useRouterElement } from "./useRouterElement"

//socket
function App() {
  const { routerElement } = useRouterElement()
  const { caroMatrix } = useMatrixContext()

  return <div>{routerElement}</div>
  // <div className="w-[100%] h-[100vh] flex flex-col items-center justify-center">
  //   {caroMatrix.map((row, i) => {
  //     return (
  //       <div key={i} className="flex">
  //         {caroMatrix[i].map((col, j) => {
  //           return (
  //             <Point
  //               key={`${i}${j}`}
  //               row={i}
  //               col={j}
  //             />
  //           )
  //         })}
  //       </div>
  //     )
  //   })}
  // </div>
}

export default App
