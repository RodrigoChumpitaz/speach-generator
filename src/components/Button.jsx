import { twMerge } from "tailwind-merge"

const Button = ({ type, name, onclick = function(){}, className }) => {
  return (
    <>
        <button
            type={type}
            onClick={onclick}
            className={twMerge(`bg-indigo-600 hover:bg-indigo-800 transition-all duration-300 text-white font-bold py-2 px-4 rounded my-2 mb-3`, className)}>
                {name}
        </button>
    </>
  )
}

export default Button
