import React from 'react'
import { useState } from 'react';
import './ButtonClick.css';

function ButtonClick() {
    const [count, setCount] = useState(0);
    return (
     <div className = "Button">
       <p>You clicked {count} times</p>
       <button onClick={() => setCount(count + 1)}>
        Click me!
       </button>
     </div>
    );
}

export default ButtonClick
