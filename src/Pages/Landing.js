import React, {useEffect} from 'react'
import axios from 'axios'

const Landing = () => {

  useEffect(() => {
    axios({
      method: 'GET',
      url: 'http://localhost:8000/pilotos/listar',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`
      }
    })
      .then((response) => console.log(response))
      .catch(() =>{
        localStorage.removeItem('token');
      })
    
  }, [])

  return(
    <div>
      <h1>BIENVENIDO! nombre del piloto!</h1>
    </div>
  )

}

export default Landing