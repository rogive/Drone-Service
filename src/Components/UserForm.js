import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button'
import formFields from '../data/formFields.json'

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

class UserForm extends Component {
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

    this.setState({[name]: value})
  }

  handleValidation = (formFields) => {
    const fields = this.state
    let errors = {}
    let formIsValid = true
    const emailRegexp = (/((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/)
    
    formFields.filter((e) => e.type.includes('text')).forEach(e => {
      if(!fields[e.id].match(/^[a-zA-Z\s]+$/)) {
        formIsValid = false;
        errors[e.id] = `El campo ${e.label} solo puede contener letras`
      }
    })

    if(!fields['email'].match(emailRegexp)) {
      formIsValid = false;
      errors['email'] = `E-mail inválido`
    }
    
    formFields.filter((e) => e.label.includes('*')).forEach(e => {
      if(!fields[e.id]) {
        formIsValid = false;
        errors[e.id] = `El campo ${e.label} es obligatorio`
      }
    })

    this.setState({errors: errors});
    return formIsValid
  }

  handleSubmit = event => {
    event.preventDefault()
    
    for (const key in this.state) {
      if (!(typeof(this.state[key]) === 'object')) {
        this.setState({[key]: this.state[key].trim() })
      }
    }

    if(this.handleValidation(formFields)) {
      // axios put
      alert('Formulario enviado')
    }else{
      alert('El formulario tiene errores')
    }
  }

  render() {

    return (
      <FullContainer>
        <FormContainer onSubmit={this.handleSubmit}>
          {formFields.map((element) => {
            return (
              <FormFieldset key={element.id}>
                <FormLabel htmlFor={element.id}>{element.label}: </FormLabel>
                <FormInput
                  type={element.type}
                  id={element.id}
                  name={element.id}
                  onChange={this.handleChange}
                  value={this.state[element.id]}
                />
                <span style={{color: "red"}}>{this.state.errors[element.id]}</span>
              </FormFieldset>
            )
          })}
          <button>Continuar</button>
          //<Button title={"Continuar"} linkto={"/pilot-profile"}/>

        </FormContainer>
      </FullContainer>
    )
  }
}

export default UserForm