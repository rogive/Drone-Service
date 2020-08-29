import React from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setGlobalUser } from '../store'

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

const LoginForm = () => {

  const history = useHistory()
  const {register, errors, handleSubmit} = useForm()
  const dispatch = useDispatch()
  
  const onSubmit = data => {
    axios({
      method: 'post',
      url: 'http://localhost:8000/pilotos/login',
      data: data
    })
      .then(({data}) => {
        localStorage.setItem('userId', data.pilot._id)
        localStorage.setItem('token', data.token)
        history.push('/pilot-profile')
        dispatch(setGlobalUser(data.pilot))
      })
      .catch((error) => {
        alert(error.response.data.message)
        localStorage.clear()
      })
  }

  return(
    <FullContainer>
      <h1>Iniciar Sesion</h1>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
        <FormFieldset>
          <FormLabel htmlFor="email">E-Mail: </FormLabel>
          <FormInput
            id="email"
            name="email"
            type="email"
            ref={register({ required: { value:true, message: 'El campo E-Mail es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.name?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="password">Contraseña: </FormLabel>
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
        <button>Enviar</button>
      </FormContainer>
    </FullContainer>
  )
}


export default LoginForm