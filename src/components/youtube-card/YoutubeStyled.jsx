import styled from 'styled-components'

export const AgendaYoutubeCard = styled.div`
  width: 512px;

  .agenda-youtube {
    &-header {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 2rem;
      &-profile-image {
        img {
          width: 74px;
        }
      }
      &-profile-des {
        &-name {
          font: normal normal bold 20px/25px Euclid Circular A;
          color: #000000;
        }
        &-link {
          display: block;
          font: normal normal medium 18px/23px Euclid Circular A;
          color: #707b93;
        }
      }
    }

    &-body {
      &-post-image {
        border-radius: 10px;
        margin: 1rem 0;
      }

      &-post-infos {
        &-item {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;

          img {
            width: 24px;
          }

          &:not(:last-child) {
            margin-right: 1.8rem;
          }
        }
      }
    }
  }
`
