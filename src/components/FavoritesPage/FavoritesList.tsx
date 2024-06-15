import { FC } from 'react';
import { ProductCard } from '../ProductCard';
import type { Product } from '../../types/product';

import classes from './FavoriteList.module.scss';

type FavoritesListProps = {
  favourites: Product[];
};

export const FavoritesList: FC<FavoritesListProps> = ({ favourites }) => {
  return (
    <>
      {favourites.map((favourite) => (
        <div className={classes.favorites__grid_item} key={favourite.id}>
          <ProductCard product={favourite} key={favourite.id} />
        </div>
      ))}
    </>
  );
};
