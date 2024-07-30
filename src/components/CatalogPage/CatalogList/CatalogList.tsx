import { FC } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ProductCard } from '../../ProductCard';
import type { Product } from '../../../types/product';
import { Pagination } from '../Pagination';
import { SkeletonProductCard } from '../../Skeletons/SkeletonProductCard';

import classes from './CatalogList.module.scss';

type CatalogListProps = {
  filteredProducts: Product[] | undefined;
  totalModels: number | undefined;
  loading: boolean;
};

export const CatalogList: FC<CatalogListProps> = ({
  filteredProducts,
  loading,
  totalModels,
}) => {
  const [searchParams] = useSearchParams();

  if (loading || !filteredProducts || !totalModels) {
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

  const itemsPerPage = +(searchParams.get('perPage') || 16);

  if (!filteredProducts.length) {
    return (
      <p className={classes.no_products}>{`There are no ${filteredProducts[0].category.slice(0, -1)} products matching the query`}</p>
    );
  }

  const totalPages = Math.ceil(totalModels / itemsPerPage);

  return (
    <>
      <div className={classes.catalog__main}>
        {filteredProducts.map((product) => (
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
