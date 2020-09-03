import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Categories from '../data/categories.json'
import { storage } from '../firebase';
import Departments from '../data/deparments.json'
import { useHistory } from "react-router-dom";
import axios from 'axios';

const FullContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 38vw;
  margin: 1rem 30rem 1rem 30rem;
  padding-top: 2rem;
  background-color: #EFEFEF;
  border: 2px solid gray;
  border-radius:5rem;
  .titleform{
    padding-top: 2rem;
    padding-bottom: 1rem;
  }
`

const FormFieldset = styled.fieldset`
  display:flex;
  width: 70%;
  float: left;
  border: none;
  padding: 0.5rem 0rem 0.5rem 0rem;
  .input{
    width: 40%;
    height: 2rem;
    margin-left: 1rem;
    background-color: #E1E1E1;
  }
  .inputtextarea{
    background-color: #E1E1E1;
  }
  .inputfile{
    height: 2rem;
    margin-left: 1rem
  }
  select{
    height: 2rem;
  }

  
`
const FormDiv = styled.div`
  display: flex;
  flex-direction: row;
  .custom-file-upload {
    border: 1px solid #ccc;
    display: inline-block;
    padding: 6px 12px;
    cursor: pointer;
}
  
`

const FormLabel = styled.label`
  margin: 1rem 0 1rem 0rem;
  font-size: 1.5rem;

`

const FormInput = styled.input`
  display:flex;
  width: 30%;
  height: 7px;
  margin: 1rem 0 0rem 1rem;
  float:left;
  padding:0.5rem;
  font-size: 1.4rem;
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
    width: 4vw;
    height: 4vw;
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
          <img src={image.url}></img>
        </ImageContainer>
    );
  });
}

function Solicitudes() {
  const history = useHistory()
  const {register, errors, handleSubmit} = useForm()
  const [service, setService] = useState('Fotos')
  const [certifiedpilot, setCertifiedPilot] = useState('No Aplica')
  const [ownequipment, setOwnEquipment] = useState('No Aplica')
  const [requireequipment, setRequireEquipment] = useState('No')
  const [equipment, setEquipment] = useState('No Aplica')
  const [selectedImage, setSelectedImage] = useState(null)
  const [name, setName] = useState('')
  const [clientId, setClientId] = useState('55asd26a6q52')
  const [images, setImages] = useState([])
  const [url,setUrl] = useState('')
  const [description,setDescription] = useState('')
  const [ currCities, setCurrCities ] = useState(Departments.filter(e => e.id === 0)[0].ciudades)

function handleChange(event) {
  setSelectedImage(event.target.files[0])
  setName(event.target.files[0].name)
}

function handleSubmitImage(event) {
  event.preventDefault();
  const uploadImage = storage.ref(`Clients/Client-${clientId}/` + name).put(selectedImage);

  uploadImage.on('state_changed', 
  (snapshot) => {
  }, 
  (error) => {
    alert(error);
  },
  () => {
    storage.ref(`Clients/Client-${clientId}/`).child(name).getDownloadURL().then(url => {
      setUrl(url)
      setImages( images.concat({url}));

/*         axios({
          url: 'http://localhost:8000/media-solicitude/crear',
          method: 'POST',
          data: {
            clientId: clientId,
            url: url,
            type: "image",
          }
        })
        .then(({ data }) => this.setState({ post: data }))
        .catch((error) => this.setState({ error })); */


    })
  });
}

const onSubmit = data => {
/*   axios({
    method: 'post',
    url: 'http://localhost:8000/solicitudes/crear',
    data: data
  })
    .then(() => {
      history.push("/explora")
      return alert("Solicitud exitosa")
    })
    .catch((error) => alert(error.response.data.message)) */
    console.dir({...data, images});
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
      <h1 className="titleform" >Solicitud de Servicio</h1>
        <FormFieldset>
          <FormLabel htmlFor="servicetype">Tipo de servicio </FormLabel>
          <select
            type="text"
            id="servicetype"
            name="servicetype"
            className="input"
            ref={register({ required: true })}
            onChange={ event => setService(Categories.filter(e => e.id === event.target.value)[0].label)}
          >
            {mapCategories(Categories)}
          </select>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="certifiedpilot">Piloto certificado* </FormLabel>
          <select
            type="text"
            id="certifiedpilot"
            name="certifiedpilot"
            className="input"
            value= {certifiedpilot}
            ref={register({ required: true })}
            onChange={ event => setCertifiedPilot(event.target.value)}
          >
            <option value="Si" key="sioptioncertified"> Si </option>
            <option value="No" key="nooptioncertified"> No </option>
            <option value="No Aplica" key="noaplicaoptioncertified"> No Aplica </option>
          </select>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="ownequipment">Piloto con equipo propio </FormLabel>
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
        </FormFieldset>
        {
            ownequipment === "Si" ? (
            <FormFieldset>
              <FormLabel htmlFor="requireequipment">¿Requiere algún equipo en especifico? </FormLabel>
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
            </FormFieldset>
              ) :
              <span></span>
        }
        <FormFieldset>
          <FormLabel htmlFor="department">Departamento del servicio</FormLabel>
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
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="city">Ciudad del servicio </FormLabel>
          <select
            id="city"
            name="city"
            type="text"
            className="input"
            ref={register({ required: true })}
          >
            {mapCities(currCities)}
          </select>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="dateservice">Fecha del servicio </FormLabel>
          <input type="date"
                 id="dateservice"
                 name="dateservice"
                 className="input"
                 ref={register({ required: { value:true, message: 'Este campo es requerido' }})}/>
          <span style={{color: "red"}}>
            {errors.dateservice?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="inputfile"> Imagenes acerca del servicio </FormLabel>
            <FormDiv>
              <input type="file"
                  id="inputfile"
                  name="inputfile"
                  onChange={handleChange}
                  className="inputfile"/>
              <button onClick={handleSubmitImage}>upload</button>
            </FormDiv>
        </FormFieldset>
        <FormFieldset>
          <FullImageContainer>
            <ServiceImagesComponent images= {images}/>
          </FullImageContainer>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="description">Descripción del servicio </FormLabel>
          <textarea
                id="description"
                name="description"
                rows="8"
                cols="50"
                className="inputtextarea"
                ref={register({ required: { value:true, message: 'Este campo es requerido' }})}
                onChange={ event => setDescription(event.target.value)}
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