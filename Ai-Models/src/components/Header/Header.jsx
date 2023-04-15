import React from 'react';
import { NavLink } from 'react-router-dom';
import ActiveLink from '../ActiveLink/ActiveLink';

const Header = () => {
  return (
    <nav className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 text-white font-semibold flex justify-center gap-10 p-3">
      <ActiveLink to="/">Home</ActiveLink>
      <ActiveLink to="/aimodels">Ai Models</ActiveLink>
      <ActiveLink to="/description">Description</ActiveLink>
      <ActiveLink to="/login">Login</ActiveLink>
      <ActiveLink to="/signup">Sign Up</ActiveLink>
    </nav>
  );
};

export default Header;