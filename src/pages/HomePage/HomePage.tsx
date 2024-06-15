import { createPortal } from 'react-dom';
import { useProductReqHandler } from '../../hooks/useProductReqHandler';
import { SecondarySlider } from '../../components/Sliders/SecondarySlider';
import { ErrorMessage } from '../../components/ErrorMessage';
import { Category } from '../../components/HomePage/Category';
import { MainSlider } from '../../components/HomePage/MainSlider';

import classes from './HomePage.module.scss';

export const HomePage = () => {
  const {
    products, openModal, error, setError, setOpenModal,
  } = useProductReqHandler();

  const hotPrices = products.sort((a, b) => {
    return b.price - a.price;
  });

  const brandNewModels = products.sort((a, b) => b.year - a.year);

  const hotPricesFirst20 = hotPrices.slice(0, 20);
  const brandNewModels20 = brandNewModels.slice(0, 20);

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
          products={brandNewModels20}
          error={error}
          setError={setError}
        />
      </div>

      <div className={`${classes.container} ${classes.mb}`}>
        <Category />
      </div>

      <div className={`${classes.slider__container} ${classes.mb}`}>
        <SecondarySlider
          title="Hot prices"
          products={hotPricesFirst20}
          error={error}
          setError={setError}
        />
      </div>

      {openModal
        && createPortal(
          <ErrorMessage setOpenModal={setOpenModal} />,
          document.body,
        )}
    </>
  );
};
