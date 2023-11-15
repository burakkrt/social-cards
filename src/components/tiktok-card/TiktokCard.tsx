'use client'
import React, { useEffect } from 'react'
import * as Styled from './TiktokCard.styled'
import Image from 'next/image'

import ProfilePhoto from './images/profile-photo.svg'
import PostImage from './images/post-image.svg'
import EyeIcon from './images/eye-icon.svg'
import LikeIcon from './images/like-icon.png'
import save from './images/save.svg'
import comment from './images/comment.svg'
import { TiktokCardProps } from './types'

const TiktokCard: React.FC<TiktokCardProps> = ({ data }) => {
  const [lenght, setLenght] = React.useState(0)
  const [isOpen, setIsOpen] = React.useState(false)
  useEffect(() => {
    setLenght(data.description.split(' ').length)
  }, [data.description])

  function timeAgo(input: Date | string | number) {
    const date = input instanceof Date ? input : new Date(input)
    const formatter = new Intl.RelativeTimeFormat('tr')
    const ranges = [
      ['years', 3600 * 24 * 365],
      ['months', 3600 * 24 * 30],
      ['weeks', 3600 * 24 * 7],
      ['days', 3600 * 24],
      ['hours', 3600],
      ['minutes', 60],
      ['seconds', 1],
    ] as const
    const secondsElapsed = (date.getTime() - Date.now()) / 1000

    for (const [rangeType, rangeVal] of ranges) {
      if (rangeVal < Math.abs(secondsElapsed)) {
        const delta = secondsElapsed / rangeVal
        return formatter.format(Math.round(delta), rangeType)
      }
    }
  }
  return (
    <Styled.AgendaTiktokCard $isOpen={isOpen}>
      <div className="agenda-tiktok-header">
        <div className="agenda-tiktok-header-profile-image">
          <img src={ProfilePhoto.src} alt="Umit Ozdag" />
        </div>
        <div className="agenda-tiktok-header-profile-des">
          <span className="agenda-tiktok-header-profile-des-name">
            {data.channelName}
          </span>
          <span className="agenda-tiktok-header-profile-des-link">
            {data.channelSubs}
          </span>
        </div>
      </div>
      <div className="agenda-tiktok-video">
        <div className="agenda-tiktok-video-desc">
          {isOpen
            ? data.description
            : data.description
                .split(' ')
                .slice(0, 10)
                .toString()
                .replaceAll(',,', 'deneme')
                .replaceAll(',', ' ')
                .replace('deneme', ', ') + '...'}
        </div>
        <button
          className="agenda-tiktok-video-button"
          onClick={() => setIsOpen(!isOpen)}
        >
          {lenght > 12 && isOpen ? 'Daha Az' : 'Daha Fazla'}
        </button>
        <div className="agenda-tiktok-video-date">
          {timeAgo(data.shareDate)}
        </div>
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
            <strong>{data.views}</strong>
            <span>Görüntülenme</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={LikeIcon.src} alt="Like Icon" />
            <strong>{data.likes}</strong>
            <span>Beğeni</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={comment.src} alt="commentIcon" />
            <strong>{data.comments}</strong>
            <span>Yorum</span>
          </div>
          <div className="agenda-tiktok-body-post-infos-item">
            <img src={save.src} alt="saveIcon" />
            <strong>{data.saves}</strong>
            <span>Kaydedilen</span>
          </div>
        </div>
      </div>
    </Styled.AgendaTiktokCard>
  )
}

export default TiktokCard
