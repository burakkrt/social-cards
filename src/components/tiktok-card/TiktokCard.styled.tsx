import styled from 'styled-components'

export const AgendaTiktokCard = styled.div<{ $isOpen: boolean }>`
  width: 512px;

  .agenda-tiktok {
    &-video {
      &-desc {
        height: auto;
        overflow: hidden;
        transition:
          all,
          0.4s cubic-bezier(1, 0, 1, 0);
      }
      &-button {
        background-color: transparent;
        border: none;
        padding: 0;
        text-align: left;
        cursor: pointer;
        color: #000000;
        font: normal normal bold 18px/23px Euclid Circular A;
        letter-spacing: 0px;
      }
      &-date {
        display: block;
        font: normal normal normal 18px/23px Euclid Circular A;
        color: #707b93;
      }
    }
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
      display: flex;
      gap: 1rem;
      &-post-image {
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        margin: 1rem 0;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      &-post-infos {
        padding: 2rem 2rem;

        &-item {
          display: inline-flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          padding: 1rem 0;

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
