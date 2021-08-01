import React, { useState } from 'react';
import './Music.css';
import music_img from '../../../assets/music.jpg';
import { FaPause, FaBackward, FaForward, FaPlay } from 'react-icons/fa';

const dummyTracks = [
  {
    title: 'In der Halle des Bergkönigs',
    artist: 'Edvard Grieg',
  },
  {
    title: 'Lambo Lambo',
    artist: 'Kitschkrieg',
  },
  {
    title: 'Handmann blues',
    artist: 'Die HRW Band',
  },
];

/**
 * music card for sidebar
 */
const Music = (): JSX.Element => {
  const [track, setTrack] = useState(0);
  const [playing, setPlaying] = useState(false);

  function next() {
    if (track == dummyTracks.length - 1) {
      setTrack(0);
    } else {
      setTrack(track + 1);
    }
  }

  function previous() {
    if (track == 0) {
      setTrack(dummyTracks.length - 1);
    } else {
      setTrack(track - 1);
    }
  }

  function playPause() {
    setPlaying(!playing);
  }

  return (
    <div className="music" style={{ borderRadius: 25 }}>
      <img src={music_img} />
      <div className="music__data">
        <div className="music__song">{dummyTracks[track].title}</div>
        <div className="music__artist">{dummyTracks[track].artist}</div>
      </div>
      <div className="music__controls">
        <FaBackward className="music__buttonControls" onClick={previous} />
        {playing ? (
          <FaPause className="music__buttonControls" onClick={playPause} />
        ) : (
          <FaPlay className="music__buttonControls" onClick={playPause} />
        )}
        <FaForward className="music__buttonControls" onClick={next} />
      </div>
    </div>
  );
};

export default Music;
