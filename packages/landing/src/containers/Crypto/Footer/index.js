import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Box from 'common/components/Box';
import Text from 'common/components/Text';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Select from 'common/components/Select';
import Container from 'common/components/UI/Container';
import ContactSections from '../Contact';
import FooterWrapper, {
  List,
  ListItem,
  BgImageWrapper,
  SocialList,
} from './footer.style';
import { menuWidget, Language_NAMES } from 'common/data/Crypto';
import AppImage from 'common/assets/image/crypto/footerapp.svg';
import PlaystoreImage from 'common/assets/image/crypto/footerplay.svg';
import FooterBG from 'common/assets/image/crypto/footer-bg.svg';
import Logo from 'common/components/UIElements/Logo';
import LogoImage from 'common/assets/image/logo-white.png';
import LogoImageAlt from 'common/assets/image/logo.png';
import NewYorkFooter from 'common/assets/image/crypto/footer/new_york_footer.png';

import { socialLinks } from './social';

const Footer = ({ row, col, colOne, colTwo, titleStyle }) => {
  return (
    <FooterWrapper id="footerSection">
      <ContactSections />
      <Container noGutter mobileGutter width="1200px">
        <div className="footer">
          <div className="fitem">
            <div className="logo-box">
              <Logo
                href="#"
                logoSrc={LogoImage}
                title="Logo"
                logoStyle={{
                  maxWidth: '200px',
                }}
                className="logo-alt"
              />
            </div>
          </div>
          <div className="fitem"></div>
          <div className="fitem"></div>
        </div>
        <div className="footer">
          <div className="fitem">
            <p style={{ textAlign: 'center' }}>
              {' '}
              Copyright © {new Date().getFullYear()} Stoqey Inc. All rights
              reserved{' '}
            </p>
          </div>

          <div className="fitem">
            <SocialList>
              {socialLinks.map((item) => (
                <li className={item.name} key={`social__link-key${item.id}`}>
                  <Link href={item.link}>
                    <a aria-label="social share link">{item.icon}</a>
                  </Link>
                </li>
              ))}
            </SocialList>
          </div>
          <div className="fitem">
            <p>support@stoqey.com</p>
          </div>
        </div>
      </Container>
      <img className="footer-img" src={NewYorkFooter} />
    </FooterWrapper>
  );
};

// Footer style props
Footer.propTypes = {
  row: PropTypes.object,
  col: PropTypes.object,
  colOne: PropTypes.object,
  colTwo: PropTypes.object,
  titleStyle: PropTypes.object,
  textStyle: PropTypes.object,
};

// Footer default style
Footer.defaultProps = {
  // Footer row default style
  row: {
    flexBox: true,
    flexWrap: 'wrap',
    ml: '-4px',
    mr: '-4px',
  },
  // Footer col one style
  colOne: {
    width: ['100%', '30%', '33%', '33%'],
    mb: ['30px', 0],
    pl: ['0px', 0],
    pr: ['0px', '0px', 0],
  },
  // Footer col two style
  colTwo: {
    width: ['100%', '70%', '67%', '67%'],
    flexBox: true,
    flexWrap: 'wrap',
  },
  // Footer col default style
  col: {
    width: ['100%', 1 / 3, 1 / 3, 1 / 3],
    pl: [0, '15px'],
    pr: [0, '15px'],
    mb: ['30px', '30px'],
  },
  // widget title default style
  titleStyle: {
    color: '#FFFFFF',
    fontSize: ['15px', '16px', '16px', '18px', '18px'],
    fontWeight: '600',
    lineHeight: '1.34',
    mb: ['15px', '18px', '18px', '20px', '30px'],
    fontFamily: 'Poppins',
  },
  // Default logo size
  logoStyle: {
    width: '128px',
    mb: '15px',
  },
  // widget text default style
  textStyle: {
    color: '#FFFFFF',
    fontSize: '16px',
    mb: '12px',
    fontWeight: '600',
    fontFamily: 'Lato',
  },
};

export default Footer;
