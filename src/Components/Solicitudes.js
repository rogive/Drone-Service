import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import Categories from '../data/categories.json'
import { storage } from '../firebase';
import Departments from '../data/deparments.json'
import { useHistory } from "react-router-dom";
import axios from 'axios';
import FileButton from './FileButton'
import "./Solicitudes.css";

function ServiceImagesComponent({
  images
}) {
  return images.map((image) => {
    return(
        <div className="imagecontainer">
          <img className="imagesolicitude" src={image} alt=""></img>
        </div>
    );
  });
}

function Solicitudes() {
  const history = useHistory()
  const {register, errors, handleSubmit} = useForm()
  const [ownequipment, setOwnEquipment] = useState('No Aplica')
  const [requireequipment, setRequireEquipment] = useState('No')
  const [selectedImage, setSelectedImage] = useState(null)
  const [fullImage, setFullImage] = useState([])
  const [name, setName] = useState('')
  const clientId = sessionStorage.getItem("userId")
  const [images, setImages] = useState([])
  const [imagespreview, setImagesPreview] = useState([])
  const [ currCities, setCurrCities ] = useState(Departments.filter(e => e.id === 0)[0].ciudades)

function readFile(file) {
    const reader = new FileReader()
    reader.readAsDataURL(file)
    reader.onload = e => setImagesPreview(imagespreview.concat(e.target.result))
  }

function handleChange(event) {
  if(!event.target.files[0]) return
  setSelectedImage(event.target.files[0])
  setName(event.target.files[0].name)
}

function handleSubmitImage(event) {
  event.preventDefault();
  readFile(selectedImage)
  setFullImage(fullImage.concat(selectedImage))
  const uploadImage = storage.ref(`Clients/Client-${clientId}/` + name).put(selectedImage);

  uploadImage.on('state_changed', 
  (snap) => {}, 
  (error) => {
    alert(error);
  },
  () => {
    storage.ref(`Clients/Client-${clientId}/`).child(name).getDownloadURL().then(url => {
      setImages( images.concat({url}));
    })
  })
}

const onSubmit = data => {
  axios({
    method: 'post',
    url: `${process.env.REACT_APP_BACKEND_URL}/solicitudes/crear`,
    data: {...data, images, clientId}
  })
    .then(() => {
      history.push("/")
      return alert("Solicitud exitosa")
    })
    .catch((error) => alert(error.response.data.message))
}

  const mapCategories = (categories) => {
    return categories.map( element => {
      return(
        <option value={element.id} key={element.id}>
          {element.label}
        </option>
      )
    })
  }

  const mapDepartments = (departments) => {
    return departments.map( element => {
      return(
        <option value={element.id} key={element.id}>
          {element.label}
        </option>
      )
    })
  }
  
  const mapCities = (cities) => {
    return cities.map( element => {
      return(
        <option value={element} key={element}>
          {element}
        </option>
      )
    })
  }

  return(
    <div className="fullcontainer">
      <form className="formcontainer" onSubmit={handleSubmit(onSubmit)}>
        <div className="boxtitleform">
          <h1 className="titleform">Solicitud de Servicio</h1>
        </div>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="servicetitle">Titulo:</label>
            </div>
            <div className="input-container">
              <input
                id="servicetitle"
                name="servicetitle"
                className="input-title"
                ref={register({ required: { value:true, message: 'Este campo es requerido' }})}
              />
            </div>
          </div>
          <div>
            <span className="error-input-container">
              {errors.servicetitle?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="servicetype">Servicio: </label>
            </div>
            <div className="input-container">
              <select
                type="text"
                id="servicetype"
                name="servicetype"
                className="input"
                ref={register({ required: true })}
              >
                {mapCategories(Categories)}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
        <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="certifiedpilot">¿Piloto certificado?</label>
            </div>
            <div className="input-container">
              <select
                type="text"
                id="certifiedpilot"
                name="certifiedpilot"
                className="input"
                ref={register({ required: true })}
              >
                <option value="Si" key="sioptioncertified"> Si </option>
                <option value="No" key="nooptioncertified"> No </option>
                <option value="No Aplica" key="noaplicaoptioncertified"> No Aplica </option>
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="ownequipment">¿Piloto con equipo?</label>
            </div>
            <div className="input-container">
              <select
                type="text"
                id="ownequipment"
                name="ownequipment"
                className="input"
                value= {ownequipment}
                ref={register({ required: true })}
                onChange={ event => setOwnEquipment(event.target.value)}
              >
                <option value="Si" key="sioptionownequipment"> Si </option>
                <option value="No" key="nooptionownequipment"> No </option>
                <option value="No Aplica" key="noaplicaoptionownequipment"> No Aplica </option>
              </select>
            </div>
          </div>
        </fieldset>
        {
            ownequipment === "Si" ? (
            <fieldset className="formfieldset">
              <div className="input-full-container">
                <div className="label-input-container">
                  <label className="formlabel" htmlFor="requireequipment">¿Alguno en especifico? </label>
                </div>
                <div className="input-container">
                  <select
                    type="text"
                    id="requireequipment"
                    name="requireequipment"
                    className="input"
                    value= {requireequipment}
                    ref={register({ required: true })}
                    onChange={ event => setRequireEquipment(event.target.value)}
                  >
                    <option value="Si" key="sioptionrequireequipment"> Si </option>
                    <option value="No" key="nooptionrequireequipment"> No </option>
                  </select>
                </div>
              </div>
            </fieldset>
              ) :
              <span></span>
        }
        {
          requireequipment === "Si" ? (
            <fieldset className="formfieldset">
              <div>
                <div className="input-full-container">
                  <div className="label-input-container">
                    <label className="formlabel" htmlFor="equipment">¿Cuál equipo?</label>
                  </div>
                  <div className="input-container">
                    <input
                      id="equipment"
                      name="equipment"
                      className="input-title"
                      ref={register({ required: { value:true, message: 'Este campo es requerido' }})}
                    />
                  </div>
                </div>
                <div className="error-input-container">
                  <span style={{color: "red"}}>
                    {errors.equipment?.message}
                  </span>
                </div>
              </div>
            </fieldset>
              ) :
              <span></span>
        }
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="department">Departamento:</label>
            </div>
            <div className="input-container">
              <select
                id="department"
                name="department"
                type="text"
                className="input"
                ref={register({ required: true })}
                onChange={ event => setCurrCities(Departments.filter(e => e.id === parseInt(event.target.value))[0].ciudades)}
              >
                {mapDepartments(Departments)}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor="city">Ciudad: </label>
            </div>
            <div className="input-container">
              <select
                id="city"
                name="city"
                type="text"
                className="input"
                ref={register({ required: true })}
              >
                {mapCities(currCities)}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div>
            <div className="input-full-container">
              <div className="label-input-container">
                <label className="formlabel" htmlFor="dateservice">Fecha: </label>
              </div>
              <div className="input-container">
                <input type="date"
                      id="dateservice"
                      name="dateservice"
                      className="input-title date-input"
                      ref={register({ required: { value:true, message: 'Este campo es requerido' }})}/>
              </div>
            </div>
            <div className="error-input-container">
              <span style={{color: "red"}}>
              {errors.dateservice?.message}
            </span>
            </div>
          </div>

        </fieldset>
        <fieldset className="formfieldset">
          <label> Imagenes: </label>
            <FileButton onChange={handleChange} onSubmit={handleSubmitImage} name={name} number={2} type="image"/>
        </fieldset>
        <fieldset className="formfieldset">
          <div class="fullimagecontainer">
            <ServiceImagesComponent images= {imagespreview}/>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <label className="formlabel" htmlFor="description">Descripción:</label>
          <textarea
                id="description"
                name="description"
                className="inputtextarea"
                ref={register({ required: { value:true, message: 'Este campo es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.description?.message}
          </span>
        </fieldset>
        <button className="formbutton">Enviar</button>
      </form>
    </div>
  )
}

export default Solicitudes