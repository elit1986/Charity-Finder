'use client';
import React, { useState, useEffect } from 'react';
import CharityCard from '../../components/CharityCard';
import { CharityProps } from '@/types';

const favorites: React.FC = () => {
  const [favorites, setFavorites] = useState<CharityProps[]>([]);

  const loadFavorites = () => {
    const favoritesString = localStorage.getItem('favorites') ?? '[]';
    const loadedFavorites: CharityProps[] = JSON.parse(favoritesString);
    console.log(loadedFavorites);
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
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-extrabold flex mb-4 ">favorites</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.length > 0 ? (
            favorites.map((favorite: CharityProps) => (
              <CharityCard key={favorite.slug} charity={favorite} />
            ))
          ) : (
            <p className="text-l font-bold mb-4 ">
              No favorite charities added yet.
            </p>
          )}
        </div>
      </div>
    </main>
  );
};

export default favorites;
