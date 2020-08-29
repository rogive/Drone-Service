import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const DocumentsContainer = styled.div`
  width: 100%;
  background-color: #66b2ff;
  color: black;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  p{
    padding: 1rem;
    text-align: left;
  }
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
  font-size: 1.1vw;
  p{
    padding-top: 2rem;
    justify-content: space-between;
  }
`

function ServicesComponent({
  services
}) {
  return services.map((service) => {
    return(
      <DocumentsContainer>
        <p className="element">{service.name}</p>
      </DocumentsContainer>

    );
    });
  
  }
  
function Services() {
  const [services, setServices] = useState([])
  const [name, setName] = useState([])

  function handleChange(event) {
    setName(event.target.value)
  }

  function handleSubmit(event) {
    event.preventDefault();
    setServices(services.concat( { name } ))
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
        <ServicesComponent services = {services}/>
      </ComponentContainer>

    )
}

export default Services