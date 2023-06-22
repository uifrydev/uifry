import React from "react";
import Button from "../Button/Button";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { updateProModal } from "@/store/slices/featues";

const ApplyCard = ({
  companyName,
  applyNow,
}: {
  companyName: string;
  applyNow: string;
}) => {
  const { user } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();
  return (
    <div className="p-[3rem] pr-[2rem] flex flex-col gap-[3rem] rounded-[2rem] bg-[#fff]">
      <div className="flex flex-col gap-[1rem]">
        <span
          className="satoshi text-primaryBlack text-[1.8rem] font-[700] leading-[3rem]"
        >
          Apply Now
        </span>
        <span className="text-[1.6rem] font-[400] leading-[150%] text-secondaryGray">
          Please let {companyName} know you found this job on UiFry. This will
          help us grow!
        </span>
      </div>
      <Button
          // onClick={() => window.open(applyNow)}
          onClick={() => {
            if (!user) {
              dispatch(updateProModal(true));
              return;
            }
            if (
              user?.Account?.AccountStage &&
              user?.Account?.AccountStage != 5
            ) {
              window.open(applyNow);
              return;
            }
          }}
          classes={"w-full py-[1.7rem] bg-gradient rounded-full"}>
        <span
          className={
            "satoshi text-[1.6rem] font-[700] text-[#fff] leading-[2.4rem]"
          }
        >
          Apply Now
        </span>
      </Button>
    </div>
  );
};

export default ApplyCard;
