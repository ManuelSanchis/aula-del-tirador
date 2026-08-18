import { Award, Frown, Trophy } from 'lucide-react';

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
    <div>
      <div>
        <Icon />
      </div>

      <div>
        <p>Resultado</p>

        {showExamStatus && <p>{hasPassed ? '¡Has aprobado!' : '¡Has suspendido!'}</p>}

        <p>
          {score} de {total} respuestas correctas
        </p>

        <p>{percentage}% de aciertos</p>
      </div>
    </div>
  );
};
