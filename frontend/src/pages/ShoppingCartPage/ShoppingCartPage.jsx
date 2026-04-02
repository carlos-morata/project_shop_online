import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import useCartQuantity from "../../hooks/useCartQuantity";

const ShoppingCartPage = () => {
  const [ cart, setCart ] = useState([]);

  const { updateQuantity } = useCartQuantity(setCart);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem('token');

        if(!token) {
          alert("Para ver tús productos en la cesta, necesitas iniciar sesion.");
          return;
        }

        const response = await axios.get(`http://localhost:3000/api/cart/`, 
          { headers: { Authorization: `Bearer ${token}` } });

        setCart(response.data.data);
        
      } catch (error) {
        console.log(error);
      }
    }
    fetchCart();
  }, []);

  const totalProductsCart = cart.reduce((accumulator, item) => accumulator + item.quantity, 0);


  return <section className="shoppingCart-container">
    <div className="shoppingCart-top">
    <h2 className="title-cart">Mi cesta</h2>
    <Link className="shopping-link" to='/'>Seguir Comprando</Link>
    </div>
    <p className="articleCart-text">
      Tienes {totalProductsCart} { totalProductsCart === 1 ? 'artículo seleccionado' : 'artículos seleccionados' }
    </p> 
    <hr />
    { cart.length === 0 ? ( <p>Tú cesta está vacía.</p> ) : (
      cart.map((item, index) => (
        <article key={index} className="productCart-article">
            <img src={item.url_image} alt={item.name} className="productCart-image" />
            <h3 className="productCart-title">{item.name}</h3>
              <h4 className="specs-title">Especificaciones</h4>
            <section className="size-section">
              <p className="size-info">Talla: {item.size}</p>
              <div className="left-size-section">
                <button onClick={() => updateQuantity(item.product_id, item.size, item.quantity, -1)} className="quantity-button"> - </button>
                  <p className="quantity-info">{item.quantity}</p>
                <button onClick={() => updateQuantity(item.product_id, item.size, item.quantity, 1)} className="quantity-button"> + </button>
              </div>
            </section>
            <p className="productCart-price">{item.price} €</p>          
        </article>
      ))
    )}
  </section>;
};

export default ShoppingCartPage;
