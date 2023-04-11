import React, { FC, useEffect, useState } from "react";
import { updateModal1, updateProModal } from "../../store/slices/featues";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Tag from "../Tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import cross from "../../public/assets/icons/cross.svg";
import Image from "next/image";
import sanity from "../../sanity";
import Link from "next/link";
import { Data, ProductDetailProps } from "@/Interface/interface";
import { useRouter } from "next/router";
import { loadMore } from "@/utils/consts";
import { RootState } from "@/store/store";

const ProductDetail1: any = ({
  showCross,
  data,
  setData,
  isModal,
}: ProductDetailProps & {
  setData: React.Dispatch<React.SetStateAction<Data>>;
  isModal?: boolean;
}) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.auth);

  const router = useRouter();
  const pid = router.query;
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fecthData() {
      setLoading(true);
      try {
        const res = await sanity.fetch(
          `*[_type=='styleGuide' && slug.current!='${data?.slug?.current}'][0...${loadMore}]{
            title,slug,description,category,sanityFilter,"images":image{
              asset->{url}
            },tags,image
          }`
        );
        setLoading(false);
        setProducts(res);
      } catch (e) {
        setLoading(false);
      }
    }
    fecthData();
  }, [router.asPath]);

  if (loading) return;
  return (
    <div className="middle-col gap-[4rem] min-lg:rounded-[24px] w-full   pt-[4rem] bg-[#ffffff] ">
      {showCross && (
        <div
          onClick={() => {
            document.body.classList.remove("!overflow-y-hidden");
            dispatch(updateModal1(false));
          }}
          className="hidden cursor-pointer lg:flex p-[1.5rem]  ml-auto  absolute right-[.6rem] top-[1rem]"
        >
          <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
        </div>
      )}

      <div className="flex min-lg:min-w-[920px] lg:gap-[1.5rem]  lg:flex-col mx-[4rem] sm:mx-[2rem] items-center max-w-[920px] ">
        <div className="flex flex-col gap-[1rem] lg:items-center">
          <span className="satoshi font-500 text-[1.6rem] leading-[2.3rem] text-primaryBlack ">
            {data?.subCategory}
          </span>
          <span className="satoshi font-700 text-center text-[3.6rem] sm:text-[2.8rem] leading-[4rem] text-primaryBlack ">
            {data?.title}
          </span>
          {/* <div className="flex gap-[1rem] items-center">
            <Tag text={data.subCategory} />
          </div> */}
        </div>
        <div className="flex flex-col gap-[2rem] min-lg:ml-auto sm:w-full sm:items-center">
          {user ? (
            <Link href={data?.fileURL || ""} download>
              <Button
                classes={
                  "bg-gradient !w-[23rem] rounded-[10rem] py-[1.7rem] w-full"
                }
              >
                <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                  Download
                </span>
              </Button>
            </Link>
          ) : (
            <Button
              classes={
                "bg-gradient !w-[23rem] rounded-[10rem] py-[1.7rem] w-full"
              }
              onClick={()=>dispatch(updateProModal(true))}

            >
              <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                Download
              </span>
            </Button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 lg:grid-cols-1 gap-[2rem] mx-[4rem] sm:mx-[2rem] p-[4rem] bg-primary max-w-[92rem] rounded-[2rem]">
        <div className="flex flex-col gap-[1rem]">
          <span className="text-[1.8rem] font-[500] satoshi text-primaryBlack leading-[2.3rem]">
            What is a style guide?
          </span>
          <span className="text-[1.4rem] font-[400] text-secondaryGray leading-[150%]">
            {data?.description}
          </span>
        </div>

        <div className="flex flex-col gap-[1rem]">
          <span className="text-[1.8rem]  font-[500] satoshi text-primaryBlack leading-[2.3rem]">
            What’s included?
          </span>
          <div className="flex flex-wrap gap-[.8rem] ">
            {data?.tags &&
              data?.tags.map((item: string) => (
                <Tag
                  classess={
                    "bg-[#fff] text-secondaryGray !text-[1.4rem] !font-[400] "
                  }
                  text={item}
                  key={item}
                />
              ))}
          </div>
        </div>

        <div className="flex flex-col gap-[.5rem]">
          <p className="text-[1.4rem] font-[500] leading-[2.4rem] text-primaryBlack">
            What will I recieve?
          </p>
          <p className="text-[1.4rem] font-[400] leading-[150%rem] text-secondaryGray">
            Once you hit the download button, you will receive a PDF file
            containing color codes, fonts with links and examples.
          </p>
        </div>
      </div>
      <div className="flex w-full py-[2.7rem] pl-[3.1rem] max-w-[92rem] pr-[3.8rem] rounded-[3rem] bg-primary">
        <Image
          src={data?.images?.asset?.url}
          alt=""
          width={780}
          className="w-full rounded-[2rem]"
          height={735}
        />
      </div>
      <div className="middle-col gap-[6rem] rounded-[2.4rem] bg-primary p-[6rem] sm:px-[2rem] w-full">
        <h2 className="text-[3.6rem] font-[700] text-primaryBlack leading-[6.3rem] satoshi">
          You Might <span className="gradient-text">Like</span> These
        </h2>
        <div className=" grid grid-cols-3  2xl:grid-cols-2 lg1:grid-cols-2 xs1:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] ">
          {!loading &&
            products.map((item, index) => {
              if (isModal == false) {
                return (
                  <Link
                    href={{
                      pathname: "/styles-guides/details",
                      query: { style: item.slug.current || "" },
                    }}
                  >
                    <Card
                      key={index}
                      onClick={() => {
                        // updateModal(false);
                        setData(item);
                      }}
                      data={item}
                    />
                  </Link>
                );
              } else
                return (
                  <Card
                    key={index}
                    onClick={() => {
                      // updateModal(false);
                      setData(item);
                    }}
                    data={item}
                  />
                );
            })}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail1;
