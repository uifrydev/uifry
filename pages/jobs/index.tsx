import SkeletonJobCard from "@/components/JobCard/SkeletonJobCard";
import { Data, JobProps } from "@/Interface/interface";
import { NextPage } from "next";
import Link from "next/link";
import React, { useState } from "react";
import Header from "../../components/Header/Header";
import JobCard from "../../components/JobCard/JobCard";
import JobsFilterBar from "../../components/JobsFilterBar/JobsFilterBar";
import Sidebar from "../../components/Sidebar/Sidebar";
import sanity from "../../sanity";
import { fetchDataServer } from "../../utils/functions";

const Jobs: NextPage<{
  Jobs: JobProps[];
}> = ({ Jobs }) => {
  const [products, setProducts] = useState<JobProps[]>(Jobs);
  return (
    <>
      <Header breadcrums={["Jobs"]} title={["Jobs"]} />
      <Sidebar isDetail={false} />
      <JobsFilterBar initialData={Jobs} setProducts={setProducts} />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid grid-cols-3 3xl:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] xs:px-[1rem] p-[3rem]">
          <SkeletonJobCard />
          {products.map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: "jobs/details",
                query: { job: item.slug.current },
              }}
            >
              <JobCard data={item} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await fetchDataServer({
      query: `*[_type=='job']{
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
  }`,
      sanity,
    });

    return {
      props: {
        Jobs: res,
      },
    };
  } catch (e) {
    return {
      props: {
        posts: [],
      },
    };
  }
}
export default Jobs;
