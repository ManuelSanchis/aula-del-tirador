import { Outlet } from 'react-router-dom';

import { Sidebar } from './Sidebar';

export const MainLayout = () => {
  return (
    <div>
      <Sidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};
