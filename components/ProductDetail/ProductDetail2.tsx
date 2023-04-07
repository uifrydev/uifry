import React, { FC, useEffect, useRef, useState } from "react";
import { updateModal, updateProModal } from "../../store/slices/featues";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tag from "../Tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import cross from "../../public/assets/icons/cross.svg";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd1.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import tick from "../../public/assets/icons/tick.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../sanity";
import Link from "next/link";
import { Data, ProductDetailProps } from "@/Interface/interface";
import { RootState } from "@/store/store";
const ProductDetail2: FC<ProductDetailProps> = ({ showCross, data }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading] = useState(false);
  const outsetaRef = useRef<any>();
  const { user } = useSelector((state: RootState) => state.auth);
  useEffect(() => {
    async function fecthData() {
      setLoading(true);
      try {
        const res = await sanity.fetch(
          `*[_type=='uitemplate']| [0...12]{
        title,slug,description,sanityFilter,images[]{
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
  }, []);
  return (
    <div className="middle-col gap-[4rem] min-lg:rounded-[24px] w-full  pt-[1rem] bg-[#ffffff] ">
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

      <div className="flex min-lg:min-w-[820px] lg:gap-[4.5rem]  lg:flex-col mr-[1rem] sm:mx-[2rem] items-start ">
        <div className="flex flex-col mt-[4rem] gap-[1rem] items-center">
          <span className="satoshi font-700 text-center text-[3.6rem] sm:text-[2.8rem] leading-[4rem] text-primaryBlack ">
            {data?.title}
          </span>
          <span className="satoshi font-500 text-[1.6rem] leading-[2.3rem] text-primaryBlack ">
            {data?.category}
          </span>
          <Carousel
            images={data.images.map(
              (item: { asset: { url: string } }) => item?.asset?.url
            )}
          />
        </div>
        <div className="flex relative items-start max-w-[32rem] lg:mx-[4rem] sm:mx-[0rem] lg:max-w-full rounded-[2rem] sm:max-w-full right-0 p-[3.1rem] pl-[4.3rem] bg-primary border-l-[1px] border-[#E5E9FF]">
          <div className="flex w-full flex-col gap-[4rem]">
            <div className="flex gap-[2rem] flex-col ">
              <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                Files & Info
              </p>
              <div className="flex flex-col gap-[1.5rem] w-full">
                {data?.sanityFilter?.Figma && (
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-[2rem] items-center">
                      <Image src={figma} alt="" className="w-[2.4rem]" />
                      <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-primaryBlack">
                        Figma
                      </p>
                    </div>
                    <div className="flex">
                      <Image src={tick} alt="" />
                    </div>
                  </div>
                )}
                {data?.sanityFilter?.Sketch && (
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-[2rem] items-center">
                      <Image src={Sketch} alt="" className="w-[2.4rem]" />
                      <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-secondaryGray">
                        Sketch
                      </p>
                    </div>
                    <div className="flex">
                      <Image src={tick} alt="" />
                    </div>
                  </div>
                )}
                {data?.sanityFilter?.XD && (
                  <div className="flex justify-between w-full items-center">
                    <div className="flex gap-[2rem] items-center">
                      <Image src={xd} alt="" className="w-[2.4rem]" />
                      <p className="satoshi font-[500] text-[1.4rem] leading-[2rem] text-secondaryGray">
                        Adobe XD
                      </p>
                    </div>
                    <div className="flex">
                      <Image src={tick} alt="" />
                    </div>
                  </div>
                )}
              </div>
              {user ? (
                <Link href={data?.fileURL} download>
                  <Button
                    classes={"w-full py-[1.7rem] bg-gradient rounded-full"}
                  >
                    <span className="text-[1.4rem] font-[400] leading-[2rem] text-[#fff]">
                      Download
                    </span>
                  </Button>
                </Link>
              ) : (
                <Button
                  onClick={() => dispatch(updateProModal(true))}
                  classes={"w-full py-[1.7rem] bg-gradient rounded-full"}
                >
                  <span className="text-[1.4rem] font-[400] leading-[2rem] text-[#fff]">
                    Download
                  </span>
                </Button>
              )}
            </div>

            <div className="flex gap-[2rem] flex-col ">
              <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                Info
              </p>
              <p className="text-secondaryGray font-[400] text-[1.4rem] leading-[150%]">
                {data?.description}
              </p>
            </div>
            <div className="flex gap-[2rem] flex-col ">
              <p className="font-[500] satoshi text-[1.8rem] leading-[2.3rem] text-primaryBlack">
                Tags
              </p>
              <div className="flex flex-wrap gap-[.8rem]">
                {data?.tags &&
                  data?.tags.map((item) => (
                    <Tag
                      classess={
                        "bg-[#fff] leading-[2rem] text-secondaryGray !px-[1.4rem]"
                      }
                      text={item}
                    />
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="middle-col gap-[6rem] rounded-[2.4rem] bg-primary p-[6rem] xs:px-[4rem] w-full">
        <h2 className="text-[3.6rem] font-[700] text-primaryBlack leading-[6.3rem] satoshi">
          You Might <span className="gradient-text">Like</span> These
        </h2>
        <div className="  grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] ">
          {!loading &&
            products.map((item, index) => (
              <Link
                href={{
                  pathname: "/ui-templates/details",
                  query: { template: item.slug.current },
                }}
                key={index}
              >
                <Card
                  onClick={() => dispatch(updateModal(true))}
                  // url={urlFor(item.images[0]).url()}
                  data={item}
                />
              </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetail2;
