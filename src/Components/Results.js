import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import "./Results.css";
import { Payment } from "./Payment"
import NewModal from "./NewModal";
import PilotCard from "./PilotCard";
import SolicitudeModal from "./SolicitudeModal";
import SolicitudeCard from "./SolicitudeCard";
import SolicitudeCardMoreInfo from "./SolicitudeCardMoreInfo";
import Pilot from "./Pilot";
import nameImg from "../img/name.png"
import phoneImg from "../img/phone.png"
import mailImg from "../img/mail.png"

function Results({ info }) {
  const userType = sessionStorage.getItem("userType");
  const [pilotsDb, setPilotsDb] = useState([]);
  const [solicitudesDb, setSolicitudesDb] = useState([]);
  const [modelToggle, setModelToggle] = useState(false);
  const [solModalToggle, setSolModalToggle] = useState(false);
  const [pilotCard, setPilotCard] = useState("");
  const [solicitudeCard, setSolicitudeCard] = useState("");
  const pilotId = sessionStorage.getItem("userId");


  useEffect(() => {
    if (userType === "pilot") {
      setSolicitudesDb([]);
      const solicitudes = async () => {
        try {
          const result = await axios.post(
            `${process.env.REACT_APP_BACKEND_URL}/solicitudes/filtrar`,
            { info, pilotId }
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
            `${process.env.REACT_APP_BACKEND_URL}/pilot/filtrar`,
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
    setSolModalToggle(false);
  };

  return (
    <>
      {userType === "pilot" && <h2>Solicitudes</h2>}
      {userType === "pilot"
        ? solicitudesDb
          ? solicitudesDb.map((element) => {
            return (
              <div className="solicitude" key={element._id}>
                <div>
                  {element.images.map((image, index) => {
                    if (index < 1) {
                      return (
                        <img
                          className="image__solicitude"
                          src={image.url}
                          alt=""
                          key={element._id}
                        />
                      );
                    }
                  })}
                </div>
                <div className="solicitude-right">
                  <h2 className="solicitude-title">{element.servicetitle}</h2>
                  <p>{element.description}</p>
                  <ul className="solicitude-contact-info">
                    <li>
                      <img src={nameImg} />
                      {element.clientName}
                    </li>
                    <li>
                      <img src={phoneImg} />
                      {element.phone}
                    </li>
                    <li>
                      <img src={mailImg} />
                      {element.clientEmail}
                    </li>
                  </ul>
                  <div className="buttons">
                    <button
                      onClick={() => {
                        setSolicitudeCard(element);
                        setSolModalToggle(true);
                      }}
                    >
                      Ver más
                      </button>
                  </div>
                </div>
              </div>
            );
          })
          : null
        : pilotsDb
          ? pilotsDb.map((element) => {
            return (
              <Pilot element={element} setPilotCard={setPilotCard} setModelToggle={setModelToggle} />
            );
          })
          : null}
      <NewModal show={modelToggle} modalClosed={handleClose}>
        <PilotCard pilot={pilotCard} />
      </NewModal>
      <SolicitudeModal show={solModalToggle} modalClosed={handleClose}
        solInfo={<SolicitudeCard solicitude={solicitudeCard} />}
        moreInfo={<SolicitudeCardMoreInfo solicitude={solicitudeCard} />}
        contactInfo={null}
      />
    </>
  );
}

export default Results;
