import React from 'react';
import styled from 'styled-components';
import GlobalContainer from '../utils/GlobalStyles'
import Header from '../Components/Header'

const MainContainer = styled.div`
  padding-top: 1rem;
  .TitleDP{
    margin: 0vw;
    width: 100%;
    border-style: solid;
    border-color: #f2f2f2;
    border-width: 2px;
    .MyProfile{
      margin: 2rem;
      font-size: 1.5vw;
    }
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
    padding-top: 1rem;
    padding-bottom: 1rem;
    .TuPerfil{
      padding-top: 1rem;
      padding-bottom: 1rem;
      font-size: 1.2vw;
    }
  }
  .Bienvenido{
    padding-top: 2rem;
    h2{
      font-size: 1.5vw;
    }
  }
`
const ComponentBodyContainer = styled.div`
  width: 70%;
  border-style: solid;
  border-color: #f2f2f2;
  padding: 4rem;
`
const TabsContainer = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: column;
  button {
    background-color: white;
    border: none;
    color: black;
    padding: 1rem;
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
  font-size: 1.1vw;
  h2{
  }
  p{
    padding-top: 2rem;
    justify-content: space-between;
  }
`
const AttachContainer = styled.div`
  padding-top:2rem;
  padding-bottom:2rem;
`

const CertificatesBar = styled.label`

`

const DocumentsContainer = styled.div`
  width: 100%;
  background-color: #66b2ff;
  color: black;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  p{
    padding: 1rem;
    text-align: left;
  }
`

const PortfolioImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`

const ImageContainer = styled.div`
  width: 17%;
  border-radius: 1rem;
  margin: 1rem;
  img{
    width: 20vh;
    height: 20vh;
    border-radius: 3rem;
  }
`

const ImageProfileContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
  }
`

const IconContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
    filter: grayscale(100%);
  }
`

function Profile(){
  return(
    <ComponentContainer>
        <h2>Perfil</h2>
        <ImageProfileContainer>
          <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=6&m=476085198&s=170667a&w=0&h=ZHUgkr2TYixVu_Nny3XpsfmTdInPtEp1-PpO9MuQwYM=" alt="Hola"></img>
        </ImageProfileContainer>
        <p>Agrega una breve descripción de tus conocimientos, capacidades
          y habilidades. Adiciona cualquier descripcion interesante para 
          el cliente.
        </p>
    </ComponentContainer>
  )
}


function CertificatesComponent({
  certificates
}) {
  return certificates.map((certificate) => {
    return(
      <DocumentsContainer>
        <p>{certificate.name}</p>
      </DocumentsContainer>

    );
  });

}

class Certificates extends React.Component{
  state = {
    certificates: [],
    name: ""
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newCertificate = { name: this.state.name}
    
    this.setState({
      certificates: this.state.certificates.concat(newCertificate)
    })
  }

  render(){
      return(
          <ComponentContainer>
              <h2>Certificados</h2>
              <IconContainer>
                <img src="https://cdn.pixabay.com/photo/2017/06/22/02/16/computer-icon-2429310__340.png" alt="Hola"></img>
              </IconContainer>
              <p>Este espacio corresponde a las certificaciones que relacionan
                la cantidad de horas, conocimiento o experiencia que hayas tenido
                en algun área específica.
              </p>
              <AttachContainer>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
                  </label>
                  <br/>
                </fieldset>
                <button type="submit">Submit</button>
              </form>
              </AttachContainer>
              <CertificatesComponent certificates = {this.state.certificates}/>
          </ComponentContainer>

      )
    }
}

function FlightLogsComponent({
  flightlogs
}) {
  return flightlogs.map((flightlog) => {
    return(
      <DocumentsContainer>
        <p>{flightlog.name}</p>
      </DocumentsContainer>

    );
  });

}

class FlightLogs extends React.Component{
  state = {
    flightlogs: [],
    name: ""
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newFlightLog = { name: this.state.name}
    
    this.setState({
      flightlogs: this.state.flightlogs.concat(newFlightLog)
    })
  }

