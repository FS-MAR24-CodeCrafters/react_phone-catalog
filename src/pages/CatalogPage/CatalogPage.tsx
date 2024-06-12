import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { CatalogList } from '../../components/CatalogPage';
import { PageHeader } from '../../components/PageHeader';
import { Dropdown } from '../../ui/Dropdown';
import { Product } from '../../types/product';
import { getGoods } from '../../api/goods';
import classes from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const { pathname } = useLocation();
  const path = pathname.slice(1);

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      setProducts(res);
    });
  }, []);

  const filteredProducts = products.filter((product) => {
    return product.category === path;
  });

  let pageTitle = `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`;

  if (path === 'phones') {
    pageTitle = 'Mobile phones';
  }

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__header}>
        <PageHeader title={pageTitle} totalModels={filteredProducts.length} />
      </div>
      <div className={classes.catalog__dropdown}>
        <div className={classes.catalog__dropdown_sort}>
          <Dropdown type="sort" />
        </div>
        <div className={classes.catalog__dropdown_item}>
          <Dropdown type="perPage" />
        </div>
      </div>
      <CatalogList filteredProducts={filteredProducts} />
    </div>
  );
};
