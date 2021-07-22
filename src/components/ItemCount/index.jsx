import React, { useState, useContext } from 'react';
// Router
import { Link } from 'react-router-dom';
// Styles
import './ItemCount.css';
// Import the context
import PropTypes from 'prop-types';
import { CartContext } from '../../Context/CartContext';
// Import Proptypes

function ItemCount({ stock, item }) {
  // Counter
  const [count, setCount] = useState(1);
  // Quantity of products to buy
  let [cantidad, setCantidad] = useState(0);
  // Show the router to Cart
  const [endPurchase, setEndPurchase] = useState(false);

  // Declaring my context to send it info
  const myContext = useContext(CartContext);

  // Function increment the counter
  const counterUp = () => {
    if (count < stock) { setCount(count + 1); }
  };

  // Function decrement the counter
  const countDown = () => {
    if (count > 1) { setCount(count - 1); }
  };

  // Adding the product to the cart with a quatity
  const onAdd = () => {
    if (stock > 0) {
      // Changing the quantity 'Cantidad'
      setCantidad(cantidad = count);
      // Sending product to cartContext
      myContext.addItem(item, cantidad);
      // restarting counter
      setCount(1);
    }

    // When the 'Cantidad' change, show the router to cart
    if (cantidad > 0) {
      setEndPurchase(true);
    }
  };

  return (
    <div>
      <div className="counter-container">
        <button onClick={counterUp}>+</button>
        <p>{count}</p>
        <button onClick={countDown}>-</button>
      </div>
      <button className="onAdd" onClick={onAdd}>
        Agregar
        {count}
        {' '}
        Items
      </button>
      {endPurchase
        ? (<Link className="endPurchase" to="/Cart">¡Finalizar compra!</Link>)
        : (<></>)}
    </div>
  );
}

// Declaring the types of props
ItemCount.propTypes = {
  item: PropTypes.object,
  stock: PropTypes.number,
};

export default ItemCount;
