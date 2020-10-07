import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setGlobalUser } from "../store";
import "./LoginForm.css";

const LoginForm = ({ handleClose }) => {
  const history = useHistory();
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BACKEND_URL}/pilot/login`,
      data: data,
    })
      .then(({ data }) => {
        sessionStorage.setItem("userId", data.pilot._id);
        sessionStorage.setItem("token", data.token);
        sessionStorage.setItem("userName", data.pilot.name);
        sessionStorage.setItem("userType", data.pilot.userType);
        handleClose();
        history.push("/pilot-profile");
        dispatch(setGlobalUser(data.pilot));
      })
      .catch((error) => {
        axios({
          method: "post",
          url: `${process.env.REACT_APP_BACKEND_URL}/client/login`,
          data: data,
        })
          .then(({ data }) => {
            sessionStorage.setItem("userId", data.client._id);
            sessionStorage.setItem("token", data.token);
            sessionStorage.setItem("userName", data.client.name);
            sessionStorage.setItem("userType", data.client.userType);
            handleClose();
            history.push("/client-profile");
            dispatch(setGlobalUser(data.client));
          })
          .catch((error) => {
            sessionStorage.clear();
          });
      });
  };

  return (
    <div class="login-page">
      <div class="form">
        <h2>Iniciar Sesión</h2>
        <form class="login-form" onSubmit={handleSubmit(onSubmit)}>
          <input
            type="text"
            placeholder="Email"
            id="email"
            name="email"
            type="email"
            ref={register({
              required: {
                value: true,
                message: "El campo E-Mail es requerido",
              },
            })}
          />
          <span style={{ color: "red" }}>{errors.email?.message}</span>
          <input
            type="password"
            placeholder="Contraseña"
            id="password"
            name="password"
            ref={register({
              required: {
                value: true,
                message: "El campo contraseña es requerido",
              },
            })}
          />
          <span style={{ color: "red" }}>{errors.password?.message}</span>
          <button>login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
