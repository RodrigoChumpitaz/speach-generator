import { useState } from "react"
import FormGroup from "./FormGroup"
import Error from "./Error"
import Button from "./Button"
import RadioButtons from "./RadioButtons"
import { getDocumentInfo } from "../services/api.service"
import Alert from "./Alert"

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
    const [errorMessage, setErrorMessage] = useState('')
    const [alert, setAlert] = useState('')

    const captureError = (message) => {
        setError(true)
        setErrorMessage(message)
        setTimeout(() => {
            setError(false)
        }, 3000)
        return
    }

    const isFormvalid = () => {
        if([commerceName, commerceDocument, commerceDocumentType, ticketNumber, commerceStartDate, commerceLegalRepresentative, commerceProduct, dniLegalRepresentative].includes('')){
            captureError('Todos los campos son obligatorios')
            return false
        }
        return true
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!isFormvalid()) return
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

    const resetInfoSunat = () => {
        setCommerceLegalRepresentative('')
        setDniLegalRepresentative('')
    }

    const getInfoSunat = async () => {
        try {
            resetInfoSunat()
            if(!commerceDocument || !commerceDocumentType){
                captureError("Es necesario ingresar el número de documento y el tipo de documento")
                setSpeach('')
                return
            }
            if(commerceDocumentType === 'RUC' && commerceDocument.length < 11){
                captureError("El número de RUC debe tener 11 dígitos")
                setSpeach('')
                return
            }

            const data = await getDocumentInfo(commerceDocumentType.toLowerCase(), commerceDocument)
            
            if(commerceDocumentType === 'RUC'){
                setDniLegalRepresentative(data.ruc.slice(2, -1))
                setCommerceLegalRepresentative(data.razonSocial)
                return
            }
            
            setCommerceLegalRepresentative(`${data.apellidoPaterno} ${data.apellidoMaterno} ${data.nombres}`)
            setDniLegalRepresentative(data.dni)

        } catch (error) {
            captureError("No se obtuvo información, verifica los datos ingresados")
            setSpeach('')
        }
    }

    const copySpeach = () => {
        navigator.clipboard.writeText(speach)
        setAlert("Copiado al portapapeles")
        setTimeout(() => {
            setAlert('')
        }, 2000)
    }

    return (
        <form onSubmit={handleSubmit} className='rounded-md shadow-slate-100 bg-white p-6 w-[80%] lg:w-2/5'>
            {error && <Error message={errorMessage}/>}
            {alert && <Alert message={alert}/>}
            <div className='grid gap-2 md:gap-6 md:grid-cols-2'>
                <div>
                    <FormGroup fieldName='Nombre del Comercio' value={commerceName} setValue={setCommerceName}/>
                    <FormGroup fieldName='Número Documento' value={commerceDocument} setValue={setCommerceDocument} isRuc={true} inputClass="rounded-r-none" onClick={getInfoSunat}/>
                </div>
                <div>
                    <section className="flex justify-around flex-wrap">
                        <RadioButtons fieldName='RUC' forId={"chk-ruc"} value={commerceDocumentType} setValue={setCommerceDocumentType}/>
                        <RadioButtons fieldName='DNI' forId={"chk-dni"} value={commerceDocumentType} setValue={setCommerceDocumentType}/>
                        <RadioButtons fieldName='CE' forId={"chk-ce"} value={commerceDocumentType} setValue={setCommerceDocumentType}/>
                    </section>
                    <section className="flex justify-around flex-wrap">
                        <RadioButtons fieldName='MPOS' forId={"chk-mpos"} value={commerceProduct} setValue={setCommerceProduct}/>
                        <RadioButtons fieldName='LINK' forId={"chk-link"} value={commerceProduct} setValue={setCommerceProduct}/>
                        <RadioButtons fieldName='ONLINE' forId={"chk-online"} value={commerceProduct} setValue={setCommerceProduct}/>
                    </section>
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
                <Button type='submit' name='Generate'/>
                {speach && <Button type='button' onclick={copySpeach} name='Copy'/>}
                <Button type='button' name='Clear' onclick={resetForm} className={"bg-sky-600 hover:bg-sky-800"}/>
            </div>
            {speach && <textarea rows="10" className="border-[1.5px] block p-2.5 w-full text-sm transition-all text-gray-900 border-gray-300 focus:border-indigo-800 focus:outline-none rounded-md my-2" placeholder="Write your thoughts here..." value={speach} onChange={e => setSpeach(e.target.value)}></textarea>}
        </form> 
    )
}

export default Form
