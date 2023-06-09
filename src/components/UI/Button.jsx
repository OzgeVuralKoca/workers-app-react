import React from 'react'

const Button = (props) => {
  const {type, className, onClick, children} = props

  return (
    <button
      type={`${type || "button"}`}
      className={`bg-sky-800 rounded-lg p-1 hover:bg-sky-600 ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button