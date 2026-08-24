import { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { Sidebar } from '../Sidebar/Sidebar';
import styles from './MainLayout.module.css';

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
