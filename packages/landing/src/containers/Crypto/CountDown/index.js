import React from 'react';
import Fade from 'react-reveal/Fade';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Container from 'common/components/UI/Container';
import NormalClock from './timer';
const deadline = new Date('2021-03-20');
import SectionWrapper, { ContentWrapper } from './countdown.style';

const CountDownSection = () => {
  return (
    <SectionWrapper>
      <Container>
        <ContentWrapper>
          <Heading content="Token Pre-sale starting in: " />
          <Fade up>
            <div className="timerCount">
              <NormalClock countdown={deadline} divider="true" />
            </div>
          </Fade>
          <Button className="primary" title="BUY NOW" />
        </ContentWrapper>
      </Container>
    </SectionWrapper>
  );
};

export default CountDownSection;
