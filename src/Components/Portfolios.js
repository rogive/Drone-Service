import React from 'react';
import styled from 'styled-components';
import { storage } from '../firebase';

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
          <img src={portfolio.url}></img>
        </ImageContainer>
    );
  });
}
  
  
class Portfolios extends React.Component{
  state = {
    portfolios: [],
    name: "",
    id: 0,
    selectedFile: null,
    url: ''
  }

  handleChange = (event) => {
    console.dir(event.target)
    this.setState({ 
      name: event.target.files[0].name,
      selectedFile: event.target.files[0]
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const uploadImage = storage.ref('Pilots/Pilot-x/' + this.state.name).put(this.state.selectedFile);

    uploadImage.on('state_changed', 
    (snapshot) => {
      // progrss function ....
/*       const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      this.setState({progress}); */
    }, 
    (error) => {
         // error function ....
      console.log(error);
    }, 
  () => {
      // complete function ....
      storage.ref('Pilots/Pilot-x/').child(this.state.name).getDownloadURL().then(url => {
          console.log(url);
          this.setState({url},() => {
            const newPortfolio = {
              name: this.state.name,
              id: this.state.id + 1,
              url: this.state.url,
              selectedFile: this.state.selectedFile
            }
            this.setState({
              portfolios: this.state.portfolios.concat(newPortfolio),
            });
          });
      })
    });
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