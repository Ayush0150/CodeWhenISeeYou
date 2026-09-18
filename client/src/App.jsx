import { useRef, useState } from "react";

function App() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const playSong = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const pauseSong = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <>
      <h1>My Portfolio</h1>

      <audio
        ref={audioRef}
        src="/music/passionFruit.mp3"
        onEnded={() => setIsPlaying(false)}
      />

      <button onClick={isPlaying ? pauseSong : playSong}>
        {isPlaying ? "Pause Song" : "Play Song"}
      </button>
    </>
  );
}

export default App;
