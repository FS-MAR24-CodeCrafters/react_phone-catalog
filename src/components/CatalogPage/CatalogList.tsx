import { useSearchParams } from 'react-router-dom';

import { FC } from 'react';
import classes from './CatalogList.module.scss';
import { ProductCard } from '../ProductCard';
import { Product } from '../../types/product';
import { Pagination } from '../Pagination';
import { SkeletonProductCard } from '../SkeletonProductCard';

type CatalogListProps = {
  filteredProducts: Product[];
};

export const CatalogList: FC<CatalogListProps> = ({ filteredProducts }) => {
  const [searchParams] = useSearchParams();

  if (!filteredProducts.length) {
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
