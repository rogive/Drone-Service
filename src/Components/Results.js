import React from 'react'
import mockdata from '../data/mockdata.json'

function Results({info}){

  const foundData = mockdata.filter(element => element.departmentID == info.departmentID && element.city == info.city)

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


export default Results