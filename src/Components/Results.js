import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Results.css";

function Results({ info }) {
  const userType = sessionStorage.getItem("userType");
  const [pilotsDb, setPilotsDb] = useState([]);
  const [solicitudesDb, setSolicitudesDb] = useState([]);

  useEffect(() => {
    if (userType === "pilot") {
      setSolicitudesDb([]);
      const solicitudes = async () => {
        try {
          const result = await axios.get(
            "http://localhost:8000/solicitudes/listar"
          );
          setSolicitudesDb(result.data);
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
  }, [info]);

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
                <img className="image__solicitude" src={element.image} alt="" />
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Results;
