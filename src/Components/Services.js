import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ServicesList from '../data/categories.json';
import axios from 'axios';

const DocumentsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 9.5vw;
  height: 30vh;
  border: 1px solid black;
  background-color: #66b2ff;
  color: black;
  border-radius: 1rem;
  align-items: center;
  margin: 1rem;
  .element{
    font-size: 0.8vw;
    font-style: italic;
    text-align: center;
    margin-bottom: 1rem;
  }
  img{
    margin: 1rem;
    width: 8vw;
    height: 8vw;
    border-radius: 3rem;
    border: 1px solid black;
  }
`

const ServiceImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`

const IconContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
    filter: grayscale(100%);
  }
`

const AttachContainer = styled.div`
  padding-top:2rem;
  padding-bottom:2rem;
`

const ComponentContainer = styled.div`
  p{
    padding-top: 2rem;
    text-align: justify;
    font-size: 1.2rem;
  }
  h2{
    font-size: 2rem;
  }
`

function ServicesComponent({
  services
}) {
  return services.map((service) => {
    return(
      <DocumentsContainer>
        <img src={service.url} alt="miniatura"></img>
        <p className="element">{service.name}</p>
      </DocumentsContainer>

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
      url: `http://localhost:8000/servicios/listar/piloto/${pilotId}`,
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
      url: `http://localhost:8000/servicios/actualizar/${serviceId}`,
      method: 'PUT',
      data: {
        pilotId: pilotId,
      }
    }).then(({ data }) => setServices( services.concat(data) ))
    .catch((error) => setError(error));
  }

    return(
      <ComponentContainer>
        <h2>Servicios</h2>
        <IconContainer>
          <img src="https://support.parrot.com/files/s3fs-public/images/support/dYU04cxUUqZVMAsQwudw-czYU9lM8dD5w8eFWZPVzeC1F9Xs81_un2ikfcdqqArRW8Hrzx2s9QmRw7KBPwnoLMYxRUuMjJUj6DtNCOX1p25vuehtjvoRMGkLxwt7eyIrTe4DpcI6TdVEfAG71A" alt="Hola"></img>
        </IconContainer>
        <p>Este espacio corresponde a los servicios que puedes 
            brindar con tus conocimientos, experiencia y equipos.
        </p>
        <AttachContainer>
        <form onSubmit={handleSubmit}>
          <fieldset>
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
            <br/>
          </fieldset>
          <button type="submit">Submit</button>
        </form>
        </AttachContainer>
        <ServiceImageContainer>
          <ServicesComponent services = {services}/>
        </ServiceImageContainer>
      </ComponentContainer>

    )
}

export default Services