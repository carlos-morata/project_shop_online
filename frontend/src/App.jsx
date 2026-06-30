import React from 'react'
import { Routes, Route } from 'react-router-dom';
// Importaciones  de Layout
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'

// Importaciones de Forms
import RegisterUser from './components/forms/RegisterUser';
import LoginUser from './components/forms/LoginUser';
import ContactForm from './components/forms/ContactForm';

// Importaciones de Pages
import HomePage from './pages/HomePage';
import CategoryLanding from './pages/CategoryLanding';
import CategoryProduct from './pages/CategoryProduct';
import AllProducts from './pages/AllProducts';
import ProductDetail from './pages/ProductDetail';
import LegalPage from './pages/LegalPage';
import AuthorPage from './pages/AuthorPage';
import SearchPage from './pages/SearchPage'
import NotFoundPage from './pages/NotFoundPage';
import UserPage from './pages/UserPage';
import ShoppingCartPage from './pages/ShoppingCartPage';
import OrdersPage from './pages/OrdersPage';
import OrderDetailPage from './pages/OrderDetailPage';

import './styles/styles.scss'

import './App.css'

function App() {

  return (
    <>
    <Header />
    <main className='main-container'>
      <Routes>
        {/* Rutas Estáticas */}
        <Route path='/' element={<HomePage />}/> {/* Página Principal */}
        <Route path='/legalidad' element={<LegalPage />}/> {/* Políticas Legales */}
        <Route path='/creditos' element={<AuthorPage />}/> {/* Derechos de Autor */}
        <Route path='/panel-usuario' element={<UserPage />}/> {/* Panel de Usuario */}
        <Route path='/registro' element={<RegisterUser />}/> {/* Registro de Usuario */}
        <Route path='/inicioSesión' element={<LoginUser />}/> {/* Inicio Sesión de Usuario */}
        <Route path='/contacto' element={<ContactForm />}/> {/* Contacto */}
        <Route path='/carrito' element={<ShoppingCartPage />}/> {/* Carrito de la compra */}
        <Route path='/pedidos' element={<OrdersPage />} /> {/* Pedidos */}

        {/* Rutas Dinámicas */}
        <Route path='/buscar/:query' element={<SearchPage />} />
        <Route path='/:gender' element={<CategoryLanding />}> {/* Mujer, Hombre, etc */}
          <Route index element={<AllProducts />}/> {/* mujer/todos los productos */}
          <Route path=':category' element={<CategoryProduct />}/> {/* mujer/abrigos */}
        </Route>
        <Route path='/:gender/:category/:product_id' element={<ProductDetail />}/> {/* mujer/abrigos/abrigo_1 */}
        <Route path='/pedidos/:order_id' element={<OrderDetailPage />} /> {/* pedidos/pedido_1 */}

        {/* Rutas Para Manejar Fallos */}
        <Route path='/*' element={<NotFoundPage />}/> {/* NotFound */} 
      </Routes>
    </main>
    <Footer />
    </>
  )
}

export default App
