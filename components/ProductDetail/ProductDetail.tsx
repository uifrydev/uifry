import React, { FC, useEffect, useRef, useState } from "react";
import { updateModal } from "../../store/slices/featues";
import Button from "../Button/Button";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import Tag from "../Tag/Tag";
import { useDispatch, useSelector } from "react-redux";
import cross from "../../public/assets/icons/cross.svg";
import figma from "../../public/assets/icons/figma.svg";
import xd from "../../public/assets/icons/xd.svg";
import Sketch from "../../public/assets/icons/adobe.svg";
import Image from "next/image";
import imageUrlBuilder from "@sanity/image-url";
import sanity from "../../sanity";
import Link from "next/link";
import { loadMore, perProduct } from "../../utils/consts";
import { Data, ProductDetailProps } from "@/Interface/interface";
import { useRouter } from "next/router";
import { RootState } from "@/store/store";
import { setLoading } from "@/store/slices/auth";
import { loadOutseta } from "@/utils/outseta";

const ProductDetail: FC<
  ProductDetailProps & {
    setData: React.Dispatch<React.SetStateAction<Data>>;
    isModal?: boolean;
  }
> = ({ showCross, data, setData, isModal }) => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Data[]>([]);
  const [loading, setLoading1] = useState(false);
  const router = useRouter();
  const outsetaRef = useRef<any>();
  const pid = router.query;
  const { user } = useSelector((state: RootState) => state.auth);
  interface AuthResult {
    success: boolean;
    error?: string;
  }
  useEffect(() => {
    async function fecthData() {
      outsetaRef.current = await loadOutseta();
      setLoading1(true);
      try {
        const res = await sanity.fetch(
          `*[_type=='uitemplate' && category=='${
            data?.category
          }' && slug.current!='${data.slug.current || ""}'][0...${loadMore}]{
        title,slug,description,category,sanityFilter,images[]{
          asset->{url}
        },tags,image
      }`
        );
        setLoading1(false);
        setProducts(res);
      } catch (e) {
        setLoading1(false);
      }
    }
    fecthData();
  }, [router.asPath]);
  const openLogin = async (options: any = {}): Promise<AuthResult> => {
    dispatch(setLoading(true));
    return new Promise((resolve, reject) => {
      if (!outsetaRef.current?.auth)
        return reject({ success: false, error: "auth is not available" });
      const authenticationCallbackUrl = "http://localhost:3000";
      try {
        outsetaRef.current.auth.open({
          widgetMode: "login",
          authenticationCallbackUrl: window.location.href,
          ...options,
        });
      } catch (error) {
        reject({ success: false, error });
      }
    });
  };
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div
      ref={ref}
      className="middle-col gap-[4rem] min-lg:rounded-[24px] w-full   pt-[4rem] bg-[#ffffff] "
    >
      {showCross && (
        <div
          onClick={() => {
            document.body.classList.remove("!overflow-hidden");
            dispatch(updateModal(false));
          }}
          className="hidden cursor-pointer lg:flex p-[1.5rem]  ml-auto "
        >
          <Image src={cross} className="w-[1.4rem] h-[1.4rem]" alt="" />
        </div>
      )}

      <div className="flex min-lg:min-w-[820px] lg:gap-[4.5rem]  lg:flex-col mx-[4rem] sm:mx-[2rem] items-end max-w-[1200px] ">
        <div className="flex flex-col gap-[1rem] lg:items-center">
          <span className="font-[400] text-[1.6rem] leading-[2.2rem] text-primaryBlack ">
            {data?.category}
          </span>
          <span className="satoshi font-700 text-center text-[3.6rem] sm:text-[2.8rem] leading-[4rem] text-primaryBlack ">
            {data?.title}
          </span>
        </div>
        <div className="flex flex-col gap-[1.5rem] min-lg:ml-auto sm:w-full sm:items-center">
          <div className="flex gap-[1rem] items-center pt-[.6rem]">
            <span className="text-secondaryGray text-[1.6rem] font-400 leading-[2.2rem]">
              Files Included
            </span>

            {data?.sanityFilter?.Figma && (
              <div className="flex w-[3.2rem] h-[3.2rem] items-center justify-center !p-0 border-[1px] rounded-full">
                <Image alt="" className="" src={figma} />
              </div>
            )}
            {data?.sanityFilter?.XD && (
              <div className="flex w-[3.2rem] h-[3.2rem] items-center justify-center !p-0 border-[1px] rounded-full">
                <Image alt="" className="" src={xd} />
              </div>
            )}
            {data?.sanityFilter?.Sketch && (
              <div className="flex w-[3.2rem] h-[3.2rem] items-center justify-center !p-0 border-[1px] rounded-full">
                <Image alt="" className="" src={Sketch} />
              </div>
            )}
          </div>

          {user ? (
            <Link href={data?.fileURL || ""} download>
              <Button classes={"bg-gradient rounded-[10rem] w-full"}>
                <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                  Download
                </span>
              </Button>
            </Link>
          ) : (
            <Button
              onClick={openLogin}
              classes={"bg-gradient rounded-[10rem] w-full"}
            >
              <span className="text-[1.6rem] font-[700] text-[#fff] satoshi ">
                Download
              </span>
            </Button>
          )}
        </div>
      </div>
      <Carousel
        images={
          data?.images?.map(
            (item: { asset: { url: string } }) => item?.asset?.url
          ) || []
        }
      />

      <div className="grid grid-cols-2 lg:grid-cols-1 gap-[6rem] mx-[4rem] sm:mx-[2rem] p-[4rem] border-[1px] border-[#E5E9FF] max-w-[92rem] rounded-[2rem]">
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
                data.tags.map((item) => (
                  <Tag text={item} key={item} classess="!bg-[#fff]" />
                ))}
            </div>
          </div>
          <div className="flex gap-[.5rem]">
            <p className="text-[1.6rem] font-[500] leading-[2.4rem] text-primaryBlack">
              Issue with this templates?
            </p>
            <p className="text-[1.6rem] font-[700] leading-[2.4rem] text-[#1575F6]">
              Tell our team!
            </p>
          </div>
        </div>
      </div>

      <div className="middle-col gap-[6rem] rounded-[2.4rem] bg-primary p-[6rem] xs:px-[4rem] w-full">
        <h2 className="text-[3.6rem] font-[700] text-primaryBlack leading-[6.3rem] satoshi">
          You Might <span className="gradient-text">Like</span> These
        </h2>
        <div className="  grid 4xl:grid-cols-3 grid-cols-4  2xl1:grid-cols-3 2xl:grid-cols-2 md:grid-cols-1 bg-primary rounded-[2.4rem] gap-[3rem] ">
          {products.map((item, index) => {
            if (isModal == false) {
              return (
                <Link
                  href={{
                    pathname: "/ui-templates/details",
                    query: { template: item.slug.current || "" },
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
                    if (ref.current) {
                      ref.current.scrollIntoView({behavior:'smooth'});
                    }

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

export default ProductDetail;
