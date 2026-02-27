import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const CategoryProduct = () => {
  const { gender, category } = useParams();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/${gender}/${category}`);
        setProducts(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [gender, category]);
  return <section className="products-container">
    <h1>{category} para {gender}s</h1>

    {products.length === 0 && <p>No hay productos disponibles</p>}

    {products.map((item) => ( 
    <Link key={item.product_id} to={`/${gender}/${item.category}/${item.product_id}`}>
        <article key={item.product_id} className="product-article">
          <img src={item.url_image} alt={item.name} />
          <h2>{item.name}</h2>
          <span>{item.price} €</span>
        </article>
    </Link>
      ))}
  </section>;
};

export default CategoryProduct;
