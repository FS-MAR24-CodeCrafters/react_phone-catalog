import { useLocation } from 'react-router-dom';
import { createPortal } from 'react-dom';
import { useProductReqHandler } from '../../hooks/useProductReqHandler';
import { CatalogList } from '../../components/CatalogPage/CatalogList';
import { PageHeader } from '../../components/PageHeader';
import { ErrorMessage } from '../../components/ErrorMessage';
import { ErrorScreen } from '../../components/ErrorScreen';
import { NoGoodsScreen } from '../../components/NoGoodsSrcreen';
import { Dropdown } from '../../ui/Dropdown';

import classes from './CatalogPage.module.scss';

export const CatalogPage = () => {
  const {
    loading, products, openModal, error, setError, setOpenModal,
  } = useProductReqHandler();

  const { pathname } = useLocation();
  const path = pathname.slice(1);
  let pageTitle = `${path.slice(0, 1).toUpperCase()}${path.slice(1)}`;

  if (path === 'phones') {
    pageTitle = 'Mobile phones';
  }

  if (error) {
    return (
      <div style={{ gridColumn: '1 / -1' }}>
        <ErrorScreen setError={setError} />
      </div>
    );
  }

  if (!loading && products && !products?.products.length) {
    return (
      <div className={classes.catalog__container}>
        <div className={classes.catalog__header}>
          <PageHeader title={pageTitle} totalModels={products.total} />
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <NoGoodsScreen title="There are no goods in this category" />
        </div>
      </div>
    );
  }

  return (
    <div className={classes.catalog__container}>
      <div className={classes.catalog__header}>
        <PageHeader title={pageTitle} totalModels={products?.total} />
      </div>

      <div className={classes.catalog__dropdown}>
        <div className={classes.catalog__dropdown_sort}>
          <Dropdown type="sort" />
        </div>

        <div className={classes.catalog__dropdown_item}>
          <Dropdown type="perPage" />
        </div>
      </div>
      <CatalogList
        filteredProducts={products?.products}
        loading={loading}
        totalModels={products?.total}
      />

      {openModal &&
        createPortal(
          <ErrorMessage setOpenModal={setOpenModal} />,
          document.body,
        )}
    </div>
  );
};
