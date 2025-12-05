export enum QuestionType {
  MCQ = 'MCQ',
  TRUE_FALSE = 'TRUE_FALSE',
  ORDERING = 'ORDERING',
}

export interface Option {
  id: string;
  text: string;
  isCorrect?: boolean;
}

export interface Translation {
  question: string;
  options: { id: string; text: string }[];
  explanation?: string;
  context?: string;
}

export interface Question {
  id: number;
  type: QuestionType;
  question: string;
  options: Option[];
  explanation?: string; // Reason why the correct answer is correct
  context?: string; // For questions that reference a specific text block
  translation?: Translation; // Chinese translation
}

export interface QuizState {
  currentQuestionIndex: number;
  score: number;
  answers: { questionId: number; isCorrect: boolean; selectedId: string }[];
  isFinished: boolean;
  hasStarted: boolean;
}