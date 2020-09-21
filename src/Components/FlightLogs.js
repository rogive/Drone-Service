import React, {useState} from 'react';
import styled from 'styled-components';
import FileButton from './FileButton'

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

function FlightLogsComponent({
  flightlogs
  }) {
    return flightlogs.map((flightlog) => {
      return(
        <DocumentsContainer>
          <p>{flightlog.name}</p>
        </DocumentsContainer>
      );
    });
  
  }
  

function FlightLogs() {
  const [certificates, setCertificates] = useState([])
  const [name, setName] = useState('')
  const [pilotId, setPilotid] = useState(sessionStorage.getItem("userId"))
  const [urlDocument, setUrlDocument] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [error, setError] = useState(null)

  function handleChange(event) {
    if(!event.target.files[0]) return
    setSelectedFile(event.target.files[0])
    setName(event.target.files[0].name)
  }

function handleSubmit(event) {
  event.preventDefault();
/*  const uploadDocument = storage.ref(`Pilots/Pilot-${pilotId}/Certificates/` + name).put(selectedFile);

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
    ) */
}

  return(
    <ComponentContainer>
      <h2>Bitacoras de Vuelo</h2>
      <IconContainer>
        <img src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884__340.png" alt="Hola"></img>
      </IconContainer>
      <p>Este espacio corresponde a las bitácoras de vuelo de las 
          operaciones Drone realizadas por el piloto. Es opcional la 
          visualización publica de sus bitacoras. SI no desea que sea 
          publica, solo aparecerá la cantidad de horas relacionasdas 
          en las bitacoras añadidas.
      </p>
      <AttachContainer>
        <FileButton onChange={handleChange} onSubmit={handleSubmit} name={name}/>
      </AttachContainer>
      <FlightLogsComponent flightlogs = {certificates}/>
    </ComponentContainer>
  )
}

  export default FlightLogs