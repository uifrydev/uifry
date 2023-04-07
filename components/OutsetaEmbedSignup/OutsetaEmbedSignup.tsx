import React, { useEffect } from "react";

const OutsetaEmbedSignup = () => {
    // useEffect(() => {
    //     const o_signup_options = {
    //       id: 'Outseta',
    //       domain: 'uifry.outseta.com',
    //       load: 'auth',
    //       auth: {
    //         widgetMode: 'register',
    //         planFamilyUid: 'wmjrZxmV',
    //         skipPlanOptions: true,
    //         id: 'signup_embed',
    //         mode: 'embed',
    //         selector: '#signup-embed',
    //       },
    //     };
    
    //     const outsetaScript = document.createElement('script');
    //     outsetaScript.src = 'https://cdn.outseta.com/outseta.min.js';
    //     outsetaScript.setAttribute('data-options', JSON.stringify(o_signup_options));
    //     outsetaScript.async = true;
    
    //     const embedElement = document.getElementById('signup-embed');
    //     embedElement?.appendChild(outsetaScript);
    
    //     return () => {
    //       embedElement?.removeChild(outsetaScript);
    //     };
    //   }, []);
  return <div id="signup-embed"></div>
};

export default OutsetaEmbedSignup;
