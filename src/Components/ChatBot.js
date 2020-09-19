import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";
import MenuOptions from "./MenuOptions";

const config = {
  botName: "DroneBot",
  initialMessages: [
    createChatBotMessage("Hola soy DroneBot, ¿En que te puedo ayudar?", {
    widget: "menuOptions",
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: "#376B7E",
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
  ],
}

class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()
    
    if (lowerCaseMessage.includes("hola")) {
      this.actionProvider.res("hola")
    }
    if (lowerCaseMessage.includes("piloto")) {
      this.actionProvider.res("piloto")
    }
  }
}

class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }
  
  res(props) {
    switch (props){
      case "hola":
        this.updateChatbotState(this.createChatBotMessage("¡Hola! ¿Como estas?"))
      break
      case "piloto":
        this.updateChatbotState(this.createChatBotMessage("En el explorador podras encontrar todo el portafolio de nuestros pilotos, solo debes registrarte previamente como cliente"), {widget: "menuOptions"})
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