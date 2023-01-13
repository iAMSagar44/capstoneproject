import React from "react";
import logo from '../assets/Logo.svg'

export default function Nav() {
    return (
        <header>
            <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
                <div className="container flex flex-wrap items-center justify-evenly mx-auto">
                    <a href="#/" className="flex items-center">
                        <img src={logo} className="h-8 mr-3 sm:h-12" alt="Little Lemon Logo" />
                    </a>
                    <button data-collapse-toggle="navbar-default" type="button" className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-default" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                    </button>
                    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
                        <ul
                            className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 dark:border-gray-700">
                            <li>
                                <a href="#/"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500"
                                    aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#/about"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500">About</a>
                            </li>
                            <li>
                                <a href="#/menu"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500">Menu</a>
                            </li>
                            <li>
                                <a href="#/reservations"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500">Reservations</a>
                            </li>
                            <li>
                                <a href="#/order"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500">Order Online</a>
                            </li>
                            <li>
                                <a href="#/login"
                                    className="block py-2 pl-3 pr-4 text-black hover:text-blue-500">Login</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

    )
}