import { Url } from "next/dist/shared/lib/router/router";
import { StaticImageData } from "next/image";

export interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined;
}

export interface Data {
  images?: any;
  sanityFilter?: {
    Figma?: boolean;
    XD?: boolean;
    Sketch?: boolean;
  };
  title: string;
  description?: string;
  category: string;
  fileURL: string;
  image?: string;
  slug: {
    current: any;
  };
  subCategory: string;
  subCategories?: string;
  tags: string[];
  noOfScreens?: any;
  features?: string[];
  total?: number;
  _type?: string;
  _createdAt?:Date
}
export interface CategoryCardProps extends Data {
  coverImage: {
    asset:{
      url:string;
    }
  };
}
export interface CardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  data: Data;
}
export interface FontCardProps extends CardProps {
  url?: StaticImageData;
}
export interface NavigationState {
  mainPage: string;
  subPage: string;
}

export interface FeatureState {
  openModal: boolean;
  openModal1: boolean;
  briefModal: boolean;
  isMenu: boolean;
  navigation: NavigationState;
  isAnimating: boolean;
  proModal: boolean;
  faqModal: boolean;
}
export interface FilterParams {
  subCategory: string;
  figma?: boolean;
  xd?: boolean;
  sketch?: boolean;
}
type Filter = {
  subCategory: string;
  [key: string]: boolean | string;
};

export type FilterBarProps = {
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<any>>;
  setCards: React.Dispatch<React.SetStateAction<any[]>>;
  initialData: any[];
  buttons: { title: string; link?: string }[];
  isFilter?: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
  setLoadMore: React.Dispatch<React.SetStateAction<boolean>>;
};

export interface FilterBar1Props extends FilterBarProps {
  parentLink: string;
  childLink: string;
  onClickFilter?: any;
  setLoading: React.Dispatch<React.SetStateAction<any>>;
  category: String;
  setProductIndex: React.Dispatch<React.SetStateAction<number>>;
}

export interface HeaderProps {
  breadcrums: string[];
  title: string[];
  istitle?: boolean;
}

export interface DetailData {
  data: Data;
}

export interface ProductDetailProps {
  showCross: boolean;
  data: Data;
}
export interface ExtrasProps {
  body: any;
  title: string;
  slug: {
    current: string;
  };
  description: string;
}
export interface RoadmapProps {
  text1: any;
  text2: any;
  title: string;
  slug: {
    current: string;
  };
  description: string;
}
export interface JobProps {
  companyName: string;
  primaryIndustry: string;
  images: any[];
  title: string;
  description: string;
  companySize: string;
  salaryRange: string;
  slug: {
    current: string;
  };
  total?: number;
  subCategory: string;
  _createdAt?:Date
}
export interface JobDetailProps extends JobProps {
  body: any;
  applyBefore: string;
  jobPosted: string;
  jobType: string;
  foundedIn: string;
  applyNow: string;
}
export interface MainCardProps {
  img: {
    src: StaticImageData;
    alt: string;
  };
  title: string;
  desc: string;
  includes: string[];
}
export interface BriefList extends MainCardProps {
  name: string;
  about: {
    q: string;
    a: string[];
    video: {
      src: string;
    };
  };
  link: Url;
  subCategories: string[];
}
