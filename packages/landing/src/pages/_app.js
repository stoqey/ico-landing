import { Modal } from '@redq/reuse-modal';
import '@redq/reuse-modal/es/index.css';
import 'common/assets/css/flaticon.css';
import 'swiper/swiper-bundle.css';
import '../containers/CryptoModern/CountDown/timer.css';
import 'common/assets/css/icon-example-page.css';
// import amplitude from "amplitude-js";
import {
  AmplitudeProvider,
  Amplitude,
  LogOnMount,
} from '@amplitude/react-amplitude';

export default function CustomApp({ Component, pageProps }) {
  // const isBrowser = typeof window !== "undefined";
  if (process.browser) {
    const amplitude = require('amplitude-js'); // eslint-disable-line @typescript-eslint/no-var-requires
    const amplitudeInstance = amplitude.getInstance();
    // https://help.amplitude.com/hc/en-us/articles/115001361248#settings-configuration-options
    amplitudeInstance.init(process.env.NEXT_PUBLIC_AMPLITUDE_KEY, null, {
      // userId,
      // logLevel: process.env.APP_STAGE === "production" ? "DISABLE" : "WARN",
      includeGclid: true,
      includeReferrer: true, // https://help.amplitude.com/hc/en-us/articles/215131888#track-referrers
      includeUtm: true,
      // @ts-ignore XXX onError should be allowed, see https://github.com/DefinitelyTyped/DefinitelyTyped/issues/42005
      onError: (error) => {
        // Sentry.captureException(error);
        console.error(error); // eslint-disable-line no-console
      },
    });

    // amplitudeInstance.setVersionName(process.env.APP_VERSION); // e.g: 1.0.0

    return (
      <AmplitudeProvider
        amplitudeInstance={amplitudeInstance}
        apiKey={process.env.AMPLITUDE_API_KEY}
        // userId={userId}
      >
        <Modal>
          <Component {...pageProps} />
        </Modal>
      </AmplitudeProvider>
    );
  }
  return (
    <Modal>
      <Component {...pageProps} />
    </Modal>
  );
}
