import React from 'react';
import Departments from '../data/deparments.json'
import styled from 'styled-components'
import Categories from './Categories'
import CitySearch from './CitySearch'
import Results from './Results'


const ExploraContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const SearchContainer = styled.div`
    border: 1px red solid;
    padding: 30px;
    width: 20%;
    display: flex;
    flex-direction: column;
`

const ResultsContainer = styled.div`
    border: 1px red solid;
    padding: 30px;
    width: 60%;
    box-sizing: content-box;
    display: flex;
    flex-direction: column;
    div h2{
      text-align: center;
    }
    div div img{
      display: block;
      margin: 0 auto;
      width: 100%;
      max-width: 600px;
      height: auto;
    }
`


class Search extends React.Component{
  
  state = {
    departmentID: "",
    city: ""
  }

  handleChange = (event) => {
    this.setState({ departmentID : event.target.id, city:"" });
  }

  cityHandleChange = (event) => {
    this.setState({ city : event.target.value})
  }

  
  render(){
      return(
        <ExploraContainer>
          <SearchContainer>
            <input class="buscar" type="text" placeholder="Buscar"/>
            <Categories/>
            <CitySearch data={Departments} handleChange={this.handleChange} cityHandleChange={this.cityHandleChange} departmentID={this.state.departmentID} city={this.state.city}/>
          </SearchContainer>
          <ResultsContainer>
            <Results info={this.state}/>
          </ResultsContainer>
        </ExploraContainer>
     )
  }
}


export default Search
