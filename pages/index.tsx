import React, { useCallback, useEffect, useRef, useState } from "react";
// import Card from "../components/Card/Card";
// import DetailsModal from "../components/DetailsModal/DetailsModal";
import FilterBar from "../components/FilterBar/FilterBar";
// import Header from "../components/Header/Header";
// import Sidebar from "../components/Sidebar/Sidebar";
// import '../styles/global.css'
import { useSelector, useDispatch } from "react-redux";
import Link from "next/link";
import {
  updateBriefModal,
  updateModal,
  updateModal1,
} from "../store/slices/featues";
import sanity from "../sanity";
import imageUrlBuilder from "@sanity/image-url";
import KitHeader from "../components/KitHeader/KitHeader";
import { RootState } from "@/store/store";
import { GetServerSideProps, GetStaticProps, NextPage } from "next";
import { CategoryCardProps, Data, JobProps } from "@/Interface/interface";
// import List from "@/components/List/List";
// import UiKitCard from "@/components/UiKitCard/UiKitCard";
// import DetailsModal1 from "@/components/DetailSmodal1/DetailsModal1";
// import FontCard from "@/components/FontCard/FontCard";
import { fetchDataServer, generateQuery } from "@/utils/functions";
// import JobCard from "@/components/JobCard/JobCard";
// import MetaHead from "@/components/MetaHead/MeatHead";
// import CategoryCard from "@/components/BriefComponents/CategoryCard";
import templates from "../public/assets/images/templates.png";
import kits from "../public/assets/images/kits.png";
import briefsImg from "../public/assets/images/briefs.png";
import guides from "../public/assets/images/guides.png";
import jobsImg from "../public/assets/images/jobs.png";
import fontsImg from "../public/assets/images/fonts.png";
import templates1 from "../public/assets/images/templates1.png";
import kits1 from "../public/assets/images/kits1.png";
import briefsImg1 from "../public/assets/images/briefs1.png";
import guides1 from "../public/assets/images/guides1.png";
import jobsImg1 from "../public/assets/images/jobs1.png";
import fontsImg1 from "../public/assets/images/fonts1.png";
import line from "../public/assets/images/line5.png";
import brands from "../public/assets/images/brands.png";
import linkedin from "../public/assets/icons/linkedin.svg";
import instagram from "../public/assets/icons/instagram.svg";
import twitter from "../public/assets/icons/twitter.svg";
import facebook from "../public/assets/icons/facebook.svg";
import Image, { StaticImageData } from "next/image";
// import Sticker from "@/components/Sticker/Sticker";
import dynamic from "next/dynamic";
import { Props, ScriptProps } from "next/script";
import { testimonials } from "@/utils/data";
import TestimonialCard from "@/components/Card/TestimonialCard";
import ProCard from "@/components/Card/ProCard";
const Card = dynamic(() => import("../components/Card/Card"));
const DetailsModal = dynamic(
  () => import("../components/DetailsModal/DetailsModal")
);
const LandingPage = dynamic(() => import("../components/LandingPage"));
const Header = dynamic(() => import("../components/Header/Header"));
const Sidebar = dynamic(() => import("../components/Sidebar/Sidebar"));
const List = dynamic(() => import("@/components/List/List"));
const UiKitCard = dynamic(() => import("@/components/UiKitCard/UiKitCard"));
const DetailsModal1 = dynamic(
  () => import("@/components/DetailSmodal1/DetailsModal1")
);
const FontCard = dynamic(() => import("@/components/FontCard/FontCard"));
const JobCard = dynamic(() => import("@/components/JobCard/JobCard"));
const MetaHead = dynamic(() => import("@/components/MetaHead/MeatHead"));
const CategoryCard = dynamic(
  () => import("@/components/BriefComponents/CategoryCard")
);
const Sticker = dynamic(() => import("@/components/Sticker/Sticker"));
const BriefModal = dynamic(
  () => import("../components/DetailsModal/BreifModal")
);

