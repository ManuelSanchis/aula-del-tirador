import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((previousState) => !previousState);
  };

  return (
    <div>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

      <main>
        <Outlet />
      </main>
    </div>
  );
};
