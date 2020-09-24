import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { storage } from '../firebase';
import axios from 'axios';
import FileButton from './FileButton'
import "./Certificates.css"


const CertificatesComponentContainer = styled.div`
  display: flex;
  justify-content: center;
`

const DocumentsContainer = styled.div`
  width: 70%;
  height: 3rem;
  display: flex;
  justify-content: space-between;
  background-color: rgb(0, 23, 105);
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  color: black;
  border-radius: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  .element{
    width: 80%;
    padding: 1rem 1rem 1rem 3rem;
    font-size: 1.4rem;;
    text-align: left;
    font-style: italic;
    color: white;
  }
  .icon{
    width: 1.5rem;
    height: 1.5rem;
    filter: invert(1);
  }
  .url{
    margin-right: 1.5rem;
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
  h2{
    font-size: 2rem;
  }
  .description{
    padding-top: 2rem;
    text-align: justify;
    font-size: 1.2rem;
  }
`

function CertificatesComponent({
  certificates
  }) {
    return certificates.map((certificate) => {
      return(
        <DocumentsContainer>
          <p className="element">{certificate.name}</p>
          <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="url">
            <img src="https://firebasestorage.googleapis.com/v0/b/droneservice-cc42f.appspot.com/o/src%2Ficons%2Fdocument-icon.png?alt=media&token=57d39b43-a362-40ce-9652-08ef9af6388f" 
                 alt="pdfIcon"
                 className="icon"
            />
          </a>
        </DocumentsContainer>
  
      );
    });
  
  }
  
function Certificates() {
  const [certificates, setCertificates] = useState([])
  const [name, setName] = useState('')
  const [pilotId, setPilotid] = useState(sessionStorage.getItem("userId"))
  const [urlDocument, setUrlDocument] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)

  useEffect( () => {
    axios({
      url: `http://localhost:8000/certificados/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setCertificates( data ))
      .catch((error) => setError({ error }))
  }, [])

  function handleChange(event) {
    if(!event.target.files[0]) return
    setSelectedFile(event.target.files[0])
    setName(event.target.files[0].name)
  }

  function handleSubmit(event) {
    event.preventDefault();
    const uploadDocument = storage.ref(`Pilots/Pilot-${pilotId}/Certificates/` + name).put(selectedFile);

    uploadDocument.on('state_changed', 
      (snap) => {}, 
      (error) => {alert(error)},
      () => {
        storage.ref(`Pilots/Pilot-${pilotId}/Certificates/`).child(name).getDownloadURL().then(url => {
          setUrlDocument(url)
          axios({
            url: 'http://localhost:8000/certificados/crear',
            method: 'POST',
            data: {
              pilotId: pilotId,
              name: name,
              url: url,
              type: "document"
            }
          }).then(({ data }) => setCertificates( certificates.concat(data) ))
          .catch((error) => setError(error));
        });
      }
    )
  }

  return(
    <ComponentContainer>
      <h2>Certificados</h2>
      <IconContainer>
        <img src="https://cdn.pixabay.com/photo/2017/06/22/02/16/computer-icon-2429310__340.png" alt="iconCertificates"></img>
      </IconContainer>
      <p className="description">Este espacio corresponde a las certificaciones que relacionan
        la cantidad de horas, conocimiento o experiencia que hayas tenido
        en algun área específica.
      </p>
      <AttachContainer>
        <FileButton onChange={handleChange} onSubmit={handleSubmit} name={name}/>
      </AttachContainer>
      <CertificatesComponentContainer>
        <CertificatesComponent certificates = {certificates}/>
      </CertificatesComponentContainer>
    </ComponentContainer>
  )
}

export default Certificates