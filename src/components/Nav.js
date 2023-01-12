import React from "react";
import logo from '../assets/Logo.svg'

export default function Nav() {
    return (
        <nav>
            <img src={logo} alt="Logo" />
            <ul>
                <li><a href="#/home">Home</a></li>
                <li><a href="#/about">About</a></li>
                <li><a href="#/menu">Menu</a></li>
                <li><a href="#/reservations">Reservations</a></li>
                <li><a href="#/order">Order Online</a></li>
                <li><a href="#/login">Login</a></li>
            </ul>
        </nav>
    )
}