import React, { useState } from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import Departments from '../data/deparments.json'
import { useSelector } from 'react-redux';

const FullContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400%;
`

const FormFieldset = styled.fieldset`
  display:flex;
  width: 50%;
  float: left;
  margin: 1rem;
`

const FormLabel = styled.label`
  display:flex;
  width: 30%;
  margin: 1rem 0 1rem 1rem;
  font-size: 1.3rem;
  align-items: center;
`

const FormInput = styled.input`
  display:flex;
  width: 50%;
  margin: 1rem 0 1rem 1rem;
  float:left;
  padding:0.5rem;
  font-size: 1.2rem;
`

const FormButton = styled.button`
    text-decoration: none;
    padding: 1rem 1.6rem;
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

const FormHook = () => {
  
  const [ currCities, setCurrCities ] = useState(Departments.filter(e => e.id === 0)[0].ciudades)
  const {register, errors, handleSubmit} = useForm()
  const history = useHistory()
  const userType = useSelector(state => state.userType)
  const emailRegexp = /((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/;
  const phoneRegexp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\./0-9]*$/

  const onSubmit = data => {
    if (userType === 'pilot') {
      axios({
        method: 'post',
        url: 'http://localhost:8000/pilotos/crear',
        data: data
      })
      .then(() => {
        history.push('/login')
        return alert('Registro exitoso')
      })
      .catch((error) => alert(error.response.data.message))

    } else if (userType === 'client') {
      axios({
        method: 'post',
        url: 'http://localhost:8000/clientes/crear',
        data: data
      })
      .then(() => {
        history.push('/login')
        return alert('Registro exitoso')
      })
      .catch((error) => alert(error.response.data.message))
    } else {
      alert('Error en el registro, intente nuevamente')
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
    <FullContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1>Formulario</h1>
        <FormFieldset>
          <FormLabel htmlFor='name'>Nombres: </FormLabel>
          <FormInput
            id='name'
            name='name'
            type='text'
            ref={register({ required: { value:true, message: 'El campo nombres es requerido' }})}
          />
          <span style={{color: 'red'}}>
            {errors.name?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='lastName'>Apellidos: </FormLabel>
          <FormInput
            id='lastName'
            name='lastName'
            type='text'
            ref={register({ required: { value:true, message: 'El campo apellidos es requerido' }})}
          />
          <span style={{color: 'red'}}>
            {errors.lastName?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='email'>E-Mail: </FormLabel>
          <FormInput
            id='email'
            name='email'
            type='email'
            ref={register({ 
              required: { value:true, message: 'El campo E-Mail es requerido' },
              pattern: {value: emailRegexp, message: 'E-mail inválido'}
            })}
          />
          <span style={{color: 'red'}}>
            {errors.email?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='password'>Constraseña: </FormLabel>
          <FormInput
            id='password'
            name='password'
            type='password'
            ref={register({ required: { value:true, message: 'El campo contraseña es requerido' }})}
          />
          <span style={{color: 'red'}}>
            {errors.password?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='phone'>Celular: </FormLabel>
          <FormInput
            id='phone'
            name='phone'
            type='text'
            ref={register({
              pattern: {value: phoneRegexp, message: 'Número de celular inválido'},
              minLength: {value: 10, message: 'El número de celular debe tener mínimo 10 caracteres'}
            })}
          />
          <span style={{color: 'red'}}>
            {errors.phone?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='department'>Departamento: </FormLabel>
          <select
            id='department'
            name='department'
            type='text'
            ref={register({ required: true })}
            onChange={ event => setCurrCities(Departments.filter(e => e.id === parseInt(event.target.value))[0].ciudades)}
          >
            {mapDepartments(Departments)}
          </select>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor='city'>Ciudad: </FormLabel>
          <select
            id='city'
            name='city'
            type='text'
            ref={register({ required: true })}
          >
            {mapCities(currCities)}
          </select>
        </FormFieldset>
        <FormButton>Enviar</FormButton>
      </FormContainer>
    </FullContainer>
  )
}

export default FormHook