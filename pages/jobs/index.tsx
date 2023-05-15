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
import { fetchData, fetchDataServer } from "../../utils/functions";
import Button from "@/components/Button/Button";
import { perProduct } from "@/utils/consts";
import MetaHead from "@/components/MetaHead/MeatHead";

const Jobs: NextPage<{
  Jobs: JobProps[];
}> = ({ Jobs }) => {
  const [products, setProducts] = useState<JobProps[]>(Jobs);
  const [productIndex, setProductIndex] = useState(Jobs.length);
  const [isLoading, setLoading] = useState(false);
  const [isLoadMore, setLoadMore] = useState(Jobs.length === perProduct);
  const [isLoadmoreLoading, setLoadmoreLoading] = useState(false);
  const [filter, setFilter] = useState({
    subCategory: "All Jobs",
    type: "All",
  });
  return (
    <>
    <MetaHead
        title={`Jobs - UIFry`}
        link="jobs"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <Header breadcrums={["Jobs"]} title={["Jobs"]} />
      <Sidebar isDetail={false} />
      <JobsFilterBar
        setFilter={setFilter}
        filter={filter}
        initialData={Jobs}
        setProducts={setProducts}
        setLoading={setLoading}
        setProductIndex={setProductIndex}
        isLoading={isLoading}
        setLoadMore={setLoadMore}
      />
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem]  w-full ">
        <div className="bg-primary rounded-[2.4rem] flex flex-col gap-[2rem]">
        {/* 3xl:grid-cols-2 */}
          <div className=" grid grid-cols-3 xl3:grid-cols-2 xs1:grid-cols-1 gap-[3rem] xs:px-[1rem] p-[3rem]">
            {isLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <SkeletonJobCard key={index} />
              ))}
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
            {isLoadmoreLoading &&
              Array.from({ length: 12 }).map((_, index) => (
                <SkeletonJobCard key={index} />
              ))}
          </div>
          <Button
            onClick={async () => {
              if (!isLoadMore) return;
              setProducts([]);
              await fetchData({
                setLoadMore,
                isLoading: isLoadmoreLoading,
                setLoading: setLoadmoreLoading,
                setProductIndex,
                setCards: setProducts,
                sanity,
                query: `*[_type=='job' ${
                  filter.subCategory !== "All Jobs"
                    ? ` && subCategory=='${filter.subCategory}'`
                    : ""
                } ${
                  filter.type !== "All" ? ` && jobType=='${filter.type}'` : ""
                } && applyBefore >= now()]{
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
              });
            }}
            //   ${
            //     filter.subCategory !== "All Jobs"
            //     ? ` && subCategory=='${filter.subCategory}'`
            //     : ""
            // } ${
            //   filter.type !== "All" ? ` && jobType=='${filter.type}'` : ""
            // }
          >
            <span className="satoshi text-[1.6rem] font-500 text-[#F7F8FD] rounded-[3.2rem] px-[2.4rem] py-[1.2rem] bg-gradient">
            {isLoadmoreLoading
                ? "Loading..."
                : !isLoadMore
                ? "All Data Loaded"
                : "Load More"}
            </span>
          </Button>
        </div>
      </div>
    </>
  );
};
export async function getServerSideProps() {
  try {
    const res = await fetchDataServer({
      query: `*[_type=='job' && applyBefore >= now()][0...${perProduct}]{
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
