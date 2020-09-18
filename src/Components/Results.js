import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Results.css";

function Results({ info }) {
  const userType = sessionStorage.getItem("userType");
  const [pilotsDb, setPilotsDb] = useState([]);
  const [solicitudesDb, setSolicitudesDb] = useState([]);
  const [payFlag, setPayFlag] = useState(0);
  const pilotId = sessionStorage.getItem("userId");

  useEffect(() => {
    if (userType === "pilot") {
      setSolicitudesDb([]);
      const solicitudes = async () => {
        try {
          const result = await axios.post(
            "http://localhost:8000/solicitudes/filtrar",
            { info, pilotId }
          );
          setSolicitudesDb(result.data);
          console.log(result.data)
        } catch (error) {
          alert(error);
        }
      };
      solicitudes();
    } else {
      setPilotsDb([]);
      const filterPilots = async () => {
        try {
          const result = await axios.post(
            "http://localhost:8000/pilotos/filtrar",
            { info }
          );
          setPilotsDb(result.data);
        } catch (error) {
          alert(error);
        }
      };
      filterPilots();
    }
  }, [info, payFlag]);

  let handlePayment = (e) => {
    const solicitudeId = e.target.value;
    
    setPayFlag(payFlag + 1);
    
    const addPayedSolicitudes = async () => {
      try {
        const result = await axios({
          method: "put",
          url: "http://localhost:8000/solicitudes/pagarSolicitud",
          data: {solicitudeId, pilotId}
        });
        // alert(result.data)
      } catch (error) {
        alert(error);
      }
    };
    addPayedSolicitudes();
  }

  return (
    <div>
      {userType === "pilot" ? <h2>Solicitudes</h2> : <h2>Pilotos</h2>}
      {userType === "pilot"
        ? solicitudesDb
          ? solicitudesDb.map((element) => {
              return (
                <div className="solicitude" key={element._id}>
                  <h3>{element.client.name}</h3>
                  <p>{element.description}</p>
                  {element.images.map((image) => {
                    return (
                      <img
                        className="image__solicitude"
                        src={image.url}
                        alt=""
                      />
                    );
                  })}
                  {element.client.phone.includes("X")?<button onClick={handlePayment} value={element._id}>Pagar</button>:null}
                  <p>{`Teléfono: ${element.client.phone}`}</p>
                </div>
              );
            })
          : null
        : pilotsDb
        ? pilotsDb.map((element) => {
            return (
              <div className="solicitude" key={element._id}>
                <h3>{element.name}</h3>
                <p>{element.description}</p>
                {element.media.map((image, index) => {
                  if (index < 3) {
                    return (
                      <img
                        className="image__solicitude"
                        src={image.url}
                        alt=""
                      />
                    );
                  }
                })}
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Results;
