import { ActionCard } from '@/components/ActionCard/ActionCard';
import { TOPIC_CARDS } from '@/config/topicCards.config';

import styles from './TopicsPage.module.css';

export const TopicsPage = () => {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Practicar por temas</h1>

        <p className={styles.description}>
          Elige un tema y practica sus preguntas sin límite de tiempo.
        </p>
      </header>

      <div className={styles.cards}>
        {TOPIC_CARDS.map(({ icon, title, details, to, buttonText }) => (
          <ActionCard
            key={to}
            icon={icon}
            title={title}
            details={details}
            to={to}
            buttonText={buttonText}
            variant="compact"
          />
        ))}
      </div>
    </div>
  );
};
