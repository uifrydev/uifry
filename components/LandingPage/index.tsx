import React from "react";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";
import Sticker3 from "../Sticker/Sticker3";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import circle from "../../public/assets/images/circle.png";
import line from "../../public/assets/images/line5.png";
import ssHome from "../../public/assets/images/sshome.png";
import Image from "next/image";
const LandingPage = () => {
  const { user } = useSelector((state: RootState) => state.auth);
  return (
    <>
      <Header
        title={["Home"]}
        istitle={false}
        breadcrums={["Home"]}
        isHome={true}
      />

      <div className="flex middle w-full bg-[#F6F9FC] py-[4.91rem] px-[2rem]">
        <div className="max-w- flex flex-col middle gap-[4rem]">
          <div className="flex flex-col middle gap-[1.53rem]">
            {!user ? (
              <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[5.2rem] font-[700] leading-[120%]">
                Unlimited Access to
                <span className="gradient-text"> Premium UI/UX </span>
                designs, jobs, templates, and briefs
              </h2>
            ) : (
              <h2 className="satoshi max-w-[83rem] text-center text-primaryBlack text-[5.2rem] font-[700] leading-[120%]">
                Welcome,
                <span className="gradient-text">
                  {" "}
                  {user?.FullName.split(" ")[0]}
                </span>
              </h2>
            )}
            <p className="text-[2rem] font-[400] max-w-[75.04rem] text-center text-secondaryGray leading-[150%]">
              UI Templates, UI UX kits, briefs, style guides, jobs, fonts - it's
              all here. UIFry provides UI UX designers with
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                everything{" "}
                <Image
                  src={circle}
                  alt="circle"
                  className="absolute -top-[.1rem] -left-[.1rem] w-full h-[3rem]"
                />
              </span>{" "}
              they need to
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                grow, learn
              </span>
              , excel in their{" "}
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                projects
              </span>
              , build their
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                portfolios
              </span>
              , and deliver
              <span className="satoshi text-primaryBlack font-700 relative">
                {" "}
                work 100x faster!{" "}
                <Image
                  src={line}
                  alt="circle"
                  className="absolute -bottom-[1rem] -left-[.1rem] w-[110%]"
                />
              </span>
            </p>
          </div>

          <div className="max-w-[84rem]">
            <Image src={ssHome} alt="home screenshot" className="w-full" />
          </div>
          <div className="flex flex-col middle gap-[4.44rem]">
            <h3 className="satoshi max-w-[84rem] mt-[7rem] text-center text-primaryBlack text-[4.8rem] font-[700] leading-[120%]">
              “Everything for a UI/UX designer -
              <span className="gradient-text relative">
                {" "}
                new resources{" "}
                <Image
                  src={line}
                  alt="circle"
                  className="absolute -bottom-[1rem] z-[10] -left-[.1rem] w-[110%]"
                />
              </span>
              added each week!”
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
