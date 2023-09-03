import { useState } from "react"
import FormGroup from "./FormGroup"
import Error from "./Error"
import Button from "./Button"

const Form = ({ setTemplate, setSpeach, speach }) => {

    const [commerceName, setCommerceName] = useState('')
    const [commerceDocument, setCommerceDocument] = useState('')
    const [commerceDocumentType, setCommerceDocumentType] = useState('')
    const [ticketNumber, setTicketNumber] = useState('')
    const [commerceStartDate, setCommerceStartDate] = useState('')
    const [commerceLegalRepresentative, setCommerceLegalRepresentative] = useState('')
    const [commerceProduct, setCommerceProduct] = useState('')
    const [dniLegalRepresentative, setDniLegalRepresentative] = useState('')
    const [error, setError] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        if([commerceName, commerceDocument, commerceDocumentType, ticketNumber, commerceStartDate, commerceLegalRepresentative, commerceProduct, dniLegalRepresentative].includes('')){
            setError(true)
            setTimeout(() => {
                setError(false)
            }, 3000)
            return
        }
        setTemplate({
          commerceName,
          commerceDocument,
          commerceDocumentType,
          ticketNumber,
          commerceStartDate,
          commerceLegalRepresentative,
          commerceProduct,
          dniLegalRepresentative
        })
        setError(false)
    }

    const resetForm = () => {
        setCommerceName('')
        setCommerceDocument('')
        setCommerceDocumentType('')
        setTicketNumber('')
        setCommerceStartDate('')
        setCommerceLegalRepresentative('')
        setCommerceProduct('')
        setDniLegalRepresentative('')
        setSpeach('')
    }

    return (
        <form onSubmit={handleSubmit} className='rounded-md shadow-slate-100 bg-white p-6 w-[80%] lg:w-2/5'>
            {error && <Error message='Todos los campos son obligatorios'/>}
            <div className='grid gap-2 md:gap-6 md:grid-cols-2'>
                <div>
                    <FormGroup fieldName='Nombre del Comercio' value={commerceName} setValue={setCommerceName}/>
                    <FormGroup fieldName='Número Documento' value={commerceDocument} setValue={setCommerceDocument}/>
                </div>
                <div>
                    <FormGroup fieldName='Tipo Documento' value={commerceDocumentType} setValue={setCommerceDocumentType}/>
                    <FormGroup fieldName='Producto' placeholder={'mpos, link, online'} value={commerceProduct} setValue={setCommerceProduct}/>
                </div>
            </div>
            <div className='grid gap-2 md:gap-6 md:grid-cols-2'>
                <div>
                    <FormGroup fieldName='Fecha de Inicio de actividades' value={commerceStartDate} setValue={setCommerceStartDate}/>
                    <FormGroup fieldName='Representante Legal' placeholder='Representante Legal' value={commerceLegalRepresentative} setValue={setCommerceLegalRepresentative}/>
                </div>
                <div>
                    <FormGroup fieldName='Dni Representante Legal' value={dniLegalRepresentative} setValue={setDniLegalRepresentative}/>
                    <FormGroup fieldName='Número Ticket' placeholder='Nº Ticket: #44221' value={ticketNumber} setValue={setTicketNumber}/>
                </div>
            </div>
            <div className='flex items-center justify-around flex-wrap gap-2'>
                <Button type='submit' bg='indigo' name='Generate' color="white"/>
                <Button type='button' bg='indigo' name='Clear' color="white" onclick={resetForm}/>
            </div>
            {speach && <textarea rows="10" className="border-[1.5px] block p-2.5 w-full text-sm transition-all text-gray-900 border-gray-300 focus:border-indigo-800 focus:outline-none rounded-md" placeholder="Write your thoughts here..." value={speach} onChange={e => setSpeach(e.target.value)}></textarea>}
        </form> 
    )
}

export default Form
