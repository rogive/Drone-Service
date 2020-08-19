import React from 'react';
import styled from 'styled-components';

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

export default Portfolios