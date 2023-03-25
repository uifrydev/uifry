import Image from "next/image";
import React, { useEffect } from "react";
import DetailHeader from "../../components/KitHeader/KitHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import profile from "../../public/assets/images/profile.png";
import users from "../../public/assets/icons/users.svg";
import {
  fetchDataServer,
  removeEmptyPTagsFromClass,
} from "../../utils/functions";
import sanity from "../../sanity";
import BlockContent from "@sanity/block-content-to-react";

const Raodmap = ({ res }) => {
  useEffect(() => {
    removeEmptyPTagsFromClass();
  }, []);
  return (
    <>
      <DetailHeader link={"/jobs"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px] flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <div className="flex gap-[6rem] lg:flex-col">
          <div className="xs1:px-[1rem] flex flex-col flex-1 f rounded-[2.4rem] gap-[3rem] pt-[3rem] ">
            <div className="flex h-[9rem] rounded-[2.4rem] bg-primary w-full">
              <Image
                src={profile}
                className="w-[8rem] h-[8rem] rounded-full relative top-[2.8rem] left-[4.4rem]"
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col px-[20px]">
              <div className="flex flex-col  gap-[1rem] pb-[3.6rem] border-b-[1px] border-[#E5E9FF]">
                <p className="satoshi text-primaryBlack text-[3rem] font-[700]">
                  {`Our Roadmap`}
                </p>
                <p className="satoshi text-secondaryGray text-[1.6rem] font-[400]">
                  {`Embark on a journey with us as we unveil our strategic 6-month roadmap, outlining our ambitious goals, key milestones, and innovative initiatives. Join us in navigating the path to growth & our plan for the next 6 month.`}
                </p>

                <div className="flex gap-[.85rem]">
                  <Image src={users} />
                  <span className="text-primaryBlack text-[1.6rem] font-[400] ">
                    {`Currently, we are a team of 14 building UIFry to be the World’s #1 UI UX platform`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[2rem]">
                <p className="satoshi text-primaryBlack text-[2.4rem] font-[700]">
                  {`UIFry beta: Our First Step`}
                </p>
                <p className="text16-gray">
                  Discover the amazing achievements of UIFry Beta 🎉: Our
                  commitment to empowering designers has led to an incredible
                  array of resources, tools, and opportunities:
                </p>
                <ol className="list-decimal pl-[2.5rem]">
                  <li className="text16-gray">
                    <span className="text-secondaryBlack font-500">
                      520 UI Templates 🎨
                    </span>
                    : Unleash your creativity with a vast library of single
                    assets, compatible with Figma, Sketch, and XD, perfect for
                    sparking inspiration and starting a design.
                  </li>
                </ol>

                <BlockContent
                  className={`body flex flex-col gap-[2rem] pt-[3rem] `}
                  blocks={res?.text1?.body}
                />
              </div>
            </div>
          </div>
          <div className="flex relative mt-[3rem] lg:min-w-full rounded-[2.4rem] mb-auto min-w-[48.8rem] xl:max-w-[34.3rem] xl:min-w-[34.3rem] 2xl:max-w-[39.6rem] 2xl:min-w-[39.6rem] max-w-[48.8rem]  right-0 p-[2rem] bg-primary border-l-[1px] border-[#E5E9FF]">
            <div className="flex w-full flex-col gap-[4rem] ">
              <div className="flex flex-col gap-[2rem] items-start bg-[#fff] rounded-[2rem] p-[3rem] pr-[2rem]">
                <h3 className="satoshi text-[1.8rem] font-[700] leading-[3rem] text-primaryBlack">
                  {"About this role"}
                </h3>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Apply before
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.applyBefore` || "April 14th, 2023"}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job posted
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.jobPosted` || "February 14th, 2023"}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job type
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.jobType`}
                  </p>
                </div>

                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Company
                  </p>
                  <div className="flex items-center gap-[1.3rem]">
                    <p className="text-primaryBlack font-[700] text-[1.8rem] leading-[3rem]">
                      {`detail.companyName`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Primary industry
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.primaryIndustry`}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Company size
                  </p>
                  <div className="flex items-center gap-[1.3rem]">
                    <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                      {`detail.companySize`}
                    </p>
                  </div>
                </div>
                <div className="flex gap-[.8rem] flex-col">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Founded in
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.foundedIn`}
                  </p>
                </div>
                <div className="flex gap-[.8rem] flex-col pt-[3rem] border-t-[1px] w-full border-[#EAEDF1]">
                  <p className="text-secondaryGray font-[500] text-[1.4rem] leading-[2rem]">
                    Job Categories
                  </p>
                  <p className="text-primaryBlack font-[400] text-[1.6rem] leading-[2.4rem]">
                    {`detail.foundedIn`}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await fetchDataServer({
      sanity,
      query: `*[_type=='roadmap']{
          text1->{title,body},
          text2->{title,body},
          title,
          description,
    }`,
    });
    console.log(res);
    if (!res.length) {
      return { notFound: true };
    }
    return {
      props: {
        res: res[0],
      },
    };
  } catch (e) {
    return {
      //   props: {
      //     res: null,
      //   },
      notFound: true,
    };
  }
}
export default Raodmap;
