import React from 'react'
import styled from 'styled-components'
import { Link } from "react-router-dom";

const Button1 = styled(Link)`
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

function Button(props){
    return (
        <Button1 onClick={props.onClick} to={props.linkto}>{props.title}</Button1>
    )
}

export default Button