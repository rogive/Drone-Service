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
    
    this.setState({ [name]: value })
  }

  render() {
    return (
      <form>
        <fieldset>
          <label htmlFor="name">Nombre</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={this.handleChange}
          />
        </fieldset>
      </form>
    )
  }
}

export default UserForm
