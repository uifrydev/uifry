import { calculateRemainingTime } from "@/utils/functions";
import { useEffect, useState } from "react";

function CountdownTimer({ futureTime }: { futureTime: Date }) {
  const [remainingTime, setRemainingTime] = useState(
    calculateRemainingTime(futureTime)
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(calculateRemainingTime(futureTime));
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [futureTime]);

  return (
    <div className="flex middle gap-[1rem]">
      <div className="bg-[#fff] p-[.5rem] rounded-[.5rem] w-[5.5rem]">
        <p className="flex flex-col middle gradient-text z-[100]">
          <span className="text-[2.4rem] leading-[100%] font-700">
            {remainingTime.hours.toString().padStart(2, "0")}
          </span>
          <span className=" font-700 uppercase text-[.9rem]">HOURS</span>
        </p>
      </div>
      <div className="bg-[#fff] p-[.5rem] rounded-[.5rem] w-[5.5rem]">
        <p className="flex flex-col middle gradient-text z-[100]">
          <span className="text-[2.4rem] leading-[100%] font-700">
            {remainingTime.minutes.toString().padStart(2, "0")}
          </span>
          <span className=" font-700 uppercase text-[.9rem]">Minutes</span>
        </p>
      </div>
      <span className="text-[#fff] text-[1.3rem]">and</span>
      <div className="bg-[#fff] p-[.5rem] rounded-[.5rem] w-[5.5rem]">
        <p className="flex flex-col middle gradient-text z-[100]">
          <span className="text-[2.4rem] leading-[100%] font-700">
            {remainingTime.seconds.toString().padStart(2, "0")}
          </span>
          <span className=" font-700 uppercase text-[.9rem]">Seconds</span>
        </p>
      </div>
    </div>
  );
}

export default CountdownTimer;
