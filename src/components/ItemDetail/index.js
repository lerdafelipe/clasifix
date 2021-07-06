import React from 'react'
import './ItemDetail.css'
//Components
import ItemCount from './../ItemCount/index'
import img from './../../card-img.png'

function ItemDetail({producto}) {

    return (
        <>
        <div className="details_container">
            <div className="details-img">
                <img src={producto.image} alt="product"/>
            </div>
            <div className="details">
                <h3>{producto.title}</h3>
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
