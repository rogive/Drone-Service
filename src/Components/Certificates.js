import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import { storage } from '../firebase';
import axios from 'axios';
import FileButton from './FileButton'
import "./Certificates.css"


const CertificatesComponentContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 3rem 0rem;
`

const DocumentsContainer = styled.div`
  width: 80%;
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
    padding: 1rem 1rem 1rem 1.5rem;
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
  padding-top: 1rem;
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
          <p className="element">{certificate.title}</p>
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
  const [showadd, setShowAdd] = useState(false)
  const [error, setError] = useState(null)
  const { register, errors, handleSubmit } = useForm();


  useEffect( () => {
    axios({
      url: `http://localhost:8000/certificates/listar/piloto/${pilotId}`,
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

  function onSubmit( data ) {
    const uploadDocument = storage.ref(`Pilots/Pilot-${pilotId}/Certificates/` + name).put(selectedFile);
    uploadDocument.on('state_changed', 
      (snap) => {}, 
      (error) => {alert(error)},
      () => {
        storage.ref(`Pilots/Pilot-${pilotId}/Certificates/`).child(name).getDownloadURL().then(url => {
          setUrlDocument(url)
          axios({
            url: 'http://localhost:8000/certificates/crear',
            method: 'POST',
            data: { ...data,
              pilotId,
              name,
              url,
              type: "document"
            }
          }).then(({ data }) => {
            setCertificates( certificates.concat(data) )
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
      <h2>Certificados</h2>
      <IconContainer>
        <img src="https://cdn.pixabay.com/photo/2017/06/22/02/16/computer-icon-2429310__340.png" alt="iconCertificates"></img>
      </IconContainer>
      <p className="description">
        Aca podras incluir todos los certificados que te han permitido conocer, aprender o obtener experiencia
        en algún area especifica. Recuerda que solo se muestra el título del documento, ademas los documentos
        son validados y se les asigna un logo especial para darle un valor agregado al mostrar tu perfil a los clientes.
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
      <CertificatesComponentContainer>
        <CertificatesComponent certificates = {certificates}/>
      </CertificatesComponentContainer>
    </ComponentContainer>
  )
}

export default Certificates