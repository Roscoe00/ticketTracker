import "./UserTile.scss";
import CounterTile from "../CounterTile/CounterTile"

const UserTile = props =>{
     const {title,userInfo} = props;
     console.log(userInfo)
const userTilesJSX = userInfo.map((user)=>(
     <div key={user.id}>
     <p >Name: {user.name} </p>
          <p>Role: {user.role}</p>
          <CounterTile />
     </div>
));
     return (
          <span>{userTilesJSX}</span>
     )
};

export default UserTile