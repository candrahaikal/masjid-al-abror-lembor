// import React from 'react';

const YoutubePlayer = () => {
  return (
    <div className="w-full px-6 lg:w-2/3 h-auto mx-auto mb-20">
      <iframe
        width="100%"
        style={{ aspectRatio: '16 / 9' }} // Atur aspek rasio sesuai kebutuhan (misalnya 16:9)
        src="https://www.youtube.com/embed/r9m_LVyfh9A?si=BbTHACyMMOISbygC"
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowfullscreen
      ></iframe>
    </div>
  );
};

export default YoutubePlayer;
