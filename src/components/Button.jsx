import React from 'react'

const Button = ({ type, bg = "sky", name, color = "black", onclick = function(){} }) => {
  return (
    <>
        <button
            type={type}
            onClick={onclick}
            className={`transition-all duration-300 text-${color} font-bold py-2 px-4 rounded my-2 mb-3 ${bg ? `bg-${bg}-600 hover:bg-${bg}-800}`: `bg-indigo-600 hover:bg-indigo-800`}`}>
                {name}
        </button>
    </>
  )
}

export default Button
