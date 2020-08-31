import React from 'react';
import { useForm } from 'react-hook-form'
import styled from 'styled-components';
import axios from 'axios';
import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux'
import { setGlobalUser } from '../store'

const FullContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 50%;
`

const FormFieldset = styled.fieldset`
  display:flex;
  width: 100%;
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
    align-self: flex-start;
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
        localStorage.setItem('pilot', data.pilot.name)
        localStorage.setItem('pilotId', data.pilot._id)

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
        <FormButton>Iniciar sesión</FormButton>
      </FormContainer>
    </FullContainer>
  )
}


export default LoginForm