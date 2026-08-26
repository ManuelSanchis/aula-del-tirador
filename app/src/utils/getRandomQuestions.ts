import type { QuestionModel } from '@/models/question.model';

import { fisherYatesShuffle } from './fisherYatesShuffle';

export const getRandomQuestions = (questions: QuestionModel[], count: number): QuestionModel[] => {
  return fisherYatesShuffle(questions).slice(0, count);
};
