import Image from "next/image";
import React, { FC, useEffect } from "react";
import Button from "../../../components/Button/Button";
import DetailHeader from "../../../components/KitHeader/KitHeader";
import Sidebar from "../../../components/Sidebar/Sidebar";
import Tag from "../../../components/Tag/Tag";
import UiKitCard from "../../../components/UiKitCard/UiKitCard";
import profile from "../../../public/assets/images/profile.png";
import users from "../../../public/assets/icons/users.svg";
import dollar from "../../../public/assets/icons/dollar1.svg";
import sanity from "../../../sanity";
import BlockContent from "@sanity/block-content-to-react";
import imageUrlBuilder from "@sanity/image-url";
import ApplyCard from "../../../components/ApplyCard/ApplyCard";
import Link from "next/link";
import JobCard from "../../../components/JobCard/JobCard";
import { removeEmptyPTagsFromClass } from "@/utils/functions";
import { JobDetailProps, JobProps } from "@/Interface/interface";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import MetaHead from "@/components/MetaHead/MeatHead";

const Details: FC<{ detail: JobDetailProps; others: JobDetailProps[] }> = ({
  detail,
  others = [],
}) => {
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source: any) => {
    return builder.image(source);
  };
  useEffect(() => {
    removeEmptyPTagsFromClass();
  }, []);
  return (
    <>
      <MetaHead
        title={`${detail?.title} - UIFry`}
        link={`jobs/details?job=${detail.slug.current}`}
        description={detail?.description}
      />
      <DetailHeader link={"/jobs"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px]  flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <div className="flex gap-[6rem] flex-1  lg1:flex-col">
          <div className="xs1:px-[1rem] flex flex-col flex-1 rounded-[2.4rem] gap-[3rem] pt-[3rem] ">
            <div className="flex h-[9rem] rounded-[2.4rem] bg-primary w-full">
              <Image
                src={urlFor(detail.images[0]).url() || profile}
                className="w-[8rem] h-[8rem] p-[1rem] bg-[#fff]  rounded-full relative top-[3.8rem] left-[4.4rem]"
                width={80}
                height={80}
                alt=""
              />
            </div>
            <div className="flex  flex-col px-[20px]">
              <div className="flex flex-col gap-[1rem] pb-[3.6rem] border-b-[1px] border-border2">
                <p className="satoshi text-primaryBlack text-[3rem] font-[700]">
                  {detail.title || "Associate Product Managesr"}
                </p>
                <p className="satoshi text-secondaryGray text-[1.6rem] font-[400]">
                  {detail.description}
                </p>
                <div className="flex gap-[2.4rem]">
                  <span className="text-primaryBlack text-[1.6rem] font-[500] ">
                    Remote
                  </span>
                  <div className="flex gap-[.85rem]">
                    <Image src={users} alt="" />
                    <span className="text-primaryBlack text-[1.6rem] font-[400] ">
                      {detail.companySize || `501-,1000`}
                    </span>
                  </div>
                  <div className="flex gap-[.85rem]">
                    <Image src={dollar} alt="" />
                    <span className="text-primaryBlack text-[1.6rem] font-[400] ">
                      {detail.salaryRange || "93k-126k"} USD
                    </span>
                  </div>
                </div>
              </div>
              <div className="">
                {/* <h3 className="satoshi text-primaryBlack text-[2rem] font-[700]">About Remote</h3> */}
                <BlockContent
                  className={"body flex flex-col gap-[2rem] pt-[3rem]"}
                  blocks={detail.body}
                />
                <Button
                  classes={
                    "w-full max-w-[40rem] lg1:max-w-full py-[1.7rem] bg-gradient rounded-full"
                  }
                >
                  <span
                    className={
                      "satoshi text-[1.6rem] font-[700] text-[#fff] leading-[2.4rem]"
                    }
                  >
                    Apply Now
                  </span>
                </Button>
              </div>
            </div>
          </div>
          {/* min-w-[48.8rem] xl2:max-w-[34.3rem] xl2:min-w-[34.3rem] xl1:max-w-[39.6rem] xl1:min-w-[39.6rem] max-w-[48.8rem] */}
          <div className="flex relative mt-[3rem] lg1:min-w-full min-w-[32rem] max-w-[32rem]  rounded-[2.4rem] mb-auto   right-0 p-[2rem] bg-primary border-[1px] border-border2">
            <div className="flex w-full flex-col gap-[4rem] ">
              <ApplyCard companyName={detail.companyName} />
              <div className="flex flex-col gap-[2rem] items-start bg-[#fff] rounded-[2rem] p-[3rem] pr-[2rem]">
                <h3 className="satoshi text-[1.8rem] font-[700] leading-[3rem] text-primaryBlack">
                  {"About this role"}
                </h3>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Apply before
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.applyBefore || "April 14th, 2023"}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job posted
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.jobPosted || "February 14th, 2023"}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job type
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.jobType}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Salary Range (USD)
                  </p>
                  <div className="flex items-center gap-[1.3rem]">
                    <Image src={dollar} alt="" />
                    <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                      {detail.salaryRange}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Company
                  </p>
                  <div className="flex items-center gap-[1.3rem]">
                    <Image
                      width={35}
                      height={35}
                      className="w-[3.5rem] h-[3.5rem] rounded-full"
                      src={urlFor(detail.images[0]).url()}
                      alt=""
                    />
                    <p className="text-primaryBlack font-[700] text-[1.8rem] leading-[3rem]">
                      {detail.companyName}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Primary industry
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.primaryIndustry}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Company size
                  </p>
                  <div className="flex items-center gap-[1.3rem]">
                    <Image src={users} alt="" />
                    <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                      {detail.companySize}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Founded in
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.foundedIn}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col pt-[3rem] border-t-[1px] w-full border-[#EAEDF1]">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job Categories
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {detail.foundedIn}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="middle-col gap-[6rem] rounded-[2.4rem] bg-primary p-[6rem] xs:px-[4rem] w-full">
          <h2 className="text-[3.6rem] font-[700] xs1:text-[2.4rem] text-primaryBlack leading-[6.3rem] satoshi">
            You Might <span className="gradient-text">Like</span> These
          </h2>
          <div className="grid grid-cols-3 3xl:grid-cols-2 lg:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] ">
            {others.map((item, index) => {
              return (
                <Link
                  key={index}
                  href={{
                    pathname: "/jobs/details",
                    query: { job: item.slug.current },
                  }}
                >
                  <JobCard data={item} />
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps<{}> = async (
  context: GetServerSidePropsContext
) => {
  try {
    const res = await sanity.fetch(
      `*[_type=='job' && slug.current=='${context.query.job}' && applyBefore >= now()]{
        body,
        companyName,
        salaryRange,
        title,
        slug,
        description,
        images,
        jobType,
         primaryIndustry,
        tags,foundedIn,companySize,
          subCategory,jobPosted,applyBefore
  }`
    );
    const res1 = await sanity.fetch(
      `*[_type=='job' && applyBefore >= now() ]{
        body,
        companyName,
        salaryRange,
        title,
        slug,
        description,
        images,
        jobType,
         primaryIndustry,
        tags,foundedIn,companySize,
          subCategory,jobPosted,applyBefore
  }`
    );
    if (!res?.length) {
      return { notFound: true };
    }
    return {
      props: {
        detail: res[0],
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
