import Head from "next/head";
import React from "react";

const MetaHead = ({
  title,
  description,
  link,
  image,
}: {
  title: string;
  description: string;
  link: string;
  image?: string;
}) => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Corporation",
    name: "UIfry",
    url: "https://uifry.com/",
    logo: "https://www.uifry.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo-beta.f0b24af5.png&w=128&q=75",
    tags: [
      "UI/UX Design",
      "Unlimited Access",
      "Design Resources",
      "Design Templates",
      "Design Briefs",
      "UI Jobs",
      "UX Jobs",
      "Design Tools",
      "Design Education",
      "Skill Enhancement"
    ]
    // sameAs: [
    //   "https://www.facebook.com/uifry",
    //   "https://twitter.com/uifry",
    //   "https://www.instagram.com/uifry",
    //   "https://www.linkedin.com/company/creaditechus/",
    //   "https://www.pinterest.com/Creaditech/",
    // ],
  };
  return (
    <Head>
      <meta
        name="robots"
        content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1"
      />
      <title>{title}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/* {image && <meta property="og:image" content={image} />} */}
      <meta property="og:image"  content={`https://www.uifry.com/assets/images/opengraph.png`} />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <link rel="canonical" href={`https://uifry.com/${link || ""}`} />
      <script
        key="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default MetaHead;
