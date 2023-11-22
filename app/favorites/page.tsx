'use client';
import React, { useState, useEffect } from 'react';
import CharityCard from '../../components/CharityCard';
import { CharityType } from '@/types';

const favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<CharityType[]>([]);

  const loadFavorites = () => {
    const favoritesString = localStorage.getItem('favorites') ?? '[]';
    const loadedFavorites: CharityType[] = JSON.parse(favoritesString).map((favorite: CharityType) => ({ ...favorite, slug: favorite.slug }));    console.log(loadedFavorites);
    setFavorites(loadedFavorites);
  };

  useEffect(() => {
    loadFavorites();
  }, []);

  useEffect(() => {
    window.addEventListener('storage', loadFavorites);
    return () => {
      window.removeEventListener('storage', loadFavorites);
    };
  }, []);

  return (
    <main>
      <div className=" mx-auto p-4">
        <h1 className="text-3xl font-extrabold flex mb-8 items-center justify-center ">
          ❤️ Favorites ❤️
        </h1>
        <section>
          <div>
            {favorites.length > 0 ? (
              favorites.map((favorite, index) => (
                <CharityCard key={index} charity={favorite} />
              ))
            ) : (
              <p>No favorite charities added yet.</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
};

export default favorites;
