import React from "react";
import logo from './images/ReactLogo.png'


export default function Header() {
    return (

        <header>
            <nav className="nav">
                <img className="logo-img" src={logo} alt="React Logo" />
                <h1 className="nav-heading">First React App</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}
