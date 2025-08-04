import React from 'react';

const BackgroundVideo = ({ videoUrl, overlay = true }) => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src={videoUrl} type="video/mp4" />
        {/* Fallback for browsers that don't support video */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900" />
      </video>
      
      {overlay && (
        <div className="absolute inset-0 bg-black/50" />
      )}
    </div>
  );
};

export default BackgroundVideo;