import { useEffect, useState } from 'react';
import { KEY } from '../constants/key';
import { localStorageService } from '../service/localStorageService';

type ThemeState = boolean | null;

export const useFavouriteLocalStorage = () => {
  const { getItem, setItem } = localStorageService<ThemeState>(
    KEY.theme,
  );
  const [dark, setDark] = useState<ThemeState>(null);

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
    const goods = getItem();
    let newState: FavoutiteState[] = [];

    switch (action.type) {
      case FavouritesActionsName.Add: {
        if (goods.some((product) => product.id === action.payload.id)) {
          newState = goods.filter((product) => {
            return product.id !== action.payload.id;
          });

          break;
        }

        newState = [...goods, action.payload];

        break;
      }

      case FavouritesActionsName.Remove: {
        newState = goods.filter((product) => {
          return product.id !== action.payload.id;
        });

        break;
      }

      default:
        newState = goods;
    }

    setItem(newState);
    setFavourites(newState);
  };

  return { favourites, updateFavourites };
};
