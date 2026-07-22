import React, { useState } from "react";
import api from '../../../config/axiosInstance';

const UpdateProducts = ({ product_id, url_image, name, price, sizes, description, category, gender, stock }) => {

  const [ editProducts, setEditProducts ] = useState({ url_image, name, price, sizes, description, category, gender, stock });

  const handleSumbit = async (e) => {
    e.preventDefault();
    try {
      await api.patch(`/api/admin/update-product/${product_id}`, editProducts);
      alert('¡Producto Editado Correctamente!');
      window.location.href = `/${gender}/${category}/${product_id}`
    } catch (error) {
        console.log(error);
      }
  }

  const handleChange = (e) => {
    setEditProducts({ ...editProducts, [e.target.name]: e.target.value });
  }

  return <form onSubmit={handleSumbit} className="updateProducts-form">
    <input type="text" value={editProducts.url_image} onChange={handleChange} name="url_image" className="updateProducts-input" />
    <input type="text" value={editProducts.name} onChange={handleChange} name="name" className="updateProducts-input" />
    <input type="text" value={editProducts.price} onChange={handleChange} name="price" className="updateProducts-input" />
    <input type="text" value={editProducts.sizes} onChange={handleChange} name="sizes" className="updateProducts-input" />
    <input type="text" value={editProducts.description} onChange={handleChange} name="description" className="updateProducts-input" />
    <input type="text" value={editProducts.stock} onChange={handleChange} name="stock" className="updateProducts-input" />
    <input type="text" value={editProducts.category} onChange={handleChange} name="category" className="updateProducts-input" /><input type="text" onChange={handleChange} value={editProducts.gender} name="gender" className="updateProducts-input" />
    <button type="submit">Guardar Cambios</button>
  </form>;
};

export default UpdateProducts;
