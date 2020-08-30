import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import Categories from '../data/categories.json'

const FullContainer = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
`
const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 40vw;
  border: 1px solid gray;
  margin: 1rem 30rem 1rem 30rem;
  .titleform{
    padding-top: 2rem;
  }
`

const FormLabel = styled.label`

  width: 30%;
  margin: 1rem 0 1rem 0rem;
  font-size: 1.5rem;

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

const FormFieldset = styled.fieldset`
  display:flex;
  width: 70%;
  float: left;
  border: 1px solid gray;
  .input{
    margin-left: 1rem
  }
`

function Queries() {
  const {register, errors, handleSubmit} = useForm()
  const [service, setService] = useState('')

  const onSubmit = data => {

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

  return(
    <FullContainer>
      <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <h1 className="titleform">Solicitud de Servicio</h1>
        <FormFieldset>
          <FormLabel htmlFor="name">Nombres: </FormLabel>
          <FormInput
            id="name"
            name="name"
            type="text"
            className="input"
            ref={register({ required: { value:true, message: 'El campo nombres es requerido' }})}
          />
          <span style={{color: "red"}}>
            {errors.name?.message}
          </span>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="typeservice">Tipo de servicio </FormLabel>
          <select
            id="typeservice"
            name="typeservice"
            type="text"
            className="input"
            ref={register({ required: true })}
            onChange={ event => setService(Categories.filter(e => e.id === event.target.value)[0].label)}
          >
            {mapCategories(Categories)}
          </select>
        </FormFieldset>
        <FormFieldset>
          <FormLabel htmlFor="typeservice">Fecha del servicio </FormLabel>
          <input type="date" id="birthday" name="birthday" className="input"/>
        </FormFieldset>
        <FormButton>Enviar</FormButton>
      </FormContainer>
    </FullContainer>
  )
}

export default Queries