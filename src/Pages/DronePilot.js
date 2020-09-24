import React from 'react';
import styled from 'styled-components';
import GlobalContainer from '../utils/GlobalStyles';
import SelectorDP from '../Components/SelectorDP';

const MainContainer = styled.div`
  padding-top: 1rem;
  .TitleDP{
    border: 1px solid gray;
    padding: 30px;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background: rgb(0, 23, 105);
    background: linear-gradient(
      90deg,
      rgba(0, 23, 105, 1) 0%,
      rgba(0, 17, 78, 1) 52%,
      rgba(0, 23, 105, 1) 100%
    );
    color: white;
    .MyProfile{
      padding: 2rem;
      font-size: 2rem;
    }
  }  
`

function DronePilot(){

return (
  <div>
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