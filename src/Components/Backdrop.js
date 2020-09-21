import React from "react";
import "./Backdrop.css";

function Backdrop({ show, clicked }) {
  return show ? <div className="back" onClick={clicked}></div> : null;
}

export default Backdrop;
