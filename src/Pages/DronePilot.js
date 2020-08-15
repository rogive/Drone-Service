import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  .TitleDP{
    border-width: 2px;
  }
  `
const SecondaryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const LateralContainer = styled.div`
  width: 14rem;
  margin-right: 2px;
  margin-left: 2px;
`
const ComponentBodyContainer = styled.div`
    margin-right: 2rem;
    margin-left: 2rem;
`
const TabsContainer = styled.div`
  display: flex;
  flex-direction: column;
  button {
    background-color: white;
    border: none;
    color: black;
    padding: 15px 48px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    }
  button:hover {
    background-color: rgba(237, 237, 237, 1);
    color: black;
    border: none;
  }
`

const ComponentContainer = styled.div`

`
const AttachContainer = styled.div`
  display: flex;

`

const CertificatesBar = styled.label`

`
function Profile(){
  return(
    <ComponentContainer>
        <h2>Perfil</h2>
        <p>Agrega tus certificaciones profesionales para demostrar
          tus conocimientos y capacidades en los servicios Drone. 
        </p>
        <AttachContainer>
          <CertificatesBar>Curso_Especializacion_Fotogrametria.pdf</CertificatesBar>
          <button>Examinar</button>
          <button>Adjuntar</button>
        </AttachContainer>
    </ComponentContainer>
  )
}

function Certificates(){
  return(
    <ComponentContainer>
        <h2>Certificaciones</h2>
        <p>Agrega tus certificaciones profesionales para demostrar
          tus conocimientos y capacidades en los servicios Drone. 
        </p>
        <AttachContainer>
          <CertificatesBar>Curso_Especializacion_Fotogrametria.pdf</CertificatesBar>
          <button>Examinar</button>
          <button>Adjuntar</button>
        </AttachContainer>
    </ComponentContainer>
  )
}

function FlightLogs(){
  return(
      <ComponentContainer>
          <h2>Bitacoras de Vuelo</h2>
          <p>Este espacio corresponde a las bitácoras de vuelo de las 
              operaciones Drone realizadas por el piloto. Es opcional la 
              visualización publica de sus bitacoras. SI no desea que sea 
              publica, solo aparecerá la cantida
          </p>
          <AttachContainer>
            <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
            <button>Adjuntar</button>
          </AttachContainer>
      </ComponentContainer>

  )
}


function FlightLogsApp(){
  return(

      <ComponentContainer>
          <h2>Bitacoras de Vuelo por Aplicación</h2>
          <p>Este espacio corresponde a las bitácoras de vuelo de las 
              operaciones Drone realizadas por el piloto. Es opcional la 
              visualización publica de sus bitacoras. SI no desea que sea 
              publica, solo aparecerá la cantida
          </p>
          <AttachContainer>
            <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
            <button>Adjuntar</button>
          </AttachContainer>
      </ComponentContainer>
  )
}


function Technologies(){
  return(
      <ComponentContainer>
          <h2>Tecnologías</h2>
          <p>Este espacio corresponde a las bitácoras de vuelo de las 
              operaciones Drone realizadas por el piloto. Es opcional la 
              visualización publica de sus bitacoras. SI no desea que sea 
              publica, solo aparecerá la cantida
          </p>
          <AttachContainer>
            <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
            <button>Adjuntar</button>
          </AttachContainer>
      </ComponentContainer>
  )
}

function Equipments(){
  return(
    <ComponentContainer>
        <h2>Equipos</h2>
        <p>Este espacio corresponde a las bitácoras de vuelo de las 
            operaciones Drone realizadas por el piloto. Es opcional la 
            visualización publica de sus bitacoras. SI no desea que sea 
            publica, solo aparecerá la cantida
        </p>
        <AttachContainer>
          <CertificatesBar>
            Curso_Especializacion_Fotogrametria.pdf
          </CertificatesBar>
          <button>Adjuntar</button>
        </AttachContainer>
    </ComponentContainer>
  )
}

function Others(){
  return(
      <ComponentContainer>
          <h2>Otros Estudios</h2>
          <p>Este espacio corresponde a las bitácoras de vuelo de las 
              operaciones Drone realizadas por el piloto. Es opcional la 
              visualización publica de sus bitacoras. SI no desea que sea 
              publica, solo aparecerá la cantida
          </p>
          <AttachContainer>
            <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
            <button>Adjuntar</button>
          </AttachContainer>
      </ComponentContainer>
  )
}


function Briefcases(){
  return(
      <ComponentContainer>
        <h2>Portafolio</h2>
          <p>Este espacio corresponde a las bitácoras de vuelo de las 
              operaciones Drone realizadas por el piloto. Es opcional la 
              visualización publica de sus bitacoras. SI no desea que sea 
              publica, solo aparecerá la cantida
          </p>
          <AttachContainer>
            <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
            <button>Adjuntar</button>
          </AttachContainer>
      </ComponentContainer>
  )
}

class SelectorDP extends React.Component{

  state = { value: "Profile"}

  handleClick = (event) => {
    this.setState({ value: event.target.value }, ()=> console.log(this.state.value));
  }

  render(){
    return(
      <SecondaryContainer>
        <LateralContainer>
            <div>
                <h3> ¡Bienvenido Alan!</h3>
            </div>
            <TabsContainer>
                <button value="Profile" onClick={this.handleClick}> Perfil </button>
                <button value="Certificates" onClick={this.handleClick}> Certificaciones </button>
                <button value="FlightLogs" onClick={this.handleClick}> Bitacoras de Vuelo </button>
                <button value="FlightLogsApp" onClick={this.handleClick}> Horas de Vuelo App </button>
                <button value="Technologies" onClick={this.handleClick}> Tecnologías </button>
                <button value="Equipments" onClick={this.handleClick}> Equipos </button>
                <button value="Others" onClick={this.handleClick}> Otros </button>
                <button value="Briefcases" onClick={this.handleClick}> Portafolío </button>
            </TabsContainer>
        </LateralContainer>
        <ComponentBodyContainer>
            <div>
                  { 
                    this.state.value === "Profile" ?
                    <Profile/> :
                    this.state.value === "Certificates" ?
                    <Certificates/> :
                    this.state.value === "FlightLogs" ?
                    <FlightLogs/> :
                    this.state.value === "FlightLogsApp" ?                        
                    <FlightLogsApp/> :
                    this.state.value === "Technologies" ?
                    <Technologies/> :
                    this.state.value === "Equipments" ?
                    <Equipments/> :
                    this.state.value === "Others" ?
                    <Others/> :
                    this.state.value === "Briefcases" ?
                    <Briefcases/> :
                    <span></span>
                  }
            </div>
        </ComponentBodyContainer>
      </SecondaryContainer>
    )
  }
}

function DronePilot(){

return (
    <MainContainer>
        <div classname="TitleDP"> 
            <h2>Mi Perfil Profesional</h2>
        </div>
        <SelectorDP/>
    </MainContainer>
    )
}

export default DronePilot