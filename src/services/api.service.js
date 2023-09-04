export const getDocumentInfo = async (documentType, document) => {
    if(documentType === 'ce') documentType = 'dni';
    const response = await fetch(`https://dniruc.apisperu.com/api/v1/${documentType}/${document}?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImRpZWdvYW5nZWxlczEzMDcwM0BnbWFpbC5jb20ifQ.1RWsafOIIGEfBJwiae1MseCEQ4kKyvQgflmXnj9b6ck`);
    const data = await response.json();
    return data;
}