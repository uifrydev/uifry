import Image from "next/image";
import React, { useEffect } from "react";
import DetailHeader from "../../components/KitHeader/KitHeader";
import Sidebar from "../../components/Sidebar/Sidebar";
import profile from "../../public/assets/icons/logo1.svg";
import users from "../../public/assets/icons/users.svg";
import {
  fetchDataServer,
  removeEmptyPTagsFromClass,
} from "../../utils/functions";
import sanity from "../../sanity";
import BlockContent from "@sanity/block-content-to-react";
import Button from "../../components/Button/Button";
import RoadmapSticker from "@/components/RoadmapSticker/RoadmapSticker";
import { NextPage } from "next";
import { RoadmapProps } from "@/Interface/interface";
import user from "../../public/assets/images/user.png";
import userss from "../../public/assets/images/users.svg";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Team from "@/components/Team/Team";
const Raodmap: NextPage<{ res: RoadmapProps }> = ({ res }) => {
  useEffect(() => {
    removeEmptyPTagsFromClass();
  }, []);
  return (
    <>
      <DetailHeader link={"/jobs"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px] flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <div className="flex gap-[6rem] lg:flex-col">
          <div className="xs1:px-[1rem] flex flex-col flex-1 pb-[15rem] rounded-[2.4rem] gap-[3rem] pt-[3rem] ">
            <div className="flex h-[9rem] rounded-[2.4rem] bg-primary w-full">
              <div className="bg-[white] middle w-[9rem] h-[9rem] rounded-full relative top-[2.8rem] left-[4.4rem] shadow-cardShadow ">

              <Image
                src={profile}
                className="w-[3.8rem]  rounded-full "
                width={80}
                height={80}
                alt=""
                />
                </div>
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
                  <Image src={users} alt="" />
                  <span className="text-primaryBlack text-[1.6rem] font-[400] ">
                    {`Currently, we are a team of 14 building UIFry to be the World’s #1 UI UX platform`}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-[2rem]">
                {/* <p className="satoshi text-primaryBlack text-[2.4rem] font-[700]">
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
                </ol> */}

                <BlockContent
                  className={`body roadmap text flex flex-col gap-[2rem] pt-[3rem] `}
                  blocks={res?.text1?.body}
                />
                <RoadmapSticker classes="py-[2.5rem]" src={user}>
                  <span className="satoshi max-w-[36rem] text-[1.8rem] font-700 leading-[130%] text-primaryBlack">
                    We will be constantly uploading new resources every day in
                    all categories!
                  </span>
                </RoadmapSticker>
                <BlockContent
                  className={`body flex roadmap text flex-col gap-[2rem] pt-[3rem] `}
                  blocks={res?.text2?.body}
                />
                <RoadmapSticker
                  src={userss}
                  classes="border-[#00B3FF] border-l-[.5rem] !rounded-[.8rem] shadow-stcker !bg-[#fff] mb-[.8rem]"
                >
                    <p className="text-primaryBlack max-w-[15rem] text-[1.6rem] ">
                      Join{" "}
                      <span className="font-700 leading-[130%] ">56,000+</span>{" "}
                      designers today!
                    </p>
                  {/* <div className="flex gap-[3rem]">
                    <Image alt="" className="w-[3rem]" src={figma} />

                    <Image alt="" className="w-[3rem]" src={xd} />

                    <Image alt="" className="w-[3rem]" src={Sketch} />
                  </div> */}
                </RoadmapSticker>
                <Team />
              </div>
            </div>
          </div>
          <div className="flex sticky top-[17.8rem] mt-[3rem] lg:min-w-full rounded-[2.4rem] mb-auto min-w-[48.8rem] xl:max-w-[34.3rem] xl:min-w-[34.3rem] 2xl:max-w-[39.6rem] 2xl:min-w-[39.6rem] max-w-[48.8rem]  right-0 p-[2rem] bg-primary border-l-[1px] border-[#E5E9FF]">
            <div className="flex flex-col gap-[1rem] items-start bg-[#fff] rounded-[2rem] p-[3rem] pr-[2rem]">
              <h3 className="satoshi text-[1.8rem] font-[700] leading-[3rem] text-primaryBlack">
                {"Become a Pro with Special Access!"}
              </h3>
              <p className="text-secondaryGray font-[400] text-[1.6rem] leading-[2.4rem]">
                Join our pro plan and get everything we will be launching in V.1
                for the same price as beta.
              </p>
              <Button
                classes={
                  "bg-gradient  rounded-[5rem]  mt-[3rem] w-full py-[1.7rem] flex justify-center"
                }
              >
                <span className="text-[#ffffff] font-[500] text-[1.6rem] flex  satoshi">
                  Join Pro at 50% Off
                </span>
              </Button>
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
