export interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
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
  features?:string[]
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
  isMenu: boolean;
  navigation: NavigationState;
  isAnimating: boolean;
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
}

export interface DetailData {
  data: Data;
}

export interface ProductDetailProps {
  showCross: boolean;
  data: Data
}
export interface ExtrasProps {
  body: any;
  title: string;
  slug: {
    current:string
  };
  description: string
}