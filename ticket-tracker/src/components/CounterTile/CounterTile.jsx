import React, { useState } from "react";
import "./CounterTile.scss";
import Button from "../Button/Button"

const CounterTile =()=>{
    
    const [counter,setCounter]=useState(0);
    const handleIncrement = () => {
       setCounter(counter+1)
    }
     
    const handleDecrement = () => {
       setCounter(counter-1)
    }

     return (<div className="tile__counter">
         <p>Counter</p>
         <p className="tile__counter-nubmer">0</p>
         <Button onClick={handleDecrement} buttonText="-" isMinus={true} />
         <Button onClick={handleIncrement}  buttonText="+" isMinus={false} />
     </div>)
};

export default CounterTile
