import React, { useState } from "react";
import categories from "../data/categories.json";
import "./Categories.css";

const Categories = ({ categorieHandleChange }) => {
  return (
    <div className="categories">
      <h3>Servicios</h3>
      {categories.map((categorie) => {
        return (
          <div className="categorie">
            <input
              key={categorie.id}
              id={categorie.id}
              type="radio"
              name="Categoria"
              onChange={(event) => categorieHandleChange(event)}
            />
            <label htmlFor={categorie.id}>{categorie.label}</label>
          </div>
        );
      })}
    </div>
  );
};

export default Categories;
