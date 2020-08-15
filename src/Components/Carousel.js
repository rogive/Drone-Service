import React from 'react';
import styled from 'styled-components';
import hero from '../img/drone-hero.jpg'
import Button from '../Components/Button'


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
  }
  
  span{
    font-weight: 600;
    color: rgba(10,10,200, 1)
  }

  p{
    margin-top: 5rem;
    margin-bottom: 8rem;
    font-size: 1.8rem;
    line-height: 1.75;
  }
`

function Carousel(){
  return(
      <CarouselContainer>
        <TextBox>
          <h1>Le damos <span>alas</span> a tus proyectos!!!</h1>
          <p>Contamos con personal experimentado y calificado y estamos listos 
             para poner tus ideas en el cielo.</p>
          <Button></Button>
        </TextBox>
      </CarouselContainer>
  )
}

export default Carousel
