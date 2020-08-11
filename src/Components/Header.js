import React from 'react';
import logo from '../IconoDS.png';
import styled from 'styled-components';

const HeaderLogoContainer = styled.div`
  display: flex;
  background: #2980B9;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FFFFFF, #6DD5FA, #2980B9); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

const Ulist = styled.ul`
  display: flex;
  list-style: none;
`;

const List = styled.li`
  margin-right: 20px;
`;

/* const Container = styled.div`
  width: 500px;
  border: 1px solid #333;
  border-radius: 5px;
  display: ${props => props.hidden ? 'none' : 'block'};

  @media screen and (min-width: 600px) {
    width: 100%;
    background: beige;
  }
`;
 */

function Header(){
  return(
    <div>
      <HeaderLogoContainer>
        <img width="100px" src = {logo} alt="logo_drone_services"/>
        <h2>Drone Services</h2>
      </HeaderLogoContainer>
      <Ulist>
        <List>Home</List>
        <List>Blog de noticias</List>
        <List>Explora</List>
        <List>About</List>
        <List>Ayuda</List>
      </Ulist>
    </div>
  )
}


export default Header