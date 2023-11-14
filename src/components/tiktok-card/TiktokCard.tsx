'use client'
import React from 'react'
import * as Styled from './TiktokCard.styled'

import ProfilePhoto from './images/profile-photo.svg'
import PostImage from './images/post-image.svg'
import EyeIcon from './images/eye-icon.svg'
import LikeIcon from './images/like-icon.png'
import save from './images/save.svg'
import comment from './images/comment.svg'

export default function TiktokCard() {
  const [isOpen, setIsOpen] = React.useState(false)
  return (
    <Styled.AgendaTiktokCard $isOpen={isOpen}>
      <div className="agenda-tiktok-header">
        <div className="agenda-tiktok-header-profile-image">
          <img src={ProfilePhoto.src} alt="Umit Ozdag" />
        </div>
        <div className="agenda-tiktok-header-profile-des">
          <span className="agenda-tiktok-header-profile-des-name">
            Kanal Adı
          </span>
          <span className="agenda-tiktok-header-profile-des-link">
            138 B Abone
          </span>
        </div>
      </div>
      <div className="agenda-tiktok-video">
        <div className="agenda-tiktok-video-desc">
          GAZZE’DEN ETKİLENDİ MÜSLÜMAN OLDU! ABD’li bir vatandaş, katil
          İsrail’in Gazze’deki katliamları….{' '}
          {isOpen
            ? 'Lorem ipsum dolor sit ame consectetur adipisicing elit. Odio dolorum obcaecati voluptates veexplicabo magni veritatis iusto ex nesciunt laudantium.'
            : ''}
        </div>
        <button
          className="agenda-tiktok-video-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? 'Daha Az' : 'Daha Fazla'}
        </button>
        <div className="agenda-tiktok-video-date">12 saat önce</div>
      </div>
      <div className="agenda-tiktok-body">
        <img
          className="agenda-tiktok-body-post-image"
          src={PostImage.src}
          alt="Post image"
        />
        <div className="agenda-tiktok-body-post-infos">
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={EyeIcon.src} alt="Eye Icon" />
            <strong>218.102</strong>
            <span>Görüntülenme</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={LikeIcon.src} alt="Like Icon" />
            <strong>1.245</strong>
            <span>Beğeni</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={comment.src} alt="commentIcon" />
            <strong>699</strong>
            <span>Yorum</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={save.src} alt="saveIcon" />
            <strong>1.232</strong>
            <span>Kaydedilen</span>
          </div>
        </div>
      </div>
    </Styled.AgendaTiktokCard>
  )
}
