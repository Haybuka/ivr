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

const Desktop = () => {
  return (
    <>
      <ul className="hidden md:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <NavLink key={id} className={'mx-4'}>
            <li className="capitalize">{item.name}</li>
          </NavLink>
        ))}
      </ul>
      <Button text={'Get Appointment'} propStyle={'hidden md:inline-block'} />
    </>
  );
};

export default Desktop;
