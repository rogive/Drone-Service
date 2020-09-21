import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Results.css";

import NewModal from "./NewModal";
import PilotCard from "./PilotCard";

function Results({ info }) {
  const userType = sessionStorage.getItem("userType");
  const [pilotsDb, setPilotsDb] = useState([]);
  const [solicitudesDb, setSolicitudesDb] = useState([]);
  const [modelToggle, setModelToggle] = useState(false);
  const [pilotCard, setPilotCard] = useState("");

  useEffect(() => {
    if (userType === "pilot") {
      setSolicitudesDb([]);
      const solicitudes = async () => {
        try {
          const result = await axios.post(
            "http://localhost:8000/solicitudes/filtrar",
            { info }
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

  const handleClose = () => {
    setModelToggle(false);
  };

  return (
    <>
      {userType === "pilot" && <h2>Solicitudes</h2>}
      {userType === "pilot"
        ? solicitudesDb
          ? solicitudesDb.map((element) => {
              return (
                <div className="solicitude" key={element._id}>
                  <h3>{element.client.name}</h3>
                  <p>lorem</p>
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
              // <div className="pilot-list-container">
              //   <h1>{element.name}</h1>
              //   <div>
              //     {element.media.map((image, index) => {
              //       if (index < 3) {
              //         return (
              //           <img
              //             className="image__solicitude"
              //             src={image.url}
              //             alt=""
              //           />
              //         );
              //       }
              //     })}
              //   </div>
              // </div>
              <div className="solicitude" key={element._id}>
                <div>
                  {element.media.map((image, index) => {
                    if (index < 1) {
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
                <div className="solicitude-right">
                  <h2 className="solicitude-title">{element.name}</h2>
                  <h3>{element.description}</h3>

                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas sunt ducimus incidunt dolor totam, beatae id
                    officia alias eaque explicabo, quas distinctio pariatur est
                    tempora temporibus laudantium quae asperiores neque.
                  </p>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Voluptas sunt ducimus incidunt dolor totam, beatae id
                    officia alias eaque explicabo, quas distinctio pariatur est
                    tempora temporibus laudantium quae asperiores neque.
                  </p>

                  <div className="buttons">
                    <button
                      onClick={(event) => {
                        setPilotCard(element);
                        setModelToggle(true);
                      }}
                    >
                      Ver más
                    </button>
                  </div>
                </div>
              </div>
            );
          })
        : null}
      <NewModal show={modelToggle} modalClosed={handleClose}>
        <PilotCard pilot={pilotCard} />
      </NewModal>
    </>
  );
}

export default Results;
