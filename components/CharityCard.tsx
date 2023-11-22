import Image from 'next/image';
import { CharityType } from '@/types';
import Link from 'next/link';

interface CharityCardProps {
  charity: CharityType;
}

const CharityCard = ({ charity }: CharityCardProps) => {
  const { name, logoUrl, locationAddress, primarySlug, location, slug } =
    charity;
  console.log(slug);

  return (
    <Link href={`/charityDetail/${slug}`} passHref>
      <div className="charity-card group">
        <div className="charity-card__content">
          <div className="logo-name-container">
            <Image
              src={logoUrl ? logoUrl : '/no-icon.png'}
              alt={`${name} logo`}
              width={50}
              height={50}
              className="rounded-full"
            />
            <h2 className="charity-card__content-title">{name}</h2>
          </div>

          <div className="location-container">
            <Image src="/location.jpg" alt="location" width={20} height={20} />
            <span className="location-text">
              {locationAddress
                ? locationAddress
                : location
                ? location
                : 'Unknown Location'}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;
