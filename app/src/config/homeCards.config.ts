import type { LucideIcon } from 'lucide-react';
import { FilePen, LibraryBig } from 'lucide-react';

interface HomeCardConfig {
  icon: LucideIcon;
  title: string;
  description: string;
  buttonText: string;
  to: string;
}

export const HOME_CARDS: HomeCardConfig[] = [
  {
    icon: LibraryBig,
    title: 'Practicar por temas',
    description: 'Practica cada tema a tu ritmo.',
    buttonText: 'Elegir un tema',
    to: '/topics',
  },
  {
    icon: FilePen,
    title: 'Simular examen',
    description: 'Simula el examen oficial.',
    buttonText: 'Comenzar examen',
    to: '/exam',
  },
];
