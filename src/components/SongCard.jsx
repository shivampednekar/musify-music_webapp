import React from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import PlayPause from './PlayPause';
import { playPause, setActiveSong } from '../redux/features/playerSlice';

const SongCard = ({ song, activeSong, isPlaying, i, data }) => {
  // const activeSong = 'Test';
  const dispatch = useDispatch();

  // PLAYPAUSE FUNCTION
  const handlePauseClick = () => {
    dispatch(playPause(false));
  };
  const handlePlayClick = () => {
    dispatch(setActiveSong({ song, i, data }));
    dispatch(playPause(true));
  };

  return (
    <div className="flex flex-col w-[250px] p-4 bg-white/5 bg-opacity-80 backdrop-blur-sm animate-slideup rounded-lg cursor-pointer">
      <div className="relative w-full h-56 group">
        <div
          className={`absolute inset-0 justify-center items-center bg-[#2A2B2A] group-hover:flex 
        ${
          activeSong?.title === song.title
            ? 'flex bg-black bg-opacity-70'
            : 'hidden'
        }
        `}
        >
          <PlayPause
            song={song}
            activeSong={activeSong}
            isPlaying={isPlaying}
            handlePause={handlePauseClick}
            handlePlay={handlePlayClick}
          />
        </div>
        <img src={song.images?.coverart} alt="Song Images" />
      </div>
      {/* TITLE AND SUBTITLE */}
      <div className="flex flex-col mt-4">
        <p className="font-semibold text-[#FAFAFA] text-lg truncate">
          <Link to={`/songs/${song?.key}`}>{song.title}</Link>
        </p>
        <p className="text-[#adb5bd] text-sm truncate mt-1">
          <Link
            to={
              song.artists
                ? `/artists/${song?.artists[0]?.adamid}`
                : '/top-artists'
            }
          >
            {song.subtitle}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SongCard;

// 53MIN 03SEC COMPLETED
