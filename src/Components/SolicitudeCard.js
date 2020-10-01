import React from "react";
import "./SolicitudeCard.css";

function SolicitudeCard({ solicitude }) {
  return (
    <div class="solicitude-card-container">
      <div className="solicitude-card-photos">
        {solicitude &&
          solicitude.images.map((image, index) => {
            if (index < 3) {
              return <img className="solicitude-card-photo" src={image.url} alt="" key={solicitude._id} />;
            }
          })}
      </div>
      <div className="solicitude-card-description">
        <h1>{solicitude.servicetitle}</h1>
        <p>
          {solicitude.description}
        </p>
      </div>
    </div>
  );
}

export default SolicitudeCard
