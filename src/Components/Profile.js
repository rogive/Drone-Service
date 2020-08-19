import React from 'react';
import styled from 'styled-components';

const ImageProfileContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
  }
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

function Profile(){
  return(
    <ComponentContainer>
      <h2>Perfil</h2>
      <ImageProfileContainer>
        <img src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=6&m=476085198&s=170667a&w=0&h=ZHUgkr2TYixVu_Nny3XpsfmTdInPtEp1-PpO9MuQwYM=" alt="Hola"></img>
      </ImageProfileContainer>
      <p>Agrega una breve descripción de tus conocimientos, capacidades
        y habilidades. Adiciona cualquier descripcion interesante para 
        el cliente.
      </p>
    </ComponentContainer>
  )
}

export default Profile