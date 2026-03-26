import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import useCart from '../../hooks/useCart';

const ProductDetail = () => {
  // const navigate = useNavigate();
  const { gender, category, product_id } = useParams();
  const [ product, setProduct ] = useState(null);

  const [selectedSizes, setSelectedSizes] = useState("");

  const { addToCart } = useCart();

  useEffect(() => {
    const fetchProductId = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products/${gender}/${category.toLowerCase()}/${product_id}`);
        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchProductId();
  }, [gender, category, product_id])

  // Manejar cambio
  const handleSizeChange = (e) => {
    setSelectedSizes(e.target.value);
  }

  const handleBtnClick = () => {
    addToCart(product.product_id, 1, selectedSizes);
  }

  if (!product) return <p>Cargando detalle de producto...</p>;

  return (
  <>
    <section key={uuidv4()} className="productDetail-container">
      <img className="product-image" src={product.url_image} alt={product.description} title={product.name} />
      <h2 className="product-title">{product.name}</h2>
      <p className="product-price">{product.price} €</p>

      <h3 className="sizes-title">Talla</h3>
      <select className="sizes-select" value={selectedSizes} onChange={handleSizeChange}>
        <option value="" disabled></option>
        {product.sizes.map((size) => (
          <option className="sizes-options" key={uuidv4()} value={size}>{size}</option>
        ))}
      </select> 

      <button className="add-btn" onClick={handleBtnClick}>
        Añadir a la Cesta <FontAwesomeIcon icon={faShoppingBag} />
      </button>

      <section className="product-info-section">
      <details className="product-details">
        <summary className="product-summary">
          Descripción
        </summary>
        <p className="product-description">{product.description}</p>
      </details>
      <details className="product-details">
        <summary className="product-summary">Envío y Devoluciones</summary>
        <p className="product-description">
          Entrega estándar en 2-4 días laborables. Las devoluciones son gratuitas y pueden realizarse en tienda o mediante recogida a domicilio en un plazo de 30 días.
        </p>
      </details>
      </section>
    </section>
  </>
  );
}

export default ProductDetail;
