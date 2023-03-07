import React from 'react';
import {Link } from 'react-router-dom';

function Navigation() {
    return (
        <nav className="nav_bar">
            <div>
                <Link to="/" className='nav_bar_text'>Home</Link>
            </div>
            <div>
                <Link to="/order" className='nav_bar_text'>Order</Link>
            </div>
            <div>
            <Link to="/register" className='nav_bar_text'>Registration</Link>
            </div>
        </nav>
    );
  }
  

export default Navigation;