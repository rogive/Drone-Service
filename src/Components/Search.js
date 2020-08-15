import React from 'react';
import newDepartments from '../data/deparments.json'


class Checked extends React.Component{
render(){
    const { data } = this.props   
    console.log(data)

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
    cityArray: []
  }

  handleChange = (event) => {
    console.dir(event.target.id)
    this.setState({ deparmentID : event.target.id });
  }

  citiesRender = (data) =>{
    let cities = data[this.state.deparmentID].ciudades
    console.log(cities)
    return(
        cities.map((element)=>{
          return(
            <div> 
              <div>
                <input id={element} type="checkbox" onChange={this.handleChange}/>
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



class Search extends React.Component{

  render(){
      return(
        <div>
          <input class="buscar" type="text" placeholder="Buscar"/>
          <Checked name="Categorias" data={categories}/>
          <CitySearch data={newDepartments}/>
        </div>
     )
  }
}

export default Search