import React from 'react'

interface ButtonProps {
  onClick: () => void
  children: React.ReactNode
}

export function Button({ children, onClick }: ButtonProps) {
  return <button onClick={onClick}>{children}</button>
}
