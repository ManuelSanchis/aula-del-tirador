import clsx from 'clsx';
import { type LucideIcon } from 'lucide-react';
import { NavLink } from 'react-router-dom';

import styles from './SidebarNavItem.module.css';

interface SidebarNavItemProps {
  to: string;
  isCollapsed: boolean;
  label: string;
  icon: LucideIcon;
}

export const SidebarNavItem = ({ to, isCollapsed, label, icon: Icon }: SidebarNavItemProps) => {
  return (
    <li className={styles.item}>
      <NavLink
        to={to}
        title={isCollapsed ? label : undefined}
        className={({ isActive }) =>
          clsx(styles.link, {
            [styles.active]: isActive,
            [styles.collapsed]: isCollapsed,
          })
        }
      >
        <span className={styles.iconContainer}>
          <Icon className={styles.icon} />
        </span>

        <span className={styles.label}>{label}</span>
      </NavLink>
    </li>
  );
};
