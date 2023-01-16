import React from "react";
import logo from '../assets/Logo.svg'

const Footer = () => {
    return (

        <footer className="p-4 bg-white sm:p-6">
            <div className="md:flex md:justify-evenly">
                <a href="#/" className="flex items-center">
                    <img src={logo} className="h-8 mr-3 sm:h-12" alt="Little Lemon Logo" />
                </a>
                <div className="grid grid-cols-2 gap-12 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-black">Navigation</h2>
                        <ul className="text-gray-600 dark:text-gray-800">
                            <li>
                                <a href="#/" className="hover:underline">Home</a>
                            </li>
                            <li>
                                <a href="#/about" className="hover:underline">About</a>
                            </li>
                            <li>
                                <a href="#/menu" className="hover:underline">Menu</a>
                            </li>
                            <li>
                                <a href="#/reservations" className="hover:underline">Reservations</a>
                            </li>
                            <li>
                                <a href="#/online" className="hover:underline">Order Online</a>
                            </li>
                            <li>
                                <a href="#/login" className="hover:underline">Login</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-black">Contact</h2>
                        <ul className="text-gray-600 dark:text-gray-800">
                            <li>
                                <a href="#/Address" className="hover:underline ">Address</a>
                            </li>
                            <li>
                                <a href="#/phone" className="hover:underline">Phone Number</a>
                            </li>
                            <li>
                                <a href="#/email" className="hover:underline">Email</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-sm font-semibold uppercase dark:text-black">Follow Us</h2>
                        <ul className="text-gray-600 dark:text-gray-800">
                            <li>
                                <a href="#/" className="hover:underline">Facebook</a>
                            </li>
                            <li>
                                <a href="#/" className="hover:underline">Instagram</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>

    )
}

export default Footer;