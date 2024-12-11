
const VideoPlayer = ({ videoUrl }) => {
  const isYouTube = videoUrl.includes('youtu');

  if (isYouTube) {
    const videoId = new URL(videoUrl).searchParams.get('v') || videoUrl.split('/').pop().split('?')[0];
    const embedUrl = `https://www.youtube.com/embed/${videoId}`;

    return (
      <div className="w-full aspect-video bg-gray-800">
        <iframe
          className="w-full h-full"
          src={embedUrl}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="YouTube Video Player"
        />
      </div>
    );
  }

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
