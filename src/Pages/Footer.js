import React from "react";
import "./Footer.css";
import github_logo from "../img/github_logo.png";

function Footer() {
  return (
    <footer>
      <div>
        <a href="https://github.com/rogive/droneservice">
          <img src={github_logo} />
        </a>
      </div>
      <h2>Copyright © Todos los derechos reservados 2020</h2>
    </footer>
  );
}

export default Footer;
