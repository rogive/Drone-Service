import React from 'react';
import styled from 'styled-components';
import { storage } from '../firebase';
import axios from 'axios';

const IconContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15vw;
    height: 15vw;
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
    width: 10vw;
    height: 10vw;
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
    pilotId: "5f431d3ebd64571f5e5d63b7",
    id: 0,
    selectedFile: null,
    url: '',
    error: '',
    post: ''
  }

  componentDidMount() {
    axios({
      url: `http://localhost:8000/media/listar/piloto/${this.state.pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => this.setState({ portfolios: data }, ))
      .catch((error) => this.setState({ error }))
  }

  handleChange = (event) => {
    this.setState({ 
      name: event.target.files[0].name,
      selectedFile: event.target.files[0]
    })

  }

  handleSubmit = (event) => {
    event.preventDefault();
    const uploadImage = storage.ref(`Pilots/Pilot-${this.state.pilotId}/` + this.state.name).put(this.state.selectedFile);

    uploadImage.on('state_changed', 
    (snapshot) => {
    }, 
    (error) => {
      console.log(error);
    },
    () => {
      storage.ref(`Pilots/Pilot-${this.state.pilotId}/`).child(this.state.name).getDownloadURL().then(url => {
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

          axios({
            url: 'http://localhost:8000/media/crear',
            method: 'POST',
            data: {
              pilotId: this.state.pilotId,
              url: this.state.url,
              type: "image",
            }
          })
          .then(({ data }) => this.setState({ post: data }))
          .catch((error) => this.setState({ error }));
        });
      })
    });
  }

  render(){
    return(
      <ComponentContainer>
        <h2>Portafolio</h2>
        <IconContainer>
          <img src="https://image.flaticon.com/icons/svg/1096/1096090.svg"></img>
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