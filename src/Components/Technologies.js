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
  font-size: 1.1vw;
  p{
    padding-top: 2rem;
    justify-content: space-between;
  }
`

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

export default Technologies