import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// Importaciones Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchProducts = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();

  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    navigate(`/buscar/${searchValue}`);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  return <form className="search-form" onSubmit={handleSubmit}>
          <input type="text" value={searchValue} onChange={handleChange} placeholder="Buscador de Productos" />
          <button type="submit" className="search-btn">
            <FontAwesomeIcon icon={faMagnifyingGlass} className="links" />
          </button>
        </form>;
};

export default SearchProducts;
