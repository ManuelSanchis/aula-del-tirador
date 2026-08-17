import { type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarNavItemProps {
  to: string;
  label: string;
  icon: LucideIcon;
}

export const SidebarNavItem = ({ to, label, icon: Icon }: SidebarNavItemProps) => {
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
