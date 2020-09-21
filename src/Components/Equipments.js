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

  export default Equipments