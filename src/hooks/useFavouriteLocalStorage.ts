import { useEffect, useState } from 'react';
import { KEY } from '../constants/key';
import { localStorageService } from '../service/localStorageService';
import {
  FavouritesActionsName,
  FavoutiteActions,
  FavoutiteState,
} from '../types/favourite/favouriteState';

type UpdateFauvorites = (action: FavoutiteActions) => void;

export const useFavouriteLocalStorage = () => {
  const { getItem, setItem } = localStorageService<FavoutiteState[]>(
    KEY.products,
  );
  const [favourites, setFavourites] = useState<FavoutiteState[]>([]);

  const loadProducts = () => {
    setFavourites(getItem());
  };

  useEffect(() => {
    loadProducts();
    window.addEventListener('storage', loadProducts);

    return () => {
      window.removeEventListener('storage', loadProducts);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateFavourites: UpdateFauvorites = (action) => {
    const ids = getItem();
    let newState: FavoutiteState[] = [];

    switch (action.type) {
      case FavouritesActionsName.Add: {
        if (ids.some((id) => id === action.payload)) {
          newState = ids.filter((id) => {
            return id !== action.payload;
          });

          break;
        }

        newState = [...ids, action.payload];

        break;
      }

      case FavouritesActionsName.Remove: {
        newState = ids.filter((id) => {
          return id !== action.payload;
        });

        break;
      }

      default:
        newState = ids;
    }

    setItem(newState);
    setFavourites(newState);
  };

  return { favourites, updateFavourites };
};
