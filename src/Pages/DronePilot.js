import React from 'react';
import GlobalContainer from '../utils/GlobalStyles';
import SelectorDP from '../Components/SelectorDP';
import "./DronePilot.css"

function DronePilot(){

return (
  <div className="MainDronePilotContainer">
    <GlobalContainer>
      <div className="ContainerMain">
        <div className="SubContainer">
          <div className="TitleDP"> 
              <h2 className="MyProfile">Mi Perfil Profesional</h2>
          </div>
          <SelectorDP/>
        </div>
      </div>
    </GlobalContainer>
  </div>
    )
}

export default DronePilot