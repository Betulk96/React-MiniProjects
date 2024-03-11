import React from 'react'
import './index.scss'
import CatVideos from './catVideos';
import CatNews from './catNews';

const Contents = () => {
  return (
    <div className="contentsMenu">
      <CatVideos />
      <CatNews />
      <CatNews />
    </div>

  )
}

export default Contents;
