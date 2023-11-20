'use client';
import { CharityCard, Hero, SearchBar } from '@/components';
import { fetchCharities } from '@/utils';
import Image from 'next/image';

import { useEffect, useState } from 'react';

export default function Home() {
  const [allCharities, setAllCharities] = useState([]);
  const [searchParams, setSearchParams] = useState({ cause: '' });

  useEffect(() => {
    const fetchData = async () => {
      const data = await fetchCharities({ cause: searchParams.cause });
      setAllCharities(data);
    };

    fetchData();
  }, [searchParams]);

  const isDataEmpty =
    !Array.isArray(allCharities) || allCharities.length < 1 || !allCharities;

  return (
    <main className="overflow-hidden">
      <Hero />

      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold"> Find a Charity</h1>
          <p>Explore the charity you might like</p>
        </div>
        <div className="home__filters">
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
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
          </div>
        )}
      </div>
    </main>
  );
}
