import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';

import classes from './CatalogList.module.scss';
import { ProductCard } from '../ProductCard';
import { getGoods } from '../../api/goods';
import { Product } from '../../types/product';
import { Pagination } from '../Pagination';
import { Dropdown } from '../../ui/Dropdown';
import { PageHeader } from '../PageHeader';

export const CatalogList = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [searchParams] = useSearchParams();
  const currentPage = +(searchParams.get('page') || '1');

  const itemsPerPage = +(searchParams.get('perPage') || 16);
  const sortMethod = searchParams.get('sort') || 'Newest';

  const { pathname } = useLocation();
  const path = pathname.slice(1);

  const filteredProducts = products.filter((product) => {
    return product.category === path;
  });

  const sortedProducts = [...filteredProducts];

  switch (sortMethod) {
    case 'Cheapest':
      sortedProducts.sort((a, b) => a.price - b.price);
      break;
    case 'Alphabetically':
      sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      break;
    case 'Newest':
      sortedProducts.sort((a, b) => b.year - a.year);
      break;
    default:
      break;
  }

  let pageTitle = `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`;

  if (path === 'phones') {
    pageTitle = 'Mobile phones';
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  useEffect(() => {
    getGoods<Product[]>('products.json').then((res) => {
      setProducts(res);
    });
  }, []);

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__header}>
        <PageHeader title={pageTitle} totalModels={filteredProducts.length} />
      </div>
      <div className={classes.catalog__dropdown}>
        <div className={classes.catalog__dropdown_sort}>
          <Dropdown type='sort' />
        </div>
        <div className={classes.catalog__dropdown_item}>
          <Dropdown type='perPage' />
        </div>
      </div>
      <div className={classes.catalog__main}>
        {displayedProducts.map((product) => (
          <div className={classes.catalog__item} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className={classes.catalog__pagination}>
        <Pagination
          totalPages={totalPages}
        />
      </div>
    </div>
  );
};
