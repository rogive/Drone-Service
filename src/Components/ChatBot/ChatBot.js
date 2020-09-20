import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MenuOptions from "./MenuOptions";
import LinkList from "./LinkList";

const config = {
  botName: "DroneBot",
  initialMessages: [
    createChatBotMessage("Hola soy DroneBot, estoy aquí para ayudarte ¿Que deseas encontrar?", {
    widget: "menuOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "rgba(10,10,200, 1)",
    },
    chatButton: {
      backgroundColor: "#376B7E",
    },
  },
  widgets: [
      {
        widgetName: "menuOptions",
        widgetFunc: (props) => <MenuOptions {...props} />,
      },
      {
        widgetName: "registerLink",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              linkto: "/user-registry",
              onClick: ()=>{sessionStorage.setItem('userType', 'client')},
              title: "Tengo un Servicio",
              id: 10,
            },
            {
              linkto: "/user-registry",
              onClick: ()=>{sessionStorage.setItem('userType', 'pilot')},
              title: "Soy Piloto",
              id: 11,
            },
          ],
        },
      },
      {
        widgetName: "aboutUs",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              linkto: "/about",
              title: "Acerca de Nosotros",
              id: 20,
            },
          ],
        },
      },
      {
        widgetName: "blog",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              linkto: "/blogs",
              title: "Blogs",
              id: 30,
            },
          ],
        },
      },
      {
        widgetName: "explorer",
        widgetFunc: (props) => <LinkList {...props} />,
        props: {
          options: [
            {
              linkto: "/explora",
              title: "Explorador",
              id: 40,
            },
          ],
        },
      },
  ],
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hola")) {this.actionProvider.response("saludar")}
    else if (lowerCaseMessage.includes("registr")) {this.actionProvider.response("registrar")}
    else if (lowerCaseMessage.includes("portafolio")) {this.actionProvider.response("explorar")}
    else if (lowerCaseMessage.includes("quienes")) {this.actionProvider.response("aboutus")}
    else if (lowerCaseMessage.includes("noticia")) {this.actionProvider.response("blog")}
    else {this.actionProvider.response("default")}
  }
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  handleRegister = () => {
    const message = this.createChatBotMessage(
      `Genial, aqui te dejo dos opciones de registro. \nLa primera corresponde a todo usuario que requiera un piloto para su servicio.\nLa segunda opción es para todo piloto que quiera ofrecer su servicio`,
      {
        widget: "registerLink",
      }
    );

    this.updateChatbotState(message);
  }

  handleAboutUs = () => {
    const message = this.createChatBotMessage(
      "Puedes encontrar mas información de nosotros en la siguiente opción",
      {
        widget: "aboutUs",
      }
    );

    this.updateChatbotState(message);
  }
  
  handleBlogs = () => {
    const message = this.createChatBotMessage(
      "Permanece actualizado con todas las últimas noticias del mundo drone en nuestro blog, ingresa aquí",
      {
        widget: "blogs",
      }
    );

    this.updateChatbotState(message);
  }

  handleExplorer = () => {
    const message = this.createChatBotMessage(
      "Encuentra todo el material de nuestros pilotos profesionales aquí",
      {
        widget: "explorer",
      }
    );

    this.updateChatbotState(message);
  }

  response(props) {
    switch (props){
      case "saludar":
        this.updateChatbotState(this.createChatBotMessage("¡Hola! Hoy es un gran día para empezar nuevos proyectos con drones."))
      break
      case "registrar":
        this.updateChatbotState(this.createChatBotMessage("Genial, puedes ingresar aquí para realizar tú registro. Solo recuerda que si eres piloto, debes ingresar en la segunda opción",
        {widget: "registerLink"}))
      break
      case "explorar":
        this.updateChatbotState(this.createChatBotMessage("Encuentra todo el material de nuestros pilotos profesionales aquí",
        {widget: "explorer"}))
      break
      case "aboutus":
        this.updateChatbotState(this.createChatBotMessage("Puedes encontrar mas información de nosotros en el siguiente enlace",
        {widget: "aboutUs"}))
      break
      case "blog":
        this.updateChatbotState(this.createChatBotMessage("Permanece actualizado con todas las últimas noticias del mundo drone en nuestro blog, ingresa aquí",
        {widget: "blog"}))
      break
      default:
        this.updateChatbotState(this.createChatBotMessage("No se como ayudarte con eso, pero mejoraré muy pronto"))
      break
    }
  }

  updateChatbotState(message) {
    this.setState(prevState => ({
    	...prevState, messages: [...prevState.messages, message]
    }))
  }
}

export { config, MessageParser, ActionProvider}