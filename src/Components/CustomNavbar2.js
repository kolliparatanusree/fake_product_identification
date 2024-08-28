import { Link, useNavigate } from 'react-router-dom';
import './CustomNavbar.css';
import { useContext } from 'react';
import { UserContext } from '../App';

const CustomNavbar2 = () => {
    const navigate = useNavigate();
    const{isAdmin,setIsAdmin} = useContext(UserContext);
    const logout = ()=>{
        navigate("/login1");
        setIsAdmin(false);
    }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/instructions">Instructions</Link>
      </div>
      <div className="navbar-right">
      <Link to="/admin">Main page</Link>
      <button type="button" style={{border:'0px'}} onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}
export default CustomNavbar2;