return function Button({ children, value, onClick }) {
  return (
    <button value={value} onClick={onClick}>
      {children}
    </button>
  )
}
