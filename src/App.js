// App.js
import React, { useState, useEffect } from 'react';
import UploadAudio from './UploadAudio';
import Playlist from './Playlist';
import "./App.css";

const App = () => {
  const [playlist, setPlaylist] = useState([]);
  const [currentPlayingIndex, setCurrentPlayingIndex] = useState(-1);

  useEffect(() => {
    const savedPlaylist = JSON.parse(localStorage.getItem('playlist')) || [];
    const savedIndex = parseInt(localStorage.getItem('currentPlayingIndex')) || -1;

    setPlaylist(savedPlaylist);
    setCurrentPlayingIndex(savedIndex);
  }, []);

  const handleUpload = (file) => {
    if (file) {
      const newAudio = {
        name: file.name,
        url: URL.createObjectURL(file),
      };
      const newPlaylist = [...playlist, newAudio];
      setPlaylist(newPlaylist);
      localStorage.setItem('playlist', JSON.stringify(newPlaylist));
    };
  };

  const handlePlay = (index) => {
    setCurrentPlayingIndex(index);
    localStorage.setItem('currentPlayingIndex', index.toString());
  };

  return (
    <>
      <div className="container">
        <h1>Audio Player</h1>
        <UploadAudio onUpload={handleUpload} />
        <Playlist playlist={playlist} currentPlayingIndex={currentPlayingIndex} onPlay={handlePlay} />
        {currentPlayingIndex !== -1 && (
          <audio
            controls
            autoPlay
            key={playlist[currentPlayingIndex].url}
            onEnded={() => handlePlay((currentPlayingIndex + 1) % playlist.length)}
          >
            <source src={playlist[currentPlayingIndex].url} type="audio/mpeg" />
          </audio>
        )}
      </div>
      <div className="copyright">
        <p>&copy; {new Date().getFullYear()} Harshil Sinha. All Rights Reserved.</p>
      </div>
    </>
  );
};

export default App;
