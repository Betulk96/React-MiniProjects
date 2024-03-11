import React from 'react';
import './catVideos.scss';

const CatVideos = () => {
  return (
    <div className="catVideos">
      <h1>Cat Videos</h1>
      <div className='videos'>
        <iframe height="400px"  width="32%" src="https://www.youtube.com/embed/ukiD7YyCK9g?si=-HjrBcxXs7PZTvvQ&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        <iframe height="400px"  width="32%"  src="https://www.youtube.com/embed/y0sF5xhGreA?si=5sSOpFroRs756X8D&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe height="400px"  width="32%"  src="https://www.youtube.com/embed/hRrFhR8bSz8?si=JQE5-Wytsf6Y_D2U&amp;start=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
      </div>

    </div>
  );
};

export default CatVideos;
