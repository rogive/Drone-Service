import React from 'react';
import styled from 'styled-components';



const CertificatesContainer = styled.div`

  justify-content: space-between;

`
const AddContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;

`

const CertificatesBar = styled.label`
  margin-right: 40vw;

`


function Equipments(){
  return(
    <CertificatesContainer>
      <h2>Equipos</h2>
      <h6>En esta secciòn podras añadir los equipos de trabajo que posees
          para realizar los diferentes servicios.
      </h6>
      <AddContainer>
        <CertificatesBar>Curso_Especializacion_Fotogrametria.pdf</CertificatesBar>
        <button>Adjuntar</button>
      </AddContainer>
    </CertificatesContainer>
  )
}


export default Equipments