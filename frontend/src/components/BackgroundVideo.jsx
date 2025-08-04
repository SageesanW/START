import React, { useState } from 'react';

const BackgroundVideo = ({ videoUrl, overlay = true }) => {
  const [videoError, setVideoError] = useState(false);

  const handleVideoError = () => {
    setVideoError(true);
  };

  return (
    <div className="absolute inset-0 overflow-hidden">
      {!videoError && videoUrl ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          onError={handleVideoError}
        >
          <source src={videoUrl} type="video/mp4" />
        </video>
      ) : (
        // Animated gradient fallback
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-purple-900 animate-pulse" />
          <div className="absolute inset-0 bg-gradient-to-tl from-purple-900/20 via-transparent to-blue-900/20 animate-pulse" 
               style={{ animationDelay: '1s' }} />
          {/* Floating particles effect */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(6)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-2 h-2 bg-purple-400/30 rounded-full animate-bounce`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 0.5}s`,
                  animationDuration: `${3 + Math.random() * 2}s`
                }}
              />
            ))}
          </div>
        </div>
      )}
      
      {overlay && (
        <div className="absolute inset-0 bg-black/40" />
      )}
    </div>
  );
};

export default BackgroundVideo;