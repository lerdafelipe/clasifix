import React from 'react'
import './ProductCard.css'
//components
import Counter from '../Counter/index'

function ProductCard({img, name}) {
    return (
        <div>
            <div className="cards">
                <img src={img} alt="Product" />
                <h3>{name}</h3>
                <Counter/>
            </div>
        </div>
    )
}

export default ProductCard;