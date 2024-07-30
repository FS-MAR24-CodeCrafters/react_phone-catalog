import { createPortal } from 'react-dom';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Category } from '../../components/HomePage/Category';
import { MainSlider } from '../../components/HomePage/MainSlider';

import classes from './HomePage.module.scss';
import { useFetchProductsByParams } from '../../hooks/useFetchProductsByParams';
import { paths } from '../../constants/paths';

export const HomePage = () => {
  const {
    products: hotPrices,
    openModal,
    error,
    setError,
    setOpenModal,
  } = useFetchProductsByParams({
    sortBy: paths.searchParams.sortBy.price,
    order: paths.searchParams.order.asc,
  });

  const {
    products: brandNewModels,
    openModal: openModalBrand,
    error: errorBrand,
    setError: setErrorBrand,
    setOpenModal: setOpenModalBrand,
  } = useFetchProductsByParams({
    sortBy: paths.searchParams.sortBy.year,
    order: paths.searchParams.order.desc,
  });

  return (
    <>
      <h1 className={classes.hidden}>Product Catalog</h1>
      <div className={classes.title__container}>
        <h2 className={classes.title}>Welcome to Nice Gadget store!</h2>
      </div>
      <div className={`${classes.slider__container} ${classes.mb}`}>
        <MainSlider />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="Brand new models"
          products={brandNewModels}
          error={errorBrand}
          setError={setErrorBrand}
        />
      </div>

      <div className={`${classes.container} ${classes.mb}`}>
        <Category />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="Hot prices"
          products={hotPrices}
          error={error}
          setError={setError}
        />
      </div>

      {openModal &&
        createPortal(
          <ErrorMessage setOpenModal={setOpenModal} />,
          document.body,
        )}

      {openModalBrand &&
        createPortal(
          <ErrorMessage setOpenModal={setOpenModalBrand} />,
          document.body,
        )}
    </>
  );
};
