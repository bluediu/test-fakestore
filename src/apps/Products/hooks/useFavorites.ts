import { useEffect, useState } from 'react';

const STORAGE_KEY = 'favorites';

export function useFavorites<T extends { id: number }>() {
  const [favorites, setFavorites] = useState<T[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  //  Check if an item is in the favorites list
  const isFavorite = (id: number) => favorites.some((item) => item.id === id);

  //  Toggle favorite status for an item
  const toggleFavorite = (item: T) => {
    const updated = isFavorite(item.id)
      ? favorites.filter((f) => f.id !== item.id)
      : [...favorites, item];

    setFavorites(updated);
    localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  };

  return { favorites, toggleFavorite, isFavorite };
}
