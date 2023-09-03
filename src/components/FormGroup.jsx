import React from 'react'
import Input from './Inputl'

const FormGroup = ({ fieldName = "campo", placeholder, value, setValue, type }) => {
  return (
    <section className={`my-1 md:my-4`}>
      <label className='block mb-2 text-[15px] font-bold text-gray-900'>{fieldName}</label>
      <Input placeholder={placeholder} fieldName={fieldName} value={value} setValue={setValue} type={type}/>
    </section>
  )
}

export default FormGroup
