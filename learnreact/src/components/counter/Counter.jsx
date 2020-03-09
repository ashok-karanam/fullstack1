import React from 'react';
import './Counter.css';

function Counter() {
    return(
        <div className="counter">
          Counter Component
          <button onClick={increment}>+ 1</button>
          <span className="count">0</span>
        </div>
    )
}

function increment() {
    console.log('Increment');
}

export default Counter