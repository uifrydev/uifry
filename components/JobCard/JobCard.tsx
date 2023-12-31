import Image from "next/image";
import React, { FC } from "react";
import users from "../../public/assets/icons/users.svg";
import profile from "../../public/assets/images/profile.png";
import dollar from "../../public/assets/icons/dollar.svg";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../sanity";
import TimeAgo from "timeago-react"; // var TimeAgo = require('timeago-react');

const JobCard: FC<{
  data: {
    companyName: string;
    primaryIndustry: string;
    images: any[];
    title: string;
    description: string;
    companySize: string;
    salaryRange: string;
    subCategory: string;
    _createdAt?: Date;
  };
}> = ({ data }) => {
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source: any) => {
    return builder.image(source);
  };
  return (
    <div className="p-[3rem] flex flex-col gap-[1.6rem] rounded-[1.2rem] bg-[#fff]">
      <div className="flex justify-between items-center">
        <Image
          alt=""
          className="w-[5.4rem] h-[5.4rem] rounded-full border-[2px] border-[#fff] shadow-job"
          width={60}
          height={60}
          src={urlFor(data.images[0]).url() || profile}
        />
        <div className="flex flex-col gap-[0rem]">
          <span className="text-tertiaryGray leading-[2rem] text-[1.2rem] font-[500]">
            {data?._createdAt && (
              <TimeAgo datetime={data?._createdAt} locale="en" />
            )}
          </span>
          <span className="text-primaryBlack leading-[2.4rem] text-[1.4rem] font-[500]">
            {data.subCategory}
          </span>
        </div>
      </div>
      <span className="satoshi text-primaryBlack leading-[120%] text-[1.8rem] font-[700]">
        {data.title}
      </span>
      <span className="text-secondaryGray two-line-ellipsis leading-[150%] text-[1.4rem] font-[400]">
        {data?.description}
      </span>
      <div className="flex gap-[1.3rem] flex-col">
        <span className="satoshi text-primaryBlack leading-[120%] text-[1.8rem] font-[700]">
          {data.companyName}
        </span>
        <div className="flex gap-[2rem]">
          <div className="flex gap-[0.7rem]">
            <Image alt="" className="w-[1.4rem] rounded-full" src={users} />
            <span className="text-secondaryGray text-[1.4rem] leading-[150%] font-[500] ">
              {data.companySize || "501-1,000"}
            </span>
          </div>
          <div className="flex gap-[0.7rem]">
            <Image alt="" className="w-[1.4rem] rounded-full" src={dollar} />
            <span className="text-secondaryGray text-[1.4rem] leading-[150%] font-[500] ">
              {data.salaryRange || "15k-16k"} USD
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
