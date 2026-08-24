import clsx from 'clsx';
import { Award, Frown, Trophy } from 'lucide-react';

import styles from './Score.module.css';

interface ScoreProps {
  passingScore?: number;
  score: number;
  total: number;
}

export const Score = ({ passingScore, score, total }: ScoreProps) => {
  const percentage = Math.round((score / total) * 100);

  const showExamStatus = passingScore !== undefined;

  const hasPassed = showExamStatus && score >= passingScore;

  const Icon = !showExamStatus ? Award : hasPassed ? Trophy : Frown;

  return (
    <div
      className={clsx(styles.score, showExamStatus && (hasPassed ? styles.passed : styles.failed))}
    >
      <div className={styles.iconContainer}>
        <Icon className={styles.icon} />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>Resultado</p>

        {showExamStatus && (
          <p className={styles.status}>{hasPassed ? '¡Has aprobado!' : '¡Has suspendido!'}</p>
        )}

        <p className={styles.value}>
          {score} de {total} respuestas correctas
        </p>

        <p className={styles.percentage}>{percentage}% de aciertos</p>
      </div>
    </div>
  );
};
