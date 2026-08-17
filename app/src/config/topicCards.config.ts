import type { LucideIcon } from 'lucide-react';
import { BookOpen } from 'lucide-react';

interface TopicCardConfig {
  icon: LucideIcon;
  title: string;
  details: string[];
  buttonText: string;
  to: string;
}

export const TOPIC_CARDS: TopicCardConfig[] = [
  {
    icon: BookOpen,
    title: 'Tema 1',
    details: [
      'Funcionamiento de las armas.',
      'Piezas fundamentales y mecanismos de disparo y seguridad.',
      'Conservación y limpieza de las armas.',
      'Medidas de seguridad a adoptar en la tenencia de las armas.',
    ],
    buttonText: 'Practicar',
    to: '/topics/1',
  },
  {
    icon: BookOpen,
    title: 'Tema 2',
    details: [
      'Categoría de las armas según el vigente Reglamento de Armas.',
      'Armas semiautomáticas, armas de repetición, armas prohibidas.',
    ],
    buttonText: 'Practicar',
    to: '/topics/2',
  },
  {
    icon: BookOpen,
    title: 'Tema 3',
    details: ['Circulación de las armas.', 'Revista de armas.', 'Transferencia de armas.'],
    buttonText: 'Practicar',
    to: '/topics/3',
  },
  {
    icon: BookOpen,
    title: 'Tema 4',
    details: [
      'Documentación para la tenencia y uso de armas.',
      'Condiciones generales para la obtención de licencias y Tarjeta Europea de Armas de Fuego.',
      'Trámite de las solicitudes.',
    ],
    buttonText: 'Practicar',
    to: '/topics/4',
  },
  {
    icon: BookOpen,
    title: 'Tema 5',
    details: [
      'Régimen sancionador.',
      'Infracciones muy graves, graves y leves.',
      'Retirada de las armas.',
    ],
    buttonText: 'Practicar',
    to: '/topics/5',
  },
  {
    icon: BookOpen,
    title: 'Tema 6',
    details: ['Reparación de armas.', 'Prueba de armas.', 'Depósito de armas.'],
    buttonText: 'Practicar',
    to: '/topics/6',
  },
];
