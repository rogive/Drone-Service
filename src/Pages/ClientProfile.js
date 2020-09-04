import React from "react";
import GlobalContainer from "../utils/GlobalStyles";
import "./ClientProfile.css";
import UpdateClientProfile from "../Components/UpdateClientProfile";

function ClientProfile() {
  return (
    <GlobalContainer>
      <div className="clientProfile">
        <div className="title__clientProfile">
          <h1>Hola Jonathan!</h1>
          <button className="solicitud__button">Haz una solicitud</button>
        </div>
        <div className="content__clientProfile">
          <div className="solicitudes__clientProfile">
            <h2>Tus solicitudes</h2>
          </div>
          <div className="Updateprofile__clientProfile">
            <UpdateClientProfile />
          </div>
        </div>
      </div>
    </GlobalContainer>
  );
}

export default ClientProfile;
