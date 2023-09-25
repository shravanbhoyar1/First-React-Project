import "./navbar.css"
import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <div className="navbar">
          <h2 className="nav-brand">ReactJS</h2>

          <Link className="nav-menu" to="/">Home</Link>
          <Link className="nav-menu" to="/about">About</Link>
          <Link className="nav-menu" to="/contact">Contact</Link>
        </div>
    );
}