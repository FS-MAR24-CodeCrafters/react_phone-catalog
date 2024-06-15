import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import { FavoritesList } from '../../components/FavoritesPage';
import { NoGoodsScreen } from '../../components/NoGoodsSrcreen';
import { PageHeader } from '../../components/PageHeader';

import classes from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const { favourites } = useFavouriteLocalStorage();

  if (!favourites.length) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <NoGoodsScreen title="Please add goods to favourites" />
      </div>
    );
  }

  return (
    <div className={classes.favorites__container}>
      <div className={classes.favorites__header}>
        <PageHeader title="Favourites" totalModels={favourites.length} />
      </div>

      <div className={classes.favorites__grid}>
        <FavoritesList favourites={favourites} />
      </div>
    </div>
  );
};
