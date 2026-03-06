import React, { useState, useEffect } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import axios from 'axios';

const AllProducts = () => {
  const { gender } = useParams();
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?gender=${gender}`);

        setProducts(response.data.products || []);

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts()
  }, [gender])

  return <section className="products-container">
    { products.map((item) => (
      <Link key={item.product_id} to={`/${gender}/${item.category.toLowerCase()}/${item.product_id}`}>
        <article className="product-article">
          <img src={item.url_image} alt={item.name} />
          <h3>{item.name}</h3>
          <span>{item.price} €</span>
        </article>
      </Link>
    ))}
  </section>;
};

export default AllProducts;
