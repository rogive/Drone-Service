import React, {useState} from "react";
import Backdrop from "./Backdrop";
import "./SolicitudeModal.css";

function SolicitudeModal({ show, modalClosed, solInfo, moreInfo, contactInfo }) {
  const [showCard, setShowCard] = useState(0)
  let selectorClassName0 = 'selector'
  let selectorClassName1 = 'selector'
  if (showCard === 0) {
    selectorClassName0 = 'selector-active'
  } else {
    selectorClassName1 = 'selector-active'
  }

  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="solicitude-modal"
        style={{
          transform: show ? "translateY(0)" : "translateY(-100vh)",
          opacity: show ? 1 : 0,
        }}
      >
        {
          showCard === 0 ? solInfo: moreInfo
        }
        <a className={selectorClassName0} onClick={ () => setShowCard(0)}>Solicitud
        </a>
        <a className={selectorClassName1} onClick={ () => setShowCard(1)}>Más información</a>
      </div>
    </>
  );
}

export default SolicitudeModal;
