import { CommingSoonCardProps } from "@/Interface/interface";
import landing1 from "../public/assets/images/landing1.png";
import landing2 from "../public/assets/images/landing2.png";
import landing3 from "../public/assets/images/landing3.png";
import landing4 from "../public/assets/images/landing4.png";
import landing5 from "../public/assets/images/landing5.png";
import landing6 from "../public/assets/images/landing6.png";
import uplab from "../public/assets/images/uplab.png";
import hihut from "../public/assets/images/hihut.png";
import ui8 from "../public/assets/images/ui8.png";
import box from "../public/assets/images/box.png";
import uxcel from "../public/assets/images/uxcel.png";
import creative from "../public/assets/images/creative.png";
import myfont from "../public/assets/images/MyFonts.png";
import dribble from "../public/assets/images/dribble.png";
import indeed from "../public/assets/images/indeed.png";
export const testimonials: {
  name: string;
  designation: string;
  review: string[];
  date: string;
}[] = [
  {
    name: "Jacob M.",
    designation: "Senior UI UX Designer",
    date: "Oct 6, 2022",
    review: [
      "As a seasoned UI/UX designer, I've used countless resources, but UIFry stands out. Their vast collection of templates and UX kits are top-notch, the resources are invaluable, and the job listings have connected me to great opportunities. Not to mention, the weekly addition of hundreds of new resources keeps me ahead of the game!",
    ],
  },
  {
    name: "Sara K.",
    designation: "1st UIFry Subscriber | UI Designer",
    date: "June 23, 2023",
    review: [
      "I was fairly new to UI/UX design when I found UIFry. This platform has everything a budding designer needs to grow.",
      "The resources are comprehensive, up-to-date, and very easy to understand. With UIFry, I've managed to build an impressive portfolio, and I'm learning something new every week!",
    ],
  },
  {
    name: "Joshua M.",
    designation: "UI UX Designer",
    date: "June 18, 2023",
    review: [
      "I can't recommend UIFry enough for any UI/UX designer looking to excel in their career. The sheer number of resources, the quality of templates and briefs, and the commitment to weekly updates are beyond impressive. Plus, their job listings helped me land my dream job! With UIFry, the possibilities are truly unlimited.",
    ],
  },
  {
    name: "Kamal A.",
    designation: "Newbie UI Designer",
    date: "June 24, 2023",
    review: [
      "UIFry's Practice Briefs have been a game-changer for me. They provided me with an invaluable opportunity to apply my skills to real-world challenges. Each brief comes with comprehensive guidelines and resources, making the learning process incredibly seamless and practical. UIFry’s briefs have helped me refine my skills and build a robust portfolio.",
    ],
  },
  {
    name: "Martha L.",
    designation: "Visual Designer",
    date: "June 29, 2023",
    review: [
      "The Style Guides at UIFry have truly been a treasure trove for me. The curated resources on colors, typography, and design examples have tremendously improved my understanding and application of design principles. UIFry's guides have become my go-to source for starting any project, and they've greatly expedited my workflow.",
    ],
  },
  {
    name: "Amber D.",
    designation: "Product Designer",
    date: "July 2, 2023",
    review: [
      "Discovering UIFry has been a turning point in my UI/UX design career. The platform is an all-encompassing resource hub with UI templates, UX kits, practice briefs, custom fonts, style guides, and even a dedicated job board. Every week, I find new resources added to their already extensive library.",
    ],
  },{
    name: "Farsi K.",
    designation: "Website Designer",
    date: "July 4, 2023",
    review: [
      "The custom-made fonts at UIFry have added an entirely new dimension to my designs. Their unique typefaces, crafted specifically for UI/UX design, have given my projects a distinct aesthetic that's hard to find elsewhere. The exclusive fonts have not only enhanced my projects but also significantly broadened my creative horizons.",
    ],
  },{
    name: "Salman M.",
    designation: "Engineer Turned Designer",
    date: "June 7, 2023",
    review: [
      "UIFry's Remote Job Board is a revelation for a UI/UX designer like me. It's not just a list of opportunities but a curated selection of 100% remote jobs that perfectly align with my skills and interests. This dedicated board has made my job search more focused, efficient, and successful.",
    ],
  },
  
];

