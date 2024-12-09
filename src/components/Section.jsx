import React from 'react';
import VideoCard from './VideoCard';

const Section = ({ title, videos }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl md:text-2xl font-bold text-white">{title}</h2>
      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
        {videos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default Section;

