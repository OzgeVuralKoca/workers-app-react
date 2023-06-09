import React from 'react'

const Card = (props) => {
  return (
    <div className={`bg-sky-200 rounded-lg p-5 w-1/2 md:w-1/3 lg:w-1/4 ${props.className}`}>
        {props.children}
    </div>
  )
}

export default Card