export const Soon: { title: string; desc: string }[] = [
  {
    title: "Flows",
    desc: "Save hours of UI & UX research with ultimate library of mobile & web screenshots.",
  },
  {
    title: "Learning Hub",
    desc: "Gain access to a comprehensive suite of educational resources & learning material.",
  },
  {
    title: "Tools",
    desc: "Tools like color scheme generator, inspiration galleries and more in the pipleline!",
  },
  {
    title: "Library Expansion",
    desc: "1000s of UI templates, UI UX kits, fonts, briefs and style guides to be added on weekly basis.",
  },
  {
    title: "Community",
    desc: "Connect with fellow designers, exchange ideas, and grow together.",
  },
  {
    title: "AI Designer",
    desc: "Create awesome designs for website, apps and products using our AI designer!",
  },
];

export const landingCardData: CommingSoonCardProps[] = [
  {
    bg: "#E8F2FF",
    categories: [
      {
        title: "Landing Pages Templates",
        desc: "Explore captivating, modern landing page templates from UIFry, perfect for any business or campaign.",
      },
      {
        title: "Dashboard Templates",
        desc: "UIFry's clean, user-friendly dashboard templates streamline data visualization and engagement.",
      },
      {
        title: "App Templates",
        desc: "Enjoy visually stunning, intuitively structured app templates from UIFry for an exceptional user experience.",
      },
    ],
    desc: "Unleash your creativity with a vast library of single assets,  compatible with Figma, Sketch, and XD, perfect for sparking inspiration and starting a design.",
    title: "UI Templates",
    link: "/ui-templates",
    mainImg: { src: landing1, alt: "ui templates landing" },
    replaces: [
      { src: uplab, alt: "uplab" },
      { src: hihut, alt: "hihut" },
    ],
    testimonial: {
      desc: "UIFry's UI templates are truly a game-changer. Their expansive library of assets compatible with Figma, Sketch, and XD has not only sparked my creativity but also streamlined my design process. ",
      name: "Micheal J.",
      designation: "Product Designer, Xeon Agency",
    },
  },
  {
    bg: "#E3F7FF",
    categories: [
      {
        title: "Website Kits",
        desc: "UIFry's comprehensive website design kits streamline the process of creating stunning, user-friendly sites.",
      },
      {
        title: "UI Kits & Wireframe Kits",
        desc: "Simplify your design journey from concept to final product with UIFry's comprehensive UI and wireframe kits.",
      },
      {
        title: "App UI Kits",
        desc: "Enhance your mobile application design with UIFry's intuitive and engaging app design kits with design systems and guides!",
      },
    ],
    desc: "Sign 'em up, sign 'em in. Easily sign up and log in website visitors, then control access to your content, features, or community spaces based on their membership level.",
    title: "UI UX Kits",
    link: "/ui-ux-kits",
    mainImg: { src: landing2, alt: "ui ux landing" },
    replaces: [
      { src: ui8, alt: "ui8" },
      { src: hihut, alt: "uihut" },
    ],
    testimonial: {
      desc: "The UI/UX Kits from UIFry are truly top-tier. I've found their comprehensive design templates, covering everything from apps to websites and products, incredibly helpful with design systems and components.",
      name: "Sanam L.",
      designation: "UI UX Designer, Upwork",
    },
  },
  {
    title: "Briefs",
    desc: "Effortlessly manage all of your member data and customer communications in one place—from lead capture to lifetime value.",
    bg: "#F7F8FD",
    categories: [
      {
        desc: "Hone your skills with UIFry's landing page briefs, providing real-world challenges to perfect your designs.",
        title: "Landing Pages Briefs",
      },
      {
        desc: "UIFry's product UI briefs offer practical tasks to refine your skills in creating intuitive, attractive product interfaces.",
        title: "Product UI Briefs",
      },
      {
        desc: "Expand your UX design expertise through UIFry's UX briefs, providing real-world scenarios to enhance your problem-solving abilities.",
        title: "UX Briefs",
      },
    ],
    link: "/briefs",
    mainImg: { src: landing3, alt: "breifs landing" },
    replaces: [
      { src: box, alt: "box" },
      { src: uxcel, alt: "uxcel" },
    ],
    testimonial: {
      desc: "The practice briefs from UIFry have been a game-changer for my design skills. Their real-world challenges paired with insightful resources provide the perfect practice ground to hone my UI/UX skills. Truly an invaluable tool for designers!",
      name: "Arsalan A.",
      designation: "Junior Web Designer, Fiverr",
    },
  },
  {
    bg: "#E8F2FF",
    categories: [
      {
        desc: "Elevate your designs with UIFry's custom-made fonts, carefully crafted to boost aesthetics and usability in UI/UX design.",
        title: "Custom-made fonts",
      },
      {
        desc: "Explore an extensive variety of unique fonts at UIFry, tailored to fit any design style or project requirement.",
        title: "Crafted for UI UX projects",
      },
      {
        desc: "Enhance your design projects with exclusive fonts from UIFry, created by type experts specifically for UI/UX design.",
        title: "Scalable Typefaces",
      },
    ],
    desc: "From transactional emails to newsletters and automations, our email marketing tools deliver your messages with surgical precision.",
    title: "Fonts",
    link: "/fonts",
    mainImg: { src: landing4, alt: "fonts landing" },
    replaces: [
      { src: creative, alt: "creative" },
      { src: myfont, alt: "my fonts" },
    ],
    testimonial: {
      desc: "UIFry's exclusive fonts have added an extraordinary touch to my projects. The uniqueness and adaptability of their typefaces, tailored for UI/UX design, have elevated my work to a new level. Simply unbeatable!",
      name: "Alisha C.",
      designation: "Senior UI UX Designer, PX",
    },
  },
  {
    bg: "#E3F7FF",
    categories: [
      {
        desc: "Discover 100s of style guides catering different industries and best practices.",
        title: "Categorised style guides",
      },
      {
        desc: "Our style guides includes links to fonts and have a complete PDF guide of color code with example!",
        title: "Fonts and type included",
      },
      {
        desc: "We constantly upload new style guides weekly for you get inspired and make your process faster.",
        title: "Weekly updates",
      },
    ],
    desc: "Happy members, successful bussiness—it's really that simple. Provide help however your members want it.",
    title: "Style Guides",
    link: "/styles-guides",
    mainImg: { src: landing5, alt: "style guides landing" },
    replaces: [{ src: dribble, alt: "dribble" }],
    extraReplace:"Hours of Manual Work",
    testimonial: {
      desc: "The style guides provided by UIFry have been incredibly helpful. They offer curated resources on color and typography, making them a fantastic starting point for any design project.",
      name: "Faizan P.",
      designation: "App Designer, People Per Hour",
    },
  },

  {
    bg: "#F7F8FD",
    categories: [
      {
        desc: "Receive, assign, and respond to requests for help from one place— your members will thank you.",
        title: "Support tickets",
      },
      {
        desc: "Publish searchable how-to content so your members can find answers to their own questions.",
        title: "Knowledge Base",
      },
      {
        desc: "Chat with members when they need help—or toggle chat off when you're busy with other work.",
        title: "Live chat",
      },
    ],
    desc: "Happy members, successful bussiness—it's really that simple. Provide help however your members want it.",
    title: "Jobs",
    link: "/jobs",
    mainImg: { src: landing6, alt: "Jops landing" },
    replaces: [{ src: indeed, alt: "indeed" }],
    testimonial: {
      desc: "Their vast collection of templates and UX kits are top-notch, the resources are invaluable, and the job listings have connected me to great opportunities.",
      name: "Jacob M.",
      designation: "Senior UX Designer, Anonymous ",
    },
    extraReplace:"Other Job Portals"
  },
];
