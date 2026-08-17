import { type LucideIcon, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarNavItemProps {
  to?: string;
  label?: string;
  icon?: LucideIcon;
}

export const SidebarNavItem = ({ to = '/', label, icon: Icon = X }: SidebarNavItemProps) => {
  return (
    <li>
      <NavLink to={to} title={label}>
        <span>
          <Icon />
        </span>

        <span>{label}</span>
      </NavLink>
    </li>
  );
};
