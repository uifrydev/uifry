import { Html, Head, Main, NextScript } from "next/document";
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
window.o_signup_options = {
  id: "Outseta",
  domain: "uifry.outseta.com",
  load: "auth",
  auth: {
    widgetMode: "register_or_login",
    skipPlanOptions: true,
    id: "signup_embed",
    mode: "popup",
    selector: "#signup-embed",
  },
};
`;
  return (
    <Html>
      <Head>
        {/* <script dangerouslySetInnerHTML={{ __html: outsetaOptions }} />
        <script
          src="https://cdn.outseta.com/outseta.min.js"
          data-options="o_options"
        /> */}
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
