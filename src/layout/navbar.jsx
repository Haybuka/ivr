import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import Footer from '../components/footer';
import Button from '../components/button/button';

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
  return (
    <>
      <header className="py-6 px-16 shadow-md fixed top-0 w-full bg-white z-10 text-lg">
        <nav className="flex justify-between items-center">
          <h3 className="text-orange-600 font-bold text-2xl lg:text-3xl font-odor">
            IVR
          </h3>
          <ul className="flex items-center font-titilium">
            {navigation.map((item, id) => (
              <NavLink key={id} className={'mx-4'}>
                <li className="capitalize">{item.name}</li>
              </NavLink>
            ))}
          </ul>
          {/* <p className="bg-orange-600 text-white py-2 px-4 rounded-2xl">
            Get Appointment
          </p> */}
          <Button text={'Get Appointment'} />
        </nav>
      </header>
      <Outlet />
      <Footer />
    </>
  );
};

export default NavBar;
