import { FilePen, House, LibraryBig, type LucideIcon } from 'lucide-react';

interface SidebarNavItemConfig {
  icon: LucideIcon;
  label: string;
  to: string;
}

export const SIDEBAR_NAV_ITEM: SidebarNavItemConfig[] = [
  {
    icon: House,
    label: 'Inicio',
    to: '/',
  },
  {
    icon: LibraryBig,
    label: 'Practicar por temas',
    to: '/topics',
  },
  {
    icon: FilePen,
    label: 'Simular examen',
    to: '/exam',
  },
];
