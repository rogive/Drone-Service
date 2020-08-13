import React from 'react';
import styled from 'styled-components';
import hero from '../img/drone-hero.jpg'


const CarouselContainer = styled.div`
background-image: url(${hero});
height: 100vh;
background-size: cover;
height: 80vh;
background-position: center;
font-family: 'Montserrat';
`

const TextBox = styled.div`
position: absolute;
width: 40%;
margin-left: 5%;
margin-top: 14vh;
text-align: center;

h1{
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3.6rem;

  span{
    font-weight: 600;
    color: rgba(10,10,200, 1)
  }
}

p{
  margin-top: 5rem;
  margin-bottom: 8rem;
  font-size: 1.8rem;
  line-height: 1.75;
}

button{
  padding: 1rem 1.6rem;
  border-radius: 8px;
  font-family: 'Montserrat';
  font-size: 2rem;
  color: white;
  border: none;
  background-image: linear-gradient(to left, rgba(10,10,200, 1), rgba(10,100,200, 1));
  cursor: pointer;
  &:hover{
  background-image: linear-gradient(to left, rgba(10,10,100, 1), rgba(10,10,100, 1));
  }
}
`



function Carousel(){
  return(
      <CarouselContainer>
        <TextBox>
          <h1>Le damos <span>alas</span> a tus proyectos!!!</h1>
          <p>Contamos con personal experimentado y calificado y estamos listos 
             para poner tus ideas en el cielo.</p>
          <button>Registrarme</button>
        </TextBox>
      </CarouselContainer>
  )
}

export default Carousel
