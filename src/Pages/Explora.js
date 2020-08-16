import React from 'react';
import Search from '../Components/Search'
import Header from '../Components/Header'
import GlobalContainer from '../utils/GlobalStyles'



class Explora extends React.Component{

render(){
    return (
        <GlobalContainer>
            <Header/> 
            <Search/>
        </GlobalContainer>
        )
    }
}

export default Explora