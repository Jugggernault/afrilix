import React from 'react';

const VideoPlayer = ({ videoUrl }) => {
  return (
    <div className="w-full aspect-video bg-gray-800">
      <video 
        className="w-full h-full" 
        controls 
        src={videoUrl}
      >
        Votre navigateur ne supporte pas la lecture de vidéos.
      </video>
    </div>
  );
};

export default VideoPlayer;

