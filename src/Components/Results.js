import React, { useEffect, useState } from "react";
import axios from "axios";

function Results({ info }) {
  const [pilotsDb, setPilotsDb] = useState([]);

  useEffect(() => {
    setPilotsDb([]);

    const filterPilots = async () => {
      try {
        const result = await axios.get(
          "http://localhost:8000/pilotos/filtrar",
          { info }
        );
        setPilotsDb(result.data);
      } catch (error) {
        alert(error);
      }
    };
    filterPilots();
  }, [info]);

  return (
    <div>
      <h2>Resultados</h2>
      {pilotsDb
        ? pilotsDb.map((element) => {
            return (
              <div key={element._id}>
                <img src={element.image} alt="" />
                <h3>{element.name}</h3>
                <p>{element.description}</p>
              </div>
            );
          })
        : null}
    </div>
  );
}

export default Results;
