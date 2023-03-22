import React, { FC, useEffect, useState } from "react";
import { updateModal } from "../../store/slices/featues";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tag from "../Tag/Tag";
import { useDispatch } from "react-redux";
import cross from "../../public/assets/icons/cross.svg";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../sanity";
import Link from "next/link";
import { Data, ProductDetailProps } from "@/Interface/interface";
const ProductDetail1: FC<ProductDetailProps> = ({ showCross, data }) => {
  const images = [figma, xd, Sketch];
  const dispatch = useDispatch();
  const builder = imageUrlBuilder(sanity);
  const urlFor = (source: any): any => {
    return builder.image(source);
  };

  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    async function fecthData() {
      setLoading(true);
      try {
        const res = await sanity.fetch(
          `*[defined(slug.current) && _type=='styleGuide']{
        title,slug,description,sanityFilter,images,tags,image
      }`
        );
        setLoading(false);
        setProducts(res);
      } catch (e) {
        setLoading(false);
      }
    }
    fecthData();
  }, []);
  return (
    <div className="middle-col gap-[4rem] min-lg:rounded-[24px] w-full   pt-[4rem] bg-[#ffffff] ">
      {showCross && (
        <div
          onClick={() => {
            document.body.classList.remove("overflow-hidden");
            dispatch(updateModal(false));
          }}
          className="hidden cursor-pointer lg:flex p-[1.5rem]  ml-auto "
        >
          <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
        </div>
      )}

      <div className="flex min-lg:min-w-[920px] lg:gap-[4.5rem]  lg:flex-col mx-[4rem] sm:mx-[2rem] items-center max-w-[920px] ">
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
          <Link href={data?.fileURL||""} download>
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
            {data.tags.map((item: any) => (
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
          src={urlFor(data.image).url()}
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
          {products.map((item, index) => (
            <Link
              key={index}
              href={{
                pathname: "/styles-guides/details",
                query: { style: item.slug.current },
              }}
            >
              <Card
                onClick={() => dispatch(updateModal(true))}
                data={item}
              />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail1;
