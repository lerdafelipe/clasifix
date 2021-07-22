import React, { useState } from 'react';
// Router
import { Link } from 'react-router-dom';
// Styles
import './NavBar.css';
// Component Cart icon
import { HiMenuAlt1 } from 'react-icons/hi';
import CartWidget from '../CartWidget/index';
// Import hamburguer menu from react-icons

function NavBar() {
  // Show and hide menu mobile
  const [showMenu, setShowMenu] = useState(false);

  // Toggle for show and hide menu mobile
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <>
      <div className="NavBar">
        <nav>
          <ul>
            <Link to="/" className="Link"><p>Todos los productos</p></Link>
            <Link to="/category/Entradas" className="Link"><p>Entradas</p></Link>
            <Link to="/category/Platos" className="Link"><p>Platos</p></Link>
            <Link to="/category/Bebidas" className="Link"><p>Bebidas</p></Link>
            <Link to="/category/Cocteles" className="Link"><p>Cocteles</p></Link>
          </ul>
          <Link to="/Cart" className="toCart"><CartWidget /></Link>
        </nav>
      </div>

      <div className="NavMobile">
        <nav>
          <button type="button" onClick={toggleMenu}>
            <HiMenuAlt1 />
            Categorias
          </button>
          <Link to="/Cart" className="toCart"><CartWidget /></Link>
          <ul className={showMenu ? ('active') : null}>
            <Link to="/" className="Link"><p>Todos los productos</p></Link>
            <Link to="/category/Entradas" className="Link"><p>Entradas</p></Link>
            <Link to="/category/Platos" className="Link"><p>Platos</p></Link>
            <Link to="/category/Bebidas" className="Link"><p>Bebidas</p></Link>
            <Link to="/category/Cocteles" className="Link"><p>Cocteles</p></Link>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default NavBar;
