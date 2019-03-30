import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

/* eslint-disable */
export default class MyDocument extends Document {
  static getInitialProps({ renderPage }) {
    const sheet = new ServerStyleSheet()
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    )
    const styleTags = sheet.getStyleElement()
    return { ...page, styleTags }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="renderer" content="webkit" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1, viewport-fit=cover"
          />

          <script src="https://cdn.jsdelivr.net/npm/promise-polyfill@8/dist/polyfill.min.js" />
          <link
            href="https://cdn.staticfile.org/antd/3.8.4/antd.css"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Orbitron"
            rel="stylesheet"
          />
          <link rel="icon" href="/favicon.ico?v=7" />

          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=${
              process.env.GA_TRACING_ID
            }`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', '${process.env.GA_TRACING_ID}');
              `,
            }}
          />
          {this.props.styleTags}
        </Head>
        <body id="body">
          <Main />
          <NextScript />
        </body>

        {/* load iziToast from CDN */}
        <script
          async
          src="https://cdn.staticfile.org/izitoast/1.4.0/js/iziToast.min.js"
        />
        <link
          href="https://cdn.staticfile.org/izitoast/1.4.0/css/iziToast.css"
          rel="stylesheet"
        />
        <noscript>You need to enable JavaScript to run this app.</noscript>
      </html>
    )
  }
}
