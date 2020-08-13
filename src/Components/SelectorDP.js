import React from 'react';
import logo from '../IconoDS.png';
import styled from 'styled-components';
import Certificates from '../Components/Certificates'
import DescriptionDP from '../Components/DescriptionDP'
import FlightLogs from './FlightLogs';

const defaultMargin = "0-auto"

const SelectorContainer = styled.div`
position: absolute;
margin-right: 5vw;
margin-left: 5vw;
justify-content: space-between;
`

class SelectorDP extends React.Component{

  state = { status: 1}

  changeSelect = () => {
    this.setState({ state: this.props.value });
  }
    render(){
      return(
        
            <SelectorContainer>
                <select name="valueSel">
                  <option value="1" onChange={this.changeSelect}>Certificaciones Profesionales</option> 
                  <option value="2" onChange={this.changeSelect}>Bitacoras de Vuelo</option> 
                  <option value="3" onChange={this.changeSelect}>Equipos</option>
                  <option value="4" onChange={this.changeSelect}>Horas de Vuelo Apps</option> 
                  <option value="5" onChange={this.changeSelect}>Tecnologias</option> 
                  <option value="6" onChange={this.changeSelect}>otros</option> 
                </select>
                {this.state.status === 1 ?
                  <Certificates></Certificates> :
                  <FlightLogs></FlightLogs>
                }
            </SelectorContainer>
      )  
  }
}



export default SelectorDP