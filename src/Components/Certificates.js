import React from 'react';
import logo from '../IconoDS.png';
import styled from 'styled-components';


const defaultMargin = "0-auto"

const CertificatesContainer = styled.div`
  position: absolute;
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

const Ulist = styled.ul`
  list-style: none;
`

const List = styled.li`
  margin-right: 20px;
`


function Certificates(){
  return(
    <CertificatesContainer>
      <h2>Certificaciones</h2>
      <h6>Piloto certificado en UAS con especialidades en fotogrametria
          y seguridad aerea. Piloto certificado en UAS con especialidades
          en fotogrametria y seguridad aerea. 
      </h6>
      <AddContainer>
        <CertificatesBar>Curso_Especializacion_Fotogrametria.pdf</CertificatesBar>
        <button>Examinar</button>
        <button>Adjuntar</button>
      </AddContainer>
    </CertificatesContainer>
  )
}


export default Certificates