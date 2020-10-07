import React from "react";
import GlobalContainer from "../utils/GlobalStyles";
import "./ClientProfile.css";
import UserProfile from "../Components/UserProfile";
import { useSelector } from "react-redux";
import Button from "../Components/Button"
import ClientSolicitudes from "../Components/ClientSolicitudes";

function ClientProfile() {
  const clientName = useSelector((state) => state.userName);

  return (
    <GlobalContainer>
      <div className="clientProfile">
        <div className="title__clientProfile">
          <h1>Hola {clientName}</h1>
          <Button title="Haz una solicitud" linkto="/solicitud"></Button>
        </div>
        <div className="content__clientProfile">
          <div className="solicitudes__clientProfile">
            <h2>Tus solicitudes</h2>
            <ClientSolicitudes/>
          </div>
          <div className="Updateprofile__clientProfile">
            <UserProfile />
          </div>
        </div>
      </div>
    </GlobalContainer>
  );
}

export default ClientProfile;
