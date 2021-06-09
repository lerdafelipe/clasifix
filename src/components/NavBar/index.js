import React, { Component } from 'react';
import './NavBar.css';
//
import CartWidget from '../CartWidget/index'

class NavBar extends Component {
    render() {
        return (
            <>
                <nav>
                    <h1>Clasifix</h1>
                    <ul>
                        <li><a href="#">Picadas</a></li>
                        <li><a href="#">Entradas</a></li>
                        <li><a href="#">Platos</a></li>
                        <li><a href="#">Bebidas</a></li>
                        <li><a href="#">Cocteles</a></li>
                        <li><CartWidget/></li>
                    </ul>
                </nav>
            </>
        )
    }
}


export default NavBar;