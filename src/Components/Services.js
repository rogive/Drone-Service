import React, { useState, useEffect } from 'react';
import ServicesList from '../data/categories.json';
import axios from 'axios';
import "./Services.css"

function ServicesComponent({
  services
}) {
  return services.map((service) => {
    return(
      <div className="ServicesContainer">
        <img src={service.url} alt="miniatura"></img>
        <p className="element">{service.name}</p>
      </div>

    );
    });
  
  }
  
function Services() {
  const [services, setServices] = useState([])
  const [name, setName] = useState("Capacitación")
  const [serviceId, setServiceId] = useState(ServicesList[0]._id)
  const [pilotId, setPilotid] = useState(sessionStorage.getItem("userId"))
  const [url, setUrl] = useState(ServicesList[0].url)
  const [error, setError] = useState(null)

  useEffect( () => {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/servicios/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setServices( data ))
      .catch((error) => setError({ error }))
  }, [])

  function handleChange(event) {
    setName(event.target.value)
    ServicesList.map(service=>{
      if(service.label === event.target.value ){
        setUrl(service.url)
        setServiceId(service._id)
      }
    })
  }

  function handleSubmit(event) {
    event.preventDefault();
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/servicios/actualizar/${serviceId}`,
      method: 'PUT',
      data: {
        pilotId: pilotId,
      }
    }).then(({ data }) => setServices( services.concat(data) ))
    .catch((error) => setError(error));
  }

    return(
      <div className="ComponentContainer">
        <h2>Servicios</h2>
        <div className="IconContainer">
          <img src="https://deveronuas.com/wp-content/uploads/2019/09/Deveron-icons_Site-Survey.png" alt="drone-service"></img>
        </div>
        <p className="">Este espacio corresponde a los servicios que puedes 
            brindar con tus conocimientos, experiencia y equipos.
        </p>
        <div className="AttachContainer">
        <form onSubmit={handleSubmit}>
            <label>
              <select name="services" onChange={handleChange}>
                <option value="Capacitación">Capacitación</option> 
                <option value="Fotografía y Video">Fotografía y Video</option> 
                <option value="Seguimiento de Obra">Seguimiento de Obra</option>
                <option value="Fotogrametría">Fotogrametría</option> 
                <option value="Termografía">Termografía</option> 
                <option value="Inspecciones Industriales">Inspecciones Industriales</option> 
                <option value="Búsqueda y Rescate">Búsqueda y Rescate</option>
                <option value="Seguridad">Seguridad</option> 
                <option value="Agricultura de Precisión">Agricultura de Precisión</option>
              </select>
            </label>
          <button type="submit">Submit</button>
        </form>
        </div>
        <div className="ServiceImageContainer">
          <ServicesComponent services = {services}/>
        </div>
      </div>
    )
}

export default Services