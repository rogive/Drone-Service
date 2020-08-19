import React from 'react';
import styled from 'styled-components';
import GlobalContainer from '../utils/GlobalStyles'
import Header from '../Components/Header'
import SelectorDP from '../Components/SelectorDP'

const MainContainer = styled.div`
  padding-top: 1rem;
  .TitleDP{
    margin: 0vw;
    width: 100%;
    border-style: solid;
    border-color: #f2f2f2;
    border-width: 2px;
    .MyProfile{
      margin: 2rem;
      font-size: 1.5vw;
    }
  }  
`

function DronePilot(){

return (
  <div>
    <Header/>
    <GlobalContainer>
      <MainContainer>
        <div className="TitleDP"> 
            <h2 className="MyProfile">Mi Perfil Profesional</h2>
        </div>
      </MainContainer>
        <SelectorDP/>
    </GlobalContainer>
  </div>
    )
}

export default DronePilot