const Home: NextPage<{
  uiTemplates: Data[];
  uiKits: Data[];
  fonts: Data[];
  styleGuides: Data[];
  jobs: JobProps[];
  briefs: CategoryCardProps[];
  thisWeek: any;
}> = ({ uiTemplates, uiKits, fonts, styleGuides, jobs, briefs, thisWeek }) => {
  const { openModal, openModal1, briefModal } = useSelector(
    (state: RootState) => state.features
  );
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  const [modalData, setModalData] = useState<Data>({
    category: "",
    fileURL: "",
    slug: { current: "" },
    subCategory: "",
    tags: [],
    title: "",
  });
  const compare = [
    { title: "landingPageBrief", slug: "landing-page" },
    { title: "productUiBrief", slug: "product-ui" },
    { title: "UxBrief", slug: "ux" },
  ];
  const pages: {
    title: string;
    desc: string;
    img: { src: StaticImageData; alt: string };
    img1: { src: StaticImageData; alt: string };
    link: string;
  }[] = [
    {
      title: "UI Templates",
      desc: "UI Templates are single assets used to kick start and inspire yourself. Files available in Figma, XD and Sketch",
      img: {
        src: templates,
        alt: "ui templates image",
      },
      img1: {
        src: templates1,
        alt: "ui templates image",
      },
      link: "/ui-templates",
    },
    {
      title: "UI UX Kits",
      desc: "UI UX kits are full fledged kits to take on bigger projects with flows, style guides and more for UI UX projects",
      img: {
        src: kits,
        alt: "ui ux kits image",
      },
      img1: {
        src: kits1,
        alt: "ui templates image",
      },
      link: "/ui-ux-kits",
    },
    {
      title: "Briefs",
      desc: "Practice with real world challenges and UI UX briefs with broad categories and upscale yourself!",
      img: {
        src: briefsImg,
        alt: "briefs image",
      },
      img1: {
        src: briefsImg1,
        alt: "ui templates image",
      },
      link: "/briefs",
    },
    {
      title: "Fonts",
      desc: "Crafted for UI UX projects. These fonts are made in-house perfect for scalability, usage and integrations",
      img: {
        src: fontsImg,
        alt: "fonts image",
      },
      img1: {
        src: fontsImg1,
        alt: "ui templates image",
      },
      link: "/fonts",
    },
    {
      title: "Style Guides",
      desc: "Style guides are perfect for inspiration and starting a new project. Includes inspiration, fonts and colors",
      img: {
        src: guides,
        alt: "Style Guides image",
      },
      img1: {
        src: guides1,
        alt: "ui templates image",
      },
      link: "/styles-guides",
    },
    {
      title: "Remote Jobs",
      desc: "100% remote jobs only for UI UX positions. Find and apply using our website to land your dream job today!",
      img: {
        src: jobsImg,
        alt: "remote jobs image",
      },
      img1: {
        src: jobsImg1,
        alt: "ui templates image",
      },
      link: "/jobs",
    },
  ];
  // if (!user)
  //   return (
  //     <>
  //       <MetaHead
  //         title="UIFry: Unlimited UI UX Designs, UI Kits, Jobs, Templates, Briefs and More"
  //         link=""
  //         description="Discover UI UX resources, remote jobs, high-quality templates, UI UX kits,  briefs, and more. Start your journey to becoming a master UI UX designer today! Unleash your creativity and boost your design skills with our platform's unlimited access."
  //       />
  //       <LandingPage />
  //     </>
  //   );
  return (
    <>
      <MetaHead
        title="UIFry: Unlimited UI UX Designs, UI Kits, Jobs, Templates, Briefs and More"
        link=""
        description="Discover UI UX resources, remote jobs, high-quality templates, UI UX kits,  briefs, and more. Start your journey to becoming a master UI UX designer today! Unleash your creativity and boost your design skills with our platform's unlimited access."
      />
      {openModal && <DetailsModal setData={setModalData} data={modalData} />}
      {openModal1 && <DetailsModal1 setData={setModalData} data={modalData} />}
      {briefModal && <BriefModal data={modalData} />}
      <Header title={["Home"]} istitle={false} breadcrums={["Home"]} />
      {/* <KitHeader /> */}
      
      <Sidebar isDetail={false} />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[0rem] w-full pb-[10rem]">
        <div className="flex flex-col gap-[2rem] py-[4rem] justify-center items-center">
          <Link
            href="https://www.producthunt.com/posts/uifry?utm_source=badge-top-post-topic-badge&utm_medium=badge&utm_souce=badge-uifry"
            target="_blank"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/top-post-topic-badge.svg?post_id=396313&theme=neutral&period=weekly&topic_id=44"
              alt="UIFry - 1000s&#0032;of&#0032;templates&#0044;&#0032;briefs&#0044;&#0032;jobs&#0032;&#0038;&#0032;more&#0032;for&#0032;UI&#0032;UX&#0032;designers | Product Hunt"
              style={{ width: "250px", height: "54px" }}
              width={250}
              height={54}
            />
          </Link>
          {!user ? (
            <>
              <h2 className="satoshi max-w-[92rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
                Unlimited access to
                <span className="gradient-text"> Premium UI/UX </span>
                designs, jobs, templates, and briefs
              </h2>
              <p className="text-[1.8rem] font-[400] max-w-[55rem] text-center text-secondaryGray leading-[150%]">
                UIFry is the ultimate hub for UI UX designers to grow, learn and
                smash client work daily with so much more.{" "}
                <span className="satoshi text-primaryBlack font-700 relative">
                  {" "}
                  Proudly featured in:
                  <Image
                    src={line}
                    alt="circle"
                    className="absolute -bottom-[1rem] -left-[.1rem] w-[110%]"
                  />
                </span>
              </p>
              <div className="flex mx-auto mt-[2rem]">
                <Image src={brands} alt="" />
              </div>
            </>
          ) : (
            <>
              <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
                Welcome,
                <span className="gradient-text">
                  {" "}
                  {user?.FullName.split(" ")[0]}
                </span>
              </h2>
              <p className="text-[1.8rem] font-[400] max-w-[55rem] text-center text-secondaryGray leading-[150%]">
                UIFry is the ultimate hub for UI UX designers to grow, learn and
                smash client work daily with so much more.
              </p>
            </>
          )}

          {/* <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
            UIFry is the ultimate hub for UI UX designers to grow, learn and
            smash client work daily with so much more.
          </p> */}
        </div>
        {!user && false ? (
          <div className="flex flex-col px-[4rem] py-[5rem] bg-primary mb-[3.2rem] gap-[2rem] rounded-[2.4rem]">
            <div className="flex gap-[3rem] sm:flex-col items-center">
              <span className="text-primaryBlack font-700 text-[1.6rem] leading-[150%] py-[1.6rem] px-[2rem] bg-[#fff] rounded-[.6rem] ">
                What does UIFry offers?
              </span>
              <span className="text-secondaryGray text-[1.4rem] font-[500] leading-[2rem]">
                Browse through the categories below!
              </span>
            </div>
            {/* max-w-[116.6rem] */}
            <div className="grid gap-x-[3rem] gap-y-[2rem] grid-cols-3 md:grid-cols-2  sm:grid-cols-1">
              {pages.map((item, index) => (
                <Link href={item.link} key={index}>
                  <Card2 desc={item.desc} img={item.img} title={item.title} />
                  {/* <Card1 desc={item.desc} img={item.img} title={item.title} /> */}
                </Link>
              ))}
              {/* {pages.map((item, index) => (
              <Link href={item.link} key={index}>
                <Card3 desc={item.desc} img={item.img1} title={item.title} />
              </Link>
            ))} */}
            </div>
          </div>
        ) : (
          <></>
        )}
        {false ? (
          <div className="flex gap-[2rem] justify-center pl-[2rem] sm:flex-col sm:items-start mb-[4.3rem] mt-[4rem] ">
            <div className="flex flex-col gap-[.8rem] ">
              <p className="satoshi font-700 text-primaryBlack text-[2.8rem] leading-[120%] ">
                Latest this week
              </p>
              <p className="text-secondaryGray text-[1.8rem] leading-[150%]">
                Browse through the latest resources, briefs and jobs added this
                week
              </p>
            </div>
            <Sticker
              text="We added 10 new resources this week!"
              classes="sm:!mx-0 !mr-0"
            />
          </div>
        ) : (
          <></>
        )}
        {user && <Sticker
          text={`We added ${thisWeek.total} new resources this week!`}
          classes="mb-[4rem]"
          veiw={user && true}
        />}
        <article className="wrapper mb-[3rem]">
            <div className="marquee overflow-x-hidden">
              <div className="marquee__group ">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>

              <div aria-hidden="true" className="marquee__group">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>
            </div>
          </article>
        <div className="flex flex-col gap-[2rem]">
          <List
            classes={`4xl:grid-cols-3 grid-cols-4 ${
              uiTemplates?.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1`}
            resources={`Browse ${Number(uiTemplates[0]?.total) || 0} resources`}
            title="UI Templates"
            link="/ui-templates"
          >
            {uiTemplates.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/ui-templates/details",
                  // href: "/ui-templates/details",
                  query: { template: item?.slug?.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Card
                  key={index}
                  onClick={() => {
                    window.scrollBy(0, 1);
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateModal(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>
          <List
            classes={`4xl:grid-cols-3 grid-cols-4  ${
              styleGuides.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1`}
            resources={`Browse ${Number(styleGuides[0]?.total) || 0} resources`}
            title="Style Guides"
            link="/styles-guides"
          >
            {styleGuides.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/styles-guides/details",
                  query: { style: item.slug.current },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <Card
                  onClick={() => {
                    window.scrollBy(0, 1);
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateModal1(true));
                    setModalData(item);
                  }}
                  data={item}
                />
              </Link>
            ))}
          </List>
          <List
            classes={`4xl:grid-cols-3 grid-cols-4 ${
              briefs.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1 `}
            title="Briefs"
            link="/briefs"
            resources={`Browse ${Number(briefs[0]?.total) || 0} resources`}
          >
            {briefs.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/briefs/details",
                  query: {
                    category: String(
                      compare.find((cat) => item._type == cat.title)?.slug
                    ),
                    brief: item.slug.current,
                  },
                }}
                onClick={(e) => e.preventDefault()}
              >
                <div
                  onClick={() => {
                    window.scrollBy(0, 2);
                    setModalData(item);
                    document.body.classList.add("!overflow-y-hidden");
                    dispatch(updateBriefModal(true));
                  }}
                  className="h-full"
                >
                  <CategoryCard data={item} key={index} />
                </div>
              </Link>
            ))}
          </List>
          <List
            classes={`4xl:grid-cols-2 grid-cols-3 ${
              uiKits.length == 3 && "uiuxhome"
            } xl:grid-cols-1 `}
            title="UI UX Kits"
            link="/ui-ux-kits"
            resources={`Browse ${Number(uiKits[0]?.total) || 0} resources`}
          >
            {uiKits.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/ui-ux-kits/details",
                  // href: "/ui-templates/details",
                  query: { kit: item?.slug?.current },
                }}
              >
                <UiKitCard key={index} onClick={() => {}} data={item} />
              </Link>
            ))}
          </List>

          <List
            classes={`4xl:grid-cols-2 grid-cols-3 ${
              fonts.length == 3 && "uiuxhome"
            } xl:grid-cols-1`}
            resources={`Browse ${Number(fonts[0]?.total) || 0} resources`}
            title="Fonts"
            link="/fonts"
          >
            {fonts.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/fonts/details",
                  // href: "/ui-templates/details",
                  query: { font: item?.slug?.current },
                }}
              >
                <FontCard key={index} onClick={() => {}} data={item} />
              </Link>
            ))}
          </List>

          <List
            classes={`4xl:grid-cols-3 grid-cols-4 ${
              jobs.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1`}
            title="Jobs"
            link="/jobs"
            resources={`Browse ${Number(jobs[0]?.total) || 0} resources`}
          >
            {jobs.map((item, index) => (
              <Link
                key={index}
                href={{
                  pathname: "/jobs/details",
                  query: { job: item.slug.current },
                }}
              >
                <JobCard data={item} />
              </Link>
            ))}
          </List>
        </div>
        {/* <div className="min-lg:pl-[214px] lg:px-[1rem] pr-[2rem] py-[3rem] my-[1rem] w-full overflow-hidden"> */}
        <div className="flex flex-col w-full mt-[4rem] middle gap-[4.44rem] bg-primary rounded-[2.4rem] pb-[4rem] overflow-x-hidden">
          <h3 className="satoshi max-w-[84rem] mt-[7rem] text-center text-primaryBlack text-[4.8rem]  sm:text-[4rem] font-[700] leading-[120%]">
            “Everything for a UI/UX designer -
            <span className="gradient-text relative">
              {" "}
              new resources{" "}
              <Image
                src={line}
                alt="circle"
                className="absolute -bottom-[1rem] z-[10] -left-[.1rem] w-[110 %]"
              />
            </span>
            added each week!”
          </h3>
          <article className="wrapper">
            <div className="marquee overflow-x-hidden">
              <div className="marquee__group ">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>

              <div aria-hidden="true" className="marquee__group">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>
            </div>

            <div className="marquee marquee--reverse overflow-x-hidden">
              <div className="marquee__group ">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>

              <div aria-hidden="true" className="marquee__group">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>
            </div>
          </article>
        {/* </div> */}
      </div>
        {!user && (
          <div className="flex flex-col gap-[3rem] mt-[4rem] middle">
            {/* <div className="flex flex-col w-full px-[2rem] middle gap-[4.44rem] bg-primary rounded-[2.4rem] pb-[4rem]">
              <h3 className="satoshi max-w-[84rem] mt-[7rem] text-center text-primaryBlack text-[4.8rem]  sm:text-[4rem] font-[700] leading-[120%]">
                “Everything for a UI/UX designer -
                <span className="gradient-text relative">
                  {" "}
                  new resources{" "}
                  <Image
                    src={line}
                    alt="circle"
                    className="absolute -bottom-[1rem] z-[10] -left-[.1rem] w-[110 %]"
                  />
                </span>
                added each week!”
              </h3>
              <div className="max-w-[130rem] grid grid-cols-3 gap-[3.2rem] items-start lg:grid-cols-2 sm:grid-cols-1">
                {testimonials.map((item) => (
                  <TestimonialCard {...item} key={item.designation} />
                ))}
              </div>
            </div> */}
            <ProCard />
          </div>
        )}

        <div className="flex gap-[1rem] middle flex-wrap mt-[6rem]">
          <div className="flex gap-[1rem]">
            <Link
              href={"/license-agreement"}
              className="text-secondaryGray text-[1.6rem] leading-[150%] font-400"
            >
              License, Terms & Policy
            </Link>

            <Link
              href={"https://uifry.outseta.com/support/kb/categories"}
              target="_blank"
              className="text-secondaryGray text-[1.6rem] leading-[150%] font-400"
            >
              Support
            </Link>
          </div>
          <span>|</span>
          <span className="text-[1.4rem] font-400 text-[#160042]">
            UIFry LTD® 2023
          </span>
          <span>|</span>
          <div className="flex gap-[1.732rem] items-center">
            <Link href={"https://www.linkedin.com/company/ui-fry/"} target="_blank">
              <Image src={linkedin} alt="" className="w-[1.6rem]" />
            </Link>
            <Link href={"https://www.instagram.com/uifryy/"} target="_blank">
              <Image src={instagram} alt="" className="w-[1.7rem]" />
            </Link>
            <Link href={"https://twitter.com/uifryy"} target="_blank">
              <Image src={twitter} alt="" className="w-[1.9rem]" />
            </Link>
            <Link href={"https://www.facebook.com/uifryy"} target="_blank">
              <Image src={facebook} alt="" className="w-[.9rem]" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const uiTemplateFields = `
  title,slug,description,sanityFilter,images[]{
    asset->{url}
  },tags,image,category
`;

  const uiKitFields = `
  title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
    asset->{url}
  },tags,features,"fileURL":zipFile.asset->url
`;

  const fontFields = `
  title,slug,noOfScreens,subCategory,category,description,images[]{
    asset->{url}
  },tags,features,"fileURL":zipFile.asset->url
`;

  const styleGuideFields = `
  title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
    asset->{url}
  },"fileURL":zipFile.asset->url
`;
  const breifFields = `*[_type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief'][0...4]{
    title,slug,subCategories,description,coverImage{asset->{url}},images[]{
      asset->{url}
    },_type,"tags":includes,includes,"fileURL":zipFile.asset->url,"total":count(*[_type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief'])
}`;
  const jobFields = `
  body,companyName,salaryRange,title,slug,description,images,jobType,primaryIndustry,tags,foundedIn,companySize,subCategory,jobPosted,applyBefore,applyNow,_createdAt
`;
  const uiTemplatesQuery = generateQuery("uitemplate", uiTemplateFields, 5);
  const uiKitsQuery = generateQuery("uxKit", uiKitFields, 4);
  const fontsQuery = generateQuery("font", fontFields, 4);
  const styleGuidesQuery = generateQuery("styleGuide", styleGuideFields, 5);
  const jobsQuery = generateQuery("job", jobFields, 5);
  const thisWeekQuery = `*[(_type=='uitemplate' || _type=='uxKit' || _type=='styleGuide' || _type=='job' || _type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief') && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7]{
    _type,_updatedAt,
    "total": count(*[(_type=='uitemplate' || _type=='uxKit' || _type=='styleGuide' || _type=='job' || _type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief') && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])
  }`;
  try {
    const queries = [
      { query: uiTemplatesQuery, sanity },
      { query: uiKitsQuery, sanity },
      { query: fontsQuery, sanity },
      { query: styleGuidesQuery, sanity },
      {
        query: `*[_type=='job' && applyBefore >= now()]${jobsQuery.slice(15)}`,
        sanity,
      },
      { query: breifFields, sanity },
      { query: thisWeekQuery, sanity },
    ];
    const [uiTemplates, uiKits, fonts, styleGuides, jobs, briefs, thisWeek] =
      await Promise.all(queries.map((queryObj) => fetchDataServer(queryObj)));
    console.log({ thisWeek });
    return {
      props: {
        uiTemplates,
        uiKits,
        fonts,
        styleGuides,
        jobs,
        briefs,
        thisWeek: thisWeek.length ? thisWeek[0] : null,
      },
    };
  } catch (e) {
    console.log(e);
    return {
      props: {
        uiTemplates: [],
        uiKits: [],
        fonts: [],
        styleGuides: [],
        jobs: [],
        briefs: [],
      },
    };
  }
};

