import React, {
  createContext,
  useContext,
} from "react"
import { socket } from "../socket"
import { DefaultEventsMap } from "@socket.io/component-emitter"
import { Socket } from "socket.io-client"

export type UserInRoomType = {
  id: string
  name: string
  timeRemaining: number // total time remaining
  timeTurnRemaining: number // time remaining for each turn
  character: "x" | "o"
  myTurn: boolean
}
export type RoomType = {
  id: string
  config: {
    timeTurn: number
    totalTime: number
    whoPlayFirst: string
  }
  user: UserInRoomType[]
}

type MatrixContextProps = {
  caroMatrix: string[][]
  setCaroMatrix: React.Dispatch<
    React.SetStateAction<string[][]>
  >
  currChar: "x" | "o"
  setCurrChar: React.Dispatch<
    React.SetStateAction<"x" | "o">
  >
  rooms: RoomType[]
  setRooms: React.Dispatch<
    React.SetStateAction<RoomType[]>
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
  const [rooms, setRooms] = React.useState<
    RoomType[]
  >([
    {
      id: "room1",
      config: {
        timeTurn: 10,
        totalTime: 60,
        whoPlayFirst: "userId1",
      },
      user: [
        {
          id: "userId1",
          name: "user1",
          timeRemaining: 60,
          timeTurnRemaining: 10,
          character: "x",
          myTurn: true,
        },
        {
          id: "userId2",
          name: "user2",
          timeRemaining: 60,
          timeTurnRemaining: 10,
          character: "o",
          myTurn: false,
        },
      ],
    },
    {
      id: "room2",
      config: {
        timeTurn: 20,
        totalTime: 5 * 60,
        whoPlayFirst: "userId1",
      },
      user: [
        {
          id: "userId1",
          name: "user1",
          timeRemaining: 60,
          timeTurnRemaining: 10,
          character: "x",
          myTurn: true,
        },
      ],
    },
  ])

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
    rooms,
    setRooms,
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
