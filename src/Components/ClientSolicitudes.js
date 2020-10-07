import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ClientSolicitudes.css"

function ClientSolicitudes() {
  const [solicitudesDb, setSolicitudesDb] = useState([])
  
  useEffect(() => {
    setSolicitudesDb([]);
    const clientId = sessionStorage.getItem('userId')
    
    const solicitudes = async () => {
      try {
        const result = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/solicitudes/listar/cliente/${clientId}`
        )
        setSolicitudesDb(result.data);
      } catch (error) {
        alert(error);
      }
    }
    solicitudes();
  }, []);
  
  return (
    <div>
      {solicitudesDb.map((element) => {
        return (
          <div className="solicitude-historial" key={element._id}>
            <h3>{element.client.name}</h3>
            <strong>{element.servicetitle}</strong>
            <p>{element.description}</p>
            <div className="image-container-historial">
            {element.images.map((image) => {
              return (
                <img
                  className="image__solicitude__clientProfile__historial"
                  src={image.url}
                  alt=""
                />
              );
            })}
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default ClientSolicitudes
