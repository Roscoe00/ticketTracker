import "./App.scss";
import Nav from "./components/Nav/Nav"
import team from "./data/users"
import UserTile from "./components/UserTile/UserTile"
import CompletedTile from "./components/CompletedTile/CompletedTile"


const App = () => {
  return (
    <>
    <Nav />
    <CompletedTile />
   </>
  )
};


export default App;