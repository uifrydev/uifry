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

        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=UA-236889710-1"
        ></script>
        <script>
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'UA-236889710-1');`}
        </script>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
