import Axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./PilotCard.css";

function PilotCard({ pilot }) {
  const [viewShow, setViewShow] = useState("portfolio");
  const [equipments, setEquipments] = useState([]);
  const [certificates, setCertificates] = useState([]);
  const [services, setServices] = useState([]);
  const pilotId = pilot._id;

  useEffect(() => {
    setViewShow("portfolio");
  }, [pilot]);

  const fetchData = (tag) => {
    Axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/${tag}/listar/piloto/${pilotId}`,
      method: `GET`,
    })
      .then(({ data }) => {
        switch (tag) {
          case "equipments":
            setEquipments(data);
          case "certificates":
            setCertificates(data);
          case "servicios":
            setServices(data);
        }
      })
      .catch((error) => alert(error));
  };

  return (
    <div class="pilotcard-container">
      {viewShow == "portfolio" && (
        <div className="pilotcard-photos">
          {pilot &&
            pilot.media.map((image, index) => (
              <img className="pilotcard-photo" src={image.url} alt="" />
            ))}
        </div>
      )}
      {viewShow == "equipos" && (
        <div className="equipment-wrap">
          {equipments.map((equipment) => (
            <div className="equipmentscontainer">
              <img
                src={equipment.url}
                alt="pdfIcon"
                className="image-equipment"
              />
              <div className="element-equipment-container">
                <p className="element-equipment">{`${equipment.brand} - ${equipment.model}`}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {viewShow == "certificaciones" && (
        <div className="certificate-container">
          {certificates.map((certificate) => {
            return (
              <div className="certificate">
                <p className="element">{certificate.title}</p>
                <a
                  href={certificate.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="certificateurl"
                >
                  <img
                    src="https://firebasestorage.googleapis.com/v0/b/droneservice-cc42f.appspot.com/o/src%2Ficons%2Fdocument-icon.png?alt=media&token=57d39b43-a362-40ce-9652-08ef9af6388f"
                    alt="pdfIcon"
                    className="certificateicon"
                  />
                </a>
              </div>
            );
          })}
        </div>
      )}
      {viewShow == "servicios" && (
        <div className="services-wrap">
          {services.map((service) => {
            return (
              <div className="ServicesContainer">
                <img src={service.url} alt="miniatura"></img>
                <p>{service.name}</p>
              </div>
            );
          })}
        </div>
      )}
      <div className="pilotcard-selector">
        <div
          onClick={() => setViewShow("portfolio")}
          className={
            viewShow == "portfolio" ? "tag-selector-selected" : "tag-selector"
          }
        >
          <h2>Portafolio</h2>
        </div>
        <div
          onClick={() => {
            setViewShow("equipos");
            fetchData("equipments");
          }}
          className={
            viewShow == "equipos" ? "tag-selector-selected" : "tag-selector"
          }
        >
          <h2>Equipos</h2>
        </div>
        <div
          onClick={() => {
            setViewShow("certificaciones");
            fetchData("certificates");
          }}
          className={
            viewShow == "certificaciones"
              ? "tag-selector-selected"
              : "tag-selector"
          }
        >
          <h2>Certificaciones</h2>
        </div>
        <div
          onClick={() => {
            setViewShow("servicios");
            fetchData("servicios");
          }}
          className={
            viewShow == "servicios" ? "tag-selector-selected" : "tag-selector"
          }
        >
          <h2>Servicios</h2>
        </div>
      </div>
      <div className="pilotcard-description">
        <h1>{pilot.name}</h1>
        <p>{pilot.description}</p>
        <div class="product">
          <div class="buttons">
            <Link to="/solicitud">
              <button class="add">Haz tu solicitud</button>
            </Link>
            <button class="like">
              <span>♥</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PilotCard;
