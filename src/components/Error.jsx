const Error = ({ message }) => {
  return (
    <div className='w-full bg-red-600 text-white font-bold p-3 rounded-md border-x-[10px] border-red-950'>
        <p className='text-center'>{message}</p>
    </div>
  )
}

export default Error
