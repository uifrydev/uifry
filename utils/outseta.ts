const OUTSETA_ID: string = "DemoOutseta";

const OPTIONS: { id: string, domain: string, monitorDom: boolean, load: string } = {
  id: OUTSETA_ID,
  domain: "uifry.outseta.com",
  /* Vital setting for a single page application */
  monitorDom: true,
  /* Do not load the nocode module */
  load: "auth,profile"
};

let outsetaPromise: Promise<any> | null = null;

const createScript = (): HTMLScriptElement => {
  const optionsKey = `${OUTSETA_ID}Options`;

  // Set the options on window
  (window as any)[optionsKey] = OPTIONS;

  // Create external script element
  const script = document.createElement("script");
  script.src = "https://cdn.outseta.com/outseta.min.js";
  // Set name of options key on window
  script.dataset.options = optionsKey;

  return script;
};

export const loadOutseta = async (): Promise<any> => {
  // In case loadOutseta is called several times,
  // lets make sure we only make one promise.
  if (outsetaPromise) return outsetaPromise;

  outsetaPromise = new Promise((resolve, reject) => {
    if ((window as any)[OUTSETA_ID]) {
      // If Outseta is initialized
      // lets resolve right away
      resolve((window as any)[OUTSETA_ID]);
    } else {
      const script = createScript();

      script.onload = () => {
        if ((window as any)[OUTSETA_ID]) {
          resolve((window as any)[OUTSETA_ID]);
        } else {
          reject(new Error("Outseta.js not available"));
        }
      };

      script.onerror = () => {
        // reject(new Error("Failed to load Outseta.js"));
      };

      document.head.appendChild(script);
    }
  });

  return outsetaPromise;
};