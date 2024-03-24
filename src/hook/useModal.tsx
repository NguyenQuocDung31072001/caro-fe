import React from "react"
import Modal from "components/modal"

export const useModal = () => {
  const [visible, setVisible] =
    React.useState(false)
  const close = () => {
    setVisible(false)
  }
  const open = () => setVisible(true)

  return {
    modalProps: {
      close,
      open,
      visible,
    },
    Modal,
  }
}
