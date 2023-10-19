import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/footer';

const navigation = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'services',
    path: '/services',
  },
  {
    name: 'contact',
    path: '/contact',
  },
];

const NavBar = () => {
  return (
    <>
      <header className="py-6 px-16 shadow-md fixed top-0 w-full bg-white z-10">
        <nav className="flex justify-between items-center">
          <h3>IVR</h3>
          <ul className="flex justify-between items-center">
            {navigation.map((item, id) => (
              <NavLink key={id} className={'mx-4'}>
                <li className="text-xl capitalize">{item.name}</li>
              </NavLink>
            ))}
          </ul>
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
