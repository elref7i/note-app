'use client';

import { Avatar, Dropdown, Navbar } from 'flowbite-react';
import { NavLink } from 'react-router-dom';
import { UserContext } from '../../context/User.context';
import { useContext } from 'react';

export default function NavbarWbsite() {
  const { token, logout } = useContext(UserContext);

  return (
    <>
      <nav className="shadow-md fixed z-50 left-0 right-0 py-1 bg-gray-800">
        <div className="container ">
          <Navbar className="!bg-gray-800 text-white">
            <Navbar.Brand href="/">
              <span className="self-center font-bold whitespace-nowrap  text-xl dark:text-white">
                Notes
              </span>
            </Navbar.Brand>
            {!token && (
              <div className="py-2">
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
              </div>
            )}
            {token && (
              <Dropdown
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
                <Dropdown.Item onClick={logout}>Sign out</Dropdown.Item>
              </Dropdown>
            )}
          </Navbar>
        </div>
      </nav>
    </>
  );
}
