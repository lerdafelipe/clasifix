import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
//
import CartWidget from '../CartWidget/index'

class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <Link to="/" className="Link"><p>Todos los productos</p></Link>
                        <Link to={`/category/jewelery`}  className="Link"><p>Entradas</p></Link>
                        <Link to={`/category/electronics`} className="Link"><p>Platos</p></Link>
                        <Link to={`/category/men's%20clothing`} className="Link"><p>Bebidas</p></Link>
                        <Link to={`/category/women's%20clothing`} className="Link"><p>Cocteles</p></Link>
                    </ul>
                    <Link to="/Cart"><CartWidget/></Link>
                </nav>
            </>
        )
    }
}


export default NavBar;