import React, { useEffect }from 'react'
import axios from 'axios'

export function Payment(props) {
  const solicitudeId = props.element._id

  function handlePayment() {
    const paymentHandler = window.ePayco.checkout.configure({
      key: process.env.REACT_APP_EPAYCO_PUBLIC_KEY,
      test: true
    })

    paymentHandler.open({
      external: 'false',
      amount: '20000',
      tax: '0',
      tax_base: '0',
      name: 'DroneService',
      description: 'Pago de número telefónico en solicitud DroneService',
      currency: 'cop',
      country: 'CO',
      lang: 'es',
      invoice: '12345',
      response: `${process.env.REACT_APP_URL}/payment-response`,
      autoclick: 'false',
      name_billing: '',
      address_billing: 'Carrera 72 # 84 56',
      type_doc_billing: 'cc',
      mobilephone_billing: '3152375046',
      number_doc_billing: ''
    })

    sessionStorage.setItem('solicitudeId', solicitudeId)
  }

  return <button onClick={handlePayment}>Pagar</button>
}

export function queryString(query) {
  const res = {}
  query
    .replace(/\?/,'')
    .split('&')
    .forEach(q => {
      const [key, value] = q.split('=')
      res[key] = value
    })
  return res
}

function handlePaymentAxios(x_cod_response) {
  const pilotId = sessionStorage.getItem("userId")
  const solicitudeId = sessionStorage.getItem('solicitudeId')

  const addPayedSolicitudes = async () => {
    try {
      const result = await axios({
        method: "put",
        url: "http://localhost:8000/solicitudes/pagarSolicitud",
        data: {solicitudeId, pilotId},
        headers: {x_cod_response}
      });
      alert(result.data)
    } catch (error) {
      alert(error);
    }
  };
  addPayedSolicitudes();
}

export function Response(props) {
  const { location } = props
  useEffect(() => {
    const { ref_payco } = queryString(location.search)

    axios({
      method: 'GET',
      url: `https://api.secure.payco.co/validation/v1/reference/${ref_payco}`
    })
      .then(({ data }) => {
        console.log(data.data.x_cod_response)
        return handlePaymentAxios(data.data.x_cod_response)
      })
  }, [location])
  return <span></span>
}

