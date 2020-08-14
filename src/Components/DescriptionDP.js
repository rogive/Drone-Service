import React from 'react';
import styled from 'styled-components';


const DescriptionContainer = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  justify-content: space-between;
  `

function DescriptionDP(){
  return(
      <DescriptionContainer>
        <h1>Descripcion General</h1>
        <h3>Este espacio corresponde a una descripcion general de las opciones 
            que tiene el piloto para subir sus documentos.
        </h3>
      </DescriptionContainer>

  )
}


export default DescriptionDP