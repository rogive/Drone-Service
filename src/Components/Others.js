import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import { storage } from '../firebase';
import FileForm from './FileForm';
import axios from 'axios';
import "./Others.css"

const DocumentsContainer = styled.div`
  width: 100%;
  background-color: #66b2ff;
  color: black;
  border-radius: 2rem;
  padding: 1rem;
  margin-bottom: 2rem;
  p{
    padding: 1rem;
    text-align: left;
  }
`

const IconContainer = styled.div`
  width: 100%;
  text-align:center;
  padding-top: 3rem;
  img{
    width: 15rem;
    height: 15rem;
    border-radius: 3rem;
    filter: grayscale(100%);
  }
`

const AttachContainer = styled.div`
  padding-top:2rem;
  padding-bottom:2rem;
`

const ComponentContainer = styled.div`
  p{
    padding-top: 2rem;
    text-align: justify;
    font-size: 1.2rem;
  }
  h2{
    font-size: 2rem;
  }
`


function OthersComponent({
  others
  }) {
    return others.map((other) => {
      return(
        <DocumentsContainer>
          <p>{other.name}</p>
        </DocumentsContainer>
  
      );
  });
  
}

function Others() {
  const [documents, setDocuments] = useState([])
  const [name, setName] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)
  const [showadd, setShowAdd] = useState(false)
  const pilotId = useState(sessionStorage.getItem("userId"))

  useEffect( () => {
    axios({
      url: `http://localhost:8000/others/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setDocuments( data ))
      .catch((error) => setError({ error }))
  }, [])

  function handleChange(event) {
    if(!event.target.files[0]) return
    console.log("hola")
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
    <ComponentContainer>
      <h2>Otros</h2>
      <IconContainer>
        <img src="https://cdn3.iconfinder.com/data/icons/election-world-1/64/senate-congress-government-senator-political-512.png" alt="Hola"></img>
      </IconContainer>
      <p className="description-other">
        Aca podras incluir todos los certificados que te han permitido conocer, aprender o obtener experiencia
        en algún area especifica. Recuerda que solo se muestra el título del documento, ademas los documentos
        son validados y se les asigna un logo especial para darle un valor agregado al mostrar tu perfil a los clientes.
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
    </ComponentContainer>
  )
}

export default Others