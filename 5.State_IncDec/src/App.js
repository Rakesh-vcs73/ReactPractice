import React from 'react';
import Button from "./components/Button"
import { useState } from "react";
import "./style.css"

export default function App() {
    const [count, setCount] = useState(0);
    function Increment() {
        setCount(count + 1)
    }

    function Decrement(){
      setCount(count - 1)
    }
    console.log("Incremented: ",count)
    return (
      <div className='main-div'>
        <Button text="Increment" onclick={Increment}/>
        <h1 className='main-h1'>{count}</h1>
        <Button text="Decrement" onclick={Decrement}/>
      </div>
    );
}


