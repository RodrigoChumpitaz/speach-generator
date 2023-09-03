export const getTemplate = (template) => {
    return `Estimados,

Por favor su apoyo con la validación y aprobación para proceder con el onboarding de este cliente, debido a que su información no está disponible en Equifax.

Nombre del comercio: ${template.commerceName || "No disponible"}
Tipo de documento: ${template.commerceDocumentType || "No disponible"}
Número de documento: ${template.commerceDocument || "No disponible"}
Tipo de Producto: ${template.commerceProduct || "No disponible"}

Información de SUNAT

Fecha de inicio de actividades: ${template.commerceStartDate || "No disponible"}
DNI Representante Legal: ${template.dniLegalRepresentative || "No disponible"}
Nombre Representante Legal: ${template.commerceLegalRepresentative || "No disponible"}

Link Ticket Trac: https://roadmap.culqi.com/trac/ticket/${template.ticketNumber || "0000"}

Se adjuntan las evidencias:

Saludos cordiales
Tech Support.
    `
}