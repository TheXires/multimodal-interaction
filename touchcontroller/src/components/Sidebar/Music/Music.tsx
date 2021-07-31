import React from 'react';
import './Music.css';
import music_img from '../../../assets/music.jpg';
import { FaPause, FaBackward, FaForward } from 'react-icons/fa';

const Music = (): JSX.Element => {
  return (
    <div className="music" style={{ borderRadius: 25 }}>
      <img src={music_img} />
      <div className="music__data">
        <div className="music__song">Karl Ess von dem Mount Everest</div>
        <div className="music__artist">Garagen Larrys</div>
      </div>
      <div className="music__controlls">
        <FaBackward className="music__buttonControlls" />
        <FaPause className="music__buttonControlls" />
        <FaForward className="music__buttonControlls" />
      </div>
    </div>
  );
};

export default Music;
