import React from 'react';
import Departments from '../data/deparments.json'
import styled from 'styled-components'
import mockdata from '../data/mockdata.json'


const ExploraContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`

const OptionContainer = styled.div`
    border: 1px solid grey;
    box-sizing: border-box;
    padding: 20px 0;
    height: 160px;
    overflow-y: scroll;
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


class Categories extends React.Component{
  
  render(){

    const { data } = this.props   
      
    return(
      <div>
        <h3>{this.props.name}</h3>
        <OptionContainer>
          {data.map((element)=>{
            return(
              <div>
                <input id={element.id} type="radio" name="Categoria"/>
                <label htmlFor={element.id}>{element.label}</label>
              </div>)
              }
            )
          }
        </OptionContainer>
      </div>
    )
  }
}


class CitySearch extends React.Component{

  state = {
    departmentID : null,
    city: "",
  }

  handleChange = (event) => {
    this.setState({ departmentID : event.target.id });
  }

  cityHandleChange = async (event) => {
    await this.setState({ city : event.target.id})
    this.props.sendInfo(this.state)
  }

  citiesRender = (data) =>{
    const { ciudades } = data[this.state.departmentID]
    
    return(
      <OptionContainer>
       {
         ciudades.map((element)=>{
           return(
             <div> 
               <div>
                 <input name="City" id={element} type="radio" onChange={this.cityHandleChange}/>
                 <label htmlFor={element}>{element}</label>
               </div>
             </div>
           )
         })
       }
      </OptionContainer>
      )
    }
  

  render(){

      const { data } = this.props 
      
      return (
        <div>
          <div>
              <h3>Departamentos</h3>
              <OptionContainer>
                {data.map((element)=>{
                  return(
                    <div> 
                      <div>
                        <input id={element.id} type="radio" onChange={this.handleChange} name="Department"/>
                        <label htmlFor={element.id}>{element.label}</label>
                      </div>
                    </div>
                  )
                })}
              </OptionContainer>
            </div>
            <div>
            <h3>Ciudades</h3>
            {this.state.departmentID !== null ? this.citiesRender(data) : null }
          </div>
       </div>
    )
  }
}


const categories = [
  {
      id: "fotos",
      label: "Fotos"
  },
  {
    id: "videos",
    label: "Videos"
  },
  {
    id: "fotogrametria",
    label: "Fotogrametria"
  },
  {
    id: "ortomapas",
    label: "Ortomapas"
  },
  {
    id: "modeloDigital",
    label: "Modelo Digital"
  }
]


function Results(info){

  const foundData = mockdata.filter(element => element.departmentID == info.info.departmentID && element.city == info.info.city)

  return(
    <div>
      <h2>Resultados</h2>
      {
        foundData.map((element)=>{
          return <div>
                    <img src={element.image}/>
                    <h3>{element.name}</h3>
                    <p>{element.description}</p>
                 </div>
              }
            )
          }
    </div>
  )    
}


class Search extends React.Component{
  
  state = {
    departmentID: "",
    city: ""
  }

  
  sendInfo=(info)=>{
    this.setState({departmentID: info.departmentID})
    this.setState({city: info.city})
  }

  render(){
      return(
        <ExploraContainer>
          <SearchContainer>
            <input class="buscar" type="text" placeholder="Buscar"/>
            <Categories name="Categorias" data={categories}/>
            <CitySearch data={Departments} sendInfo = {this.sendInfo}/>
          </SearchContainer>
          <ResultsContainer>
            <Results info={this.state}/>
          </ResultsContainer>
        </ExploraContainer>
     )
  }
}


export default Search