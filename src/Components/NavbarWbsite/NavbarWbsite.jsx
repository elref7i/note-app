'use client';

import { Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarWbsite() {
  return (
    <>
      <nav className="shadow-md fixed z-50 left-0 right-0 py-1 bg-gray-800">
        <div className="container ">
          <Navbar className="!bg-gray-800 text-white">
            <Navbar.Brand href="https://flowbite-react.com">
              <span className="self-center font-bold whitespace-nowrap  text-xl dark:text-white">
                Notes
              </span>
            </Navbar.Brand>
            <Navbar.Collapse className="py-2">
              <NavLink
                to="/login"
                className={({ isActive }) => {
                  return `px-2 py-2 ${
                    isActive
                      ? 'bg-red-400 font-bold text-white  rounded-md'
                      : 't'
                  }`;
                }}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) => {
                  return `px-2 py-2 ${
                    isActive
                      ? 'bg-red-400 font-bold text-white  rounded-md'
                      : ''
                  }`;
                }}
              >
                Signup
              </NavLink>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </nav>
    </>
  );
}
