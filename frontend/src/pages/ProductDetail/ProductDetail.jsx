import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

const ProductDetail = () => {
  // const navigate = useNavigate();
  const { gender, category, product_id } = useParams();
  const [ product, setProduct ] = useState([]);

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
        const response = await axios.get(`http://localhost:3000/${gender}/${category}/${product_id}`);
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

  return (
  <>
    {product.map((item) => (
    <section key={uuidv4()} className="productDetail-container">
      <img src={item.url_image} alt={item.description} title={item.name} />
      <h1>{item.name}</h1>
      <p>{item.price} €</p>
      <select value={selectedSizes} onChange={handleSizeChange}>
        <option value="" disabled> Elige tú Talla </option>
        {item.sizes.map((size) => (
          <option key={uuidv4()} value={size}>{size}</option>
        ))}
      </select> 
      {/* <button className="add-btn" onClick={() => handleAddToCart(item)}>Añadir al Carrito</button> */}
      <p>{item.description}</p>
    </section>
    ))}
  </>
  );
}

export default ProductDetail;
