import React, {useEffect, useState} from 'react'
import axios from 'axios';


function Results({info}){

  const [pilotsDb, setPilotsDb] = useState([]);

  let foundData = []

  useEffect(() => {
    const fetchPilots = async () => {
      try{
        const result = await axios.get('http://localhost:8000/pilotos/listar')
        setPilotsDb(result.data)
        console.log(result.data)
      }catch(error){
        console.log(error)
      }      
    };
    fetchPilots();
  }, []);
  

  if(info.categorie && info.departmentID && info.city){
    foundData = pilotsDb.filter(pilot => pilot.departmentID == info.departmentID && pilot.city == info.city && pilot.categorie == info.categorie) 
  }else if(info.categorie){
    foundData = pilotsDb.filter(pilot => pilot.categorie == info.categorie)
  }else if(info.departmentID){
    foundData = pilotsDb.filter(pilot => pilot.departmentID == info.departmentID && pilot.city == info.city)
  }

 
  return(
    <div>
      <h2>Resultados</h2>
      {
        foundData.map((element)=>{
          return <div key={element._id}>
                    <img src={element.image} alt=""/>
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