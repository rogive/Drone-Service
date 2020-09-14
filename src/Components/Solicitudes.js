import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Categories from '../data/categories.json'
import { storage } from '../firebase';
import Departments from '../data/deparments.json'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const FullContainer = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://images.pond5.com/drone-quadcopter-forest-background-footage-087770961_prevstill.jpeg");
  background-color: #E5E5E5;
  background-repeat: no-repeat;
  background-size: Auto;
`
const FormContainer = styled.form`
  display: flex;
  box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  align-items: center;
  width: 50rem;
  margin: 4rem Auto;
  background-color: #E7ECF7;
  opacity: 0.85;
  .boxtitleform{
    display: flex;
    width: 100%;
    height: 8rem;
    align-items: center;
    justify-content: center;
    margin: 0rem 0rem 2rem 0rem;
    background-color: rgb(0, 23, 105);
    color: white;
  }
`

const FormFieldset = styled.fieldset`
  display:flex;
  flex-direction: column;
  width: 75%;
  float: left;
  border: none;
  padding: 0.5rem 0rem 0.5rem 0rem;
  .input-full-container {
    display:flex;
    flex-direction: row;
    margin-bottom: 0.5rem;
  }
  .label-input-container{
    width: 55%;
  }
  .input-container{
    float: right;
    width: 45%;
  }
  .error-input-container{
    color: red;
    float: right;
    width: 40%;
  }
  progress{
    width: 100%;
  }
  .input-title{
    width: 89%;
    height: 2rem;
    float: right;
    margin-left: 1rem;
    background-color: white;
    border: 1px solid gray;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
  .input{
    width: 90%;
    height: 2rem;
    float: right;
    margin-left: 1rem;
    background-color: white;
    border: 1px solid gray;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }

  .inputtextarea{
    background-color: white;
    width: 100%;
    height: 20vh;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
  
  select{
    height: 2rem;
  }
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;    
  }

  .fullcontaineruploadimage{
    height: 2rem;
    display: flex;
    flex-direction: row;
    border-right: 1px solid gray;
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.2);
  }
  .boxlabelnameimage {
    width: 80%;
    background-color: white;
    border: 1px solid gray;
  }
  .boxbuttonsimage{
    width: 20%;
    display: flex;
    flex-direction: row;
    
  }

  .labelbuttonaddimage,
  .labelbuttonuploadimage {
    display: flex;
    width: 5rem;
    padding: 0.2rem 0rem 0.2rem 0rem;
    font-size: 1rem;
    font-weight: 500;
    color: black;
    justify-content: center;
    text-align: center;
    border: 1px solid gray;
    background-color: #D9DFEE;
  }

  .labelnameimage {
    display: flex;
    height: 2rem;
    justify-content: left;
    align-items: center;
    padding-left: 0.5rem;
  }

  .inputfile{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }
  .buttonuploadimage{
    width: 0.1px;
    height: 0.1px;
    opacity: 0;
    overflow: hidden;
    position: absolute;
    z-index: -1;
  }


  .inputfile:focus, .labelbuttonaddimage:hover,
  .buttonuploadimage:focus, .labelbuttonuploadimage:hover {
    background-color: #D1D7E8;
  }

  
`
const FormLabel = styled.label`
  margin: 1rem 0 1rem 0rem;
  font-size: 1.6rem;
`

const FormButton = styled.button`
    text-decoration: none;
    margin: 2rem 0rem 2rem 0rem;
    padding: 1rem 1.6rem;
    margin-top: 3rem;
    border-radius: 8px;
    font-family: 'Montserrat';
    font-size: 2rem;
    color: white;
    border: none;
    background-image: linear-gradient(to left, rgba(10,10,200, 1), rgba(10,100,200, 1));
    cursor: pointer;

    &:hover{
        background-image: linear-gradient(to left, rgba(10,10,100, 1), rgba(10,10,100, 1));
    }
`

const ImageContainer = styled.div`
  width: 17%;
  border-radius: 1rem;
  margin: 1rem;
  img{
    width: 5rem;
    height: 5rem;
    border-radius: 1rem;
  }
`

const FullImageContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1rem;
  padding-right: 1rem;
  width: 100%;
`
function ServiceImagesComponent({
  images
}) {
  return images.map((image) => {
    return(
        <ImageContainer>
          <img src={image} alt=""></img>
        </ImageContainer>
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
    url: 'http://localhost:8000/solicitudes/crear',
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
    <FullContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <div className="boxtitleform">
          <h1 className="titleform">Solicitud de Servicio</h1>
        </div>
        <FormFieldset>
          <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="servicetitle">Titulo:</FormLabel>
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
        </FormFieldset>
        <FormFieldset>
          <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="servicetype">Servicio: </FormLabel>
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
        </FormFieldset>
        <FormFieldset>
        <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="certifiedpilot">¿Piloto certificado?</FormLabel>
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
        </FormFieldset>
        <FormFieldset>
          <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="ownequipment">¿Piloto con equipo?</FormLabel>
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
        </FormFieldset>
        {
            ownequipment === "Si" ? (
            <FormFieldset>
              <div className="input-full-container">
                <div className="label-input-container">
                  <FormLabel htmlFor="requireequipment">¿Alguno en especifico? </FormLabel>
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
            </FormFieldset>
              ) :
              <span></span>
        }
        {
          requireequipment === "Si" ? (
            <FormFieldset>
              <div>
                <div className="input-full-container">
                  <div className="label-input-container">
                    <FormLabel htmlFor="equipment">¿Cuál equipo?</FormLabel>
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
            </FormFieldset>
              ) :
              <span></span>
        }
        <FormFieldset>
          <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="department">Departamento:</FormLabel>
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
        </FormFieldset>
        <FormFieldset>
          <div className="input-full-container">
            <div className="label-input-container">
              <FormLabel htmlFor="city">Ciudad: </FormLabel>
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
        </FormFieldset>
        <FormFieldset>
          <div>
            <div className="input-full-container">
              <div className="label-input-container">
                <FormLabel htmlFor="dateservice">Fecha: </FormLabel>
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

        </FormFieldset>
        <FormFieldset>
          <FormLabel> Imagenes: </FormLabel>
            <div className="fullcontaineruploadimage">
              <div className="boxlabelnameimage">
                <label htmlFor="inputfile"
                       className="labelnameimage">{ name || "Adjuntar imagen"}
                </label>
              </div>
              <div className="boxbuttonsimage">
                <input type="file"
                    id="inputfile"
                    name="inputfile"
                    onChange={handleChange}
                    className="inputfile"
                    style={{display: 'none'}}
                    />
                <label 
                    htmlFor="inputfile" 
                    className="labelbuttonaddimage"
                    >Abrir</label>
                <button type="button"
                        id="buttonuploadimage"
                        name="buttonuploadimage"
                        className="buttonuploadimage" 
                        onClick={handleSubmitImage}
                        >subir</button>
                <label htmlFor="buttonuploadimage" 
                      className="labelbuttonuploadimage"
                      >Cargar</label>
              </div>
          </div>
        </FormFieldset>
        <FormFieldset>
          <FullImageContainer>
            <ServiceImagesComponent images= {imagespreview}/>
          </FullImageContainer>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="description">Descripción:</FormLabel>
          <textarea
                id="description"
                name="description"
                className="inputtextarea"
                ref={register({ required: { value:true, message: 'Este campo es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.description?.message}
          </span>
        </FormFieldset>
        <FormButton>Enviar</FormButton>
      </FormContainer>
    </FullContainer>
  )
}

export default Solicitudes