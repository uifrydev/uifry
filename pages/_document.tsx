import { Html, Head, Main, NextScript } from "next/document";
import { Router,useRouter } from "next/router";
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
`;
  return (
    <Html>
      <Head>
        <script dangerouslySetInnerHTML={{ __html: outsetaOptions }} />        
        <script
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_signup_options"
          data-on-success="onSignupSuccess"
        />
        
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
