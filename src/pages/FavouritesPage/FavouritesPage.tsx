import { useLocalStorage } from '../../hooks/useLocalStorage';
import { FavoritesList } from '../../components/FavoritesPage';
import { PageHeader } from '../../components/PageHeader';
import classes from './FavouritesPage.module.scss';

export const FavouritesPage = () => {
  const [products] = useLocalStorage();

  return (
    <>
      <div className={classes.favorites__container}>
        <div className={classes.favorites__header}>
          <PageHeader title="Favourites" totalModels={products.length} />
        </div>
      </div>
      <FavoritesList products={products} />
    </>
  );
};
