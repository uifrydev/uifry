import { CommingSoonCardProps } from "@/Interface/interface";
import landing1 from "../public/assets/images/landing1.png";
import uplab from "../public/assets/images/uplab.png";
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
    link: "",
    mainImg: { src: landing1, alt: "ui templates landing" },
    replaces: [{ src: uplab, alt: "uplab" }],
    testimonial: {
      desc: "UIFry's UI templates are truly a game-changer. Their expansive library of assets compatible with Figma, Sketch, and XD has not only sparked my creativity but also streamlined my design process. ",
      name: "Micheal J.",
      designation: "Product Designer, Xeon Agency",
    },
  },
  {
    bg: "#E3F7FF",
    categories: [{ desc: "", title: "" }],
    desc: "Sign 'em up, sign 'em in. Easily sign up and log in website visitors, then control access to your content, features, or community spaces based on their membership level.",
    title: "UI UX Kits",
    link: "",
    mainImg: { src: landing1, alt: "ui templates landing" },
    replaces: [{ src: uplab, alt: "uplab" }],
    testimonial: {
      desc: "The UI/UX Kits from UIFry are truly top-tier. I've found their comprehensive design templates, covering everything from apps to websites and products, incredibly helpful with design systems and components.",
      name: "Sanam L.",
      designation: "UI UX Designer, Upwork",
    },
  },
  {
    bg: "#E8F2FF",
    categories: [{ desc: "", title: "" }],
    desc: "",
    title: "UI Templates",
    link: "",
    mainImg: { src: landing1, alt: "ui templates landing" },
    replaces: [{ src: uplab, alt: "uplab" }],
    testimonial: { desc: "string", name: "string", designation: "string" },
  },
];
