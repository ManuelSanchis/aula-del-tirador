import { Target } from 'lucide-react';

import { SidebarNavItem } from '@/components/SidebarNavItem';
import { SIDEBAR_NAV_ITEM } from '@/config/sidebarNavItem.config';

export const Sidebar = () => {
  return (
    <aside>
      <header>
        <Target />

        <div>
          <p>Aula del Tirador</p>

          <p>Obten tu licencia de armas</p>
        </div>
      </header>

      <nav>
        <ul>
          {SIDEBAR_NAV_ITEM.map((item) => (
            <SidebarNavItem key={item.to} to={item.to} label={item.label} icon={item.icon} />
          ))}
        </ul>
      </nav>
    </aside>
  );
};
