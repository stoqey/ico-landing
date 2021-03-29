import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
} from 'react-share';
import { TLink } from 'common/data/shared';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import FeatureBlock from 'common/components/FeatureBlock';
import Container from 'common/components/UI/Container';
import Particles from '../Particle';
import { Icon } from 'react-icons-kit';
import { socialTwitter } from 'react-icons-kit/ionicons/socialTwitter';
import { socialReddit } from 'react-icons-kit/ionicons/socialReddit';
import { socialWhatsapp } from 'react-icons-kit/ionicons/socialWhatsapp';
import { facebook2 } from 'react-icons-kit/icomoon/facebook2';
import BannerBG from 'common/assets/image/crypto/white_bg1.svg';
import SmartCityGif from 'common/assets/image/crypto/animations/smart_city.gif';
// import NewYorkGif from 'common/assets/image/crypto/animations/nyc.gif';
import Bg from './Background';

import BannerWrapper, { BgImageWrapper } from './bannerSection.style';

const BannerSection = ({
  row,
  col,
  title,
  btnStyle,
  description,
  discountText,
  discountAmount,
  outlineBtnStyle,
}) => {
  const ButtonGroup = () => (
    <Fragment>
      <TLink title="Tap In!">
        <Button title="Tap In!" {...btnStyle} />
      </TLink>

      {/* <Button
        title="Download Whitepaper"
        variant="textButton"
        icon={<i className="flaticon-next" />}
        {...outlineBtnStyle}
      /> */}
    </Fragment>
  );
  const ShareButtonGroup = () => (
    <Fragment>
      <TwitterShareButton
        url="https://stoqey.com"
        title="Stupid Simple Investing"
        via="stoqey_"
        related={['stoqey_', 'ceddybi', 'patmuhi']}
        hashtags={[
          'stoqey',
          'investing',
          'stocks',
          'IPO',
          'crypto',
          'investments',
        ]}
      >
        <Button
          title="Tweeeet This"
          variant="textButton"
          iconPosition="left"
          icon={<Icon icon={socialTwitter} />}
          {...outlineBtnStyle}
          className="btnWithoutColor"
        />
      </TwitterShareButton>

      <RedditShareButton
        url="https://stoqey.com"
        title="Stupid Simple Investing"
        via="stoqey_"
        via="stoqey_"
        related={['stoqey_', 'ceddybi', 'patmuhi']}
        hashtags={[
          'stoqey',
          'investing',
          'stocks',
          'IPO',
          'crypto',
          'investments',
        ]}
      >
        <Button
          title="Redditttt This"
          variant="textButton"
          iconPosition="left"
          icon={<Icon icon={socialReddit} />}
          {...outlineBtnStyle}
          className="btnWithoutColor"
        />
      </RedditShareButton>

      <WhatsappShareButton
        url="https://stoqey.com"
        title="Stupid Simple Investing"
        via="stoqey_"
        via="stoqey_"
        related={['stoqey_', 'ceddybi', 'patmuhi']}
        hashtags={[
          'stoqey',
          'investing',
          'stocks',
          'IPO',
          'crypto',
          'investments',
        ]}
      >
        <Button
          title="Wassssup This"
          variant="textButton"
          iconPosition="left"
          icon={<Icon icon={socialWhatsapp} />}
          {...outlineBtnStyle}
          className="btnWithoutColor"
        />
      </WhatsappShareButton>
    </Fragment>
  );
  return (
    <>
      {/* <div className="bgreverse" style={{ position: 'absolute', zIndex: 1 }}>
        <Bg />
      </div> */}
      {/* <div className="bgreverse">
          <Bg />
        </div> */}
      <BannerWrapper id="banner_section">
        <Particles />
        <BgImageWrapper>
          <Image src={BannerBG} alt="banner background" />
        </BgImageWrapper>
        <Container>
          <Box className="row" {...row}>
            <Box className="col" {...col}>
              <FeatureBlock
                title={<Heading content="STUPID SIMPLE INVESTING" {...title} />}
                description={
                  <Heading
                    content="Investing sucks, let US(🤖🤖🤖) do it for you? then we, uhm, 😉 share profits 🥴💵 "
                    {...title}
                  />
                }
                button={<ButtonGroup />}
              />
              <FeatureBlock button={<ShareButtonGroup />} />
            </Box>
            <img className="smart-city no-mobile" src={SmartCityGif} />
            {/* <img className="new_york" src={NewYorkGif} /> */}
          </Box>
        </Container>
      </BannerWrapper>
    </>
  );
};

BannerSection.propTypes = {
  title: PropTypes.object,
  btnStyle: PropTypes.object,
  description: PropTypes.object,
  contentStyle: PropTypes.object,
  discountText: PropTypes.object,
  discountAmount: PropTypes.object,
  outlineBtnStyle: PropTypes.object,
};

BannerSection.defaultProps = {
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-15px',
    mr: '-15px',
    alignItems: 'center',
  },
  col: {
    pr: '15px',
    pl: '15px',
    width: ['100%', '100%', '100%', '60%', '65%'],
  },
  title: {
    fontSize: ['26px', '34px', '42px', '42px', '47px'],
    fontWeight: '700',
    color: '#fff',
    letterSpacing: '-0.025em',
    mb: ['20px', '25px'],
    lineHeight: '1.31',
  },
  description: {
    fontSize: ['14px', '16px', '18px', '18px', '20px'],
    color: '#fff',
    lineHeight: '30px',
    mb: '0',
    maxWidth: '550px',
  },
  btnStyle: {
    minWidth: ['120px', '156px'],
    fontSize: '15px',
    fontWeight: '700',
    borderRadius: '6px',
  },
  outlineBtnStyle: {
    minWidth: ['130px', '156px'],
    fontSize: '16px',
    fontWeight: '700',
    color: '#fff',
    p: '5px 10px',
  },
};

export default BannerSection;
