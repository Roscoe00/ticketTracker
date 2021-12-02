import "./Nav.scss";
import settings from "../../assets/images/settings-icon.png";

const Nav =(props)=>{
     return <nav className="nav">
        <h1 className="nav__title">TicketTrackerLogo</h1>
        <img className="nav__item" src={settings} alt="settings icon" />
     </nav>
};

export default Nav