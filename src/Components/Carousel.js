import React from "react";
import styled from "styled-components";
import hero from "../img/Fondo.png";
import Button from "../Components/Button";

const CarouselContainer = styled.div`
  background-image: url(${hero});
  background-size: cover;
  height: 74vh;
  background-position: center;
  font-family: "Montserrat";
`;

const TextBox = styled.div`
  position: absolute;
  width: 40%;
  padding: 20px;
  margin-left: 5%;
  margin-top: 10vh;
  text-align: center;

  h1 {
    text-transform: uppercase;
    font-weight: 300;
    font-size: 3.6rem;
  }

  span {
    font-weight: 600;
    color: rgba(10, 10, 200, 1);
  }

  p {
    margin-top: 5rem;
    margin-bottom: 6rem;
    font-size: 1.8rem;
    line-height: 1.75;
  }
`;

const ButtonContainer = styled.div`
  margin: 0;
  display: flex;
  /* align-content: center; */
  /* justify-content: ; */
  padding: 0rem 8rem;
`;

function Carousel() {
  return (
    <CarouselContainer>
      <TextBox>
        <h1>
          Le damos <span>alas</span> a tus proyectos!!!
        </h1>
        <p>
          Contamos con personal experimentado y calificado y estamos listos para
          poner tus ideas en el cielo.
        </p>
        <ButtonContainer>
          <Button
            onClick={() => sessionStorage.setItem("userType", "client")}
            title={"Quiero encontrar un piloto"}
            linkto={"/user-registry"}
          />
          <Button
            onClick={() => sessionStorage.setItem("userType", "pilot")}
            title={"Quiero prestar mi servicio"}
            linkto={"/user-registry"}
          />
        </ButtonContainer>
      </TextBox>
    </CarouselContainer>
  );
}

export default Carousel;
