import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../App';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import './Login1.css';

const Login1 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { isAdmin, setIsAdmin } = useContext(UserContext);
  const navigate = useNavigate();

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    if (email === "lakshmikalyani@gmail.com" && password === "Kalyani@2005") {
      setIsAdmin(true);
      toast.success('Login successful!', {
        position: "top-right",
        autoClose: 5000, // Toast will disappear after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
      setTimeout(() => navigate("/admin"), 1500); // Navigate after a short delay
    } else {
      toast.error('Invalid Login Credentials', {
        position: "top-right",
        autoClose: 5000, // Toast will disappear after 5 seconds
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  return (
    <div className="login1-container">
      <ToastContainer />
      <br />
      <h1 align="center" style={{ marginTop: '30px' }}>Admin Login</h1>
      <div className="card" style={{ width: '600px', padding: '35px', justifyContent: 'center', marginLeft: '550px', marginTop: '40px', background:'#8ed5f9' }}>
        <form onSubmit={handleLogin}>
          <div style={{ position: 'relative', marginBottom: '15px' }}>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ borderRadius: '5px', border: '1px solid grey', height: '35px', width: '100%' }}
            />
          </div>
          <div style={{ position: 'relative', marginBottom: '15px' }}>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{ borderRadius: '5px', border: '1px solid grey', height: '35px', width: '100%' }}
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              style={{
                position: 'absolute',
                left:'150px',
                top: '0%',
                border:'none',
                background: 'transparent',
                cursor: 'pointer',
              }}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>
          <div style={{ textAlign: 'center' }}>
            <button type="submit" className='btn'><b>Login</b></button>
          </div>
          <br />
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default Login1;
