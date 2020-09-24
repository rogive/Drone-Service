import React from "react";
import Backdrop from "./Backdrop";
import "./NewModal.css";

function NewModal({ children, show, modalClosed }) {
  console.log(show);
  return (
    <>
      <Backdrop show={show} clicked={modalClosed} />
      <div
        className="newmodal"
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

export default NewModal;
