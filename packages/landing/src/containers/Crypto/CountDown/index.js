import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import { TLink } from 'common/data/shared';
import Container from 'common/components/UI/Container';
import RockstarGif from 'common/assets/image/crypto/animations/rockstar.gif';
import BlackGirlTweakGif from 'common/assets/image/crypto/animations/blackgirl_tweak.gif';
import WhitegirlTweakGif from 'common/assets/image/crypto/animations/tweak.gif';
import KidTweakGif from 'common/assets/image/crypto/animations/kidtweak.gif';
import DanceFanyGif from 'common/assets/image/crypto/animations/dance_funny.gif';
import NormalClock from './timer';
export const deadline = new Date('2021-04-05');
// export const deadline = new Date();

export const deadlineReached = new Date() >= deadline;

import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  // if (deadlineReached) {
  //   return null;
  // }

  return (
    <SectionWrapper id="ipo">
      <Container>
        <ContentWrapper>
          <p>
            <img className="rockstar-gif" src={DanceFanyGif} />
          </p>

          <p>
            <img className="tweak-left" src={BlackGirlTweakGif} />
          </p>

          <p>
            <img className="tweak-right" src={WhitegirlTweakGif} />
          </p>

          {/* <p>
            <img className="tweak-center" src={KidTweakGif} />
          </p> */}

          {deadline ? (
            <p>
              <div className="space-logo">
                <a
                  href="https://www.producthunt.com/posts/stoqey?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-stoqey"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=294514&theme=light"
                    alt="Stoqey - Stupid simple investing | Product Hunt"
                    style={{ width: '250px', height: '54px' }}
                    width={250}
                    height={54}
                  />
                </a>
              </div>

              <img className="logo-center" src={KidTweakGif} />
            </p>
          ) : (
            <>
              <Heading content="IPO Starting in: " />
              <Fade up>
                <div className="timerCount">
                  <NormalClock
                    countdown={deadline}
                    divider="true"
                  ></NormalClock>
                </div>
              </Fade>
              <TLink title="BUY Pre-IPO NOW">
                <Button className="primary" title="BUY Pre-IPO NOW" />
              </TLink>
            </>
          )}
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
