export interface ButtonProps {
  children: React.ReactNode;
  classes?: string;
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
}

export interface Data {
  data: {
    images: any;
    sanityFilter?: {
      Figma?: boolean;
      XD?: boolean;
      Sketch?: boolean;
    };
    title: string;
    description?: string;
    category: string;
  };
}
export interface CardProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>;
  data: {
    images: any;
    sanityFilter?: {
      Figma?: boolean;
      XD?: boolean;
      Sketch?: boolean;
    };
    title: string;
    description?: string;
    category: string;
  };
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
