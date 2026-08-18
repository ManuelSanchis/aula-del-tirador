import { RotateCw } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import { Question } from '@/components/Question';
import { Score } from '@/components/Score';
import { Timer } from '@/components/Timer';
import type { QuestionModel } from '@/models/question.model';
import { calculateScore } from '@/utils/calculateScore';

interface QuestionTestProps {
  isFinished: boolean;
  questions: QuestionModel[];
  timerDurationSeconds?: number;
  passingScore?: number;
  onFinish: () => void;
  finishButtonText: string;
  onRestart: () => void;
  restartButtonText: string;
}

export const QuestionTest = ({
  isFinished,
  questions,
  timerDurationSeconds,
  passingScore,
  onFinish,
  finishButtonText,
  onRestart,
  restartButtonText,
}: QuestionTestProps) => {
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, number>>({});

  const scoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isFinished) return;

    scoreRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }, [isFinished]);

  const handleSelectedAnswer = (questionIndex: number, optionId: number) => {
    setSelectedAnswers((currentSelectedAnswers) => ({
      ...currentSelectedAnswers,
      [questionIndex]: optionId,
    }));
  };

  const answeredQuestions = Object.keys(selectedAnswers).length;

  return (
    <div>
      <header>
        <div>
          <p>Progreso</p>

          <p>
            {answeredQuestions} de {questions.length} respondidas
          </p>
        </div>

        {timerDurationSeconds !== undefined && (
          <Timer durationSeconds={timerDurationSeconds} onTimeUp={onFinish} running={!isFinished} />
        )}
      </header>

      <div>
        {questions.map((question, index) => (
          <Question
            key={index}
            questionNumber={index + 1}
            question={question}
            selectedAnswer={selectedAnswers[index]}
            showCorrection={isFinished}
            inputName={`question-${index}`}
            onSelectAnswer={(optionId) => handleSelectedAnswer(index, optionId)}
          />
        ))}
      </div>

      {isFinished && (
        <div ref={scoreRef}>
          <Score
            score={calculateScore(questions, selectedAnswers)}
            total={questions.length}
            passingScore={passingScore}
          />
        </div>
      )}

      <div>
        {!isFinished ? (
          <button type="button" onClick={onFinish}>
            {finishButtonText}
          </button>
        ) : (
          <button type="button" onClick={onRestart}>
            <RotateCw />
            <span>{restartButtonText}</span>
          </button>
        )}
      </div>
    </div>
  );
};
