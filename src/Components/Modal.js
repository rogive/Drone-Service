import React, { useEffect } from "react";
import "./Modal.css";

function Modal({ handleClose, show, children }) {
  useEffect(() => {
    let modal = document.getElementById("modal");
    window.onclick = function (event) {
      if (event.target == modal) handleClose();
    };
  }, []);

  let showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
    <div id="modal" className={showHideClassName}>
      {children}
    </div>
  );
}

export default Modal;