  render(){
      return(
          <ComponentContainer>
              <h2>Bitacoras de Vuelo</h2>
              <IconContainer>
                <img src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884__340.png" alt="Hola"></img>
              </IconContainer>
              <p>Este espacio corresponde a las bitácoras de vuelo de las 
                  operaciones Drone realizadas por el piloto. Es opcional la 
                  visualización publica de sus bitacoras. SI no desea que sea 
                  publica, solo aparecerá la cantidad de horas relacionasdas 
                  en las bitacoras añadidas.
              </p>
              <AttachContainer>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
                  </label>
                  <br/>
                </fieldset>
                <button type="submit">Submit</button>
              </form>
              </AttachContainer>
              <FlightLogsComponent flightlogs = {this.state.flightlogs}/>
          </ComponentContainer>

      )
    }
}

function FlightLogsAppComponent({
  flightlogsApp
}) {
  return flightlogsApp.map((flightlogApp) => {
    return(
      <DocumentsContainer>
        <p>{flightlogApp.name}</p>
      </DocumentsContainer>

    );
  });

}

class FlightLogsApp extends React.Component{
  state = {
    flightlogsApp: [],
    name: ""
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newFlightLogApp = { name: this.state.name}
    
    this.setState({
      flightlogsApp: this.state.flightlogsApp.concat(newFlightLogApp)
    })
  }

  render(){
      return(
          <ComponentContainer>
              <h2>Horas de Vuelo por Aplicación</h2>
              <IconContainer>
                <img src="https://cdn4.iconfinder.com/data/icons/web-mobile-round1/210/Untitled-35-512.png" alt="Hola"></img>
              </IconContainer>
              <p>Este espacio corresponde a las horas de vuelo que se registran
                 en las diferentes aplicaciones para operaciones Drone. 
              </p>
              <AttachContainer>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
                  </label>
                  <br/>
                </fieldset>
                <button type="submit">Submit</button>
              </form>
              </AttachContainer>
              <FlightLogsAppComponent flightlogsApp = {this.state.flightlogsApp}/>
          </ComponentContainer>

      )
    }
}

function TechnologiesComponent({
  technologies
}) {
  return technologies.map((technology) => {
    return(
      <DocumentsContainer>
        <p>{technology.name}</p>
      </DocumentsContainer>

    );
  });

}

class Technologies extends React.Component{
  state = {
    technologies: [],
    name: ""
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newTechnology = { name: this.state.name}
    
    this.setState({
      technologies: this.state.technologies.concat(newTechnology)
    })
  }

  render(){
    return(
      <ComponentContainer>
          <h2>Tecnologías</h2>
          <IconContainer>
            <img src="https://support.parrot.com/files/s3fs-public/images/support/dYU04cxUUqZVMAsQwudw-czYU9lM8dD5w8eFWZPVzeC1F9Xs81_un2ikfcdqqArRW8Hrzx2s9QmRw7KBPwnoLMYxRUuMjJUj6DtNCOX1p25vuehtjvoRMGkLxwt7eyIrTe4DpcI6TdVEfAG71A" alt="Hola"></img>
          </IconContainer>
          <p>Este espacio corresponde a las tecnologías con las cuales ha
              tenido experiencia previa. Relaciona cualquier aplicación que
              te ha sido útil durante las operaciones Drone.
          </p>
          <AttachContainer>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>
                <input type="text" onChange={this.handleChange}/>
              </label>
              <br/>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
          </AttachContainer>
          <TechnologiesComponent technologies = {this.state.technologies}/>
      </ComponentContainer>

    )
    }
}

function EquipmentsComponent({
  equipments
}) {
  return equipments.map((equipment) => {
    return(
      <DocumentsContainer>
        <p>{equipment.name}</p>
      </DocumentsContainer>

    );
  });

}

class Equipments extends React.Component{
  state = {
    equipments: [],
    name: ""
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newEquipment = { name: this.state.name}
    
    this.setState({
      equipments: this.state.equipments.concat(newEquipment)
    })
  }

