import React from 'react'
import { Response } from '../Components/Payment'
import paysuccesfull from "../img/paysuccesfull.jpg"
import "./PaymentResponse.css"

function PaymentResponse(props){
  return(
    <div className="response-container-sucessfull">
      <Response location={props.location}/>
      <img src={paysuccesfull}></img>
    </div>
  )
}

export default PaymentResponse