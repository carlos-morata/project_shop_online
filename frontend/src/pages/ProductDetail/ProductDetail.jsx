import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ProductDetail = () => {
  // const navigate = useNavigate();
  const { gender, category, product_id } = useParams();
  const [ product, setProduct ] = useState(null);

  const [selectedSizes, setSelectedSizes] = useState("");

  // const handleAddToCart = async (item) => {
  //   const token = localStorage.getItem('token');

  //   if (!token) {
  //     alert("Para añadir productos, necesitas iniciar sesión.");
  //     navigate('/registro');
  //     return;
  //   };

  //   try {
  //     const response = await axios.post('http://localhost:3000/add', {
  //       user_id: item.user_id,
  //       product_id: item.product_id,
  //       quantity: 1,
  //       size: selectedSizes
  //     }, {
  //       headers: { Authorization: `Bearer ${token}` }
  //     })
  //     selectedSizes(response.data);
  //     alert("¡Producto añadido al carrito correctamente!s");
  //   }catch (error) {
  //     console.error(error);
  //   }
  //   }

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

  if (!product) return <p>Cargando detalle de producto...</p>;

  return (
  <>
    <section key={uuidv4()} className="productDetail-container">
      <img src={product.url_image} alt={product.description} title={product.name} />
      <h1>{product.name}</h1>
      <p>{product.price} €</p>

      <select value={selectedSizes} onChange={handleSizeChange}>
        <option value="" disabled> Elige tú Talla </option>
        {product.sizes.map((size) => (
          <option key={uuidv4()} value={size}>{size}</option>
        ))}
      </select> 

      {/* <button className="add-btn" onClick={() => handleAddToCart(product)}>Añadir al Carrito</button> */}
      <p>{product.description}</p>
    </section>
  </>
  );
}

export default ProductDetail;
