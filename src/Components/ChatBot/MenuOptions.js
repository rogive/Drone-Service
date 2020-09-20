import React from "react";
import "./MenuOptions.css";

const MenuOptions = (props) => {
  const options = [
    { text: "Registro",
      handler: props.actionProvider.handleRegister,
      id: 1
    },
    { text: "Acerca de Nosotros",
      handler: props.actionProvider.handleAboutUs,
      id: 2
    },
    { text: "Blog",
      handler: props.actionProvider.handleBlogs,
      id: 3
    },
    { text: "Explorador",
      handler: props.actionProvider.handleExplorer,
      id: 3
    },
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