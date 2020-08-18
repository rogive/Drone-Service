import React from 'react';
import UserForm from '../Components/UserForm';
import Header from '../Components/Header'
import GlobalContainer from '../utils/GlobalStyles'

function ClientProfile(){

return (
  <GlobalContainer>
    <Header/>
    <UserForm/>
  </GlobalContainer>
  )
}

export default ClientProfile