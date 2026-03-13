import React, { useState, useEffect } from "react";
import { Link, useParams, Outlet, NavLink } from "react-router-dom";
import axios from 'axios';
import sectionImgWomen from '../../../public/images/SeccionPrincipalMujer.png';
import sectionImgMen from '../../../public/images/SeccionPrincipalHombre.png'


const CategoryLanding = () => {
  const { gender } = useParams(); // Mujer / hombre

  const [ categories, setCategories ] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?gender=${gender}`);

        setCategories(response.data.categories || []);

      } catch(error) {
        console.log(error);
      }
    }
    fetchCategories();
  }, [gender]);

  const isWomen = gender?.toLowerCase() === 'mujer';
  // const textGenre = textIsWomen ?  textFemale : textMale;

  // Imagen sección mujer / hombre
  const sectionImg = isWomen ? sectionImgWomen : sectionImgMen;
    
  return (
    <section className="gender-container">
      <Link className="gender-link" to={`/${gender}`}>
      <section className="section-gender-top">
          <img src={sectionImg} alt="Imagen principal sección" className="gender-main-img" />
        <h2 className="gender-title">Moda {gender}</h2>
        <p>Descubre una selección editorial de piezas atemporales diseñadas para la {gender} contemporánea.</p>
      </section>
      </Link>

    <section className="btn-categories">
      <h3>Categorías</h3>
      { categories.map((item, index) => (
        <NavLink key={index} to={`/${gender}/${item.category.toLowerCase()}`} className="category-link">
          {item.category} <span>{item.total_products}</span>
        </NavLink>
      ))}
    </section>
    <Outlet />
  </section>);
};

export default CategoryLanding;