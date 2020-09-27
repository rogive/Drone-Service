import React from 'react'
import "./FileButton.css"

function Button({onChange, name, onSubmit, number, type}) {
  return (
    <div className="fullcontainerupload">
      <div className={ number === 1 ? "boxlabelnameimage1" : "boxlabelnameimage2"}>
        <label htmlFor="inputfileadd"
               className="labelnameimage">{ name || `Adjuntar ${type==="document"? "un documento" : "una imagen"}`}
        </label>
      </div>
      <div className={ number === 1 ? "boxbuttonsimage1" : "boxbuttonsimage2"}>
        <input type="file"
            id="inputfileadd"
            name="inputfileadd"
            onChange={onChange}
            className="inputfileadd"
            style={{display: 'none'}}
            accept={type==="document"? "pdf" : ".jpg, .jpeg, .png"}
            />
        <label 
            htmlFor="inputfileadd" 
            className={ number === 1 ? "labelbuttonadddocument1" : "labelbuttonadddocument2"}
            >Examinar</label>
        {number === 2 && (
          <>
            <button type="button"
                    id="buttonuploadimage"
                    name="buttonuploadimage"
                    className="buttonuploadimage" 
                    onClick={onSubmit}
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