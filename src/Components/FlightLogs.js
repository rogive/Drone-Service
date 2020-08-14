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

function FlightLogs(){
  return(
    <div>
      <CertificatesContainer>
        <h3>Bitacoras de Vuelo</h3>
        <h6>Este espacio corresponde a las bitácoras de vuelo de las 
            operaciones Drone realizadas por el piloto. Es opcional la 
            visualización publica de sus bitacoras. SI no desea que sea 
            publica, solo aparecerá la cantida
        </h6>
        <AddContainer>
          <CertificatesBar>Bitacora_2_Piloto_Alan_Brito.pdf</CertificatesBar>
          <button>Adjuntar</button>
        </AddContainer>
      </CertificatesContainer>
    </div>
  )
}


export default FlightLogs