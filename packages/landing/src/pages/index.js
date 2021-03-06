import React, { Fragment } from 'react';
import Head from 'next/head';
import Sticky from 'react-stickynode';
import { ThemeProvider } from 'styled-components';
import { Amplitude, LogOnMount } from '@amplitude/react-amplitude';
import { cryptoTheme } from 'common/theme/crypto';
import { ResetCSS } from 'common/assets/css/style';
import { GlobalStyle, ContentWrapper } from 'containers/Crypto/crypto.style';
import { DrawerProvider } from 'common/contexts/DrawerContext';
import Navbar from 'containers/Crypto/Navbar';
import Banner from 'containers/Crypto/BannerSection';
import BannerSlider from 'containers/Crypto/BannerSlider';
import Transactions from 'containers/Crypto/Transaction';
import ControlSections from 'containers/Crypto/ControlSection';
import TrustedProofSections from 'containers/Crypto/TrustedProof';
import ScalableSections from 'containers/Crypto/ScalableSection';
import SlideSections from 'containers/Crypto/CryptoSlides';
import BetaSections from 'containers/Crypto/BetaSection';
import Footer from 'containers/Crypto/Footer';
import CountDownSection from 'containers/Crypto/CountDown';
import AnnouncementBar from 'containers/AnnouncementBar';

const Landing = () => {
  const LandingComponent = () => {
    return (
      <ThemeProvider theme={cryptoTheme}>
        <Fragment>
          <Head>
            <title>Stoqey | Stupid Simple Investing </title>
          </Head>
          <ResetCSS />
          <GlobalStyle />
          <AnnouncementBar />
          <ContentWrapper>
            <Sticky top={0} innerZ={9999} activeClass="sticky-nav-active">
              <DrawerProvider>
                <Navbar />
              </DrawerProvider>
            </Sticky>
            <Banner />
            <BannerSlider />
            <CountDownSection />
            <Transactions />
            <ControlSections />

            {/* <TrustedProofSections /> */}
            {/* <ScalableSections /> */}
            {/* <SlideSections /> */}
            <BetaSections />
            <Footer />
          </ContentWrapper>
        </Fragment>
      </ThemeProvider>
    );
  };

  if (process.browser) {
    return (
      <Amplitude
        eventProperties={(inheritedProps) => ({
          ...inheritedProps,
          page: {
            ...inheritedProps.page,
            name: 'landing',
          },
        })}
      >
        {() => (
          <>
            <LogOnMount eventType="page-displayed" />
            <LandingComponent />
          </>
        )}
      </Amplitude>
    );
  }

  return <LandingComponent />;
};
export default Landing;
