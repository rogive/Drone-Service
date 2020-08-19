import React from 'react'
import mockdata from '../data/mockdata.json'

function Results({info}){

  let foundData = []

  if(info.categorie && info.departmentID && info.city){
    foundData = mockdata.filter(pilot => pilot.departmentID == info.departmentID && pilot.city == info.city && pilot.categorie == info.categorie) 
  }else if(info.categorie){
    foundData = mockdata.filter(pilot => pilot.categorie == info.categorie)
  }else if(info.departmentID){
    foundData = mockdata.filter(pilot => pilot.departmentID == info.departmentID && pilot.city == info.city)
  }


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