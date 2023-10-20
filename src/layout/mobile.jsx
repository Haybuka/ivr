import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Button from '../components/button';

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

const Mobile = ({ toggle }) => {
  return (
    <section className="absolute bg-white w-full text-center h-screen left-0 px-4 overflow-hidden">
      <ul className="block lg:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <NavLink
            key={id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'mx-4 text-orange-600' : 'mx-4'
            }
            onClick={toggle}
          >
            <li className="capitalize">{item.name}</li>
          </NavLink>
        ))}
      </ul>
      <Link to={'/contact'}>
        <Button text={'Book an Appointment'} />
      </Link>
    </section>
  );
};

export default Mobile;
