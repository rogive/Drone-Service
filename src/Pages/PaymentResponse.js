import React from 'react'
import { Response } from '../Components/Payment'

function PaymentResponse(props){
  return(
    <Response location={props.location}/>
  )
}

export default PaymentResponse