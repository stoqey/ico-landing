import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import RockstarGif from 'common/assets/image/crypto/animations/rockstar.gif';
import BlackGirlTweakGif from 'common/assets/image/crypto/animations/blackgirl_tweak.gif';
import WhitegirlTweakGif from 'common/assets/image/crypto/animations/tweak.gif';
import KidTweakGif from 'common/assets/image/crypto/animations/kidtweak.gif';
import DanceFanyGif from 'common/assets/image/crypto/animations/dance_funny.gif';
import NormalClock from './timer';
const deadline = new Date('2021-03-20');
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <p>
            <img className="rockstar-gif" src={DanceFanyGif} />
          </p>

          <p>
            <img className="tweak-left no-mobile" src={BlackGirlTweakGif} />
          </p>

          <p>
            <img className="tweak-right no-mobile" src={WhitegirlTweakGif} />
          </p>

          {/* <p>
            <img className="tweak-center" src={KidTweakGif} />
          </p> */}

          <Heading content="IPO Launch starting in: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true"></NormalClock>
            </div>
          </Fade>
          <Button className="primary" title="BUY Pre-IPO NOW" />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
