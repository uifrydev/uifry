import Image from "next/image";
import React from "react";
import payment1 from '../../public/assets/images/payment1.png'
import payment2 from '../../public/assets/images/payment2.png'
import payment3 from '../../public/assets/images/payment3.png'
const PaymentTag = () => {
  return (
    <div className="py-[1.9rem] pl-[4rem] xl:px-[3rem] pr-[2rem] bg-[#09397B] mt-[1rem] rounded-[1.6rem] relative overflow-hidden xl:max-w-[40rem] xl:mx-auto">
        <Image src={payment1} className='absolute top-0 left-0 h-full' alt="" />
        <Image src={payment2} className='absolute top-0 right-0 xl:-right-[3rem]' alt="" />
        <Image src={payment3} className='absolute top-0 -right-[7rem] h-full xl:hidden' alt="" />
      <div className="z-[20]">
        <div className="flex items-center gap-[1rem] flex-wrap">
          <span className=" satoshi text-white text-[3.2rem] leading-[3.4rem]">$4.99/m</span>
          <span className="text-[#4F8ADB] text-[1.6rem] font-700 line-through">$29.99/m</span>
        </div>
        <div className="flex justify-between xl:gap-[1rem] items-center xl:items-start xl:flex-col">
          <span className="text-[1.4rem] text-white leading-[2.9rem] ">
            Cancel anytime! No strings attached!
          </span>
          <p className="text-white z-[21] text-[1.4rem] xl:text-[1rem] p-[1rem] xl:py-[.3rem] py-[.5rem] border-[1px] border-[#fff] rounded-[.5rem] ">
            Powered by <span className="font-700"> stripe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTag;
