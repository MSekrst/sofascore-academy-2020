import React from 'react'

import './Modal.css'
import { Portal } from './Portal'
import { useBoolean } from './useBoolean'

export function Modal({ trigger, content }) {
  const { value: isOpen, toggle: toggleModal } = useBoolean()

  return (
    <div className="modal">
      <div onClick={toggleModal}>{trigger}</div>
      <Portal>
        {isOpen && (
          <div className="modal-content-wrapper" onClick={toggleModal}>
            <div onClick={e => e.stopPropagation()} className="modal-content">
              {content}
            </div>
          </div>
        )}
      </Portal>
    </div>
  )
}
