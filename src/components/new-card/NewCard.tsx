'use client'
import * as Styled from './NewCard.style'
import newLogo from './images/new-logo.png'
import openLink from './images/open-link.svg'
import newImage from './images/new-image.svg'

export default function NewCard() {
  return (
    <Styled.AgendaNewCard>
      <div className="agenda-new-header">
        <div className="agenda-new-header-profile-image">
          <img src={newLogo.src} alt="New Logo" />
        </div>
        <span className="agenda-new-header-profile-new-name">Milliyet</span>
        <div className="agenda-new-header-profile-link">
          <a href="http://localhost:8080" target="_blank">
            Haber Linki <img src={openLink.src} alt="Open link logo" />{' '}
          </a>
        </div>
      </div>
      <div className="agenda-new-body">
        <div className="agenda-new-body-image">
          <img src={newImage.src} alt="New image" />
        </div>
        <span className="agenda-new-body-post-info">6 Kas 2023 Pazartesi</span>
        <div className="agenda-new-body-post-detail">
          <h3 className="agenda-new-body-post-detail-title">
            Bakan Ersoy: Bu afeti el ele vererek birlikte atlatacağız
          </h3>
          <p className="agenda-new-body-post-detail-text">
            Kültür ve Turizm Bakanı Mehmet Nuri Ersoy, Ramazan ayının ilk
            iftarını Malatya’nın Battalgazi ilçesi İnönü Üniversitesi Teknopark
            bahçesinde oluşturulan konteyner kentte depremzedelerle birlikte
            yaptı. İftar sonrası açıklamalarda bulunan Ersoy, “Ülkemiz ve
            Malatya’mız tarihin en büyük afetlerinden biri ile yüzleşti, çok
            büyük yıkımlar oldu.
          </p>
        </div>
      </div>
    </Styled.AgendaNewCard>
  )
}
