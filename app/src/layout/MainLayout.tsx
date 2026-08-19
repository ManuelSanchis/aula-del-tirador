import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.css';
import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarCollapsed((previousState) => !previousState);
  };

  return (
    <div className={styles.layout}>
      <Sidebar isCollapsed={isSidebarCollapsed} onToggle={toggleSidebar} />

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
};
