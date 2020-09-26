import React, { useState } from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";
import { storage } from '../firebase';
import "./FileButton.css"

function Button({onChange, name, onSubmit}) {
  return (
    <div className="fullcontaineruploadimage">
      <div className="boxlabelnameimage">
        <label htmlFor="inputfile"
               className="labelnameimage">{ name || "Adjuntar un documento"}
        </label>
      </div>
      <div className="boxbuttonsimage">
        <input type="file"
            id="inputfile"
            name="inputfile"
            onChange={onChange}
            className="inputfile"
            style={{display: 'none'}}
            />
        <label 
            htmlFor="inputfile" 
            className="labelbuttonadddocument"
            >Abrir</label>
        <button type="button"
                id="buttonuploadimage"
                name="buttonuploadimage"
                className="buttonuploadimage" 
                onClick={onSubmit}
                >subir</button>
        <label htmlFor="buttonuploadimage" 
              className="labelbuttonuploaddocument"
              >Cargar</label>
      </div>
    </div>
  )
}

export default Button

  