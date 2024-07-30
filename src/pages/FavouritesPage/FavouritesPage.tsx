import { createPortal } from 'react-dom';
import { useFavouriteLocalStorage } from '../../hooks/useFavouriteLocalStorage';
import { FavoritesList } from '../../components/FavoritesPage';
import { NoGoodsScreen } from '../../components/NoGoodsSrcreen';
import { PageHeader } from '../../components/PageHeader';
import { ErrorScreen } from '../../components/ErrorScreen';
import { ErrorMessage } from '../../components/ErrorMessage';

import classes from './FavouritesPage.module.scss';
import { Product } from '../../types/product';
import { useFetchProductsByIDs } from '../../hooks/useFetchProductsByIDs';

export const FavouritesPage = () => {
  const { favourites } = useFavouriteLocalStorage();

  const {
    loading, products, openModal, error, setError, setOpenModal,
  } = useFetchProductsByIDs({ iDs: favourites.join(','), path: 'favourites' });

  if (!loading && !favourites.length) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <NoGoodsScreen title="Please add goods to favourites" />
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <ErrorScreen setError={setError} />
      </div>
    );
  }

  const filteredGoods: Product[] = products
    .filter((product) => {
      return favourites.some((id) => id === product.itemId);
    });

  return (
    <div className={classes.favorites__container}>
      <div className={classes.favorites__header}>
        <PageHeader title="Favourites" totalModels={favourites.length} />
      </div>

      <div className={classes.favorites__grid}>
        <FavoritesList favourites={filteredGoods} />
      </div>

      {openModal &&
        createPortal(
          <ErrorMessage setOpenModal={setOpenModal} />,
          document.body,
        )}
    </div>
  );
};
