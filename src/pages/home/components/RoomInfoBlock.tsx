import React from "react"
import { IRoomsListing } from ".."
import { TbLock } from "react-icons/tb"
import { useNavigate } from "react-router-dom"
import { useModal } from "hook/useModal"

export default function RoomInfoBlock({
  id,
  name,
  status,
  usersInfo,
}: IRoomsListing) {
  const navigate = useNavigate()
  const { modalProps, Modal } = useModal()

  const isFullUser = usersInfo.every((user) =>
    Boolean(user),
  )
  const isValidRoom =
    !isFullUser && status === "public"

  const handleClick = () => {
    if (!isValidRoom) return
    modalProps.open()
  }
  const handleOk = () => {
    navigate(`/home/${id}`)
  }
  return (
    <div
      className={`flex items-center justify-center my-4 border-[1px] border-solid border-gray-400 rounded-[10px] duration-200  ${
        isValidRoom
          ? "cursor-pointer hover:bg-green-300"
          : isFullUser
          ? "cursor-not-allowed bg-gray-200"
          : "cursor-not-allowed bg-red-200"
      } `}
      onClick={handleClick}
    >
      <Modal
        {...modalProps}
        visible={modalProps.visible}
      >
        Are u sure to join this room?
        <div className="flex items-center justify-start mt-2">
          <button
            className="bg-gray-500 p-2 mx-2 rounded-[5px] text-white"
            onClick={handleOk}
          >
            OK
          </button>
          <button
            className="bg-gray-500 p-2 rounded-[5px] text-white"
            onClick={modalProps.close}
          >
            Cancel
          </button>
        </div>
      </Modal>

      <div className="relative">
        {status === "private" && (
          <div className="absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%]">
            <TbLock />
          </div>
        )}
        <div
          className={`flex flex-col p-4  ${
            status === "private"
              ? "opacity-10"
              : ""
          }`}
        >
          {usersInfo.map((_user) => {
            if (!_user) return <div>-</div>
            return (
              <div key={_user.id}>
                {_user.name}
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
