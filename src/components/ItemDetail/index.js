import React from 'react'
import './ItemDetail.css'
//Components
import ItemCount from './../ItemCount/index'
import img from './../../card-img.png'

function ItemDetail({img, name, price, description, stock}) {
    return (
        <>
        <div className="details_container">
            <img src={img} alt="product"/>
            <div className="details">
                <h3>{name}</h3>
                <h6>${price}</h6>
                <p>{description}</p>
                <ItemCount name={name} stock={stock}/>
            </div>
        </div>
        </>
    )
}

ItemDetail.defaultProps = {
    stock: 5,
    img: img,
    price: 257
}

export default ItemDetail
