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
import Image, { StaticImageData } from "next/image";
// import Sticker from "@/components/Sticker/Sticker";
import dynamic from "next/dynamic";
import { Props, ScriptProps } from "next/script";
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
  styleGuides: Data[];
  jobs: JobProps[];
  briefs: CategoryCardProps[];
}> = ({ uiTemplates, uiKits, styleGuides, jobs, briefs }) => {
  // console.log({
  //   uiTemplates: Number(uiTemplates[0]?.total) || 0,
  //   style: Number(styleGuides[0]?.total) || 0,
  //   breifs: Number(briefs[0]?.total) || 0,
  //   job: Number(jobs[0]?.total) || 0,
  // });
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
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full pb-[10rem]">
        <div className="flex flex-col gap-[2rem] py-[4rem] justify-center items-center">
          <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
            Weekly <span className="gradient-text">Updates</span>
          </h2>

          <p className="text-[1.8rem] font-[400] text-center text-secondaryGray">
            Here we post weekly updates and new resources added to UIFry!
          </p>
        </div>

        <Sticker
          text={`We added ${
            (Number(uiTemplates[0]?.total) || 0) +
            (Number(styleGuides[0]?.total) || 0) +
            (Number(briefs[0]?.total) || 0) +
            (Number(uiKits[0]?.total) || 0) +
            (Number(jobs[0]?.total) || 0)
          } new resources this week!`}
          classes="mb-[4rem] !max-w-[35rem]"
        />
        <div className="flex flex-col gap-[2rem]">
          <List
            classes={`4xl:grid-cols-3 grid-cols-4 ${
              uiTemplates?.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1`}
            resources={`${
              Number(uiTemplates[0]?.total) || 0
            } New Added This Week`}
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
            resources={`${
              Number(styleGuides[0]?.total) || 0
            } New Added This Week`}
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
            resources={`${Number(briefs[0]?.total) || 0} New Added This Week`}
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
            resources={`${Number(uiKits[0]?.total) || 0} New Added This Week`}
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
            classes={`4xl:grid-cols-3 grid-cols-4 ${
              jobs.length == 4 && "uitemphome"
            } 2xl1:grid-cols-3 2xl2:grid-cols-2 md:grid-cols-1`}
            title="Jobs"
            link="/jobs"
            resources={`${Number(jobs[0]?.total) || 0} New Added This Week`}
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
      </div>
    </>
  );
};

export const getStaticProps: GetServerSideProps = async () => {
  const uiTemplateFields = `*[_type=='uitemplate' && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(featured desc, _updatedAt desc)[0...4]{
  title,slug,description,sanityFilter,images[]{
    asset->{url}
  },tags,image,category,"total": count(*[_type == "uitemplate" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])
}`;

  const uiKitFields = `*[_type=='uxKit' && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(featured desc, _updatedAt desc)[0...3]{
  title,slug,noOfScreens,subCategory,category,description,sanityFilter,images[]{
    asset->{url}
  },tags,features,"fileURL":zipFile.asset->url
  ,"total": count(*[_type == "uxKit" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])
}
`;

  const styleGuideFields = `*[_type=='styleGuide' && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(featured desc, _updatedAt desc)[0...4]{
  title,slug,subCategory,category,description,sanityFilter,tags,"images":image{
    asset->{url}
  },"fileURL":zipFile.asset->url
  ,"total": count(*[_type == "styleGuide" && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])
}
`;
  const breifFields = `*[(_type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief') && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(featured desc, _updatedAt desc)[0..3]{
    title,slug,subCategories,description,coverImage{asset->{url}},images[]{
      asset->{url}
    },_type,"tags":includes,includes,"fileURL":zipFile.asset->url,
    "total":count(*[(_type=='landingPageBrief' || _type=='productUiBrief' || _type=='UxBrief') && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])

}`;
  const jobFields = `*[_type=='job' && applyBefore >= now() && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7] | order(featured desc, _updatedAt desc)[0...4]{
  body,companyName,salaryRange,title,slug,description,images,jobType,primaryIndustry,tags,foundedIn,companySize,subCategory,jobPosted,applyBefore,applyNow,_createdAt
  ,"total": count(*[_type == "job" && applyBefore >= now() && dateTime(_updatedAt) > dateTime(now()) - 60*60*24*7])  
}`;
  const uiTemplatesQuery = generateQuery("uitemplate", uiTemplateFields, 5);
  const uiKitsQuery = generateQuery("uxKit", uiKitFields, 4);
  const styleGuidesQuery = generateQuery("styleGuide", styleGuideFields, 5);
  const jobsQuery = generateQuery("job", jobFields, 5);

  try {
    const queries = [
      { query: uiTemplateFields, sanity },
      { query: uiKitFields, sanity },
      { query: styleGuideFields, sanity },
      {
        query: jobFields,
        sanity,
      },
      { query: breifFields, sanity },
    ];
    const [uiTemplates, uiKits, styleGuides, jobs, briefs] = await Promise.all(
      queries.map((queryObj) => fetchDataServer(queryObj))
    );
    return {
      props: {
        uiTemplates,
        uiKits,

        styleGuides,
        jobs,
        briefs,
      },
    };
  } catch (e) {
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

export default Home;
