import React, { useEffect, useRef, useState, useContext } from "react";
import { MusicPlayerWrapper } from "./MusicPlayer.styled";
import playlist from "../../utils/GameUtils/MusicUtils/playlist";
import { randomizeIndex } from "../../utils/GameUtils/MusicUtils";
import { PlayIcon, PauseIcon, ShuffleIcon } from "./MusicPlayer.styled";
import { SfxContexts } from "../../contexts/SfxContexts";
import { Text } from "../../styles/General.styled"

function MusicPlayer() {
  const { hoverSfx, clickedSfx } = useContext(SfxContexts);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentSong, setCurrentSong] = useState(randomizeIndex(playlist));
  const [playPromise, setPlayPromise] = useState(null);
  const playerRef = useRef(null);

  useEffect(() => {
    if (isPlaying) {
      const promise = playerRef.current.play();
      setPlayPromise(promise);
      if (playerRef.current?.volume) playerRef.current.volume = 0.1;
      return;
    }
    playerRef.current.pause();
  }, [isPlaying, currentSong]);

  const shuffleHandler = async () => {
    clickedSfx();
    setIsPlaying(false);
    await playPromise.then(() => {
      playerRef.current.pause();
    });
    setCurrentSong(randomizeIndex(playlist));
    setIsPlaying(true);
  };

//   console.log(playlist[currentSong].split("/"));
  const displaySong = playlist[currentSong].split("/")[5];
  return (
    <MusicPlayerWrapper>
      {isPlaying ? (
        <PauseIcon
          onClick={() => {
            setIsPlaying(false);
            clickedSfx();
          }}
          onMouseEnter={() => hoverSfx()}
        />
      ) : (
        <PlayIcon
          onClick={() => {
            setIsPlaying(true);
            clickedSfx();
          }}
          onMouseEnter={() => hoverSfx()}
        />
      )}
      <ShuffleIcon onClick={shuffleHandler} onMouseEnter={() => hoverSfx()} />

      <audio
        ref={playerRef}
        src={playlist[currentSong]}
        onEnded={shuffleHandler}
      ></audio>

      <Text>{displaySong}</Text>
    </MusicPlayerWrapper>
  );
}

export default MusicPlayer;
