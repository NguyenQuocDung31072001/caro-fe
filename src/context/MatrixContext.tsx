import React, {
  createContext,
  useContext,
} from "react"
import { socket } from "../socket"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import { Socket } from "socket.io-client"

type MatrixContextProps = {
  caroMatrix: string[][]
  setCaroMatrix: React.Dispatch<
    React.SetStateAction<string[][]>
  >
  currChar: "x" | "o"
  setCurrChar: React.Dispatch<
    React.SetStateAction<"x" | "o">
  >
  socket: Socket<
    DefaultEventsMap,
    DefaultEventsMap
  >
}
type Props = {
  children: React.ReactNode
}
const MatrixContext =
  createContext<MatrixContextProps>(
    {} as MatrixContextProps,
  )

export const useMatrixContext = () => {
  return useContext(MatrixContext)
}
const NumMatrix = 10

export const MatrixContextProvider = ({
  children,
}: Props) => {
  const [caroMatrix, setCaroMatrix] =
    React.useState<string[][]>([])
  const [currChar, setCurrChar] = React.useState<
    "x" | "o"
  >("x")

  React.useEffect(() => {
    let _caroMatrix: string[][] = []

    for (let i = 0; i < NumMatrix; i++) {
      for (let j = 0; j < NumMatrix; j++) {
        _caroMatrix[i] = _caroMatrix[i]
          ? [..._caroMatrix[i], ""]
          : [""]
      }
    }
    setCaroMatrix(_caroMatrix)
  }, [])

  // React.useEffect(() => {
  //   socket.on("connect", () => {
  //     socket.emit("join-room", {
  //       room: "caro-test",
  //       socketId: socket.id,
  //     })
  //   })
  //   socket.on("disconnect", () => {
  //     socket.emit("leave-room", {
  //       room: "caro-test",
  //       socketId: socket.id,
  //     })
  //   })
  //   socket.on(
  //     "server-sent-init-matrix",
  //     ({ matrix, character }) => {
  //       console.log({ matrix, character })
  //       setCaroMatrix(matrix)
  //       setCharacter(character)
  //     },
  //   )
  //   socket.on("Server-sent-data", (data) => {
  //     setCaroMatrix(data)
  //   })

  //   return () => {
  //     socket.off("connect")
  //     socket.off("disconnect")
  //     socket.off("Server-sent-data")
  //   }
  // }, [])

  const value = {
    caroMatrix,
    setCaroMatrix,
    currChar,
    setCurrChar,
    socket,
  }
  return (
    <MatrixContext.Provider value={value}>
      {children}
    </MatrixContext.Provider>
  )
}
