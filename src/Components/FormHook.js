import React from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";

const FullContainer = styled.div `
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`

const FormContainer = styled.form`
  display: block;
  margin: 1rem;
`

const FormFieldset = styled.fieldset`
  display:flex;
  width: 50%;
  margin: 1rem auto;
  float: left;
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

const FormHook = () => {

  const {register, errors, handleSubmit} = useForm()
  const history = useHistory()
  const emailRegexp = /((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/;

  const onSubmit = data => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/pilotos/crear',
      data: data
    })
      .then(() => {
        history.push("/login")
        return alert("Registro exitoso")
      })
      .catch((error) => console.log(error))
  }

  return(
    <FullContainer>
      <h1>Formulario</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormFieldset>
          <FormLabel htmlFor="name">Nombres: </FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            ref={register({ required: { value:true, message: 'El campo nombres es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.name?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="lastName">Apellidos: </FormLabel>
          <FormInput
            id="lastName"
            name="lastName"
            type="text"
            ref={register({ required: { value:true, message: 'El campo apellidos es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.lastName?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="email">E-Mail: </FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            ref={register({ 
              required: { value:true, message: 'El campo E-Mail es requerido' },
              pattern: {value: emailRegexp, message: 'E-mail inválido'}
            })}
          />
          <span style={{color: "red"}}>
            {errors.email?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="password">Constraseña: </FormLabel>
          <FormInput
            id="password"
            name="password"
            type="password"
            ref={register({ required: { value:true, message: 'El campo contraseña es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.password?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="phone">Celular: </FormLabel>
          <FormInput
            id="phone"
            name="phone"
            type="text"
            ref={register()}
          />
          <span style={{color: "red"}}>
            {errors.phone?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="department">Departamento: </FormLabel>
          <FormInput
            id="department"
            name="department"
            type="text"
            ref={register({ required: { value:true, message: 'El campo departamento es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.department?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="city">Ciudad: </FormLabel>
          <FormInput
            id="city"
            name="city"
            type="text"
            ref={register({ required: { value:true, message: 'El campo ciudad es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.city?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <select name="userType" ref={register({ required: true})}>
            <option value="client">Cliente</option>
            <option value="pilot">Piloto</option>
          </select>
          <span style={{color: "red"}}>
            {errors.userType?.message}
          </span>
        </FormFieldset>
        
        <button>Enviar</button>
      </FormContainer>
    </FullContainer>
  )
}

export default FormHook