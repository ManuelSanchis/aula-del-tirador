export interface QuestionModel {
  id: number;
  question: string;
  answerId: number;
  options: OptionModel[];
}

interface OptionModel {
  id: number;
  answer: string;
  isCorrect: boolean;
}
