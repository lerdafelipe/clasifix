import React from 'react'
//Styles
import './Item.css'
//Import image for default props
import img from './card-img.png';
//Import Proptypes
import PropTypes from 'prop-types';

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
    );
};

//Declaring default prop if the product don´t have a prop detailed
Item.defaultProps = {
    img: img
};
//Declaring the types of props
Item.propTypes= {
    name: PropTypes.string,
    img: PropTypes.string,
    price: PropTypes.number
};

export default Item;