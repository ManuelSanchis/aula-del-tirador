import { QUESTIONS_PER_TOPIC } from '@/config/exam.config';
import type { QuestionModel } from '@/models/question.model';
import { getRandomQuestions } from '@/utils/getRandomQuestions';

import { fetchQuestionsFromTopic } from './question.service';

export const loadExamQuestions = async (): Promise<QuestionModel[]> => {
  const selected: QuestionModel[] = [];

  for (const topicIdStr in QUESTIONS_PER_TOPIC) {
    const topicId = Number(topicIdStr);
    const count = QUESTIONS_PER_TOPIC[topicId];

    const allTopicQuestions = await fetchQuestionsFromTopic(topicId);
    const randomQuestions = getRandomQuestions(allTopicQuestions, count);
    selected.push(...randomQuestions);
  }

  return selected;
};
