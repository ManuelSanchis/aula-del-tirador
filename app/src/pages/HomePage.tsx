import { ActionCard } from '@/components/ActionCard';
import { HOME_CARDS } from '@/config/homeCards.config';

export const HomePage = () => {
  return (
    <div>
      <header>
        <h1>Bienvenido</h1>

        <p>
          Practica por temas o simula el examen oficial para obtener la licencia de armas D y E.
        </p>
      </header>

      <div>
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
