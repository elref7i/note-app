'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';

export default function NavbarWbsite() {
  return (
    <>
      <nav className="shadow-md py-1">
        <div className="container">
          <Navbar>
            <Navbar.Brand href="https://flowbite-react.com">
              <span className="self-center font-bold whitespace-nowrap text-xl dark:text-white">
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
            {/* <Dropdown
              arrowIcon={false}
              inline
              label={
                <Avatar
                  alt="User settings"
                  img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                  rounded
                />
              }
            >
              <Dropdown.Header>
                <span className="block text-sm">Bonnie Green</span>
                <span className="block truncate text-sm font-medium">
                  name@flowbite.com
                </span>
              </Dropdown.Header>
              <Dropdown.Item>Sign out</Dropdown.Item>
            </Dropdown> */}
          </Navbar>
        </div>
      </nav>
    </>
  );
}
