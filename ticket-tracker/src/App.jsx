import "./App.scss";
import Nav from "./components/Nav/Nav"
import team from "./data/users"
import UserTile from "./components/UserTile/UserTile"
import CompletedTiles from "./components/CompletedTile/CompletedTile"


const App = () => {
  return (
    <>
    <Nav />
    <div  className="all-tiles">
    <CompletedTiles/>
    </div>
   </>
  )
};


export default App;