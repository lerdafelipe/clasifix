import React from 'react'
//Styles
import './ItemDetail.css'
//Import component counter
import ItemCount from './../ItemCount/index'
//Import image if the product haven't a image
import img from './card-img.png'

function ItemDetail({producto}) {

    return (
        <>
        <div className="details_container">
            <div className="details-img">
                <img src={producto.img} alt="product"/>
            </div>
            <div className="details">
                <h3>{producto.name}</h3>
                <h5>${producto.price}</h5>
                <p>{producto.description}</p>
                <p>Cantidad disponibles: {producto.stock}</p>
                <ItemCount stock={producto.stock} item={producto}/>
            </div>
        </div>
        </>
    )
}

ItemDetail.defaultProps = {
    stock: 0,
    img: img
}

export default ItemDetail
