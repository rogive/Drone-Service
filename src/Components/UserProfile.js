import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import "./UserProfile.css";
import { useForm } from "react-hook-form";
import Departments from "../data/deparments.json";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { setGlobalUser } from "../store";

function UpdateUserProfile() {
  const dispatch = useDispatch();
  const [unlockNameField, setUnlockNameField] = useState(true);
  const [unlockLastnameField, setUnlockLastnameField] = useState(true);
  const [unlockEmailField, setUnlockEmailField] = useState(true);
  const [unlockPasswordField, setUnlockPasswordField] = useState(true);
  const [unlockPhoneField, setUnlockPhoneField] = useState(true);
  const [unlockDepartmentField, setUnlockDepartmentField] = useState(true);
  const [unlockCityField, setUnlockCityField] = useState(true);
  const [userDataDb, setUserDataDb] = useState([]);
  const { register, errors, handleSubmit } = useForm();
  const [currCities, setCurrCities] = useState(
    Departments.filter((e) => e.id === 29)[0].ciudades
  );
  const emailRegexp = /((?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|'(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*')@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\]))/;
  const phoneRegexp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\./0-9]*$/;

  useEffect(() => {
    const getUserData = async () => {
      const userId = sessionStorage.getItem("userId");
      const userType = sessionStorage.getItem("userType");
      try {
        const result = await axios.get(
          `http://localhost:8000/${userType}/listar/${userId}`
        );
        (userType === "client" ?  
        setUserDataDb(result.data.client) :
        setUserDataDb(result.data.pilot) )
      } catch (error) {
        alert(error);
      }
    };
    getUserData();
  }, []);

  const onSubmit = async (data) => {
    console.log(userDataDb)
    const userId = sessionStorage.getItem("userId");
    const userType = sessionStorage.getItem("userType");
    try {
      const result = await axios.put(
        `http://localhost:8000/${userType}/actualizar/${userId}`,
        {
          data,
        }
      );
      setUserDataDb(result.data);
      sessionStorage.setItem("userName", result.data.name);
      dispatch(setGlobalUser(result.data));
    } catch (error) {
      alert(error);
    }
  };

  const mapDepartments = (departments) => {
    return departments.map((element) => {
      return (
        <option value={element.id} key={element.id}>
          {element.label}
        </option>
      );
    });
  };

  const mapCities = (cities) => {
    return cities.map((element) => {
      return (
        <option value={element} key={element}>
          {element}
        </option>
      );
    });
  };

  return (
    <div>
      { sessionStorage.getItem("userType") === "client" && (<h2>Tu perfil</h2>)}
      <img
        width="100px"
        src="https://media.istockphoto.com/photos/businessman-silhouette-as-avatar-or-default-profile-picture-picture-id476085198?b=1&k=6&m=476085198&s=170667a&w=0&h=ZHUgkr2TYixVu_Nny3XpsfmTdInPtEp1-PpO9MuQwYM="
        alt="profile-pic"
      />
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="fieldSet">
          <label>Nombre</label>
          <input
            id="name"
            name="name"
            type="text"
            value={unlockNameField ? userDataDb.name : null}
            ref={register({
              required: {
                value: true,
                message: "El campo nombres es requerido",
              },
            })}
            readOnly={unlockNameField}
            className={unlockNameField ? "field" : "unlock__field"}
          />
          <CreateIcon
            className={unlockNameField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockNameField) {
                setUnlockNameField(false);
              } else {
                setUnlockNameField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>Apellido</label>
          <input
            value={unlockLastnameField ? userDataDb.lastName : null}
            readOnly={unlockLastnameField}
            className={unlockLastnameField ? "field" : "unlock__field"}
            name="lastName"
            ref={register({
              required: {
                value: true,
                message: "El campo apellido es requerido",
              },
            })}
          />
          <CreateIcon
            className={unlockLastnameField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockLastnameField) {
                setUnlockLastnameField(false);
              } else {
                setUnlockLastnameField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>E-mail</label>
          <input
            readOnly={unlockEmailField}
            className={unlockEmailField ? "field" : "unlock__field"}
            id="email"
            name="email"
            type="email"
            value={unlockEmailField ? userDataDb.email : null}
            ref={register({
              required: {
                value: true,
                message: "El campo E-Mail es requerido",
              },
              pattern: { value: emailRegexp, message: "E-mail inválido" },
            })}
          />
          <CreateIcon
            className={unlockEmailField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockEmailField) {
                setUnlockEmailField(false);
              } else {
                setUnlockEmailField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>Contraseña</label>
          <input
            readOnly={unlockPasswordField}
            className={unlockPasswordField ? "field" : "unlock__field"}
            placeholder="********"
            name={unlockPasswordField ? "dummy" : "password"}
            type="password"
            ref={register({
              required: {
                value: false,
              },
            })}
          />
          <CreateIcon
            className={unlockPasswordField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockPasswordField) {
                setUnlockPasswordField(false);
              } else {
                setUnlockPasswordField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>Celular</label>
          <input
            id="phone"
            name="phone"
            type="text"
            value={unlockPhoneField ? userDataDb.phone : null}
            ref={register({
              pattern: {
                value: phoneRegexp,
                message: "Número de celular inválido",
              },
              minLength: {
                value: 10,
                message: "El número de celular debe tener mínimo 10 caracteres",
              },
            })}
            readOnly={unlockPhoneField}
            className={unlockPhoneField ? "field" : "unlock__field"}
          />
          <CreateIcon
            className={unlockPhoneField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockPhoneField) {
                setUnlockPhoneField(false);
              } else {
                setUnlockPhoneField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>Departamento</label>
          <select
            id="department"
            name="department"
            type="text"
            ref={register({ required: true })}
            className={unlockDepartmentField ? "field" : "unlock__field"}
            value={unlockDepartmentField ? userDataDb.department : null}
            onChange={(event) =>
              setCurrCities(
                Departments.filter(
                  (e) => e.id === parseInt(event.target.value)
                )[0].ciudades
              )
            }
          >
            {mapDepartments(Departments)}
          </select>
          <CreateIcon
            className={unlockDepartmentField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockDepartmentField) {
                setUnlockDepartmentField(false);
              } else {
                setUnlockDepartmentField(true);
              }
            }}
          />
        </div>
        <div className="fieldSet">
          <label>Ciudad</label>
          <select
            id="city"
            name="city"
            type="text"
            className={unlockCityField ? "field" : "unlock__field"}
            value={unlockCityField ? userDataDb.city : null}
            ref={register({ required: true })}
          >
            {mapCities(currCities)}
          </select>

          <CreateIcon
            className={unlockCityField || "unlock__iconField"}
            onClick={(event) => {
              if (unlockCityField) {
                setUnlockCityField(false);
              } else {
                setUnlockCityField(true);
              }
            }}
          />
        </div>
        <button className="update__button">Actualizar datos</button>
      </form>
    </div>
  );
}

export default UpdateUserProfile;
