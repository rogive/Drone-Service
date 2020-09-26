import React, {useState, useEffect} from 'react';
import { storage } from '../firebase';
import FileForm from './FileForm';
import axios from 'axios';
import "./Others.css"

function OthersComponent({ others }) {
  return others.map((other) => {
    return(
      <div className="documentscontainerothers">
        <p className="elementothers">{other.title}</p>
        <a href={other.url} target="_blank" rel="noopener noreferrer" className="urlothers">
          <img src="https://firebasestorage.googleapis.com/v0/b/droneservice-cc42f.appspot.com/o/src%2Ficons%2Fdocument-icon.png?alt=media&token=57d39b43-a362-40ce-9652-08ef9af6388f" 
                alt="pdfIcon"
                className="iconothers"
          />
        </a>
      </div>
    )
  })
}

function Others() {
  const [documents, setDocuments] = useState([])
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)
  const [showadd, setShowAdd] = useState(false)
  const pilotId = sessionStorage.getItem("userId")

  useEffect( () => {
    console.log("data: ")
    axios({
      url: `http://localhost:8000/others/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setDocuments( data ) )
      .catch((error) => setError({ error }))
  }, [])

  function handleChange(event) {
    if(!event.target.files[0]) return
    setSelectedFile(event.target.files[0])
    setName(event.target.files[0].name)
  }

  function onSubmit( data ) {
    const uploadDocument = storage.ref(`Pilots/Pilot-${pilotId}/Others/` + name).put(selectedFile);
    uploadDocument.on('state_changed', 
      (snap) => {}, 
      (error) => {alert(error)},
      () => {
        storage.ref(`Pilots/Pilot-${pilotId}/Others/`).child(name).getDownloadURL().then(url => {
          axios({
            url: 'http://localhost:8000/others/crear',
            method: 'POST',
            data: { ...data,
              pilotId,
              name,
              url,
              type: "document"
            }
          }).then(({ data }) => {
            setDocuments( documents.concat(data) )
            setShowAdd(!showadd)
            console.log(data)
          }
          )
          .catch((error) => setError(error));
        });
      }
    )
  }

  return(
    <>
      <h2 className="titleothers">Otros</h2>
      <div className="iconcontainerothers">
        <img src="https://cdn3.iconfinder.com/data/icons/election-world-1/64/senate-congress-government-senator-political-512.png" 
              alt="Hola"
              className="imagecontentothers"
              ></img>
      </div>
      <p className="description-other">
        Aca podras incluir todos los documentos, seminarios, congresos u otros eventos que te han permitido conocer, 
        aprender o obtener experiencia en algún area especifica relacionada a operaciones con Drones. Recuerda que 
        solo se muestra el título del documento.
      </p>
      <br/>
      <button className="add-document"
              id="add-document"
              onClick={()=>setShowAdd(!showadd)}
              >+ Añadir documento</button>
      {showadd && (
        <FileForm onChange={handleChange} onSubmit={onSubmit} name={name} type="others"/>
      )}
      <div className="documentscomponentcontainer">
        <OthersComponent others = {documents}/>
      </div>
    </>
  )
}

export default Others