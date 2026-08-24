import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';

import { QuestionTest } from '@/components/QuestionTest/QuestionTest';
import { EXAM_PASSING_SCORE, EXAM_TIME_LIMIT_MINUTES } from '@/config/exam.config';
import type { QuestionModel } from '@/models/question.model';
import { loadExamQuestions } from '@/services/exam.service';

import styles from './ExamPracticePage.module.css';

export const ExamPracticePage = () => {
  const examDurationSeconds = EXAM_TIME_LIMIT_MINUTES * 60;

  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [finished, setFinished] = useState(false);
  const [examAttemptKey, setExamAttemptKey] = useState(0);

  useEffect(() => {
    loadExamQuestions().then(setQuestions);
  }, []);

  useEffect(() => {
    if (examAttemptKey === 0) return;

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [examAttemptKey]);

  const handleRestart = async () => {
    const newQuestions = await loadExamQuestions();

    setQuestions(newQuestions);
    setFinished(false);
    setExamAttemptKey((currentKey) => currentKey + 1);
  };

  const handleFinish = () => {
    setFinished(true);
  };

  if (questions.length === 0) {
    return (
      <div className={styles.loading}>
        <LoaderCircle className={styles.loader} />

        <p>Cargando preguntas...</p>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Simular examen</h1>

        <p className={styles.description}>
          Responde a las 20 preguntas en 20 minutos. Necesitas 16 aciertos para aprobar.
        </p>
      </header>

      <QuestionTest
        key={examAttemptKey}
        isFinished={finished}
        questions={questions}
        timerDurationSeconds={examDurationSeconds}
        passingScore={EXAM_PASSING_SCORE}
        onFinish={handleFinish}
        finishButtonText="Finalizar examen"
        onRestart={handleRestart}
        restartButtonText="Reiniciar examen"
      />
    </div>
  );
};
