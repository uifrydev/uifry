import Image from "next/image";
import React from "react";
import payment1 from '../../public/assets/images/payment1.png'
import payment2 from '../../public/assets/images/payment2.png'
import payment3 from '../../public/assets/images/payment3.png'
const PaymentTag = () => {
  return (
    <div className="py-[1.4rem] pl-[4rem] pr-[2rem] bg-[#09397B] mt-[2.5rem] rounded-[1.6rem] relative overflow-hidden">
        <Image src={payment1} className='absolute top-0 left-0' alt="" />
        <Image src={payment2} className='absolute top-0 right-0' alt="" />
        <Image src={payment3} className='absolute top-0 right-0' alt="" />
      <div className="">
        <div className="flex items-center gap-[1rem]">
          <span className=" satoshi text-white text-[3.2rem] leading-[4.3rem]">$9.99/m</span>
          <span className="text-[#4F8ADB] text-[1.6rem] font-700 line-through">$29.99/m</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-[1.4rem] text-white leading-[2.9rem] ">
            Cancel anytime! No strings attached!
          </span>
          <p className="text-white text-[1.4rem] p-[1rem] border-[1px] border-[#fff] rounded-[.5rem] ">
            Powered by <span className="font-700"> stripe</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentTag;