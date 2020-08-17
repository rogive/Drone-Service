import React from 'react'
import styled from 'styled-components'
import categories_list from '../data/categories_list.json'

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
          {categories_list.map((categorie)=>{
            return(
              <div>
                <input id={categorie.id} type="radio" name="Categoria"/>
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