import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import axios from 'axios';
import sectionImgWomen from '../../../public/images/SeccionPrincipalMujer.png';
import sectionImgMen from '../../assets/images/seccionHombre.png';


const CategoryLanding = () => {
  const { genero } = useParams(); // Mujer / hombre
  const gender = genero;

  const [ categories, setCategories ] = useState([]);
  const [ products, setProducts ] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/api/products?gender=${gender}`);

        setCategories(response.data.categories || []);
        setProducts(response.data.products || []);

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
      <section className="section-gender-top">
          <img src={sectionImg} alt="Imagen principal sección" className="gender-main-img" />
        <h2 className="gender-title">Moda {gender}</h2>
        <p>Descubre una selección editorial de piezas atemporales diseñadas para la {gender} contemporánea.</p>
      </section>

    <section className="btn-categories">
      <h3>Categorías</h3>
      { categories.map((item, index) => (
        <Link key={index} to={`/${gender}/${item.category.toLowerCase()}`} className="category-link">
          {item.category} <span>{item.total_products}</span>
        </Link>
      ))}
    </section>
  </section>);
};

export default CategoryLanding;