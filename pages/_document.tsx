import { Html, Head, Main, NextScript } from "next/document";
import { Router, useRouter } from "next/router";
import Script from "next/script";

const Document = () => {
  // Define the options object in the global scope
  //   const outsetaOptions = `
  //   var o_signup_options = {
  //     id: "Outseta",
  //     domain: "uifry.outseta.com",
  //     load: "auth",
  //     auth: {
  //       widgetMode: "register_or_login",
  //       skipPlanOptions: true,
  //       id: "signup_embed",
  //       mode: "popup",
  //       selector: "#signup-embed",
  //     },
  //   };
  // `;
  const outsetaOptions = `
var o_signup_options = {
  "id": "Outseta",
  "domain": "uifry.outseta.com",
  "load": "auth",
  "auth": {
    "widgetMode": "register",
    "planUid": "OW4Yy4mg",
    "planPaymentTerm": "month",
    "skipPlanOptions": true,
    "id": "signup_embed",
    "mode": "embed",
    "selector": "#signup-embed"
  }
};
var o_options = {
  domain: 'uifry.outseta.com',
  load: 'chat'
};
`;
  return (
    <Html lang="en">
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png"></link>
        <meta name="theme-color" content="#fff" />
        <script dangerouslySetInnerHTML={{ __html: outsetaOptions }} />
        <script
          async
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_signup_options"
          data-on-success="onSignupSuccess"
        />
        <script
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_options"
        ></script>

        <Script
          strategy="lazyOnload"
          src="https://www.googletagmanager.com/gtag/js?id=G-H6YXLQ87T1"
        />
        <Script strategy="lazyOnload">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-H6YXLQ87T1');`}
        </Script>

        <Script strategy="lazyOnload">
          {`!function(w, d, t, u) { if (w.__ls) return; var f = w.__ls = function() { f.push ? f.push.apply(f, arguments) : f.store.push(arguments)}; if (!w.__ls) w.__ls = f; f.store = []; f.v = "1.0"; var ls = d.createElement(t); ls.async = true; ls.src = u; var s = d.getElementsByTagName(t)[0]; s.parentNode.insertBefore(ls, s); }(window, document, 'script', ('https:' == window.location.protocol ? 'https://' : 'http://') + 'cdn.livesession.io/track.js'); __ls("init", "d58bb084.155e2e0b"); __ls("newPageView") `}
        </Script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
