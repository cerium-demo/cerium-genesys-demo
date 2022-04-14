import classNames from "classnames"
import { X } from "react-feather"

interface ModalProps {
  title: string
  onClose?: () => void
  children?: React.ReactNode
  show?: boolean
}

export default function Modal({
  title,
  children,
  show = false,
  onClose = () => {},
}: ModalProps) {
  return (
    <div
      className={classNames(
        "fixed inset-0 h-full w-full bg-black bg-opacity-50 z-[9999999]",
        {
          hidden: !show,
        }
      )}
    >
      <div className="max-w-xl fixed w-11/12 left-1/2 transform -translate-x-1/2 rounded-xl overflow-hidden bg-white top-20">
        <header className="p-5 border-b flex items-center justify-between">
          <p>{title}</p>
          <div>
            <X onClick={onClose} className="cursor-pointer" />
          </div>
        </header>
        <section className="p-5">{children}</section>
      </div>
    </div>
  )
}
