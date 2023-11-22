'use client';
import { useEffect, useState } from 'react';
import { fetchCharity } from '@/utils';
import { CharityDetailType } from '@/types';
import Image from 'next/image';

interface CharityDetailsProps {
  params: { slug: string };
}
const CharityDetails = ({ params }: CharityDetailsProps) => {
  const [charity, setCharity] = useState<CharityDetailType | null>(null);

  const [isFavourite, setIsFavourite] = useState<boolean>(false);

  useEffect(() => {
    if (params.slug) {
      const fetchData = async () => {
        console.log(params.slug);
        const data = await fetchCharity(params.slug as string);
        console.log(data);
        setCharity({ ...data, slug: params.slug });
      };

      fetchData();
    }
  }, [params.slug]);

  useEffect(() => {
    if (charity) {
      const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
      setIsFavourite(
        favorites.some((fav: CharityDetailType) => fav.name === charity.name)
      );
    }
  }, [charity]);

  if (!charity) {
    return (
      <div className="flex items-center justify-center text-3xl font-extrabold">
        Loading...
      </div>
    );
  }

  const handleFavoriteClick = () => {
    const favorites = JSON.parse(localStorage.getItem('favorites') || '[]');
    if (isFavourite) {
      const newfavorites = favorites.filter(
        (fav: CharityDetailType) => fav.name !== charity.name
      );
      localStorage.setItem('favorites', JSON.stringify(newfavorites));
    } else {
      favorites.push(charity);
      localStorage.setItem('favorites', JSON.stringify(favorites));
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
        <div className="location-container mt-10 ">
          <Image src="/location.jpg" alt="location" width={20} height={20} />
          <span className="text-xl font-bold ml-3 ">
            {charity.locationAddress
              ? charity.locationAddress
              : 'Unknown Location'}
          </span>
        </div>
        <div>
          <div>
            {charity &&
              charity.nonprofitTags &&
              charity.nonprofitTags.length > 0 &&
              charity.nonprofitTags.map((tag) => (
                <span className="text-lg" key={tag.id}>
                  {tag.tagName}
                </span>
              ))}
          </div>
        </div>
      </div>

      <div className="flex-1 items-center pt-10 padding-x">
        <div className="image__container">
          <div className="logo-name-container mt-10">
            <Image
              src={charity.logoUrl ? charity.logoUrl : '/no-icon.png'}
              alt={`${charity.name} logo`}
              width={80}
              height={80}
              className="rounded-full"
            />
            <h1 className="text-3xl font-extrabold tracking-widest">
              {charity.name}
            </h1>
          </div>
          <p className="text-xl mt-10 tracking-wide text-justify">
            {charity.description}
          </p>

          <div className="flex flex-col justify-center items-center mt-10 space-y-4">
            <button className="favourite-btn" onClick={handleFavoriteClick}>
              {isFavourite ? 'Remove from favorites' : 'Add to favorites'}
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
      </div>
    </div>
  );
};

export default CharityDetails;
