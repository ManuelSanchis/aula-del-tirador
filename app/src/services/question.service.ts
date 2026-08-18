import type { QuestionModel } from '@/models/question.model';

export const fetchQuestionsFromTopic = async (topicId: number): Promise<QuestionModel[]> => {
  const response = await fetch(`/data/questions/topic${topicId}.json`);
  const data: QuestionModel[] = await response.json();
  return data;
};
