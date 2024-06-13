import classes from './FavoriteList.module.scss';

import { PageHeader } from '../PageHeader';
import { ProductCard } from '../ProductCard';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';

export const FavoritesList = () => {
  const { favourites } = useFavouriteLocalStorage();

  return (
    <div className={classes.favorites__container}>
      <div className={classes.favorites__header}>
        <PageHeader title="Favourites" totalModels={favourites.length} />
      </div>
      <div className={classes.favorites__grid}>
        {favourites.map((favourite) => (
          <div className={classes.favorites__grid_item} key={favourite.id}>
            <ProductCard product={favourite} key={favourite.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
