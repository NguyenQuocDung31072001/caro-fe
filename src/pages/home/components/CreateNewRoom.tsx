import React from "react"
import { useModal } from "hook/useModal"

import {
  Input,
  Button,
  Select,
} from "components/common"

export default function CreateNewRoom() {
  const { modalProps, Modal } = useModal()
  const options = [
    {
      value: "private",
      label: "private",
    },
    {
      value: "public",
      label: "public",
    },
  ]
  return (
    <div>
      <button onClick={modalProps.open}>
        Create new room
      </button>
      <Modal {...modalProps}>
        <Input
          label="Room name"
          placeholder="Room name"
          type="text"
        />
        <div className="p-2" />
        <Select options={options} />
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
