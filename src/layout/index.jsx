import React, { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/footer';
import Button from '../components/button/button';
import Burger from './burger';
import Desktop from './desktop';
import Mobile from './mobile';

const navigation = [
  {
    name: 'home',
    path: '/',
  },
  {
    name: 'About',
    path: '/About',
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
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle((prev) => !prev);
  };
  return (
    <>
      <header className="py-6 px-4 md:px-16 shadow-md fixed top-0 w-full bg-white z-10 text-lg">
        <nav className="md:flex justify-between items-center">
          <h3 className="text-orange-600 font-bold text-2xl lg:text-3xl font-odor flex justify-between items-center">
            <span>IVR</span>
            <Burger toggle={handleToggle} />
          </h3>
          <Desktop />
          {toggle && <Mobile />}
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
