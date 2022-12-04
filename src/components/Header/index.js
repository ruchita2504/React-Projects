import logo from './logo.png';
import './header.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <img  className="nav--icon" src={logo} alt="" width="80" height="50"/>
            <h3  className="nav--logo_text">ReactFacts</h3>
            <h4  className="nav--title">React Course - Project 1</h4>
           
        </nav>
    );
}
export default Navbar;


