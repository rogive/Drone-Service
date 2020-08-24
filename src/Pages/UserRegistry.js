import React from 'react';
import UserForm from '../Components/UserForm';
import GlobalContainer from '../utils/GlobalStyles'
import FormHook from '../Components/FormHook'

function ClientProfile(){

return (
  <GlobalContainer>
    {/* <UserForm/> */}
    <FormHook/>
  </GlobalContainer>
  )
}

export default ClientProfile