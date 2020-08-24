import React from 'react'
import styled from 'styled-components'
import categories from '../data/categories.json'

const OptionContainer = styled.div`
    border: 1px solid grey;
    box-sizing: border-box;
    padding: 20px 0;
    overflow-y: scroll;
`


class Categories extends React.Component{
  
  render(){

    return(
      <div>
        <h3>Categorias</h3>
        <OptionContainer>
          {categories.map((categorie)=>{
            return(
              <div>
                <input key={categorie.id} id={categorie.id} type="radio" name="Categoria" onChange={this.props.categorieHandleChange}/>
                <label htmlFor={categorie.id}>{categorie.label}</label>
              </div>)
              }
            )
          }
        </OptionContainer>
      </div>
    )
  }
}

export default Categories