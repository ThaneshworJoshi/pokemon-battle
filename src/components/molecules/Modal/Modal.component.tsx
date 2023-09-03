import { FC } from 'react'
import { ModalProps } from './Modal.type'
import './Modal.scss'

export const Modal: FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button
          data-testid="close-button"
          className="modal__close-button"
          onClick={onClose}
        >
          x
        </button>
        <div className="modal__content">{children}</div>
      </div>
    </div>
  )
}

export default Modal
