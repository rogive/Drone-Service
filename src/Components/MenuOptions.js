import React from "react";

import "./MenuOptions.css";

const MenuOptions = (props) => {
  const options = [
    { text: "Registro", handler: () => {}, id: 1 },
    { text: "Acerca de Nosotros", handler: () => {}, id: 2 },
    { text: "Blogs", handler: () => {}, id: 3 },
    { text: "Explorador", handler: () => {}, id: 4 },
  ];

  const optionsMarkup = options.map((option) => (
    <button
      className="menu-option-button"
      key={option.id}
      onClick={option.handler}
    >
      {option.text}
    </button>
  ));

  return <div className="menu-options-container">{optionsMarkup}</div>;
};

export default MenuOptions;