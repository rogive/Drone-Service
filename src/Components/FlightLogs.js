import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import FileButton from './FileButton';
import { storage } from '../firebase';
import { useForm } from 'react-hook-form';
import "./FlightLogs.css";
import axios from 'axios';

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
          <p className="element-flightlog">{flightlog.name}</p>
          <a href={certificate.url} target="_blank" rel="noopener noreferrer" className="url-flightlog">
            <img src="https://firebasestorage.googleapis.com/v0/b/droneservice-cc42f.appspot.com/o/src%2Ficons%2Fdocument-icon.png?alt=media&token=57d39b43-a362-40ce-9652-08ef9af6388f" 
                 alt="pdfIcon"
                 className="icon-flightlog"
            />
          </a>
        </DocumentsContainer>
      );
    });
  
  }
  
function FlightLogs() {
  const [flightlogs, setFlightLogs] = useState([])
  const [name, setName] = useState('')
  const [urlDocument, setUrlDocument] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showadd, setShowAdd] = useState(false)
  const [error, setError] = useState(null)
  const { register, errors, handleSubmit } = useForm();
  const pilotId = sessionStorage.getItem("userId")

  useEffect( () => {
    axios({
      url: `http://localhost:8000/flightlogs/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setFlightLogs( data ))
      .catch((error) => setError({ error }))
  }, [])

  function handleChange(event) {
    if(!event.target.files[0]) return
    setSelectedFile(event.target.files[0])
    setName(event.target.files[0].name)
  }

  function onSubmit( data ) {
    const uploadDocument = storage.ref(`Pilots/Pilot-${pilotId}/FlightLogs/` + name).put(selectedFile);
    uploadDocument.on('state_changed', 
      (snap) => {}, 
      (error) => {alert(error)},
      () => {
        storage.ref(`Pilots/Pilot-${pilotId}/FlightLogs/`).child(name).getDownloadURL().then(url => {
          axios({
            url: 'http://localhost:8000/flightlogs/crear',
            method: 'POST',
            data: { ...data,
              pilotId,
              name,
              url,
              type: "document"
            }
          }).then(({ data }) => {
            setFlightLogs( certificates.concat(data) )
            setShowAdd(!showadd)
          }
          )
          .catch((error) => setError(error));
        });
      }
    )
  }

  return(
    <ComponentContainer>
      <h2>Bitacoras de Vuelo</h2>
      <IconContainer>
        <img src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884__340.png" alt="Hola"></img>
      </IconContainer>
      <p>Este espacio corresponde a las bitácoras de vuelo de las 
          operaciones Drone realizadas por el piloto. Solo se muestra
          las horas de vuelo totales de las bitacoras validadas.
      </p>
      <br/>
      <button className="add-certificate"
              id="add-certificate"
              onClick={()=>setShowAdd(!showadd)}
              >+ Añadir certificado</button>
      {showadd && (
        <form className="certificateformcontainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="certificateboxtitleform">
            <p className="certificatetitleform">Nuevo certificado</p>
          </div>
          <fieldset className="certificateformfieldset">
            <div className="certificateinput-full-container">
                <label className="certificateformlabel" htmlFor='certificatename'>Título: </label>
                <input
                  id='titlecertificate'
                  name='title'
                  type='text'
                  className="certificate-input-title"
                  ref={register({ required: { value:true, message: 'El campo titulo es requerido' }})}
                />
            </div>
            <div className="error-input-container-certificate">
              <span style={{color: "red"}}>
                {errors.title?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="certificateformfieldset">
            <div className="certificateinput-full-container">
                <label className="certificateformlabel" htmlFor='certificatecompany'>Empresa emisora: </label>
                <input
                  id='certificatecompany'
                  name='company'
                  type='text'
                  className="certificate-input-title"
                  ref={register({ required: { value:true, message: 'El campo empresa emisora es requerido' }})}
                />
            </div>
            <div className="error-input-container-certificate">
              <span style={{color: "red"}}>
                {errors.company?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="certificateformfieldset">
            <div className="certificateinput-full-container">
                <label className="certificateformlabel" htmlFor='certificateid'>ID de la credencial: </label>
                <input
                  id='certificateid'
                  name='credential'
                  type='text'
                  className="certificate-input-title"
                  ref={register({ required: { value:true, message: 'El campo credencial es requerido' }})}
                />
            </div>
            <div className="error-input-container-certificate">
              <span style={{color: "red"}}>
                {errors.credential?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="certificateformfieldset">
            <div className="certicateinputcontainer">
              <FileButton onChange={handleChange} name={name} number={1} type="document"/>
            </div>
          </fieldset>
          <button className="formbuttoncertificate">Añadir</button>
        </form>
      )}
      <FlightLogsComponent flightlogs = {flightlogs}/>
    </ComponentContainer>
  )
}

  export default FlightLogs