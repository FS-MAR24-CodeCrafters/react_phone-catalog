import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import classes from './CatalogList.module.scss';
import { ProductCard } from '../ProductCard';
import { getGoods } from '../../api/goods';
import { Product } from '../../types/product';

export const CatalogList = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const filteredProducts = products.filter((product) => {
    return product.category === path;
  });

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__main}>
        {filteredProducts.map((product) => (
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
