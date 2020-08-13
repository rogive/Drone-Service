import React from 'react';
import logo from '../IconoDS.png';
import styled from 'styled-components';


const defaultMargin = "0-auto"

const DescriptionContainer = styled.div`
  margin-right: 5vw;
  margin-left: 5vw;
  justify-content: space-between;

`
const AddContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-between;

`

const ElemContainer = styled.div`
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