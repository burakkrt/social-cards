'use client'
import React from 'react'
import * as Styled from './YoutubeStyled.jsx'

import ProfilePhoto from './images/profile-photo.svg'
import PostImage from './images/post-image.svg'
import EyeIcon from './images/eye-icon.svg'
import LikeIcon from './images/like-icon.png'

export default function YoutubeCard() {
  return (
    <Styled.AgendaYoutubeCard>
      <div className="agenda-youtube-header">
        <div className="agenda-youtube-header-profile-image">
          <img src={ProfilePhoto.src} alt="Umit Ozdag" />
        </div>
        <div className="agenda-youtube-header-profile-des">
          <span className="agenda-youtube-header-profile-des-name">
            Kanal Adı
          </span>
          <span className="agenda-youtube-header-profile-des-link">
            138 B Abone
          </span>
        </div>
      </div>
      <div className="agenda-youtube-body">
        <img
          className="agenda-youtube-body-post-image"
          src={PostImage.src}
          alt="Post image"
        />
        <div className="agenda-youtube-body-post-infos">
          <div className="agenda-youtube-body-post-infos-item">
            <img src={EyeIcon.src} alt="Eye Icon" />
            <strong>218.102</strong>
            <span>Görüntülenme</span>
          </div>
          <div className="agenda-youtube-body-post-infos-item">
            <img src={LikeIcon.src} alt="Like Icon" />
            <strong>1.245</strong>
            <span>Beğeni</span>
          </div>
        </div>
      </div>
    </Styled.AgendaYoutubeCard>
  )
}
