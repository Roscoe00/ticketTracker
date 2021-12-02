
import "./CounterTile.scss";
import Button from "../Button/Button"

const CounterTile =(props)=>{
     return (<div className="tile__counter">
         <p>Counter</p>
         <p className="tile__counter-nubmer">0</p>
         <Button buttonText="-" isMinus={true} />
         <Button buttonText="+" isMinus={false} />
     </div>)
};

export default CounterTile
