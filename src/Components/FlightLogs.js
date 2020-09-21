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

  export default FlightLogs