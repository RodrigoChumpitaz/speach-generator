import React from 'react'

const Button = ({ type, bg, name, color = "black", onclick = function(){} }) => {
  return (
    <button
        type={type}
        onClick={onclick}
        className={`bg-${bg}-600 hover:bg-${bg}-800 transition-all duration-300 text-${color} font-bold py-2 px-4 rounded my-2 mb-3`}>
            {name}
    </button>
  )
}

export default Button
