import "./Button.scss";


const Button =(props)=>{
   let buttonStyles = "button"
   
   if (props.isMinus===true){
      buttonStyles +=" button--minus"
   }else{
      buttonStyles +=" button--plus"
   }
 
   return <button className={buttonStyles}>{props.buttonText}</button>
};

export default Button