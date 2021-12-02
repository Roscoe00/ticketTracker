import "./App.scss";
import Nav from "./components/Nav/Nav"
import team from "./data/users"
import UserTile from "./components/UserTile/UserTile"

const App = () => {
  return (
    <>
    <Nav />
    <UserTile userName={team[0].name} userRole={team[0].role}/>
   </>
  )
};


export default App;