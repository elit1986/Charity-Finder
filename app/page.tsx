'use client';
import { CharityCard, Hero, SearchBar } from '@/components';
import { fetchCharities } from '@/utils';

import { useEffect, useState } from 'react';

export default function Home() {
  const [allCharities, setAllCharities] = useState([]);
  const [searchParams, setSearchParams] = useState({ cause: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharities({ cause: searchParams.cause });
      console.log(data);
      setAllCharities(data);
    };

    fetchData();
  }, [searchParams]);

  const isDataEmpty =
    !Array.isArray(allCharities) || allCharities.length < 1 || !allCharities;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div>
        <h1 className="text-4xl font-extrabold tracking-widest flex items-center justify-center mb-5 mt-10">
          {' '}
          Find a Charity
        </h1>
        <p className="text-2xl tracking-wide flex items-center justify-center mb-10 ">
          Explore the charity you might like
        </p>
      </div>
      <div className="flex items-center justify-center">
        <SearchBar
          onSearch={(newCharity) => setSearchParams({ cause: newCharity })}
        />

        <div className="home__filter-container"></div>
      </div>

      {!isDataEmpty ? (
        <section>
          <div className="home__cars-wrapper">
            {allCharities?.map((charity, index) => (
              <CharityCard key={index} charity={charity} />
            ))}
          </div>
        </section>
      ) : (
        <div className="home__error-container">
          <h2 className="text-black text-xl font-bold my-10">No results</h2>
        </div>
      )}
    </main>
  );
}
