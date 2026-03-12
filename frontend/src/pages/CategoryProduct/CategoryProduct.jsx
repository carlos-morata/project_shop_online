import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const CategoryProduct = () => {
  const { gender, category } = useParams();
  const [ products, setProducts ] = useState([]);
  const [ totalProducts, setTotalProducts ] = useState(0);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?gender=${gender}&category=${category}`);

        setProducts(response.data.products || []);

        if(response.data.pagination) {
          setTotalProducts(response.data.pagination.total);
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [gender, category]);
  
  return <section className="products-container">
      <p className="showProducts-text">Mostrando <strong>{totalProducts}</strong> {category}</p>
      <hr />
    <section className="products-grid">
      {products.map((item) => ( 
      <Link className="product-link" key={item.product_id} to={`/${gender}/${item.category}/${item.product_id}`}>
          <article key={item.product_id} className="product-article">
            <img className="product-image" src={item.url_image} alt={item.name} />
            <h2 className="product-title">{item.name}</h2>
            <span className="product-price">{item.price} €</span>
          </article>
      </Link>
        ))}
    </section>
  </section>;
};

export default CategoryProduct;
