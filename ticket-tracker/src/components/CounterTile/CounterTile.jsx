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
         <p className="tile__counter--number">Tickets Completed: {counter}</p>
         <div className="tile__counter--button" onClick={handleDecrement}>
         <Button  buttonText="-" isMinus={true} />
         </div>
         <div className="tile__counter--button" onClick={handleIncrement}>
         <Button onClick={handleIncrement}  buttonText="+" isMinus={false} />
         </div>
     </div>
     )
};

export default CounterTile
