import React, { useEffect } from "react";
import { Player } from "@lottiefiles/react-lottie-player";
import item from "../public/assets/images/tick.json";
import Link from "next/link";
import Image from "next/image";
import logo from "../public/assets/images/logobeta.svg";
import MetaHead from "@/components/MetaHead/MeatHead";
const Confirmation = () => {
  useEffect(() => {
    const sticker = document.getElementById("sticker");
    sticker?.classList.add("!hidden");
  }, []);
  return (
    <div className="py-[6rem] px-[2rem] flex flex-col items-center gap-[2rem] bg-primary min-h-[100vh]">
      <MetaHead
        title="Confirmation - UIFry"
        link="confirmation"
        description="UIFry is the ultimate hub for UI UX designers to grow, learn and smash client work daily with so much more."
      />
      <Link href={"/"}>
        <Image src={logo} alt="" />
      </Link>
      <div className="flex flex-col max-w-[61.2rem] items-center w-full py-[4rem] px-[2rem] rounded-[2.4rem] gap-[2rem] border-[1px] border-border bg-[#fff]">
        <Player
          src={item}
          className="relative w-[10rem]"
          loop
          autoplay
          // background="transparent"
        />
        <div className="flex flex-col gap-[1rem] items-center">
          <h5 className="text-primaryBlack satoshi font-700 text-[2.8rem]">
            Almost done!
          </h5>
          <p className="text-secondaryGray text-[1.4rem] leading-[150%] font-500 max-w-[46.4rem] text-center">
            We have sent an email to{" "}
            <span className="text-primaryBlack"> uininjazee@gmail.com. </span>{" "}
            Please click the link inside to complete the registration process.
          </p>
        </div>
      </div>
      <p className="text-secondaryGray text-[1.4rem] leading-[150%] font-500 max-w-[46.4rem] text-center">
        If you haven’t received any email, or signed up with a wrong email,
        please submit a ticket
        <span className="text-[#00B3FF]"> here</span>{" "}
      </p>

      <p className="text-secondaryGray text-[1.4rem] leading-[150%] font-500 mt-[8.1rem] text-center">
        All Rights Reserved 2023® UIFry LTD
      </p>
    </div>
  );
};

export default Confirmation;
