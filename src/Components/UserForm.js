import React, { Component } from 'react';
// import styled from 'styled-components';

class UserForm extends Component {
  state = {
    name: '',
    lastName: '',
    email: '',
    password: '',
    phone: '',
    department: '',
    city: ''
  }

  handleChange = event => {
    const { name, value } = event.target;
    
    this.setState({ [name]: value }, () => console.dir(this.state))
  }

  handleSubmit = event => {
    event.pereventDefault()

    
  }

  render() {
    const { name, lastName, email, password, phone, department, city} = this.state

    return (
      <form onSubmit={this.handleSubmit}>
        <fieldset>
          <label htmlFor="name">Nombre: </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
            value={name}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="lastName">Apellido: </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            onChange={this.handleChange}
            value={lastName}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="email">E-Mail: </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={this.handleChange}
            value={email}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="password">Contraseña: </label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={this.handleChange}
            value={password}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="phone">Celular: </label>
          <input
            type="text"
            id="phone"
            name="phone"
            onChange={this.handleChange}
            value={phone}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="department">Departamento: </label>
          <input
            type="text"
            id="department"
            name="department"
            onChange={this.handleChange}
            value={department}
          />
        </fieldset>
        <fieldset>
          <label htmlFor="city">Ciudad: </label>
          <input
            type="text"
            id="city"
            name="city"
            onChange={this.handleChange}
            value={city}
          />
        </fieldset>
        <button>Enviar</button>
      </form>
    )
  }
}

export default UserForm
