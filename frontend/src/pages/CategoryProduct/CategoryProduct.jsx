import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import api from '../../config/axiosInstance';
import Pagination from "../../components/common/Pagination";

const CategoryProduct = () => {
  const { gender, category } = useParams();
  const [ products, setProducts ] = useState([]);
  const [ totalProducts, setTotalProducts ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  useEffect(() => {
    setCurrentPage(1);
  }, [gender, category]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get(`/api/products?gender=${gender}&category=${category}&limit=1&page=${currentPage}`);

        setProducts(response.data.products || []);

        if(response.data.pagination) {
          setTotalProducts(response.data.pagination.total);
          setTotalPages(response.data.pagination.totalPage);
        }

      } catch (error) {
        console.log(error);
      }
    };
    fetchProducts();
  }, [gender, category, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }
  
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }
  
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

    <Pagination
      currentPage={currentPage}
      totalPages={totalPages}
      handlePrevPage={handlePrevPage}
      handleNextPage={handleNextPage} 
    />
  </section>;
};

export default CategoryProduct;
