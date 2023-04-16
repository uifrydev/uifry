import { MainCardProps } from "@/Interface/interface";

import pyramid from "../public/assets/icons/pyramid.svg";
import product from "../public/assets/icons/product.svg";
import bullseye from "../public/assets/icons/bullseye.svg";
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
    list: [
      { title: "All Briefs", link: "/" },
      { title: "Websites", link: "/websites" },
      { title: "Apps", link: "/apps" },
      { title: "Landing Pages", link: "/landing-pages" },
      { title: "Products", link: "/products" },
      { title: "UX", link: "/ux" },
    ],
    buttons: [
      { title: "All" },
      { title: "Finance" },
      { title: "SaaS" },
      { title: "Education" },
      { title: "Management" },
      { title: "Real State" },
      { title: "Resturant" },
      { title: "Bloackchain" },
      { title: "Agriculture" },
      { title: "Portfolio" },
      { title: "Tech" },
      { title: "Fashion" },
    ],
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
      { title: "Real State" },
      { title: "E-Commerce" },
      { title: "Travel" },
      { title: "Food" },
      { title: "Education" },
      { title: "Entertainment" },
      { title: "Charity" },
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

export const breifList: MainCardProps[] = [
  {
    title: "Product UI Briefs",
    img: {
      alt: "",
      src: product,
    },
    desc: "Craft striking websites, apps & sfotwares with diverse practice briefs for improved usability and compelling visuals.",
    includes: ["Websites", "Apps", "Softwares", "Products", "Tools"],
    link:''
  },
  {
    title: "Product UI Briefs",
    img: {
      alt: "",
      src: pyramid,
    },
    desc: "Craft striking websites, apps & sfotwares with diverse practice briefs for improved usability and compelling visuals.",
    includes: [
      "Squeeze & Splash ",
      "Long Form Landing Pages",
      "Lead Capture & Opt-in",
      "Coming Soon & Get Started",
      "Thank You & Pricing Pages",
    ],
    link:''
  },
  {
    title: "Product UI Briefs",
    img: {
      alt: "",
      src: bullseye,
    },
    desc: "Craft striking websites, apps & sfotwares with diverse practice briefs for improved usability and compelling visuals.",
    includes: [
      "Sitemaps",
      "User Journeys",
      "Personas",
      "Wireframes & Flows",
      "Analysis & Research",
    ],
    link:''
  },
];