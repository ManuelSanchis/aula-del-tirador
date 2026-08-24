import clsx from 'clsx';
import type { LucideIcon } from 'lucide-react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import styles from './ActionCard.module.css';

type ActionCardVariant = 'default' | 'compact';

interface ActionCardProps {
  icon: LucideIcon;
  title: string;
  description?: string;
  details?: string[];
  to: string;
  buttonText: string;
  variant?: ActionCardVariant;
}

export const ActionCard = ({
  icon: Icon,
  title,
  description,
  details,
  to,
  buttonText,
  variant = 'default',
}: ActionCardProps) => {
  return (
    <div
      className={clsx(styles.card, {
        [styles.compact]: variant === 'compact',
      })}
    >
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>

        {description && <p className={styles.description}>{description}</p>}

        {details && (
          <ul className={styles.details}>
            {details.map((detail) => (
              <li key={detail} className={styles.detail}>
                {detail}
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link className={styles.link} to={to}>
        <span>{buttonText}</span>

        <ArrowRight className={styles.arrow} />
      </Link>
    </div>
  );
};
