import Image, { StaticImageData } from "next/image";

const ProTag = ({
  src,
  title,
  description,
  classes,imageClass
}: {
  src: StaticImageData;
  title: string;
  description: string;
  classes?:string;
  imageClass?:string
}) => (
  <div className={`w-full sm:flex-col rounded-[1.6rem] pb-[2.2rem] pt-[1.7rem] ${classes} pl-[3rem] pr-[3rem] bg-[#fff] flex gap-[2.5rem] items-center border-[1px] border-border2`}>
    <Image src={src} alt="" className={`w-[5rem] ${imageClass}`} />
    <div className="flex flex-col gap-[.5rem]">
      <span className="satoshi text-primaryBlack sm:text-center text-[1.6rem] font-700 leading-[2.6rem]">
        {title}
      </span>
      <span className="text-secondaryGray text-[1.4rem] sm:text-center font-500 leading-[150%]">
        {description}
      </span>
    </div>
  </div>
);
export default ProTag;
