'use client';
import React, { useState, useEffect } from 'react';
import CharityCard from '../../components/CharityCard';
import { CharityProps } from '@/types';

const Favourites: React.FC = () => {
  const [favorites, setFavorites] = useState<CharityProps[]>([]);

  const loadFavorites = () => {
    const favoritesString = localStorage.getItem('favorites') ?? '[]';
    const loadedFavorites: CharityProps[] = JSON.parse(favoritesString);
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
        <h1 className="text-2xl font-bold mb-4">My Favourite Charities</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {favorites.length > 0 ? (
            favorites.map((charity, index) => (
              <CharityCard key={index} charity={charity} />
            ))
          ) : (
            <p>No favorite charities added yet.</p>
          )}
        </div>
      </div>
    </main>
  );
};

export default Favourites;
