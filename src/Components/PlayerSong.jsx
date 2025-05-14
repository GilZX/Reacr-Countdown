
import audioFile from '../assets/countdown8bit.mp3'; // ajusta la ruta según tu estructura
import React, { useRef } from 'react';
import zombie from '../assets/zombie.gif'

export function PlayerSong() {
  const audioRef = useRef(null);

  const playSound = () => {
    audioRef.current.play();
  };

  return (
    <div>
        <img width={'80px'} src={zombie}/>
      <button  onClick={playSound}>Warning</button>
      <audio ref={audioRef} src={audioFile} />
    </div>
  );
}



