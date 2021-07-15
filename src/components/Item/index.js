import React from 'react'
import './Item.css'
//components
import img from './card-img.png'

function Item({img, name, price}) {
    return (
        <>
            <div className="cards"> 
                <div className="card__image">
                    <img src={img} alt="Product" />
                </div>
                <h3 className="card__name">{name}</h3>
                <div className="card__details">
                    <h4>${price}</h4>
                    <h5>Ver Más</h5>
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