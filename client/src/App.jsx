import { useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    if (audioRef.current.currentTime === 0) {
      audioRef.current.currentTime = 60;
    }

    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const handleEnded = () => {
    audioRef.current.currentTime = 60;
    audioRef.current.play();
  };

  return (
    <>
      <h1>My Portfolio</h1>

      <audio
        ref={audioRef}
        src="/music/passionFruit.mp3"
        onEnded={handleEnded}
      />

      <button onClick={isPlaying ? pauseSong : playSong}>
        {isPlaying ? "Pause Song" : "Play Song"}
      </button>
    </>
  );
}

export default App;
