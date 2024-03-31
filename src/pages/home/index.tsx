import React from "react"
import RoomInfoBlock from "./components/RoomInfoBlock"
import CreateNewRoom from "./components/CreateNewRoom"

interface IUsersInfoInRoom {
  id: string
  name: string
}

export interface IRoomsListing {
  id: string
  name: string
  usersInfo: (IUsersInfoInRoom | null)[]
}
export default function HomePages() {
  const dataRooms: IRoomsListing[] = [
    {
      id: "room 2",
      name: "room 2",
      usersInfo: [
        {
          id: "user 1",
          name: "user 1 name",
        },
        null,
      ],
    },
    {
      id: "room 3",
      name: "room 3",
      usersInfo: [
        {
          id: "user 1 ",
          name: "user 1 name",
        },
        {
          id: "user 2",
          name: "user 2 name",
        },
      ],
    },
    {
      id: "room 4",
      name: "room 4",
      usersInfo: [
        {
          id: "user 1 ",
          name: "user 1 name",
        },
        {
          id: "user 2",
          name: "user 2 name",
        },
      ],
    },
  ]
  return (
    <div className="flex flex-col w-full items-center justify-center">
      <CreateNewRoom />
      <div className="w-[50%]">
        {dataRooms.map((room) => {
          return (
            <RoomInfoBlock
              key={room.id}
              id={room.id}
              name={room.name}
              usersInfo={room.usersInfo}
            />
          )
        })}
      </div>
    </div>
  )
}
