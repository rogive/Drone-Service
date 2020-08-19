import React from 'react'
import styled from 'styled-components'

const Button1 = styled.button`
    align-self: flex-start;
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

function Button(){
    return (
        <Button1>Registrarme</Button1>
    )
}

export default Button