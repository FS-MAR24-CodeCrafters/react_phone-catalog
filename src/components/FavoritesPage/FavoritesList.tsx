import classes from './FavoriteList.module.scss';

import { PageHeader } from '../PageHeader';
import { ProductCard } from '../ProductCard';
import { useLocalStorage } from '../../hooks/useLocalStorage';

export const FavoritesList = () => {
  const [products] = useLocalStorage();

  return (
    <div className={classes.favorites__container}>
      <div className={classes.favorites__header}>
        <PageHeader title="Favourites" totalModels={products.length} />
      </div>
      <div className={classes.favorites__grid}>
        {products.map((product) => (
          <div className={classes.favorites__grid_item}>
            <ProductCard product={product} key={product.id} />
          </div>
        ))}
      </div>
    </div>
  );
};
