import { twMerge } from "tailwind-merge"
import Button from './Button'

const Input = ({ fieldName, placeholder, value, setValue, type = "text", id, isRuc, inputClass, onClick }) => {

  const handleChange = (e) => {
    setValue(e.target.value)
  }

  return (
    <div className='flex'>
      <input 
        id={id} 
        className={twMerge(`border text-sm rounded-lg w-full p-2.5 border-gray-300 focus:border-indigo-800 focus:outline-none focus:border-[1.3px] select-none transition-all text-gray-900`, inputClass)} 
        value={value} 
        onChange={handleChange} 
        type={type} 
        placeholder={placeholder ? placeholder : fieldName}
      />
      {isRuc && <Button type='button' name='Get' className={"bg-gray-700 hover:bg-gray-900 m-0 rounded-l-none"} onclick={onClick}/>}
    </div>
  )
}

export default Input
