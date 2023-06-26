// client.ts
import sanityClient, { createClient } from "@sanity/client";
export default createClient({
  projectId: "9rifnxuc",
  dataset: "production", // or the name you chose in step 1
  useCdn: true, // `false` if you want to ensure fresh data
});
