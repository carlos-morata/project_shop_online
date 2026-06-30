import React from "react";
import api from '../../../config/axiosInstance';
import { Trash2 } from 'lucide-react';

const DeleteProduct = ({ cart_id, handleDeleteProduct }) => {

    const handleDelete = async () =>{
      try {

        const token = localStorage.getItem('token');
        if(!token){
          alert(`Inicia Sesión para borrar productos del carrito.`);
          return;
        }
        await api.delete(`/cart/${cart_id}`, { headers: { Authorization: `Bearer ${token}` } });
        handleDeleteProduct(cart_id)

      } catch (error) {
        console.log(error);
      }
    }

  return <button className="delete-button" onClick={handleDelete}><Trash2 /></button>;
};

export default DeleteProduct;
