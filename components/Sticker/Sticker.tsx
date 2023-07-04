import Image from "next/image";
import React from "react";
import drop from "../../public/assets/images/drop.png";
import gradient from "../../public/assets/images/gradient.png";
import drop1 from "../../public/assets/images/drop1.png";
import gradient1 from "../../public/assets/images/gradient1.png";
import Link from "next/link";
const Sticker = ({
  classes = "",
  text = "",
  veiw = false,
}: {
  classes: string;
  text?: string;
  veiw?: boolean;
}) => {
  return (
    <div
      className={`relative  flex z-[1] justify-center max-w-[44rem] gap-[2rem] py-[1.5rem] mx-auto overflow-hidden px-[2rem] items-center rounded-full bg-gradient1 ${classes}`}
    >
      <p className="text-[#fff] font-[700] text-[1.6rem] satoshi text-center">
        {text ? text : "We Added 150 new UI templates this week!"}
        {veiw && (
          <Link
            href={"/weekly-updates"}
            className="pb-[.02rem] border-b-[1px] ml-[1rem]"
          >
            {" "}
            View Here
          </Link>
        )}
      </p>
      {/* <Image
        src={drop}
        className="absolute top-0 right-0 h-full object-cover z-[1]"
        alt=""
      />
      <Image
        src={gradient}
        className="absolute top-0 right-0 h-full object-cover"
        alt=""
      /> */}
      <Image
        src={drop1}
        className="absolute -top-2 -left-[12rem] sm:hidden h-full object-cover z-[1]"
        alt=""
      />
      {/* <Image
        src={gradient1}
        className="absolute top-0 left-0 h-full object-cover"
        alt=""
      /> */}
    </div>
  );
};

export default Sticker;
