import React from 'react';
import styled from 'styled-components';


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

const AttachContainer = styled.div`
  padding-top:2rem;
  padding-bottom:2rem;
`

const ComponentContainer = styled.div`
  p{
    padding-top: 2rem;
    text-align: justify;
    font-size: 1.2rem;
  }
  h2{
    font-size: 2rem;
  }
`



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

export default FlightLogsApp