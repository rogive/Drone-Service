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
  h2{
  }
  p{
    padding-top: 2rem;
    justify-content: space-between;
  }
`

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

export default Certificates