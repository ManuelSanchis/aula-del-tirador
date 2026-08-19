import { PanelLeftClose, PanelLeftOpen, Target } from 'lucide-react';

import { SidebarNavItem } from '@/components/SidebarNavItem';
import { SIDEBAR_NAV_ITEM } from '@/config/sidebarNavItem.config';

interface SidebarProps {
  isCollapsed: boolean;
  onToggle: () => void;
}

export const Sidebar = ({ isCollapsed, onToggle }: SidebarProps) => {
  const ToggleIcon = isCollapsed ? PanelLeftOpen : PanelLeftClose;

  const toggleButtonLabel = isCollapsed ? 'Expandir menú lateral' : 'Colapsar menú lateral';

  return (
    <aside>
      <header>
        <Target />

        <div>
          <p>Aula del Tirador</p>

          <p>Obten tu licencia de armas</p>
        </div>
      </header>

      <div>
        <button type="button" onClick={onToggle} title={toggleButtonLabel}>
          <span>
            <ToggleIcon />
          </span>

          <span>{isCollapsed ? 'Mostrar menú' : 'Ocultar menú'}</span>
        </button>
      </div>

      <nav>
        <ul>
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
