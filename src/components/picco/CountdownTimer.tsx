import React, { useState, useEffect } from 'react';

const initialTime = {
  hours: 12,
  minutes: 34,
  seconds: 56,
};

export const CountdownTimer = () => {
  const [time, setTime] = useState(initialTime);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTime(prevTime => {
        let { hours, minutes, seconds } = prevTime;
        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              clearInterval(timerId);
              return { hours: 0, minutes: 0, seconds: 0 };
            }
          }
        }
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timerId);
  }, []);

  return (
    <div className="flex items-center justify-center gap-2 text-center">
      <div>
        <span className="text-2xl font-bold">{String(time.hours).padStart(2, '0')}</span>
        <p className="text-xs text-[var(--text-secondary-light)]">Hours</p>
      </div>
      <span className="text-2xl font-bold text-[var(--text-secondary-light)]">:</span>
      <div>
        <span className="text-2xl font-bold">{String(time.minutes).padStart(2, '0')}</span>
        <p className="text-xs text-[var(--text-secondary-light)]">Minutes</p>
      </div>
      <span className="text-2xl font-bold text-[var(--text-secondary-light)]">:</span>
      <div>
        <span className="text-2xl font-bold">{String(time.seconds).padStart(2, '0')}</span>
        <p className="text-xs text-[var(--text-secondary-light)]">Seconds</p>
      </div>
    </div>
  );
};