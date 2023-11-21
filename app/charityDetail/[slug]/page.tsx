'use client';
import { useEffect, useState } from 'react';
import { fetchCharity } from '@/utils';
import { CharityProps } from '@/types';
import Image from 'next/image';

interface CharityDetailsProps {
  params: { slug: string };
}
const CharityDetails = ({ params }: CharityDetailsProps) => {
  const [charity, setCharity] = useState<CharityProps | null>(null);

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (params.slug) {
      const fetchData = async () => {
        console.log(params.slug);
        const data = await fetchCharity(params.slug as string);
        setCharity(data);
      };

      fetchData();
    }
  }, [params.slug]);

  if (!charity) {
    return <div>Loading...</div>;
  }

  // useEffect(() => {
  //   if (charity) {
  //     const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
  //     setIsFavourite(
  //       favourites.some((fav: CharityProps) => fav.name === charity.name)
  //     );
  //   }
  // }, [charity]);

  const handleFavouriteClick = () => {
    const favourites = JSON.parse(localStorage.getItem('favourites') || '[]');
    if (isFavourite) {
      const newFavourites = favourites.filter(
        (fav: CharityProps) => fav.name !== charity.name
      );
      localStorage.setItem('favourites', JSON.stringify(newFavourites));
    } else {
      favourites.push(charity);
      localStorage.setItem('favourites', JSON.stringify(favourites));
    }
    setIsFavourite(!isFavourite);
  };

  return (
    <div className="parent__container">
      <div className="flex-1 pt-20 padding-x">
        <Image
          src={
            charity.coverImageUrl
              ? charity.coverImageUrl
              : '/Image_not_available.png'
          }
          alt={`${charity.name} image`}
          width={500}
          height={500}
          className="rounded-image"
        />
        <div className="location-container mt-5 ">
          <Image src="/location.jpg" alt="location" width={20} height={20} />
          <span className="text-2xl font-bold ml-3 ">
            {charity.locationAddress
              ? charity.locationAddress
              : 'Location Unknown'}
          </span>
        </div>
      </div>

      <div className="flex-1 pt-10 padding-x">
        <div className="image__container">
          <div className="logo-name-container mt-10">
            <Image
              src={charity.logoUrl ? charity.logoUrl : '/no-icon.png'}
              alt={`${charity.name} logo`}
              width={60}
              height={60}
              className="rounded-full"
            />
            <h1 className="text-4xl font-extrabold tracking-widest">
              {charity.name}
            </h1>
          </div>
          <p className="text-2xl mt-10 tracking-wide text-justify">
            {' '}
            {charity.description}
          </p>

          <div className="flex flex-col justify-center items-center mt-10 space-y-4">
            <button className="favourite-btn" onClick={handleFavouriteClick}>
              {isFavourite ? 'Remove from Favourites' : 'Add to Favourites'}
            </button>
            <a
              href={`https://www.every.org/${charity.primarySlug}`}
              className="checkEvery_btn"
              target="_blank"
            >
              Check on every.org
            </a>
          </div>
        </div>

        <div>{charity.tags}</div>
      </div>
    </div>
  );
};

export default CharityDetails;
