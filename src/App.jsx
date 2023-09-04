import { useEffect, useState } from 'react'
import { getTemplate } from './utils/getTemplate'
import Form from './components/Form'

function App() {

  const [template, setTemplate] = useState({})
  const [speach, setSpeach] = useState('')

  useEffect(() => {
    if(Object.keys(template).length === 0) return
    const speach = getTemplate(template)
    setSpeach(speach)
  }, [template])

  return (
    <div className='flex flex-col items-center justify-center h-screen py-3'>
      <h1 className='text-4xl mb-10 font-extrabold text-indigo-600'><span className='text-white'>Speech</span>Generator</h1>
      <Form setTemplate={setTemplate} setSpeach={setSpeach} speach={speach}/>
    </div>
  )
}

export default App
