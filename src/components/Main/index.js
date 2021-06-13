import React from 'react'
import './Main.css'
import NavBar from '../NavBar/index'

function Main() {
    return (
        <div className="main-container">
            <img src="https://lerdafelipe.github.io/magmacocteles/imagenes/logo.png" alt="Logo-Marca"/>
            <p>Lorem Ipsum is simply dummy text.</p>
            <h6 className="info">Abierto de Viernes a Domingos de 20hs a 6hs.</h6>
            <NavBar/>
        </div>
    )
}

export default Main
