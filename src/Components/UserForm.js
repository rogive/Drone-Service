import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalContainer from '../utils/GlobalStyles'
import Button from './Button'

const FormContainer = styled.form`
  display:block;
`
const FormFieldset = styled.fieldset`
  display:flex;
  width: 50%;
  margin: 1rem auto;
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

const formFields = [
  {
    id: 'name',
    label: 'Nombre *'
  },
  {
    id: 'lastName',
    label: 'Apellido *'
  },
  {
    id: 'email',
    label: 'E-Mail *'
  },
  {
    id: 'password',
    label: 'Contraseña *'
  },
  {
    id: 'phone',
    label: 'Celular'
  },
  {
    id: 'department',
    label: 'Departamento *'
  },
  {
    id: 'city',
    label: 'Ciudad *'
  }
]

class FieldsetMap extends Component {

  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    city: '',
    errors: {}
  }

  handleChange = event => {
    const {name, value} = event.target;

    this.setState({ [name]: value })
  }

  handleValidation = (formFields) => {
    const fields = this.state
    let errors = {}
    let formIsValid = true

    formFields.forEach(e => {
      if(!fields[e.id] && e.label.includes('*')) {
        formIsValid = false;
        errors[e.label] = `El campo ${e.label} no puede estar vacío`
      }
    });

    this.setState({errors: errors});
    return formIsValid
  }

  handleSubmit = event => {
    event.preventDefault()

    if(this.handleValidation(formFields)) {
      // axios put
      alert('Formulario enviado')
    }else{
      alert('El formulario tiene errores')
    }
  }

  render() {
    const { formFields } = this.props

    return (
      <div>
        <FormContainer onSubmit={this.handleSubmit}>
          {formFields.map((element) => {
            return (
              <FormFieldset key={element.id}>
                <FormLabel htmlFor={element.id}>{element.label}: </FormLabel>
                <FormInput
                  type='text'
                  id={element.id}
                  name={element.id}
                  onChange={this.handleChange}
                  value={this.state[element.id]}
                />
              </FormFieldset>
            )
          })}
          <Button>Enviar</Button>
        </FormContainer>
      </div>
    )
  }
}

class UserForm extends Component {
  //VALIDACIÓN DESDE EL FRONT END (PEJ Contraseña mínimo de 8 caractéres, validación email REGEX)

  render() {

    return (
      <GlobalContainer>
        <FieldsetMap formFields={formFields} />
      </GlobalContainer>
    )
  }
}

export default UserForm
