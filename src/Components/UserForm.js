import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Departments from '../data/deparments.json'
import "./UserForm.css";
import { InputAdornment, IconButton } from "@material-ui/core";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import TogglePasword from './TogglePassword'

const FormHook = () => {
  
  const [ currCities, setCurrCities ] = useState(Departments.filter(e => e.id === 0)[0].ciudades)
  const [ userType ] = useState(sessionStorage.getItem('userType'))
  const {register, errors, handleSubmit} = useForm()
  const history = useHistory()
  const emailRegexp = /((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/;
  const phoneRegexp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\./0-9]*$/
  let tipoUsuario = (userType === 'pilot')?'piloto':'cliente'
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword(!showPassword);

  const onSubmit = data => {
    let urlAux = (userType === 'pilot')?'pilotos':'client'

    if( userType ) {
      axios({
        method: 'post',
        url: `http://localhost:8000/${urlAux}/crear`,
        data: {...data, userType}
      })
      .then(() => {
        history.push('/login')
        return alert('Registro exitoso')
      })
      .catch((error) => alert(error.response.data.message))
    } else {
      alert('Error en el registro, intente nuevamente por favor')
      history.push('/')
    }
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
          <h1 className="titleform">{`Registro ${tipoUsuario}`}</h1>
        </div>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='name'>Nombres: </label>
            </div>
            <div className="input-container">
              <input
                id='name'
                name='name'
                type='text'
                className="input-title"
                ref={register({ required: { value:true, message: 'El campo nombres es requerido' }})}
              />
            </div>
          </div>
          <div className="error-input-container">
            <span style={{color: "red"}}>
              {errors.name?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='lastName'>Apellidos: </label>
            </div>
            <div className="input-container">
              <input
                id='lastName'
                name='lastName'
                type='text'
                className="input-title"
                ref={register({ required: { value:true, message: 'El campo apellidos es requerido' }})}
              />
            </div>
          </div>
          <div className="error-input-container">
            <span style={{color: "red"}}>
              {errors.lastName?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='email'>E-Mail: </label>
            </div>
            <div className="input-container">
              <input
                id='email'
                name='email'
                type='email'
                className="input-title"
                ref={register({ 
                  required: { value:true, message: 'El campo E-Mail es requerido' },
                  pattern: {value: emailRegexp, message: 'E-mail inválido'}
                })}
                />
            </div>
          </div>
          <div className="error-input-container">
            <span style={{color: "red"}}>
              {errors.email?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='password'>Contraseña: </label>
            </div>
            <div className="input-container">
              <input
                id='password'
                name='password'
                type={showPassword ? "text" : "password"}
                className="input-title"
                ref={register({ required: { value:true, message: 'El campo contraseña es requerido' }})}
              />
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
              >
                {showPassword ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </div>
          </div>
          <div className="error-input-container">
            <span style={{color: "red"}}>
              {errors.password?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='phone'>Celular: </label>
            </div>
            <div className="input-container">
              <input
                id='phone'
                name='phone'
                type='text'
                className="input-title"
                ref={register({
                  pattern: {value: phoneRegexp, message: 'Número de celular inválido'},
                  minLength: {value: 10, message: 'El número de celular debe tener mínimo 10 caracteres'}
                })}
                />
            </div>
          </div>
          <div className="error-input-container">
            <span style={{color: "red"}}>
              {errors.phone?.message}
            </span>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='department'>Departamento: </label>
            </div>
            <div className="input-container">
              <select
                id='department'
                name='department'
                type='text'
                className="input"
                ref={register({ required: true })}
                onChange={ event => setCurrCities(Departments.filter(e => e.id === parseInt(event.target.value))[0].ciudades)}
              > {mapDepartments(Departments)}
              </select>
            </div>
          </div>
        </fieldset>
        <fieldset className="formfieldset">
          <div className="input-full-container">
            <div className="label-input-container">
              <label className="formlabel" htmlFor='city'>Ciudad: </label>
            </div>
            <div className="input-container">
              <select
                id='city'
                name='city'
                type='text'
                className="input"
                ref={register({ required: true })}
              >{mapCities(currCities)}
              </select>
            </div>
          </div>
        </fieldset>
        <button className="formbutton">Enviar</button>
      </form>
    </div>
  )
}

export default FormHook