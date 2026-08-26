import clsx from 'clsx';
import { PanelLeftClose, PanelLeftOpen, Target } from 'lucide-react';

import { SidebarNavItem } from '@/components/SidebarNavItem/SidebarNavItem';
import { SIDEBAR_NAV_ITEM } from '@/config/sidebarNavItem.config';

import styles from './Sidebar.module.css';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const ToggleIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  const toggleButtonLabel = isCollapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral';

  return (
    <aside
      className={clsx(styles.sidebar, {
        [styles.collapsed]: isCollapsed,
      })}
    >
      <header className={styles.header}>
        <Target className={styles.logo} />

        <div className={styles.brand}>
          <p className={styles.title}>Aula del Tirador</p>

          <p className={styles.subtitle}>Obten tu licencia de armas</p>
        </div>
      </header>

      <div className={styles.toggleContainer}>
        <button
          type="button"
          className={styles.toggleButton}
          onClick={onToggle}
          title={toggleButtonLabel}
        >
          <span className={styles.toggleIconContainer}>
            <ToggleIcon className={styles.toggleIcon} />
          </span>

          <span className={styles.toggleLabel}>
            {isCollapsed ? 'Mostrar menú' : 'Ocultar menú'}
          </span>
        </button>
      </div>

      <nav className={styles.nav}>
        <ul className={styles.list}>
          {SIDEBAR_NAV_ITEM.map((item) => (
            <SidebarNavItem
              key={item.to}
              to={item.to}
              isCollapsed={isCollapsed}
              label={item.label}
              icon={item.icon}
            />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
