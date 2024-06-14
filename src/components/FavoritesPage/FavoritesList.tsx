import { FC } from 'react';
import classes from './FavoriteList.module.scss';

import { ProductCard } from '../ProductCard';
import { Product } from '../../types/product';

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
