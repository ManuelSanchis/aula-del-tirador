import { Clock3 } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

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
    <div>
      <Clock3 />

      <div>
        <p>Tiempo restante</p>

        <p>{formatTime(timeLeft)}</p>
      </div>
    </div>
  );
};
