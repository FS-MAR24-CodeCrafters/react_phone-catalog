import { useEffect, useState } from 'react';

import classes from './CatalogList.module.scss';
import { ProductCard } from '../ProductCard';
import { getGoods } from '../../api/goods';
import { Product } from '../../types/product';

export const CatalogList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      setProducts(res.filter((_item, index) => index <= 16));
    });
  }, []);

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__main}>
        {products.map((product) => (
          <div className={classes.catalog__item} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className={classes.catalog__footer}>
        <h2>123</h2>
      </div>
    </div>
  );
};
