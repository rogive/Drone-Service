import React from 'react'
import "./FileButton.css"

function Button(props) {
  return (
    <div className="fullcontainerupload">
      <div className={ props.number === 1 ? "boxlabelnameimage1" : "boxlabelnameimage2"}>
        <label htmlFor="inputfileadd"
               className="labelnameimage">{ props.name || `Adjuntar ${props.type==="document"? "un documento" : "una imagen"}`}
        </label>
      </div>
      <div className={ props.number === 1 ? "boxbuttonsimage1" : "boxbuttonsimage2"}>
        <input type="file"
            id="inputfileadd"
            name="inputfileadd"
            onChange={props.onChange}
            className="inputfileadd"
            style={{display: 'none'}}
            accept={props.type==="document"? "pdf" : ".jpg, .jpeg, .png"}
            />
        <label 
            htmlFor="inputfileadd" 
            className={ props.number === 1 ? "labelbuttonadddocument1" : "labelbuttonadddocument2"}
            >Examinar</label>
        {props.number === 2 && (
          <>
            <button type="button"
                    id="buttonuploadimage"
                    name="buttonuploadimage"
                    className="buttonuploadimage" 
                    onClick={props.onSubmit}
                    >subir</button>
            <label htmlFor="buttonuploadimage" 
                    className={"labelbuttonuploaddocument"}
                  >Cargar</label>
          </>
        )}
      </div>
    </div>
  )
}

export default Button

  