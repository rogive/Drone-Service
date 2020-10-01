import React, { useState } from "react";
import Departments from "../data/deparments.json";
import styled from "styled-components";
import Categories from "./Categories";
import Results from "./Results";
import LocationSearch from "./LocationSearch";
import SlideShow from "./SlideShow";

const ExploraContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 40px;
  background-color: #E1E4EE;
`;

const SearchContainer = styled.div`
  padding: 30px;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const ResultsContainer = styled.div`
  padding: 20px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  width: 80%;
  box-sizing: content-box;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  overflow-y: scroll;
  height: 62vh;
  background-color: white;
`;

const Search = () => {
  const [departmentID, setDepartmentID] = useState("");
  const [city, setCity] = useState("");
  const [categorie, setCategorie] = useState("");
  const [show, setShow] = useState(false);
  const [modelToggle, setModelToggle] = useState(false);

  const handleClose = () => {
    setModelToggle(false);
  };

  return (
    <ExploraContainer>
      <SearchContainer>
        <h2>Filtrar por</h2>
        <Categories
          categorieHandleChange={(event) => setCategorie(event.target.id)}
        />
        <LocationSearch
          departments={Departments}
          departmentHandleChange={(event) => setDepartmentID(event.target.id)}
          cityHandleChange={(event) => setCity(event.target.value)}
          departmentID={departmentID}
          city={city}
        />
      </SearchContainer>
      <ResultsContainer>
        <Results info={{ departmentID, city, categorie }} />
      </ResultsContainer>
    </ExploraContainer>
  );
};

export default Search;
