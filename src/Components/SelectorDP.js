import React from 'react';
import styled from 'styled-components';
import Certificates from '../Components/Certificates'
import FlightLogs from './FlightLogs';
import Equipments from './Equipments';

const SelectorContainer = styled.div`
position: absolute;
margin-right: 5vw;
margin-left: 5vw;
justify-content: space-between;
`

class SelectorDP extends React.Component{

  state = { value: "select"}

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  }

/*  switch(this.state.value){
    Certifications: 
      <Certificates></Certificates>
      break;
    FlighLogs:
      <FlightLogs></FlightLogs>
      break;
    } */

    render(){
      return(

            <SelectorContainer>
                <select name="valueSel"  value={this.state.value} onChange={this.handleChange}>
                  <option value="" >Elige una opción</option> 
                  <option value="Certifications" >Certificaciones Profesionales</option> 
                  <option value="FlightLogs" >Bitacoras de Vuelo</option> 
                  <option value="Equipments" >Equipos</option>
                  <option value="AppLogs" >Horas de Vuelo Apps</option> 
                  <option value="Technology" >Tecnologias</option> 
                  <option value="Others" >otros</option> 
                </select>
                <div>
                    { this.state.value === "Certifications" ?
                        <Certificates></Certificates> :
                        this.state.value === "FlightLogs" ?
                        <FlightLogs></FlightLogs> :
                        this.state.value === "Equipments" ?
                        <Equipments></Equipments> :
                        <span></span>
                    }
                </div>
            </SelectorContainer>
      )  
  }
}



export default SelectorDP