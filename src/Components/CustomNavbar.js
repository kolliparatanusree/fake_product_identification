import { Link } from 'react-router-dom';
import './CustomNavbar.css';

const CustomNavbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/instructions">Instructions</Link>
      </div>
      <div className="navbar-right">
        <div className="dropdown">
          <button className="dropbtn">Login As</button>
          <div className="dropdown-content">
            <Link to="/login1">Admin</Link>
            <Link to="/login">Manufacturer</Link>
            <Link to="/productvalidation">User</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default CustomNavbar;
