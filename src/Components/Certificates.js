import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { storage } from '../firebase';
import axios from 'axios';

const DocumentsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  background-color: #66b2ff;
  color: black;
  border-radius: 2rem;
  align-items: center;
  margin-bottom: 2rem;
  .element{
    width: 80%;
    padding: 1rem 1rem 1rem 3rem;
    font-size: 1.1vw;
    font-style: italic;
  }
  .icon{
    width: 2vw;
    height: 2vw;
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
  font-size: 1.1vw;
  h2{
  }
  .description{
    padding-top: 2rem;
    justify-content: space-between;
  }
`

function CertificatesComponent({
  certificates
  }) {
    return certificates.map((certificate) => {
      return(
        <DocumentsContainer>
          <p className="element">{certificate.name}</p>
          <a href={certificate.url} target="_blank" className="url">
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
  const [pilotId, setPilotid] = useState('5f431d3ebd64571f5e5d63b7')
  const [urlDocument, setUrlDocument] = useState('')
  const [selectedFile, setSelectfile] = useState(null)
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
    setName(event.target.files[0].name)
    setSelectfile(event.target.files[0])
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
              type: "document",
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
      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <input type="file" onChange={handleChange}/>
          </label>
          <br/>
        </fieldset>
        <button type="submit">Submit</button>
      </form>
      </AttachContainer>
      <CertificatesComponent certificates = {certificates}/>
    </ComponentContainer>
  )
}

export default Certificates