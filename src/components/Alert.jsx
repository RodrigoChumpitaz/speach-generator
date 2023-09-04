const Alert = ({ message }) => {
    return (
      <div className='w-full bg-green-600 text-white font-bold p-3 rounded-md border-x-[10px] border-green-950'>
          <p className='text-center'>{message}</p>
      </div>
    )
  }
  
export default Alert
  