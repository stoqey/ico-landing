import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import { ipoLinkAddress } from 'common/data/shared';
import Container from 'common/components/UI/Container';
import RockstarGif from 'common/assets/image/crypto/animations/rockstar.gif';
import BlackGirlTweakGif from 'common/assets/image/crypto/animations/blackgirl_tweak.gif';
import WhitegirlTweakGif from 'common/assets/image/crypto/animations/tweak.gif';
import KidTweakGif from 'common/assets/image/crypto/animations/kidtweak.gif';
import DanceFanyGif from 'common/assets/image/crypto/animations/dance_funny.gif';
import NormalClock from './timer';
export const deadline = new Date('2021-03-26');
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  return (
    <SectionWrapper id="ipo">
      <Container>
        <ContentWrapper>
          <p>
            <img className="rockstar-gif no-mobile" src={DanceFanyGif} />
          </p>

          <p>
            <img className="tweak-left" src={BlackGirlTweakGif} />
          </p>

          <p>
            <img className="tweak-right no-mobile" src={WhitegirlTweakGif} />
          </p>

          {/* <p>
            <img className="tweak-center" src={KidTweakGif} />
          </p> */}

          <Heading content="Pre-IPO Starting in: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true"></NormalClock>
            </div>
          </Fade>
          <a {...ipoLinkAddress}>
            <Button className="primary" title="BUY Pre-IPO NOW" />
          </a>
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
