import React from "react"
import { useModal } from "hook/useModal"

import {
  Input,
  Button,
  Select,
} from "components/common"

export default function CreateNewRoom() {
  const { modalProps, Modal } = useModal()
  const timeTurnOptions = [
    {
      value: 10,
      label: "10s",
    },
    {
      value: 20,
      label: "20s",
    },
    {
      value: 30,
      label: "30s",
    },
    {
      value: 40,
      label: "40s",
    },
  ]
  const totalTimeOptions = [
    {
      value: 2 * 60,
      label: "2 phút",
    },
    {
      value: 3 * 60,
      label: "3 phút",
    },
    {
      value: 4 * 60,
      label: "4 phút",
    },
  ]
  const whoPlayFirstOptions = [
    {
      value: "auto",
      label: "Ngẫu nhiên",
    },
    {
      value: "chủ phòng",
      label: "Tôi bắt đầu trước",
    },
    {
      value: "đối thủ",
      label: "Đối thủ bắt đầu trước",
    },
  ]
  return (
    <div>
      <button onClick={modalProps.open}>
        Create new room
      </button>
      <Modal {...modalProps}>
        <Select
          label="Thời gian mỗi lượt"
          options={timeTurnOptions}
        />
        <Select
          label="Số phút cho mỗi người chơi"
          options={totalTimeOptions}
        />
        <Select
          label="Ai chơi trước?"
          options={whoPlayFirstOptions}
        />
        <div className="p-2" />
        <div className="flex items-center justify-center mt-2">
          <Button
            label="Create new room"
            onClick={() => {
              modalProps.close()
            }}
          />
        </div>
      </Modal>
    </div>
  )
}
