// src/CustomNavbar.js
import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div style={{display: 'flex', flexDirection: 'row',justifyContent: 'space-between',background: '#e5e5e5',padding:'20px'}}>
        <div style={{display:'flex',gap:'10px',cursor:'pointer'}}>
            <Link to="/">Home</Link>
            <Link to="/">products</Link>
        </div>
      </div>
  );
};

export default Navbar;
