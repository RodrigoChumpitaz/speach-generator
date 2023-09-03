import React from 'react'

const Input = ({ fieldName, placeholder, value, setValue, type = "text" }) => {
  const handleChange = (e) => {
    setValue(e.target.value)
  }
  return (
    <div>
      <input className="border text-sm rounded-lg w-full p-2.5 border-gray-300 focus:border-indigo-800 focus:outline-none focus:border-[1.3px] select-none transition-all text-gray-900" value={value} onChange={handleChange} type={type} placeholder={placeholder ? placeholder : fieldName}/>
    </div>
  )
}

export default Input
