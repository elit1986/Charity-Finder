export interface NonprofitTag {
  id: string;
  tagName: string;
  causeCategory: string;
  title: string;
  tagImageCloudinaryId: string;
  tagUrl: string;
  tagImageUrl: string;
}

export interface CharityType {
  description: string;
  ein: string;
  name: string;
  profileUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  slug: string;
  location: string;
  locationAddress: string;
  websiteUrl: string;
  tags: string[];
  matchedTerms: string[];
  logoCloudinaryId: string;
  primarySlug: string;
}

export interface CharityDetailType {
  id: string;
  name: string;
  locationAddress: string;
  ein: string;
  description: string;
  primarySlug: string;
  logoCloudinaryId: string;
  coverImageCloudinaryId: string;
  websiteUrl: string;
  logoUrl: string;
  coverImageUrl: string;
  profileUrl: string;
  nonprofitTags: NonprofitTag[];
  slug: string;
}