  render(){
    return(
      <ComponentContainer>
          <h2>Equipos</h2>
          <IconContainer>
            <img src="data:image/png;base64,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" alt="Hola"></img>
          </IconContainer>
          <p>Relaciona todos los equipos que tengas disponibles para realizar
              tus servicios como piloto profesional de drones.
          </p>
          <AttachContainer>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>
                <input type="text" onChange={this.handleChange}/>
              </label>
              <br/>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
          </AttachContainer>
          <EquipmentsComponent equipments = {this.state.equipments}/>
      </ComponentContainer>

    )
    }
}

function OthersComponent({
  others
}) {
  return others.map((other) => {
    return(
      <DocumentsContainer>
        <p>{other.name}</p>
      </DocumentsContainer>

    );
  });

}

class Others extends React.Component{
  state = {
    others: [],
    name: "",
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newOther = { name: this.state.name}
    
    this.setState({
      others: this.state.others.concat(newOther)
    })
  }

  render(){
      return(
          <ComponentContainer>
              <h2>Otros</h2>
              <IconContainer>
                <img src="https://cdn3.iconfinder.com/data/icons/election-world-1/64/senate-congress-government-senator-political-512.png" alt="Hola"></img>
              </IconContainer>
              <p>Este espacio corresponde a otros tipos de certificados generado en
                 la asistencia de eventos, congresos, seminarios o conferencias.
              </p>
              <AttachContainer>
              <form onSubmit={this.handleSubmit}>
                <fieldset>
                  <label>
                    <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
                  </label>
                  <br/>
                </fieldset>
                <button type="submit">Submit</button>
              </form>
              </AttachContainer>
              <OthersComponent others = {this.state.others}/>
          </ComponentContainer>

      )
    }
}



function PortfoliosComponent({
  portfolios
}) {
  return portfolios.map((portfolio) => {
    return(
        <ImageContainer>
          <img src="https://cdn.pixabay.com/photo/2020/08/09/15/43/tower-5475844_960_720.jpg" alt="Hola"></img>
        </ImageContainer>
    );
  });

}


class Portfolios extends React.Component{
  state = {
    portfolios: [],
    name: "",
    number: 0
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value})

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const newPortfolio = { name: this.state.name}
    
    this.setState({
      portfolios: this.state.portfolios.concat(newPortfolio),
      number: this.state.number + 1
    })
  }

  render(){
    return(
      <ComponentContainer>
          <h2>Portafolio</h2>
          <IconContainer>
                <img src="https://image.flaticon.com/icons/svg/1096/1096090.svg" alt="Hola"></img>
          </IconContainer>
          <p>Este espacio corresponde al material que te gustaria mostrar a
             los clientes. Relaciona todas tus mejores trabajos en fotos o
             pequeños videos que le den una idea de tu calidad al cliente.
          </p>
          <AttachContainer>
          <form onSubmit={this.handleSubmit}>
            <fieldset>
              <label>
                <input type="file" ref={this.fileInput} onChange={this.handleChange}/>
              </label>
              <br/>
            </fieldset>
            <button type="submit">Submit</button>
          </form>
          </AttachContainer>
          <PortfolioImageContainer>
            <PortfoliosComponent portfolios = {this.state.portfolios}/>
          </PortfolioImageContainer>

      </ComponentContainer>

    )
    }
}

class SelectorDP extends React.Component{

  state = { value: "Profile"}

  handleClick = (event) => {
    this.setState({ value: event.target.value });
    console.dir(event.target);
  }

  render(){
    return(
      <SecondaryContainer>
        <LateralContainer>
            <div className="Bienvenido">
                <h2> ¡Bienvenido Alan!</h2>
            </div>
            <div className="Indicador"> 
                <p className="TuPerfil"> Tu perfil esta al:</p>
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
                <button value="Portfolios" onClick={this.handleClick}> Portafolío </button>
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
                    this.state.value === "Portfolios" ?
                    <Portfolios/> :
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
  <div>
    <Header/>
    <GlobalContainer>
      <MainContainer>
        <div className="TitleDP"> 
            <h2 className="MyProfile">Mi Perfil Profesional</h2>
        </div>
      </MainContainer>
        <SelectorDP/>
    </GlobalContainer>
  </div>
    )
}

export default DronePilot