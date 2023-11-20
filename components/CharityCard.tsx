import Image from 'next/image';
import { CharityProps } from '@/types';
import Link from 'next/link';

interface CharityCardProps {
  charity: CharityProps;
}

const CharityCard = ({ charity }: CharityCardProps) => {
  const { name, logoUrl, location, ein } = charity;
  console.log(charity);

  return (
    <Link href={`/charityDetails/${ein}`} passHref>
      <div className="charity-card group">
        <div className="charity-card__content">
          <div className="logo-name-container">
            <Image src={logoUrl} alt={`${name} logo`} width={50} height={50} />
            <h2 className="charity-card__content-title">{name}</h2>
          </div>

          <div className="location-container">
            <Image src="/location.jpg" alt="location" width={20} height={20} />
            <span className="location-text">{location}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CharityCard;
