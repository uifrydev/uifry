import React from "react";
import DetailsModal from "../../components/DetailsModal/DetailsModal";
import Header from "../../components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import { useSelector, useDispatch } from "react-redux";
import FilterBar from "../../components/FilterBar/FilterBar";
import MainCard from "@/components/BriefComponents/MainCard";
import { RootState } from "@/store/store";
import { MainCardProps } from "@/Interface/interface";
import { breifList, list } from "@/utils/links";
const Briefs = () => {
  const openModal = useSelector((state: RootState) => state.features.openModal);
  const dispatch = useDispatch();


  return (
    <>
      {/* {openModal && <DetailsModal  />} */}
      <Header title={["Briefs"]} breadcrums={["Briefs"]} />
      <Sidebar isDetail={false} />
      {/* <FilterBar /> */}
      <div className="min-lg:pl-[234px] lg:px-[1rem]  pr-[4rem] pt-[2rem] w-full ">
        <div className=" grid grid-cols-3 lg1:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] p-[3rem]">
          {breifList.map((item, index) => (
            <MainCard
              key={index}
              desc={item.desc}
              img={item.img}
              includes={item.includes}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Briefs;
