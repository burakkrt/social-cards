import styled from 'styled-components'

export const AgendaTweetCard = styled.div`
  max-width: 512px;

  .agenda-tweet {
    &-header {
      display: flex;
      flex-direction: row;
      justify-content: start;
      align-items: center;
      gap: 2.3rem;
      position: relative;
      background: #000000 0% 0% no-repeat padding-box;
      border-radius: 20px 20px 0px 0px;
      padding: 1.7rem 2.6rem;
      z-index: -2;

      &-profile-image {
        position: relative;
        img {
          width: 62px;
          border-radius: 50%;
        }
        &::after {
          content: '';
          position: absolute;
          width: 74px;
          height: 74px;
          left: calc(((74px - 62px) / 2) * -1);
          top: calc(((74px - 62px) / 2) * -1);
          background: #ffffff 0 0 no-repeat padding-box;
          border-radius: 50%;
          z-index: -1;
        }
      }

      &-profile-des {
        &-name {
          display: block;
          font: normal normal bold 20px/25px Euclid Circular A;
          color: #ffffff;
        }
        &-link {
          display: block;
          font: normal normal 18px/18px Euclid Circular A;
          color: #707b93;
        }
      }
    }

    &-body {
      padding: 1.7rem 2.6rem;
      background: #ffffff 0 0 no-repeat padding-box;
      border: 1px solid #e8e8e8;
      font: normal normal normal 18px/23px Euclid Circular A;

      &-post-image {
        width: 100%;
        border-radius: 20px;
        margin: 1rem 0;
      }

      &-post-text {
        margin: 0;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
        -webkit-line-clamp: 9;
        -webkit-box-orient: vertical;
      }

      &-post-infos {
        color: #707b93;
        margin-top: 1rem;
        span:not(:first-child) {
          margin-left: 8px;
          &::before {
            content: '|';
            color: #707b93;
            margin-right: 8px;
          }
          strong {
            color: #000000;
          }
        }
      }
    }

    &-footer {
      position: relative;
      &-statistics {
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        background: #f4f4f4 0 0 no-repeat padding-box;
        padding: 1rem 0;
        z-index: -1111;

        span {
          font: normal normal 18px/23px Euclid Circular A;

          strong {
            margin-right: 0.4rem;
          }
        }
      }
      &-link {
        background: #000000 0 0 no-repeat padding-box;
        border-radius: 0 0 20px 20px;
        width: 100%;
        padding: 1rem 0;

        button {
          display: flex;
          flex-direction: row;
          align-items: center;
          gap: 4px;
          font: normal normal 16px/20px Euclid Circular A;
          margin: auto;
          color: #959698;

          &:hover {
            color: #ffffff;
          }
        }

        img {
          width: 18px;
          color: #959698;
        }
      }
      &-logo {
        position: absolute;
        left: 28px;
        bottom: 9px;
        img {
          position: relative;
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 1px solid #ffffff;
          padding: 4px;
        }
        &::after {
          content: '';
          position: absolute;
          width: 64px;
          height: 64px;
          left: calc(((64px - 48px) / 2) * -1);
          top: calc(((64px - 48px) / 2) * -1);
          background: #000000 0 0 no-repeat padding-box;
          border-radius: 50%;
          z-index: -111;
        }
      }
    }
  }
  .btn {
    background: none;
    border: none;
    cursor: pointer;
    transition-duration: 200ms;
    padding: 0;
  }
  .btn.btn-primary {
    color: #1ea4ea !important;
  }
`