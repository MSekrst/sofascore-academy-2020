import React, { useRef, useState } from 'react'

import { useBoolean } from './useBoolean'

import './Accordion.css'

export function Accordion({ header, content }) {
  const { value: isOpen, toggle: toggleIsOpen } = useBoolean()

  const contentRef = useRef(null)

  const contentHeight = contentRef.current ? contentRef.current.getBoundingClientRect().height : 300

  return (
    <div className="accordion">
      <div className="accordion-header" onClick={toggleIsOpen}>
        {header}
      </div>
      <div className="accordion-content" style={{ height: isOpen ? contentHeight : 0 }}>
        <div ref={contentRef}>{content}</div>
      </div>
    </div>
  )
}
