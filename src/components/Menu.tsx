import { menuItems } from '../config/menuItems';
import { usePermission } from '../hooks/usePermission';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <ul>
      {menuItems.map((item) => {
        const hasPermission = item.permission ? usePermission(item.permission) : true;

        if (!hasPermission) return null;

        return (
          <li key={item.path}>
            <NavLink to={item.path}>{item.label}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};