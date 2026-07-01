import React, { useState, useEffect } from "react";
import api from '../../config/axiosInstance';
import { useParams, Link, useNavigate } from "react-router-dom";

const SearchPage = () => {
  const { query } = useParams();
  const [ results, setResults ] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchSearchProducts = async () => {
      const response = await api.get(`/buscar?query=${query}`);

      setResults(response.data);
    };
    fetchSearchProducts();
  }, [query]);

  const handleProductDetails = (item) => {
    const url = `/${item.gender}/${item.category}/${item.product_id}`;

    navigate(url);
  }

  return <section className="search-container">
    <h1>Resultados de Búsqueda {query}</h1>

    {results.length === 0 && <p>Cargando...</p>}

    {results.map((item) => (
      <article key={item.product_id} className="product-article">
      <img src={item.url_image} alt={item.description} title={item.name} />
      <h2>{item.name}</h2>
      <p>{item.price} €</p>
      <p className="description-text">{item.description}</p>
      <button onClick={() => handleProductDetails(item)}>Ver Detalles</button>
      </article>
    ))}
  </section>;
};

export default SearchPage;
