import React from 'react';
import logo from "./LittleLemonLogo.jpg";
import {Link} from 'react-router-dom';

function Nav() {
    return (
        <div className='nav'>
            <nav>
            <img src={logo} alt="logo" />
            <ul>
                <li><Link to="/">Home</Link></li>
                <li>About</li>
                <li>Menu</li>
                <li><Link to="/BookingPage">Reservations</Link></li>
                <li>Order Online</li>
                <li>Login</li>
            </ul>
            </nav>
        </div>
    );
  }

  export default Nav;