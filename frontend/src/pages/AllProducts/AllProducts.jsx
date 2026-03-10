import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const AllProducts = () => {
  const { gender, category } = useParams();
  const [ products, setProducts ] = useState([]);
  const [ totalProducts, setTotalProducts ] = useState(0);
  const [ currentPage, setCurrentPage ] = useState(1);
  const [ totalPages, setTotalPages ] = useState(1);

  // Devolver a la página 1.
  useEffect(() => {
    setCurrentPage(1);
  }, [gender, category]);

  useEffect(() => {
    const fetchAllProducts = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?gender=${gender}&page=${currentPage}`);

        setProducts(response.data.products || []);

        if(response.data.pagination) {
          setTotalProducts(response.data.pagination.total);
          setTotalPages(response.data.pagination.totalPage);
        }

      } catch (error) {
        console.log(error);
      }
    }
    fetchAllProducts()
  }, [gender, category, currentPage]);

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  }
  
  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  }

  return <section className="products-container">
    <p className="showProducts-text">Mostrando <strong>{totalProducts}</strong> productos</p>
    <hr />
    <section className="products-grid">
      { products.map((item) => (
        <Link key={item.product_id} to={`/${gender}/${item.category?.toLowerCase()}/${item.product_id}`}>
          <article className="product-article">
            <img src={item.url_image} alt={item.name} />
            <h3>{item.name}</h3>
            <span>{item.price} €</span>
          </article>
        </Link>
      ))}
    </section>

    { totalPages > 1 && (
      <section className="pagination-container">
        <button 
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className="btn-pagination">
            Anterior
        </button>
        <p>Página {currentPage} de {totalPages}</p>
        <button 
          onClick={handleNextPage}
          disabled={currentPage === totalPages}
          className="btn-pagination">
            Siguiente
        </button>
      </section>
    )}
  </section>;
};

export default AllProducts;