const Card1 = ({
  img,
  title,
  desc,
}: {
  img: { src: StaticImageData; alt: string };
  title: string;
  desc: string;
}) => (
  <div className="flex flex-col gap-[2rem] bg-[#fff] items-center p-[2rem] rounded-[1rem]">
    <div className="rounded-[.8rem] shadow-cardShadow w-full flex middle aspect-[2/1]">
      <Image src={img.src} alt={img.alt} />
    </div>
    <p className="text-heading text-center text-[1.7rem] satoshi font-700 leading-[2.6rem] ">
      {title}
    </p>
    <p className="text-[#6B7194] max-w-[28.2rem] font-400 text-[1.4rem] text-center leading-[2.4rem] three-line-ellipsis">
      {desc}
    </p>
  </div>
);
const Card2 = ({
  img,
  title,
  desc,
}: {
  img: { src: StaticImageData; alt: string };
  title: string;
  desc: string;
}) => (
  <>
    <div className="flex gap-[2rem] p-[2rem] py-[2.5rem] pr-[2.7rem] rounded-[2rem] bg-[#fff] h-full items-center">
      <div className="w-[19rem]">
        <Image src={img.src} alt={img.alt} className="w-full" />
      </div>
      <div className="flex flex-col items-start gap-[.5rem]">
        <p className="text-primaryBlack text-center text-[1.8rem] satoshi font-700 leading-[2.6rem] ">
          {title}
        </p>
        <p className="text-[#6B7194]  font-400 text-[1.4rem] leading-[2.4rem] three-line-ellipsis">
          {desc}
        </p>
      </div>
    </div>
  </>
);
const Card3 = ({
  img,
  title,
  desc,
}: {
  img: { src: StaticImageData; alt: string };
  title: string;
  desc: string;
}) => (
  <>
    <div className="flex flex-col gap-[2rem] bg-[#fff] items-center p-[2rem] rounded-[1rem]">
      <div className="rounded-[1.05085rem]  w-full flex middle aspect-[2/1]">
        <Image src={img.src} alt={img.alt} className="w-full h-full" />
      </div>
      <p className="text-heading text-center text-[2rem] satoshi font-700 leading-[2.6rem] ">
        {title}
      </p>
      <p className="text-[#6B7194]  font-400 text-[1.4rem] text-center leading-[2.4rem] three-line-ellipsis">
        {desc}
      </p>
    </div>
  </>
);
export default Home;
