import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';

//pictures
import logo from "./LittleLemonLogo.jpg";

function Footer() {
    return (
        <footer>
            <div id="foot0">
                <img src={logo} alt='logo'/>
            </div>
            <div id="foot1">
                <p>Doormat Navigation</p>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li>About</li>
                    <li>Menu</li>
                    <li><Link to="/BookingPage">Reservations</Link></li>
                    <li>Order Online</li>
                    <li>Login</li>
                </ul>
            </div>
            <div id="foot2">
                <p>Contact</p>
                <ul>
                    <li>Address</li>
                    <li>Phone Number</li>
                    <li>Email</li>
                </ul>
            </div>
            <div id="foot3">
                <p>Social Media Links</p>
                <ul>
                    <li>Instagram</li>
                    <li>Facebook</li>
                </ul>
            </div>
        </footer>
    );
  }

  export default Footer;