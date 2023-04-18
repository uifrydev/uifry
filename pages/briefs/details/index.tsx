import DetailHeader from "@/components/KitHeader/KitHeader";
import BriefDetail from "@/components/ProductDetail/BriefDetail";
import Sidebar from "@/components/Sidebar/Sidebar";
import React from "react";

const BriefDetails = () => {
  return (
    <>
      <DetailHeader link={"/jobs"} />
      <Sidebar isDetail={true} />
      <div className="min-lg:pl-[234px]  flex-col bg-[white] xs1:px-0 relative xs1:flex-col flex lg:pl-[1rem] gap-[4rem] pr-[4rem]  w-full ">
        <BriefDetail  />
      </div>
    </>
  );
};

export default BriefDetails;
