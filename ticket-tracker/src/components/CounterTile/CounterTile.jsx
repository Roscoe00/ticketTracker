import React, { useState } from "react";
import "./CounterTile.scss";
import Button from "../Button/Button"

const CounterTile =()=>{
    
    const [counter,setCounter]=useState(0);
    const handleIncrement = () => {
       setCounter(counter+1)
    }
     
    const handleDecrement = () => {
        if (counter===0){
            setCounter(0)
        }else{
       setCounter(counter-1)
    }
    }

     return (<div className="tile__counter">
         <p className="tile__counter-nubmer">Counter: {counter}</p>
         <div onClick={handleDecrement}>
         <Button  buttonText="-" isMinus={true} />
         </div>
         <div onClick={handleIncrement}>
         <Button onClick={handleIncrement}  buttonText="+" isMinus={false} />
         </div>
     </div>
     )
};

export default CounterTile
