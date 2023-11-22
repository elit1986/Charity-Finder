'use client';
import { useEffect, useState } from 'react';
import { CharityCard, Hero, SearchBar } from '@/components';
import { fetchCharities } from '@/utils';
import { causes } from '@/constants';

export default function Home() {
  const [allCharities, setAllCharities] = useState([]);
  const [searchParams, setSearchParams] = useState({ cause: '' });
  const [randomCharities, setRandomCharities] = useState([]);

  const fetchRandomCharities = async () => {
    const randomCause = causes[Math.floor(Math.random() * causes.length)];
    const data = await fetchCharities({ cause: randomCause });
    setRandomCharities(data);
  };

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

  useEffect(() => {
    if (isDataEmpty) {
      fetchRandomCharities();
    }
  }, [isDataEmpty]);

  return (
    <main className="overflow-hidden">
      <Hero />

      <div>
        <h1 className="text-4xl font-extrabold tracking-widest flex items-center justify-center mb-5 mt-10">
          Explore a Charity You Might Like
        </h1>
      </div>
      <div className="flex items-center justify-center">
        <SearchBar
          onSearch={(newCharity) => setSearchParams({ cause: newCharity })}
        />

        <div className="home__filter-container"></div>
      </div>

      {!isDataEmpty ? (
        <section>
          <h2 className="flex items-center justify-center my-10 text-xl font-bold tracking-wide text-specialGreen">
            "SEARCH RESULTS FOR : {searchParams.cause.toLocaleUpperCase()}"
          </h2>
          <div>
            {allCharities?.map((charity, index) => (
              <CharityCard key={index} charity={charity} />
            ))}
          </div>
        </section>
      ) : (
        <section>
          <h2 className="flex items-center justify-center my-10 text-xl font-bold tracking-wide text-specialGreen">
            {' '}
            "SOME FEATURED CHARITIES"
          </h2>
          <div className="mb-20">
            {randomCharities?.map((charity, index) => (
              <CharityCard key={index} charity={charity} />
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
