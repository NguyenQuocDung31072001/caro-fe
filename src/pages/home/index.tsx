import RoomInfoBlock from "./components/RoomInfoBlock"
import CreateNewRoom from "./components/CreateNewRoom"
import { useMatrixContext } from "context/MatrixContext"

export default function HomePages() {
  const { rooms } = useMatrixContext()
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <CreateNewRoom />
      <div className="w-[50%]">
        {rooms.map((room) => {
          return (
            <RoomInfoBlock
              key={room.id}
              id={room.id}
              usersInfo={room.user}
            />
          )
        })}
      </div>
    </div>
  )
}
