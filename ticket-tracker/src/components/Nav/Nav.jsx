import "./Nav.scss";
import settings from "../../assets/images/settings-icon.png";
import logo from "../../assets/images/bee_logo.PNG"

const Nav =()=>{
     return <nav className="nav">
        <img className="nav__logo" src={logo} alt="Busy Bee logo"/>
        <img className="nav__item" src={settings} alt="settings icon" />
     </nav>
};

export default Nav