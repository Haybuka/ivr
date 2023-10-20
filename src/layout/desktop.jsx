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

const Desktop = () => {
  return (
    <>
      <ul className="hidden lg:flex items-center font-titilium ">
        {navigation.map((item, id) => (
          <NavLink
            key={id}
            to={item.path}
            className={({ isActive }) =>
              isActive ? 'mx-4 text-orange-600' : 'mx-4'
            }
          >
            <li className="capitalize">{item.name}</li>
          </NavLink>
        ))}
      </ul>
      <Link to={'/contact'}>
        <Button
          text={'Book an Appointment'}
          propStyle={'hidden md:inline-block'}
        />
      </Link>
    </>
  );
};

export default Desktop;
