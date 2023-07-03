import { BriefList, MainCardProps } from "@/Interface/interface";

import pyramid from "../public/assets/icons/pyramid.svg";
import product from "../public/assets/icons/product.svg";
import bullseye from "../public/assets/icons/bullseye.svg";

export const breifList: BriefList[] = 
[
  {
    title: "Landing Page Briefs",
    name: "landingPageBrief",
    img: {
      alt: "",
      src: product,
    },
    desc: "Explore varied practice briefs to create captivating landing pages that drive conversions and user engagement.",
    includes: [
      "Squeeze & Splash ",
      "Long Form Landing Pages",
      "Lead Capture & Opt-in",
      "Coming Soon & Get Started",
      "Thank You & Pricing Pages",
    ],
    link: "landing-page",
    about: {
      q: "What are landing pages? How many types are there?",
      a: [
        "Landing pages are specialized web pages designed to convert visitors into leads or customers by driving a specific action. They play a crucial role in digital marketing campaigns, focusing on targeted audiences and promoting a single goal.",
        " Various types of landing pages cater to different objectives. Check out the video to learn more about the landing pages and its types.",
      ],
      video: {
        src: "https://www.youtube.com/embed/Cf1urwO8GXo",
      },
    },
    subCategories: [
      "All",
      "Squeeze Page",
      "Splash Page",
      "Lead Capture Page",
      "Webinar Page",
      "Long Form Landing Page",
      "Pricing Page",
      "Thank You Page",
      "Coming Soon Page",
      "E-Book Page",
    ],
  
  },
  {
    title: "Product UI Briefs",
    name: "productUiBrief",
    img: {
      alt: "",
      src: pyramid,
    },
    desc: "Craft striking websites, apps & softwares with diverse practice briefs for improved usability and compelling visuals.",

    includes: ["Websites", "Apps", "Softwares", "Products", "Tools"],

    link: "product-ui",
    about: {
      q: "What is product design UI and its few types?",
      a: [
        `Product design UI, or User Interface design, is a vital aspect of creating digital products such as websites, mobile apps, or software. It focuses on designing visually appealing and easy-to-use interfaces that provide a seamless, intuitive experience for users.`,
        "UI design considers elements like color schemes, typography, button placement, and navigation menus to craft engaging and functional interfaces.",
      ],
      video: {
        src: "https://www.youtube.com/embed/yS9VwBNoeTs",
      },
    },
    subCategories: [
      "All",
      "Websites",
      "Apps",
      "SaaS & Tools",
      // "Tools",
      // "Software",
      // "Other",
    ],
  },
  {
    title: "UX Briefs",
    name: "UxBrief",
    img: {
      alt: "",
      src: bullseye,
    },
    desc: "Design engaging apps through targeted practice briefs that promote seamless user experience and functionality.",
    includes: [
      "Sitemaps",
      "User Journeys",
      "Personas",
      "Wireframes & Flows",
      "Analysis & Research",
    ],
    link: "ux",
    about: {
      q: "What is UX design and few UX deliverables?",
      a: [
        `UX design, or User Experience design, is the process of creating digital products with a focus on providing users with enjoyable, efficient, and meaningful experiences. It involves understanding user needs, preferences, and behavior, and then designing the product to address those requirements.`,
        "Learn more in quick video about UX design!",
      ],
      video: {
        src: "https://www.youtube.com/embed/buSFuePXI6g",
      },
    },
    subCategories: [
      "All",
      "Sitemap",
      "User Journey & Flows",
      "Persona",
      "Wireframe",
      "Research",
      "Other",
    ],
  },
];

export const list = [
  {
    title: "UI Templates",
    link: "/ui-templates",
    subTitle: "Single Assets",
    buttons: [
      //  // // // Temporarily Comment
      // { title: "All" },
      // { title: "Finance" },
      // { title: "SaaS" },
      // { title: "Real State" },
      // { title: "Education" },
      // { title: "Crypto & NFT" },
      // { title: "Marketing" },
      // { title: "Social Media" },
      // { title: "Agency" },
      ////// excluded
      // { title: "Management" },
      // { title: "Resturant" },
      // { title: "Bloackchain" },
      // { title: "Agriculture" },
      // { title: "Portfolio" },
      // { title: "Tech" },
      // { title: "Fashion" },
    ],
    list: [
      { title: "All Templates", link: "/" },
      { title: "Landing Pages", link: "/landing-pages" },
      { title: "Apps", link: "/apps" },
      { title: "Dashboards", link: "/dashboards" },
      // { title: "Styles Guides", link: "/styles-guides" },
    ],
  },
  {
    title: "UI UX Kits",
    link: "/ui-ux-kits",
    subTitle: "Complete Kits",
    list: [],
    buttons: [
      { title: "All Kits" },
      { title: "Website Kits" },
      { title: "UI Kits" },
      { title: "Wireframe/UX Kits" },
      { title: "App Kits" },

      // { title: "Websites" },
      // { title: "Landing Pages" },
      // { title: "Application" },
      // { title: "Wireframes / UX" },
      // { title: "Ecommerce" },
      // { title: "App" },
    ],
  },
  {
    title: "Briefs",
    link: "/briefs",
    subTitle: "Practice Like A Pro",
    list: [],
    buttons: [],
  },
  {
    title: "Fonts",
    link: "/fonts",
    subTitle: "Combos & Families",
    list: [],
    buttons: [
      { title: "All Kits" },
      { title: "Website" },
      { title: "Landing Pages" },
      { title: "Application" },
      { title: "Wireframes/UX" },
      { title: "Ecommerce" },
      { title: "App" },
    ],
  },
  {
    title: "Styles Guides",
    link: "/styles-guides",
    subTitle: "Colors With Type",
    list: [],
    buttons: [
      { title: "All" },
      { title: "Finance" },
      { title: "SaaS" },
      { title: "Healthcare" },
      { title: "Real Estate" },
      { title: "E-Commerce" },
      { title: "Travel" },
      { title: "Food" },
      { title: "Education" },
      { title: "Entertainment" },
      { title: "Agency" },
    ],
  },
  {
    title: "Jobs",
    link: "/jobs",
    list: [],
    subTitle: "100% Remote Jobs",
    buttons: [
      { title: "All Jobs" },
      { title: "UI Designer" },
      { title: "UX Designer" },
      { title: "Digital Designer" },
      { title: "Website Designer" },
    ],
  },
  // {
  //   title: "Learn",
  //   link: "https://www.google.com",
  //   subTitle: "Grow Like A Pro",
  //   list: [],
  //   buttons: [

  //   ],
  // },
  {
    title: "Roadmap",
    link: "/our-roadmap",
    subTitle: "Discover our plans",
    list: [],
    buttons: [],
  },
];

export const slugList = [
  { title: "License Agreement", link: "license-agreement" },
  { title: "Privacy Policy", link: "privacy-policy" },
  { title: "Terms & Conditions", link: "terms-and-conditions" },
  { title: "Disclaimer", link: "disclaimer" },
  { title: "Cookie Policy", link: "cookie-policy" },
  { title: "EULA", link: "end-user-license-agreement" },
  { title: "Returns & Refund", link: "return-refund-policy" },
  { title: "Fair Policy", link: "fair-policy" },
];
