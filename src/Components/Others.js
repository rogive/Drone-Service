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

export default Others