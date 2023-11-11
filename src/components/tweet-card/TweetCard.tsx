'use client'
import * as Styled from './TweetCard.style'
import ozdagProfil from './images/ozdag-profil.jpg'
import xLogo from './images/x-logo.svg'
import openLink from './images/open-link.svg'
import postImage from './images/post-image.svg'
import { useEffect } from 'react'
export default function TweetCard() {
  // useEffect(() => {
  //   const desc: HTMLElement | null = document.querySelector(
  //     '.agenda-tweet-body-post-text',
  //   )
  //   if (desc) {
  //     const value: string | null = desc.textContent
  //     let profileText = ''
  //     if (value && value.indexOf('@') > 0) {
  //       for (let i = value.indexOf('@'); i < value.length; i++) {
  //         if (value.charAt(i) === ' ') {
  //           profileText = value.slice(value.indexOf('@'), i)
  //           break
  //         }
  //       }
  //     }
  //     if (value && value.indexOf('@') > 0 && profileText.length === 0) {
  //       profileText = value.slice(value.indexOf('@'))
  //     }
  //     if (value && profileText.length > 0) {
  //       desc.innerHTML = value.replace(
  //         profileText,
  //         `<a href="https://twitter.com/${profileText}" target="_blank">${profileText}</a>`,
  //       )
  //     }
  //   }
  // }, [])

  return (
    <Styled.AgendaTweetCard>
      <div className="agenda-tweet-header">
        <div className="agenda-tweet-header-profile-image">
          <img src={ozdagProfil.src} alt="Umit Ozdag" />
        </div>
        <div className="agenda-tweet-header-profile-des">
          <span className="agenda-tweet-header-profile-des-name">
            Ümit Özdağ
          </span>
          <span className="agenda-tweet-header-profile-des-link">
            @umitozdag
          </span>
        </div>
      </div>
      <div className="agenda-tweet-body">
        <p className="agenda-tweet-body-post-text">
          İsrail’in Gazze’de gerçekleştirdiği soykırım ve etnik temizlik
          karşısında miting yapmak ve çok kızmaktan başka hiç bir şey yapmayan
          AK Parti şimdi İsrail’in Gazze’yi boşaltma planına yardımcı olacak
          şekilde hasta tedavisi, yetim çocuklar söylemleri ile kamuoyunu
          Gazzelilerin bir kısmının Türkiye’ye gelmesine hazırlıyor. Gazzelileri
          Türkiye’ye ne ad altında olursa olsun getirmek Gazze’yi boşaltmak
          isteyen İsrail’e hizmettir. @umitozdag
        </p>
        <img
          className="agenda-tweet-body-post-image"
          src={postImage.src}
          alt="Post image"
        />
        <button
          className="btn btn-primary"
          type="button"
          onClick={() => alert('button passive')}
        >
          Çeviri yap
        </button>
        <div className="agenda-tweet-body-post-infos">
          <span>ÖS 10:54 - 6 Kas 2023</span>
          <span>
            <strong>1.6 Mn</strong> Görüntülenme
          </span>
        </div>
      </div>
      <div className="agenda-tweet-footer">
        <div className="agenda-tweet-footer-statistics">
          <span>
            <strong>58</strong> Repost
          </span>
          <span>
            <strong>9</strong> Alıntı
          </span>
          <span>
            <strong>254</strong> Beğeni
          </span>
        </div>
        <div className="agenda-tweet-footer-link">
          <button
            className="btn"
            type="button"
            onClick={() => alert('button passive')}
          >
            Post 'u görüntülemek için tıklayınız
            <img src={openLink.src} alt="Open link logo" />
          </button>
        </div>
        <div className="agenda-tweet-footer-logo">
          <img src={xLogo.src} alt="X Logo" />
        </div>
      </div>
    </Styled.AgendaTweetCard>
  )
}
