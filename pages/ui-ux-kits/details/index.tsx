import React, { useEffect, useState } from "react";
import KitHeader from "../../../components/KitHeader/KitHeader";
import Sidebar from "../../../components/Sidebar/Sidebar";
import figma from "../../../public/assets/icons/figma.svg";
import xd from "../../../public/assets/icons/xd.svg";
import sketch from "../../../public/assets/icons/adobe.svg";
import tick from "../../../public/assets/icons/tick.svg";
import _1 from "../../../public/assets/images/1.jpg";
import _2 from "../../../public/assets/images/2.jpg";
import _3 from "../../../public/assets/images/3.jpg";
import _4 from "../../../public/assets/images/4.jpg";
import _5 from "../../../public/assets/images/5.jpg";
import _6 from "../../../public/assets/images/6.jpg";
import _7 from "../../../public/assets/images/7.jpg";
import _8 from "../../../public/assets/images/8.jpg";
import _9 from "../../../public/assets/images/9.jpg";
import _10 from "../../../public/assets/images/10.jpg";
import _11 from "../../../public/assets/images/11.jpg";
import _12 from "../../../public/assets/images/12.jpg";
import Image from "next/image";
import Tag from "../../../components/Tag/Tag";
import Button from "../../../components/Button/Button";
import UiKitCard from "../../../components/UiKitCard/UiKitCard";
import JobCard from "../../../components/JobCard/JobCard";
import sanity from "../../../sanity";
import imageUrlBuilder from "@sanity/image-url";
import Link from "next/link";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetStaticPropsContext,
  NextPage,
} from "next";
import { Data } from "@/Interface/interface";
const Details: NextPage<{ details: Data; others: Data[] }> = ({
  details,
  others,
}) => {
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source: string) => {
    return builder.image(source);
  };
  const [photoIndex, setPhotoIndex] = React.useState(0);
  const [isOpen, setOpen] = useState(false);
  const images = details.images.map((item: any) => urlFor(item).url());
  const [isElementAtTop, setIsElementAtTop] = useState(false);

  function isElementAtTopOfView() {
    const element = document.getElementById("tags");
    if (!element) return false; // element not found

    const rect = element.getBoundingClientRect();
    return rect.top <= 10; // true if top of element is at or above top of viewport
  }

  useEffect(() => {
    if (isElementAtTopOfView()) {
      console.log("reached");
    }
    function handleScroll() {
      setIsElementAtTop(isElementAtTopOfView());
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {isOpen && (
        <Lightbox
          mainSrc={images[photoIndex]}
          nextSrc={images[(photoIndex + 1) % images.length]}
          prevSrc={images[(photoIndex + images.length - 1) % images.length]}
          onCloseRequest={() => setOpen(false)}
          onMovePrevRequest={() =>
            setPhotoIndex((photoIndex + images.length - 1) % images.length)
          }
          onMoveNextRequest={() =>
            setPhotoIndex((photoIndex + 1) % images.length)
          }
          wrapperClassName="z-[100000000000]"
        />
      )}

      <KitHeader link={"/ui-ux-kits"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px] bg-[white] xs1:px-0 flex-col relative flex lg:pl-[1rem] gap-[4rem] pr-[0rem]  w-full ">
        <div className="flex gap-[4rem] sm:flex-col ">
          <div className="flex flex-col gap-[6rem]">
            <div className=" grid xs1:px-[1rem] grid-cols-2 2xl:grid-cols-1 rounded-[2.4rem] gap-[3rem] pt-[3rem] ">
              {details.images.map((item: string, index: number) => (
                <div
                  key={index}
                  className=""
                  onClick={() => {
                    window.scroll(0, 5);
                    setOpen(true);
                  }}
                >
                  <Image
                    src={urlFor(item).url()}
                    width={1000}
                    height={1000}
                    className="aspect-[1.368/1] object-cover object-left rounded-[8px]"
                    alt=""
                  />
                </div>
              ))}
            </div>
          </div>
          <div className="flex  relative max-w-[32rem]  sm:max-w-full right-0 pt-0 rounded-bl-[1rem]  bg-primary border-l-[1px] border-b-[1px] border-[#E5E9FF]">
            <div className="flex relative w-full flex-col gap-[0rem]">
              {true && (
                <div
                  className={`sticky z-[1] sm:relative
              ${
                isElementAtTop && "rounded-bl-[1rem]"
              } border-[#e5eaff] pl-[3.5rem]  pr-[2.9rem] shadow-info border-b-[1px] pb-[3rem] sm:top-0 top-[14.65rem] lg1:top-[20.68rem] bg-primary pt-[4rem]`}
                >
                  <div className="flex flex-col gap-[1rem] items-start">
                    {/* <Tag classess={"bg-[#fff]"} text={details?.subCategory} /> */}
                    <Link href={"/ui-ux-kits"} className="">
                      <span className="font-500 text-[1.6rem] leading-[2.2rem] gradient-text">
                        {details?.subCategory}
                      </span>
                    </Link>
                    <h3 className="satoshi text-[2.4rem] font-[700] leading-[120%] text-primaryBlack">
                      {details?.title}
                    </h3>
                  </div>
                  <div className={`flex gap-[2rem] flex-col mt-[3.5rem] `}>
                    <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                      Files & Info
                    </p>
                    <div className="flex flex-col gap-[1.5rem] w-full">
                      {details.sanityFilter?.Figma && (
                        <div className="flex justify-between w-full items-center">
                          <div className="flex gap-[2rem] items-center">
                            <Image src={figma} alt="" className="w-[2.4rem]" />
                            <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-primaryBlack">
                              Figma
                            </p>
                          </div>
                          <div className="flex">
                            <Image src={tick} alt="" />
                          </div>
                        </div>
                      )}
                      {details.sanityFilter?.Sketch && (
                        <div className="flex justify-between w-full items-center">
                          <div className="flex gap-[2rem] items-center">
                            <Image src={sketch} alt="" className="w-[2.4rem]" />
                            <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-secondaryGray">
                              Sketch
                            </p>
                          </div>
                          <div className="flex">
                            <Image src={tick} alt="" />
                          </div>
                        </div>
                      )}
                      {details.sanityFilter?.XD && (
                        <div className="flex justify-between w-full items-center">
                          <div className="flex gap-[2rem] items-center">
                            <Image src={xd} alt="" className="w-[2.4rem]" />
                            <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-secondaryGray">
                              Adobe XD
                            </p>
                          </div>
                          <div className="flex">
                            <Image src={tick} alt="" />
                          </div>
                        </div>
                      )}
                    </div>
                    <Link href={details?.fileURL} download>
                      {/* <Button
                      classes={"w-full py-[1.7rem] bg-gradient rounded-full"}
                    >
                      <span className="text-[1.4rem] font-[400] leading-[2rem] text-[#fff]">
                        Download
                      </span>
                    </Button> */}
                      <Button classes={"bg-gradient rounded-[10rem] w-full"}>
                        <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                          Download
                        </span>
                      </Button>
                    </Link>
                  </div>
                </div>
              )}
              <div className=" z-[2] bg-primary pt-[4rem]">
                <div className="flex gap-[2rem] flex-col pl-[3.5rem]  pr-[2.9rem] pt-[4rem]">
                  <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                    Features
                  </p>
                  {details?.features && (
                    <ul className="text-secondaryGray font-[400] text-[1.4rem] list-disc pl-[2rem] leading-[200%]">
                      {details?.features.map((item: string) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </div>
                <div className="flex gap-[2rem] flex-col pl-[3.5rem]  pr-[2.9rem]  pt-[4rem]">
                  <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                    Info
                  </p>
                  <p className="text-secondaryGray font-[400] text-[1.4rem] leading-[150%]">
                    {details?.description}
                  </p>
                </div>
                <div
                  id="tags"
                  className="flex gap-[2rem] flex-col pl-[3.5rem]  pr-[2.9rem] pt-[4rem] z-[2rem]"
                >
                  <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                    Tags
                  </p>
                  <div className="flex flex-wrap gap-[.8rem]">
                    {details.tags &&
                      details.tags.map((item) => (
                        <Tag
                          classess={
                            "bg-[#fff] leading-[2rem] text-secondaryGray !px-[1.4rem]"
                          }
                          text={item}
                        />
                      ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-col gap-[6rem] rounded-[2.4rem] bg-primary p-[6rem] xs:px-[4rem] w-full">
          <h2 className="text-[3.6rem] font-[700] text-primaryBlack leading-[6.3rem] satoshi">
            You Might <span className="gradient-text">Like</span> These
          </h2>
          <div className=" grid 4xl:grid-cols-2 grid-cols-3  2xl2:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] ">
            {others &&
              others.map((item, index) => (
                <Link
                  key={index}
                  href={{
                    pathname: "details",
                    query: { kit: item.slug.current },
                  }}
                >
                  <UiKitCard onClick={() => {}} data={item} />
                </Link>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await sanity.fetch(
      `*[_type=='uxKit' && slug.current=="${context.query.kit}"]{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images,tags,features,"fileURL":zipFile.asset->url
}`
    );
    const res1 = await sanity.fetch(
      `*[_type=='uxKit' && slug.current!="${context.query.kit}"]{
    title,slug,noOfScreens,subCategory,category,description,sanityFilter,images,tags,features,"fileURL":zipFile.asset->url
}`
    );
    if (!res.length) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        details: res[0],
        others: res1,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
export default Details;
