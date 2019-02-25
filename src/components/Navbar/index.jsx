import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => (
    <nav className="topbar topbar-inverse topbar-expand-md topbar-sticky">
        <div className="container">
            <div className="topbar-left">
                <button className="topbar-toggler">☰</button>
                <Link className="topbar-brand" to="index.html">
                <h3 >Deutsch</h3>
                    {/* <img className="logo-default" src="assets/img/logo.png" alt="logo" />
                    <img className="logo-inverse" src="assets/img/logo-light.png" alt="logo" /> */}
                </Link>
            </div>
            <div className="topbar-right">
                <ul className="topbar-nav nav">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="create-article.html">Articles</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Hey Garry!
                            <i className="fa fa-caret-down" />
                        </Link>
                        <div className="nav-submenu">
                            <Link className="nav-link" to="page-login.html">My favorits</Link>
                            <Link className="nav-link" to='/'>Logout</Link>
                        </div>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="login.html">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="register.html">Signup</Link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>

)

export default Navbar;