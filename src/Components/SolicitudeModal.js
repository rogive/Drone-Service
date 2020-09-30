import React from "react";
import Backdrop from "./Backdrop";
import "./SolicitudeModal.css";

function SolicitudeModal({ children, show, modalClosed }) {
  console.log(show);
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
        {children}
      </div>
    </>
  );
}

export default SolicitudeModal;
