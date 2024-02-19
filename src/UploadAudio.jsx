// UploadAudio.js
import React, { useState } from 'react';
// import './UploadAudio.css';

const UploadAudio = ({ onUpload }) => {
    const [file, setFile] = useState(null);

    const handleChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = () => {
        onUpload(file);
    };

    return (
        <div className="upload-audio">
            <input type="file" accept="audio/*" onChange={handleChange} />
            <label className="upload-btn" htmlFor="file-upload">Upload</label>
            <button onClick={handleSubmit} style={{ display: 'none' }} id="file-upload">Submit</button>
        </div>
    );
};

export default UploadAudio;
