import { Link } from "react-router-dom";

const Navbar = ({toggle,setToggle}) => {
    return ( <nav className="navbar" style={{left:toggle&& "0"}}>
        <ul className="navbar-links">
            <Link to="/" className="navbar-link" onClick={()=>setToggle(false)}>Home</Link>
            <Link to="/authors" className="navbar-link" onClick={()=>setToggle(false)}>Authors</Link>
            <Link to="/about" className="navbar-link" onClick={()=>setToggle(false)}>About Us</Link>
            <Link to="/contact" className="navbar-link" onClick={()=>setToggle(false)}>Contact Us</Link>
            <Link to="register" className="navbar-link" onClick={()=>setToggle(false)}>Register</Link>
          
        </ul>
    </nav>);
}
 
export default Navbar;