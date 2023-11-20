import { MouseEventHandler } from 'react';

export interface CustomeButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: 'button' | 'submit';
}

export interface SearchCharityProps {
  charity: string;
  setCharity: (charity: string) => void;
}

export interface CharityProps {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  websiteUrl: string;
  coverImageUrl: string;
  location: string;
  tags: string[];
}
