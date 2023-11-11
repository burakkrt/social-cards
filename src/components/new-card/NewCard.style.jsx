import styled from 'styled-components'

export const AgendaNewCard = styled.div`
  max-width: 512px;
  border: 1px solid #e8e8e8;
  border-radius: 20px;

  .agenda-new {
    &-header {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 1rem;
      border-radius: 20px 20px 0 0;
      padding: 1.5rem 2.5rem 0.5rem 2.5rem;

      &-profile-image {
        position: relative;
        padding: 10px 10px;
        img {
          width: 44px;
          border-radius: 50%;
          background-color: #ffffff;
        }
        &::after {
          content: '';
          position: absolute;
          width: 58px;
          height: 58px;
          left: calc(((58px - 44px - 20px) / 2) * -1);
          top: calc(((58px - 44px - 20px) / 2) * -1);
          background: #000000 0 0 no-repeat padding-box;
          border-radius: 50%;
          z-index: -1;
        }
      }

      &-profile-new-name {
        font: normal normal bold 26px/28px Euclid Circular A;
      }

      &-profile-link {
        margin-left: auto;

        a {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 6px;
          font: normal normal medium 16px/20px Euclid Circular A;
          color: #959698;
          transition-duration: 200ms;
          &:hover {
            color: #000000;
          }
        }
        img {
          width: 18px;
        }
      }
    }

    &-body {
      padding: 0 2.8rem 1.5rem 2.8rem;
      &-image {
        width: 100%;
        overflow: hidden;
        border-radius: 10px;
        margin-bottom: 0.5rem;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      &-post-info {
        font: normal normal normal 14px/18px Euclid Circular A;
        color: #707b93;
        margin: 0 0.2rem;
      }
      &-post-detail {
        margin: 0 0.2rem;
        &-title {
          font: normal normal 600 22px/25px Euclid Circular A;
          color: #2e2f31;
          margin: 1rem 0;
        }
        &-text {
          font: normal normal normal 16px/20px Euclid Circular A;
          color: #2e2f31;
          margin-top: 1rem;
          display: -webkit-box;
          overflow: hidden;
          text-overflow: ellipsis;
          -webkit-line-clamp: 6;
          -webkit-box-orient: vertical;
        }
      }
    }
  }
`
