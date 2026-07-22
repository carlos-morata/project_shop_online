import React from "react";
import api from '../../../config/axiosInstance';
import { Trash2 } from 'lucide-react';

const DeleteProduct = ({ cart_id, handleDeleteProduct }) => {

    const handleDelete = async () =>{
      try {
        await api.delete(`/api/cart/${cart_id}`);
        handleDeleteProduct(cart_id)

      } catch (error) {
        console.log(error);
      }
    }

  return <button className="delete-button" onClick={handleDelete}><Trash2 /></button>;
};

export default DeleteProduct;
