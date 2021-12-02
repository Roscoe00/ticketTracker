import "./UserTile.scss";
import CounterTile from "../CounterTile/CounterTile"


const UserTile =(props)=>{
     const{userName,userRole} = props


     return <div>
          <p>Name: {userName} </p>
          <p>Role: {userRole}</p>
          <CounterTile />
     </div>
     
};

export default UserTile