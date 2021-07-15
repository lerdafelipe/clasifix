import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';
import './ItemCount.css'
import {CartContext} from './../../Context/CartContext'


function ItemCount({stock, onAdd, item}) {
  let [count, setCount] = useState(1);
  let [cantidad, setCantidad] = useState(0)
  let [endPurchase, setEndPurchase] = useState(false)

  const myContext = useContext(CartContext);

  const counterUp = ()=>{
    if(count < stock){ setCount(count + 1)}
  }

  const countDown = ()=>{
    if(count > 1){ setCount(count - 1)}
  }
  onAdd = ()=>{
    if(stock > 0){
    setCantidad(cantidad = count)
    myContext.addItem(item, cantidad);
    setCount(count = 1);}
    if(cantidad>0){  
      setEndPurchase(endPurchase = true)
    }
  }

  return (
    <div>
      <div className="counter-container">
          <button onClick={counterUp}>+</button>
          <p>{count}</p>
          <button onClick={countDown}>-</button>
      </div>
      <button className="onAdd" onClick={onAdd}>Agregar {count} Items</button>
      {endPurchase ?  
        (<Link className="endPurchase" to="/Cart">¡Finalizar compra!</Link>)
        : (<></>)}
    </div>
  )
}


export default ItemCount;

