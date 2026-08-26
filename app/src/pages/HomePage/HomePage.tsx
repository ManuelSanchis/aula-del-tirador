import { ActionCard } from '@/components/ActionCard/ActionCard';
import { HOME_CARDS } from '@/config/homeCards.config';

import styles from './HomePage.module.css';

export const HomePage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Bienvenido</h1>

        <p className={styles.description}>
          Practica por temas o simula el examen oficial para obtener la licencia de armas D y E.
        </p>
      </header>

      <div className={styles.cards}>
        {HOME_CARDS.map(({ icon, title, description, to, buttonText }) => (
          <ActionCard
            key={to}
            icon={icon}
            title={title}
            description={description}
            to={to}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  );
};
