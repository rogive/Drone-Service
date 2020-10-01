import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./PilotCard.css";

function PilotCard({ pilot }) {
  const [viewShow, setViewShow] = useState("portfolio");
  console.log(pilot);
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
      {viewShow == "equipos" && <div>Equipos</div>}
      {viewShow == "certificaciones" && <div>Certificaciones</div>}
      {viewShow == "servicios" && <div>Servicios</div>}
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
          onClick={() => setViewShow("equipos")}
          className={
            viewShow == "equipos" ? "tag-selector-selected" : "tag-selector"
          }
        >
          <h2>Equipos</h2>
        </div>
        <div
          onClick={() => setViewShow("certificaciones")}
          className={
            viewShow == "certificaciones"
              ? "tag-selector-selected"
              : "tag-selector"
          }
        >
          <h2>Certificaciones</h2>
        </div>
        <div
          onClick={() => setViewShow("servicios")}
          className={
            viewShow == "servicios" ? "tag-selector-selected" : "tag-selector"
          }
        >
          <h2>Servicios</h2>
        </div>
      </div>
      <div className="pilotcard-description">
        <h1>{pilot.name}</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. A,
          temporibus quisquam? Saepe officiis odio consectetur maxime
          perferendis, fuga praesentium in eligendi alias dolorum, earum iste
          temporibus, sequi dolor mollitia consequuntur!
        </p>
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
