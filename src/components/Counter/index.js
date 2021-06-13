import React, { useState } from 'react'
import './counter.css'

function Counter() {
  const [count, setCount] = useState(1);
  const [stock] = useState(8);

  const counterUp = ()=>{
    if(count < stock){ setCount(count + 1)}
  }

  const countDown = ()=>{
    if(count > 1){ setCount(count - 1)}
  }

  return (
    <div>
      <div className="counter-container">
          <button onClick={counterUp}>+</button>
          <p>{count}</p>
          <button onClick={countDown}>-</button>
      </div>
    </div>
  )
}

export default Counter;

