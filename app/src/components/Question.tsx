import { Check, X } from 'lucide-react';

import type { QuestionModel } from '@/models/question.model';

interface QuestionProps {
  questionNumber?: number;
  question: QuestionModel;
  selectedAnswer?: number;
  showCorrection?: boolean;
  inputName: string;
  onSelectAnswer?: (optionId: number) => void;
}

export const Question = ({
  questionNumber,
  question,
  selectedAnswer,
  showCorrection = false,
  inputName,
  onSelectAnswer,
}: QuestionProps) => {
  return (
    <div>
      <div>
        {questionNumber != null && <span>{questionNumber}</span>}

        <p>{question.question}</p>
      </div>

      <div>
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = showCorrection && option.isCorrect;
          const isIncorrect = showCorrection && isSelected && !option.isCorrect;

          return (
            <label key={option.id}>
              <input
                type="radio"
                name={inputName}
                value={option.id}
                checked={isSelected}
                disabled={showCorrection}
                onChange={() => !showCorrection && onSelectAnswer?.(option.id)}
              />

              <span />

              <span>{option.answer}</span>

              {isCorrect && <Check />}

              {isIncorrect && <X />}
            </label>
          );
        })}
      </div>
    </div>
  );
};
