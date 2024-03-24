import "css/modal-css.css"

import React from "react"
import { createPortal } from "react-dom"
import { MdOutlineCancel } from "react-icons/md"

export interface IModalProps {
  visible: boolean
  close: () => void
  open: () => void
  children: React.ReactNode
}
export default function index({
  visible,
  close,
  open,
  children,
}: IModalProps) {
  const root = document.getElementById("root")

  const handleClose = (
    e: React.MouseEvent<any, MouseEvent>,
  ) => {
    e.stopPropagation()
    close()
  }
  if (!visible) return null

  if (!root) return null
  return createPortal(
    <div
      className="flex flex-col items-center justify-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div
        className="fixed top-0  w-[100%] h-[100vh] flex items-center justify-center bg-gray-500 opacity-50"
        onClick={handleClose}
      />

      <div className="init-modal fixed top-32 w-[500px]  bg-white opacity-100 border-[1px] border-solid border-gray-300 rounded-[10px] p-4">
        <div className="flex justify-end p-2">
          <MdOutlineCancel
            className="cursor-pointer"
            onClick={handleClose}
          />
        </div>
        <div className="bg-white">{children}</div>
      </div>
    </div>,
    root,
  )
}
