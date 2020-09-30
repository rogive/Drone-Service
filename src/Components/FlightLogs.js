import React, { useState, useEffect } from 'react';
import FileButton from './FileButton';
import { storage } from '../firebase';
import { useForm } from 'react-hook-form';
import "./FlightLogs.css";
import axios from 'axios';
import Categories from '../data/categories.json'

function FlightLogsComponent({flightlogs, handleDelete}) {
  return flightlogs.map((flightlog) => {
    return(
      <div className="flightlogscontainer">
        <p className="element-flightlog">{`Operaciones de ${flightlog.specialty} - ${flightlog.company}`}</p>
        <a href={flightlog.url} target="_blank" rel="noopener noreferrer" className="url-flightlog">
          <img src="https://firebasestorage.googleapis.com/v0/b/droneservice-cc42f.appspot.com/o/src%2Ficons%2Fdocument-icon.png?alt=media&token=57d39b43-a362-40ce-9652-08ef9af6388f" 
                alt="pdfIcon"
                className="icon-flightlog"
          />
        </a>
      </div>
    )
  })
  }
  
function FlightLogs() {
  const [flightlogs, setFlightLogs] = useState([])
  const [name, setName] = useState('')
  const [urlDocument, setUrlDocument] = useState('')
  const [selectedFile, setSelectedFile] = useState(null)
  const [showadd, setShowAdd] = useState(false)
  const [error, setError] = useState(null)
  const { register, errors, handleSubmit } = useForm()
  const pilotId = sessionStorage.getItem("userId")
  const timeflightRegexp = /^([1-9][0-9]{0,2}|1000)$/
  const takeoffsRegexp = /^([1-9][0-9]{0,3}|10000)$/

  useEffect( () => {
    axios({
      url: `http://localhost:8000/flightlogs/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setFlightLogs( data ))
      .catch((error) => setError({ error }))
  }, [])

  const mapCategories = (categories) => {
    return categories.map( element => {
      return(
        <option value={element.id} key={element.id}>
          {element.label}
        </option>
      )
    })
  }

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
            setFlightLogs( flightlogs.concat(data) )
            setShowAdd(!showadd)
          }
          )
          .catch((error) => setError(error));
        });
      }
    )
  }

  return(
    <div>
      <h2 className="titleflightlogs">Bitacoras de Vuelo</h2>
      <div className="iconcontainerflightlogs">
        <img className="img-flightlogs" src="https://cdn.pixabay.com/photo/2017/03/08/14/20/flat-2126884__340.png" alt="Hola"></img>
      </div>
      <p className="description-flightlogs">
          Este espacio corresponde a las bitácoras de vuelo de las 
          operaciones Drone realizadas por el piloto. Solo se muestra
          las horas de vuelo totales de las bitacoras validadas.
      </p>
      <br/>
      <button className="add-flightlog"
              id="add-flightlog"
              onClick={()=>setShowAdd(!showadd)}
              >+ Añadir bitacora de vuelo</button>
      {showadd && (
        <form className="flightlogformcontainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="flightlogboxtitleform">
            <p className="flightlogtitleform">Nueva bitacora</p>
          </div>
          <fieldset className="flightlogformfieldset">
            <div className="flightloginput-full-container">
                <label className="flightlogformlabel" htmlFor='flightlogcompany'>Empresa: </label>
                <input
                  id='flightlogcompany'
                  name='company'
                  type='text'
                  className="flightlog-input-title"
                  ref={register({ required: { value:true, message: 'El campo empresa es requerido' }})}
                />
            </div>
            <div className="error-input-container-flightlog">
              <span style={{color: "red"}}>
                {errors.company?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="flightlogformfieldset">
            <div className="flightloginput-full-container">
              <label className="flightlogformlabel" htmlFor="typeoperation">Tipo de Operación:</label>
              <select
                type="text"
                id="typeoperation"
                name="specialty"
                className="flightlog-input-title"
                ref={register({ required: true })}
              >
                {mapCategories(Categories)}
              </select>
            </div>
          </fieldset>
          <fieldset className="flightlogformfieldset">
            <div className="flightloginput-full-container">
              <label className="flightlogformlabel" htmlFor="rolfligthlog">Rol:</label>
              <select
                type="text"
                id="rolfligthlog"
                name="rol"
                className="flightlog-input-title"
                ref={register({ required: true })}
              >
                <option value="piloto" key="pilotooption"> Piloto </option>
                <option value="observador" key="observeroption"> Observador </option>
              </select>
            </div>
          </fieldset>
          <fieldset className="flightlogformfieldset">
            <div className="flightloginput-full-container">
              <label className="flightlogformlabel">Horas de vuelo</label>
              <select
                type="text"
                id="brandfligthlog"
                name="brand"
                className="flightlog-input-flightime-select"
                ref={register({ required: true })}
              >
                <option selected disabled>Marca</option>
                <option value="dji" key="djiooption"> DJI </option>
                <option value="joyance" key="joyanceoption"> Joyance </option>
                <option value="parrot" key="parrotoption"> Parrot </option>
                <option value="skydio" key="voption"> Skydio </option>
                <option value="foxtech" key="foxtechoption"> Foxtech </option>
                <option value="yuneec" key="yuneecoption"> Yuneec </option>
              </select>
              <select
                type="text"
                id="modelfligthlog"
                name="model"
                className="flightlog-input-flightime-select"
                ref={register({ required: true })}
              >
                <option selected disabled>Modelo</option>
                <option value="phantom4" key="phantom4ooption"> Phantom 4 </option>
                <option value="mavicpro" key="mavicprooption"> Mavic Pro </option>
                <option value="typhoonh" key="typhoonhoption"> Typhoon H </option>
                <option value="skydiox2" key="skydiox2option"> Skydio X2 </option>
                <option value="gaia160" key="gaia160option"> Gaia 160 </option>
                <option value="inspire1" key="inspire1option"> Inspire 1 </option>
              </select>
              <input
                  id='flightlogflightime'
                  name='flightime'
                  type='text'
                  className="flightlog-input-flightime-text"
                  ref={register({
                    pattern: {value: timeflightRegexp, message: 'Número de horas de vuelo inválido'},
                    required: { value:true, message: 'El campo horas de vuelo es requerido' }
                  })}
                />
            </div>
            <div className="error-input-container-flightlog">
              <span style={{color: "red"}}>
                {errors.flightime?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="flightlogformfieldset">
            <div className="flightloginput-full-container">
                <label className="flightlogformlabel" htmlFor='flightlogtakeoffs'>Despegues/Aterrizajes: </label>
                <input
                  id='flightlogtakeoffs'
                  name='takeoffs'
                  type='text'
                  className="flightlog-input-title"
                  ref={register({
                    pattern: {value: takeoffsRegexp, message: 'Número de despegues inválido'},
                    required: { value:true, message: 'El campo despegues/aterrizajes es requerido' }
                  })}
                />
            </div>
            <div className="error-input-container-flightlog">
              <span style={{color: "red"}}>
                {errors.takeoffs?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="flightlogformfieldset">
            <div className="certicateinputcontainer">
              <FileButton onChange={handleChange} name={name} number={1} type="document"/>
            </div>
          </fieldset>
          <button className="formbuttonflightlog">Añadir</button>
        </form>
      )}
      <FlightLogsComponent flightlogs = {flightlogs}/>
    </div>
  )
}

  export default FlightLogs