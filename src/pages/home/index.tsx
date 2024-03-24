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
  status: "private" | "public"
  usersInfo: (IUsersInfoInRoom | null)[]
}
export default function HomePages() {
  const dataRooms: IRoomsListing[] = [
    {
      id: "room 1",
      name: "room 1",
      status: "public",
      usersInfo: [null, null],
    },
    {
      id: "room 2",
      name: "room 2",
      status: "private",
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
      status: "public",
      usersInfo: [
        {
          id: "user 1 ",
          name: "user 1 name",
        },
        null,
      ],
    },
    {
      id: "room 4",
      name: "room 4",
      status: "public",
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
              status={room.status}
              usersInfo={room.usersInfo}
            />
          )
        })}
      </div>
    </div>
  )
}
