import React from 'react';
import { NavLink } from 'react-router-dom';

const ActiveLink = ({to, children}) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        isActive ? "bg-cyan-500 px-4 py-1 rounded-md" : ""
      }
    >
    {children}
    </NavLink>
  );
};

export default ActiveLink;