/* eslint-disable max-len */
import { createDOMRenderer, renderToStyleElements } from '@griffel/react';
import Document, {
  DocumentContext,
  Html,
  Main,
  NextScript,
  Head,
} from 'next/document';
import React from 'react';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
class MyDocument extends Document<any> {
  static async getInitialProps(ctx: DocumentContext) {
    const { defaultLocale } = ctx;
    const originalRenderPage = ctx.renderPage;

    const renderer = createDOMRenderer();

    ctx.renderPage = () =>
      originalRenderPage({
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        enhanceApp: (App: any) => {
          // eslint-disable-next-line react/display-name
          return (props) => {
            return <App {...props} renderer={renderer} />;
          };
        },
      });

    const locale = ctx.locale || defaultLocale;

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      locale,
      pathname: ctx.pathname,
      styles: (
        <>
          {initialProps.styles}
          {renderToStyleElements(renderer)}
        </>
      ),
    };
  }
  render() {
    const { locale } = this.props;

    return (
      <Html dir={locale === 'he' ? 'rtl' : 'ltr'} lang={locale}>
        <Head>
          <meta charSet="utf-8" />
        </Head>
        <body>
          {/* <script
            //eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{
              __html: getLocaleDataScript(locale || 'en'),
            }}
            id='localeDataScript'
          /> */}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
