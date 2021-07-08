import React from 'react'
import { Link } from 'react-router-dom';
import './NavBar.css';
//
import CartWidget from '../CartWidget/index'

function NavBar() {
    return (
        <>
            <nav>
                <ul>
                    <Link to="/" className="Link"><p>Todos los productos</p></Link>
                    <Link to={`/category/Entradas`}  className="Link"><p>Entradas</p></Link>
                    <Link to={`/category/Platos`} className="Link"><p>Platos</p></Link>
                    <Link to={`/category/Bebidas`} className="Link"><p>Bebidas</p></Link>
                    <Link to={`/category/Cocteles`} className="Link"><p>Cocteles</p></Link>
                </ul>
                <Link to="/Cart"><CartWidget/></Link>
            </nav>
        </>
    )
}

export default NavBar;
