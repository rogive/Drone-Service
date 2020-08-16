import React from 'react';
import Departments from '../data/deparments.json'
import styled from 'styled-components'
import mockdata from '../data/mockdata.json'


const ExploraContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`


class Categories extends React.Component{
  
  render(){

    const { data } = this.props   
      
    return(
      <div>
        <h3>{this.props.name}</h3>
        {data.map((element)=>{
          return(
            <div>
              <input id={element.id} type="checkbox"/>
              <label htmlFor={element.id}>{element.label}</label>
            </div>)
            }
          )
        }
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
        ciudades.map((element)=>{
          return(
            <div> 
              <div>
                <input name={element} id={element} type="checkbox" onChange={this.cityHandleChange}/>
                <label htmlFor={element}>{element}</label>
              </div>
            </div>
          )
        })
      )
    }
  

  render(){

      const { data } = this.props 
      
      return (
        <div>
          <div>
              <h3>Departamentos</h3>
              {data.map((element)=>{
                return(
                  <div> 
                    <div>
                      <input id={element.id} type="checkbox" onChange={this.handleChange}/>
                      <label htmlFor={element.id}>{element.label}</label>
                    </div>
                  </div>
                )
              })}
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
                    <img width="500px" src={element.image}/>
                    <h2>{element.name}</h2>
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
    this.setState({deparmentID: info.deparmentID})
    this.setState({city: info.city})
  }

  render(){
      return(
        <ExploraContainer>
          <div>
            <input class="buscar" type="text" placeholder="Buscar"/>
            <Categories name="Categorias" data={categories}/>
            <CitySearch data={Departments} sendInfo = {this.sendInfo}/>
          </div>
          <div>
            <Results info={this.state}/>
          </div>
        </ExploraContainer>
     )
  }
}


export default Search