import React from "react";
import { Link } from "react-router-dom";
import "./PilotCard.css";

function PilotCard({ pilot }) {
  return (
    <div class="pilotcard-container">
      <div className="pilotcard-photos">
        {pilot &&
          pilot.media.map((image, index) => {
            if (index < 3) {
              return <img className="pilotcard-photo" src={image.url} alt="" />;
            }
          })}
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
