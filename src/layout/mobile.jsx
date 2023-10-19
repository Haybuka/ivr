import React from 'react';
import { NavLink } from 'react-router-dom';
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

const Mobile = () => {
  return (
    <section className="absolute bg-white w-full text-center h-screen left-0 px-4 overflow-hidden">
      <ul className="block md:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <NavLink key={id} className={'mx-4'}>
            <li className="capitalize">{item.name}</li>
          </NavLink>
        ))}
      </ul>
      <Button text={'Get Appointment'} />
    </section>
  );
};

export default Mobile;
