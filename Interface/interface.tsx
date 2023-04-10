export interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
  onBlur?: React.FocusEventHandler<HTMLButtonElement> | undefined
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
  tags: string[];
  noOfScreens?: any;
  features?: string[];
  total?:number;
}

export interface CardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  data: Data;
}
export interface FontCardProps extends CardProps {
  url?: string;
}
export interface NavigationState {
  mainPage: string;
  subPage: string;
}

export interface FeatureState {
  openModal: boolean;
  openModal1: boolean;
  isMenu: boolean;
  navigation: NavigationState;
  isAnimating: boolean;
  proModal:boolean;
  faqModal:boolean;
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
};

export interface FilterBar1Props extends FilterBarProps {
  parentLink: string;
  childLink: string;
}

export interface HeaderProps {
  breadcrums: string[];
  title: string[];
  istitle?:boolean
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
  total?:number;

}
export interface JobDetailProps extends JobProps {
  body: any;
  applyBefore: string;
  jobPosted: string;
  jobType: string;
  foundedIn: string;
}
