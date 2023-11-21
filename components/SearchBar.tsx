'use client';
import { useState } from 'react';
import Image from 'next/image';
import { SearchCharity } from './';
import { useRouter } from 'next/navigation';

const SearchButton = () => (
  <button type="submit" className={`-ml-3 z-10 `}>
    <Image
      src={'/magnifying-glass.svg'}
      alt={'magnifying glass'}
      width={40}
      height={40}
      className="object-contain"
    />
  </button>
);

interface SearchBarProps {
  onSearch: (charity: string) => void;
}

const SearchBar = ({ onSearch }: SearchBarProps) => {
  const [charity, setCharity] = useState('');

  const router = useRouter();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (charity === '') {
      return alert('Please fill in the search bar');
    }

    onSearch(charity.toLowerCase());
    updateSearchParams(charity.toLowerCase());
  };

  const updateSearchParams = (charity: string) => {
    const searchParams = new URLSearchParams(window.location.search);

    if (charity) {
      searchParams.set('charity', charity);
    } else {
      searchParams.delete('charity');
    }

    const newPathname = `${
      window.location.pathname
    }?${searchParams.toString()}`;
    router.push(newPathname);
  };
  return (
    <form className="searchbar bg-searchbg" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchCharity charity={charity} setCharity={setCharity} />
        <SearchButton />
      </div>
    </form>
  );
};

export default SearchBar;
