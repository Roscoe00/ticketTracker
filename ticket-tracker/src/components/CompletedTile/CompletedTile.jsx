import "./CompletedTile.scss";
import UserTile from "../UserTile/UserTile";
import team from "../../data/users"

const CompletedTiles = () =>{
   
   // console.log(user.name)
   const UserTilesJSX = team.map((user)=>(
      <div className="completed-tile" key={user.id}>
         <UserTile userName={user.name} userRole={user.role} />
      </div>
   ));
   return (<>
   {UserTilesJSX}
   </>)
}

export default CompletedTiles