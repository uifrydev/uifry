import { BriefList, Data } from "@/Interface/interface";
import Header from "@/components/Header/Header";
import DetailHeader from "@/components/KitHeader/KitHeader";
import MetaHead from "@/components/MetaHead/MeatHead";
import BriefDetail from "@/components/ProductDetail/BriefDetail";
import Sidebar from "@/components/Sidebar/Sidebar";
import sanity from "@/sanity";
import { breifList } from "@/utils/links";
import { GetServerSideProps, GetServerSidePropsContext } from "next";
import React from "react";

const BriefDetails = ({
  details,
  data,
}: {
  details: Data;
  data: BriefList;
}) => {
  return (
    <>
      <MetaHead
        title={`${details?.title} - UIFry`}
        link={`briefs/details?category=${data.link}&brief=${details.slug.current}`}
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <Header breadcrums={["Briefs", "Details"]} title={["Briefs"]} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px]  flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <BriefDetail data={details} />
      </div>
    </>
  );
};
export const getServerSideProps: GetServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  const data = breifList.find((item) => item.link == context.query.category);
  try {
    const res = await sanity.fetch(
      `*[ _type=='${data?.name}' && slug.current=="${context.query.brief}"]{
        title,slug,subCategory,category,description,sanityFilter,images[]{
          asset->{url}
        },tags,"fileURL":zipFile.asset->url
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
        data,
      },
    };
  } catch (e) {
    return {
      notFound: true,
    };
  }
};
export default BriefDetails;
