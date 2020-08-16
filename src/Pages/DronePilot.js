import React from 'react';
import styled from 'styled-components';

const MainContainer = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  .TitleDP{
    border-style: solid;
    border-color: #f2f2f2;
    border-width: 2px;
  }
  .MyProfile{
    margin-left: 1rem;
  }
  `
const SecondaryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
`
const LateralContainer = styled.div`
  width: 30%;
  border-style: solid;
  border-color: #f2f2f2;
  padding-left: 2rem;
  padding-right: 1rem;
  .Indicador{
  }
`
const ComponentBodyContainer = styled.div`
  width: 70%;
  border-style: solid;
  border-color: #f2f2f2;
  padding-left: 4rem;
  padding-right: 4rem;
`
const TabsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  button {
    background-color: white;
    border: none;
    color: black;
    padding: 1rem 0px;
    text-align: left;
    text-decoration: none;
    display: inline-block;
    font-size: 1.5vw;
    &:hover {
    background-color: rgba(237, 237, 237, 1);
    color: black;
    border-style: none;
    border: none;
    }

  }


`

const BarBoxContainer = styled.div`
    display: flex;
    width: 100%;
    .LabelBar{
      margin-left: 1rem;
      width: 10%;
    }
`

const BarBackgroundContainer = styled.div`
  width: 80%;
  border-radius: 1rem;
  background-color: #ddd;

`

const BarStateContainer = styled.div`
  width: 80%;
  border-radius: 1rem;
  background-color: green;
  text-indent: 100%;
  white-space: nowrap;
  overflow: hidden;

`

const ComponentContainer = styled.div`

`
const AttachContainer = styled.div`
  *,
  *:before,
  *:after {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 2rem 1.5rem;
    font: 1rem/1.5 "PT Sans", Arial, sans-serif;
    color: #5a5a5a;
  }
  
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

class FlightLogs extends React.Component{
  state = {
    value: ""
  }

  handleClick = (event) => {
      console.dir(event.target);
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  render(){
      return(
          <ComponentContainer>
              <h2>Bitacoras de Vuelo</h2>
              <p>Este espacio corresponde a las bitácoras de vuelo de las 
                  operaciones Drone realizadas por el piloto. Es opcional la 
                  visualización publica de sus bitacoras. SI no desea que sea 
                  publica, solo aparecerá la cantidad de horas relacionasdas 
                  en las bitacoras añadidas.
              </p>
              <AttachContainer>
                      <label class="file">
                        <input type="file" id="file" aria-label="File browser example"/>
                        <span class="file-custom"></span>
                      </label>
              </AttachContainer>

          </ComponentContainer>

      )
    }
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

  state = { value: "FlightLogs"}

  handleClick = (event) => {
    this.setState({ value: event.target.value });
    console.dir(event.target);
  }

  render(){
    return(
      <SecondaryContainer>
        <LateralContainer>
            <div className="Bienvenido">
                <h3> ¡Bienvenido Alan!</h3>
            </div>
            <div className="Indicador"> 
                <p> Tu perfil esta al:</p>
                  <BarBoxContainer>
                      <BarBackgroundContainer>
                          <BarStateContainer>80%</BarStateContainer>
                      </BarBackgroundContainer>
                      <span className="LabelBar">80%</span>
                  </BarBoxContainer>

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
        <div className="TitleDP"> 
            <h2 className="MyProfile">Mi Perfil Profesional</h2>
        </div>
        <SelectorDP/>
    </MainContainer>
    )
}

export default DronePilot