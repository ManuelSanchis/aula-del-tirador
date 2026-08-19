import { Clock3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

import styles from './Timer.module.css';

interface TimerProps {
  durationSeconds: number;
  running?: boolean;
  onTimeUp: () => void;
}

export const Timer = ({ durationSeconds, running = true, onTimeUp }: TimerProps) => {
  const [timeLeft, setTimeLeft] = useState(durationSeconds);
  const hasCalledTimeUp = useRef(false);

  useEffect(() => {
    if (!running || timeLeft <= 0) return;

    const timeoutId = window.setTimeout(() => {
      setTimeLeft((currentTimeLeft) => currentTimeLeft - 1);
    }, 1000);

    return () => {
      window.clearTimeout(timeoutId);
    };
  }, [running, timeLeft]);

  useEffect(() => {
    if (timeLeft > 0 || hasCalledTimeUp.current) return;

    hasCalledTimeUp.current = true;
    onTimeUp();
  }, [timeLeft, onTimeUp]);

  const formatTime = (seconds: number): string => {
    const minutes = Math.floor(seconds / 60)
      .toString()
      .padStart(2, '0');

    const remainingSeconds = (seconds % 60).toString().padStart(2, '0');

    return `${minutes}:${remainingSeconds}`;
  };

  return (
    <div className={styles.timer}>
      <Clock3 className={styles.icon} />

      <div>
        <p className={styles.label}>Tiempo restante</p>

        <p className={styles.time}>{formatTime(timeLeft)}</p>
      </div>
    </div>
  );
};
