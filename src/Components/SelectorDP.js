import React, {useState, useEffect} from 'react';
import UserProfile from './UserProfile';
import Certificates from '../Components/Certificates';
import FlightLogs from '../Components/FlightLogs';
import Equipments from '../Components/Equipments';
import Services from '../Components/Services';
import Others from '../Components/Others';
import Portfolios from '../Components/Portfolios';
import './SelectorDP.css'

function SelectorDP() {

  const [value, setValue] = useState("Profile")
  const [pilotName, setPilotName] = useState("")

  useEffect(() => {
    setPilotName(sessionStorage.getItem("userName"))
  },[])

  const handleClick = (event) => {
    setValue(event.target.value)
  }

  return(
    <div className="SecondaryContainer">
      <div className="LateralContainer">
        <div className="Bienvenido">
          <h2 className="Bienvenido-Pilot-Profile"> ¡Bienvenido {pilotName}!</h2>
        </div>
        <div className="Indicador"> 
          <p className="TuPerfil"> Tu perfil esta al:</p>
            <div className="BarBoxContainer">
                <div className="BarBackgroundContainer">
                    <div className="BarStateContainer">80%</div>
                </div>
                <span className="LabelBar">80%</span>
            </div>
        </div>
        <div className="TabsContainer">
          <button value="Profile" onClick={handleClick}> Perfil </button>
          <button value="Certificates" onClick={handleClick}> Certificaciones </button>
          <button value="FlightLogs" onClick={handleClick}> Bitacoras de Vuelo </button>
          <button value="Services" onClick={handleClick}> Servicios </button>
          <button value="Equipments" onClick={handleClick}> Equipos </button>
          <button value="Others" onClick={handleClick}> Otros </button>
          <button value="Portfolios" onClick={handleClick}> Portafolío </button>
        </div>
      </div>
      <div className="ComponentBodyContainer">
            {
              value === "Profile" ?
              <div className="component-pilot">
                <UserProfile />
              </div> :
              value === "Certificates" ?
                <div className="component-pilot">
                  <Certificates/>
                </div> :
              value === "FlightLogs" ?
                <div className="component-pilot">
                  <FlightLogs/>
                </div> :
              value === "Services" ?
                <div className="component-pilot">
                  <Services/>
                </div> :
              value === "Equipments" ?
                <div className="component-pilot">
                  <Equipments/>
                </div> :
              value === "Others"?
                <div className="component-pilot">
                  <Others/>
                </div> :
              value === "Portfolios" ?
                <div className="component-pilot">
                  <Portfolios/>
                </div> :
              <span></span>
            }
      </div>
    </div>
  )
}

export default SelectorDP