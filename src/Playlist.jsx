// Playlist.js
import React from 'react';
// import './Playlist.css';

const Playlist = ({ playlist, currentPlayingIndex, onPlay }) => {
    return (
        <div className="playlist">
            <h2>Playlist</h2>
            {playlist.map((audio, index) => (
                <div key={index} className="audio-item">
                    <span className="audio-name">{audio.name}</span>
                    <button className="play-btn" onClick={() => onPlay(index)}>Play</button>
                </div>
            ))}
        </div>
    );
};

export default Playlist;
