import React from "react";
import { Link } from "react-router-dom";



const HomePage = () => {
  return <section className="home-container">
    <section className="newCollection-home">
      <div className="content-home">
      <p className="text-new">Nueva Colección</p>
      <h2 className="title-home">Primavera - Verano '26</h2>
      <p>Elementos esenciales de alta gama, diseñados para la persona moderna. Descubre una combinación de comodidad y lujo.</p>
      <button className="collection-btn">Descubrir Colección &rarr;</button>
      </div>
    </section>

    <article className="article-story">
      <span>La artesanía</span>
      <h3 className="title-story">Diseño Sostenible</h3>
      <p>Nuestro compromiso con el planeta está presente en cada prenda. Nos abastecemos de algodones orgánicos y fibras recicladas, colaborando con artesanos que comparten nuestra visión de una industria de la moda más ética.</p>
      <Link to="/" className="story-link">Lee nuestra historia &rarr;</Link>
    </article>

    <section className="shop-sections">
      <section  className="genre-section genre-women">
        <Link to="/mujer">
          <div className="content-genre">
          <h3 className="title-section">Mujer</h3>
          <p>Comprar ahora</p>
          </div>
        </Link>
      </section>
      <section className="genre-section genre-men">
        <Link to="/hombre">
          <div className="content-genre">
          <h3 className="title-section">Hombre</h3>
          <p>Comprar ahora</p>
          </div>
        </Link>
      </section>
      <section className="genre-section genre-accesories">
        <Link to="/accesorios">
          <div className="content-genre">
          <h3 className="title-section">Accesorios</h3>
          <p>Comprar ahora</p>
          </div>
        </Link>
      </section>
      <section className="genre-section genre-sales">
        <Link to="/rebajas">
          <div className="content-genre">
          <h3 className="title-section">Rebajas</h3>
          <p>Comprar ahora</p>
          </div>
        </Link>
      </section>
    </section>
  </section>;
};

export default HomePage;
