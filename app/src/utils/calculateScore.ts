import type { QuestionModel } from '@/models/question.model';

export function calculateScore(
  questions: QuestionModel[],
  answers: Record<number, number>,
): number {
  return questions.reduce((acc, q, index) => {
    const selected = answers[index];
    const correct = q.options.find((opt) => opt.isCorrect)?.id;
    return acc + (selected === correct ? 1 : 0);
  }, 0);
}
