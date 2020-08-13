import React from 'react';
import logo from '../IconoDS.png';
import styled from 'styled-components';


const defaultMargin = "0-auto"

const HeaderContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  margin: ${defaultMargin}
`

const HeaderLogoContainer = styled.div`
  display: flex;
`

const Ulist = styled.ul`
  display: flex;
  list-style: none;
`

const List = styled.li`
  margin-right: 20px;
`

-/* const Container = styled.div`
-  width: 500px;
-  border: 1px solid #333;
-  border-radius: 5px;
-  display: ${props => props.hidden ? 'none' : 'block'};
-
-  @media screen and (min-width: 600px) {
-    width: 100%;
-    background: beige;
-  }
-`;
- */
-
function Header(){
  return(
    <HeaderContainer>
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
    </HeaderContainer>
  )
}

export default Header