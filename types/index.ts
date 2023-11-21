import exp from 'constants';
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

export interface NonprofitTag {
  id: string;
  tagName: string;
  causeCategory: string;
  title: string;
  tagImageCloudinaryId: string;
  tagUrl: string;
  tagImageUrl: string;
}

export interface CharityTypes {
  slug: string;
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  websiteUrl: string;
  coverImageUrl: string;
  location: string;
}

export interface CharitDetailTypes {
  name: string;
  description: string;
  primarySlug: string;
  nonprofitTags: NonprofitTag[];
  locationAddress: string;
  logoUrl: string;
  coverImageUrl: string;
}
