import { type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarNavItemProps {
  to: string;
  isCollapsed: boolean;
  label: string;
  icon: LucideIcon;
}

export const SidebarNavItem = ({ to, isCollapsed, label, icon: Icon }: SidebarNavItemProps) => {
  return (
    <li>
      <NavLink to={to} title={isCollapsed ? label : undefined}>
        <span>
          <Icon />
        </span>

        <span>{label}</span>
      </NavLink>
    </li>
  );
};
