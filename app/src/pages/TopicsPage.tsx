import { ActionCard } from '@/components/ActionCard';
import { TOPIC_CARDS } from '@/config/topicCards.config';

export const TopicsPage = () => {
  return (
    <div>
      <header>
        <h1>Practicar por temas</h1>

        <p>Elige un tema y practica sus preguntas sin límite de tiempo.</p>
      </header>

      <div>
        {TOPIC_CARDS.map(({ icon, title, details, to, buttonText }) => (
          <ActionCard
            key={to}
            icon={icon}
            title={title}
            details={details}
            to={to}
            buttonText={buttonText}
          />
        ))}
      </div>
    </div>
  );
};
