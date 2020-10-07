import React from 'react';
import GlobalContainer from '../utils/GlobalStyles'
import LoginForm from '../Components/LoginForm'



class Login extends React.Component{

render(){
    return (
        <GlobalContainer>
            <LoginForm/>
        </GlobalContainer>
        )
    }
}

export default Login