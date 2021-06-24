import React, { useState } from 'react'
import './ItemCount.css'

function ItemCount({stock, onAdd, name}) {
  let [count, setCount] = useState(1);

  const counterUp = ()=>{
    if(count < stock){ setCount(count + 1)}
  }

  const countDown = ()=>{
    if(count > 1){ setCount(count - 1)}
  }
  onAdd = ()=>{
    if(stock > 1){
    console.log("Agregaste al carrito ", count," ", name)
    setCount(count = 1);}
  }

  return (
    <div>
      <div className="counter-container">
          <button onClick={counterUp}>+</button>
          <p>{count}</p>
          <button onClick={countDown}>-</button>
      </div>
      <button className="onAdd" onClick={onAdd}>Agregar</button>
    </div>
  )
}


export default ItemCount;

