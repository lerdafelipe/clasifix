import React, { Component } from 'react';
import './NavBar.css';
//
import CartWidget from '../CartWidget/index'

class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <ul>
                        <li><p>Picadas</p></li>
                        <li><p>Entradas</p></li>
                        <li><p>Platos</p></li>
                        <li><p>Bebidas</p></li>
                        <li><p>Cocteles</p></li>
                    </ul>
                    <CartWidget/>
                </nav>
            </>
        )
    }
}


export default NavBar;