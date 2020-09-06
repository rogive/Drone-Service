import React, { useState } from "react";
import Departments from "../data/deparments.json";
import styled from "styled-components";
import Categories from "./Categories";
import Results from "./Results";
import LocationSearch from "./LocationSearch";

const ExploraContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
`;

const SearchContainer = styled.div`
  padding: 30px;
  width: 20%;
  display: flex;
  flex-direction: column;
`;

const ResultsContainer = styled.div`
  padding: 30px;
  box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.2);
  width: 60%;
  box-sizing: content-box;
  display: flex;
  flex-direction: column;
  div h2 {
    text-align: center;
  }
`;

const Search = () => {
  const [departmentID, setDepartmentID] = useState("");
  const [city, setCity] = useState("");
  const [categorie, setCategorie] = useState("");

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
