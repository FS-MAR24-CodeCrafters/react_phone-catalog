import React from 'react';
import classes from './FavoriteList.module.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/product';

type FavoriteListProps = {
  products: Product[];
}

export const FavoritesList: React.FC<FavoriteListProps> = ({ products }) => {
  return (
    <div className={classes.favorites__grid}>
      {products.map((product) => (
        <div className={classes.favorites__grid_item} key={product.id}>
          <ProductCard product={product} key={product.id} />
        </div>
      ))}
    </div>
  );
};
