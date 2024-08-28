import { Link, useNavigate } from 'react-router-dom';
import './Navbar1.css';
import { useContext } from 'react';
import { UserContext } from '../App';

const CustomNavbar1 = () => {
    const navigate = useNavigate();
    const{isLogin,setIsLogin} = useContext(UserContext)
    const logout = ()=>{
        navigate("/login");
        setIsLogin(false);
    }
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <Link to="/">Home</Link>
        <Link to="/instructions">Instructions</Link>
      </div>
      <div className="navbar-right">
      <Link to="/addproduct">Addproduct</Link>
      <button type="button" style={{border:'0px'}} onClick={logout}>Logout</button>
      </div>
    </nav>
  );
}

export default CustomNavbar1;