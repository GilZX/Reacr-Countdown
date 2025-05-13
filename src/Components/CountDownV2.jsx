import React, { useEffect, useState } from 'react';

export const CountDownV2 = () => {
  const [timeLeft, setTimeLeft] = useState({ Dias: '00', Horas: '00', MINUTOS: '00', SEGUNDOS: '00' });
  const [isCountdown, setIsCountdown] = useState(true);
  useEffect(() => {
    const targetDate = new Date('2025-06-01T00:00:00');

    const updateCountdown = () => {
      const now = new Date();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ Dias: '00', Horas: '00', MINUTOS: '00', SEGUNDOS: '00' });
        return;
      }

      const totalSeconds = Math.floor(difference / 1000);
      const days = Math.floor(totalSeconds / (3600 * 24));
      const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
      const minutes = Math.floor((totalSeconds % 3600) / 60);
      const seconds = totalSeconds % 60;

      setTimeLeft({
        Dias: String(days).padStart(2, '0'),
        Horas: String(hours).padStart(2, '0'),
        Minutos: String(minutes).padStart(2, '0'),
        Segundos: String(seconds).padStart(2, '0'),
      });
    };

    updateCountdown(); // run once immediately
    const intervalId = setInterval(updateCountdown, 1000);

    return () => clearInterval(intervalId); // clean up
  }, []);

  return (
    <div style={{ fontSize: '4rem', fontFamily: 'monospace', textAlign: 'center' }}>
      <div>
        <h2> {timeLeft.Dias}:{timeLeft.Horas}:{timeLeft.Minutos}:{timeLeft.Segundos}</h2>
      </div>
      <div style={{ fontSize: '1rem', marginTop: '0.5rem' }}>
        Días : Horas : Minutos : Segundos
      </div>
    </div>
  );
};


