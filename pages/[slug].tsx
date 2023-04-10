import Image from "next/image";
import React, { useCallback, useEffect } from "react";
import DetailHeader from "../components/KitHeader/KitHeader";
import Sidebar from "../components/Sidebar/Sidebar";
import profile from "../public/assets/images/profile.png";
import users from "../public/assets/icons/users.svg";
import { slugList } from "../utils/links";
import { useRouter } from "next/router";
import Link from "next/link";
import sanity from "../sanity";
import {
  fetchDataServer,
  removeEmptyPTagsFromClass,
  wrapper,
} from "../utils/functions";
import BlockContent from "@sanity/block-content-to-react";
import profiles from "../public/assets/icons/logo1.svg";
import { GetServerSideProps, GetServerSidePropsContext, NextPage } from "next";
import { ExtrasProps } from "@/Interface/interface";

const Slug: NextPage<{ res: ExtrasProps }> = ({ res }) => {
  const router = useRouter();
  const pid = router.query?.slug;
  useEffect(() => {
    removeEmptyPTagsFromClass();
    if (res.slug.current === "license-agreement") {
      // wrapper();
    }
  }, [router.asPath]);

  return (
    <>
      <DetailHeader link={"/"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px] flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <div className="flex gap-[6rem] lg:flex-col">
          <div className="xs1:px-[1rem] flex flex-col flex-1 f rounded-[2.4rem] gap-[3rem] pt-[3rem] ">
            <div className="flex h-[9rem] rounded-[2.4rem] bg-primary w-full">
              <div className="bg-[white] middle w-[9rem] h-[9rem] rounded-full relative top-[2.8rem] left-[4.4rem] shadow-cardShadow ">
                <Image
                  src={profiles}
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
                  {`${res?.title}`}
                </p>
                {res.slug.current === "license-agreement" ? (
                  <p className="satoshi text-secondaryGray text-[1.6rem] font-[400]">
                    {res.description}
                  </p>
                ) : (
                  <></>
                )}
                {/* 
                <div className="flex gap-[.85rem]">
                  <Image src={users} />
                  <span className="text-primaryBlack text-[1.6rem] font-[400] ">
                    {`Currently, we are a team of 14 building UIFry to be the World’s #1 UI UX platform`}
                  </span>
                </div> */}
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
                  className={`body flex flex-col gap-[2rem] pt-[3rem] ${
                    res.slug.current === "license-agreement" && "main"
                  }`}
                  id="body"
                  blocks={res?.body?.body}
                  erializers={{
                    types: {
                      block: (props: any) => {},
                    },
                  }}
                />
              </div>
            </div>
          </div>
          <div className="flex sticky top-[18rem] mt-[3rem] lg:min-w-full rounded-[2.4rem] mb-auto min-w-[29rem] max-w-[29rem]  right-0 p-[2rem] bg-primary border-l-[1px] border-[#E5E9FF]">
            <div className="flex flex-col gap-[1.6rem] items-start bg-[#fff] rounded-[2rem] p-[3rem] w-full">
              <h4 className="satoshi text-primaryBlack text-[2.4rem] font-700 leading-[3rem]">
                All Links
              </h4>
              <ul className="flex flex-col gap-[1.6rem] ">
                {slugList.map((item) => (
                  <li
                    key={item?.link}
                    className={`text16-gray ${
                      pid == item.link && "gradient-text"
                    }`}
                  >
                    <Link href={"/" + item.link}>{item?.title}</Link>
                  </li>
                ))}
              </ul>
            </div>
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
    const params = context.params;
    const res = await fetchDataServer({
      sanity,
      query: `*[_type=='extra' && slug.current=='${params?.slug}']{
          body->{title,body},
          title,
          slug,
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
};
export default Slug;
