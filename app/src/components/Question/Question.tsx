import clsx from 'clsx';
import { Check, X } from 'lucide-react';

import type { QuestionModel } from '@/models/question.model';

import styles from './Question.module.css';

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
    <div className={styles.question}>
      <div className={styles.header}>
        {questionNumber != null && <span className={styles.number}>{questionNumber}</span>}

        <p className={styles.title}>{question.question}</p>
      </div>

      <div className={styles.options}>
        {question.options.map((option) => {
          const isSelected = selectedAnswer === option.id;
          const isCorrect = showCorrection && option.isCorrect;
          const isIncorrect = showCorrection && isSelected && !option.isCorrect;

          return (
            <label
              key={option.id}
              className={clsx(styles.option, {
                [styles.selected]: isSelected && !showCorrection,
                [styles.correct]: isCorrect,
                [styles.incorrect]: isIncorrect,
                [styles.disabled]: showCorrection,
              })}
            >
              <input
                className={styles.input}
                type="radio"
                name={inputName}
                value={option.id}
                checked={isSelected}
                disabled={showCorrection}
                onChange={() => !showCorrection && onSelectAnswer?.(option.id)}
              />

              <span className={styles.customRadio} />

              <span className={styles.answer}>{option.answer}</span>

              {isCorrect && <Check className={styles.statusIcon} />}

              {isIncorrect && <X className={styles.statusIcon} />}
            </label>
          );
        })}
      </div>
    </div>
  );
};
