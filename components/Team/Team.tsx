import { teamList } from "@/utils/teamImages";
import Image from "next/image";
import React from "react";
import users from "../../public/assets/icons/users.svg";

const Team = () => {
  return (
    <div className="w-full flex flex-col ">
      <div className="flex flex-col my-[3rem] gap-[1.5rem]">
        <p className="satoshi text-[2.4rem] font-700 leading-[150%] ">
          Meet Our Team
        </p>
        <div className="flex gap-[.5rem]">
          <Image alt="" src={users} />
          <span className="text-[1.6rem] font-400 leading-[2.8rem] ">
            Currently, we are a team of 14 building UIFry to be the World’s #1
            UI UX platform
          </span>
        </div>
      </div>
      <div className="grid grid-cols-7 gap-[1rem] max-w-[92rem] mb-[20rem]">
        {teamList.map((item) => (
          <Image src={item.src} className='aspect-[1/1] h-full' key={item.alt} alt={item.alt} />
        ))}
      </div>
    </div>
  );
};

export default Team;
