import { Link } from 'react-router-dom';

export const SidebarNavItem = () => {
  return (
    <div>
      <h1>SidebarNavItem</h1>
      <Link to="/">
        <button>Inicio</button>
      </Link>
    </div>
  );
};
