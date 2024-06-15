import { FC, useCallback, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../ProductCard';
import type { Product } from '../../../types/product';
import { Pagination } from '../Pagination';
import { SkeletonProductCard } from '../../Skeletons/SkeletonProductCard';

import classes from './CatalogList.module.scss';
import { debounce } from '../../../service/debounce';

type CatalogListProps = {
  filteredProducts: Product[];
  loading: boolean;
};

export const CatalogList: FC<CatalogListProps> = ({
  filteredProducts,
  loading,
}) => {
  const [appliedQuery, setAppliedQuery] = useState('');
  const [searchParams] = useSearchParams();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const applyQuery = useCallback(debounce(setAppliedQuery, 1000), []);

  if (loading) {
    const arrayOfSkeletons = new Array(16).fill(<SkeletonProductCard />);

    return (
      <div className={classes.catalog__main}>
        {arrayOfSkeletons.map((product, index) => (
          // eslint-disable-next-line react/no-array-index-key
          <div className={classes.catalog__item} key={`Skeleton ${index}`}>
            {product}
          </div>
        ))}
      </div>
    );
  }

  const currentPage = +(searchParams.get('page') || '1');
  const itemsPerPage = +(searchParams.get('perPage') || 16);
  const sortMethod = searchParams.get('sort') || 'Newest';
  const query = searchParams.get('query') || '';

  applyQuery(query.toLowerCase());

  const sortedProducts = [...filteredProducts].filter((good) => {
    return good.name.toLowerCase().includes(appliedQuery);
  });

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

  if (!sortedProducts.length) {
    return (
      <p className={classes.no_products}>{`There are no ${filteredProducts[0].category.slice(0, -1)} products matching the query`}</p>
    );
  }

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  const displayedProducts = sortedProducts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage,
  );

  return (
    <>
      <div className={classes.catalog__main}>
        {displayedProducts.map((product) => (
          <div className={classes.catalog__item} key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <div className={classes.catalog__pagination}>
        <Pagination totalPages={totalPages} />
      </div>
    </>
  );
};
