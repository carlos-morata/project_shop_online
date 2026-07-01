import React, { useState } from "react";
import api from '../../config/axiosInstance';
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const SearchPage = () => {
  const [ results, setResults ] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async () => {
    const response = await api.get(`/products/buscar?query=${searchValue}`)
    setResults(response.data);
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  }

  const handleProductDetails = (item) => {
    const url = `/${item.gender}/${item.category}/${item.product_id}`;

    navigate(url);
  }

  return <section className="search-container">
    <div className="searchInput-container">
      <input className="search-input" type="text" value={searchValue} onChange={handleChange} placeholder="Buscador de Productos" />
      <button type="submit" className="search-btn" onClick={handleSubmit}>
        <FontAwesomeIcon icon={faMagnifyingGlass} className="links" />
      </button>
    </div>
    <h1>Resultados de Búsqueda Para {searchValue}</h1>

    {results.length === 0 && <p>Cargando...</p>}

    <div className="product-container">
    {results.map((item) => (
      <article key={item.product_id} className="product-article">
      <img src={item.url_image} alt={item.description} title={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price} €</p>
      <p className="description-text">{item.description}</p>
      <button onClick={() => handleProductDetails(item)}>Ver Detalles</button>
      </article>
    ))}
    </div>
  </section>;
};

export default SearchPage;
