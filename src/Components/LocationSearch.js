import React, { useState, useEffect } from "react";
import styled from "styled-components";

const OptionContainer = styled.div`
  margin-bottom: 15px;
  border-top: 1px solid #e0e0e0;
  box-sizing: border-box;
  height: 160px;
  overflow-y: scroll;
`;

const LocationSearch = ({
  departments,
  departmentHandleChange,
  cityHandleChange,
  departmentID,
  city,
}) => {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    if (departmentID) {
      setCities(departments[departmentID].ciudades);
    }
  }, [departments, departmentID]);

  return (
    <div>
      <div>
        <h3>Departamentos</h3>
        <OptionContainer>
          {departments.map((department) => {
            return (
              <div>
                <input
                  key={department.id}
                  value={department}
                  id={department.id}
                  type="radio"
                  onChange={(event) => departmentHandleChange(event)}
                  name="Department"
                />
                <label htmlFor={department.id}>{department.label}</label>
              </div>
            );
          })}
        </OptionContainer>
      </div>
      <h3>Ciudades</h3>
      <div>
        {departmentID && (
          <OptionContainer>
            {cities.map((element) => {
              return (
                <div>
                  <input
                    value={element}
                    checked={element === city}
                    name="City"
                    id={element}
                    type="radio"
                    onChange={(event) => cityHandleChange(event)}
                  />
                  <label htmlFor={element}>{element}</label>
                </div>
              );
            })}
          </OptionContainer>
        )}
      </div>
    </div>
  );
};

export default LocationSearch;
