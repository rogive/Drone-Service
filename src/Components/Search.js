import React from 'react';
import newDepartments from '../data/deparments.json'
import styled from 'styled-components'
import mockdata from '../data/mockdata.json'

const ExploraContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
`


class Categories extends React.Component{
render(){
    const { data } = this.props   
    

    return (
      <div>
        <h3>{this.props.name}</h3>
        {data.map((element)=>{
          return(
            <div> 
              <div>
                <input id={element.id} type="checkbox"/>
                <label htmlFor={element.id}>{element.label}</label>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}


class CitySearch extends React.Component{

  state = {
    deparmentID : null,
    city: "",
  }

  handleChange = (event) => {
    this.setState({ deparmentID : event.target.id });
  }

  cityHandleChange = async (event) => {
    await this.setState({ city : event.target.id})
    this.props.sendInfo(this.state)
  }

  citiesRender = (data) =>{
    let { ciudades } = data[this.state.deparmentID]
    
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
      
      // const ciudades = ""
      // const variable = data[this.state.deparmentID]  
      
  
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
            {this.state.deparmentID !== null ? this.citiesRender(data) : <h1>Falso</h1>}
              
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

// const stringifyDeparments = JSON.stringify(deparments)
// const newDepartments = JSON.parse(stringifyDeparments)


function Results(info){
  const foundData = mockdata.filter(element => element.departmentID == info.info.deparmentID && element.city == info.info.city)
  
  console.log(foundData)
  if(!foundData){
    return(
      <div>
        <h2>Resultados</h2>
        <div>
          <img src={info.image} alt="paisaje"/>
          <h1> {foundData[0].name}</h1>
          <div>
            <p>{info.description}</p>
            <div>
              <span>☆</span><span>☆</span><span>☆</span><span>☆</span><span>☆</span>
            </div>
          </div>n  
        </div>
      </div>
    )    
  }else{
    return <div>Resultados</div>
  }
}


class Search extends React.Component{
  
  state = {
    deparmentID: "",
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
            <CitySearch data={newDepartments} sendInfo = {this.sendInfo}/>
          </div>
          <div>
            <Results info={this.state}/>
          </div>
        </ExploraContainer>
     )
  }
}

export default Search