import React from 'react'
import './Item.css'
//components
import ItemCount from '../ItemCount/index'
import img from './../../card-img.png'

function Item({img, name, stock}) {
    return (
        <>
        <div className="div-cards">
            <div className="cards">
                <img src={img} alt="Product" />
                <h3>{name}</h3>
                <ItemCount name={name} stock={stock}/>
            </div>
        </div>
        </>
    )
}

Item.defaultProps = {
    stock: 5,
    img: img
}

export default Item;