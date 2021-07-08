import React, {useContext} from 'react';
import './CartWidget.css';
import {GrCart} from 'react-icons/gr';
import { CartContext } from '../../Context/CartContext';

function CartWidget() {
    const {cartNumber} = useContext(CartContext);
    return (
    <>
    <span className="cart-widget"><GrCart/><p>{cartNumber()}</p></span>
    </>)
}

export default CartWidget;

