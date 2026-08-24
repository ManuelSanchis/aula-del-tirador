import { LoaderCircle } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { QuestionTest } from '@/components/QuestionTest/QuestionTest';
import type { QuestionModel } from '@/models/question.model';
import { fetchQuestionsFromTopic } from '@/services/question.service';

import styles from './TopicPracticePage.module.css';

export const TopicPracticePage = () => {
  const { topicId } = useParams();

  const [questions, setQuestions] = useState<QuestionModel[]>([]);
  const [finished, setFinished] = useState(false);
  const [topicAttemptKey, setTopicAttemptKey] = useState(0);

  useEffect(() => {
    if (!topicId) return;

    fetchQuestionsFromTopic(Number(topicId)).then(setQuestions);
  }, [topicId]);

  useEffect(() => {
    if (topicAttemptKey === 0) return;

    window.scrollTo({
      top: 0,
      behavior: 'auto',
    });
  }, [topicAttemptKey]);

  const handleRestart = () => {
    setFinished(false);
    setTopicAttemptKey((currentKey) => currentKey + 1);
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
        <h1 className={styles.title}>Practicar el tema {topicId}</h1>

        <p className={styles.description}>
          Responde a las preguntas y revisa tus respuestas al finalizar.
        </p>
      </header>

      <QuestionTest
        key={topicAttemptKey}
        isFinished={finished}
        questions={questions}
        onFinish={handleFinish}
        finishButtonText="Finalizar test"
        onRestart={handleRestart}
        restartButtonText="Reiniciar test"
      />
    </div>
  );
};
