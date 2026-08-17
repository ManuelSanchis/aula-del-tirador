import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  details?: string[];
  to: string;
  buttonText: string;
}

export const ActionCard = ({
  icon: Icon,
  title,
  description,
  details,
  to,
  buttonText,
}: ActionCardProps) => {
  return (
    <div>
      <div>
        <Icon />
      </div>

      <div>
        <h2>{title}</h2>

        {description && <p>{description}</p>}

        {details && (
          <ul>
            {details.map((detail) => (
              <li key={detail}>{detail}</li>
            ))}
          </ul>
        )}
      </div>

      <Link to={to}>
        <span>{buttonText}</span>

        <ArrowRight />
      </Link>
    </div>
  );
};
