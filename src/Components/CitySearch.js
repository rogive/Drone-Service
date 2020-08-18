import React from 'react'
import styled from 'styled-components'

const OptionContainer = styled.div`
    border: 1px solid grey;
    box-sizing: border-box;
    padding: 20px 0;
    height: 160px;
    overflow-y: scroll;
`

class CitySearch extends React.Component{


  citiesRender = (data) =>{
    const { ciudades } = data[this.props.departmentID]
    
    return(
      <OptionContainer>
       {
         ciudades.map((element)=>{
           return(
              <div>
                <input value={element} checked={this.props.city === element} name="City" id={element} type="radio" onChange={this.props.cityHandleChange}/>
                <label htmlFor={element}>{element}</label>
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
                      <input value={element} id={element.id} type="radio" onChange={this.props.handleChange} name="Department"/>
                      <label htmlFor={element.id}>{element.label}</label>
                    </div>
                  )
                })}
              </OptionContainer>
            </div>
            <div>
            <h3>Ciudades</h3>
            {this.props.departmentID ? this.citiesRender(data) : null }
          </div>
       </div>
    )
  }
}

export default CitySearch