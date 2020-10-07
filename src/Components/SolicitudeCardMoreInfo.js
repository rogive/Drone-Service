import React from "react";
import { Payment } from "./Payment";
import "./SolicitudeCardMoreInfo.css";
import Departments from '../data/deparments.json'
import nameImg from "../img/name.png"
import phoneImg from "../img/phone.png"
import mailImg from "../img/mail.png"

const departmentName = (depId) => Departments.filter(e => e.id === parseInt(depId))[0].label

function formatDate(date) {
  var d = new Date(date),
      month = '' + (d.getMonth() + 1),
      day = '' + d.getDate(),
      year = d.getFullYear();

  if (month.length < 2) 
      month = '0' + month;
  if (day.length < 2) 
      day = '0' + day;

  return [year, month, day].join('-');
}

function SolicitudeCardMoreInfo({ solicitude }) {
  return (
    <div className="solicitude-card-moreInfo-container">
      <div className="solicitude-card-moreInfo-main">
        <div className="main-info-container">
          <h3>
            {solicitude.servicetitle},
            <span> {solicitude.city} </span>
            <span>({departmentName(solicitude.department)})</span>
          </h3>
          <li><span>Tipo de servicio: </span>{solicitude.servicetype}</li>
          <li><span>Piloto Certificado: </span>{solicitude.certifiedpilot}</li>
          <li><span>Requiere equipo propio: </span>{solicitude.ownequipment}</li>
        </div>
        <div className="main-date-container">
          <li className="main-date"><span>Fecha de publicación: </span>{formatDate(solicitude.createdAt)}</li>
          <li className="main-date"><span>Fecha de servicio: </span>{solicitude.dateservice}</li>
        </div>
      </div>
      <div className="solicitude-card-moreInfo-contact-info">
        <ul>
          <li><img src={nameImg}/>{solicitude.clientName}</li>
          <li><img src={phoneImg}/>{solicitude.phone}</li>
          <li><img src={mailImg}/>{solicitude.clientEmail}</li>
        </ul>
        {solicitude.phone.match(/[xX]/g) ? <Payment element={solicitude} /> : null}
      </div>
    </div>
  );
}

export default SolicitudeCardMoreInfo
