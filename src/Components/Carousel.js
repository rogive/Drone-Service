import React from 'react';
import styled from 'styled-components';
import hero from '../img/drone-hero.jpg';
import Button from '../Components/Button';

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
    margin-bottom: 6rem;
    font-size: 1.8rem;
    line-height: 1.75;
  }
`

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 25vh;
  align-content: center;
  justify-content: space-around;
  padding: 0rem 8rem;
`

function Carousel(){

  return(
      <CarouselContainer>
        <TextBox>
          <h1>Le damos <span>alas</span> a tus proyectos!!!</h1>
          <p>Contamos con personal experimentado y calificado y estamos listos 
             para poner tus ideas en el cielo.</p>
          <ButtonContainer>
            <Button onClick={() => sessionStorage.setItem('userType', 'client')} title={"Quiero encontrar un servicio"} linkto={"/user-registry"} />
            <Button onClick={() => sessionStorage.setItem('userType', 'pilot')} title={"Quiero prestar mi servicio"} linkto={"/user-registry"}/>
          </ButtonContainer>
        </TextBox>
      </CarouselContainer>
  )
}

export default Carousel
