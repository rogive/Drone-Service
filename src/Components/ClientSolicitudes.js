import React, { useEffect, useState } from "react";
import axios from "axios";

function ClientSolicitudes() {
  const [solicitudesDb, setSolicitudesDb] = useState([])
  
  useEffect(() => {
    setSolicitudesDb([]);
    const clientId = sessionStorage.getItem('userId')
    
    const solicitudes = async () => {
      try {
        const result = await axios.get(
          `http://localhost:8000/solicitudes/listar/cliente/${clientId}`
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
          <div className="solicitude" key={element._id}>
            <h3>{element.client.name}</h3>
            <strong>{element.servicetitle}</strong>
            <p>{element.description}</p>
            {element.images.map((image) => {
              return (
                <img
                  className="image__solicitude__clientProfile"
                  src={image.url}
                  alt=""
                />
              );
            })}
          </div>
        );
      })}
    </div>
  )
}

export default ClientSolicitudes
