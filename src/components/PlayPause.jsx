import React from 'react';
import { FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
// import { Play } from 'react-iconly';

import PlayIcon from '../assets/playIcon';

// import PlayIcon, { ReactComponent as PauseIco } from '../assets/pplay.svg';

const PlayPause = ({ isPlaying, activeSong, song, handlePause, handlePlay }) =>
  isPlaying && activeSong?.title === song.title ? (
    <FaPauseCircle size={35} className="text-[#adb5bd]" onClick={handlePause} />
  ) : (
    <FaPlayCircle size={35} className="text-[#36558F]" onClick={handlePlay} />
    // <PlayIcon className="text-[#36558F]" onClick={handlePlay} />
  );

export default PlayPause;
