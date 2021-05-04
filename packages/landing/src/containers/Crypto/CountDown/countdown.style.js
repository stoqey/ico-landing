import styled from 'styled-components';
import { themeGet } from '@styled-system/theme-get';

const SectionWrapper = styled.div`
  padding: 75px 0;
  overflow: hidden;

  @media only screen and (max-width: 1440px) {
    padding: 100px 0 50px;
  }
  @media only screen and (max-width: 480px) {
    padding: 60px 0 5px;
  }

  .rockstar-gif {
    z-index: 1000;
    height: 300px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -100%);
    @media only screen and (max-width: 768px) {
      height: 200px;
    }

    @media only screen and (max-width: 480px) {
      height: 100px;
    }
  }

  .cut {
    z-index: 1000;
    position: absolute;
  }

  .space-logo {
    height: 200px;
    @media only screen and (max-width: 768px) {
      height: 100px;
    }

    @media only screen and (max-width: 480px) {
      height: 80px;
    }
  }

  .logo-center {
    z-index: 1000;
    height: 400px;
    position: absolute;
    left: 50%;
    transform: translate(-50%, -46%);

    @media only screen and (max-width: 768px) {
      height: 320px;
      right: 0%;
      transform: translate(-45%, -43%);
    }

    @media only screen and (max-width: 480px) {
      height: 200px;
      transform: translate(-45%, -32%);
    }
  }

  .tweak-left {
    z-index: 1000;
    height: 400px;
    position: absolute;
    left: 10%;
    transform: translate(-40%, -0%);

    @media only screen and (max-width: 768px) {
      height: 220px;
      transform: translate(-40%, -52%);
    }

    @media only screen and (max-width: 480px) {
      height: 120px;
    }
  }

  .tweak-right {
    z-index: 100;
    height: 500px;
    position: absolute;
    right: -10%;
    transform: translate(-10%, -30%);

    @media only screen and (max-width: 768px) {
      right: 0%;
      height: 220px;
      transform: translate(23%, -60%);
    }

    @media only screen and (max-width: 480px) {
      right: 0%;
      height: 150px;
      transform: translate(0%, -80%);
    }
  }
`;

export const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 480px) {
    flex-wrap: nowrap;
    align-items: center;
  }

  h2 {
    color: ${themeGet('colors.black', '#000')};
    font-size: 32px;
    line-height: 44px;
    font-weight: 400;
    margin-bottom: 27px;
    @media only screen and (max-width: 1366px) {
      font-size: 30px;
      line-height: 42px;
      margin-bottom: 20px;
    }
    @media only screen and (max-width: 991px) {
      font-size: 26px;
      line-height: 38px;
    }
    @media only screen and (max-width: 768px) {
      max-width: 100%;
    }
    @media only screen and (max-width: 480px) {
      margin-bottom: 0px;
    }
  }

  .timerCount {
    margin-top: 30px;
    margin-bottom: 60px;

    .NormalClock {
      display: flex;
      justify-content: space-between;
      width: 600px;
      align-items: center;
      @media (max-width: 480px) {
        width: 100%;
      }
      .NormalUnitContainer {
        width: 110px;
        height: 100px;
        border-radius: 5px;
        background-color: #0b1741;
        @media (max-width: 480px) {
          width: 70px;
          height: 70px;
        }
        .NormalupperCard {
          align-items: center;
          display: flex;
          justify-content: center;
          span {
            font-size: 60px;
            letter-spacing: -1px;
            color: #ffffff;
            font-weight: 300;
            text-align: center;
            @media (max-width: 480px) {
              font-size: 30px;
            }
          }
        }
        .digitLabel {
          font-size: 14px;
          letter-spacing: 3px;
          color: #8ec7ff;
          font-weight: 500;
          text-align: center;
          margin-top: 12px;
          @media (max-width: 480px) {
            font-size: 10px;
          }
        }
      }
      .dividerColon {
        font-size: 36px;
        line-height: 48px;
        color: #000;
        font-weight: 700;
        text-align: center;
      }
    }
  }
  .reusecore__button {
    text-transform: inherit;
    border-radius: 5px;
    padding-left: 16px;
    padding-right: 16px;
    font-size: 14px;
    font-weight: 500;
    text-transform: uppercase;
    margin-top: 30px;

    &.primary {
      background-image: linear-gradient(to right, #4ba1d8, #4464bd 95%);
      &:hover {
        box-shadow: rgba(75, 109, 235, 0.78) 0px 9px 20px -10px;
      }
    }
  }
`;

export default SectionWrapper;
