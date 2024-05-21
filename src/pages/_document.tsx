import * as React from 'react';
import Document, { DocumentContext, Html, Head, Main, NextScript } from 'next/document';
import { setup } from 'twind';
import { asyncVirtualSheet, getStyleTagProperties } from 'twind/server';
import twindConfig from '../twind.config';
import { GoogleAnalytics } from '@next/third-parties/google'


const sheet = asyncVirtualSheet();

setup({ ...twindConfig, sheet });

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    sheet.reset();
    const initialProps = await Document.getInitialProps(ctx);
    const { id, textContent } = getStyleTagProperties(sheet);
    const styleProps = {
      id,
      key: id,
      dangerouslySetInnerHTML: {
        __html: textContent,
      },
    };

    return {
      ...initialProps,
      styles: [
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        ...initialProps.styles,
        React.createElement(`style`, styleProps),
      ],
    };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async src="https://scripts.simpleanalyticscdn.com/latest.js" />

          {/*/!*<!-- Google tag (gtag.js) -->*!/*/}
          {/*<script async src="https://www.googletagmanager.com/gtag/js?id=G-8QFVWHJQBB"></script>*/}
          {/*<script>*/}
          {/*  window.dataLayer = window.dataLayer || [];*/}
          {/*  /!* @ts-ignore*!/*/}
          {/*  function gtag(){dataLayer.push(arguments)}*/}
          {/*  gtag('js', new Date());*/}

          {/*  gtag('config', );*/}
          {/*</script>*/}
          <GoogleAnalytics gaId = 'G-8QFVWHJQBB'/>

        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
