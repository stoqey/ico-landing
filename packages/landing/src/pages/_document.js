import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import favicon from 'common/assets/image/icon/favicon-16x16.png';
import appleTouchIcon57 from 'common/assets/image/icon/apple-icon-57x57.png';
import appleTouchIcon60 from 'common/assets/image/icon/apple-icon-60x60.png';
import appleTouchIcon72 from 'common/assets/image/icon/apple-icon-72x72.png';
import appleTouchIcon76 from 'common/assets/image/icon/apple-icon-76x76.png';
import appleTouchIcon114 from 'common/assets/image/icon/apple-icon-114x114.png';
import appleTouchIcon120 from 'common/assets/image/icon/apple-icon-120x120.png';
import appleTouchIcon144 from 'common/assets/image/icon/apple-icon-144x144.png';
import appleTouchIcon152 from 'common/assets/image/icon/apple-icon-152x152.png';
import appleTouchIcon180 from 'common/assets/image/icon/apple-icon-180x180.png';
import icon192 from 'common/assets/image/icon/android-icon-192x192.png';
import icon32 from 'common/assets/image/icon/favicon-32x32.png';
import icon96 from 'common/assets/image/icon/favicon-96x96.png';
import icon16 from 'common/assets/image/icon/favicon-16x16.png';

export default class CustomDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });
      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content="#000000" />

          <title>
            Stupid simple investing | Online Investment Services | Stoqey
          </title>

          {/* SEO */}
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta name="robots" content="NOODP" />
          <meta charSet="UTF-8" />
          <meta name="application-name" content="Stoqey" />

          <meta
            name="keywords"
            content="stoqey, investing services, invest service, trading services, trade service, trading account services, trade account, invest account, business account, stocks, stocks investing, crypto, crypto investing, bitcoin, ico, contracts, ethereum, dogecoin, stoqey, STQ"
          />
          <meta
            name="description"
            content="Stupid Simple Investing, Investing sucks, let bots do it for you? then share profits"
          />

          <link rel="canonical" href="https://ipo.stoqey.com" />
          <meta property="twitter:card" content="summary" />
          <meta property="twitter:site" content="@stoqey_" />
          <meta property="og:url" content="https://ipo.stoqey.com" />
          <meta property="og:type" content="website" />
          <meta
            property="og:title"
            content="Stupid simple investing | Online Investment Services | Stoqey"
          />
          <meta property="og:image" content={appleTouchIcon180} />
          <meta
            property="og:description"
            content="Stupid Simple Investing, Investing sucks, let bots do it for you? then share profits"
          />

          {/* Logos */}
          <link rel="icon" href={favicon} type="image/png" sizes="16x16" />
          <link rel="apple-touch-icon" sizes="57x57" href={appleTouchIcon57} />
          <link rel="apple-touch-icon" sizes="60x60" href={appleTouchIcon60} />
          <link rel="apple-touch-icon" sizes="72x72" href={appleTouchIcon72} />
          <link rel="apple-touch-icon" sizes="76x76" href={appleTouchIcon76} />
          <link
            rel="apple-touch-icon"
            sizes="114x114"
            href={appleTouchIcon114}
          />
          <link
            rel="apple-touch-icon"
            sizes="120x120"
            href={appleTouchIcon120}
          />
          <link
            rel="apple-touch-icon"
            sizes="144x144"
            href={appleTouchIcon144}
          />
          <link
            rel="apple-touch-icon"
            sizes="152x152"
            href={appleTouchIcon152}
          />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href={appleTouchIcon180}
          />
          <link rel="icon" type="image/png" sizes="192x192" href={icon192} />
          <link rel="icon" type="image/png" sizes="32x32" href={icon32} />
          <link rel="icon" type="image/png" sizes="96x96" href={icon96} />
          <link rel="icon" type="image/png" sizes="16x16" href={icon16} />

          <link
            href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700|Heebo:300,400,500,700"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
