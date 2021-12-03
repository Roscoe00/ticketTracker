import "./UserTile.scss";
import CounterTile from "../CounterTile/CounterTile"

const UserTile = props =>{
     const {userName,userRole} = props;

     return (
     <div className="tile">
          <p className="tile__name">Name: </p>
          <p className="tile__user"> {userName} </p>
          <p className="tile__name">Role:</p>
          <p className="tile__user">{userRole}</p>
          <CounterTile/>
     </div>
     )
};

export default UserTile