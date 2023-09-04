import React, { useRef } from 'react'
import Input from './Inputl'

const FormGroup = ({ fieldName = "campo", placeholder, value, setValue, type, forId, isRuc, inputClass, onClick }) => {

  return (
    <section className={`my-1 md:my-4`}>
      <label htmlFor={forId} className='block mb-2 text-[15px] font-bold text-gray-900'>{fieldName}</label>
      <Input 
        placeholder={placeholder} 
        fieldName={fieldName} 
        value={value} 
        setValue={setValue} 
        type={type} 
        id={forId} 
        isRuc={isRuc}
        inputClass={inputClass}
        onClick={onClick}
      />
    </section>
  )
}

export default FormGroup
