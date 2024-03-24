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

export const MatrixContextProvider = ({
  children,
}: Props) => {
  const [caroMatrix, setCaroMatrix] =
    React.useState<string[][]>([])
  const [character, setCharacter] =
    React.useState<string>("")

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
    socket,
  }
  return (
    <MatrixContext.Provider value={value}>
      {children}
    </MatrixContext.Provider>
  )
}
