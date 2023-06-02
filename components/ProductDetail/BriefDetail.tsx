import React, { FC, useEffect, useRef, useState } from "react";
import {
  updateBriefModal,
  updateModal,
  updateProModal,
} from "../../store/slices/featues";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tag from "../Tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import cross from "../../public/assets/icons/cross.svg";
import line from "../../public/assets/images/line.png";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import sanity from "../../sanity";
import Link from "next/link";
import { loadMore, perProduct } from "../../utils/consts";
import { Data, ProductDetailProps } from "@/Interface/interface";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";
import { setLoading } from "@/store/slices/auth";
import { loadOutseta } from "@/utils/outseta";
import image1 from "../../public/assets/images/1.jpg";
import image2 from "../../public/assets/images/2.jpg";
import image3 from "../../public/assets/images/3.jpg";
import check from "../../public/assets/icons/check_green.svg";

const BriefDetail: FC<any> = ({ showCross, data }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading1] = useState(false);
  const router = useRouter();
  const outsetaRef = useRef<any>();
  const pid = router.query;
  const { user } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    async function fetchData() {
      outsetaRef.current = await loadOutseta();
    }
    fetchData();
  }, [router.asPath]);
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="middle-col contain gap-[4rem] min-lg:rounded-[24px] w-full relative pt-[4rem] pb-[5.2rem] bg-[#ffffff] px-[2rem]"
    >
      {showCross && (
        <>
          {/* <div className="flex  rounded-t-[3.4rem] overflow-hidden absolute top-[0rem] left-0 w-full">
            <Image alt="" src={line} className="w-full " />
          </div> */}
          <div
            onClick={() => {
              document.body.classList.remove("!overflow-y-hidden");
              dispatch(updateBriefModal(false));
            }}
            className="hidden cursor-pointer lg:flex p-[1.5rem]  ml-auto absolute right-[.6rem] top-[1rem]"
          >
            <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
          </div>
        </>
      )}

      <div className="flex min-lg:min-w-[820px]  lg:gap-[1.5rem] gap-[3rem] lg:flex-col mx-[4rem] sm:mx-[2rem] items-center lg:items-center max-w-[1200px] ">
        <div className="flex flex-col gap-[1rem] lg:items-center">
          {/* <span className="font-[400] text-[1.6rem] leading-[2.2rem] text-primaryBlack ">
            {data?.category}
          </span> */}
          <span className="satoshi font-700 text-center text-[3.6rem] sm:text-[2.8rem] leading-[4rem] text-primaryBlack ">
            {data?.title}
          </span>
        </div>
        <div className="flex flex-col gap-[1.5rem] min-lg:ml-auto sm:w-full sm:items-center">
          {user?.Account?.AccountStage && user?.Account?.AccountStage != 5 ? (
            <Link href={data?.fileURL || ""} download>
              <Button classes={"bg-gradient rounded-[10rem] w-full"}>
                <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                  Download Brief
                </span>
              </Button>
            </Link>
          ) : (
            <Button
              onClick={() => {
                if (!user) {
                  dispatch(updateProModal(true));
                  return;
                }
                alert("plan expired");
              }}
              classes={
                "bg-gradient rounded-[10rem] !py-[1.5rem] !px-[5.1rem] w-full"
              }
            >
              <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                Download Brief
              </span>
            </Button>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-1 gap-[6rem] bg-primary mx-[4rem] sm:mx-[2rem] p-[3rem] pl-[4rem] border-[1px] border-border2 max-w-[92rem] rounded-[2rem]">
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[1.8rem] font-[500] satoshi text-primaryBlack leading-[2.3rem]">
            Info
          </span>
          <span className="text-[1.6rem] font-[400] text-secondaryGray leading-[150%]">
            {data?.description}</span>
        </div>
        <div className="flex flex-col gap-[4rem] ">
          <div className="flex flex-col gap-[1rem]">
            <span className="text-[1.8rem]  font-[500] satoshi text-primaryBlack leading-[2.3rem]">
              What’s included?
            </span>
            <div className="flex flex-wrap gap-[.8rem] ">
              
              {data?.tags?.map((item: string, index: number) => {
                return (
                  <li
                    className="flex items-center gap-[.8rem] border-[1px] leading-[150%] rounded-full py-[.6rem] px-[1.4rem] bg-[#fff] text-secondaryGray text-[1.4rem]"
                    key={index}
                  >
                    <Image alt={`check_list${index}`} src={check} />
                    <span>{item}</span>
                  </li>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <Carousel
        images={
          data?.images
            ? data?.images?.map(
                (item: { asset: { url: string } }) => item?.asset?.url
              )
            : []
        }
      /> */}
      <div className="flex w-full py-[2.7rem] pl-[3.1rem] max-w-[92rem] pr-[3.8rem] rounded-[3rem] bg-primary">
        <Image
          src={data?.images[0]?.asset?.url}
          alt=""
          width={780}
          className="w-full rounded-[2rem]"
          height={735}
        />
      </div>
      {/* <div className="flex px-[4rem] py-[2rem] bg-primary rounded-[2rem] max-w-[92rem]">
        <span className="text-[1.4rem] font-[400] text-secondaryGray leading-[150%]">
          A squeeze page is a specialized type of landing page tailored to
          capture essential visitor information, predominantly email addresses,
          with the primary goal of lead generation and list building. Squeeze
          pages are characterized by concise, persuasive content and a
          compelling offer, such as a free ebook, exclusive access to content,
          or a valuable discount.
        </span>
      </div> */}
      <div className="flex gap-[.5rem]">
        <p className="text-[1.6rem] font-[500] leading-[2.4rem] text-primaryBlack">
          Issue with this brief?
        </p>
        <Link href={'https://uifry.outseta.com/support/kb/categories'} target='_blank' className="text-[1.6rem] font-[700] leading-[2.4rem] text-[#1575F6]">
          Tell our team!
        </Link>
      </div>
      {/* <div className="grid grid-cols-2 lg:grid-cols-1 gap-[6rem] mx-[4rem] sm:mx-[2rem] p-[4rem] border-[1px] border-border2 max-w-[92rem] rounded-[2rem]">
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[1.8rem] font-[500] satoshi text-primaryBlack leading-[2.3rem]">
            Info
          </span>
          <span className="text-[1.6rem] font-[400] text-secondaryGray leading-[150%]">
            {data?.description}
          </span>
        </div>
        <div className="flex flex-col gap-[3rem]">
          <div className="flex flex-col gap-[1rem]">
            <span className="text-[1.8rem]  font-[500] satoshi text-primaryBlack leading-[2.3rem]">
              Tags
            </span>
            <div className="flex flex-wrap gap-[.8rem] ">
              {data?.tags &&
                data.tags.map((item: any) => (
                  <Tag text={item} key={item} classess="!bg-[#fff]" />
                ))}
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="flex gap-[.5rem]">
        <p className="text-[1.6rem] font-[500] leading-[2.4rem] text-primaryBlack">
          Issue with this templates?
        </p>
        <p className="text-[1.6rem] font-[700] leading-[2.4rem] text-[#1575F6]">
          Tell our team!
        </p>
      </div> */}
    </div>
  );
};

export default BriefDetail;
