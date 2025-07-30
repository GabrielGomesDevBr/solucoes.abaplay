import React from 'react';
import { NavLink } from 'react-router-dom';

const Sidebar = () => {
  const activeClassName = "bg-blue-100 text-blue-600";
  const inactiveClassName = "text-gray-600 hover:bg-gray-100 hover:text-gray-900";

  return (
    <aside className="w-64 bg-white border-r">
      <div className="px-4 py-6">
        <h2 className="text-lg font-semibold text-gray-800">Admin</h2>
      </div>
      <nav className="flex-1 px-2 space-y-1">
        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive ? activeClassName : inactiveClassName
            }`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/resources"
          className={({ isActive }) =>
            `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive ? activeClassName : inactiveClassName
            }`
          }
        >
          Recursos
        </NavLink>
        <NavLink
          to="/admin/users"
          className={({ isActive }) =>
            `flex items-center px-2 py-2 text-sm font-medium rounded-md ${
              isActive ? activeClassName : inactiveClassName
            }`
          }
        >
          Usuários
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
