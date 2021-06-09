import React, { Component } from 'react'
import './counter.css'

class Counter extends Component {
    constructor(){
        super();
    
        this.state = {
          count: 0,
        };
      }
      handleCounterUp=()=>{
        this.setState({count: this.state.count + 1});
      }
      handleCounterDown=()=>{
        this.setState({count: this.state.count - 1});
      }
        
    render() {
        return (
            <div>
                <div className="counter-container">
                    <button onClick={this.handleCounterUp}>+</button>
                    <p>{this.state.count}</p>
                    <button onClick={this.handleCounterDown}>-</button>
                </div>
            </div>
        )
    }
}


export default Counter;