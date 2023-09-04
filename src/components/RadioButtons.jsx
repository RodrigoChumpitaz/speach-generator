const RadioButtons = ({ forId ,fieldName, setValue, value }) => {

    const handleClick = () => {
        setValue(fieldName)
    }

    const handleRadioClick = (e) => {
        e.target.focus()
    }

    return (
        <fieldset>
            <section className={`my-1 md:my-4 flex flex-col items-center gap-3`}>
                <label htmlFor={forId} className='block mb-2 text-[15px] font-bold text-gray-900'>{fieldName}</label>
                <input
                    type="radio"
                    id={forId}
                    name={fieldName}
                    value={fieldName}
                    checked={value === fieldName}
                    onChange={handleClick}
                    onClick={handleRadioClick}
                    className=''
                />
            </section>
        </fieldset>
    )
}

export default RadioButtons
