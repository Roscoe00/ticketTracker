import "./App.scss";
import Nav from "./components/Nav/Nav"
import team from "./data/users"
import UserTile from "./components/UserTile/UserTile"


const App = () => {
  return (
    <>
    <Nav />
    <UserTile title="User" userInfo={team}/>
   </>
  )
};


export default App;