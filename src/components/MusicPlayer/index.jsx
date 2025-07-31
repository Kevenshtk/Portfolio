import { useState, useRef, useEffect } from "react";

import { FaPause, FaPlay, FaPlus, FaMinus } from "react-icons/fa6";
import { FaHeadphones } from "react-icons/fa";

import "./styles.sass";

const MusicPlayer = ({ isDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const audioRef = useRef(null);

  const toggleMusicPlayer = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsPlaying(false);
  }, [isDarkMode]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume;
    }
  }, [volume]);

  const togglePlay = () => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  return (
    <div className="music-player">
      <div className={isOpen ? "cassette-body show" : "cassette-body hide"}>
        <div className="cassette-top">
          <div className="cassette-window">
            <div className={`reel left-reel ${isPlaying ? "" : "spinning"}`}>
              <div className="reel-center"></div>
            </div>
            <div className={`reel right-reel ${isPlaying ? "" : "spinning"}`}>
              <div className="reel-center"></div>
            </div>
          </div>

          <div className="cassette-label">
            <div className="track-info">
              <span className="track-name">
                {isDarkMode ? "Memory Bank" : "Frozen Waters"}
              </span>
              <span className="track-subtitle">
                {isDarkMode ? "Synthwave Radio 🌌" : "lofi hip hop radio 📚"}
              </span>
            </div>
          </div>
        </div>

        <div className="cassette-controls">
          <audio
            ref={audioRef}
            src={isDarkMode ? "./music/MemoryBank.mp3" : "./music/FrozenWaters.mp3"}
          />

          <button className="control-btn play" onClick={togglePlay}>
            {isPlaying ? <FaPause /> : <FaPlay />}
          </button>

          <button
            className="control-btn"
            onClick={() => setVolume((prev) => Math.max(0, prev - 0.1))}
          >
            <FaMinus />
          </button>
          <button
            className="control-btn"
            onClick={() => setVolume((prev) => Math.min(1, prev + 0.1))}
          >
            <FaPlus />
          </button>
        </div>

        <div className="cassette-details">
          <div className="cassette-holes">
            <div className="hole"></div>
            <div className="hole"></div>
          </div>
        </div>
      </div>

      <button className="btn-show-hide" onClick={() => toggleMusicPlayer()}>
        <FaHeadphones className="icon" />
      </button>
    </div>
  );
};

export default MusicPlayer;
