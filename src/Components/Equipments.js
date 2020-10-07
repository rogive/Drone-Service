import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Drones from '../data/drones.json'
import "./Equipments.css";
import axios from 'axios';

function EquipmentsComponent({ equipments }) {
  return equipments.map((equipment) => {
    return(
      <div className="equipmentscontainer">
        <img src={equipment.url}
              alt="pdfIcon"
              className="image-equipment"
        />
        <div className="element-equipment-container">
          <p className="element-equipment">{`${equipment.brand} - ${equipment.model}`}</p>
        </div>
      </div>
    );
  });
}
  
function Equipments() {
  const [equipments, setEquipments] = useState([])
  const [ currModels, setCurrModels ] = useState(Drones.filter(e => e.id === 0)[0].models)
  const { register, errors, handleSubmit, watch, reset } = useForm()
  const pilotId = sessionStorage.getItem("userId")
  const [showadd, setShowAdd] = useState(false)
  const [urlDrone, setUrlDrone] = useState('https://static.bhphoto.com/images/images500x500/1387714817_1010830.jpg')
  const [error, setError] = useState(null)
  const watchbrand = watch("brand", "DJI")
  const watchmodel = watch("model", "Phantom 1")

  useEffect( () => {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/equipments/listar/piloto/${pilotId}`,
      method: 'GET',
    })
      .then(({ data }) => setEquipments( data ))
      .catch((error) => setError({ error }))
  }, [])

  const mapDrones = (drones) => {
    return drones.map( drone => {
      return(
        <option value={drone.brand} key={drone.id}>
          {drone.brand}
        </option>
      )
    })
  }

  const mapModels = (models) => {
    return models.map( model => {
      return(
        <option value={model.name} key={model.name}>
          {model.name}
        </option>
      )
    })
  }

  function handleChangeBrand(event) {
    setCurrModels(Drones.filter(e => e.brand === event.target.value)[0].models)
    setUrlDrone( Drones.filter(e => e.brand === event.target.value)[0].models[0].url )
  }

  function handleChangeModel(event) {
    const url= Drones.filter(e => e.brand === watchbrand)[0].models
    .filter(elem => elem.name === event.target.value)[0].url
    setUrlDrone(url)
  }

  function onSubmit( data ) {
    axios({
      url: `${process.env.REACT_APP_BACKEND_URL}/equipments/crear`,
      method: 'POST',
      data: { ...data,
        pilotId,
        url: urlDrone,
      }
    }).then(({ data }) => {
      setEquipments( equipments.concat(data) )
    })
    .catch((error) => setError(error));
    setShowAdd(!showadd)
    setCurrModels(Drones[0].models)
  }

  return(
    <div className="titleequipments">
      <h2 className="titleequipments">Equipos</h2>
      <div className="mainimagecontainer">
        <img className="mainimage" src="https://aerialpixels.com/wp-content/uploads/2017/12/icon_049910_256.png" alt="Hola"></img>
      </div>
      <p className="description-equipments">Relaciona todos los equipos que tengas disponibles para realizar
          tus servicios como piloto profesional de drones.
      </p>
      <br/>
      <button className="add-equipment"
              id="add-equipment"
              onClick={()=>setShowAdd(!showadd)}
              >+ Añadir equipo</button>
      {showadd && (
        <form className="equipmentformcontainer" onSubmit={handleSubmit(onSubmit)}>
          <div className="equipmentboxtitleform">
            <p className="equipmenttitleform">Nuevo equipo</p>
          </div>
          <fieldset className="equipmentformfieldset">
            <div className="equipmentinput-full-container">
              <label className="equipmentformlabel">Marca:</label>
              <select
                type="text"
                id="brandequipment"
                name="brand"
                className="equipment-input-select"
                onChange={handleChangeBrand}
                ref={register({
                  required: { value:true, message: 'El campo marca es requerido' }
                })}
              > {mapDrones(Drones)}
              </select>
            </div>
            <div className="error-input-container-equipment">
              <span style={{color: "red"}}>
                {errors.brand?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="equipmentformfieldset">
            <div className="equipmentinput-full-container">
              <label className="equipmentformlabel">Modelo:</label>
              <select
                type="text"
                id="modelequipment"
                name="model"
                className="equipment-input-select"
                onChange={handleChangeModel}
                ref={register({
                  required: { value:true, message: 'El campo modelo es requerido' }
                })}
              > {mapModels(currModels)}
              </select>
            </div>
            <div className="error-input-container-equipment">
              <span style={{color: "red"}}>
                {errors.model?.message}
              </span>
            </div>
          </fieldset>
          <fieldset className="equipmentformfieldset">
            <div className="equipmentinput-full-container">
              <label className="equipmentformlabel" htmlFor='equipmentinsurance'>Poliza de seguro: </label>
              <input
                id='equipmentinsurance'
                name='insurance'
                type='text'
                className="equipment-input-text"
                ref={register({
                  required: { value:false, message: 'El campo poliza de seguro es requerido' }
                })}
              />
            </div>
            <div className="error-input-container-equipment">
              <span style={{color: "red"}}>
                {errors.insurance?.message}
              </span>
            </div>
          </fieldset>
          <button className="formbuttonequipment">Añadir</button>
        </form>
      )}
      <div className="equipments-full-container">
        <EquipmentsComponent equipments = {equipments}/>
      </div>
    </div>
  )
}

  export default Equipments