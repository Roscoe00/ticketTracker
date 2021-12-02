import "./Button.scss";


const Button =(props)=>{
   let buttonStyles = "button"
   
   if (props.isMinus===true){
      buttonStyles +=" button--minus"
   }else{
      buttonStyles +=" button--plus"
   }
 
   return <div className={buttonStyles}>{props.buttonText}</div>
};

export default Button