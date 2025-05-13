import { useState,useEffect } from 'react'
import NumberFlow from '@number-flow/react'


export function CountDown(){
    const [seconds, setSeconds] = useState(0);

    const formatTime = (totalSeconds) => {
  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

return [
    String(hours).padStart(2, '0'),
    String(minutes).padStart(2, '0'),
    String(seconds).padStart(2, '0')
  ].join(':');
};

useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);


  const { hours, minutes, seconds: secs } = formatTime(seconds);



    return(

        <div style={{ fontSize: '2rem', fontFamily: 'monospace' }}>
            <h1>{formatTime(seconds)}</h1>
        </div>

    )


}











